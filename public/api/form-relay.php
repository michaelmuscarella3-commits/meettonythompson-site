<?php
/**
 * Website form relay -> GoHighLevel.
 *
 * Every form on meettonythompson.com posts here (JSON body). The submission is
 * cleaned up and forwarded to one GHL "Inbound Webhook" workflow, with
 * `form_name` saying which form it came from. If GHL can't be reached, the
 * submission is emailed to the team instead so no lead is lost.
 *
 * Settings live in form-relay.config.php, OUTSIDE public_html (one folder
 * above it), so the webhook address is never downloadable:
 *
 *   <?php return [
 *     'ghl_webhook_url' => 'https://services.leadconnectorhq.com/hooks/...',
 *     'fallback_email'  => 'info@meettonythompson.com',
 *   ];
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function reply(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['success' => false, 'error' => 'POST only']);
}

// Only accept submissions from this site's own pages.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = strtolower(preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? ''));
if ($origin !== '') {
    $originHost = strtolower(preg_replace('/^www\./', '', (string) parse_url($origin, PHP_URL_HOST)));
    if ($originHost !== $host && !str_starts_with($host, $originHost . ':')) {
        reply(403, ['success' => false, 'error' => 'Forbidden']);
    }
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$in = json_decode((string) $raw, true);
if (!is_array($in)) {
    reply(400, ['success' => false, 'error' => 'Bad request']);
}

// Hidden "bot_field" is invisible to people; bots that fill it get a fake success.
if (trim((string) ($in['bot_field'] ?? '')) !== '') {
    reply(200, ['success' => true]);
}

// At most 5 submissions per visitor (IP) every 10 minutes.
$rateDir = dirname(__DIR__, 2);
if (!is_writable($rateDir)) {
    $rateDir = sys_get_temp_dir();
}
$rateFile = getenv('FORM_RELAY_RATE_FILE') ?: $rateDir . '/tt-form-rate.json';
$fh = @fopen($rateFile, 'c+');
if ($fh && flock($fh, LOCK_EX)) {
    $now = time();
    $hits = json_decode((string) stream_get_contents($fh), true);
    $hits = is_array($hits) ? $hits : [];
    foreach ($hits as $k => $times) {
        $hits[$k] = array_values(array_filter((array) $times, fn($t) => $t > $now - 600));
        if (!$hits[$k]) {
            unset($hits[$k]);
        }
    }
    $ipKey = sha1((string) ($_SERVER['REMOTE_ADDR'] ?? ''));
    $limited = count($hits[$ipKey] ?? []) >= 5;
    if (!$limited) {
        $hits[$ipKey][] = $now;
    }
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
    fclose($fh);
    if ($limited) {
        reply(429, ['success' => false, 'error' => 'Too many submissions. Please try again in a few minutes.']);
    }
}

// ---- Settings ---------------------------------------------------------------
$configFile = getenv('FORM_RELAY_CONFIG') ?: dirname(__DIR__, 2) . '/form-relay.config.php';
if (!is_readable($configFile)) {
    $configFile = __DIR__ . '/form-relay.config.php';
}
$config = is_readable($configFile) ? (include $configFile) : [];
$webhook = is_array($config) ? trim((string) ($config['ghl_webhook_url'] ?? '')) : '';
$fallbackEmail = is_array($config) ? trim((string) ($config['fallback_email'] ?? '')) : '';
if ($fallbackEmail === '') {
    $fallbackEmail = 'info@meettonythompson.com';
}

// ---- Normalize --------------------------------------------------------------
$pick = function (array $keys) use ($in): string {
    foreach ($keys as $k) {
        if (isset($in[$k]) && is_scalar($in[$k]) && trim((string) $in[$k]) !== '') {
            return trim((string) $in[$k]);
        }
    }
    return '';
};

// Which form: ?form=..., else known markers in the body.
$formNames = [
    'Book Tony Form' => 'Book Tony',
    'Inner Circle Application' => 'Join the Inner Circle',
    'footer' => 'Home Contact Form',
    'courses_footer' => 'Courses Contact Form',
    'quiz' => 'Quiz Roadmap',
];
$form = trim((string) ($_GET['form'] ?? ''));
if ($form === '') {
    $marker = $pick(['form_page', 'tier']);
    $form = $formNames[$marker] ?? ($marker !== '' ? $marker : 'Website Form');
}
$form = mb_substr(preg_replace('/[^\p{L}\p{N} &\-]/u', '', $form), 0, 60);

$first = $pick(['first_name', 'firstName', 'first']);
$last = $pick(['last_name', 'lastName', 'last']);
$full = $pick(['full_name', 'name']);
if ($first === '' && $full !== '') {
    $parts = preg_split('/\s+/', $full, 2);
    $first = $parts[0];
    $last = $last !== '' ? $last : ($parts[1] ?? '');
}
$email = $pick(['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    reply(422, ['success' => false, 'error' => 'A valid email is required']);
}
// Two separate opt-ins (carriers require marketing consent on its own box).
// Keep this wording in sync with src/data/smsConsent.json.
$consent = strtolower($pick(['sms_consent'])) === 'yes' ? 'Yes' : 'No';
$marketing = strtolower($pick(['sms_marketing_consent'])) === 'yes' ? 'Yes' : 'No';

$out = [
    'form_name' => $form,
    'first_name' => $first,
    'last_name' => $last,
    'full_name' => trim("$first $last"),
    'email' => $email,
    'phone' => $pick(['phone']),
    'company_name' => $pick(['company']),
    'message' => $pick(['message', 'enquiry']),
    'sms_consent' => $consent,
    'sms_marketing_consent' => $marketing,
    'submitted_at' => gmdate('c'),
    'page_url' => (string) ($_SERVER['HTTP_REFERER'] ?? ''),
    'ip_address' => (string) ($_SERVER['REMOTE_ADDR'] ?? ''),
    'user_agent' => mb_substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 300),
];
if ($consent === 'Yes') {
    $out['sms_consent_text'] = 'I agree to receive non-marketing text messages from Tony Thompson about my inquiry, such as booking confirmations, appointment reminders and customer support replies. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.';
}
if ($marketing === 'Yes') {
    $out['sms_marketing_consent_text'] = 'I agree to receive marketing text messages from Tony Thompson, such as program announcements, event invitations and special offers. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.';
}
// Flag (never block) submissions that look like keyboard-mashing or link spam,
// so the GHL workflow can skip the team notification for them.
$noVowels = fn(string $w) => mb_strlen($w) >= 3 && !preg_match('/[aeiouy]/i', $w);
$reasons = [];
foreach ([$first, $last] as $part) {
    if (preg_match('/^[A-Za-z]+$/', $part) && $noVowels($part)) {
        $reasons[] = 'name looks random';
        break;
    }
}
$words = preg_split('/\s+/', trim($out['message']), -1, PREG_SPLIT_NO_EMPTY);
if (count($words) >= 3 && count(array_filter($words, $noVowels)) * 2 >= count($words)) {
    $reasons[] = 'message looks random';
}
if (preg_match_all('#https?://#i', $out['message']) >= 2) {
    $reasons[] = 'message has several links';
}
$out['likely_spam'] = $reasons ? 'Yes' : 'No';
if ($reasons) {
    $out['spam_reason'] = implode('; ', $reasons);
}

// Everything else the form sent (event date, budget, job title, plan, ...).
$skip = ['first_name', 'firstName', 'first', 'last_name', 'lastName', 'last', 'full_name', 'name',
    'email', 'phone', 'company', 'message', 'enquiry', 'sms_consent', 'sms_marketing_consent', 'form_page', 'bot_field',
    'likely_spam', 'spam_reason'];
foreach ($in as $k => $v) {
    if (in_array($k, $skip, true) || !is_scalar($v) || !preg_match('/^[A-Za-z0-9_]{1,40}$/', (string) $k)) {
        continue;
    }
    $key = strtolower(preg_replace('/([a-z])([A-Z])/', '$1_$2', (string) $k));
    if (!isset($out[$key])) {
        $out[$key] = mb_substr(trim((string) $v), 0, 2000);
    }
}

// ---- Deliver ----------------------------------------------------------------
$delivered = false;
if ($webhook !== '' && (str_starts_with($webhook, 'https://') || getenv('FORM_RELAY_TEST'))) {
    $ch = curl_init($webhook);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
    ]);
    curl_exec($ch);
    $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $delivered = $code >= 200 && $code < 300;
}

if (!$delivered) {
    // Safety net: email the submission to the team.
    $lines = [];
    foreach ($out as $k => $v) {
        $lines[] = str_pad($k . ':', 18) . str_replace(["\r", "\n"], ' ', (string) $v);
    }
    $domain = preg_replace('/:\d+$/', '', $host) ?: 'meettonythompson.com';
    $safeEmail = str_replace(["\r", "\n"], '', $email);
    $headers = "From: Website Forms <noreply@{$domain}>\r\nReply-To: {$safeEmail}\r\nContent-Type: text/plain; charset=UTF-8";
    $subject = ($reasons ? '[Likely spam] ' : '') . "New {$form} submission (GHL delivery failed)";
    $mailer = getenv('FORM_RELAY_TEST_MAILBOX');
    if ($mailer) {
        $delivered = (bool) file_put_contents($mailer, "To: $fallbackEmail\nSubject: $subject\n$headers\n\n" . implode("\n", $lines) . "\n\n", FILE_APPEND);
    } else {
        $delivered = mail($fallbackEmail, $subject, implode("\n", $lines), $headers);
    }
}

reply($delivered ? 200 : 502, ['success' => $delivered]);
