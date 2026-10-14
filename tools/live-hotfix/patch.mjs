// Patches the live site's compiled bundle (index-CaJh229O.js) in place:
// 1) SMS consent checkbox on Book Tony + thank-you redirect fix
// 2) Real Chasing Excellence episodes on /podcasts, played via YouTube embed
import fs from "fs";
import { EPISODES } from "../../src/data/podcastEpisodes.js";
const SEO = JSON.parse(fs.readFileSync(new URL("../../src/data/seo.json", import.meta.url), "utf8"));
// applySeo() from the rebuilt site, renamed for injection into the bundle.
const APPLY_SEO = fs
  .readFileSync(new URL("../../src/utils/applySeo.js", import.meta.url), "utf8")
  .replace(/^\/\/.*\n/gm, "")
  .replace("export function applySeo(", "function TTApplySeo(");
if (!APPLY_SEO.includes("function TTApplySeo(")) throw new Error("applySeo not found");
const NEWSLETTER_ARCHIVE = JSON.parse(
  fs.readFileSync(new URL("../../src/data/newsletterArchive.json", import.meta.url), "utf8"),
);
const [, , SRC, OUT] = process.argv;
let s = fs.readFileSync(SRC, "utf8");
const once = (a, b) => {
  const n = s.split(a).length - 1;
  if (n !== 1) throw new Error(`expected 1 match, got ${n}: ${a.slice(0, 80)}`);
  s = s.replace(a, () => b);
};
const J = JSON.stringify;
const SGP_URL = "https://info.meettonythompson.com/sgp";

// ---------- 1. Book Tony ----------
once('message:n.message.value.trim(),form_page:"Book Tony Form"',
  'message:n.message.value.trim(),sms_consent:n.sms_consent.checked?"Yes":"No",form_page:"Book Tony Form"');
once('window.location.href="/tony-thompson-spmn-vital/thank-you"', 'window.location.href="/thank-you"');
// Shared consent checkbox, added once as a top-level function (hoisted).
const link = (href, text) =>
  `X.jsx("a",{href:${J(href)},target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-white",style:{color:"#e8b4fe"},children:${J(text)}})`;
const helper =
  `function TTSmsConsent({className:c=""}){return X.jsxs("label",{className:"flex items-start gap-4 cursor-pointer text-left "+c,children:[` +
  `X.jsx("input",{type:"checkbox",name:"sms_consent",value:"yes",className:"mt-1 shrink-0 cursor-pointer",style:{width:20,height:20,accentColor:"#9b26b6"}}),` +
  `X.jsxs("span",{className:"text-sm leading-relaxed text-white/70",style:{textTransform:"none",letterSpacing:"normal",fontWeight:400},children:[` +
  J("By checking this box, I agree to receive SMS text messages from Meet Tony Thompson, including appointment reminders, customer support updates, and promotional offers. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe or HELP for assistance. View our ") +
  `,${link("/privacy-policy", "Privacy Policy")}," and ",${link("/terms", "Terms")},"."]})]})}`;
const consent = (cls = "") => `X.jsx(TTSmsConsent,{className:${J(cls)}}),`;
once('X.jsx("button",{type:"submit",disabled:e,className:"px-12 py-4 rounded-xl',
  consent() + 'X.jsx("button",{type:"submit",disabled:e,className:"px-12 py-4 rounded-xl');

// Join the Inner Circle
once('message:r.message.value.trim(),form_page:"Inner Circle Application"',
  'message:r.message.value.trim(),sms_consent:r.sms_consent&&r.sms_consent.checked?"Yes":"No",form_page:"Inner Circle Application"');
once('X.jsxs("div",{className:"pt-4",children:[X.jsx("button",{type:"submit",disabled:t,className:"w-full py-5',
  consent() + 'X.jsxs("div",{className:"pt-4",children:[X.jsx("button",{type:"submit",disabled:t,className:"w-full py-5');

// Quiz contact step (state-driven form; read the checkbox from the page)
once('phone:a.phone,tier:"quiz"',
  'phone:a.phone,sms_consent:(document.querySelector(\'input[name="sms_consent"]\')||{}).checked?"Yes":"No",tier:"quiz"');
