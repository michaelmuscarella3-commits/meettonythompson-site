<?php
/**
 * "Chasing Excellence" newsletter issues for the website's Newsletter page.
 *
 *   GET /api/newsletters.php          -> {"issues":[{id,title,date,excerpt,url}]}  (newest first)
 *   GET /api/newsletters.php?id=XYZ   -> one issue as a web page (cleaned email HTML)
 *
 * Issues already published on the site live in /newsletters/<id>.html and are
 * listed by the page itself. This script only adds issues sent AFTER that,
 * read from GoHighLevel with a read-only Private Integration token. Without a
 * token it returns an empty list and the page shows the built-in archive.
 *
 * Settings (same file as the form relay, outside public_html):
 *   'ghl_api_token'   => 'pit-...',               // scope: emails/campaigns.readonly
 *   'ghl_location_id' => 'Qui9ts1Q1SBr3OAtoMQu',
 */

const NAME_PREFIX = 'Chasing Excellence Newsletter |';
const LIST_CACHE_SECONDS = 3600;

/** Turn a sent campaign email into a page that's safe to show publicly. */
function nl_clean_html(string $html): string
{
    $html = preg_replace('#<script\b[^>]*>.*?</script>#is', '', $html);
    // Drop the unsubscribe link (it only works for the person the email was sent to).
    $html = preg_replace('#<a\b[^>]*\{\{\s*unsubscribe_url\s*\}\}[^>]*>.*?</a>#is', '', $html);
    $html = preg_replace('#<a\b[^>]*>(?:(?!</a>).)*?unsubscribe(?:(?!</a>).)*?</a>#is', '', $html);
    // Remove per-subscriber tracking ids, then any other merge tags.
    $html = preg_replace('#contactId=\{\{\s*contact\.id\s*\}\}(&amp;|&)?#i', '', $html);
    $html = preg_replace('#\{\{[^{}]*\}\}#', '', $html);
    // Links open in a new tab instead of inside the reader.
    $base = '<base target="_blank">';
    if (preg_match('#<head\b[^>]*>#i', $html)) {
        $html = preg_replace('#<head\b[^>]*>#i', '$0' . $base, $html, 1);
    } else {
        $html = $base . $html;
    }
    return $html;
}

/** Visible text of the email, one block per line. */
function nl_text(string $html): string
{
    $html = preg_replace('#<(style|script|head)\b[^>]*>.*?</\1>#is', '', $html);
    $html = preg_replace('#\{\{[^{}]*\}\}#', '', $html);
    $html = preg_replace('#<br\s*/?>|</(p|h\d|div|tr|li|td)>#i', "\n", $html);
    $text = html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $lines = array_filter(array_map(fn($l) => ltrim(trim(preg_replace('/\s+/u', ' ', $l)), ",;: "), explode("\n", $text)), fn($l) => $l !== '');
    return implode("\n", $lines);
}

/** Short summary: the opening of "This week's journal", else the first real paragraph. */
function nl_excerpt(string $html, string $fallback = ''): string
{
    $lines = explode("\n", nl_text($html));
    $start = 0;
    foreach ($lines as $i => $line) {
        if (preg_match('/^this week.s (journal|newsletter)/iu', $line)) {
            $start = $i + 1;
            break;
        }
    }
    $out = '';
    for ($i = $start; $i < count($lines) && mb_strlen($out) < 160; $i++) {
        $l = $lines[$i];
        // Real sentences only; skips buttons like "Get A Complimentary Strategy Session".
        $sentence = preg_match('/[.!?…"”]$/u', $l) || mb_strlen($l) >= 60;
        if (mb_strlen($l) < 25 || !$sentence || preg_match('/^(learn more|read more|→|↳|\d+\.)/iu', $l)) {
            continue;
        }
        $out = trim($out . ' ' . $l);
    }
    if ($out === '') {
        $out = trim(preg_replace('/^Chasing Excellence( Newsletter)?:\s*/iu', '', $fallback));
    }
    if (mb_strlen($out) > 240) {
        $out = preg_replace('/\s+\S*$/u', '', mb_substr($out, 0, 237)) . '…';
    }
    return $out;
}

/** "Chasing Excellence Newsletter | Trust" -> "Trust"; ALL-CAPS names fall back to the subject. */
function nl_title(string $name, string $subject): string
{
    $title = trim(str_starts_with($name, NAME_PREFIX) ? substr($name, strlen(NAME_PREFIX)) : $name);
    if ($title === '' || ($title === mb_strtoupper($title) && preg_match('/\p{L}/u', $title))) {
        $title = trim(preg_replace('/^Chasing Excellence( Newsletter)?:\s*/iu', '', $subject));
    }
    return rtrim($title, '.');
}

