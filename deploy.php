<?php
/**
 * Tzweed — GitHub webhook auto-deploy endpoint.
 * Place in public_html. Triggered by GitHub on each push to `main`.
 * The secret is read from ~/.tzweed_webhook_secret (OUTSIDE the web root),
 * so it is never committed to the public repo.
 */

$home       = dirname(__DIR__);               // /home/USER  (deploy.php lives in /home/USER/public_html)
$secretFile = $home . '/.tzweed_webhook_secret';
$repo       = $home . '/repositories/tzweed';
$pub        = $home . '/public_html';

$secret  = is_readable($secretFile) ? trim(file_get_contents($secretFile)) : '';
$payload = file_get_contents('php://input');
$sig     = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

if ($secret === '' || $sig === '' ||
    !hash_equals('sha256=' . hash_hmac('sha256', $payload, $secret), $sig)) {
    http_response_code(403);
    exit("Forbidden\n");
}

// Only deploy on push to main
$event = $_SERVER['HTTP_X_GITHUB_EVENT'] ?? '';
if ($event === 'ping') { echo "pong\n"; exit; }
$data = json_decode($payload, true);
if (isset($data['ref']) && $data['ref'] !== 'refs/heads/main') {
    echo "ignored: {$data['ref']}\n"; exit;
}

if (!function_exists('shell_exec')) {
    http_response_code(500);
    exit("shell_exec disabled on this host — use the cron method instead.\n");
}

$out   = [];
$out[] = shell_exec('cd ' . escapeshellarg($repo) . ' && git pull 2>&1');
$out[] = shell_exec('cd ' . escapeshellarg($repo) .
    ' && /bin/cp -f index.html terms.html privacy.html deploy.php ' . escapeshellarg($pub) . '/ 2>&1' .
    ' && /bin/cp -Rf css js assets ' . escapeshellarg($pub) . '/ 2>&1');

http_response_code(200);
echo "Deployed at " . date('c') . "\n" . implode("\n", array_filter($out));
