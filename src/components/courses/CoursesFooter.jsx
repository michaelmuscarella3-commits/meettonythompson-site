import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  CircleCheckIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CONTACT_EMAILS = [
    {
      category: "BUSINESS & SPEAKING",
      email: "book@meettonythompson.com",
    },
    {
      category: "GENERAL INQUIRIES",
      email: "info@meettonythompson.com",
    },
    {
      category: "CONTACT TONY",
      email: "tony@meettonythompson.com",
    },
  ],
  SOCIAL_LINKS = [
    {
      name: "TIKTOK",
      link: "https://www.tiktok.com/@tonythompson08",
      icon: "tiktok",
    },
    {
      name: "INSTAGRAM",
      link: "https://www.instagram.com/tt5481562/",
      icon: InstagramIcon,
    },
    {
      name: "YOUTUBE",
      link: "https://www.youtube.com/@meettonythompson",
      icon: YoutubeIcon,
    },
    {
      name: "LINKEDIN",
      link: "https://www.linkedin.com/in/meettonythompson/",
      icon: LinkedinIcon,
    },
    {
      name: "X",
      link: "https://x.com/TonyThomps7989",
      icon: "x",
    },
  ],
  SocialIcon = ({ item: e }) => {
    if ("tiktok" === e.icon)
      return (
        <svg
          viewBox="0 0 256 256"
          className="w-7 h-7 fill-current transition-transform group-hover:scale-110"
        >
          <path d="M161.06 0h-34.1v166.63a30.75 30.75 0 1 1-30.75-30.75 31.2 31.2 0 0 1 6.89.75V99.1a64.74 64.74 0 1 0 57.6 64.64V79.06a79.47 79.47 0 0 0 49.77 17.07V61.46a49.63 49.63 0 0 1-49.4-49.4V0Z" />
        </svg>
      );
    if ("x" === e.icon)
      return (
        <svg
          viewBox="0 0 300 300"
          className="w-6 h-6 fill-current transition-transform group-hover:scale-110"
        >
          <path d="M182.1 130.4 289.2 0h-25.3l-93.3 112L101.6 0H0l112.2 162.7L0 300h25.3l99.1-118.9L198.4 300H300l-117.9-169.6ZM139.7 166l-11.5-16.4L34.4 19.5h55.7l74.1 105.4 11.5 16.4 99.7 141.1h-55.7l-79.9-116.4Z" />
        </svg>
      );
    const Ct__ = e.icon;
    return (
      <Ct__
        className="w-7 h-7 transition-transform group-hover:scale-110"
        strokeWidth={1.5}
      />
    );
  },
  FooterInput = ({
    name: e,
    value: t,
    onChange: n,
    placeholder: r,
    type: i = "text",
  }) => (
    <div className="flex flex-col relative group">
      <input
        type={i}
        name={e}
        value={t}
        onChange={n}
        placeholder={r}
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-[#e8b4fe]/50 transition-all placeholder:text-gray-600 backdrop-blur-md"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#e8b4fe]/10 to-transparent opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
    </div>
  );

export function CoursesFooter() {
  const [e, t] = React.useState({
      first: "",
      last: "",
      email: "",
      enquiry: "",
    }),
    [n, r] = React.useState("idle"),
    [i, a] = React.useState("");
  React.useRef(null);
  const s = (n) => {
    (t({
      ...e,
      [n.target.name]: n.target.value,
    }),
      a(""));
  };
  return (
    <footer className="relative w-full overflow-hidden bg-[#0a0a0a] border-t border-white/5 pt-24 pb-8 px-6 lg:px-12 selection:bg-[#9D50BB]">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="footer bg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-32 gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter text-white mb-8">
              {"READY TO "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8b4fe] via-[#c084fc] to-[#22d3ee]">
                WIN?
              </span>
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-lg leading-relaxed">
              Take the definitive upgrade. Enroll in the CCL Program today and
              deploy high-velocity sales frameworks.
            </p>
          </div>
          <a
            href="https://learn.meettonythompson.com/products/courses/ccl-program"
            className="group relative px-20 py-10 rounded-[2.5rem] bg-white text-black font-black tracking-[0.2em] text-xl hover:scale-105 transition-all duration-500 overflow-hidden lg:-translate-x-24 lg:translate-y-28"
          >
            <span className="relative z-10">ENROLL NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8b4fe] to-[#c084fc] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        <div className="grid lg:grid-cols-2 gap-24 pt-24 border-t border-white/5">
          <div className="glass-card p-10 rounded-[40px] border border-white/5 backdrop-blur-3xl">
            <h4 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#e8b4fe] via-[#c084fc] to-[#22d3ee] tracking-tight uppercase">
              GROWTH CONDUIT
            </h4>
            <form
              onSubmit={async (n) => {
                if ((n.preventDefault(), e.first.trim() && e.email.trim())) {
                  r("loading");
                  try {
                    const n = await fetch("/api/cc-add-contact.php", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        ...e,
                        tier: "courses_footer",
                      }),
                    });
                    (await n.json()).success
                      ? (r("success"),
                        t({
                          first: "",
                          last: "",
                          email: "",
                          enquiry: "",
                        }))
                      : (a("Transmission failed."), r("idle"));
                  } catch (i) {
                    (a("Network error."), r("idle"));
                  }
                } else a("Name and Email required.");
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <FooterInput
                  name="first"
                  value={e.first}
                  onChange={s}
                  placeholder="First Name"
                />
                <FooterInput
                  name="last"
                  value={e.last}
                  onChange={s}
                  placeholder="Last Name"
                />
              </div>
              <FooterInput
                name="email"
                value={e.email}
                onChange={s}
                placeholder="Email"
                type="email"
              />
              <textarea
                name="enquiry"
                value={e.enquiry}
                onChange={s}
                placeholder="Enquiry Detail"
                className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-[#e8b4fe]/50 transition-all placeholder:text-gray-600 backdrop-blur-md resize-none"
              />
              {i && <p className="text-red-400 text-xs font-mono">{i}</p>}
              <button
                type="submit"
                disabled={"loading" === n}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#9B26B6] to-[#7D1F97] text-white text-xs font-black tracking-widest hover:shadow-[0_0_30px_rgba(155,38,182,0.4)] transition-all flex items-center justify-center gap-3"
              >
                {"loading" === n ? "UPLOADING..." : "SUBMIT DATA"}
                <ArrowRightIcon size={16} />
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-between py-8">
            <div>
              <h4 className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mb-8">
                Signal Channels
              </h4>
              <div className="space-y-12">
                {CONTACT_EMAILS.map((e, t) => (
                  <div className="group cursor-pointer" key={t}>
                    <div className="text-[10px] font-bold text-[#e8b4fe]/60 mb-2">
                      {e.category}
                    </div>
                    <a
                      href={`mailto:${e.email}`}
                      className="text-xl md:text-3xl font-bold text-white hover:text-[#e8b4fe] transition-colors tracking-tight break-all"
                    >
                      {e.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 lg:mt-0">
              <div className="flex flex-col md:flex-row justify-start items-center gap-12 pt-8 border-t border-white/5">
                <div className="flex gap-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  <Link
                    to="/legal"
                    className="hover:text-white transition-colors"
                  >
                    Legal
                  </Link>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 md:ml-auto w-full md:w-auto">
                  {SOCIAL_LINKS.map((e, t) => (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/40 hover:text-white transition-all transform hover:-translate-y-1"
                      key={t}
                    >
                      <SocialIcon item={e} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <span className="text-[10px] font-mono text-gray-700 tracking-[1em] uppercase">
            {"Engineered for Domination by "}
            <a
              href="https://arsonpixelz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Arson Pixelz®
            </a>
          </span>
        </div>
      </div>
      <AnimatePresence>
        {"success" === n && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl px-6"
          >
            <motion.div
              initial={{
                scale: 0.9,
                y: 20,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              className="glass-card max-w-md w-full p-12 rounded-[40px] border border-[#e8b4fe]/20 text-center"
            >
              <CircleCheckIcon
                size={64}
                className="mx-auto text-[#e8b4fe] mb-8"
              />
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                ACCESS GRANTED
              </h2>
              <p className="text-gray-400 mb-8">
                Transmission received. Our lab specialists will be in contact
                shortly.
              </p>
              <button
                onClick={() => r("idle")}
                className="w-full py-4 rounded-xl bg-white text-black font-black text-xs tracking-widest transition-transform hover:scale-[1.02]"
              >
                CLOSE CONNECTION
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default CoursesFooter;