// ---------------------------------------------------------------------------
// CLI: build the static archive shipped with the site.
//   php newsletters.php --build-archive manifest.json rawdir outdir
// manifest: [[id, name, subject, "YYYY-MM-DD", contentUrl], ...]
if (PHP_SAPI === 'cli') {
    if (($argv[1] ?? '') === '--build-archive') {
        [, , $manifest, $raw, $out] = $argv;
        @mkdir($out, 0755, true);
        $index = [];
        foreach (json_decode(file_get_contents($manifest), true) as [$id, $name, $subject, $date]) {
            $html = file_get_contents("$raw/$id.html");
            file_put_contents("$out/$id.html", nl_clean_html($html));
            $index[] = ['id' => $id, 'title' => nl_title($name, $subject), 'date' => $date,
                'excerpt' => nl_excerpt($html, $subject), 'url' => "/newsletters/$id.html"];
        }
        file_put_contents("$out/index.json", json_encode($index, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n");
        fwrite(STDERR, count($index) . " issues written to $out\n");
    }
    return;
}

// ---------------------------------------------------------------------------
// Web
$configFile = getenv('FORM_RELAY_CONFIG') ?: dirname(__DIR__, 2) . '/form-relay.config.php';
if (!is_readable($configFile)) {
    $configFile = __DIR__ . '/form-relay.config.php';
}
$config = is_readable($configFile) ? (include $configFile) : [];
$token = is_array($config) ? trim((string) ($config['ghl_api_token'] ?? '')) : '';
$location = is_array($config) ? trim((string) ($config['ghl_location_id'] ?? 'Qui9ts1Q1SBr3OAtoMQu')) : '';
$apiBase = getenv('GHL_API_BASE') ?: 'https://services.leadconnectorhq.com';

$cacheDir = dirname(__DIR__, 2);
if (!is_writable($cacheDir)) {
    $cacheDir = sys_get_temp_dir();
}
$cacheDir = (getenv('NEWSLETTER_CACHE_DIR') ?: $cacheDir . '/tt-newsletters');
@mkdir($cacheDir, 0755, true);
$archiveDir = dirname(__DIR__) . '/newsletters';

function nl_get(string $url, array $headers = []): ?string
{
    $ch = curl_init($url);
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10, CURLOPT_HTTPHEADER => $headers]);
    $body = curl_exec($ch);
    $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return ($body !== false && $code >= 200 && $code < 300) ? (string) $body : null;
}

function nl_api(string $path): ?array
{
    global $apiBase, $token;
    $body = nl_get($apiBase . $path, ['Authorization: Bearer ' . $token, 'Version: 2021-07-28', 'Accept: application/json']);
    $data = $body === null ? null : json_decode($body, true);
    return is_array($data) ? $data : null;
}

/** Fetch, clean and cache one issue; returns [html, meta] or null. */
function nl_issue(string $id): ?array
{
    global $cacheDir, $location, $token;
    $file = "$cacheDir/$id.json";
    if (is_readable($file)) {
        return json_decode(file_get_contents($file), true);
    }
    if ($token === '') {
        return null;
    }
    $c = nl_api('/emails/locations/' . rawurlencode($location) . '/campaigns/emails/' . rawurlencode($id));
    $c = $c['campaign'] ?? $c;
    if (!is_array($c) || !str_starts_with((string) ($c['name'] ?? ''), NAME_PREFIX) || empty($c['editorContentUrl'])) {
        return null;
    }
    $raw = nl_get((string) $c['editorContentUrl']);
    if ($raw === null) {
        return null;
    }
    $issue = [
        'html' => nl_clean_html($raw),
        'meta' => ['id' => $id, 'title' => nl_title((string) $c['name'], (string) ($c['subject'] ?? '')),
            'date' => substr((string) ($c['createdAt'] ?? ''), 0, 10),
            'excerpt' => nl_excerpt($raw, (string) ($c['subject'] ?? '')),
            'url' => '/api/newsletters.php?id=' . rawurlencode($id)],
    ];
    file_put_contents($file, json_encode($issue, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
    return $issue;
}

// One issue as a page
if (isset($_GET['id'])) {
    $id = preg_replace('/[^A-Za-z0-9]/', '', (string) $_GET['id']);
    if (is_readable("$archiveDir/$id.html")) {
        header('Location: /newsletters/' . $id . '.html', true, 302);
        exit;
    }
    $issue = $id !== '' ? nl_issue($id) : null;
    if (!$issue) {
        http_response_code(404);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Issue not found.';
        exit;
    }
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: public, max-age=3600');
    echo $issue['html'];
    exit;
}

// List of issues newer than the built-in archive
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=900');
$listFile = "$cacheDir/list.json";
$list = is_readable($listFile) ? json_decode(file_get_contents($listFile), true) : null;
if (is_array($list) && time() - (int) ($list['fetched'] ?? 0) < LIST_CACHE_SECONDS) {
    echo json_encode(['issues' => $list['issues']], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
$issues = is_array($list) ? ($list['issues'] ?? []) : [];
if ($token !== '') {
    $data = nl_api('/emails/locations/' . rawurlencode($location) . '/campaigns/emails?limit=20&status=sent&search=' . rawurlencode('Chasing Excellence Newsletter'));
    if (is_array($data) && isset($data['campaigns']) && is_array($data['campaigns'])) {
        $issues = [];
        foreach ($data['campaigns'] as $c) {
            $id = preg_replace('/[^A-Za-z0-9]/', '', (string) ($c['id'] ?? ''));
            if ($id === '' || ($c['status'] ?? '') !== 'sent' || !str_starts_with((string) ($c['name'] ?? ''), NAME_PREFIX)
                || is_readable("$archiveDir/$id.html")) {
                continue;
            }
            $issue = nl_issue($id);
            if ($issue) {
                $issues[] = $issue['meta'];
            }
        }
    }
}
file_put_contents($listFile, json_encode(['fetched' => time(), 'issues' => $issues], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
echo json_encode(['issues' => $issues], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
