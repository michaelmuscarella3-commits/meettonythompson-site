// Sets the page title, description, canonical URL and social tags for the
// current route (data: src/data/seo.json). The site is a single-page app, so
// without this every URL would share the homepage's tags and canonical.
// Kept dependency-free: tools/live-hotfix/patch.mjs also injects this file
// into the live site's compiled bundle.
export function applySeo(path, seo) {
  var p = path.replace(/\/+$/, "") || "/";
  // This page manages its own title and robots tag; only its URL tags are set here.
  var own = p === "/sms-approval";
  var page = seo.pages[p];
  var known = !!page || seo.noindex.indexOf(p) >= 0;
  var info = page && page.title ? page : seo.default;
  var title = known ? info.title : "Page Not Found | Tony Thompson";
  var description = info.description;
  var url = seo.siteUrl + ((page && page.canonical) || p).replace(/^\/$/, "/");
  var noindex = !known || seo.noindex.indexOf(p) >= 0;

  function tag(selector, create) {
    var el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement(create.el);
      for (var k in create.attrs) el.setAttribute(k, create.attrs[k]);
      document.head.appendChild(el);
    }
    return el;
  }
  function meta(attr, name, content) {
    var attrs = {};
    attrs[attr] = name;
    tag("meta[" + attr + '="' + name + '"]', {
      el: "meta",
      attrs: attrs,
    }).setAttribute("content", content);
  }

  tag('link[rel="canonical"]', {
    el: "link",
    attrs: { rel: "canonical" },
  }).setAttribute("href", url);
  meta("property", "og:url", url);
  if (own) return;

  document.title = title;
  meta("name", "description", description);
  meta("property", "og:title", title);
  meta("property", "og:description", description);
  meta("name", "twitter:title", title);
  meta("name", "twitter:description", description);

  var robots = document.getElementById("tt-robots");
  if (noindex) {
    if (!robots) {
      robots = document.createElement("meta");
      robots.id = "tt-robots";
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, follow";
  } else if (robots) {
    robots.remove();
  }
}
