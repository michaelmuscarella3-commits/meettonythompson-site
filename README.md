# meettonythompson.com

Source code for [meettonythompson.com](https://meettonythompson.com), rebuilt from the
live site's compiled files so it can be edited and hosted anywhere.

Built with React 18, Vite, Tailwind CSS 3, Framer Motion, GSAP and Lenis (smooth scroll).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Where things are

| What | File |
|---|---|
| Page list / URLs | `src/App.jsx` |
| Home page sections | `src/pages/Home.jsx` → `src/components/home/*` |
| Menu | `src/components/layout/Navbar.jsx` |
| Contact section + form (home page) | `src/components/layout/ContactSection.jsx` |
| Cookie banner | `src/components/layout/CookieBanner.jsx` |
| About Tony page sections | `src/pages/AboutTony.jsx` → `src/components/about/*` |
| Other pages | `src/pages/*.jsx` (one file per page) |
| Podcast episodes (from YouTube) | `src/data/podcastEpisodes.js` |
| Quiz questions and results | `src/components/quiz/quizData.jsx` |
| Site-wide styles | `src/styles/custom.css`, `tailwind.config.js` |
| Images, videos, PDF | `public/assets`, `public/videos` (see `public/assets/README.md`) |

Text on the site lives directly in these files. Search for the words you want to change
and edit them in place.

## Forms

The forms post to the same places as the original site:

- **Book Tony** and **Join the Inner Circle** → Google Apps Script web apps (URLs in
  `src/pages/BookTony.jsx` and `src/pages/JoinInnerCircle.jsx`).
- **Newsletter, contact, footer and quiz sign-ups** → `/api/cc-add-contact.php` on the same
  server, which adds the contact to Constant Contact. That PHP code lives on the server
  (`public_html/api`) and is **not** in this repo, because it holds credentials.

## Deploying to cPanel

1. `npm run build`
2. Upload the contents of `dist/` into `public_html/`. Don't delete `public_html/api/`
   or the `cc-*.php` files; the forms need them.
3. Make sure `public_html/.htaccess` sends unknown URLs to `index.html`
   (see `deploy/htaccess.example`), so links like `/book-tony` work on refresh.

## Test copy at /preview (try it on the real server first)

`npm run build:staging` builds a copy of the site that runs from
`meettonythompson.com/preview/` without touching the live site. It's small (about 2 MB)
because it reuses the images and videos already on the server. Search engines are told
not to index it.

1. `npm run build:staging` (output in `dist-staging/`, including a hidden `.htaccess`)
2. Zip the **contents** of `dist-staging/` (not the folder itself).
3. In cPanel File Manager, open `public_html`, create a folder named `preview`, open it,
   **Upload** the zip, then **Extract** it there and delete the zip.
4. Visit `https://meettonythompson.com/preview/`.

Forms in the test copy are real: they send to the same Google Sheets and Constant Contact
as the live site, so mark test submissions clearly (e.g. "TEST" as the name).

To remove the test copy, delete the `public_html/preview` folder.

## Migration status

This is a faithful copy of the live site. Code was recovered from the minified build,
so some variable names inside components are still short (`e`, `t`, `n`). Component and
file names are readable, and they can be renamed further as pages get edited.

Still to do:

- Copy the media files from the server into `public/` (see `public/assets/README.md`).
- The legal pages (Privacy, Terms, Cookie Policy, Disclaimer) show placeholders until
  their text is recovered from the server's `js/PrivacyPolicy-*.js`, `js/Terms-*.js`,
  `js/CookiePolicy-*.js` and `js/Disclaimer-*.js` files.
- `src/styles/legacy-utilities.css` holds compiled classes the current code doesn't use;
  prune it once every page is verified.
