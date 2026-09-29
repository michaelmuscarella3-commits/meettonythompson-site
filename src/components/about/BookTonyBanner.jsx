import { motion } from "framer-motion";
import React from "react";

export function BookTonyBanner() {
  const [e, t] = React.useState(!1);
  return (
    <motion.button
      onClick={() => {
        const e = document.getElementById("book-tony-section");
        e &&
          e.scrollIntoView({
            behavior: "smooth",
          });
      }}
      onMouseEnter={() => t(!0)}
      onMouseLeave={() => t(!1)}
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: [0.25, 1, 0.3, 1],
      }}
      className={
        "fixed left-0 top-1/2 z-[9999] \r\n                       flex items-center justify-center\r\n                       bg-gradient-to-b from-[#7d1f97] to-[#952ca8]\r\n                       text-white font-bold tracking-wider uppercase\r\n                       rounded-r-2xl \r\n                       shadow-[0_10px_40px_rgba(155,38,182,0.6)]\r\n                       cursor-pointer\r\n                       hover:shadow-[0_15px_50px_rgba(155,38,182,0.8)]\r\n                       transition-shadow duration-300"
      }
      style={{
        transform: "translateY(-50%)",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        padding: "1.5rem 0.75rem",
      }}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-base font-semibold">Book</span>
        <motion.span
          initial={!1}
          animate={{
            opacity: e ? 1 : 0,
            height: e ? "auto" : 0,
            marginTop: e ? "4px" : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="text-base font-semibold overflow-hidden"
        >
          Tony
        </motion.span>
      </div>
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-r-2xl pointer-events-none"
        initial={!1}
        animate={{
          opacity: e ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-r-2xl pointer-events-none"
        animate={{
          boxShadow: [
            "inset 0 0 0 1px rgba(255,255,255,0.1)",
            "inset 0 0 0 2px rgba(255,255,255,0.3)",
            "inset 0 0 0 1px rgba(255,255,255,0.1)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: 1 / 0,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}

export default BookTonyBanner;