once('X.jsx("div",{className:"pt-8",children:X.jsx(mI,{className:"w-full",children:X.jsx("button",{type:"submit",disabled:u',
  consent("pt-2") + 'X.jsx("div",{className:"pt-8",children:X.jsx(mI,{className:"w-full",children:X.jsx("button",{type:"submit",disabled:u');

// Newsletter
once('phone:e.phone,city:e.city',
  'phone:e.phone,sms_consent:n.target.sms_consent&&n.target.sms_consent.checked?"Yes":"No",city:e.city');
once('X.jsxs("div",{className:"md:col-span-2 space-y-6 mt-2"',
  consent("md:col-span-2") + 'X.jsxs("div",{className:"md:col-span-2 space-y-6 mt-2"');

// ---------- 2. Podcasts ----------
const label = (e) => e.episode ? `EP.${e.episode}`
  : new Date(`${e.publishedAt}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();
const eps = EPISODES.map((e) => ({
  id: e.id, label: label(e), title: e.title, guest: e.guest, duration: e.duration, desc: e.desc, publishedAt: e.publishedAt,
  image: `https://i.ytimg.com/vi/${e.id}/hqdefault.jpg`, url: `https://www.youtube.com/watch?v=${e.id}`,
}));
const a = s.indexOf("hM=[{id:104"), b = s.indexOf("],fM=", a);
if (a < 0 || b < 0) throw new Error("episode array not found");
s = s.slice(0, a) + "hM=" + J(eps) + s.slice(b + 1);

once('children:["EP.",t.id]', "children:t.label");

// VideoPlayer replaces the audio bar (bM). Same props; only activeEpisode/onClose are used.
const pa = s.indexOf("bM=({activeEpisode:e,isPlaying:t,togglePlay:n,currentTime:r,duration:i,onClose:a})=>");
const pb = s.indexOf(",vM=({episode:e,onPlay:t,activeId:n})", pa);
if (pa < 0 || pb < 0) throw new Error("player not found");
const player = `bM=({activeEpisode:e,onClose:a})=>(B.useEffect(()=>{if(!e)return;const t=t=>{"Escape"===t.key&&a()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,a]),X.jsx(Vv,{children:e&&X.jsx(Fv.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:a,className:"fixed inset-0 flex items-center justify-center p-4 md:p-10",style:{zIndex:2147483647,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(24px)"},children:X.jsxs(Fv.div,{initial:{y:40,opacity:0},animate:{y:0,opacity:1},exit:{y:40,opacity:0},transition:{type:"spring",stiffness:300,damping:30},onClick:e=>e.stopPropagation(),className:"w-full max-w-5xl rounded-2xl overflow-hidden",style:{background:"#0a0a0a",border:"1px solid rgba(255,215,0,0.2)"},children:[X.jsx("div",{className:"relative w-full aspect-video bg-black",children:X.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube-nocookie.com/embed/"+e.id+"?autoplay=1&rel=0",title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),X.jsxs("div",{className:"px-4 md:px-6 py-4 flex items-center justify-between gap-4",children:[X.jsxs("div",{className:"flex items-center gap-4 flex-1 min-w-0",children:[X.jsx("div",{className:"px-2 h-10 md:h-12 bg-[#FFD700] flex items-center justify-center font-black text-black text-[10px] md:text-xs shrink-0 rounded",children:e.label}),X.jsxs("div",{className:"overflow-hidden",children:[X.jsx("h4",{className:"text-xs md:text-sm font-black text-white truncate",children:e.title}),X.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-white/50 truncate",children:e.guest})]})]}),X.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors",children:[X.jsx(dM,{className:"w-4 h-4 fill-current"}),"YouTube"]}),X.jsx("button",{onClick:a,"aria-label":"Close video",className:"text-white/40 hover:text-white transition-colors",children:X.jsx(Uw,{size:20})})]})]})})}))`;
s = s.slice(0, pa) + player + s.slice(pb);

// Play just opens the episode; the Audio element is left idle.
once('const y=e=>{s&&s.id===e.id||(o(e),t.current.src=e.audioUrl,t.current.load()),t.current.play().then(()=>{c(!0)}).catch(e=>console.log("Audio play failed (interaction required first)",e))}',
  "const y=e=>{o(e)}");

