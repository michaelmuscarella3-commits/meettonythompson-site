import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { CornerAccent, NeonCard, SplitText } from "../components/quiz/QuizUI";
import { Quiz } from "./Quiz";

export function QuizIntro() {
  const [e, t] = React.useState(!1),
    [n, r] = React.useState(!1),
    i = {
      hidden: {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
      },
      visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{
            scale: 1.15,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 0.7,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          style={{
            backgroundImage: "url(/assets/quizIntro-eNC8VOEw.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-[#7d1f97]/10 mix-blend-overlay" />
        </motion.div>
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div className="absolute inset-10 pointer-events-none z-10 border border-white/5">
        <CornerAccent position="top-left" />
        <CornerAccent position="top-right" />
        <CornerAccent position="bottom-left" />
        <CornerAccent position="bottom-right" />
      </div>
      <AnimatePresence mode="wait">
        {e ? (
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0)",
            }}
            transition={{
              duration: 1.4,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="w-full h-full relative z-[5]"
            key={"quiz"}
          >
            <Quiz />
          </motion.div>
        ) : (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
              exit: {
                opacity: 0,
                y: -40,
                scale: 0.98,
                filter: "blur(15px)",
                transition: {
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-20 w-full max-w-7xl px-8 flex flex-col items-center text-center"
            key={"intro"}
          >
            <div className="flex flex-col items-center mb-10 w-full px-4">
              <motion.div variants={i} className="w-full">
                <SplitText
                  text="HOW DO YOU WANT"
                  className="text-[clamp(2.25rem,8vw,8.5rem)]"
                />
              </motion.div>
              <motion.div variants={i} className="w-full">
                <SplitText
                  text={
                    <>
                      {"YOUR NEXT "}
                      <span className="text-[#D4AF37]">LEVEL</span>
                    </>
                  }
                  color="text-[#9b26b6]"
                  className="text-[clamp(2.25rem,8vw,8.5rem)] mt-1 md:-mt-8"
                />
              </motion.div>
              <motion.div variants={i} className="w-full">
                <SplitText
                  text="TO PLAY OUT?"
                  className="text-[clamp(2.25rem,8vw,8.5rem)] mt-1 md:-mt-8"
                />
              </motion.div>
            </div>
            <motion.div variants={i} className="max-w-3xl mb-12 md:mb-16 px-4">
              <p className="text-base md:text-2xl text-gray-400 font-light leading-relaxed">
                {
                  "Discover where your biggest growth opportunity lies — and receive a "
                }
                <span className="text-white font-medium">custom roadmap</span>
                {" built to deploy high-velocity results."}
              </p>
            </motion.div>
            <motion.div variants={i}>
              <NeonCard>
                <motion.button
                  onClick={() => {
                    (r(!0),
                      setTimeout(() => {
                        t(!0);
                      }, 800));
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  disabled={n}
                  className="group relative flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-white text-black font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-[11px] md:text-sm overflow-hidden rounded-full transition-all duration-500 hover:scale-105"
                >
                  <div
                    className={
                      "relative z-10 flex items-center gap-4 transition-all duration-500 \n                                        " +
                      (n
                        ? "opacity-0 translate-y-4 scale-95"
                        : "opacity-100 group-hover:opacity-0 group-hover:-translate-y-4")
                    }
                  >
                    INITIALIZE ASSESSMENT
                    <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-3 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <div
                    className={
                      "absolute inset-0 bg-[#9b26b6] transition-opacity duration-500 " +
                      (n ? "opacity-100" : "opacity-0 group-hover:opacity-100")
                    }
                  />
                  <div
                    className={
                      "absolute inset-0 flex items-center justify-center transition-all duration-500 \n                                        " +
                      (n
                        ? "opacity-100 scale-110"
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0")
                    }
                  >
                    <span className="text-white relative z-10 font-black tracking-[0.3em]">
                      GO BEYOND
                    </span>
                  </div>
                </motion.button>
              </NeonCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>
        {
          "\n                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@500&display=swap');\n                \n                :root {\n                    --accent-purple: #9b26b6;\n                }\n\n                .font-mono {\n                    font-family: 'JetBrains Mono', monospace;\n                }\n            "
        }
      </style>
    </section>
  );
}

export default QuizIntro;
