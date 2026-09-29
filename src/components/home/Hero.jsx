import React from "react";
import { useVideoPlayer } from "../media/VideoPlayerProvider";
import { ScrollIndicator } from "../ScrollIndicator";

const BASE = "/",
  HERO_IMG = `${BASE}assets/mzhandu1.jpg`,
  HERO_VIDEO = `${BASE}videos/verticallo.mp4`,
  SIGNATURE_IMG = `${BASE}assets/images/ts.png`,
  AWARD_IMG = `${BASE}assets/images/award.jpg`;

export function Hero({ setHeroVisible: e }) {
  const t = React.useRef(null),
    n = React.useRef(null),
    { openVideo: r } = useVideoPlayer(),
    i = React.useRef(0),
    [a, s] = React.useState(!1),
    [o, l] = React.useState(!1),
    [c, u] = React.useState(!1);
  (React.useEffect(() => {
    const e = () => {
      const e = window.innerWidth,
        t = e <= 767,
        n = e >= 768 && e <= 1024,
        r = window.matchMedia("(pointer: coarse)").matches,
        i = window.innerHeight < 750;
      (s(t && r), l(n), u(t && r && i));
    };
    return (
      e(),
      window.addEventListener("resize", e),
      () => window.removeEventListener("resize", e)
    );
  }, []),
    React.useEffect(() => {
      if (!a) return;
      let e = 0;
      const t = (t) => {
          0 === window.scrollY && (e = t.touches[0].clientY);
        },
        n = (t) => {
          if (0 === window.scrollY) {
            t.changedTouches[0].clientY - e > 150 && window.location.reload();
          }
        };
      return (
        window.addEventListener("touchstart", t, {
          passive: !0,
        }),
        window.addEventListener("touchend", n, {
          passive: !0,
        }),
        () => {
          (window.removeEventListener("touchstart", t),
            window.removeEventListener("touchend", n));
        }
      );
    }, [a]));
  const d = {
      contain: "layout paint style",
      height: a ? "100dvh" : "100vh",
    },
    h = a
      ? {
          position: "absolute",
          top: "calc(35% + 210px)",
          left: "0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          transform: "translateY(-50%)",
          textAlign: "center",
          padding: "0 1rem",
        }
      : {
          position: "absolute",
          top: "41%",
          left: "2rem",
          maxWidth: "55vw",
          zIndex: 3,
          transform: "translateY(-50%)",
          textAlign: "left",
        },
    f = a
      ? {
          fontSize: c ? "2.2rem" : "2.8rem",
          lineHeight: 1.15,
          fontWeight: 800,
          textShadow: "0 6px 16px rgba(0,0,0,0.45)",
          width: "100%",
        }
      : {
          fontSize: o ? "3.5rem" : "clamp(3rem, 5vw, 5.8rem)",
          lineHeight: 1.05,
          fontWeight: 800,
          textShadow: "0 8px 20px rgba(0,0,0,0.5)",
        },
    p = a
      ? {
          position: "absolute",
          bottom: "8%",
          left: "0",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "0.75rem",
          justifyContent: "center",
          zIndex: 900004,
        }
      : {
          position: "absolute",
          bottom: "2.8rem",
          left: "3rem",
          display: "flex",
          flexDirection: "row",
          gap: "0.75rem",
          zIndex: 900004,
        },
    m = a
      ? {
          width: "120px",
          height: "44px",
          fontSize: "0.75rem",
        }
      : o
        ? {
            width: "75px",
            height: "28px",
            fontSize: "0.5rem",
          }
        : {
            width: "150px",
            height: "56px",
            fontSize: "0.9rem",
          },
    g = a
      ? {
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }
      : {
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center calc(50% - 80px)",
        };
  (React.useEffect(() => {
    if (!t.current || !e) return;
    const n = new IntersectionObserver(([t]) => e(t.intersectionRatio > 0.15), {
      threshold: Array.from(
        {
          length: 11,
        },
        (e, t) => t / 10,
      ),
    });
    return (n.observe(t.current), () => n.disconnect());
  }, [e]),
    React.useEffect(() => {
      const e = t.current,
        r = n.current;
      if (!e || !r) return;
      const a = new IntersectionObserver(
        ([e]) => {
          1 === e.intersectionRatio
            ? ((r.currentTime = i.current || 0),
              setTimeout(() => r.play().catch(() => {}), 40))
            : ((i.current = r.currentTime), r.pause());
        },
        {
          threshold: 1,
        },
      );
      return (a.observe(e), () => a.disconnect());
    }, []));
  const x = (e) => {
    const t = document.querySelector(e);
    if (!t) return;
    if (a)
      return void t.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    const n = () => {
      const e = window.lenis;
      e
        ? e.scrollTo(t, {
            duration: 1.4,
            offset: -40,
          })
        : t.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
    };
    "function" == typeof window.triggerGlobalFog
      ? window.triggerGlobalFog(n)
      : n();
  };
  return (
    <section
      ref={t}
      id="home"
      role="main"
      className="hero relative w-full flex items-center justify-center overflow-hidden bg-black text-white"
      style={d}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[1]"
        style={g}
      />
      <div
        className={
          "absolute z-[10] deliberate-entry delay-award group\n                transition-all duration-300 \n                animate-floatFast\n                \n                /* MOBILE: Top 5.25rem */\n                left-[24px] top-[5.25rem] w-[80px]\n\n                /* DESKTOP: Top calc(18%+36px) */\n                md:left-auto md:right-[4rem] md:top-[calc(18%+36px)] md:w-[140px]\n                "
        }
      >
        <div
          className={
            "relative w-full aspect-square rounded-full overflow-hidden \r\n                                border-[3px] border-[#fbbf24] \r\n                                shadow-[0_0_25px_rgba(251,191,36,0.6)]\r\n                                animate-heartbeat bg-black"
          }
        >
          <img
            src={AWARD_IMG}
            alt="Global 100 Mortgage Leader"
            className="w-full h-full object-cover scale-[1.05]"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/80 to-transparent skew-x-[-25deg] translate-x-[-150%] animate-superSheen" />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div style={h}>
        <h1 className="slogan-block" style={f}>
          <span className="slogan-line delay-0">The piece</span>
          <br />
          <span className="slogan-line delay-1">that changes</span>
          <br />
          <span className="slogan-line delay-2">YOUR game.</span>
        </h1>
        <div
          className={`relative ${c ? "mt-4" : "mt-6"} slogan-line delay-3 ${a ? "mx-auto" : "ml-1"}`}
          style={{
            display: "block",
            width: "fit-content",
          }}
        >
          <div className="relative w-fit">
            <img
              src={SIGNATURE_IMG}
              alt="Tony Thompson Signature"
              className={`${c ? "w-[180px]" : "w-[240px]"} ${o ? "md:w-[280px]" : "md:w-[400px]"} opacity-90 invert brightness-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
            />
            <span className="absolute -right-5 top-1 text-white/70 text-[0.85rem] font-sans font-light animate-signaturePeriod">
              ®
            </span>
          </div>
        </div>
      </div>
      <div style={p} className="animate-buttonFloat deliberate-entry delay-cta">
        <div
          onClick={() => x("#about")}
          className={
            "relative flex justify-center items-center text-white font-['Press_Start_2P'] cursor-pointer group\r\n                    bg-gradient-to-br from-[#952ca8]/85 to-[#7d1f97]/70 rounded-[10px]\r\n                    border border-white/20 shadow-[0_10px_25px_rgba(177,79,192,0.7)]\r\n                    transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.3,1)]\r\n                    hover:translate-y-[-4px] uppercase tracking-wider"
          }
          style={m}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulseGlow rounded-[10px]" />
          <span className="transition-all duration-500 group-hover:opacity-0">
            GET
          </span>
          <span className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100">
            STARTED
          </span>
        </div>
        <div
          onClick={() => x("#programs")}
          className={
            "relative flex justify-center items-center text-white font-['Press_Start_2P'] cursor-pointer group\r\n                    bg-gradient-to-br from-[#7d1f97]/85 to-[#952ca8]/70 rounded-[10px]\r\n                    border border-white/20 shadow-[0_10px_25px_rgba(155,38,182,0.7)]\r\n                    transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.3,1)]\r\n                    hover:translate-y-[-4px] uppercase tracking-wider"
          }
          style={m}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulseGlow rounded-[10px]" />
          <span className="transition-all duration-500 group-hover:opacity-0">
            WIN
          </span>
          <span className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100">
            NOW
          </span>
        </div>
      </div>
      {!a && (
        <div
          className="video-widget deliberate-entry delay-widget group absolute bottom-[3rem] right-[2rem] z-[900003] cursor-pointer select-none"
          onClick={() => r(HERO_VIDEO)}
        >
          <div
            className={
              "relative rounded-[2cm]\r\n                        bg-gradient-to-br from-[#952ca8] to-[#7d1f97]\r\n                        shadow-[0_0_22px_rgba(155,38,182,0.75)]\r\n                        flex justify-center items-center overflow-hidden animate-float"
            }
            style={{
              width: "6.5cm",
              height: "2.3cm",
              transform: o ? "scale(0.5)" : "none",
              transformOrigin: "bottom right",
            }}
          >
            <video
              ref={n}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              muted={!0}
              loop={!0}
              playsInline={!0}
              preload="auto"
              onTimeUpdate={(e) => (i.current = e.target.currentTime)}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <span className="relative z-10 font-['Press_Start_2P'] text-[0.8rem] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#e5c4ff] via-[#ffffff] to-[#e5c4ff]">
              PRESS PLAY
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#7d1f97]/40 to-[#952ca8]/25 pointer-events-none" />
          </div>
        </div>
      )}
      {!a && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-[5] deliberate-entry delay-arrow">
          <ScrollIndicator target="#meet-tony" />
        </div>
      )}
      <style>
        {
          "\n                /* =========================================\n                   ⭐ ANIMATIONS\n                   ========================================= */\n\n                @keyframes superSheen {\n                    0% { transform: translateX(-150%) skewX(-25deg); }\n                    15% { transform: translateX(150%) skewX(-25deg); } \n                    100% { transform: translateX(150%) skewX(-25deg); } \n                }\n                .animate-superSheen {\n                    animation: superSheen 3.5s ease-in-out infinite;\n                    animation-delay: 2s;\n                }\n\n                @keyframes floatFast {\n                    0%, 100% { transform: translateY(0); }\n                    50% { transform: translateY(-10px); }\n                }\n                .animate-floatFast {\n                    animation: floatFast 3s ease-in-out infinite;\n                }\n\n                @keyframes heartbeat {\n                    0%, 100% { transform: scale(1); box-shadow: 0 0 25px rgba(251,191,36,0.6); }\n                    50% { transform: scale(1.05); box-shadow: 0 0 45px rgba(251,191,36,0.9); }\n                }\n                .animate-heartbeat {\n                    animation: heartbeat 2s ease-in-out infinite;\n                }\n\n                @keyframes pulseGlow {\n                    0%,100% { opacity:0.4; transform:translateX(-25%); }\n                    50% { opacity:0.9; transform:translateX(25%); }\n                }\n                .animate-pulseGlow { animation:pulseGlow 6s ease-in-out infinite; }\n                \n                @keyframes fadeSlideIn {\n                    0% { opacity: 0; transform: translateY(24px) scale(0.98); filter: blur(4px); }\n                    60% { opacity: 0.8; }\n                    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }\n                }\n                \n                @keyframes fadeSlideInDesktop {\n                    0% { opacity: 0; transform: translateX(-60px) translateY(15px) scale(0.96); filter: blur(8px); }\n                    50% { opacity: 0.6; }\n                    100% { opacity: 1; transform: translateX(0) translateY(0) scale(1); filter: blur(0); }\n                }\n\n                @keyframes deliberateFadeIn {\n                    0% { opacity: 0; transform: translateY(30px) scale(0.96); filter: blur(6px); }\n                    60% { opacity: 0.7; }\n                    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }\n                }\n\n                @keyframes deliberateFadeInDesktop {\n                    0% { opacity: 0; transform: translateY(45px) scale(0.94); filter: blur(10px); }\n                    50% { opacity: 0.5; }\n                    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }\n                }\n\n                @keyframes periodFadeIn {\n                    0% { opacity: 0; transform: scale(0.3) rotate(-12deg); filter: blur(3px); }\n                    70% { transform: scale(1.05) rotate(2deg); }\n                    100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }\n                }\n\n                @keyframes periodFadeInDesktop {\n                    0% { opacity: 0; transform: scale(0.2) rotate(-18deg); filter: blur(5px); }\n                    60% { transform: scale(1.08) rotate(3deg); }\n                    100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }\n                }\n\n                .slogan-line { display: inline-block; opacity: 0; animation: fadeSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; will-change: transform, opacity; }\n                .animate-signaturePeriod { opacity: 0; animation: periodFadeIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; animation-delay: 2.6s; will-change: transform, opacity; }\n                .deliberate-entry { opacity: 0; animation: deliberateFadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; will-change: transform, opacity; }\n\n                @media (min-width: 768px) {\n                    .slogan-line { animation: fadeSlideInDesktop 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }\n                    .deliberate-entry { animation: deliberateFadeInDesktop 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }\n                    .animate-signaturePeriod { animation: periodFadeInDesktop 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; animation-delay: 2.8s; }\n                }\n\n                .slogan-line.delay-0 { animation-delay: 0.2s; }\n                .slogan-line.delay-1 { animation-delay: 0.5s; }\n                .slogan-line.delay-2 { animation-delay: 0.8s; }\n                .slogan-line.delay-3 { animation-delay: 1.1s; }\n                .delay-award { animation-delay: 1.3s; }\n                .delay-cta { animation-delay: 1.6s; }\n                .delay-widget { animation-delay: 1.8s; }\n                .delay-arrow { animation-delay: 2.1s; }\n\n                @media (prefers-reduced-motion: reduce) {\n                    .slogan-line, .deliberate-entry, .animate-signaturePeriod, .animate-superSheen, .animate-heartbeat, .animate-floatFast {\n                        animation: none; opacity: 1; transform: none; filter: none; box-shadow: 0 0 10px rgba(251,191,36,0.5);\n                    }\n                }\n            "
        }
      </style>
    </section>
  );
}

export default Hero;
