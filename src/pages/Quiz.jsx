import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { QUESTIONS, RESULTS, StretchText } from "../components/quiz/quizData";
import { GlassPanel } from "../components/quiz/QuizUI";

export function Quiz() {
  const e = useNavigate(),
    [t, n] = React.useState(0),
    [r, i] = React.useState(null),
    [a, s] = React.useState({
      name: "",
      email: "",
      phone: "",
    }),
    [, o] = React.useState([]),
    [l, c] = React.useState({}),
    [u, d] = React.useState(!1),
    [h, f] = React.useState(!1),
    [p, m] = React.useState(!1),
    [g, x] = React.useState(!1),
    b = QUESTIONS[t],
    v = QUESTIONS.length,
    y = React.useCallback(() => {
      b.isFinal ||
        null === r ||
        (o((e) => [
          ...e,
          {
            step: b.title,
            choice: r,
          },
        ]),
        i(null),
        n((e) => Math.min(e + 1, v - 1)));
    }, [b, r, v]),
    w = React.useCallback(() => {
      n((e) => Math.max(e - 1, 0));
    }, []),
    N = React.useCallback((e, t) => {
      (s((n) => ({
        ...n,
        [e]: t,
      })),
        c((t) => {
          if (t[e]) {
            const n = {
              ...t,
            };
            return (delete n[e], n);
          }
          return t;
        }));
    }, []),
    k = React.useCallback(() => {
      const e = (a.phone || "").replace(/\D/g, ""),
        t = {};
      return (
        a.name?.trim() || (t.name = "REQUIRED"),
        a.email?.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email) || (t.email = "INVALID")
          : (t.email = "REQUIRED"),
        a.phone?.trim()
          ? /^\d{7,15}$/.test(e) || (t.phone = "INVALID")
          : (t.phone = "REQUIRED"),
        c(t),
        0 === Object.keys(t).length
      );
    }, [a]),
    _ = React.useCallback(async () => {
      k() &&
        (d(!0),
        fetch("/api/cc-add-contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: a.email,
            first: a.name.split(" ")[0] || "",
            last: a.name.split(" ").slice(1).join(" ") || "",
            phone: a.phone,
            tier: "quiz",
          }),
        }).catch(() => {}),
        await (async function () {
          return new Promise((e) => setTimeout(e, 2e3));
        })(),
        x(!0),
        setTimeout(() => m(!0), 600),
        setTimeout(() => {
          (e("/roadmap"), (document.body.style.overflowY = "auto"));
        }, 1500));
    }, [a, k, e]);
  return (
    <section className="relative min-h-[100dvh] w-full bg-[#050505] text-white overflow-hidden flex flex-col md:flex-row font-sans">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="w-full md:w-[45%] min-h-screen flex flex-col relative z-10 bg-[#080808]/90 backdrop-blur-2xl border-r border-white/5 shadow-2xl">
        {!b.isFinal && (
          <div className="px-6 md:pl-16 md:pr-4 pt-16 md:pt-10 pb-4 shrink-0 flex flex-col gap-4 relative">
            <div className="flex justify-between items-center md:items-end">
              <div className="h-[2px] flex-1 bg-white/5 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9b26b6] to-white"
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: ((t + 1) / v) * 100 - 100 + "%",
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    boxShadow: "0 0 20px rgba(155,38,182,0.8)",
                  }}
                />
              </div>
              <div className="hidden md:flex pl-8 flex-col items-end shrink-0 md:mt-2">
                <span className="text-[9px] font-mono tracking-[0.3em] text-white/20 leading-none mb-1.5">
                  PHASE
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-[#D4AF37] tabular-nums">
                    0{t + 1}
                  </span>
                  <span className="text-white/10 text-xs">/</span>
                  <span className="text-xs font-bold text-white/30 tabular-nums">
                    0{v}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex-1 flex flex-col px-8 md:px-16 pt-12 md:pt-8 justify-start md:justify-center overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {b.isFinal ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(20px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0)",
                }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="w-full"
                key={"final"}
              >
                <div className="mb-8">
                  <StretchText
                    text="STRATEGY"
                    className="text-[clamp(2.5rem,5vw,4.5rem)]"
                  />
                  <StretchText
                    text="INITIALIZED"
                    color="text-[#D4AF37]"
                    className="text-[clamp(2.5rem,5vw,4.5rem)] -mt-2 md:-mt-4"
                  />
                  <p className="text-white/40 text-base font-light leading-relaxed mt-4 max-w-sm">
                    Enter your coordinates to receive the full precision
                    roadmap.
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    (e.preventDefault(), k() && _());
                  }}
                  className="space-y-4"
                >
                  {RESULTS.map((e, t) => (
                    <div className="relative group overflow-hidden" key={e.key}>
                      <e.icon className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#9b26b6] transition-colors" />
                      <input
                        type={e.type}
                        value={a[e.key]}
                        onChange={(t) => N(e.key, t.target.value)}
                        placeholder={e.label}
                        className={
                          "w-full bg-white/[0.03] border-b border-white/10 px-16 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#9b26b6] focus:bg-white/[0.06] transition-all uppercase text-[11px] font-mono tracking-widest " +
                          (l[e.key] ? "border-[#9b26b6]/50" : "")
                        }
                      />
                      {l[e.key] && (
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[9px] text-[#9b26b6] font-mono tracking-tighter opacity-80">
                          {l[e.key]}
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="pt-8">
                    <GlassPanel className="w-full">
                      <button
                        type="submit"
                        disabled={u}
                        className="w-full py-6 bg-white text-black font-black tracking-[0.4em] uppercase text-xs hover:bg-[#9b26b6] hover:text-white transition-all duration-500 rounded-full"
                      >
                        {u ? "HYDRATING ASSETS..." : "CLAIM ROADMAP"}
                      </button>
                    </GlassPanel>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full"
                key={b.id}
              >
                <div className="mb-6 md:mb-10">
                  <StretchText
                    text={b.title}
                    className="text-[clamp(1.75rem,5vw,3.5rem)]"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  {b.options.map((e, t) => {
                    const n = r === t;
                    return (
                      <motion.button
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.08 * t,
                        }}
                        onClick={() => i(t)}
                        className={
                          "group relative flex items-center text-left w-full p-4 md:p-5 transition-all duration-500 overflow-hidden " +
                          (n
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20")
                        }
                        key={e}
                      >
                        <div
                          className={
                            "w-1 h-full absolute left-0 transition-all duration-500 " +
                            (n
                              ? "bg-[#9b26b6] scale-y-100"
                              : "bg-white/20 scale-y-0 group-hover:scale-y-50")
                          }
                        />
                        <div
                          className={
                            "flex-shrink-0 w-8 h-8 flex items-center justify-center mr-6 transition-all duration-500 " +
                            (n
                              ? "bg-black text-white"
                              : "bg-white/5 text-transparent border border-white/10 group-hover:border-[#9b26b6]/40")
                          }
                        >
                          <CheckIcon size={16} strokeWidth={4} />
                        </div>
                        <span
                          className={
                            "text-sm md:text-base font-medium transition-colors duration-500 " +
                            (n
                              ? "font-bold"
                              : "text-white/60 group-hover:text-white")
                          }
                        >
                          {e}
                        </span>
                        {!n && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#9b26b6]/0 via-[#9b26b6]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
                <div className="flex md:hidden flex-col items-center mt-28 mb-4">
                  <span className="text-[8px] font-mono tracking-[0.2em] text-white/10 leading-none mb-2">
                    PHASE STATUS
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-white/5" />
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-[#D4AF37] tabular-nums">
                        0{t + 1}
                      </span>
                      <span className="text-white/10 text-sm">/</span>
                      <span className="text-sm font-bold text-white/20 tabular-nums">
                        0{v}
                      </span>
                    </div>
                    <div className="h-[1px] w-8 bg-white/5" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {!b.isFinal && (
          <div className="shrink-0 px-6 md:px-16 py-6 md:py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center bg-[#080808] relative z-[50] gap-4">
            <div className="w-full sm:w-auto flex-1 flex justify-start">
              {t > 0 ? (
                <GlassPanel className="w-full sm:w-auto">
                  <button
                    onClick={w}
                    className="w-full sm:w-auto px-10 md:px-12 py-3.5 md:py-4 rounded-full border border-white/10 text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-500 uppercase"
                  >
                    BACK
                  </button>
                </GlassPanel>
              ) : (
                <div className="hidden sm:block min-w-[150px]" />
              )}
            </div>
            <div className="w-full sm:w-auto flex-1 flex justify-end">
              <GlassPanel className="w-full sm:w-auto">
                <button
                  onClick={y}
                  disabled={null === r}
                  className={`\n                                        group relative flex items-center justify-center gap-4 md:gap-8 px-10 md:px-12 py-3.5 md:py-4 rounded-full font-black tracking-[0.15em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] \n                                        transition-all duration-500 w-full sm:min-w-[200px] md:min-w-[220px] overflow-hidden\n                                        ${null === r ? "bg-white/5 text-white/10 border border-white/5 cursor-not-allowed" : "bg-white text-black hover:text-white shadow-[0_20px_40px_rgba(0,0,0,0.5)] active:scale-95"}\n                                    `}
                >
                  <span className="relative z-10 transition-colors duration-500">
                    NEXT PHASE
                  </span>
                  <ArrowRightIcon
                    size={14}
                    className={
                      "relative z-10 transition-all duration-500 " +
                      (null !== r ? "group-hover:translate-x-2" : "")
                    }
                  />
                  {null !== r && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9b26b6] to-[#7d1f97] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  )}
                </button>
              </GlassPanel>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:block w-[55%] relative overflow-hidden bg-[#050505]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              scale: 1.2,
              opacity: 0,
              filter: "blur(20px)",
            }}
            animate={{
              scale: 1,
              opacity: 0.6,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.1,
            }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0"
            key={b.image}
          >
            <img
              src={b.image}
              className="w-full h-full object-cover grayscale-[30%] opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#7d1f97]/15 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {p && (
          <motion.div
            initial={{
              y: "100%",
              filter: "blur(40px)",
            }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
          >
            <StretchText
              text="REDIRECTING"
              className="text-[clamp(3rem,8vw,6rem)] text-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {g && (
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="fixed top-8 right-8 z-[100000] px-8 py-4 bg-white text-black font-black text-[9px] tracking-[0.4em] uppercase shadow-2xl"
          >
            Roadmap Deployment Successful
          </motion.div>
        )}
      </AnimatePresence>
      <style>
        {
          "\n                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@500&display=swap');\n                .scrollbar-hide::-webkit-scrollbar { display: none; }\n                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }\n            "
        }
      </style>
    </section>
  );
}

export default Quiz;
