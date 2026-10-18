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
function nl_clean_html(string $html, ?array $meta = null): string
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
    if ($meta) {
        // Proper page title, description and canonical for search engines.
        $esc = fn($v) => htmlspecialchars((string) $v, ENT_QUOTES, 'UTF-8');
        $html = preg_replace('#<title\b[^>]*>.*?</title>#is', '', $html);
        $base .= '<title>' . $esc($meta['title'] . ' | Chasing Excellence Newsletter') . '</title>'
            . '<meta name="description" content="' . $esc($meta['excerpt']) . '">'
            . '<link rel="canonical" href="https://meettonythompson.com' . $esc($meta['url']) . '">';
    }
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
            $meta = ['id' => $id, 'title' => nl_title($name, $subject), 'date' => $date,
                'excerpt' => nl_excerpt($html, $subject), 'url' => "/newsletters/$id.html"];
            file_put_contents("$out/$id.html", nl_clean_html($html, $meta));
            $index[] = $meta;
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

/** GET a GHL API path; returns [http code, decoded JSON or null]. */
function nl_call(string $path): array
{
    global $apiBase, $token;
    $ch = curl_init($apiBase . $path);
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $token, 'Version: 2021-07-28', 'Accept: application/json']]);
    $body = curl_exec($ch);
    $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $data = is_string($body) ? json_decode($body, true) : null;
    return [$code, is_array($data) ? $data : null];
}

/**
 * GHL serves sent email campaigns at different addresses depending on the
 * account, so try each known one. Returns [path => http code] when $probe.
 */
function nl_list_paths(): array
{
    global $location;
    $loc = rawurlencode($location);
    return [
        'campaigns' => "/emails/locations/$loc/campaigns/emails?limit=20&status=sent&search=" . rawurlencode('Chasing Excellence Newsletter'),
        'schedule' => "/emails/schedule?locationId=$loc&limit=20",
    ];
}

/** First http(s) URL to the email's HTML found anywhere in a campaign record. */
function nl_content_url(array $c): string
{
    foreach (['editorContentUrl', 'templateDataDownloadUrl', 'downloadUrl', 'htmlUrl', 'templateUrl'] as $k) {
        if (!empty($c[$k]) && is_string($c[$k]) && str_starts_with($c[$k], 'http')) {
            return $c[$k];
        }
    }
    $found = '';
    array_walk_recursive($c, function ($v) use (&$found) {
        if ($found === '' && is_string($v) && preg_match('#^https://firebasestorage\.googleapis\.com/.+\.html#', $v)) {
            $found = $v;
        }
    });
    return $found;
}

/** Normalise a campaign record from either API shape. */
function nl_norm(array $c): array
{
    $c = $c['campaign'] ?? $c;
    return [
        'id' => preg_replace('/[^A-Za-z0-9]/', '', (string) ($c['id'] ?? $c['_id'] ?? '')),
        'name' => (string) ($c['name'] ?? $c['campaignName'] ?? ''),
        'subject' => (string) ($c['subject'] ?? ''),
        'status' => strtolower((string) ($c['status'] ?? 'sent')),
        'date' => substr((string) ($c['createdAt'] ?? $c['dateAdded'] ?? ''), 0, 10),
        'url' => nl_content_url($c),
    ];
}

