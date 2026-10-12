// Prefixes an internal path with the folder the site is deployed under
// (Vite's `base`). On the live site that's "/", so paths are unchanged; in the
// /preview/ test build "/terms" becomes "/preview/terms".
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export const sitePath = (path) =>
  path.startsWith("/") && !path.startsWith("//") ? BASE + path : path;
