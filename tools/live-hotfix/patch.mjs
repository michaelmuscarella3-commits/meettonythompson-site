// Patches the live site's compiled bundle (index-CaJh229O.js) in place:
// 1) SMS consent checkbox on Book Tony + thank-you redirect fix
// 2) Real Chasing Excellence episodes on /podcasts, played via YouTube embed
import fs from "fs";
import { EPISODES } from "../../src/data/podcastEpisodes.js";
const [, , SRC, OUT] = process.argv;
let s = fs.readFileSync(SRC, "utf8");
const once = (a, b) => {
  const n = s.split(a).length - 1;
  if (n !== 1) throw new Error(`expected 1 match, got ${n}: ${a.slice(0, 80)}`);
  s = s.replace(a, () => b);
};
const J = JSON.stringify;

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
  id: e.id, label: label(e), title: e.title, guest: e.guest, duration: e.duration, desc: e.desc,
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

for (const [name, url] of [["Twitter", "https://x.com/TonyThomps7989"], ["Instagram", "https://www.instagram.com/tt5481562/"], ["LinkedIn", "https://www.linkedin.com/in/meettonythompson/"]])
  once(`X.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"${name}"})`,
    `X.jsx("a",{href:"${url}",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"${name}"})`);

const ex = s.lastIndexOf("export{");
if (ex < 0) throw new Error("export not found");
s = s.slice(0, ex) + helper + s.slice(ex);
fs.writeFileSync(OUT, s);
console.log("patched", SRC.length, "->", OUT, s.length, "bytes");
