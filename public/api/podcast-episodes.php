<?php
/**
 * Latest "Chasing Excellence with Tony Thompson" episodes, read from the
 * channel's public YouTube feed (no API key needed).
 *
 * GET /api/podcast-episodes.php  ->  {"episodes":[{id,title,episode,publishedAt,desc}], "updated": ...}
 *
 * - The feed is cached for an hour, so YouTube is asked at most once an hour.
 * - Shorts are left out (checked once per video and remembered).
 * - If YouTube can't be reached, the last good copy is served; the page also
 *   keeps its built-in episode list, so it never ends up empty.
 */

const CHANNEL_ID = 'UCEoO80ekK_NMk7BDOC0Q3uQ';
const CACHE_SECONDS = 3600;
// Videos that should never be listed as episodes (e.g. the channel trailer).
const EXCLUDE_IDS = ['inckXZDqfaM'];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=900');

$feedUrl = getenv('PODCAST_FEED_URL') ?: 'https://www.youtube.com/feeds/videos.xml?channel_id=' . CHANNEL_ID;
$checkShorts = getenv('PODCAST_SKIP_SHORTS_CHECK') ? false : true;

// Cache outside public_html when possible, so it isn't downloadable.
$cacheDir = dirname(__DIR__, 2);
if (!is_writable($cacheDir)) {
    $cacheDir = sys_get_temp_dir();
}
$cacheFile = getenv('PODCAST_CACHE_FILE') ?: $cacheDir . '/tt-podcast-cache.json';

$cache = is_readable($cacheFile) ? json_decode((string) file_get_contents($cacheFile), true) : null;
if (!is_array($cache)) {
    $cache = ['fetched' => 0, 'episodes' => [], 'shorts' => []];
}

if (time() - (int) $cache['fetched'] < CACHE_SECONDS && $cache['episodes']) {
    respond($cache);
}

function http_get(string $url, bool $headOnly = false): array
{
    if (function_exists('curl_init') && !str_starts_with($url, 'file://')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_NOBODY => $headOnly,
            CURLOPT_TIMEOUT => 8,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (meettonythompson.com podcast feed)',
        ]);
        $body = curl_exec($ch);
        $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        return [$code, $body === false ? '' : (string) $body];
    }
    $body = @file_get_contents($url);
    return [$body === false ? 0 : 200, (string) $body];
}

function respond(array $cache): void
{
    echo json_encode([
        'episodes' => $cache['episodes'],
        'updated' => gmdate('c', (int) $cache['fetched']),
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function summary(string $description): string
{
    foreach (preg_split('/\R/u', $description) as $line) {
        $line = trim($line);
        if ($line !== '') {
            if (mb_strlen($line) > 320) {
                $cut = mb_substr($line, 0, 317);
                $line = preg_replace('/\s+\S*$/u', '', $cut) . '…';
            }
            return $line;
        }
    }
    return '';
}

[$code, $xml] = http_get($feedUrl);
$feed = $code === 200 ? @simplexml_load_string($xml) : false;
if ($feed === false) {
    // Keep serving the last good copy, and wait 10 minutes before asking again.
    if ($cache['episodes']) {
        $cache['fetched'] = time() - CACHE_SECONDS + 600;
        @file_put_contents($cacheFile, json_encode($cache, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);
    }
    respond($cache);
}

$episodes = [];
foreach ($feed->entry as $entry) {
    $yt = $entry->children('http://www.youtube.com/xml/schemas/2015');
    $media = $entry->children('http://search.yahoo.com/mrss/');
    $id = (string) $yt->videoId;
    if ($id === '' || in_array($id, EXCLUDE_IDS, true)) {
        continue;
    }
    if ($checkShorts) {
        if (!array_key_exists($id, $cache['shorts'])) {
            // youtube.com/shorts/<id> answers 200 for a Short and redirects otherwise.
            [$status] = http_get('https://www.youtube.com/shorts/' . $id, true);
            if ($status > 0) { // only remember real answers, not network failures
                $cache['shorts'][$id] = $status === 200;
            }
        }
        if (!empty($cache['shorts'][$id])) {
            continue;
        }
    }
    $title = trim((string) $entry->title);
    $number = null;
    if (preg_match('/\s*\|\s*Ep\s*(\d+)\s*$/i', $title, $m)) {
        $number = (int) $m[1];
        $title = trim(substr($title, 0, -strlen($m[0])));
    }
    $episodes[] = [
        'id' => $id,
        'title' => $title,
        'episode' => $number,
        'publishedAt' => substr((string) $entry->published, 0, 10),
        'desc' => summary((string) $media->group->description),
    ];
}

$cache['fetched'] = time();
$cache['episodes'] = $episodes;
@file_put_contents($cacheFile, json_encode($cache, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);
respond($cache);