/** Sent "Chasing Excellence Newsletter | ..." campaigns, newest first. */
function nl_campaigns(): ?array
{
    foreach (nl_list_paths() as $path) {
        // Read every page: the account has more campaigns than one page holds,
        // and the newest may be on the last page.
        $out = [];
        $seen = [];
        $ok = false;
        for ($page = 0; $page < 50; $page++) {
            [$code, $data] = nl_call($path . '&offset=' . ($page * 20));
            if ($code < 200 || $code >= 300 || !$data) {
                break;
            }
            $rows = $data['campaigns'] ?? $data['schedules'] ?? $data['data'] ?? null;
            if (!is_array($rows)) {
                break;
            }
            $ok = true;
            $new = 0;
            foreach ($rows as $row) {
                $c = is_array($row) ? nl_norm($row) : null;
                if (!$c || $c['id'] === '' || isset($seen[$c['id']])) {
                    continue;
                }
                $seen[$c['id']] = true;
                $new++;
                if (str_starts_with($c['name'], NAME_PREFIX)
                    && in_array($c['status'], ['sent', 'complete', 'completed', 'finished', 'delivered'], true)) {
                    $out[] = $c;
                }
            }
            // Stop at the last page (or if the API ignores offset and repeats itself).
            if ($new === 0 || count($rows) < 20) {
                break;
            }
        }
        if ($ok) {
            usort($out, fn($a, $b) => strcmp($b['date'], $a['date']));
            return $out;
        }
    }
    return null;
}

/** Fetch, clean and cache one issue; returns [html, meta] or null. */
function nl_issue(string $id, ?array $c = null): ?array
{
    global $cacheDir, $location, $token;
    $file = "$cacheDir/$id.json";
    if (is_readable($file)) {
        return json_decode(file_get_contents($file), true);
    }
    if ($token === '') {
        return null;
    }
    if (!$c || $c['url'] === '') {
        $loc = rawurlencode($location);
        foreach (["/emails/locations/$loc/campaigns/emails/" . rawurlencode($id), '/emails/schedule/' . rawurlencode($id) . "?locationId=$loc"] as $path) {
            [$code, $data] = nl_call($path);
            if ($code >= 200 && $code < 300 && $data) {
                $c = nl_norm($data['schedule'] ?? $data);
                break;
            }
        }
    }
    if (!$c || !str_starts_with($c['name'], NAME_PREFIX) || $c['url'] === '') {
        return null;
    }
    $raw = nl_get($c['url']);
    if ($raw === null) {
        return null;
    }
    $meta = ['id' => $id, 'title' => nl_title($c['name'], $c['subject']),
        'date' => $c['date'],
        'excerpt' => nl_excerpt($raw, $c['subject']),
        'url' => '/api/newsletters.php?id=' . rawurlencode($id)];
    $issue = ['html' => nl_clean_html($raw, $meta), 'meta' => $meta];
    file_put_contents($file, json_encode($issue, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
    return $issue;
}

// Health check: /api/newsletters.php?status  (never shows the token itself)
if (isset($_GET['status'])) {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    if ($token === '') {
        echo json_encode(['token' => 'missing', 'ghl' => 'not checked']);
        exit;
    }
    $describe = fn(int $code) => match (true) {
        $code >= 200 && $code < 300 => 'ok',
        $code === 401 => 'token rejected (expired, rotated or mistyped)',
        $code === 403 => 'token lacks permission for this',
        $code === 404 => 'not available',
        $code === 0 => 'GoHighLevel unreachable from the server',
        default => 'error ' . $code,
    };
    $checks = [];
    foreach (nl_list_paths() as $name => $path) {
        $checks[$name] = $describe(nl_call($path)[0]);
    }
    $list = nl_campaigns();
    echo json_encode(['token' => 'set', 'ghl' => $list === null ? 'no working address' : 'ok',
        'issues_found' => $list === null ? 0 : count($list),
        'newest_issue' => $list ? $list[0]['date'] . ' ' . trim(substr($list[0]['name'], strlen(NAME_PREFIX))) : '',
        'checks' => $checks], JSON_UNESCAPED_UNICODE);
    exit;
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
    $campaigns = nl_campaigns();
    if ($campaigns !== null) {
        $issues = [];
        foreach ($campaigns as $c) {
            if (is_readable("$archiveDir/{$c['id']}.html")) {
                continue;
            }
            $issue = nl_issue($c['id'], $c);
            if ($issue) {
                $issues[] = $issue['meta'];
            }
        }
    }
}
file_put_contents($listFile, json_encode(['fetched' => time(), 'issues' => $issues], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
echo json_encode(['issues' => $issues], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
