import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  PlayIcon,
  ShieldIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CoursesFooter } from "../components/courses/CoursesFooter";
import { useVideoPlayer } from "../components/media/VideoPlayerProvider";

const ModulePreview = ({
    text: e,
    className: t,
    color: n = "text-white",
    outline: r = !1,
    strokeWidth: i = "1px",
  }) => (
    <span
      className={`block font-black uppercase leading-[0.85] tracking-tighter whitespace-nowrap ${n} ${t}`}
      style={{
        fontFamily: "'Inter', sans-serif",
        transform: "scaleY(1.15)",
        transformOrigin: "left bottom",
        WebkitTextStroke: r ? `${i} rgba(255,255,255,0.4)` : "none",
        color: r ? "transparent" : void 0,
        willChange: "transform",
      }}
    >
      {e}
    </span>
  ),
  ModuleCard = ({ module: e, index: t = 0 }) => {
    const { openVideo: n } = useVideoPlayer(),
      [r, i] = React.useState(!1),
      a = (t) => {
        (t.preventDefault(),
          n(e.video, {
            ctaText: "ENROLL →",
            ctaLink:
              e.link ||
              "https://learn.meettonythompson.com/products/courses/ccl-program",
          }));
      };
    return (
      <motion.div
        layout={!0}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: !0,
          margin: "-100px",
        }}
        transition={{
          duration: 1,
          delay: 0.1 * t,
          ease: [0.16, 1, 0.3, 1],
        }}
        onHoverStart={() => i(!0)}
        onHoverEnd={() => i(!1)}
        className="group relative flex flex-col lg:flex-row gap-6 lg:gap-16 py-12 pl-3 md:pl-8 border-b border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden"
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 origin-top"
          style={{
            background: "linear-gradient(180deg, #9B26B6, #e8b4fe)",
          }}
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: !0,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
            delay: 0.1 * t + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <AnimatePresence>
          {r && (
            <motion.div
              className="absolute inset-0 opacity-10 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #9B26B6, transparent 60%)",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.15,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          )}
        </AnimatePresence>
        <div
          className="relative w-full lg:w-[480px] aspect-video flex-shrink-0 rounded-[3rem] overflow-hidden bg-purple-950/20 border border-white/5 cursor-pointer"
          onClick={a}
        >
          {e.image && (
            <img
              src={e.image}
              alt={e.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent group-hover:from-purple-600/40 transition-all duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md transform group-hover:scale-110 transition-transform duration-500 shadow-2xl">
              <PlayIcon className="w-8 h-8 text-[#9B26B6] fill-current ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-[10px] font-mono font-bold text-white uppercase tracking-widest">
            {e.duration}
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 w-full">
          <div className="mb-8 flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#9B26B6]/10 border border-[#9B26B6]/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-[#9B26B6] rounded-full animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-[#9B26B6] uppercase">
                {e.code}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.4em]">
              Active Signal
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter group-hover:text-[#9B26B6] transition-colors duration-300 max-w-4xl">
            {e.title}
          </h3>
          <p className="text-white/40 text-base md:text-xl font-bold leading-relaxed max-w-2xl mb-12 border-l border-white/10 pl-8">
            {e.desc}
          </p>
          <button
            onClick={a}
            className="flex items-center gap-3 text-white text-xs md:text-sm font-black uppercase tracking-[0.3em] group/btn hover:text-[#9B26B6] transition-colors"
          >
            Initialize Preview
            <ArrowRightIcon className="w-5 h-5 transform group-hover/btn:translate-x-3 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  };

export function Courses() {
  useNavigate();
  const e = React.useRef(null),
    [t, n] = React.useState(!1);
  return (
    <LayoutGroup>
      <main
        ref={e}
        className="relative bg-[#0a0a0a] text-white min-h-screen w-full overflow-x-hidden selection:bg-[#9D50BB] selection:text-white"
        style={{
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="High-performance abstract cinematic background"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,0,255,0.2),transparent_50%)]" />
        </div>
        <section className="relative min-h-screen flex flex-col pt-32 pb-16 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex-grow flex flex-col justify-center">
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center">
              <div className="relative z-10">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-8"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-300 uppercase">
                    Exclusive 1K Curriculum
                  </span>
                </motion.div>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-display font-bold leading-[0.85] tracking-tighter mb-8 text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  ROADMAP
                  <br />
                  {"TO "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8b4fe] via-[#c084fc] to-[#22d3ee]">
                    WIN.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed font-light"
                >
                  {
                    "The definitive library of high-performance sales frameworks. Now integrated with the "
                  }
                  <span className="text-white font-medium">
                    Thinkific Elite Ecosystem
                  </span>
                  {" for seamless, high-velocity learning."}
                </motion.p>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                  }}
                  className="text-sm md:text-base text-gray-400 italic mb-12 max-w-2xl font-light"
                >
                  Experience the exclusive curriculum previously reserved for
                  private equity portfolio companies.
                </motion.p>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <a
                    href="https://learn.meettonythompson.com/products/courses/ccl-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 rounded bg-black/40 border border-purple-500/40 text-white text-sm font-bold tracking-[0.1em] hover:bg-purple-900/20 transition-all shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] inline-flex items-center justify-center translate-x-0"
                  >
                    ENROLL NOW
                  </a>
                  <button
                    onClick={() => {
                      const e = document.getElementById("module-previews");
                      e &&
                        e.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="px-10 py-5 rounded bg-white/5 border border-white/10 text-white text-sm font-bold tracking-[0.1em] hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm group"
                  >
                    <PlayIcon
                      size={18}
                      fill="currentColor"
                      className="text-gray-300 group-hover:text-white transition-colors"
                    />
                    WATCH PREVIEW
                  </button>
                </motion.div>
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                }}
                className="relative hidden lg:block"
              >
                <div className="glass-card p-10 rounded-[32px] border border-[#e8b4fe]/20 relative overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9B26B6]/20 blur-[80px] rounded-full group-hover:bg-[#9B26B6]/30 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-black tracking-[0.3em] text-[#e8b4fe] uppercase">
                        Limited Time Offer
                      </span>
                    </div>
                    <h2 className="text-[5rem] font-display font-black leading-none mb-2 tracking-tighter">
                      {"25% "}
                      <span className="text-2xl align-top mt-4 block">OFF</span>
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-[#e8b4fe]/30 to-transparent mb-8" />
                    <h3 className="text-xl font-bold mb-4 tracking-tight leading-tight">
                      {"THE CCL PROGRAM "}
                      <br />
                      <span className="text-gray-400 font-light text-sm italic">
                        Full Curriculum Access
                      </span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[280px]">
                      Experience elite sales mastery. Half the price for a full
                      month of unrestricted access.
                    </p>
                    <a
                      href="https://learn.meettonythompson.com/products/courses/ccl-program"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#9B26B6] to-[#7D1F97] text-white text-xs font-black tracking-[0.2em] shadow-[0_10px_30px_rgba(155,38,182,0.3)] hover:shadow-[0_15px_40px_rgba(155,38,182,0.5)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 group/btn"
                    >
                      CLAIM OFFER
                      <ShieldIcon
                        size={16}
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                    </a>
                    <div className="mt-8 pt-8 border-t border-white/5 text-center w-full">
                      <div className="text-[9px] font-mono text-gray-500 tracking-[0.4em] uppercase">
                        HURRY - PROMO ENDS SOON
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(155,38,182,0.05),transparent_70%)] pointer-events-none" />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full z-10">
            <button
              onClick={() => {
                const e = document.getElementById("module-previews");
                e &&
                  e.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all bg-black/20 backdrop-blur-sm"
            >
              <ChevronDownIcon size={20} strokeWidth={1.5} />
            </button>
          </div>
        </section>
        <section
          id="module-previews"
          className="relative z-20 py-16 md:py-32 px-8 border-y border-white/5 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12 pb-8 border-b border-white/10">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                  margin: "-100px",
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col"
              >
                <ModulePreview
                  text="MODULE"
                  className="text-[clamp(4rem,9vw,9rem)]"
                />
                <ModulePreview
                  text="PREVIEWS"
                  color="text-[#9d50bb]"
                  className="text-[clamp(4rem,9vw,9rem)] -mt-4 md:-mt-8"
                />
              </motion.div>
            </div>
            <div className="flex flex-col">
              {[
                {
                  code: "SESSION 3",
                  title: "CCL PROGRAM",
                  duration: "12 Lessons",
                  video: "/videos/Ccl-Intro Video.mp4",
                  link: "https://learn.meettonythompson.com/products/courses/ccl-program",
                  desc: "The definitive tactical guide for mortgage professionals to build unstoppable realtor partnerships through high-signal value delivery.",
                  image: "/assets/images/CCLimage.jpg",
                },
              ].map((e, t) => (
                <ModuleCard module={e} index={t} key={t} />
              ))}
            </div>
          </div>
        </section>
        <section className="relative z-20 py-24 md:py-48 overflow-hidden border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-1 gap-24">
            <div className="max-w-5xl">
              <div className="relative w-full py-16 md:py-32">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full -z-10 pointer-events-none select-none flex flex-col pl-4 md:pl-0">
                  <motion.div
                    initial={{
                      opacity: 1,
                      x: -200,
                      color: "rgba(255,255,255,1)",
                      WebkitTextStroke: "0px rgba(255,255,255,1)",
                    }}
                    whileInView={{
                      opacity: 0.08,
                      x: 0,
                      color: "rgba(255,255,255,1)",
                      WebkitTextStroke: "0px rgba(255,255,255,1)",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    transition={{
                      x: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0,
                      },
                      opacity: {
                        delay: 1.8,
                        duration: 0.6,
                      },
                      color: {
                        delay: 1.8,
                        duration: 0.6,
                      },
                      WebkitTextStroke: {
                        delay: 1.8,
                        duration: 0.6,
                      },
                    }}
                  >
                    <ModulePreview
                      text="WE DON'T TEACH"
                      color=""
                      outline={!1}
                      className="text-[clamp(2.5rem,11vw,13rem)] leading-[0.75] tracking-tighter"
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 1,
                      x: -200,
                      color: "rgba(255,255,255,1)",
                      WebkitTextStroke: "0px rgba(255,255,255,1)",
                    }}
                    whileInView={{
                      opacity: 0.08,
                      x: "6vw",
                      color: "rgba(255,255,255,1)",
                      WebkitTextStroke: "0px rgba(255,255,255,1)",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    transition={{
                      x: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.15,
                      },
                      opacity: {
                        delay: 1.8,
                        duration: 0.6,
                      },
                      color: {
                        delay: 1.8,
                        duration: 0.6,
                      },
                      WebkitTextStroke: {
                        delay: 1.8,
                        duration: 0.6,
                      },
                    }}
                  >
                    <ModulePreview
                      text="PROCEDURES."
                      color=""
                      outline={!1}
                      className="text-[clamp(2.5rem,11vw,13rem)] leading-[0.75] tracking-tighter"
                    />
                  </motion.div>
                </div>
                <div className="relative z-10 pl-6 md:pl-48 flex flex-col">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -200,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: !0,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 2.5,
                    }}
                  >
                    <ModulePreview
                      text="WE ARCHITECT"
                      color="text-white"
                      className="text-[clamp(2.2rem,8.5vw,10rem)] leading-[0.8] tracking-tight drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -200,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: !0,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 2.65,
                    }}
                  >
                    <ModulePreview
                      text="DOMINATION."
                      color="text-transparent bg-clip-text bg-gradient-to-r from-[#e8b4fe] via-[#c084fc] to-[#9d50bb]"
                      className="text-[clamp(2.2rem,8.5vw,10rem)] leading-[0.8] tracking-tight drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -mt-1 md:-mt-6"
                    />
                  </motion.div>
                </div>
              </div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                  margin: "-100px",
                }}
                transition={{
                  duration: 1,
                  delay: 2.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white/40 mt-16 md:mt-24 font-black text-xl md:text-3xl max-w-3xl border-l-4 border-[#9d50bb] pl-10 leading-snug uppercase tracking-tight"
              >
                {"The system is the execution. The training is the catalyst. "}
                <br className="hidden md:block" />
                There is no middle ground in the elite lab.
              </motion.p>
            </div>
          </div>
        </section>
        <CoursesFooter />
      </main>
      <style>
        {
          "\n                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@700&display=swap');\n\n                :root {\n                    --font-display: 'Space Grotesk', sans-serif;\n                }\n\n                .glass-card {\n                    background: rgba(255, 255, 255, 0.03);\n                    backdrop-filter: blur(20px);\n                    border: 1px solid rgba(255, 255, 255, 0.05);\n                }\n                .text-glow-purple { text-shadow: 0 0 15px rgba(157, 80, 187, 0.5); }\n                .text-glow-cyan { text-shadow: 0 0 15px rgba(0, 218, 243, 0.5); }\n                .hero-gradient {\n                    background: linear-gradient(to bottom, rgba(16, 16, 16, 0.1) 0%, rgba(16, 16, 16, 1) 100%);\n                }\n                ::-webkit-scrollbar {\n                    width: 10px;\n                }\n                ::-webkit-scrollbar-track {\n                    background: #0a0a0a;\n                }\n                ::-webkit-scrollbar-thumb {\n                    background: #9d50bb;\n                    border-radius: 10px;\n                }\n                ::-webkit-scrollbar-thumb:hover {\n                    background: #edb1ff;\n                }\n            "
        }
      </style>
    </LayoutGroup>
  );
}

export default Courses;
