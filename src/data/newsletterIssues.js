import ARCHIVE from "./newsletterArchive.json";

// "Chasing Excellence" newsletter issues. Past issues are stored on the site
// (public/newsletters/<id>.html, list in newsletterArchive.json). Issues sent
// after that are listed by public/api/newsletters.php, which reads them from
// GoHighLevel once an hour (needs a read-only GHL token in the server config).
export const NEWSLETTER_ARCHIVE = ARCHIVE;
export const LATEST_ISSUES_URL = "/api/newsletters.php";

export const formatIssueDate = (date) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function mergeIssues(archive, latest) {
  const known = new Set(archive.map((e) => e.id));
  const added = latest.filter(
    (e) => e && e.id && e.title && e.url && !known.has(e.id),
  );
  if (!added.length) return archive;
  return [...added, ...archive].sort((a, b) => b.date.localeCompare(a.date));
}

export async function fetchLatestIssues() {
  const res = await fetch(LATEST_ISSUES_URL, { cache: "no-cache" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.issues) ? data.issues : [];
}
