import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `npm run build` → the real site, served from the web root (dist/).
// `npm run build:staging` → a test copy served from /preview/ on the same
// server (dist-staging/). Images and videos are not copied into the test
// copy: it uses the ones already at /assets and /videos on the live site.
const STAGING_BASE = "/preview/";

const stagingFiles = {
  name: "staging-files",
  apply: "build",
  transformIndexHtml: (html) =>
    html.replace(
      "<head>",
      '<head>\n    <meta name="robots" content="noindex, nofollow" />',
    ),
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: ".htaccess",
      source: `# Send every URL under ${STAGING_BASE} to the app.
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase ${STAGING_BASE}
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [L]
</IfModule>
`,
    });
  },
};

export default defineConfig(({ mode }) => {
  const staging = mode === "staging";
  return {
    base: staging ? STAGING_BASE : "/",
    plugins: [react(), staging && stagingFiles],
    build: {
      // Keep the same output folder names the live server already uses.
      assetsDir: "js",
      outDir: staging ? "dist-staging" : "dist",
      copyPublicDir: !staging,
    },
  };
});
