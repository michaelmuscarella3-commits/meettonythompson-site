# Live-site hotfix

Until the rebuilt site replaces it, meettonythompson.com still runs the agency's
compiled bundle, `public_html/js/index-CaJh229O.js`. `patch.mjs` edits a copy of that
file in place to add:

- the SMS consent checkbox to Book Tony, Join the Inner Circle, the Quiz and the
  Newsletter (submissions include `sms_consent: "Yes" | "No"`), plus the Book Tony
  thank-you redirect fix
- the real Chasing Excellence episodes on /podcasts (from `src/data/podcastEpisodes.js`),
  played in an embedded YouTube player, plus newer uploads loaded at runtime from
  `/api/podcast-episodes.php` (upload `public/api/podcast-episodes.php` to `public_html/api/`)

```bash
node tools/live-hotfix/patch.mjs path/to/original/index-CaJh229O.js out/index-CaJh229O.js
```

Every replacement must match exactly once, so the script fails loudly instead of
producing a broken file if the live bundle has changed. Upload the output over
`public_html/js/index-CaJh229O.js` (keep a backup of the original). The server also has a
pre-compressed `index-CaJh229O.js.gz` that it may serve instead, so replace that too:
`gzip -9 -k -n out/index-CaJh229O.js`. The file name must
stay the same: the lazy-loaded legal-page chunks import it by that name.
