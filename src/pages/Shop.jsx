import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Shop() {
  const e = useNavigate(),
    [t, n] = React.useState(!1),
    r = {
      hidden: {
        opacity: 0,
        y: -50,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: [0.25, 1, 0.3, 1],
          delay: 0.2,
        },
      },
    };
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">
      <motion.div className="fixed inset-0 w-full h-full overflow-hidden">
        <motion.img
          src="/assets/tonyCap-BD7GbOJU.jpg"
          alt="Tony Cap Background"
          initial={{
            opacity: 0,
            scale: 1.02,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.6,
            ease: [0.25, 1, 0.3, 1],
          }}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
          style={{
            filter: "brightness(0.7) contrast(1.1)",
            transform:
              "scale(1.1) translate(-56.699999999999996px, -56.699999999999996px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </motion.div>
      <AnimatePresence>
        {t && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.3, 1],
            }}
            className="fixed inset-0 bg-black z-[9999] pointer-events-none"
            key={"fade"}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-8 md:mt-12 gap-2 md:gap-8 text-center">
          <motion.h1
            variants={r}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3.5rem,10vw,8rem)] leading-none font-extrabold tracking-tighter uppercase text-white/90 drop-shadow-2xl"
          >
            COMING
          </motion.h1>
          <motion.h1
            variants={r}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.4,
            }}
            className="text-[clamp(3.5rem,10vw,8rem)] leading-none font-extrabold tracking-tighter uppercase text-white/40 drop-shadow-2xl"
          >
            SOON
          </motion.h1>
        </div>
        <div className="flex-grow min-h-[50px]" />
        <div className="flex flex-col items-center w-full mb-8 md:mb-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="text-center max-w-2xl mb-12 px-4"
          >
            <p className="text-xl md:text-3xl font-semibold tracking-[0.25em] text-[#FFD700] uppercase mb-4 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
              The Lab is Active
            </p>
            <p className="text-sm md:text-xl font-medium text-white/85 leading-relaxed max-w-lg mx-auto">
              Tony is crafting a collection that reflects the precision of the
              mission. Excellence isn't rushed.
              <br className="hidden md:block" />
              <span className="block mt-2 md:inline md:mt-0">
                {" Prepare for the drop."}
              </span>
            </p>
          </motion.div>
          <motion.div
            onClick={() => {
              t ||
                (n(!0),
                setTimeout(() => {
                  e("/?target=#testimonials", {
                    replace: !0,
                  });
                }, 600),
                setTimeout(() => n(!1), 1800));
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: [0.25, 1, 0.3, 1],
            }}
            whileHover={{
              translateY: -4,
              boxShadow: "0 10px 25px rgba(155,38,182,0.7)",
            }}
            whileTap={{
              scale: 0.94,
            }}
            className={
              "\r\n                            relative flex justify-center items-center \r\n                            w-[140px] md:w-[150px] h-[50px] md:h-[56px]\r\n                            cursor-pointer select-none\r\n                            uppercase tracking-wider\r\n                            text-white text-xs md:text-[0.9rem] \r\n                            font-['Press_Start_2P']\r\n                            rounded-[10px]\r\n                            border border-white/20\r\n                            bg-gradient-to-br\r\n                            from-[#952ca8]/85 to-[#7d1f97]/70\r\n                            shadow-[0_10px_25px_rgba(155,38,182,0.6)]\r\n                            transition-all duration-[600ms]\r\n                            ease-[cubic-bezier(0.25,1,0.3,1)]\r\n                            whitespace-nowrap\r\n                        "
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulseGlow rounded-[10px]" />
            <span className="relative z-10">BACK</span>
          </motion.div>
        </div>
      </div>
      <style>
        {
          "\n                @keyframes pulseGlow {\n                    0%, 100% { opacity: 0.35; transform: translateX(-25%); }\n                    50% { opacity: 0.9; transform: translateX(25%); }\n                }\n                .animate-pulseGlow { \n                    animation: pulseGlow 6s ease-in-out infinite; \n                }\n            "
        }
      </style>
    </main>
  );
}

export default Shop;
