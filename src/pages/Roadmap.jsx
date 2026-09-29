import { motion, useScroll, useSpring } from "framer-motion";
import {
  ActivityIcon,
  AwardIcon,
  ChartColumnIcon,
  ClockIcon,
  CpuIcon,
  DownloadIcon,
  GlobeIcon,
  HashIcon,
  LockIcon,
  ShieldIcon,
  TargetIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { BLUEPRINT_PDF } from "./JoinInnerCircle";

const HERO_IMG = "/assets/hero-BqNd09AG.png",
  GlassCard = ({ children: e, className: t = "" }) => (
    <div className={`relative group ${t}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9b26b6]/20 to-[#D4AF37]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9b26b6]/5 rounded-full blur-[60px]" />
        {e}
      </div>
    </div>
  ),
  FeatureItem = ({
    children: e,
    icon: Ct___ = HashIcon,
    color: n = "text-[#f3d4ff]",
  }) => (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-md mb-6">
      <Ct___ size={10} className={n} />
      <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/60">
        {e}
      </span>
    </div>
  ),
  SectionHeading = ({ subtitle: e, title: t, titleGold: n }) => (
    <div className="mb-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: !0,
        }}
        className="flex flex-col items-start"
      >
        <FeatureItem icon={ActivityIcon}>{e}</FeatureItem>
        <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1] tracking-tighter uppercase mb-2 font-['Montserrat'] text-white">
          {t}
        </h2>
        {n && (
          <div className="relative">
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1] tracking-tighter uppercase font-['Montserrat'] text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF5D1] to-[#D4AF37]">
              {n}
            </h2>
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100px",
              }}
              viewport={{
                once: !0,
              }}
              className="h-1 bg-[#D4AF37] mt-4 shadow-[0_0_20px_#D4AF37]"
            />
          </div>
        )}
      </motion.div>
    </div>
  );

export function Roadmap() {
  const e = useNavigate(),
    t = React.useRef(null),
    { scrollYProgress: n } = useScroll(),
    r = useSpring(n, {
      stiffness: 100,
      damping: 30,
    });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const i = [
    {
      subtitle: "STRATEGIC FOUNDATION",
      title: "THE MOMENTUM",
      titleGold: "SHIFT",
      content:
        "The market doesn't owe you anything. Performance is the only currency that matters in 2026. We are re-engineering your operational DNA to move with high-velocity precision.",
      points: [
        {
          icon: ShieldIcon,
          title: "Risk Mitigation",
          text: "Seal the leaks in your current lead-flow and retention systems.",
        },
        {
          icon: TargetIcon,
          title: "Precision Target",
          text: "Identify the high-value 20% that drives 80% of your revenue.",
        },
        {
          icon: ZapIcon,
          title: "Rapid Execution",
          text: "Shorten the distance between strategy and massive action.",
        },
      ],
      image: HERO_IMG,
    },
    {
      subtitle: "DEMOGRAPHIC DOMINANCE",
      title: "MARKET",
      titleGold: "INTELLIGENCE",
      content:
        "92.6% of new household formation is driven by minority buyers. If you aren't positioned as the authority for the Hispanic market, you are invisible. We provide the architecture for cultural dominance.",
      points: [
        {
          icon: GlobeIcon,
          title: "Cultural Authority",
          text: "Speak the language of growth and trust in emerging markets.",
        },
        {
          icon: ChartColumnIcon,
          title: "Data Domination",
          text: "Leverage real-time demographic shifts before your competition.",
        },
        {
          icon: AwardIcon,
          title: "Authority Design",
          text: "Become the go-to expert in your local mortgage ecosystem.",
        },
      ],
      image: "/assets/market-U7GFbM_m.png",
    },
  ];
  return (
    <div
      ref={t}
      className="bg-[#050505] text-white min-h-screen selection:bg-[#9b26b6]/30 overflow-x-hidden"
    >
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[1000]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#9b26b6] via-[#D4AF37] to-[#9b26b6] origin-left shadow-[0_0_15px_#9b26b6]"
          style={{
            scaleX: r,
          }}
        />
      </div>
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 0.4,
            }}
            transition={{
              duration: 2,
            }}
            src={HERO_IMG}
            className="w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(155,38,182,0.05)_50%)] bg-[length:100%_4px] animate-scan" />
        </div>
        <div className="relative z-10 max-w-6xl text-center">
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <FeatureItem icon={CpuIcon} color="text-[#D4AF37]">
              Tactical Roadmap Initialized
            </FeatureItem>
            <h1 className="text-[clamp(3.5rem,12vw,9.5rem)] font-extrabold leading-[0.9] tracking-tighter uppercase font-['Montserrat'] mb-2">
              THE DOMINANCE
            </h1>
            <h1 className="text-[clamp(3.5rem,12vw,9.5rem)] font-extrabold leading-[0.9] tracking-tighter uppercase font-['Montserrat'] text-transparent bg-clip-text bg-gradient-to-r from-[#f3d4ff] via-white to-[#f3d4ff]">
              BLUEPRINT
            </h1>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center"
          >
            <ScrollIndicator target="#roadmap-content" />
          </motion.div>
        </div>
      </section>
      <div
        id="roadmap-content"
        className="max-w-7xl mx-auto px-6 py-32 space-y-40"
      >
        {i.map((e, t) => (
          <div
            className={`flex flex-col ${t % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-32 items-center`}
            key={t}
          >
            <div className="w-full lg:w-1/2">
              <SectionHeading
                subtitle={e.subtitle}
                title={e.title}
                titleGold={e.titleGold}
              />
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                {e.content}
              </p>
              <div className="space-y-4">
                {e.points.map((e, t) => (
                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#9b26b6]/30 transition-all group"
                    key={t}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#9b26b6]/10 flex items-center justify-center shrink-0 text-[#9b26b6] group-hover:bg-[#9b26b6] group-hover:text-white transition-all duration-500">
                      <e.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                        {e.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {e.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <GlassCard>
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                  <img
                    src={e.image}
                    className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-md">
                    <span className="text-[8px] font-mono text-[#D4AF37] uppercase tracking-widest">
                      Visual Verified
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        ))}
        <div className="pt-20">
          <SectionHeading
            subtitle="TACTICAL EXECUTION"
            title="DISCIPLINE OF"
            titleGold="DOMINANCE"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                time: "08:00",
                task: "Master the Script",
                desc: "Neuro-linguistic conditioning and authority anchoring.",
              },
              {
                time: "08:30",
                task: "Hour of Power",
                desc: "Aggressive outbound relationship capital generation.",
              },
              {
                time: "11:30",
                task: "CRM Domination",
                desc: "Technical data hygiene and predictive segmentation.",
              },
              {
                time: "13:30",
                task: "B2B Loyalty",
                desc: "Deep architectural bonding with top-tier realtor partners.",
              },
            ].map((e, t) => (
              <GlassCard className="h-full" key={t}>
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded text-[#D4AF37] font-mono text-[10px] tracking-widest">
                      {e.time}
                    </span>
                    <ClockIcon size={14} className="text-white/20" />
                  </div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wider mb-3 leading-tight">
                    {e.task}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {e.desc}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#9b26b6] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      <section className="relative py-40 px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,38,182,0.1),transparent_70%)]" />
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: !0,
          }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <FeatureItem icon={LockIcon}>Encryption Active</FeatureItem>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[1] tracking-tighter uppercase font-['Montserrat'] mb-8">
            {"READY TO "}
            <span className="text-[#D4AF37]">EXECUTE?</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            The blueprint is now in your hands. Precision requires partnership.
            Access the Inner Circle today.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => e("/book-tony")}
              className="group relative px-12 py-6 bg-[#9b26b6] text-white font-bold text-xs uppercase tracking-[0.3em] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(155,38,182,0.4)] transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
            >
              <span className="relative z-10">Book Strategy Call</span>
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button
              onClick={() => {
                const e = document.createElement("a");
                ((e.href = BLUEPRINT_PDF),
                  (e.download =
                    "Mortgage-Broker-Business-Growth-Blueprint.pdf"),
                  document.body.appendChild(e),
                  e.click(),
                  document.body.removeChild(e));
              }}
              className="group flex items-center justify-center gap-4 px-12 py-6 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.3em] rounded-xl transition-all hover:bg-white/10 hover:border-white/20 w-full md:w-auto cursor-pointer"
            >
              <DownloadIcon size={16} className="text-[#D4AF37]" />
              <span>Download PDF Blueprint</span>
            </button>
          </div>
        </motion.div>
      </section>
      <style>
        {
          "\n                @keyframes scan {\n                    from { background-position: 0 0; }\n                    to { background-position: 0 100%; }\n                }\n                .animate-scan {\n                    animation: scan 20s linear infinite;\n                }\n                .font-mono { font-family: 'JetBrains Mono', monospace; }\n                body { background-color: #050505; }\n                ::-webkit-scrollbar { width: 4px; }\n                ::-webkit-scrollbar-track { background: #050505; }\n                ::-webkit-scrollbar-thumb { background: #9b26b6; }\n            "
        }
      </style>
    </div>
  );
}

export default Roadmap;
