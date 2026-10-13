<?php
// Settings for public_html/api/form-relay.php.
// Upload this file to your HOME folder in cPanel (the folder that CONTAINS
// public_html), not inside public_html, so nobody can download it.
return [
    // Paste the URL from your GoHighLevel workflow's "Inbound Webhook" trigger.
    'ghl_webhook_url' => 'PASTE_GHL_WEBHOOK_URL_HERE',

    // If GHL ever can't be reached, submissions are emailed here instead.
    'fallback_email' => 'info@meettonythompson.com',

    // Newsletter page: lets the site list new "Chasing Excellence Newsletter"
    // campaigns automatically. Create a Private Integration in GHL (Settings ->
    // Private Integrations) with ONLY the "View Email Campaigns"
    // (emails/campaigns.readonly) permission and paste its token here.
    // Leave empty to show only the issues stored on the site.
    'ghl_api_token' => '',
    'ghl_location_id' => 'Qui9ts1Q1SBr3OAtoMQu', // Sales Growth Platform sub-account
];
