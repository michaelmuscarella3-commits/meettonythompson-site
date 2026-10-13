// Builds public/sitemap.xml from src/data/seo.json (indexable pages) and
// src/data/newsletterArchive.json (stored newsletter issues).
//   node tools/sitemap.mjs
import fs from "fs";

const read = (p) => JSON.parse(fs.readFileSync(new URL(p, import.meta.url), "utf8"));
const seo = read("../src/data/seo.json");
const issues = read("../src/data/newsletterArchive.json");
const today = new Date().toISOString().slice(0, 10);
const latestIssue = issues.map((i) => i.date).sort().pop() || today;

const priority = { "/": "1.0", "/book-tony": "0.9", "/about-tony": "0.8", "/podcasts": "0.8", "/newsletter": "0.8" };
const pages = Object.entries(seo.pages)
  .filter(([path, p]) => p.title && !p.canonical && !seo.noindex.includes(path))
  .map(([path]) => ({
    loc: seo.siteUrl + path,
    lastmod: path === "/newsletter" ? latestIssue : today,
    priority: priority[path] || (["/privacy-policy", "/terms", "/cookie-policy", "/disclaimer"].includes(path) ? "0.2" : "0.6"),
  }));
const issuePages = issues.map((i) => ({ loc: seo.siteUrl + i.url, lastmod: i.date, priority: "0.5" }));

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  [...pages, ...issuePages]
    .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`)
    .join("\n") +
  "\n</urlset>\n";
fs.writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${pages.length} pages + ${issuePages.length} newsletter issues`);