once('X.jsx("button",{className:"text-[#FFD700] text-[10px] md:text-xs font-black hover:underline mb-6 mt-3 uppercase tracking-wide",children:"Read Full Brief"})',
  'X.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-[#FFD700] text-[10px] md:text-xs font-black hover:underline mb-6 mt-3 uppercase tracking-wide",children:"Read Full Brief"})');

once('[uM,cM,dM].map((e,t)=>X.jsx("a",{href:"#",', '[dM].map((C,t)=>X.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"Watch on YouTube",');
once('children:X.jsx(e,{className:"w-4 h-4 md:w-5 md:h-5 fill-current"})},t))})]})]})]})};function yM(',
  'children:X.jsx(C,{className:"w-4 h-4 md:w-5 md:h-5 fill-current"})},t))})]})]})]})};function yM(');

once('X.jsx("div",{className:"hidden lg:flex w-12 h-12 items-center justify-center rounded-lg border border-white/10 text-white/40",children:X.jsx(Dw,{className:"w-4 h-4"})})',
  'X.jsx("a",{href:"https://www.youtube.com/@ChasingExcellencewithTony",target:"_blank",rel:"noopener noreferrer","aria-label":"Chasing Excellence on YouTube",className:"hidden lg:flex w-12 h-12 items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white transition-colors",children:X.jsx(dM,{className:"w-4 h-4 fill-current"})})');

// Newest uploads from /api/podcast-episodes.php (YouTube feed, refreshed hourly).
// hM is a module constant, so new episodes are merged into it in place and the
// page re-renders via a small state bump.
once("function yM(){const e=B.useRef(null),",
  "function yM(){const[TTv,TTsv]=B.useState(0);B.useEffect(()=>{let c=!1;TTLoadEpisodes().then(n=>{!c&&n&&TTsv(1)});return()=>{c=!0}},[]);const e=B.useRef(null),");
once("e.guest.toLowerCase().includes(p.toLowerCase())),[p]);return X.jsx(Gv,",
  "e.guest.toLowerCase().includes(p.toLowerCase())||(e.desc||\"\").toLowerCase().includes(p.toLowerCase())),[p,TTv]);return X.jsx(Gv,");
const loader =
  `function TTLoadEpisodes(){return fetch("/api/podcast-episodes.php",{cache:"no-cache"}).then(r=>r.ok?r.json():{episodes:[]}).then(d=>{` +
  `const l=Array.isArray(d&&d.episodes)?d.episodes:[],k=new Set(hM.map(e=>e.id)),` +
  `a=l.filter(e=>e&&e.id&&e.title&&!k.has(e.id)).map(e=>({id:e.id,label:e.episode?"EP."+e.episode:new Date(e.publishedAt+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase(),` +
  `title:e.title,guest:"Chasing Excellence with Tony Thompson",duration:"",desc:e.desc||"",publishedAt:e.publishedAt,` +
  `image:"https://i.ytimg.com/vi/"+e.id+"/hqdefault.jpg",url:"https://www.youtube.com/watch?v="+e.id}));` +
  `if(!a.length)return!1;const m=[...a,...hM].sort((x,y)=>String(y.publishedAt||"").localeCompare(String(x.publishedAt||"")));hM.splice(0,hM.length,...m);return!0}).catch(()=>!1)}`;

for (const [name, url] of [["Twitter", "https://x.com/TonyThomps7989"], ["Instagram", "https://www.instagram.com/tt5481562/"], ["LinkedIn", "https://www.linkedin.com/in/meettonythompson/"]])
  once(`X.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"${name}"})`,
    `X.jsx("a",{href:"${url}",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"${name}"})`);

