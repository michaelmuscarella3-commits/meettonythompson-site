import { AnimatePresence, motion } from "framer-motion";
import { CookieIcon, XIcon } from "lucide-react";
import React from "react";

export function CookieBanner() {
  const [e, t] = React.useState(!1);
  React.useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      const e = setTimeout(() => t(!0), 2e3);
      return () => clearTimeout(e);
    }
  }, []);
  return (
    <AnimatePresence>
      {e && (
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[999999]"
        >
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9b26b6]/10 rounded-full blur-[60px] group-hover:bg-[#9b26b6]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#9b26b6]/20 flex items-center justify-center">
                  <CookieIcon size={16} className="text-[#f3d4ff]" />
                </div>
                <h3 className="text-white font-bold text-sm tracking-tight uppercase font-mono">
                  Cookie Preferences
                </h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                {
                  'We use cookies to enhance your experience, analyze site traffic, and support our growth programs. By clicking "Accept", you agree to our use of cookies as described in our '
                }
                <a
                  href="/cookie-policy"
                  className="text-[#9b26b6] hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    (localStorage.setItem("cookie-consent", "accepted"), t(!1));
                  }}
                  className="flex-1 bg-[#9b26b6] hover:bg-[#831e9a] text-white text-[10px] font-bold py-2.5 rounded-lg transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#9b26b6]/20"
                >
                  Accept All
                </button>
                <button
                  onClick={() => {
                    (localStorage.setItem("cookie-consent", "declined"), t(!1));
                  }}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 text-[10px] font-bold py-2.5 rounded-lg transition-all duration-300 uppercase tracking-widest border border-white/5"
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={() => t(!1)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <XIcon size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;
