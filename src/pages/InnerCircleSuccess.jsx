import { motion } from "framer-motion";
import { ArrowRightIcon, CircleCheckIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export function InnerCircleSuccess() {
  const e = useNavigate();
  return (
    React.useEffect(() => {
      const t = setTimeout(() => {
        e("/salesgrowthplatform");
      }, 5e3);
      return () => clearTimeout(t);
    }, [e]),
    (
      <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(155,38,182,0.15),_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative z-10 max-w-3xl"
        >
          <div className="w-24 h-24 bg-[#9b26b6]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#9b26b6]/50 shadow-[0_0_50px_rgba(155,38,182,0.5)]">
            <CircleCheckIcon size={48} className="text-[#9b26b6]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {"WELCOME TO THE "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b26b6] via-[#d8b4fe] to-[#9b26b6]">
              INNER CIRCLE
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl mx-auto">
            {"Your application has been received. "}
            <br />
            {"Your "}
            <strong>Growth Blueprint PDF</strong>
            {" is downloading now."}
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white/50 backdrop-blur-md">
              <div className="w-2 h-2 bg-[#9b26b6] rounded-full animate-ping" />
              Redirecting you to Growth Programs in a few seconds...
            </div>
            <button
              onClick={() => e("/salesgrowthplatform")}
              className="text-white/40 text-sm hover:text-white flex items-center gap-2 mt-4 transition-colors"
            >
              {"Return Immediately "}
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </motion.div>
      </section>
    )
  );
}

export default InnerCircleSuccess;