// ---------- 3. Forms -> GoHighLevel relay (/api/form-relay.php) ----------
const all = (a, b, n) => {
  const c = s.split(a).length - 1;
  if (c !== n) throw new Error(`expected ${n} matches, got ${c}: ${a.slice(0, 80)}`);
  s = s.split(a).join(b);
};
// Book Tony + Inner Circle (the relay tells them apart by form_page)
all("https://script.google.com/macros/s/AKfycby0sagK38jtnzcxhuiSciGJBVgIU6vj1FFmdUuuy0CtHysKDZbukgyoKcbX23Cb42xz/exec", "/api/form-relay.php", 2);
all("https://script.google.com/macros/s/AKfycby8XptgBAHSaAuz0k-mVFIeZK0gGH4ZnUN-fymJaKpMNzqU_aopShiLAqpXF8Vw_B3uiQ/exec", "/api/form-relay.php?form=Newsletter", 1);
all("https://script.google.com/macros/s/AKfycbzhYG9VZXYtkmgJJlBaX3d2yKLt0ZK6PuN08ch9SA5E9WRjMDvmOFVk4wMMmq6tRUPj/exec", "/api/form-relay.php?form=Waitlist%20Aspire", 1);
all("https://script.google.com/macros/s/AKfycbytdnEfwBgbG6e-Y478MWX07tWz7iq_GxdC3QzoaC0gy-8CDZKJBvQRb7cLrvg3C9zBoQ/exec", "/api/form-relay.php?form=Waitlist%20CCL", 1);
all("https://script.google.com/macros/s/AKfycbyNk1RgnU_37Nsi40IWR3fTUG1LDtfR0YFdzxxd9P-B9sLafKXYX-HKjkGYuo2muF3p/exec", "/api/form-relay.php?form=Waitlist%20Elevate", 1);
// Home contact, courses footer, quiz (the relay tells them apart by tier)
all('"/api/cc-add-contact.php"', '"/api/form-relay.php"', 3);
if (s.includes("script.google.com/macros")) throw new Error("an Apps Script endpoint is left");

// Podcasts: remove the "Request Access" block, which never sent anything.
{
  const st = s.indexOf('X.jsx("section",{className:"relative z-20 bg-[#050005] py-32 px-6 md:px-12 border-t border-white/5"');
  const ft = s.indexOf('X.jsx("footer",{className:"relative z-20 bg-black', st);
  if (st < 0 || ft < 0 || !s.slice(st, ft).includes('"Request Access"')) throw new Error("Request Access block not found");
  s = s.slice(0, st) + s.slice(ft);
}

// ---------- 4. Newsletter page: real Chasing Excellence issues ----------
// Stored issues come from src/data/newsletterArchive.json (pages in
// /newsletters/); newer ones from /api/newsletters.php.
once("function SM(){const[e,t]=B.useState(",
  "function SM(){const[TNi,TNs]=B.useState(TT_NL),[TNv,TNsv]=B.useState(6),[TNr,TNsr]=B.useState(null);" +
  "B.useEffect(()=>{let c=!1;TTLoadIssues().then(l=>{!c&&l.length&&TNs(x=>TTMergeIssues(x,l))});return()=>{c=!0}},[]);" +
  "const[e,t]=B.useState(");
{
  const i = s.indexOf('category:"Strategy",date:"Dec 10, 2024"');
  const a = s.lastIndexOf("children:[{", i);
  const tail = "].map((e,t)=>X.jsx(jM,{article:e,index:t},t))";
  const j = s.indexOf(tail, i);
  if (i < 0 || a < 0 || j < 0 || j - a > 2000) throw new Error("placeholder articles not found");
  s = s.slice(0, a) + "children:TNi.slice(0,TNv).map((e,t)=>X.jsx(jM,{article:e,index:t%6,onOpen:TNsr},e.id))" + s.slice(j + tail.length);
}
once("jM=({article:e,index:t})=>{", "jM=({article:e,index:t,onOpen:TO})=>{");
once("onHoverStart:()=>r(!0),onHoverEnd:()=>r(!1),className:\"group relative bg-black/40",
  "onClick:()=>TO&&TO(e),role:\"button\",tabIndex:0,onHoverStart:()=>r(!0),onHoverEnd:()=>r(!1),className:\"group relative bg-black/40");
once('[X.jsx(iw,{className:"w-3 h-3"}),e.date]', '[X.jsx(iw,{className:"w-3 h-3"}),TTFmtDate(e.date)]');
once('className:"text-center mt-12 md:mt-16",children:X.jsxs(Fv.button,{whileHover:{scale:1.05,y:-2},',
  'className:"text-center mt-12 md:mt-16"+(TNi.length>6?"":" hidden"),children:[TNr&&nd.createPortal(X.jsx(TTIssueReader,{issue:TNr,onClose:()=>TNsr(null)}),document.body),X.jsxs(Fv.button,{onClick:()=>TNsv(v=>v<TNi.length?v+6:6),whileHover:{scale:1.05,y:-2},');
