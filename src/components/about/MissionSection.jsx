import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export function MissionSection() {
  const e = [
      {
        title: "Lead. Influence. Leave Your Mark.",
        subtitle: "ARCHITECTURE OF INFLUENCE",
        text: "Tony's mission is to help professionals in real estate and finance sharpen their skills, amplify their influence, and build legacies that outlast any single move. Every action is a block placed toward a bigger picture.",
        tagline: "ARCHITECTURE OF INFLUENCE",
        manifesto:
          "Every decision compounds. Every system you build today becomes the foundation tomorrow. This is the physics of legacy — momentum multiplied by intention.",
        image: "/assets/chesspiece-DgLyvqG-.jpg",
        imgPosition: "object-center",
      },
      {
        title: "Vision Into Motion.",
        subtitle: "MOMENTUM BY DESIGN",
        text: "Success isn't accidental — it's built through rhythm, structure, and heart. Tony's approach transforms ambition into architecture that lasts decades beyond trends.",
        tagline: "MOMENTUM BY DESIGN",
        manifesto:
          "Execution without vision is noise. Vision without execution is daydreaming. Mastery lives in the marriage of the two — where clarity meets relentless action.",
        image: "/assets/motion-BH7Mq7H6.jpg",
        imgPosition: "object-center",
      },
      {
        title: "Purpose Before Profit.",
        subtitle: "LEGACY OVER VELOCITY",
        text: "Greatness begins when leaders choose purpose over applause. Tony's work empowers visionaries to create impact that outlives transactions.",
        tagline: "LEGACY OVER VELOCITY",
        manifesto:
          "The market rewards speed. History rewards significance. Choose what you want to be remembered for — then engineer every move toward that singular truth.",
        image: "/assets/purpose_before_profit-YzKjiykv.jpg",
        imgPosition: "object-top",
      },
      {
        title: "Master The Invisible.",
        subtitle: "ENGINEER THE UNSEEN",
        text: "The unseen habits define legacy. Tony helps leaders engineer the quiet systems behind public success — mindset, clarity, and follow-through.",
        tagline: "ENGINEER THE UNSEEN",
        manifesto:
          "What you do in private becomes what you are in public. The invisible 5 a.m. rituals, the unchoreographed discipline — that's where empires are forged.",
        image: "/assets/master_the_invisible-B4Q-_sXI.jpg",
        imgPosition: "object-center",
      },
      {
        title: "Systems That Serve Humanity.",
        subtitle: "PRECISION MEETS PURPOSE",
        text: "Innovation isn't about disruption — it's about design. Tony crafts frameworks that merge empathy with precision, helping people and organizations grow together.",
        tagline: "PRECISION MEETS PURPOSE",
        manifesto:
          "Technology amplifies intention. If your system lacks soul, automation magnifies emptiness. Build with humanity at the core, scale with integrity at the helm.",
        image: "/assets/systems_serve_humanity-9dONHG_U.jpg",
        imgPosition: "object-bottom",
      },
      {
        title: "From Dream To Design.",
        subtitle: "STRUCTURE YOUR VISION",
        text: "Ideas fade unless anchored in structure. Tony bridges inspiration and execution — transforming passion into progress that compounds over time.",
        tagline: "STRUCTURE YOUR VISION",
        manifesto:
          "Dreams don't scale. Systems do. The distance between inspiration and impact is measured in frameworks, blueprints, and unwavering execution.",
        image: "/assets/engineer-CU52DwjX.jpg",
        imgPosition: "object-center",
      },
    ],
    [t, n] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => {
      n((t) => (t + 1) % e.length);
    }, 8e3);
    return () => clearInterval(t);
  }, [e.length]);
  const r = [0.4, 0, 0.2, 1],
    i = e[t];
  return (
    <section
      id="mission"
      className="relative w-full min-h-[140vh] lg:min-h-[160vh] bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{
            scale: 1,
          }}
          animate={{
            scale: 1.1,
          }}
          transition={{
            duration: 30,
            repeat: 1 / 0,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="w-full h-full opacity-50"
        >
          <img
            src="/assets/mission-Dyao7Jty.jpg"
            alt="Tony Thompson Mission"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>
      <div
        className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "\n                        linear-gradient(rgba(125, 31, 151, 0.5) 1px, transparent 1px),\n                        linear-gradient(90deg, rgba(125, 31, 151, 0.5) 1px, transparent 1px)\n                    ",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#7d1f97]" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase">
            Mission // The Turning Point
          </span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#7d1f97]" />
        </div>
      </div>
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 min-h-[140vh] lg:min-h-[160vh] flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pt-8 lg:pt-16">
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-full mx-auto aspect-[4/5]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20" />
                <div className="absolute inset-0 rounded-2xl border border-white/[0.08]" />
                <div className="absolute inset-3 rounded-xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 1.05,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: r,
                      }}
                      className="absolute inset-0"
                      key={t}
                    >
                      <motion.img
                        src={i.image}
                        alt=""
                        className={`w-full h-full object-cover ${i.imgPosition || "object-center"}`}
                        initial={{
                          scale: 1,
                        }}
                        animate={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 8,
                          ease: "linear",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute inset-0 bg-[#7d1f97]/10 mix-blend-overlay" />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
                      {String(t + 1).padStart(2, "0")}
                      {" / "}
                      {String(e.length).padStart(2, "0")}
                    </span>
                    <div className="flex gap-1.5">
                      {e.map((e, r) => (
                        <button
                          onClick={() => n(r)}
                          className={
                            "w-6 h-[2px] rounded-full transition-all duration-300 " +
                            (r === t
                              ? "bg-[#7d1f97]"
                              : "bg-white/20 hover:bg-white/40")
                          }
                          key={r}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.05] to-transparent rounded-t-2xl pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col h-full">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.8,
                  ease: r,
                }}
                className="flex items-end gap-6 mb-8"
                key={`num-${t}`}
              >
                <span className="text-8xl lg:text-9xl font-black text-[#7d1f97] leading-none">
                  {String(t + 1).padStart(2, "0")}
                </span>
                <div className="pb-3">
                  <div className="w-12 h-[1px] bg-[#7d1f97]/50 mb-3" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                    {i.subtitle}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.h2
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  exit={{
                    y: "-100%",
                  }}
                  transition={{
                    duration: 1,
                    ease: r,
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight"
                  key={`title-${t}`}
                >
                  {i.title}
                </motion.h2>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                exit={{
                  scaleX: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: r,
                }}
                className="flex items-center gap-3 origin-left mb-8"
                key={`acc-${t}`}
              >
                <div className="w-16 h-[2px] bg-[#7d1f97]" />
                <div className="w-1.5 h-1.5 bg-[#7d1f97] rotate-45" />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.9,
                  ease: r,
                }}
                className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl mb-auto"
                key={`desc-${t}`}
              >
                {i.text}
              </motion.p>
            </AnimatePresence>
            <div className="mt-auto pt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: r,
                  }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#7d1f97]/10 border border-[#7d1f97]/30 rounded-full"
                  key={`tag-${t}`}
                >
                  <div className="w-1.5 h-1.5 bg-[#7d1f97] rounded-full animate-pulse" />
                  <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#7d1f97]">
                    {i.tagline}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-20">
          <div className="max-w-3xl mx-auto mb-10">
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#7d1f97]"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                }}
                key={t}
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.8,
                  ease: r,
                }}
                className="relative"
                key={`mani-${t}`}
              >
                <div className="relative bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-xl overflow-hidden">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#7d1f97]/50 to-transparent" />
                  <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#7d1f97] rounded-full animate-pulse" />
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7d1f97]/80">
                        Core Principle
                      </span>
                    </div>
                    <span className="font-mono text-[9px] tracking-wider text-white/30">
                      {String(t + 1).padStart(2, "0")}.MANIFEST
                    </span>
                  </div>
                  <div className="px-8 md:px-12 py-10 relative">
                    <div className="absolute top-4 left-6 text-4xl text-[#7d1f97]/20 font-serif">
                      "
                    </div>
                    <div className="absolute bottom-4 right-6 text-4xl text-[#7d1f97]/20 font-serif rotate-180">
                      "
                    </div>
                    <p className="text-center text-lg md:text-xl font-light text-white/80 leading-relaxed">
                      {i.manifesto}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 font-mono text-[9px] text-white/25 tracking-widest uppercase">
            <span>Thompson Enterprises</span>
            <div className="w-1 h-1 bg-[#7d1f97]/50 rounded-full" />
            <span>Est. 2020</span>
          </div>
        </div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
        {e.map((e, r) => (
          <button
            onClick={() => n(r)}
            className={
              "w-[3px] h-8 rounded-full transition-all duration-300 " +
              (r === t ? "bg-[#7d1f97]" : "bg-white/15 hover:bg-white/30")
            }
            key={r}
          />
        ))}
      </div>
    </section>
  );
}

export default MissionSection;
