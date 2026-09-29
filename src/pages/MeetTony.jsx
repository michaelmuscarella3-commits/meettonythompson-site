import { motion, useInView } from "framer-motion";
import React from "react";
import { Endorsements } from "../components/about/Endorsements";
import { ImpactSection } from "../components/about/ImpactSection";
import { JourneySection } from "../components/about/JourneySection";
import { MissionSection } from "../components/about/MissionSection";
import { TopPerformers } from "../components/about/TopPerformers";

function ExploreJourneyButton({ isMobile: e }) {
  return (
    <div
      className={`\n                relative flex justify-center items-center text-white font-['Press_Start_2P'] uppercase tracking-wider\n                bg-gradient-to-br from-[#952ca8]/85 to-[#7d1f97]/70 rounded-[1rem] border border-white/20\n                transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.3,1)]\n                ${e ? "w-[220px] h-[46px] text-[0.65rem] shadow-[0_10px_25px_rgba(155,38,182,0.7)] hover:translate-y-[-4px]" : "w-[280px] h-[60px] text-[0.8rem] shadow-[0_10px_25px_rgba(155,38,182,0.7),inset_0_2px_6px_rgba(255,255,255,0.3)] hover:translate-y-[-4px] hover:shadow-[0_14px_35px_rgba(155,38,182,0.85),inset_0_2px_10px_rgba(255,255,255,0.4)]"}\n            `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulseGlow rounded-[1rem]" />
      <span className="z-10 text-center">EXPLORE HIS JOURNEY</span>
    </div>
  );
}

function MeetTonyHero() {
  const e = React.useRef(null),
    t = useInView(e, {
      amount: 0.15,
      once: !0,
    }),
    [n, r] = React.useState(!1),
    i = {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
        },
      },
    },
    a = () => {
      const e = document.querySelector("#tony-journey");
      e &&
        (window.lenis
          ? window.lenis.scrollTo(e, {
              offset: -20,
              duration: 1.4,
              easing: (e) => 1 - Math.pow(1 - e, 3),
            })
          : e.scrollIntoView({
              behavior: "smooth",
            }));
    };
  return (
    <section
      id="meet-tony"
      ref={e}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col"
      style={{
        contain: "layout paint style",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: n ? 1.04 : 1.08,
            x: "4%",
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative w-[125%] max-w-none h-full"
        >
          <img
            src="/assets/meetTony-cqvuGTsO.jpg"
            alt="Tony Thompson"
            className="w-full h-full object-cover object-[57%_45%] md:object-[85%_center] will-change-transform"
            style={{
              filter: n ? "brightness(1.08)" : "brightness(1)",
            }}
          />
          <a
            href="https://www.mpamag.com/uk/best-in-mortgage/worlds-100-best-mortgage-leaders-global-100/558935#winnersListSection"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              right: "calc(25% + 378px)",
            }}
            className={
              "hidden md:block absolute z-[25] cursor-pointer group \r\n                                   bottom-[12%] w-[200px] h-[200px]\r\n                                   animate-floatFast"
            }
            title="View Global 100 Award"
          >
            <div
              className={
                "relative w-full h-full rounded-full overflow-hidden \r\n                                        border-[2px] border-[#fbbf24] \r\n                                        shadow-[0_0_20px_rgba(251,191,36,0.5)]\r\n                                        animate-heartbeat bg-black"
              }
            >
              <img
                src="/assets/images/award.jpg"
                alt="Global 100 Award"
                className="w-full h-full object-cover scale-[1.05]"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/80 to-transparent skew-x-[-25deg] translate-x-[-150%] animate-superSheen" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[#952ca8]/40 z-[1] md:hidden pointer-events-none" />
      <div className="absolute inset-0 z-5 pointer-events-none hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent w-[40%]" />
      </div>
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none will-change-transform hidden md:block"
        animate={{
          x: n ? "-38%" : "0%",
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#7d1f97] to-transparent w-[70%]" />
      </motion.div>
      <div
        className="absolute top-0 right-0 h-full w-[60%] z-30 hidden md:block cursor-default"
        onMouseEnter={() => r(!0)}
        onMouseLeave={() => r(!1)}
      />
      <div className="relative z-20 flex md:hidden min-h-screen flex-col items-center justify-center py-20 text-center text-white pointer-events-none">
        <div className="relative z-[2] px-[6vw] max-w-[1000px] pointer-events-auto">
          <motion.h1
            variants={i}
            initial="hidden"
            animate={t ? "visible" : "hidden"}
            className="text-[clamp(3.2rem,12vw,5rem)] font-extrabold uppercase leading-[0.9] flex justify-center items-center gap-2"
          >
            <span className="text-white">MEET</span>
            <span className="text-[#952ca8] drop-shadow-lg">TONY</span>
          </motion.h1>
          <motion.h2
            variants={i}
            initial="hidden"
            animate={t ? "visible" : "hidden"}
            transition={{
              delay: 0.1,
            }}
            className="text-[clamp(1.1rem,4vw,1.4rem)] font-semibold tracking-wide text-white/90 uppercase mt-4"
          >
            KEYNOTE SPEAKER
          </motion.h2>
          <motion.p
            variants={i}
            initial="hidden"
            animate={t ? "visible" : "hidden"}
            transition={{
              delay: 0.15,
            }}
            className="mt-12 text-[clamp(1rem,3vw,1.15rem)] leading-[1.6] text-white mx-auto max-w-[46ch]"
          >
            TONY THOMPSON, CMB, began in HR with Fortune 100 companies before
            leveling up as a top mortgage originator, helping hundreds of
            families achieve homeownership every year.
            <br />
            <br />
            {"He founded "}
            <span className="font-semibold text-[#FFD700]">NAMMBA</span>, now a
            national movement with 15 chapters and over 10,000 members,
            transforming how professionals dominate the $2.9T market.
            <br />
            <br />
            Today, Tony coaches top originators nationwide, speaks for major
            national stages, and equips leaders to claim their legacy, stack
            their blocks, and level up their impact, income, and influence in an
            industry undergoing seismic transformation.
          </motion.p>
          <motion.div
            onClick={a}
            variants={i}
            initial="hidden"
            animate={t ? "visible" : "hidden"}
            transition={{
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="relative mt-16 mx-auto w-fit cursor-pointer group select-none pointer-events-auto"
          >
            <ExploreJourneyButton isMobile={!0} />
          </motion.div>
        </div>
      </div>
      <div className="hidden md:flex relative z-20 flex-1 pointer-events-none">
        <div className="w-1/3 flex flex-col justify-center min-h-[60vh] pointer-events-auto">
          <div className="px-[6vw] py-[6vh] flex flex-col flex-1 text-white">
            <motion.h1
              initial={{
                opacity: 0,
                rotateX: 90,
              }}
              animate={{
                opacity: [0.9, 1, 0.9],
                rotateX: [0, -15, 0, 15, 0],
                transition: {
                  duration: 48,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                },
              }}
              style={{
                transformOrigin: "center center",
                perspective: "900px",
              }}
              className="ml-[-0.1em] text-[clamp(1.2rem,4vw,3.8rem)] font-extrabold uppercase leading-[0.9] flex items-center gap-4 select-none"
            >
              <span className="text-white drop-shadow-md">MEET</span>
              <span className="text-[#ffffff] drop-shadow-[0_0_15px_rgba(155,38,182,0.6)]">
                TONY
              </span>
            </motion.h1>
            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  letterSpacing: "0.05em",
                },
                visible: {
                  opacity: 1,
                  letterSpacing: "0.15em",
                  transition: {
                    duration: 1.2,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              animate={t ? "visible" : "hidden"}
              className="text-[clamp(1.1rem,2vw,1.8rem)] font-semibold uppercase text-white/95 tracking-[0.08em] glow-keynote leading-none flex items-baseline gap-2"
            >
              <span>KEYNOTE</span>
              <span>SPEAKER</span>
            </motion.h2>
            <motion.div
              variants={i}
              initial="hidden"
              animate={t ? "visible" : "hidden"}
              className="mt-6 max-w-[46ch] text-[clamp(0.95rem,1.1vw,1.15rem)] leading-[1.55] text-white/95 font-medium drop-shadow-sm"
            >
              <p className="mb-4">
                TONY THOMPSON, CMB, began in HR with Fortune 100 companies
                before leveling up as a top mortgage originator, helping
                hundreds of families achieve homeownership every year.
              </p>
              <p className="mb-4">
                {"He founded "}
                <span className="font-semibold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                  NAMMBA
                </span>
                , now a national movement with 15 chapters and over 10,000
                members, transforming how professionals dominate the $2.9T
                market.
              </p>
              <p className="mb-4">
                Today, Tony coaches top originators nationwide, speaks for major
                national stages, and equips leaders to claim their legacy, stack
                their blocks, and level up their impact, income, and influence
                in an industry undergoing seismic transformation.
              </p>
            </motion.div>
            <motion.div
              onClick={a}
              variants={i}
              initial="hidden"
              animate={t ? "visible" : "hidden"}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative mt-16 md:mt-auto mb-10 w-fit mx-auto md:mx-0 select-none cursor-pointer group"
              style={{
                perspective: "900px",
              }}
            >
              <ExploreJourneyButton isMobile={!1} />
            </motion.div>
          </div>
        </div>
        <div className="w-2/3" />
      </div>
      <style>
        {
          '\n                @keyframes pulseGlow { 0%,100% {opacity:0.4;transform:translateX(-25%);} 50% {opacity:0.9;transform:translateX(25%);} }\n                .animate-pulseGlow { animation:pulseGlow 6s ease-in-out infinite; }\n\n                /* ANIMATIONS */\n                @keyframes superSheen {\n                    0% { transform: translateX(-150%) skewX(-25deg); }\n                    15% { transform: translateX(150%) skewX(-25deg); } \n                    100% { transform: translateX(150%) skewX(-25deg); } \n                }\n                .animate-superSheen {\n                    animation: superSheen 3.5s ease-in-out infinite;\n                    animation-delay: 2s;\n                }\n\n                @keyframes floatFast {\n                    0%, 100% { transform: translateY(0); }\n                    50% { transform: translateY(-5px); } \n                }\n                .animate-floatFast {\n                    animation: floatFast 3s ease-in-out infinite;\n                }\n\n                @keyframes heartbeat {\n                    0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(251,191,36,0.6); }\n                    50% { transform: scale(1.03); box-shadow: 0 0 35px rgba(251,191,36,0.9); }\n                }\n                .animate-heartbeat {\n                    animation: heartbeat 2s ease-in-out infinite;\n                }\n\n                @media (min-width: 768px) {\n                    .glow-keynote { position: relative; }\n                    .glow-keynote::after {\n                        content:"";\n                        position:absolute;\n                        left:0;right:0;bottom:-4px;height:2px;\n                        background:linear-gradient(90deg,transparent,#ffffff88,transparent);\n                        animation:keynoteUnderline 3s ease-in-out infinite;\n                    }\n                }\n\n                @keyframes keynoteUnderline {\n                    0% {transform:translateX(-40%);opacity:0;}\n                    50% {transform:translateX(0%);opacity:1;}\n                    100% {transform:translateX(40%);opacity:0;}\n                }\n            '
        }
      </style>
    </section>
  );
}

export function MeetTony() {
  return (
    React.useEffect(() => {
      (window.scrollTo(0, 0),
        window.lenis &&
          window.lenis.scrollTo(0, {
            immediate: !0,
          }));
    }, []),
    (
      <main className="w-full bg-black text-white overflow-x-hidden overflow-y-auto">
        <MeetTonyHero />
        <JourneySection />
        {"   "}
        <ImpactSection />
        <MissionSection />
        <Endorsements />
        <TopPerformers />
      </main>
    )
  );
}

export default MeetTony;
