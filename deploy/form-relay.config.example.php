<?php
// Settings for public_html/api/form-relay.php.
// Upload this file to your HOME folder in cPanel (the folder that CONTAINS
// public_html), not inside public_html, so nobody can download it.
return [
    // Paste the URL from your GoHighLevel workflow's "Inbound Webhook" trigger.
    'ghl_webhook_url' => 'PASTE_GHL_WEBHOOK_URL_HERE',

    // If GHL ever can't be reached, submissions are emailed here instead.
    'fallback_email' => 'info@meettonythompson.com',
];
