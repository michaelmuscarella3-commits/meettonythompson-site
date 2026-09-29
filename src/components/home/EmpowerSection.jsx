import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export function EmpowerSection() {
  const e = React.useRef(null),
    t = React.useRef(null),
    n = useNavigate(),
    [r, i] = React.useState(!1);
  React.useEffect(() => {
    const e = () => i(window.innerWidth < 768);
    return (
      e(),
      window.addEventListener("resize", e),
      () => window.removeEventListener("resize", e)
    );
  }, []);
  const a = React.useRef(0),
    { scrollYProgress: s } = useScroll({
      target: e,
      offset: ["start end", "end start"],
    }),
    o = useTransform(s, [0, 1], ["-15%", "15%"]),
    l = useTransform(s, [0, 1], ["20%", "-20%"]),
    c = useTransform(s, [0.3, 0.5, 0.8], [0, 0.6, 0]);
  return (
    React.useEffect(() => {
      if (r) return;
      const n = e.current,
        i = t.current;
      if (!n || !i) return;
      const s = new IntersectionObserver(
        ([e]) => {
          e.intersectionRatio >= 0.6
            ? ((i.currentTime = a.current || 0),
              setTimeout(() => i.play().catch(() => {}), 40))
            : ((a.current = i.currentTime), i.pause());
        },
        {
          threshold: [0, 0.3, 0.5, 0.6, 0.8, 1],
        },
      );
      return (s.observe(n), () => s.disconnect());
    }, [r]),
    (
      <section
        ref={e}
        id="about"
        className="relative w-full min-h-[100dvh] md:h-[110vh] flex items-center justify-center overflow-hidden bg-black perspective-[1000px]"
      >
        {!r && (
          <motion.div
            className="absolute inset-0 w-full h-[120%] top-[-10%]"
            style={{
              y: o,
            }}
          >
            <video
              ref={t}
              className="w-full h-full object-cover opacity-60 grayscale-[20%] scale-105"
              src="/assets/videos/tony_about.mp4"
              muted={!0}
              playsInline={!0}
              preload="metadata"
              decoding="async"
              loop={!0}
            />
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/200/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
              }}
            />
          </motion.div>
        )}
        {r && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url(/assets/images/Bazebha-tony.jpg)",
              backgroundSize: "cover",
              WebkitBackgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              height: "100dvh",
              minHeight: "100dvh",
              maxHeight: "100dvh",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-[1]" />
        <div className="absolute inset-0 bg-[#7d1f97]/10 mix-blend-overlay z-[2]" />
        <motion.div
          className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#9b26b6] to-transparent z-[2] blur-[1px]"
          animate={{
            x: ["-40vw", "40vw"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: 1 / 0,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={
            "relative z-[10] flex flex-col items-center justify-center text-center px-6 w-full \r\n                -translate-y-[110px] md:translate-y-0"
          }
          style={{
            y: l,
          }}
        >
          <motion.div className="w-[2px] h-[100px] bg-gradient-to-b from-transparent via-[#9b26b6] to-transparent mb-8" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] bg-[#9b26b6] blur-[80px] md:blur-[120px] -z-10 rounded-full mix-blend-screen"
            style={{
              opacity: c,
            }}
          />
          <motion.h2 className="text-[clamp(3.8rem,14vw,6rem)] md:text-[clamp(5rem,15vw,11rem)] font-['Bebas_Neue'] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
            EMPOWER
          </motion.h2>
          <motion.h3 className="text-[clamp(0.9rem,3vw,1.8rem)] md:text-[clamp(1rem,3vw,1.8rem)] font-sans font-bold text-white/90 tracking-[0.25em] md:tracking-[0.4em] uppercase drop-shadow-lg mt-6 mb-14">
            Your Growth Journey
          </motion.h3>
          <motion.div
            onClick={() => n("/quiz-intro")}
            className="mt-8 md:mt-16 group cursor-pointer relative"
          >
            <div
              className={
                "relative flex justify-center items-center w-[260px] h-[56px] gap-3 text-white font-['Press_Start_2P'] text-[0.75rem] uppercase tracking-wider \r\n                    bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1rem] \r\n                    shadow-[0_10px_25px_rgba(155,38,182,0.3)] overflow-hidden \r\n                    transition-all duration-300 group-hover:bg-[#9b26b6]"
              }
            >
              <span className="relative z-10">GET STARTED</span>
              <ArrowRightIcon className="relative z-10 w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    )
  );
}

export default EmpowerSection;
