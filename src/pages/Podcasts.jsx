import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRightIcon,
  PlayIcon,
  RadioIcon,
  SearchIcon,
  TerminalIcon,
  TrendingUpIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import {
  EPISODES,
  fetchLatestEpisodes,
  mergeEpisodes,
  PODCAST_CHANNEL_URL,
  youtubeThumbnail,
  youtubeWatchUrl,
} from "../data/podcastEpisodes";

// "EP.12" when the YouTube title carries a number, otherwise the air date.
const episodeLabel = (e) =>
  e.episode
    ? `EP.${e.episode}`
    : new Date(`${e.publishedAt}T12:00:00`)
        .toLocaleDateString("en-US", { month: "short", day: "numeric" })
        .toUpperCase();

const YouTubeIcon = ({ className: e }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={e}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Reveal = ({ children: e, className: t, delay: n = 0 }) => (
    <div className={`overflow-hidden block relative py-4 -my-4 ${t}`}>
      <motion.div
        initial={{
          y: "110%",
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{
          once: !0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          delay: n,
        }}
      >
        {e}
      </motion.div>
    </div>
  ),
  SplitText = ({ text: e, className: t, color: n = "text-white" }) => (
    <span
      className={`block font-black uppercase leading-[0.85] tracking-tighter whitespace-nowrap ${n} ${t}`}
      style={{
        fontFamily: "'Inter', sans-serif",
        transform: "scaleY(1.15)",
        transformOrigin: "left bottom",
        willChange: "transform",
      }}
    >
      {e}
    </span>
  ),
  FeaturedEpisode = ({ episode: t, onPlay: e }) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: "easeOut",
        }}
        className="w-full max-w-[90vw] lg:max-w-[380px] bg-white/5 backdrop-blur-2xl border border-white/10 p-4 lg:p-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] z-40"
      >
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
            <RadioIcon className="w-3 h-3 animate-pulse" />
            {" Now Streaming"}
          </span>
          <span className="text-[10px] font-mono font-bold text-white/60">
            {episodeLabel(t)}
          </span>
        </div>
        <div className="flex gap-4 lg:gap-5 items-start">
          <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-lg bg-black/50 overflow-hidden flex-shrink-0 border border-white/10">
            <img
              src={youtubeThumbnail(t.id)}
              alt={t.guest}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h4 className="text-white font-black text-xs lg:text-sm leading-tight mb-2 line-clamp-2">
              {t.title}
            </h4>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider truncate">
              {t.guest}
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-6 flex items-center gap-3">
          <button
            onClick={() => e(t)}
            className="flex-1 h-10 lg:h-12 bg-[#FFD700] text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-lg flex items-center justify-center gap-3 hover:bg-white transition-colors"
          >
            <PlayIcon className="w-3 h-3 fill-current" />
            {" Play Episode"}
          </button>
          <a
            href={PODCAST_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chasing Excellence on YouTube"
            className="hidden lg:flex w-12 h-12 items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-[#FFD700] hover:border-[#FFD700]/40 transition-colors"
          >
            <YouTubeIcon className="w-4 h-4 fill-current" />
          </a>
        </div>
      </motion.div>
    );
  },
  VideoPlayer = ({ activeEpisode: e, onClose: t }) => {
    React.useEffect(() => {
      if (!e) return;
      const n = (n) => "Escape" === n.key && t();
      return (
        window.addEventListener("keydown", n),
        () => window.removeEventListener("keydown", n)
      );
    }, [e, t]);
    return (
      <AnimatePresence>
        {e && (
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
              duration: 0.3,
            }}
            onClick={t}
            className="fixed inset-0 z-[2147483647] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 40,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-[#0a0a0a] border border-[#FFD700]/20 rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${e.id}?autoplay=1&rel=0`}
                  title={e.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={!0}
                />
              </div>
              <div className="px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="px-2 h-10 md:h-12 min-w-[2.5rem] md:min-w-[3rem] bg-[#FFD700] flex items-center justify-center font-black text-black text-[10px] md:text-xs shrink-0 rounded">
                    {episodeLabel(e)}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs md:text-sm font-black text-white truncate">
                      {e.title}
                    </h4>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 truncate">
                      {e.guest}
                    </p>
                  </div>
                </div>
                <a
                  href={youtubeWatchUrl(e.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#FFD700] transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4 fill-current" />
                  YouTube
                </a>
                <button
                  onClick={t}
                  aria-label="Close video"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <XIcon size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
  EpisodeRow = ({ episode: e, onPlay: t, activeId: n }) => {
    const r = n === e.id;
    return (
      <motion.div
        layout={!0}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: !0,
          margin: "-10%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={
          "group relative flex flex-col lg:flex-row gap-6 lg:gap-8 py-8 border-b transition-colors " +
          (r
            ? "border-[#FFD700] bg-white/5 pl-4 -ml-4 pr-4 -mr-4 rounded-xl"
            : "border-white/5 hover:border-white/10")
        }
      >
        <div className="relative w-full lg:w-[320px] aspect-video flex-shrink-0 rounded-2xl overflow-hidden bg-black/50">
          <img
            src={youtubeThumbnail(e.id)}
            alt={e.guest}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => t(e)}
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#FFD700] text-black flex items-center justify-center transform lg:scale-90 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.4)]"
            >
              <PlayIcon className="w-6 h-6 fill-current ml-1" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between py-1 w-full">
          <div>
            <h3 className="text-xl md:text-3xl font-black text-white uppercase leading-[0.95] mb-3 tracking-tighter group-hover:text-[#FFD700] transition-colors duration-300 max-w-4xl">
              {e.title}
            </h3>
            <p className="text-white/70 text-xs md:text-sm font-semibold leading-relaxed line-clamp-2 max-w-3xl mb-1">
              {e.desc}
            </p>
            <a
              href={youtubeWatchUrl(e.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#FFD700] text-[10px] md:text-xs font-black hover:underline mb-6 mt-3 uppercase tracking-wide"
            >
              Read Full Brief
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-auto pt-2 gap-4">
            <button
              onClick={() => t(e)}
              className="flex items-center gap-2 text-[#FFD700] text-xs md:text-sm font-black uppercase tracking-wider group/btn hover:text-white transition-colors"
            >
              Watch Episode
              <ArrowRightIcon className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-white/40">
                {e.duration}
              </span>
              <a
                href={youtubeWatchUrl(e.id)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch on YouTube"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#9B26B6] hover:text-white text-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
              >
                <YouTubeIcon className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

export function Podcasts() {
  const e = React.useRef(null),
    { scrollYProgress: n } = useScroll({
      target: e,
      offset: ["start start", "end end"],
    }),
    r = useTransform(n, [0, 1], ["0%", "30%"]),
    i = useTransform(n, [0, 1], ["0%", "10%"]),
    a = useTransform(n, [0.5, 1], ["0%", "-5%"]),
    [s, o] = React.useState(null),
    [p, m] = React.useState(""),
    [episodes, setEpisodes] = React.useState(EPISODES);
  React.useEffect(() => {
    let cancelled = !1;
    fetchLatestEpisodes()
      .then((latest) => {
        cancelled || setEpisodes((list) => mergeEpisodes(list, latest));
      })
      .catch(() => {});
    return () => {
      cancelled = !0;
    };
  }, []);
  const y = (e) => o(e),
    w = React.useMemo(
      () =>
        episodes.filter(
          (e) =>
            e.title.toLowerCase().includes(p.toLowerCase()) ||
            e.guest.toLowerCase().includes(p.toLowerCase()) ||
            e.desc.toLowerCase().includes(p.toLowerCase()),
        ),
      [p, episodes],
    );
  return (
    <LayoutGroup>
      <main
        ref={e}
        className="relative bg-[#050005] text-white min-h-screen w-full overflow-x-hidden selection:bg-[#FFD700] selection:text-black"
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <section className="relative h-screen w-full overflow-hidden bg-black">
          <motion.div
            style={{
              y: i,
            }}
            className="absolute inset-0 z-10 w-full h-full pointer-events-none"
          >
            <img
              src="/assets/tonyMic-C4xJTl0d.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              style={{
                filter: "grayscale(100%) contrast(1.1) brightness(0.95)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-20" />
          </motion.div>
          <motion.div
            style={{
              y: r,
            }}
            className="absolute inset-0 z-20 flex flex-col justify-center pl-6 md:pl-16 pb-[55vh] md:pb-[25vh] w-full max-w-[100vw]"
          >
            <Reveal className="mb-2 md:mb-6">
              <SplitText
                text="CHASING"
                color="text-white"
                className="text-[clamp(2.2rem,13vw,11rem)] drop-shadow-2xl"
              />
            </Reveal>
            <Reveal delay={0.1} className="-mt-4 md:-mt-10">
              <SplitText
                text="EXCELLENCE"
                color="text-[#FFD700]"
                className="text-[clamp(2.2rem,13vw,11rem)] drop-shadow-2xl"
              />
            </Reveal>
            <Reveal delay={0.2} className="mt-4 md:mt-8 ml-1 md:ml-3">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-8 md:w-16 bg-[#FFD700]" />
                <span className="text-[clamp(0.8rem,2vw,1.5rem)] font-black tracking-[0.4em] text-white/90 uppercase whitespace-nowrap">
                  The Podcast
                </span>
              </div>
            </Reveal>
          </motion.div>
          <motion.div
            style={{
              opacity: useTransform(n, [0, 0.2], [1, 0]),
            }}
            className="absolute bottom-24 left-6 md:bottom-12 md:left-16 z-30 max-w-[280px] md:max-w-sm text-left hidden sm:block"
          >
            <div className="border-l-2 border-[#FFD700] pl-6 py-1">
              <p className="text-white/80 text-xs md:text-sm font-bold leading-relaxed">
                A raw deconstruction of the mindset, systems, and execution of
                the world's most elite performers.
              </p>
            </div>
          </motion.div>
          <div className="absolute bottom-8 left-6 right-6 md:left-auto md:bottom-12 md:right-16 z-40 flex justify-center md:block pointer-events-none md:pointer-events-auto">
            <div className="pointer-events-auto">
              <FeaturedEpisode episode={episodes[0]} onPlay={y} />
            </div>
          </div>
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: 80,
            }}
            transition={{
              delay: 2,
              duration: 1.5,
            }}
            className="absolute bottom-0 left-6 md:left-16 w-[1px] bg-[#FFD700] z-30 hidden sm:block"
          />
        </section>
        <section className="relative z-20 bg-[#050005] pt-24 pb-24 md:pt-32 md:pb-32 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8 border-b border-white/10 pb-8">
              <div className="flex flex-col">
                <SplitText
                  text="LATEST"
                  color="text-white"
                  className="text-[clamp(3rem,9vw,7rem)]"
                />
                <SplitText
                  text="EPISODES"
                  color="text-[#FFD700]"
                  className="text-[clamp(3rem,9vw,7rem)] -mt-2 md:-mt-4"
                />
              </div>
              <div className="relative group w-full lg:w-72 mt-4 lg:mt-0">
                <input
                  type="text"
                  placeholder="SEARCH DATABASE..."
                  value={p}
                  onChange={(e) => m(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-3 pl-10 text-white focus:outline-none focus:border-[#FFD700] font-mono font-bold text-xs md:text-sm uppercase transition-colors"
                />
                <SearchIcon className="absolute left-0 top-3 w-5 h-5 text-white/40 group-focus-within:text-[#FFD700] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <AnimatePresence>
                {w.length > 0 ? (
                  w.map((e) => (
                    <EpisodeRow
                      episode={e}
                      onPlay={y}
                      activeId={s?.id}
                      key={e.id}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="py-32 text-center text-white/30 font-mono text-sm uppercase tracking-widest"
                  >
                    No signals found.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
        <section className="relative z-20 bg-[#050005] py-32 overflow-hidden border-t border-white/5">
          <motion.div
            style={{
              x: a,
            }}
            className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-10 pointer-events-none select-none overflow-hidden flex justify-center items-center"
          >
            <span
              className="text-[18vw] font-black text-transparent whitespace-nowrap text-center w-full"
              style={{
                WebkitTextStroke: "2px #FFD700",
              }}
            >
              ELEVATE
            </span>
          </motion.div>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="hidden md:flex w-64 h-64 border border-[#FFD700]/30 rounded-full items-center justify-center relative flex-shrink-0">
              <div className="absolute inset-0 border border-[#FFD700]/10 rounded-full scale-75" />
              <div className="absolute inset-0 border border-[#FFD700]/10 rounded-full scale-50" />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: 1 / 0,
                  ease: "linear",
                }}
                className="w-full h-full absolute inset-0 rounded-full border-t border-[#FFD700]/50"
              />
              <TrendingUpIcon size={64} className="text-[#FFD700]" />
            </div>
            <div className="text-center md:text-left flex-1">
              <span className="text-[#FFD700] font-black uppercase tracking-[0.2em] text-xs mb-8 block flex items-center justify-center md:justify-start gap-3">
                <TerminalIcon size={14} />
                {" Protocol 001: Growth"}
              </span>
              <div className="flex flex-col gap-4">
                {["WE DON'T FILTER", "TALENT.", "WE FORGE", "IT."].map(
                  (e, t) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      transition={{
                        delay: 0.1 * t,
                        duration: 0.8,
                      }}
                      key={t}
                    >
                      <SplitText
                        text={e}
                        className="text-[clamp(2.5rem,6vw,5rem)]"
                        color={t > 1 ? "text-[#FFD700]" : "text-white"}
                      />
                    </motion.div>
                  ),
                )}
              </div>
              <p className="text-white/40 mt-8 font-mono text-sm max-w-xl mx-auto md:mx-0 border-l-2 border-[#FFD700] pl-4">
                We believe the 1% isn't a club you're born into. It's a club you
                work your way into. Whether it's your first loan or your
                thousandth keynote, we provide the tactical systems to get you
                to the next level.
              </p>
              <div className="mt-8 flex gap-6 text-xs font-bold uppercase tracking-widest text-white/60">
                <span>From Day One</span>
                <span className="text-[#FFD700]">→</span>
                <span>To The 1%</span>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative z-20 bg-black border-t border-white/5 py-12 px-6 md:px-12 mb-20 lg:mb-0">
          <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-[#FFD700]" />
              <span className="text-xs font-black uppercase tracking-[0.25em]">
                Tony Thompson
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
              <a
                href="https://x.com/TonyThomps7989"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/tt5481562/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/meettonythompson/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
        <VideoPlayer activeEpisode={s} onClose={() => o(null)} />
      </main>
    </LayoutGroup>
  );
}

export default Podcasts;
