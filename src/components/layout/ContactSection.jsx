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

const US = "#9b26b6",
  qS = "#d069f0",
  VS = "#ffffff",
  HS = "#000000",
  WS = [
    {
      category: "BUSINESS & SPEAKING",
      email: "book@meettonythompson.com",
    },
    {
      category: "GENERAL INQUIRIES",
      email: "info@meettonythompson.com",
    },
    {
      category: "MEDIA / PRESS",
      email: "info@meettonythompson.com",
    },
    {
      category: "CONTACT TONY",
      email: "tony@meettonythompson.com",
    },
  ],
  $S = [
    {
      name: "INSTAGRAM",
      link: "https://www.instagram.com/tt5481562/",
      icon: InstagramIcon,
      target: "Instagram",
    },
    {
      name: "TIKTOK",
      link: "https://www.tiktok.com/@tonythompson08?is_from_webapp=1&sender_device=pc",
      icon: "tiktok",
      target: "TikTok",
    },
    {
      name: "YOUTUBE",
      link: "https://www.youtube.com/@meettonythompson",
      icon: YoutubeIcon,
      target: "YouTube",
    },
    {
      name: "X",
      link: "https://x.com/TonyThomps7989",
      icon: "x",
      target: "X",
    },
    {
      name: "LINKEDIN",
      link: "https://www.linkedin.com/in/meettonythompson/",
      icon: LinkedinIcon,
      target: "LinkedIn",
    },
  ],
  YS = ({ item: e }) => {
    if ("tiktok" === e.icon)
      return (
        <svg viewBox="0 0 256 256" className="w-5 h-5 fill-current">
          <path d="M161.06 0h-34.1v166.63a30.75 30.75 0 1 1-30.75-30.75 31.2 31.2 0 0 1 6.89.75V99.1a64.74 64.74 0 1 0 57.6 64.64V79.06a79.47 79.47 0 0 0 49.77 17.07V61.46a49.63 49.63 0 0 1-49.4-49.4V0Z" />
        </svg>
      );
    if ("x" === e.icon)
      return (
        <svg viewBox="0 0 300 300" className="w-4 h-4 fill-current">
          <path d="M182.1 130.4 289.2 0h-25.3l-93.3 112L101.6 0H0l112.2 162.7L0 300h25.3l99.1-118.9L198.4 300H300l-117.9-169.6ZM139.7 166l-11.5-16.4L34.4 19.5h55.7l74.1 105.4 11.5 16.4 99.7 141.1h-55.7l-79.9-116.4Z" />
        </svg>
      );
    const Ct_ = e.icon;
    return (
      <Ct_
        className="w-5 h-5 text-white group-hover:text-black transition-colors"
        strokeWidth={1.7}
      />
    );
  },
  GS = ({ item: e }) => (
    <a
      href={e.link}
      target="_blank"
      rel="noreferrer"
      className="group relative w-full h-full flex flex-col items-center justify-center overflow-hidden border-r border-white/20 bg-black cursor-crosshair"
    >
      <div
        className="absolute inset-0 z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        style={{
          backgroundColor: US,
        }}
      >
        <div
          className="absolute inset-0 opacity-100 mix-blend-hard-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundSize: "150px 150px",
          }}
        />
      </div>
      <div className="relative z-20 text-white group-hover:text-black group-hover:scale-125 transition-all duration-500">
        <YS item={e} />
      </div>
      <span className="absolute bottom-3 text-[9px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-all duration-500 z-20 font-semibold opacity-0 group-hover:opacity-100 hidden md:block">
        {"TARGET: "}
        {e.target}
      </span>
    </a>
  ),
  XS = ({
    name: e,
    value: t,
    onChange: n,
    placeholder: r,
    type: i = "text",
    isDark: a = !1,
  }) => (
    <div className="flex flex-col relative">
      <label
        className={`text-xs mb-2 lowercase tracking-[0.15em] font-medium ${a ? "text-gray-400" : "text-gray-700"} first-letter:uppercase`}
      >
        {r}
      </label>
      <input
        type={i}
        name={e}
        value={t}
        onChange={n}
        className={`w-full ${a ? "bg-transparent text-white border-white/30 focus:border-[#d069f0]" : "bg-white text-black border-black/30 focus:border-purple-600"} border-b-2 p-2 text-sm focus:outline-none placeholder:text-gray-400 transition-colors duration-200`}
      />
    </div>
  );

