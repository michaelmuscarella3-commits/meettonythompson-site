import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRightIcon,
  CircleCheckIcon,
  CrownIcon,
  TrophyIcon,
  XIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";
import { useVideoPlayer } from "../media/VideoPlayerProvider";
import { WaitlistModal } from "./WaitlistModal";

const LaunchBadge = "/videos/programsVideo.mp4",
  polarToCartesian = (e, t, n) => {
    (n(!1), t(e), setTimeout(() => n(!0), 25));
  },
  describeArc = (e, t) => [
    {
      name: "ASPIRE",
      key: "aspire",
      price: "Launching Soon",
      button: "JOIN WAITLIST",
      icon: TrophyIcon,
      onClick: () => ((e, t) => polarToCartesian("aspire", e, t))(e, t),
      features: [
        "Annual Strategic Growth Blueprint",
        "Proprietary Realtor Performance Data",
        "High-Velocity Campaign Scripts",
        "Exclusive Content Library Access",
        "Monthly Elite Mastermind Sessions",
        "Live High-Performance Coaching",
      ],
    },
    {
      name: "IGNITE",
      key: "ccl",
      price: "Launching Soon",
      button: "JOIN WAITLIST",
      icon: ZapIcon,
      onClick: () => ((e, t) => polarToCartesian("ccl", e, t))(e, t),
      features: [
        "All ASPIRE Phase Benefits",
        "Quarterly Strategic Blueprints",
        "Multicultural Marketing Engine",
        "1,700+ High-Performance Media Assets",
        "Omni-Channel Social Deployment",
        "Direct Market Authority Positioning",
      ],
    },
    {
      name: "ELEVATE",
      key: "elevate",
      price: "Limited Seats",
      button: "APPLY NOW",
      icon: CrownIcon,
      onClick: () => ((e, t) => polarToCartesian("elevate", e, t))(e, t),
      features: [
        "All IGNITE Expansion Benefits",
        "1-on-1 Elite Strategic Coaching",
        "Personalized Success Architect",
        "National Publication & Authority Features",
        "Quarterly Executive Boardroom Calls",
        "Annual Exclusive Mastermind Residency",
        "Enterprise Growth CRM & Automation",
      ],
    },
  ],
  WAITLIST_PERKS = [
    {
      feature: "Strategic Growth Blueprints",
      aspire: !0,
      ccl: !0,
      elevate: !0,
    },
    {
      feature: "Multicultural Marketing Engine",
      aspire: !1,
      ccl: !0,
      elevate: !0,
    },
    {
      feature: "Social Media Asset Library",
      aspire: !1,
      ccl: !0,
      elevate: !0,
    },
    {
      feature: "Omni-Channel Deployment",
      aspire: !1,
      ccl: !0,
      elevate: !0,
    },
    {
      feature: "Dedicated Project Management",
      aspire: !1,
      ccl: !1,
      elevate: !0,
    },
    {
      feature: "1-on-1 Strategic Coaching",
      aspire: !1,
      ccl: !1,
      elevate: !0,
    },
    {
      feature: "Executive Leadership Network",
      aspire: !1,
      ccl: !1,
      elevate: !0,
    },
  ],
  FADE_UP = {
    rest: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(155,38,182,0)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0px 0px 0px rgba(155,38,182,0)",
        "0px 0px 20px rgba(155,38,182,0.6)",
        "0px 0px 0px rgba(155,38,182,0)",
      ],
      backgroundColor: "#9b26b6",
      transition: {
        backgroundColor: {
          duration: 0.3,
        },
        scale: {
          duration: 2,
          repeat: 1 / 0,
          ease: "easeInOut",
        },
        boxShadow: {
          duration: 2,
          repeat: 1 / 0,
          ease: "easeInOut",
        },
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

export function JoinCommunity() {
  const e = useNavigate(),
    { openVideo: t, closeVideo: n, videoSrc: r } = useVideoPlayer(),
    { openQuiz: i } = React.useContext(QuizContext),
    a = React.useRef(null),
    s = React.useRef(null),
    [o, l] = React.useState(!1),
    [c, u] = React.useState(!1),
    d = useAnimation(),
    [h, f] = React.useState(!1),
    [p, m] = React.useState(!1),
    [g, x] = React.useState(!1),
    [b, v] = React.useState(null),
    [y, w] = React.useState(!1),
    [N, k] = React.useState(null),
    _ = React.useRef(!1);
  (React.useEffect(() => {
    const e = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          e.isIntersecting &&
            (d.start("visible"),
            s.current && !o && (s.current.play().catch(() => {}), l(!0)));
        });
      },
      {
        threshold: 0.4,
      },
    );
    return (a.current && e.observe(a.current), () => e.disconnect());
  }, [o, d]),
    React.useEffect(() => {
      if (r && window.__tt_fromBookTony) {
        u(!1);
        const e = setTimeout(() => u(!0), 2e3);
        return () => clearTimeout(e);
      }
      u(!1);
    }, [r]));
  const { scrollYProgress: j } = useScroll({
      target: a,
      offset: ["start end", "end start"],
    }),
    S = useTransform(j, [0, 1], [100, -100]),
    A = useTransform(j, [0, 1], [40, -40]),
    L = {
      hidden: {
        y: 60,
        opacity: 0,
        filter: "blur(12px)",
      },
      visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1.1,
          ease: [0.19, 1, 0.22, 1],
        },
      },
    };
  (React.useEffect(() => {
    const e = () => {
      (m(window.innerWidth < 768), x(window.innerWidth >= 1024));
    };
    return (
      e(),
      window.addEventListener("resize", e),
      () => window.removeEventListener("resize", e)
    );
  }, []),
    React.useEffect(() => {
      let e = null;
      const t = setTimeout(() => {
        ((e = new IntersectionObserver(
          (t) => {
            t[0].isIntersecting &&
              !_.current &&
              ((_.current = !0),
              setTimeout(() => {
                f(!0);
              }, 1500),
              e.disconnect());
          },
          {
            rootMargin: "-20% 0px -20% 0px",
            threshold: 0.4,
          },
        )),
          a.current && e.observe(a.current));
      }, 1e3);
      return () => {
        (clearTimeout(t), e && e.disconnect());
      };
    }, []));
  const E = (e, t) => {
      const n = b === e;
      let r,
        i = "";
      return (
        t &&
          ((r = "text-white"),
          n
            ? (i = "drop-shadow-[0_0_20px_rgba(255,255,255,1)] scale-125")
            : "elevate" === e &&
              (i = "drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]")),
        n && !t
          ? ((r = "bg-[#d8b4fe] scale-150"),
            (i = "shadow-[0_0_15px_rgba(255,255,255,0.7)]"))
          : t || n || (r = "bg-white/40"),
        `${t ? "w-4 h-4 md:w-6 md:h-6 mx-auto transition-all duration-300" : "w-2 h-2 rounded-full bg-white/40 mx-auto transition-all duration-300"} ${r} ${i}`
      );
    },
    P = describeArc(k, w),
    C =
      "undefined" != typeof document &&
      r &&
      window.__tt_fromBookTony &&
      c &&
      ReactDOM.createPortal(
        <div className="fixed inset-0 z-[2147483650] flex items-end justify-center pb-[10vh] pointer-events-none">
          <button
            onClick={(e) => {
              (e.preventDefault(),
                (window.__tt_fromBookTony = !1),
                (window.__tt_jumpOverride = !1),
                n(),
                setTimeout(() => {
                  const e = document.getElementById("pricing-tiers");
                  e &&
                    e.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 150));
            }}
            className="win-now-btn pointer-events-auto group relative flex justify-center items-center px-14 py-6 bg-[#9b26b6] text-white font-['Press_Start_2P'] text-[1.1rem] md:text-[1.5rem] rounded-full opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative z-10 flex overflow-hidden h-[1.5rem] md:h-[2rem] items-center">
              <span className="group-hover:-translate-y-[150%] transition-transform duration-500 ease-in-out">
                WIN
              </span>
              <span className="absolute left-0 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                NOW
              </span>
            </div>
            <style>
              {
                '\n          .win-now-btn { box-shadow: 0 0 30px rgba(155, 38, 182, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.2); border: 2px solid rgba(255, 255, 255, 0.3); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); letter-spacing: 0.1em; }\n          .win-now-btn:hover { transform: scale(1.1) translateY(-5px); box-shadow: 0 0 60px rgba(155, 38, 182, 0.9), 0 0 20px rgba(255, 255, 255, 0.4); letter-spacing: 0.3em; background: #b637d1; }\n          @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px) scale(0.9); } 100% { opacity: 1; transform: translateY(0) scale(1); } }\n          .win-now-btn::after { content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent); transform: rotate(45deg); transition: 0.6s; opacity: 0; }\n          .win-now-btn:hover::after { left: 100%; opacity: 1; transition: 0.8s; }\n        '
              }
            </style>
          </button>
        </div>,
        document.body,
      );
  return (
    <>
      <section
        id="programs"
        ref={a}
        className="relative w-full min-h-[85dvh] md:h-[110vh] overflow-hidden flex items-center justify-center bg-[#050505]"
      >
        <video
          ref={s}
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[40%] scale-[1.05]"
          src={LaunchBadge}
          poster="/videos/programsVideo_poster.webp"
          muted={!0}
          playsInline={!0}
          preload="metadata"
          loop={!0}
        />
        <div className="block md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a051d] via-[#2c0536] to-[#000]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,38,182,0.15),transparent_70%)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#2a0530]/30 to-black/90 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-[1]" />
        <motion.div
          className="relative z-[10] flex flex-col items-center text-center px-6 w-full max-w-[1400px]"
          style={{
            y: S,
          }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={d}
        >
          <motion.div variants={L} className="mb-4">
            <div className="flex items-center gap-6 opacity-90">
              <div className="h-[1px] w-[40px] md:w-[80px] bg-[#9b26b6]" />
              <h3 className="text-white text-[0.7rem] md:text-[0.9rem] tracking-[0.4em] font-bold uppercase font-sans drop-shadow-[0_0_10px_rgba(155,38,182,0.8)]">
                {" Whatever Is Necessary "}
              </h3>
              <div className="h-[1px] w-[40px] md:w-[80px] bg-[#9b26b6]" />
            </div>
          </motion.div>
          <motion.div variants={L} className="relative">
            <h1
              className="font-['Bebas_Neue'] text-[clamp(7rem,18vw,22rem)] leading-[0.85] text-white tracking-tighter"
              style={{
                textShadow: "0 0 60px rgba(155,38,182,0.4)",
                WebkitTextStroke: "1px rgba(255,255,255,0.1)",
              }}
            >
              {" WIN! "}
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#9b26b6]/25 blur-[120px] -z-10 mix-blend-screen" />
          </motion.div>
          <motion.div variants={L} className="mt-10 md:mt-14">
            <div
              onClick={() => {
                ((window.__tt_fromBookTony = !0),
                  t(LaunchBadge, {
                    programsJump: !0,
                  }));
              }}
              className="group relative flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full border border-[#9b26b6]/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute inset-[-4px] md:inset-[-12px] rounded-full border border-[#9b26b6]/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
              <div className="relative flex items-center justify-center w-[120px] md:w-[280px] h-[44px] md:h-[80px] bg-black/40 backdrop-blur-md border border-[#9b26b6]/50 rounded-full transition-all duration-500 hover:bg-[#9b26b6] hover:border-white/50 hover:scale-105 hover:shadow-[0_0_60px_rgba(155,38,182,0.6)] overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="absolute text-white font-['Press_Start_2P'] text-[0.5rem] md:text-[1.35rem] tracking-[0.18em] drop-shadow-md transition-all duration-500 ease-in-out group-hover:translate-y-[-150%] group-hover:opacity-0">
                    {" START "}
                  </span>
                  <span className="absolute text-white font-['Press_Start_2P'] text-[0.5rem] md:text-[1.35rem] tracking-[0.18em] drop-shadow-md translate-y-[150%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    {" WINNING "}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="mt-12 md:mt-20 opacity-80 flex items-start justify-center relative"
            style={{
              y: A,
            }}
            variants={L}
          >
            <div className="relative">
              <img
                src="/assets/images/ts.png"
                alt="Tony Thompson Signature"
                className="w-[180px] md:w-[260px] opacity-90 invert brightness-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
              <span
                className="absolute -right-4 top-2 text-white/60 text-[0.7rem] font-bold font-sans"
                style={{
                  textShadow: "0 0 5px rgba(255,255,255,0.5)",
                }}
              >
                {" ® "}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section
        id="pricing-tiers"
        className="relative text-white text-center overflow-hidden font-sans bg-[#050505]"
        style={{
          backgroundImage: p ? "none" : "url(/assets/step5-5GTrZZek.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: p ? "scroll" : "fixed",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: !0,
          }}
          className="pt-12 md:pt-24 pb-16 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.3em] text-[#9b26b6] mb-4 backdrop-blur-md">
              {" DEPLOYMENT CHANNELS "}
            </span>
            <h3 className="text-3xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {" GROWTH PROGRAMS "}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible">
            {P.map((e, t) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * t,
                }}
                className="relative group"
                key={t}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    zIndex: 50,
                    backgroundColor: "#000000",
                    boxShadow:
                      "0 0 0 1px rgba(155, 38, 182, 1), 0 20px 60px -10px rgba(0,0,0,0.95)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative h-full flex flex-col rounded-[2rem] bg-[#0c0c0c] border border-white/5 overflow-hidden transition-colors duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9b26b6]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />
                  <div className="flex-grow p-8 pb-4 flex flex-col relative z-10">
                    <div className="relative text-left border-b border-white/5 pb-6 mb-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[#9b26b6] group-hover:bg-[#9b26b6] group-hover:text-white transition-all duration-300">
                          {" "}
                          <e.icon size={24} />{" "}
                        </div>
                        {2 === t && (
                          <span className="py-1.5 px-3 rounded-full bg-[#9b26b6]/10 border border-[#9b26b6]/30 text-[10px] font-bold tracking-widest uppercase text-[#d8b4fe]">
                            {" Exclusive "}
                          </span>
                        )}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                        {" "}
                        {e.name}{" "}
                      </h4>
                      <p className="text-white/40 text-sm font-mono tracking-wide uppercase">
                        {" "}
                        {e.price}{" "}
                      </p>
                    </div>
                    <ul className="space-y-4 text-sm text-gray-500 mb-8 leading-relaxed text-left">
                      {e.features.map((e, t) => (
                        <li className="flex items-start gap-3" key={t}>
                          <CircleCheckIcon
                            size={16}
                            className="text-[#9b26b6] shrink-0 mt-[3px]"
                          />
                          <span className="text-white/60 transition-colors duration-300">
                            {" "}
                            {e}{" "}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-20 mt-auto">
                    <motion.button
                      onClick={e.onClick}
                      variants={FADE_UP}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full relative overflow-hidden font-['Press_Start_2P'] text-[0.7rem] md:text-[0.85rem] uppercase tracking-[0.15em] text-white border-t border-white/10 py-5 md:py-7 rounded-none rounded-b-[2rem]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {" "}
                        {e.button} <ArrowRightIcon size={16} />{" "}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-[#9b26b6]/40 to-transparent transition-transform duration-700 ease-in-out" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <hr className="w-1/2 border-t border-[#9b26b6]/30 mx-auto -mt-8 mb-8 md:-mt-16 md:mb-16" />
        <div className="relative z-20 w-full min-h-auto md:min-h-screen px-4 md:px-12 flex flex-col justify-center items-center py-12 md:py-24 bg-gradient-to-b from-[#050505] via-[#9b26b6]/20 to-[#9b26b6]/30">
          <div className="relative z-10 w-full max-w-[1400px]">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: !0,
              }}
              className="text-center mb-6 md:mb-16"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.3em] text-[#9b26b6] mb-4 backdrop-blur-md">
                {" SYSTEM ANALYSIS "}
              </span>
              <h3 className="text-3xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {" PROGRAM CAPABILITIES "}
              </h3>
            </motion.div>
            <div className="w-full overflow-x-auto rounded-3xl border border-white/10 bg-[#9b26b6]">
              <table className="w-full text-left border-collapse table-auto md:table-fixed min-w-[600px] md:min-w-full">
                <thead>
                  <tr className="bg-[#7a1d8f] border-b border-white/10">
                    <th className="w-[40%] py-4 md:py-8 px-4 md:px-12 text-white font-bold text-[0.55rem] md:text-base tracking-[0.2em] uppercase">
                      {" Core Modules "}
                    </th>
                    {["aspire", "ccl", "elevate"].map((e) => (
                      <th
                        className={
                          "w-[20%] py-4 md:py-8 px-2 md:px-8 text-center font-bold cursor-pointer " +
                          (b === e ? "bg-[#9b26b6] text-white" : "text-white")
                        }
                        onMouseEnter={() => v(e)}
                        onMouseLeave={() => v(null)}
                        key={e}
                      >
                        <div className="flex flex-col items-center gap-2">
                          {"aspire" === e && <TrophyIcon size={20} />}
                          {"ccl" === e && <ZapIcon size={20} />}
                          {"elevate" === e && <CrownIcon size={20} />}
                          <span className="text-[0.55rem] md:text-xl tracking-widest">
                            {" "}
                            {"ccl" === e ? "IGNITE" : e.toUpperCase()}{" "}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {WAITLIST_PERKS.map((e, t) => (
                    <tr
                      className="border-b border-white/10 bg-[#9b26b6]"
                      key={t}
                    >
                      <td className="w-[40%] py-4 md:py-6 px-4 md:px-12 text-white text-[0.7rem] md:text-lg">
                        {" "}
                        {e.feature}{" "}
                      </td>
                      {["aspire", "ccl", "elevate"].map((t) => (
                        <td
                          className="w-[20%] py-4 md:py-6 px-2 md:px-8 text-center"
                          key={t}
                        >
                          {e[t] ? (
                            <CircleCheckIcon className={E(t, !0)} />
                          ) : (
                            <div className={E(t, !1)} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {"undefined" != typeof document &&
          ReactDOM.createPortal(
            <AnimatePresence>
              {h && (
                <motion.div
                  className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
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
                  <div className="absolute inset-0" onClick={() => f(!1)} />
                  <motion.div
                    initial={{
                      scale: 0.9,
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.9,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="relative bg-[#0f0f0f] text-center p-6 md:p-12 rounded-2xl md:rounded-[2rem] border border-[#9b26b6]/40 w-[95%] md:w-[90%] max-w-[500px] max-h-[85vh] overflow-y-auto"
                  >
                    <button
                      onClick={() => f(!1)}
                      className="absolute top-4 right-4 md:top-5 md:right-5 text-white/50 hover:text-white"
                    >
                      {" "}
                      <XIcon size={24} className="md:w-7 md:h-7" />{" "}
                    </button>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
                      {"JOIN THE COMMUNITY "}
                      <br />
                      <span className="text-[#9b26b6]">
                        AND GET A FREE PLAY BOOK
                      </span>
                    </h3>
                    <p className="text-white/60 text-sm md:text-lg mb-6 md:mb-8">
                      {" Secure your priority position. "}
                    </p>
                    <motion.button
                      onClick={() => e("/join-inner-circle")}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="w-full py-3 md:py-4 bg-[#9b26b6] text-white rounded-xl text-sm md:text-base font-bold tracking-wider"
                      style={{
                        fontFamily: g ? '"Press Start 2P"' : "inherit",
                      }}
                    >
                      SIGN UP
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )}
        {"undefined" != typeof document &&
          ReactDOM.createPortal(
            <WaitlistModal show={y} onClose={() => w(!1)} tier={N} />,
            document.body,
          )}
      </section>
      {C}
    </>
  );
}

export default JoinCommunity;
