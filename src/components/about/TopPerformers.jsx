import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ActivityIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DatabaseIcon,
  FingerprintIcon,
  InstagramIcon,
  LinkedinIcon,
  ScanIcon,
  ShieldCheckIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

const ACCENT = "#A45BE0",
  PROFILES = [
    {
      icon: InstagramIcon,
      link: "https://www.instagram.com/tt5481562/",
    },
    {
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/meettonythompson/",
    },
    {
      icon: ({ size: e = 18 }) => (
        <svg viewBox="0 0 300 300" width={e} height={e} fill="currentColor">
          <path d="M182.1 130.4 289.2 0h-25.3l-93.3 112L101.6 0H0l112.2 162.7L0 300h25.3l99.1-118.9L198.4 300H300l-117.9-169.6ZM139.7 166l-11.5-16.4L34.4 19.5h55.7l74.1 105.4 11.5 16.4 99.7 141.1h-55.7l-79.9-116.4Z" />
        </svg>
      ),
      link: "https://x.com/TonyThomps7989",
    },
    {
      icon: YoutubeIcon,
      link: "https://www.youtube.com/@meettonythompson",
    },
  ],
  GridBackdrop = () => (
    <div className="flex gap-4 sm:gap-6 md:gap-8 pointer-events-auto">
      {PROFILES.map((e, t) => {
        const Cn__ = e.icon;
        return (
          <a
            href={e.link}
            target="_blank"
            rel="noreferrer"
            className="text-black/40 hover:text-brandPurple hover:scale-125 transition-all duration-300 cursor-pointer"
            key={t}
          >
            <Cn__ size={18} />
          </a>
        );
      })}
    </div>
  ),
  ProfileCard = ({
    data: e,
    delay: t,
    isMobile: n,
    isTablet: r,
    onClick: i,
    setFocused: a,
  }) => {
    const s = React.useRef(null),
      [o, l] = React.useState(!1),
      c = useMotionValue(0),
      u = useMotionValue(0),
      d = useTransform(
        useSpring(u, {
          stiffness: 400,
          damping: 30,
        }),
        [-0.5, 0.5],
        ["8deg", "-8deg"],
      ),
      h = useTransform(
        useSpring(c, {
          stiffness: 400,
          damping: 30,
        }),
        [-0.5, 0.5],
        ["-8deg", "8deg"],
      );
    return (
      <motion.div
        ref={s}
        onMouseMove={(e) => {
          if (n || r || !s.current) return;
          const t = s.current.getBoundingClientRect();
          (c.set((e.clientX - t.left) / t.width - 0.5),
            u.set((e.clientY - t.top) / t.height - 0.5));
        }}
        onMouseEnter={() => !n && !r && l(!0)}
        onMouseLeave={() => {
          (c.set(0), u.set(0), l(!1), a(!1));
        }}
        onClick={() => i(e)}
        initial={{
          opacity: 0,
          scale: 0.5,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            delay: t,
            type: "spring",
            bounce: 0,
          },
        }}
        style={
          n || r
            ? {}
            : {
                rotateX: d,
                rotateY: h,
                transformStyle: "preserve-3d",
              }
        }
        className={
          "relative group cursor-pointer z-[50] hover:z-[70] flex-shrink-0 " +
          (n
            ? "w-[80px] h-[80px]"
            : r
              ? "w-[100px] h-[100px]"
              : "w-[120px] h-[120px]")
        }
      >
        <div className="relative w-full h-full overflow-hidden bg-white border border-black/10 group-hover:border-brandPurple transition-all duration-300">
          <img
            src={e.src}
            alt=""
            className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <AnimatePresence>
          {!n && !r && o && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: -20,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              className="absolute left-1/2 -translate-x-1/2 -top-[100px] w-[220px] z-[999] pointer-events-none bg-white/95 backdrop-blur-md border border-brandPurple/40 p-3 shadow-xl rounded-md"
            >
              <div className="flex items-center gap-2 mb-2 border-b border-black/10 pb-1">
                <DatabaseIcon size={10} className="text-brandPurple" />
                <span className="text-[8px] font-mono text-brandPurple tracking-widest">
                  INSIGHT
                </span>
              </div>
              <p className="text-[10px] font-bold text-black leading-tight mb-1 line-clamp-2">
                "{e.quote}"
              </p>
              <p className="text-[8px] font-mono text-black/50 uppercase">
                {e.name}
                {" — "}
                {e.level}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  },
  ProfileTile = ({
    data: e,
    isMobile: t,
    isTablet: n,
    onClick: r,
    delay: i = 0,
  }) =>
    t ? null : (
      <div className="grid grid-cols-3 gap-3 md:gap-4 justify-items-center">
        {e.map((e, t) => (
          <div className={3 === t ? "col-span-3 mt-2 md:mt-4" : ""} key={e.id}>
            <ProfileCard
              data={e}
              delay={i + 0.1 * t}
              isMobile={!1}
              isTablet={n}
              onClick={r}
              setFocused={() => {}}
            />
          </div>
        ))}
      </div>
    ),
  MobileProfileCard = ({ data: e, onClick: t }) => {
    const n = React.useRef(null),
      r = (e) => {
        if (n.current) {
          const t = 0.7 * n.current.offsetWidth;
          n.current.scrollBy({
            left: "right" === e ? t : -t,
            behavior: "smooth",
          });
        }
      };
    return (
      <div className="relative w-full px-4 sm:px-6 z-10">
        <motion.div
          ref={n}
          className="flex overflow-x-scroll no-scrollbar py-4 gap-3 snap-x snap-mandatory"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
        >
          {e.map((e) => (
            <div className="snap-start flex-shrink-0" key={e.id}>
              <ProfileCard
                data={e}
                isMobile={!0}
                onClick={t}
                setFocused={() => {}}
              />
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-4 sm:left-6 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-4 sm:right-6 w-10 bg-gradient-to-l from-white to-transparent" />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={() => r("left")}
            className="p-1 bg-white/70 backdrop-blur-sm rounded-full border border-brandPurple/30 text-brandPurple/70 hover:text-brandPurple ml-1"
          >
            <ChevronLeftIcon size={16} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => r("right")}
            className="p-1 bg-white/70 backdrop-blur-sm rounded-full border border-brandPurple/30 text-brandPurple/70 hover:text-brandPurple mr-1"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
        <p className="text-center text-[8px] font-mono text-black/50 uppercase pt-2">
          Tap to view profile | Swipe to see more
        </p>
      </div>
    );
  },
  ProfileCarousel = ({
    onClick: e,
    isMobile: t,
    isTablet: n,
    isCompact: r,
  }) => {
    const [i, a] = React.useState(!1),
      s = React.useRef(null),
      o = useMotionValue(0),
      l = useMotionValue(0);
    return (
      <motion.div
        ref={s}
        onMouseMove={(e) => {
          if (t || n) return;
          const r = s.current.getBoundingClientRect();
          (o.set(0.5 * (e.clientX - (r.left + r.width / 2))),
            l.set(0.5 * (e.clientY - (r.top + r.height / 2))));
        }}
        onMouseLeave={() => {
          (o.set(0), l.set(0), a(!1));
        }}
        onMouseEnter={() => a(!0)}
        onClick={e}
        style={{
          x: useSpring(o),
          y: useSpring(l),
        }}
        className="relative z-30 cursor-pointer pointer-events-auto"
      >
        <motion.div
          animate={{
            rotate: i ? 180 : 0,
            scale: i ? 1.2 : 1,
          }}
          className={
            "absolute border-brandPurple/30 border-dashed border " +
            (r
              ? "-inset-2 rounded-xl"
              : "-inset-3 md:-inset-4 rounded-2xl md:rounded-3xl")
          }
        />
        <motion.div
          animate={{
            scale: i ? 0.95 : 1,
            backgroundColor: i ? "#fff" : "rgba(255,255,255,0.4)",
            borderColor: i ? ACCENT : "#00000033",
          }}
          className={
            "backdrop-blur-sm flex items-center justify-center relative overflow-hidden " +
            (r
              ? "w-[50px] h-[50px] rounded-lg border"
              : t
                ? "w-[70px] h-[70px] rounded-xl border-2"
                : n
                  ? "w-[85px] h-[85px] rounded-2xl border-2"
                  : "w-[98px] h-[98px] rounded-2xl border-2")
          }
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10 flex flex-col items-center gap-1">
            <motion.div
              animate={{
                color: i ? ACCENT : "#000000",
              }}
              className={
                "font-black tracking-tighter " +
                (r ? "text-[10px]" : t ? "text-base" : "text-xl")
              }
            >
              {t || i ? "WIN" : "THEY"}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  },
  ProfileModal = ({ data: e, onClose: t, isMobile: n }) => (
    React.useEffect(
      () => (
        (document.body.style.overflow = "hidden"),
        () => (document.body.style.overflow = "unset")
      ),
      [],
    ),
    e ? (
      <div
        className={
          "fixed inset-0 flex items-center justify-center " +
          (n ? "z-[999999999]" : "z-[99999]")
        }
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={t}
        />
        <motion.div
          initial={
            n
              ? {
                  y: "100%",
                }
              : {
                  scale: 0.8,
                  opacity: 0,
                }
          }
          animate={
            n
              ? {
                  y: 0,
                }
              : {
                  scale: 1,
                  opacity: 1,
                }
          }
          exit={
            n
              ? {
                  y: "100%",
                }
              : {
                  scale: 0.8,
                  opacity: 0,
                }
          }
          className={
            "relative bg-white border-2 border-brandPurple overflow-hidden " +
            (n
              ? "w-full h-[85vh] mt-auto rounded-t-3xl flex flex-col"
              : "w-[90vw] max-w-[800px] rounded-xl shadow-2xl mx-4")
          }
        >
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-brandPurple bg-brandPurple/10 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheckIcon
                className="text-brandPurple"
                size={n ? 18 : 20}
              />
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] text-brandPurple">
                  PERFORMANCE PROFILE
                </span>
                <span className="text-black font-bold tracking-wider text-xs sm:text-sm">
                  {"ID: "}
                  {e.id}
                </span>
              </div>
            </div>
            <button onClick={t} className="text-black hover:text-brandPurple">
              <XIcon size={n ? 18 : 20} />
            </button>
          </div>
          <div
            className={
              n
                ? "p-4 sm:p-6 pb-24 flex-1 overflow-y-auto grid grid-cols-1 gap-6"
                : "p-6 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 overflow-y-auto max-h-[80vh]"
            }
          >
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden border border-brandPurple/40 rounded-md flex-shrink-0">
                <img
                  src={e.src}
                  className="w-full h-full object-cover contrast-110"
                  alt="Subject"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-2 flex justify-between items-center border-t border-brandPurple/40">
                  <span className="text-[8px] sm:text-[9px] font-mono text-black/60">
                    ASSET_{e.id.replace(/\s+/g, "").substring(0, 6)}
                  </span>
                  <ScanIcon size={12} className="text-brandPurple" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/5 p-2 border border-black/10 rounded">
                  <span className="block text-[8px] font-mono text-black/40 mb-1">
                    LEVEL
                  </span>
                  <span className="text-xs font-bold text-black">
                    {e.level}
                  </span>
                </div>
                <div className="bg-black/5 p-2 border border-black/10 rounded">
                  <span className="block text-[8px] font-mono text-black/40 mb-1">
                    DIVISION
                  </span>
                  <span className="text-xs font-bold text-black">
                    {e.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col justify-center">
              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-2 mb-2 opacity-70">
                  <ActivityIcon size={14} className="text-brandPurple" />
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-black">
                    LEADERSHIP INSIGHT
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black leading-tight">
                  "{e.quote}"
                </h3>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-brandPurple to-transparent my-4 md:my-6" />
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brandPurple/10 flex items-center justify-center border border-brandPurple/40 flex-shrink-0">
                  <FingerprintIcon
                    size={16}
                    className="text-brandPurple md:w-[18px] md:h-[18px]"
                  />
                </div>
                <div>
                  <h4 className="text-black font-bold uppercase text-sm md:text-base">
                    {e.name}
                  </h4>
                  <p className="text-brandPurple text-[10px] sm:text-xs font-mono">
                    {e.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ) : null
  );

export function TopPerformers() {
  const e = (() => {
      const [e, t] = React.useState(!1);
      return (
        React.useEffect(() => {
          const e = window.matchMedia("(max-width: 768px)"),
            n = () => t(e.matches);
          return (
            n(),
            e.addEventListener("change", n),
            () => e.removeEventListener("change", n)
          );
        }, []),
        e
      );
    })(),
    t = (() => {
      const [e, t] = React.useState(!1);
      return (
        React.useEffect(() => {
          const e = window.matchMedia(
              "(min-width: 769px) and (max-width: 1024px)",
            ),
            n = () => t(e.matches);
          return (
            n(),
            e.addEventListener("change", n),
            () => e.removeEventListener("change", n)
          );
        }, []),
        e
      );
    })(),
    n = (() => {
      const [e, t] = React.useState(!1);
      return (
        React.useEffect(() => {
          const e = () => {
            const e = window.innerHeight < 720,
              n = window.innerWidth < 380;
            t(e || n);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        e
      );
    })(),
    [r, i] = React.useState(null),
    a = PROFILE_LIST.slice(0, 8),
    s = a.slice(0, 4),
    o = a.slice(4, 8);
  React.useEffect(() => {
    const e = (e) => "Escape" === e.key && i(null);
    return (
      window.addEventListener("keydown", e),
      () => window.removeEventListener("keydown", e)
    );
  }, []);
  const l = () => {
    window.location.href = "/?target=programs";
  };
  return (
    <section className="relative w-full min-h-screen bg-white text-black overflow-hidden font-sans flex items-center justify-center">
      <AnimatePresence>
        {r && <ProfileModal data={r} onClose={() => i(null)} isMobile={e} />}
      </AnimatePresence>
      <div
        className={
          "relative w-full max-w-7xl mx-auto min-h-screen min-h-[850px] flex flex-col items-center justify-center px-4 transition-all duration-700 " +
          (r ? "blur-md scale-95 opacity-50" : "")
        }
      >
        {!e && (
          <div className="absolute top-6 md:top-10 w-full flex justify-between px-6 md:px-10 text-black/40 font-mono text-[9px] md:text-xs">
            <span className="hidden lg:block">
              Winning Requires: Whatever Is Necessary
            </span>
            <span className="hidden lg:block ml-auto">
              Game-Changers Do What Others Won't
            </span>
            <span className="lg:hidden">Excellence Required</span>
          </div>
        )}
        <div className="relative w-full flex flex-col items-center justify-center pointer-events-none">
          {!e && (
            <div
              className={
                "z-30 pointer-events-auto absolute left-[5%] -rotate-3 opacity-90 transition-all duration-500\n                            md:scale-[0.65] md:bottom-[-20px] md:-left-4\n                            lg:scale-[0.8] lg:bottom-[-80px] lg:left-[5%]\n                            xl:scale-100 xl:bottom-[-180px]\n                        "
              }
            >
              <ProfileTile data={s} isMobile={!1} isTablet={t} onClick={i} />
            </div>
          )}
          <div className="z-20 pointer-events-auto text-center flex flex-col items-center my-4 md:my-0 md:-mt-32 lg:-mt-48 w-full">
            <div
              className={
                "font-black uppercase leading-[0.9] tracking-tighter text-black mb-6 sm:mb-8 md:mb-12 " +
                (e ? "text-[2.2rem]" : t ? "text-[5rem]" : "text-[7rem]")
              }
            >
              WHAT THE
              <span
                className={
                  "block " +
                  (e
                    ? "text-brandPurple text-[3rem]"
                    : t
                      ? "text-transparent [-webkit-text-stroke:2px_rgba(0,0,0,0.8)] text-[6rem]"
                      : "text-transparent [-webkit-text-stroke:2px_rgba(0,0,0,0.8)]")
                }
              >
                TOP 10%
              </span>
              DO DIFFERENTLY
              {!e && (
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                  }}
                  className="h-1.5 md:h-2 bg-brandPurple mt-2"
                />
              )}
            </div>
            {!e && (
              <div className={t ? "mt-[20px]" : "mt-[40px]"}>
                <ProfileCarousel
                  onClick={l}
                  isMobile={!1}
                  isTablet={t}
                  isCompact={!1}
                />
              </div>
            )}
          </div>
          {!e && (
            <div
              className={
                "z-30 pointer-events-auto absolute right-[5%] rotate-3 opacity-90 transition-all duration-500\n                             md:scale-[0.65] md:bottom-[-20px] md:-right-4\n                             lg:scale-[0.8] lg:bottom-[-80px] lg:right-[5%]\n                             xl:scale-100 xl:bottom-[-180px]\n                        "
              }
            >
              <ProfileTile
                data={o}
                isMobile={!1}
                isTablet={t}
                onClick={i}
                delay={0.4}
              />
            </div>
          )}
          {e && (
            <div className="w-full pointer-events-auto flex flex-col items-center">
              <MobileProfileCard data={a} onClick={i} />
              <div className={n ? "mt-2 mb-10" : "mt-6 sm:mt-8 mb-4"}>
                <ProfileCarousel
                  onClick={l}
                  isMobile={!0}
                  isTablet={!1}
                  isCompact={n}
                />
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center z-40 w-full pointer-events-none px-4">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 opacity-60 pointer-events-auto">
            <div className="h-[1px] w-8 md:w-12 bg-black" />
            <p className="font-mono text-brandPurple text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase">
              SYSTEMS.ONLINE
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-black" />
          </div>
          <GridBackdrop />
          <div className="font-black text-xl sm:text-2xl tracking-tighter opacity-50 mt-3 md:mt-4 pointer-events-auto">
            {"TONY "}
            <span className="text-brandPurple">THOMPSON</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROFILE_DETAILS = {
    fratantoni: "/assets/images/Fratantoni.jpg",
    gene: "/assets/images/Gene Frazier.jpeg",
    heidi: "/assets/images/Heidi Iverson.jpeg",
    jonna: "/assets/images/Jonna Johnson.jpeg",
    lindsi: "/assets/images/LINDSI.jpeg",
    rosie: "/assets/images/Rosie Anne Solorzano, CFE.jpeg",
    steven: "/assets/images/Steven Templeton.jpeg",
    wayne: "/assets/images/Wayne Thompson.jpeg",
  },
  PROFILE_LIST = [
    {
      id: "Jonna Johnson",
      src: PROFILE_DETAILS.jonna,
      name: "Jonna Johnson",
      role: "Strategic Markets Mortgage Loan Officer — US Bank Home Mortgage",
      location: "National",
      level: "Sales Leadership",
      quote:
        "Tony Thompson has a rare ability to turn leadership development into measurable results. After his session with our team, not only did morale rise, but our sales performance saw a clear uptick. Tony doesn't just inspire growth—he activates it.",
    },
    {
      id: "Steven Templeton",
      src: PROFILE_DETAILS.steven,
      name: "Steven Templeton",
      role: "Branch Manager — Northstar Mortgage Advisors",
      location: "Regional",
      level: "Leadership Tier 1",
      quote:
        "Tony gives teams a blueprint for winning. His consumer insights helped us rethink our approach, and within weeks our sales team was closing more deals with greater confidence. He doesn't just motivate—he drives outcomes.",
    },
    {
      id: "Rosie Anne Solorzano",
      src: PROFILE_DETAILS.rosie,
      name: "Rosie Anne Solorzano, CFE",
      role: "Financial Services Leader — Expert in Banking Operations, Servicing, Compliance, Risk & Fraud Management",
      location: "Corporate",
      level: "Executive Contributor",
      quote:
        "Tony connects with audiences on a level that's both authentic and culturally aware. His message on personal growth empowered our team to operate with more clarity and purpose, which directly translated into stronger sales results.",
    },
    {
      id: "Wayne Thompson",
      src: PROFILE_DETAILS.wayne,
      name: "Wayne Thompson",
      role: "Sales Manager — Homeowners Financial Group USA, LLC",
      location: "Division",
      level: "Sales Leader",
      quote:
        "I've worked with many leaders, but Tony stands out. His strategies helped us tighten our team communication and sharpen our sales process. The lift in production afterward was undeniable.",
    },
    {
      id: "Gene Frazier",
      src: PROFILE_DETAILS.gene,
      name: "Gene Frazier",
      role: "Vice President, Producing Area Manager — Highlands Residential",
      location: "Executive",
      level: "VP / Producing Manager",
      quote:
        "Tony's leadership perspective is powerful because it's real-world tested. His insights into consumer behavior helped our team understand our market more clearly—and we saw increased sales activity almost immediately.",
    },
    {
      id: "Heidi Iverson",
      src: PROFILE_DETAILS.heidi,
      name: "Heidi Iverson",
      role: "Builder of High-Performance Teams Organizations • Connector of People • Fractional Exec",
      location: "Advisory",
      level: "Executive Advisor",
      quote:
        "Every session with Tony feels like a breakthrough. After implementing the tactics he shared, our team became more unified, more focused, and more productive. The growth in our sales numbers spoke for itself.",
    },
    {
      id: "Michael Fratantoni",
      src: PROFILE_DETAILS.fratantoni,
      name: "Michael Fratantoni, Ph.D",
      role: "Chief Economist, Senior VP — MBA",
      location: "National",
      level: "Executive Economist",
      quote:
        "When Tony speaks, he doesn't just deliver a message—he moves people.",
    },
    {
      id: "Lindsi Flynn",
      src: PROFILE_DETAILS.lindsi,
      name: "Lindsi Flynn",
      role: "Chief Marketing Officer — US Mortgage Corporation",
      location: "Corporate",
      level: "CMO",
      quote:
        "Tony is one of the most powerful and engaging speakers in the industry.",
    },
  ];

export default TopPerformers;