export function ContactSection({ isDark: e = !1 }) {
  const [t, n] = React.useState({
      first: "",
      last: "",
      email: "",
      enquiry: "",
    }),
    [r, i] = React.useState("idle"),
    [a, s] = React.useState(""),
    o = React.useRef(null),
    l = (e) => {
      (n({
        ...t,
        [e.target.name]: e.target.value,
      }),
        s(""));
    },
    c = React.useCallback(() => i("closed"), []);
  return (
    React.useEffect(() => {
      if ("success" === r) {
        const e = (e) => {
            o.current && !o.current.contains(e.target) && c();
          },
          t = (e) => "Escape" === e.key && c();
        return (
          document.addEventListener("mousedown", e),
          document.addEventListener("keydown", t),
          () => {
            (document.removeEventListener("mousedown", e),
              document.removeEventListener("keydown", t));
          }
        );
      }
    }, [r, c]),
    (
      <footer
        id="contact"
        className="relative w-full overflow-hidden"
        style={{
          background: e ? "#131313" : VS,
          color: e ? VS : HS,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: e
              ? "radial-gradient(circle at bottom right, rgba(155, 38, 182, 0.15), transparent 70%), linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
              : "linear-gradient(to top, rgba(155, 38, 182, 0.05), rgba(255,255,255,0.8), white)",
          }}
        >
          <div
            className={
              "absolute inset-0 " +
              (e
                ? "opacity-[0.1] mix-blend-screen"
                : "opacity-[0.04] mix-blend-multiply")
            }
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center pt-12 md:pt-24 pb-20 px-6 max-w-[1200px] mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: !0,
            }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#9b26b6]/5 border border-[#9b26b6]/20 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#9b26b6] mb-6 backdrop-blur-md">
              COMMUNICATION UPLINK
            </span>
            <h2
              className={
                "text-4xl md:text-7xl font-black tracking-tight mb-4 " +
                (e ? "text-white" : "text-black")
              }
              style={{
                letterSpacing: "-0.02em",
              }}
            >
              CONTACT TONY
            </h2>
            <h3
              className={`text-base md:text-xl font-semibold tracking-[0.25em] ${e ? "text-white/70" : "text-black/70"} uppercase mb-2`}
            >
              JOIN THE CHASING EXCELLENCE COMMUNITY
            </h3>
            <p
              className={`${e ? "text-gray-400" : "text-gray-600"} max-w-lg mx-auto text-sm md:text-base font-medium leading-relaxed border-t ${e ? "border-white/10" : "border-black/10"} pt-6 mt-6`}
            >
              The ultimate upgrade begins with a simple connection.
            </p>
          </motion.div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 relative group flex flex-col">
              <div
                className={
                  "relative p-8 md:p-10 rounded-lg flex-grow border " +
                  (e
                    ? "border-white/20 bg-white/5 backdrop-blur-lg"
                    : "border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8)] bg-white")
                }
              >
                <AnimatePresence mode="wait">
                  {"success" !== r ? (
                    <motion.form
                      onSubmit={async (e) => {
                        if (
                          (e.preventDefault(), t.first.trim() && t.email.trim())
                        ) {
                          i("loading");
                          try {
                            const e = await fetch("/api/cc-add-contact.php", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                first: t.first,
                                last: t.last,
                                email: t.email,
                                enquiry: t.enquiry,
                                tier: "footer",
                              }),
                            });
                            (await e.json()).success
                              ? (i("success"),
                                n({
                                  first: "",
                                  last: "",
                                  email: "",
                                  enquiry: "",
                                }))
                              : (s("SERVER_ERROR: Transmission failed."),
                                i("idle"));
                          } catch (r) {
                            (s("NETWORK_ERROR: Check connection."), i("idle"));
                          }
                        } else s("MISSING_DATA: Name and Email are required.");
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      className="flex flex-col gap-10"
                      key={"form"}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        <XS
                          name="first"
                          value={t.first}
                          onChange={l}
                          placeholder="FIRST NAME*"
                          isDark={e}
                        />
                        <XS
                          name="last"
                          value={t.last}
                          onChange={l}
                          placeholder="LAST NAME (OPTIONAL)"
                          isDark={e}
                        />
                        <div className="md:col-span-2">
                          <XS
                            name="email"
                            value={t.email}
                            onChange={l}
                            placeholder="EMAIL ADDRESS*"
                            type="email"
                            isDark={e}
                          />
                        </div>
                        <div className="md:col-span-2 mt-4">
                          <label
                            className={`block mb-2 text-xs lowercase tracking-[0.15em] font-medium ${e ? "text-gray-400" : "text-gray-700"} first-letter:uppercase`}
                          >
                            your enquiry / message (optional)
                          </label>
                          <textarea
                            name="enquiry"
                            value={t.enquiry}
                            onChange={l}
                            className={`w-full h-24 ${e ? "bg-white/5 border-white/30 text-white focus:border-[#d069f0]" : "bg-white border-black/30 text-black focus:border-purple-600"} border-2 p-3 text-sm focus:outline-none placeholder:text-gray-400 transition-colors duration-200 resize-none`}
                          />
                        </div>
                      </div>
                      {a && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="text-[#cc0000] font-semibold text-xs uppercase tracking-[0.15em] text-center border border-[#cc0000] p-3 bg-[#cc0000]/10 mt-6"
                        >
                          {"⚠ "}
                          {a}
                        </motion.div>
                      )}
                      <button
                        type="submit"
                        disabled={"loading" === r}
                        className={
                          "w-full md:w-60 py-4 font-bold uppercase text-xs tracking-[0.15em] text-white rounded-md transition-all duration-300 mx-auto \n                                                       border-2 " +
                          (e
                            ? "border-white/20 shadow-[0_0_20px_rgba(155,38,182,0.3)] hover:shadow-[0_0_40px_rgba(155,38,182,0.5)]"
                            : "border-black shadow-[4px_4px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]")
                        }
                        style={{
                          backgroundImage: `linear-gradient(to right, ${US}, ${qS})`,
                        }}
                      >
                        {"loading" === r ? "PROCESSING..." : "SUBMIT ACCESS"}
                        <ArrowRightIcon size={14} className="inline ml-3" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className={
                        "h-full min-h-[300px] flex flex-col items-center justify-center " +
                        (e ? "text-white" : "text-black")
                      }
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      key={"form-success"}
                    >
                      <CircleCheckIcon className="w-12 h-12 text-[#9b26b6] mx-auto mb-4" />
                      <h3 className="text-3xl font-black mb-2">
                        TRANSMISSION COMPLETE.
                      </h3>
                      <p
                        className={`text-xs uppercase tracking-[0.15em] ${e ? "text-gray-400" : "text-gray-700"} mt-2 font-semibold`}
                      >
                        We will be in touch shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div
              className={
                "md:col-span-1 p-6 sm:p-8 md:p-10 text-white rounded-lg space-y-4 " +
                (e
                  ? "border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  : "shadow-[4px_4px_0px_rgba(0,0,0,0.8)]")
              }
              style={{
                background: `linear-gradient(to bottom, ${US}, ${qS})`,
                border: e
                  ? "1px solid rgba(255,255,255,0.2)"
                  : `2px solid ${HS}`,
              }}
            >
              <div className="mb-4">
                <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 border border-white/20 text-[9px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                  PRIORITY CHANNELS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl font-black uppercase mb-6 tracking-wide border-b border-white/50 pb-3 text-white leading-tight">
                Inquiries
              </h3>
              <div className="space-y-6">
                {WS.map((t, n) => (
                  <div
                    className="py-2 border-b border-white/30 last:border-b-0"
                    key={n}
                  >
                    <h4
                      className={`text-[12px] font-extrabold tracking-[0.15em] uppercase ${e ? "text-black" : "text-black/80"} mb-2`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {t.category}
                    </h4>
                    <a
                      href={`mailto:${t.email}`}
                      className="text-sm font-medium text-white/90 hover:text-black transition-colors block break-words"
                    >
                      {t.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative z-20 w-full bg-black border-t ${e ? "border-white/10" : "border-white/20"} grid grid-cols-5 h-[80px] md:h-[110px] overflow-hidden`}
        >
          {$S.map((e, t) => (
            <GS item={e} key={t} />
          ))}
        </div>
        <div
          className={`relative z-10 w-full bg-black border-t ${e ? "border-white/10" : "border-white/30"} py-6 px-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/60 uppercase tracking-[0.15em] font-medium gap-4 md:gap-0`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 w-full md:w-auto text-center md:text-left">
            <span className="text-white/40 whitespace-nowrap">
              {"© "}
              {new Date().getFullYear()}
              {" TONY THOMPSON"}
            </span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-white/80 font-medium">
              <Link
                to="/cookie-policy"
                className="hover:text-[#d069f0] transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#d069f0] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:text-[#d069f0] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="hover:text-[#d069f0] transition-colors"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
          <span className="text-[#d069f0] hover:text-white/80 transition-colors text-center md:text-right w-full md:w-auto font-semibold">
            {"ENGINEERED BY "}
            <a
              href="https://arsonpixelz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ARSON PIXELZ®
            </a>
          </span>
        </div>
        <AnimatePresence>
          {"success" === r && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <motion.div
                ref={o}
                className={`text-center p-12 border ${e ? "border-[#9b26b6]/50 bg-[#131313] text-white" : "border-[#9b26b6]/50 bg-white text-black"} max-w-md mx-6 relative rounded-2xl`}
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: 1,
                }}
              >
                <CircleCheckIcon className="w-16 h-16 text-[#9b26b6] mx-auto mb-6 drop-shadow-[0_0_20px_rgba(155,38,182,0.4)]" />
                <h2 className="text-4xl font-black mb-2">ACCESS GRANTED.</h2>
                <p className="text-[#9b26b6] mb-6 font-semibold text-sm uppercase tracking-wider">
                  We will be in touch shortly.
                </p>
                <button
                  onClick={c}
                  className="px-10 py-4 bg-[#9b26b6] text-white font-bold uppercase text-xs hover:bg-black hover:text-white transition-all shadow-[0_0_15px_rgba(155,38,182,0.6)]"
                >
                  CLOSE
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </footer>
    )
  );
}

export default ContactSection;
