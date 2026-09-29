import { motion, useInView } from "framer-motion";
import { ArrowRightIcon, HashIcon, ScanLineIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ABOUT_HERO_IMG = "/assets/AboutHero-W6zhyvNU.jpg",
  AboutHeroImage = () => {
    const e = Array.from({
      length: 18,
    }).map((e, t) => {
      const n = 1.5 * Math.random() + 1,
        r = Math.random();
      let i, a;
      return (
        r < 0.4
          ? ((i = 2 * n), (a = 2 * n))
          : r < 0.7
            ? ((i = 3.5 * n), (a = n))
            : ((i = n), (a = 3.5 * n)),
        {
          id: t,
          top: 100 * Math.random() + "%",
          left: 100 * Math.random() + "%",
          width: i,
          height: a,
          duration: 3 * Math.random() + 2,
        }
      );
    });
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {e.map((e) => (
          <motion.div
            className="absolute bg-white/90 shadow-[0_0_3px_white] rounded-none"
            style={{
              top: e.top,
              left: e.left,
              width: e.width,
              height: e.height,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: e.duration,
              repeat: 1 / 0,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            key={e.id}
          />
        ))}
      </div>
    );
  };

export function MeetTonySection() {
  const e = useNavigate(),
    [t, n] = React.useState(!1),
    [r, i] = React.useState(!1);
  React.useEffect(() => {
    const e = () => n(window.innerWidth < 768);
    return (
      e(),
      window.addEventListener("resize", e),
      () => window.removeEventListener("resize", e)
    );
  }, []);
  const a = React.useRef(null),
    s = useInView(a, {
      amount: 0.2,
    });
  (React.useEffect(() => {
    if (!t) {
      const e = a.current;
      e &&
        (s
          ? e.play().catch((e) => console.log("Video play interrupted:", e))
          : e.pause());
    }
  }, [s, t]),
    React.useEffect(() => {
      new Image().src = ABOUT_HERO_IMG;
    }, []));
  const o = () => {
      e("/meet-tony");
    },
    l = () => {
      e("/book-tony");
    },
    c = {
      hidden: {
        opacity: 0,
        y: 26,
        filter: "blur(4px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.85,
          ease: [0.23, 1, 0.32, 1],
        },
      },
    },
    Cu_ = ({ children: e, icon: t = HashIcon }) => {
      const Cn_ = t;
      return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9b26b6]/10 border border-[#9b26b6]/30 text-[#f3d4ff] font-mono text-[10px] tracking-[0.22em] uppercase mb-6 backdrop-blur-sm">
          <Cn_ size={10} className="text-[#ecaefc]" />
          <span className="drop-shadow-sm">{e}</span>
        </div>
      );
    };
  return (
    <>
      <section
        id="meet-tony"
        className="relative w-full min-h-[100dvh] md:min-h-[105vh] flex flex-col md:flex-row bg-[#0b080e] text-white overflow-hidden"
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0b080e] to-transparent z-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b080e] to-transparent z-40 pointer-events-none" />
        <div className="relative w-full flex-grow md:flex-grow-0 md:w-[48%] flex flex-col justify-start px-6 md:px-12 lg:px-20 pt-44 md:pt-48 pb-12 md:pb-14 z-10 overflow-hidden">
          <div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            style={{
              maskImage: t
                ? "linear-gradient(to bottom, black 60%, transparent 100%)"
                : "linear-gradient(to right, black 40%, transparent 100%)",
              WebkitMaskImage: t
                ? "linear-gradient(to bottom, black 60%, transparent 100%)"
                : "linear-gradient(to right, black 40%, transparent 100%)",
            }}
          >
            <motion.div
              initial={{
                scale: 1.1,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              <img
                src={ABOUT_HERO_IMG}
                alt="Tony Thompson"
                className="w-full h-full object-cover opacity-[0.9] object-top grayscale brightness-[0.9] contrast-[1.15]"
                style={{
                  transform: "translateY(-0.5cm)",
                  height: "calc(100% + 0.5cm)",
                }}
              />
              <div className="absolute inset-0 bg-[#0b080e]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#4a105a]/20 mix-blend-soft-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b080e] via-[#0b080e]/40 to-transparent" />
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.35,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="relative z-20"
          >
            <Cu_ icon={ScanLineIcon}>The Origin Story</Cu_>
            <motion.div variants={c}>
              <h1 className="text-[clamp(3rem,6vw,5.6rem)] font-black leading-[0.9] drop-shadow-2xl">
                ABOUT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3d4ff] via-white to-[#f3d4ff]">
                  TONY
                </span>
              </h1>
              <div className="w-24 h-1 mt-6 bg-gradient-to-r from-[#9b26b6] to-transparent shadow-[0_0_15px_#9b26b6]" />
            </motion.div>
            <motion.p
              variants={c}
              className="text-[1rem] md:text-[1.25rem] leading-[1.7] font-light text-gray-100 mt-8 mb-8 max-w-lg drop-shadow-md"
            >
              Tony Thompson is a catalyst for transformation—merging
              <span className="font-semibold text-white border-b border-[#9b26b6]">
                {" purpose"}
              </span>
              ,
              <span className="font-semibold text-white border-b border-[#9b26b6]">
                {" systems"}
              </span>
              {" and"}
              <span className="font-semibold text-white border-b border-[#9b26b6]">
                {" high-performance"}
              </span>
              {" into a blueprint built for momentum."}
            </motion.p>
          </motion.div>
          <motion.button
            onClick={l}
            onMouseEnter={() => i(!0)}
            onMouseLeave={() => i(!1)}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className={
              "relative z-30 mt-auto\r\n                                   hidden md:flex\r\n                                   w-[200px] md:w-[220px]\r\n                                   h-[64px] md:h-[86px]\r\n                                   items-center justify-center\r\n                                   rounded-xl\r\n                                   border border-[#f0c9ff]/20\r\n                                   bg-gradient-to-br from-[#4a105a] via-[#2c0536] to-[#0b080e]\r\n                                   shadow-[0_4px_30px_rgba(0,0,0,0.5)]\r\n                                   hover:bg-gradient-to-br hover:from-[#9b26b6] hover:to-[#7d1f97]\r\n                                   cursor-pointer\r\n                                   transition-all duration-300"
            }
          >
            <span className="text-white font-['Press_Start_2P'] text-[12px] md:text-[14px] tracking-[0.2em]">
              {r ? "TONY" : "BOOK"}
            </span>
          </motion.button>
        </div>
        <div className="relative w-full flex-none h-auto md:h-auto md:flex-1 overflow-hidden bg-[#0b080e] flex items-end justify-center pb-12 md:pb-14 pt-0">
          {!t && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="absolute inset-0 z-0"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 60%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 60%)",
              }}
            >
              <video
                ref={a}
                className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-[1.1] brightness-[1.1] saturate-[1.15]"
                loop={!0}
                muted={!0}
                playsInline={!0}
                preload="auto"
              >
                <source
                  src="/assets/tonywin_optimized-DjO39XyK.webm"
                  type="video/webm"
                />
                <source
                  src="/assets/tonywin_optimized-9Qg5pt-K.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b080e] via-transparent to-[#0b080e]/10" />
            </motion.div>
          )}
          {t && (
            <div className="flex items-stretch gap-[6px] w-[90%] max-w-[340px] h-[64px] z-30">
              <motion.button
                onClick={l}
                onMouseEnter={() => i(!0)}
                onMouseLeave={() => i(!1)}
                whileTap={{
                  scale: 0.98,
                }}
                className={
                  "relative flex-[55%] h-full flex items-center justify-center\r\n                                           rounded-l-xl\r\n                                           border border-[#f0c9ff]/20\r\n                                           bg-gradient-to-br from-[#9b26b6] to-[#7d1f97]\r\n                                           shadow-[0_4px_30px_rgba(0,0,0,0.5)]\r\n                                           cursor-pointer"
                }
              >
                <span className="text-white font-['Press_Start_2P'] text-[12px] tracking-[0.2em]">
                  {r ? "TONY" : "BOOK"}
                </span>
              </motion.button>
              <motion.button
                onClick={o}
                whileTap={{
                  scale: 0.98,
                }}
                className={
                  "relative flex-[45%] h-full bg-black/90 backdrop-blur-xl flex items-center justify-center overflow-hidden\r\n                                           border border-[#f0c9ff]/30 shadow-inner\r\n                                           rounded-r-xl cursor-pointer"
                }
              >
                <AboutHeroImage />
                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-gray-400 text-[7px] font-mono uppercase tracking-[0.2em] leading-none mb-1 mt-1">
                    Into His
                  </span>
                  <span className="text-[#e0aaff] text-[9px] font-['Press_Start_2P'] uppercase tracking-widest leading-none drop-shadow-[0_0_10px_rgba(224,170,255,0.8)]">
                    UNIVERSE
                  </span>
                </div>
              </motion.button>
            </div>
          )}
          {!t && (
            <motion.button
              onClick={o}
              initial="rest"
              whileHover="hover"
              whileTap={{
                scale: 0.98,
              }}
              variants={{
                rest: {
                  gap: "0px",
                },
                hover: {
                  gap: "6px",
                  transition: {
                    duration: 0.4,
                    ease: "backOut",
                  },
                },
              }}
              className="relative group w-[360px] h-[86px] flex items-stretch cursor-pointer z-30 perspective-1000"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#9b26b6] to-[#4a105a] rounded-xl opacity-20 blur-xl group-hover:opacity-50 transition duration-500" />
              <motion.div
                variants={{
                  rest: {
                    width: "100%",
                    borderTopRightRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                    backgroundColor: "rgba(74, 16, 90, 0.9)",
                  },
                  hover: {
                    width: "55%",
                    borderTopRightRadius: "0.25rem",
                    borderBottomRightRadius: "0.25rem",
                    backgroundColor: "rgba(155, 38, 182, 1)",
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  },
                }}
                className={
                  "relative h-full flex items-center justify-center overflow-hidden\r\n                               border border-[#f0c9ff]/20\r\n                               bg-gradient-to-br from-[#4a105a] via-[#2c0536] to-[#0b080e]\r\n                               shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-20"
                }
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderBottomLeftRadius: "0.75rem",
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 animate-[pulse_2s_infinite]" />
                <span className="relative z-10 text-white font-['Press_Start_2P'] text-[14px] tracking-[0.2em] flex items-center gap-4">
                  STEP
                  <ArrowRightIcon className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out text-[#f0c9ff] drop-shadow-[0_0_8px_#f0c9ff]" />
                </span>
              </motion.div>
              <motion.div
                variants={{
                  rest: {
                    width: "0%",
                    opacity: 0,
                    x: -10,
                  },
                  hover: {
                    width: "45%",
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className={
                  "relative h-full bg-black/90 backdrop-blur-xl flex items-center justify-center overflow-hidden\r\n                               border border-[#f0c9ff]/30 shadow-inner"
                }
                style={{
                  borderTopRightRadius: "0.75rem",
                  borderBottomRightRadius: "0.75rem",
                }}
              >
                <AboutHeroImage />
                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none min-w-[140px]">
                  <motion.div
                    variants={{
                      rest: {
                        opacity: 0,
                        y: 10,
                        filter: "blur(5px)",
                      },
                      hover: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.3,
                          delay: 0.15,
                        },
                      },
                    }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-gray-400 text-[8px] font-mono uppercase tracking-[0.2em] leading-none mb-2 mt-1">
                      Into His
                    </span>
                    <span className="text-[#e0aaff] text-[10px] font-['Press_Start_2P'] uppercase tracking-widest leading-none drop-shadow-[0_0_10px_rgba(224,170,255,0.8)]">
                      UNIVERSE
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.button>
          )}
        </div>
      </section>
    </>
  );
}

export default MeetTonySection;
