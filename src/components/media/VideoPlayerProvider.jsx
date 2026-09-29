import { AnimatePresence, motion } from "framer-motion";
import {
  MaximizeIcon,
  MinimizeIcon,
  PauseIcon,
  PlayIcon,
  Volume2Icon,
  VolumeXIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import ReactDOM from "react-dom";
import { LOGO_TT } from "../../constants/assets";

const VideoPlayerContext = React.createContext();

export function VideoPlayerProvider({ children: e }) {
  const [t, n] = React.useState(null),
    [r, i] = React.useState(!1),
    [a, s] = React.useState(!1),
    [o, l] = React.useState(0),
    [c, u] = React.useState(0),
    [d, h] = React.useState(!1),
    [f, p] = React.useState(!0),
    [m, g] = React.useState(!1),
    [x, b] = React.useState(!1),
    [v, y] = React.useState("BOOK TONY →"),
    [w, N] = React.useState("/book-tony"),
    [k, _] = React.useState(!0),
    j = React.useRef(null),
    S = React.useRef(null),
    A = React.useRef(null),
    L = React.useRef(0);
  React.useEffect(() => {
    t
      ? ((L.current = window.scrollY),
        (document.body.style.overflow = "hidden"),
        (document.body.style.position = "fixed"),
        (document.body.style.top = `-${L.current}px`))
      : ((document.body.style.overflow = ""),
        (document.body.style.position = ""),
        (document.body.style.top = ""),
        window.scrollTo({
          top: L.current,
          behavior: "instant",
        }));
  }, [t]);
  const E = () => {
    (j.current && j.current.pause(),
      n(null),
      window.scrollTo({
        top: L.current,
        behavior: "instant",
      }));
  };
  React.useEffect(() => {
    const e = (e) => {
      t &&
        j.current &&
        (("Space" !== e.code && " " !== e.key) || (e.preventDefault(), P()));
    };
    return (
      window.addEventListener("keydown", e),
      () => window.removeEventListener("keydown", e)
    );
  }, [t, r]);
  const P = () => {
      const e = j.current;
      e && (r ? (e.pause(), i(!1)) : (e.play(), i(!0)));
    },
    C = (e) => {
      if (!e || isNaN(e)) return "0:00";
      const t = Math.floor(e / 60),
        n = Math.floor(e % 60);
      return `${t}:${n < 10 ? "0" : ""}${n}`;
    },
    T = () => {
      (m || g(!0),
        p(!0),
        clearTimeout(S.current),
        (S.current = setTimeout(() => p(!1), 2500)));
    };
  return (
    <VideoPlayerContext.Provider
      value={{
        openVideo: (e, t = {}) => {
          n(e);
          const r = !1 === t || (t && !1 === t.showCTA);
          (_(!r), y(t.ctaText || "BOOK TONY →"));
          const a = t.ctaLink ? t.ctaLink : "/book-tony";
          N(a);
          const s = !("object" != typeof t || !t) && t.programsJump;
          (b(!0 === s), i(!1), l(0), p(!0), g(!1));
        },
        closeVideo: E,
        videoSrc: t,
      }}
    >
      {e}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {t && (
            <motion.div
              id="video-modal-container"
              ref={A}
              className="fixed inset-0 z-[2147483649] flex items-center justify-center"
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
                duration: 0.4,
              }}
              onClick={E}
              onMouseMove={() => T()}
              onTouchStart={() => T()}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(155,38,182,0.25) 0%, rgba(0,0,0,0.95) 65%)",
                backdropFilter: "blur(80px)",
              }}
              key={"video-modal"}
            >
              <motion.div
                className="relative w-[95vw] h-[90vh] rounded-[20px] overflow-hidden bg-black flex items-center justify-center"
                initial={{
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-[2147483650]">
                  <img
                    src={LOGO_TT}
                    alt="TT"
                    className="w-[38px] drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                  />
                </div>
                <video
                  ref={j}
                  src={t}
                  autoPlay={!0}
                  playsInline={!0}
                  preload="auto"
                  className="w-full h-full object-cover"
                  onClick={P}
                  onTimeUpdate={() => {
                    const e = j.current;
                    if (e && e.duration) {
                      const t = (e.currentTime / e.duration) * 100;
                      (l(t), u(e.duration));
                    }
                  }}
                  onEnded={() => i(!1)}
                  muted={a}
                />
                <AnimatePresence>
                  {k && f && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                      key={"cta-btn-wrapper"}
                    >
                      <div
                        onClick={(e) => {
                          (e && e.stopPropagation && e.stopPropagation(),
                            E(),
                            x
                              ? setTimeout(() => {
                                  const e =
                                    document.getElementById("pricing-tiers");
                                  e &&
                                    e.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                }, 250)
                              : setTimeout(() => {
                                  w.startsWith("http")
                                    ? window.open(w, "_blank")
                                    : (window.location.href = w);
                                }, 300));
                        }}
                        className={
                          "\r\n                                                    group\r\n                                                    absolute z-[9999] flex items-center justify-center\r\n                                                    /* MOBILE SIZES (Reduced as requested) */\r\n                                                    w-[180px] h-[50px] text-[0.75rem]\r\n                                                    /* DESKTOP SIZES */\r\n                                                    md:w-[230px] md:h-[62px] md:text-[0.9rem]\r\n                                                    text-white font-['Press_Start_2P']\r\n                                                    uppercase tracking-wider\r\n                                                    bg-gradient-to-br\r\n                                                    from-[#7d1f97]/85 to-[#952ca8]/70\r\n                                                    rounded-[1rem] border border-white/20\r\n                                                    shadow-[0_10px_25px_rgba(155,38,182,0.7)]\r\n                                                    overflow-hidden\r\n                                                    transition-all duration-700\r\n                                                    cursor-pointer\r\n                                                "
                        }
                        style={{
                          top: "80%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {x ? (
                          <>
                            <span className="absolute transition-all duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0">
                              WIN →
                            </span>
                            <span className="absolute opacity-0 translate-y-[150%] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                              NOW →
                            </span>
                          </>
                        ) : (
                          v
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {f && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full px-6 pb-4 pt-2 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col gap-2"
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 40,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={o}
                        onChange={(e) => {
                          const t = j.current;
                          if (t && c) {
                            const n = Number(e.target.value);
                            ((t.currentTime = (n / 100) * c), l(n));
                          }
                        }}
                        className="w-full accent-white cursor-pointer h-[4px] appearance-none bg-white/30 rounded-lg"
                      />
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-5">
                          <button onClick={P}>
                            {r ? (
                              <PauseIcon size={26} strokeWidth={2} />
                            ) : (
                              <PlayIcon size={26} strokeWidth={2} />
                            )}
                          </button>
                          <button
                            onClick={() => {
                              const e = j.current;
                              e && ((e.muted = !a), s(!a));
                            }}
                          >
                            {a ? (
                              <VolumeXIcon size={24} strokeWidth={2} />
                            ) : (
                              <Volume2Icon size={24} strokeWidth={2} />
                            )}
                          </button>
                          <span className="text-sm tracking-wide text-white/90 font-medium">
                            {C(j.current?.currentTime || 0)}
                            {" /"} {C(c)}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            const e = document.getElementById(
                              "video-modal-container",
                            );
                            e &&
                              (document.fullscreenElement
                                ? (document.exitFullscreen().catch(() => {}),
                                  h(!1))
                                : (e.requestFullscreen().catch(() => {}),
                                  h(!0)));
                          }}
                        >
                          {d ? (
                            <MinimizeIcon size={24} strokeWidth={2} />
                          ) : (
                            <MaximizeIcon size={24} strokeWidth={2} />
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {m && f && (
                    <motion.button
                      onClick={E}
                      className={
                        "\r\n                                                absolute z-[2147483650]\r\n                                                transition-all duration-300\r\n                                                hover:text-[#7d1f97] text-white\r\n                                                \r\n                                                /* Exact mirroring of Logo positions */\r\n                                                top-4 right-4 \r\n                                                md:top-6 md:right-6\r\n                                            "
                      }
                      whileHover={{
                        rotate: 90,
                        scale: 1.1,
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      key={"close-btn"}
                    >
                      <XIcon
                        size={32}
                        strokeWidth={1.5}
                        className="drop-shadow-md"
                      />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  return React.useContext(VideoPlayerContext);
}

export const JOURNEY_VIDEO = "/videos/Journey.mp4";

export default VideoPlayerProvider;
