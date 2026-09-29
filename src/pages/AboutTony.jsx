import { motion, useInView } from "framer-motion";
import React from "react";
import { BookTonyBanner } from "../components/about/BookTonyBanner";
import { Endorsements } from "../components/about/Endorsements";
import { ImpactSection } from "../components/about/ImpactSection";
import { JourneySection } from "../components/about/JourneySection";
import { MissionSection } from "../components/about/MissionSection";
import { TopPerformers } from "../components/about/TopPerformers";
import { MeetTonySection } from "../components/home/MeetTonySection";
import { AmbientGlow } from "../components/layout/AmbientGlow";
import { VideoPlayerProvider } from "../components/media/VideoPlayerProvider";
import { QuizProvider } from "../context/QuizContext";
import { BookTony } from "./BookTony";

export function AboutTony() {
  const [e, t] = React.useState(!0);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  const n = React.useRef(null),
    r = useInView(n, {
      margin: "-30% 0px -30% 0px",
    });
  return (
    <VideoPlayerProvider>
      <QuizProvider>
        <BookTonyBanner />
        <main
          ref={n}
          className="bg-black text-white overflow-x-hidden overflow-hidden relative min-h-screen flex flex-col"
        >
          <AmbientGlow />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.25, 1, 0.3, 1],
            }}
            className="w-full space-y-0"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <MeetTonySection />
            </motion.div>
            <motion.section
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{
                once: !0,
                amount: 0.3,
              }}
              className="relative z-10"
            >
              <JourneySection />
            </motion.section>
            <motion.section
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.3,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{
                once: !0,
                amount: 0.35,
              }}
              className="relative z-10"
            >
              <MissionSection />
            </motion.section>
            <motion.section
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{
                once: !0,
                amount: 0.4,
              }}
              className="relative z-10 overflow-hidden"
            >
              <ImpactSection />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7d1f9720] to-transparent pointer-events-none"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 12,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                }}
              />
            </motion.section>
            <motion.section
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{
                once: !0,
                amount: 0.3,
              }}
              className="relative z-10 bg-black/60 backdrop-blur-sm"
            >
              <Endorsements />
            </motion.section>
            <motion.section
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.6,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{
                once: !0,
                amount: 0.4,
              }}
              className="relative z-10"
            >
              <TopPerformers />
            </motion.section>
            <motion.section
              id="book-tony-section"
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.6,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{
                once: !0,
                amount: 0.2,
              }}
              className="relative z-10"
            >
              <BookTony />
            </motion.section>
          </motion.div>
          <motion.div
            className="pointer-events-none fixed inset-0 bg-gradient-to-t from-[#7d1f97]/10 via-transparent to-[#7d1f97]/5 mix-blend-soft-light"
            animate={{
              opacity: r ? [0.1, 0.25, 0.1] : 0.1,
            }}
            transition={{
              duration: 10,
              repeat: 1 / 0,
              ease: "easeInOut",
            }}
          />
        </main>
      </QuizProvider>
    </VideoPlayerProvider>
  );
}

export default AboutTony;
