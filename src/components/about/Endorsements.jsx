import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { TrustedByTitans } from "./TrustedByTitans";

const EndorsementBackdrop = () => (
    <div className="absolute inset-0 pointer-events-none z-[5] opacity-[0.03] mix-blend-overlay">
      <svg className="w-full h-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  ),
  Particle = ({ color: e, top: t, left: n, delay: r }) => (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0.4,
      }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.4, 0.7, 0.4],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 15,
        repeat: 1 / 0,
        ease: "easeInOut",
        delay: r,
      }}
      className={`absolute w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-multiply pointer-events-none z-0 ${e}`}
      style={{
        top: t,
        left: n,
      }}
    />
  );

export function Endorsements() {
  const e = React.useRef(null),
    { scrollYProgress: t } = useScroll({
      target: e,
      offset: ["start end", "end start"],
    }),
    n = useTransform(t, [0, 1], ["0%", "20%"]),
    r = useTransform(t, [0, 0.5], ["50px", "-50px"]),
    i = useTransform(t, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    a = [
      {
        img: "/assets/images/Fratantoni.jpg",
        quote:
          "“WHEN TONY SPEAKS, HE DOESN’T JUST DELIVER A MESSAGE—HE MOVES PEOPLE.”",
        author: "MICHAEL FRATANTONI, PH.D, CHIEF ECONOMIST, SVP, MBA",
        align: "left",
      },
      {
        img: "/assets/images/LINDSI.jpeg",
        quote:
          "“TONY IS ONE OF THE MOST POWERFUL AND ENGAGING SPEAKERS IN THE INDUSTRY.”",
        author: "LINDSI FLYNN, CMO, US MORTGAGE CORPORATION",
        align: "right",
      },
      {
        img: "/assets/images/LeTran.jpg",
        quote:
          "“TONY THOMPSON HAS A GIFT FOR CONNECTING WITH HIS AUDIENCE—EVERY WORD INSPIRES ACTION.”",
        author: "LE TRAN, PRESIDENT, OKLAHOMA MBA",
        align: "left",
      },
    ];
  return (
    <section
      ref={e}
      id="tony-voices"
      className="relative w-full min-h-[140vh] bg-white text-black overflow-hidden flex flex-col items-center py-32"
    >
      <EndorsementBackdrop />
      <motion.div
        style={{
          y: n,
        }}
        className="absolute inset-0 w-full h-full"
      >
        <Particle color="bg-[#f3e6f5]" top="-20%" left="-10%" delay={0} />
        <Particle color="bg-[#eaddf0]" top="40%" left="60%" delay={2} />
      </motion.div>
      <div className="relative z-10 w-full px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="w-full mb-32"
        >
          <TrustedByTitans />
        </motion.div>
        <div className="relative w-full flex justify-center items-center mb-40">
          <motion.div
            initial={{
              height: 0,
            }}
            whileInView={{
              height: 150,
            }}
            viewport={{
              once: !0,
            }}
            transition={{
              duration: 1.5,
              ease: "circOut",
            }}
            className="absolute top-[-100px] w-[1px] bg-gradient-to-b from-transparent via-[#7d1f97] to-transparent"
          />
          <motion.h1
            style={{
              y: r,
              opacity: i,
            }}
            className="text-center text-[clamp(3.5rem,9vw,10rem)] font-black uppercase tracking-tighter leading-[0.85]"
          >
            <span className="block bg-gradient-to-b from-[#7d1f97] to-[#2a0a33] text-transparent bg-clip-text">
              HEAR THE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7d1f97] via-[#b04cc9] to-[#7d1f97] opacity-80">
              VOICES
            </span>
          </motion.h1>
        </div>
        <div className="max-w-7xl mx-auto space-y-40">
          {a.map((e, t) => (
            <EndorsementCard data={e} index={t} key={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EndorsementCard({ data: e, index: t }) {
  const n = React.useRef(null),
    r = t % 2 == 0,
    { scrollYProgress: i } = useScroll({
      target: n,
      offset: ["start end", "end start"],
    }),
    a = useTransform(i, [0, 1], ["-20%", "20%"]),
    s = useTransform(i, [0, 1], ["10%", "-10%"]),
    o = useTransform(i, [0.2, 0.5, 0.8], [0.9, 1, 0.95]),
    l = useTransform(i, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  return (
    <motion.div
      ref={n}
      style={{
        opacity: l,
        scale: o,
      }}
      className={`flex flex-col md:flex-row ${r ? "" : "md:flex-row-reverse"} items-center gap-12 md:gap-24 relative`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[120vw] h-[1px] bg-gradient-to-r from-transparent via-[#7d1f97]/20 to-transparent -z-10" />
      <div className="relative group">
        <motion.div
          style={{
            y: a,
          }}
          className="relative z-10 w-48 h-48 md:w-64 md:h-64"
        >
          <div className="absolute inset-[-20px] rounded-full border border-[#7d1f97]/30 border-dashed animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-[-10px] rounded-full border border-[#7d1f97]/20 animate-[spin_15s_linear_infinite_reverse]" />
          <img
            src={e.img}
            alt={e.author}
            className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(125,31,151,0.3)] grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7d1f97] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
      </div>
      <motion.div
        style={{
          y: s,
        }}
        className="flex-1 text-center md:text-left relative"
      >
        <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.2] text-[#1a1a1a] tracking-tight mb-8">
          <span className="absolute -top-12 left-0 text-[#7d1f97]/10 text-[8rem] font-serif select-none">
            “
          </span>
          <span className="relative z-10">{e.quote}</span>
        </h3>
        <div
          className={`flex flex-col ${r ? "md:items-start" : "md:items-end"} items-center gap-2`}
        >
          <div className="h-[2px] w-12 bg-[#7d1f97]" />
          <p className="text-sm md:text-base font-bold tracking-[0.2em] text-[#7d1f97] uppercase">
            {e.author}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Endorsements;
