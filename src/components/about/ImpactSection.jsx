import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React from "react";
import { PublicationLink } from "./TrustedByTitans";

function useParallax(e, t) {
  return useTransform(e, [0, 1], [-t, t]);
}

export function ImpactSection() {
  const e = React.useRef(null),
    { scrollYProgress: t } = useScroll({
      target: e,
      offset: ["start end", "end start"],
    }),
    n = useMotionValue(0),
    r = useMotionValue(0);
  const i = useParallax(t, 100),
    a = useParallax(t, -50);
  return (
    <section
      id="impact"
      ref={e}
      onMouseMove={function ({ currentTarget: e, clientX: t, clientY: i }) {
        const { left: a, top: s } = e.getBoundingClientRect();
        (n.set(t - a), r.set(i - s));
      }}
      className="relative w-full min-h-[140vh] bg-black text-white flex flex-col justify-center items-center overflow-hidden py-32 group"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/bazadconfrerencebeings-2d4NU5Fx.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-50"
          style={{
            transform: "scaleX(-1)",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-[1]" />
      <motion.div
        className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{
          maskImage: useMotionTemplate`radial-gradient(800px circle at ${n}px ${r}px, black, transparent)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(800px circle at ${n}px ${r}px, black, transparent)`,
        }}
      />
      <motion.div
        style={{
          y: i,
        }}
        className="relative z-10 text-center mb-24 px-4"
      >
        <motion.h2
          initial={{
            opacity: 0,
            filter: "blur(20px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{
            once: !0,
          }}
          className="text-[clamp(3.5rem,8vw,8rem)] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 tracking-tighter leading-[0.9]"
        >
          {"SEE THE "}
          <br />
          {" IMPACT"}
        </motion.h2>
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "circOut",
          }}
          className="h-[1px] w-32 mx-auto bg-[#7d1f97] mt-8 shadow-[0_0_20px_#7d1f97]"
        />
      </motion.div>
      <div className="relative z-20 max-w-7xl w-full px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              label: "Featured Publications",
              value: 45,
              suffix: "+",
            },
            {
              label: "Professionals Reached",
              value: 75e3,
              suffix: "+",
            },
            {
              label: "Originators Coached",
              value: 3,
              suffix: "+",
            },
            {
              label: "Speaking Engagements",
              value: 200,
              suffix: "+",
            },
          ].map((e, t) => (
            <StatCard data={e} index={t} key={t} />
          ))}
        </div>
      </div>
      <motion.div
        style={{
          y: a,
        }}
        className="relative z-10 w-full max-w-6xl px-6"
      >
        <div className="relative p-10 md:p-14 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden perspective-[1000px]">
          <motion.div
            initial={{
              top: "-10%",
            }}
            whileInView={{
              top: "120%",
            }}
            transition={{
              duration: 3,
              repeat: 1 / 0,
              ease: "linear",
              repeatDelay: 2,
            }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#7d1f97] to-transparent opacity-50 blur-[2px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-10 items-center">
            <div className="hidden md:flex flex-col items-center gap-2 pt-2">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent opacity-30" />
            </div>
            <div className="space-y-12 text-center md:text-left">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#7d1f97]" />
                  Impact // Media Reach
                </h4>
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                  Tony has been featured in{" "}
                  <PublicationLink href="https://www.scotsmanguide.com">
                    Scotsman Guide
                  </PublicationLink>
                  ,{" "}
                  <PublicationLink href="https://www.housingwire.com">
                    Housing Wire
                  </PublicationLink>
                  ,{" "}
                  <PublicationLink href="https://www.nationalmortgagenews.com">
                    National Mortgage News
                  </PublicationLink>
                  , and more.
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/10" />
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#7d1f97]" />
                  Impact // Performance Shift
                </h4>
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                  {"Tony coaches top originators through his "}
                  <GrowthPlatformPreview />, reshaping how leaders perform and
                  win.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end py-8 lg:py-0 pr-8">
              <AwardCard />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AwardCard() {
  const e = React.useRef(null),
    t = useMotionValue(0),
    n = useMotionValue(0),
    r = useTransform(n, [-100, 100], [15, -15]),
    i = useTransform(t, [-100, 100], [-15, 15]),
    a = useTransform(t, [-100, 100], [-20, 120]),
    s = useTransform(n, [-100, 100], [-20, 120]);
  return (
    <motion.a
      ref={e}
      onMouseMove={function (r) {
        const i = e.current.getBoundingClientRect(),
          a = i.width,
          s = i.height,
          o = (r.clientX - i.left) / a - 0.5,
          l = (r.clientY - i.top) / s - 0.5;
        (t.set(200 * o), n.set(200 * l));
      }}
      onMouseLeave={function () {
        (t.set(0), n.set(0));
      }}
      style={{
        rotateX: r,
        rotateY: i,
        transformStyle: "preserve-3d",
      }}
      href="https://www.mpamag.com/uk/best-in-mortgage/worlds-100-best-mortgage-leaders-global-100/558935#winnersListSection"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-64 h-64 flex justify-center items-center cursor-pointer perspective-[1000px]"
    >
      <div
        className="absolute inset-[-50%] z-0 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000 blur-2xl animate-spinVerySlow bg-[conic-gradient(from_0deg,transparent_0deg,#d4af37_40deg,transparent_80deg,transparent_180deg,#d4af37_220deg,transparent_260deg)]"
        style={{
          transform: "translateZ(-50px)",
        }}
      />
      <div
        className="absolute inset-[-15px] z-10 border border-[#d4af37]/30 rounded-full opacity-60 group-hover:opacity-100 group-hover:border-[#d4af37] transition-all duration-700 animate-reverseSpin"
        style={{
          transform: "translateZ(-20px)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]" />
      </div>
      <motion.div
        className={
          "relative z-20 w-48 h-48 rounded-full border-[2px] border-[#d4af37]/50 bg-black overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)] \r\n                            group-hover:w-52 group-hover:h-52 \r\n                            group-hover:border-[#fff] \r\n                            group-hover:shadow-[0_0_100px_rgba(212,175,55,0.8)]"
        }
        style={{
          transform: "translateZ(30px)",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <img
          src="/assets/images/award.jpg"
          alt="Global 100 Award"
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent z-30 pointer-events-none mix-blend-overlay"
          style={{
            x: a,
            y: s,
            opacity: useTransform(t, [-100, 100], [0, 1]),
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/80 to-transparent skew-x-[-25deg] translate-x-[-150%] animate-sheen pointer-events-none" />
      </motion.div>
      <div
        className="absolute -bottom-12 z-30 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: "translateZ(60px)",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#d4af37] to-transparent mb-2" />
          <span className="text-[#d4af37] text-[0.6rem] uppercase tracking-[0.3em] font-bold drop-shadow-md">
            Global 100
          </span>
        </div>
      </div>
      <style>
        {
          "\n                @keyframes spinVerySlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n                .animate-spinVerySlow { animation: spinVerySlow 20s linear infinite; }\n                @keyframes reverseSpin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }\n                .animate-reverseSpin { animation: reverseSpin 15s linear infinite; }\n                @keyframes sheen { 0% { transform: translateX(-150%) skewX(-25deg); } 20% { transform: translateX(150%) skewX(-25deg); } 100% { transform: translateX(150%) skewX(-25deg); } }\n                .animate-sheen { animation: sheen 4s ease-in-out infinite; animation-delay: 1s; }\n            "
        }
      </style>
    </motion.a>
  );
}

const GrowthPlatformPreview = () => {
  const [e, t] = React.useState(!1),
    n = useMotionValue(0),
    r = useMotionValue(0);
  return (
    <span
      className="relative inline-block group cursor-pointer whitespace-nowrap z-50"
      onMouseEnter={() => t(!0)}
      onMouseLeave={() => t(!1)}
      onMouseMove={(e) => {
        const t = e.currentTarget.getBoundingClientRect();
        (n.set(e.clientX - t.left), r.set(e.clientY - t.top));
      }}
      onClick={() => {
        window.location.href = "/?target=programs";
      }}
    >
      <span className="absolute -inset-2 bg-[#7d1f97] blur-[8px] opacity-0 group-hover:opacity-40 transition duration-500 rounded-full" />
      <span className="relative font-bold text-white text-xl md:text-2xl border-b border-white/30 hover:border-[#7d1f97] transition-colors">
        Growth Platform
      </span>
      <AnimatePresence>
        {e && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 h-32 rounded-xl overflow-hidden border-2 border-[#7d1f97] shadow-[0_0_30px_rgba(125,31,151,0.6)] bg-black z-50 pointer-events-none"
          >
            <video
              src="/videos/verticallo.mp4"
              autoPlay={!0}
              muted={!0}
              loop={!0}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2">
              <span className="text-[0.6rem] font-bold text-white tracking-widest uppercase">
                Preview
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

function StatCard({ data: e, index: t }) {
  const n = React.useRef(null),
    r = useInView(n, {
      once: !0,
      margin: "-50px",
    }),
    i = useSpring(0, {
      stiffness: 50,
      damping: 20,
      mass: 1,
    }),
    a = useTransform(i, (e) => Math.floor(e).toLocaleString());
  return (
    React.useEffect(() => {
      r && i.set(e.value);
    }, [r, e.value, i]),
    (
      <motion.div
        ref={n}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={
          r
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: 0.15 * t,
        }}
        className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-baseline gap-1">
            <motion.span className="text-4xl md:text-6xl font-bold text-white tracking-tighter tabular-nums">
              {a}
            </motion.span>
            <span className="text-2xl font-light text-[#7d1f97]">
              {e.suffix}
            </span>
          </div>
          <div className="w-8 h-[2px] bg-[#7d1f97]/50 my-4 group-hover:w-full group-hover:bg-[#7d1f97] transition-all duration-500" />
          <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium group-hover:text-white transition-colors duration-300">
            {e.label}
          </p>
        </div>
      </motion.div>
    )
  );
}

export default ImpactSection;