once('{children:"View Archive"}),X.jsx(nw,{className:"w-5 h-5"})]})})',
  '{children:TNv<TNi.length?"More Issues":"Show Fewer"}),X.jsx(nw,{className:"w-5 h-5"})]})]})');

const nlData = "var TT_NL=" + J(NEWSLETTER_ARCHIVE.map((e) => ({ ...e, category: "Weekly Journal" }))) + ";";
const nlFns =
  `function TTFmtDate(d){return/^\\d{4}-\\d\\d-\\d\\d$/.test(d||"")?new Date(d+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):d}` +
  `function TTLoadIssues(){return fetch("/api/newsletters.php",{cache:"no-cache"}).then(r=>r.ok?r.json():{issues:[]}).then(d=>Array.isArray(d&&d.issues)?d.issues:[]).catch(()=>[])}` +
  `function TTMergeIssues(a,l){const k=new Set(a.map(e=>e.id)),n=l.filter(e=>e&&e.id&&e.title&&e.url&&!k.has(e.id)).map(e=>({...e,category:"Weekly Journal"}));` +
  `return n.length?[...n,...a].sort((x,y)=>String(y.date).localeCompare(String(x.date))):a}` +
  `function TTIssueReader({issue:e,onClose:t}){B.useEffect(()=>{const n=n=>{"Escape"===n.key&&t()},r=document.body.style.overflow;document.body.style.overflow="hidden";` +
  `window.addEventListener("keydown",n);return()=>{window.removeEventListener("keydown",n);document.body.style.overflow=r}},[t]);` +
  `return X.jsx("div",{onClick:t,className:"fixed inset-0 flex items-center justify-center p-3 md:p-8",style:{zIndex:2147483647,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(16px)"},` +
  `children:X.jsxs("div",{onClick:e=>e.stopPropagation(),className:"w-full max-w-3xl h-full flex flex-col rounded-2xl overflow-hidden border-2",style:{background:"#0a0a0a",borderColor:"#9b26b660"},children:[` +
  `X.jsxs("div",{className:"flex items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4 border-b border-white/10",children:[` +
  `X.jsxs("div",{className:"min-w-0",children:[X.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest",style:{color:"#d069f0"},children:"Chasing Excellence · "+TTFmtDate(e.date)}),` +
  `X.jsx("h3",{className:"text-white text-sm md:text-lg font-bold truncate",children:e.title})]}),` +
  `X.jsxs("div",{className:"flex items-center gap-4 shrink-0",children:[X.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest",children:"Open ↗"}),` +
  `X.jsx("button",{onClick:t,"aria-label":"Close",className:"text-white/50 hover:text-white transition-colors",children:X.jsx(Uw,{size:22})})]})]}),` +
  `X.jsx("iframe",{src:e.url,title:e.title,className:"flex-1 w-full bg-white",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin"})]})})}`;

// ---------- 5. SEO: per-page title, description, canonical, robots ----------
once("children:[X.jsx(BS,{}),", "children:[X.jsx(BS,{}),X.jsx(TTSeoRoute,{}),");
const seoFns =
  "var TT_SEO=" + J(SEO) + ";" + APPLY_SEO +
  "function TTSeoRoute(){const l=Gd();B.useEffect(()=>{TTApplySeo(l.pathname,TT_SEO)},[l.pathname]);return null}";

// ---------- 6. Growth Programs cards open the Sales Growth Platform page ----------
for (const k of ["aspire", "ccl", "elevate"])
  once(`onClick:()=>((e,t)=>KM(${J(k)},e,t))(e,t)`, `onClick:()=>{window.location.href=${J(SGP_URL)}}`);
// ASPIRE and IGNITE are enrolling now, no longer waitlist-only.
all('price:"Launching Soon",button:"JOIN WAITLIST"', 'price:"Now Enrolling",button:"ENROLL NOW"', 2);

const ex = s.lastIndexOf("export{");
if (ex < 0) throw new Error("export not found");
s = s.slice(0, ex) + helper + loader + nlData + nlFns + seoFns + s.slice(ex);
fs.writeFileSync(OUT, s);
console.log("patched", SRC.length, "->", OUT, s.length, "bytes");
