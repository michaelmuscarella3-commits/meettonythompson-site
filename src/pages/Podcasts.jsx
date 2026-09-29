import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ActivityIcon,
  ArrowRightIcon,
  CircleCheckIcon,
  PauseIcon,
  PlayIcon,
  RadioIcon,
  SearchIcon,
  SkipBackIcon,
  SkipForwardIcon,
  TerminalIcon,
  TrendingUpIcon,
  Volume2Icon,
  XIcon,
} from "lucide-react";
import React from "react";

const SpotifyIcon = ({ className: e }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={e}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.6 1.44.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  AppleIcon = ({ className: e }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={e}>
      <path d="M21.526 10.548C21.365 7.158 19.3 4.2 16.326 2.531c-.39-.219-.884-.08-1.103.311-.22.39-.08.884.311 1.103 2.576 1.446 4.363 4.009 4.502 6.945.016.331.229.622.548.747.319.126.68.049.914-.196.01-.01.019-.02.028-.031v-.862zm-19.052 0c-.01 2.895 1.748 5.426 4.287 6.896.388.225.882.091 1.107-.297.225-.388.091-.882-.297-1.107-2.126-1.23-3.598-3.348-3.59-5.772v-.862c.009.011.018.021.028.031.234.245.595.322.914.196.319-.125.532-.416.548-.747.139-2.936 1.926-5.499 4.502-6.945.391-.219.531-.713.311-1.103-.219-.391-.713-.53-1.103-.311C6.204 4.2 4.139 7.158 3.978 10.548H2.474v.862h-.001zM11.992 4.31c-3.364 0-6.092 2.728-6.092 6.092s2.728 6.092 6.092 6.092 6.092-2.728 6.092-6.092-2.728-6.092-6.092-6.092zm0 10.669c-2.524 0-4.577-2.053-4.577-4.577s2.053-4.577 4.577-4.577 4.577 2.053 4.577-4.577-2.053 4.577-4.577 4.577z" />
      <path d="M12 17.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-1.119-2.5-2.5-1.119-2.5-2.5-1.119-2.5-2.5-1.119-2.5-2.5-1.119-2.5-2.5-2.5z" />
    </svg>
  ),
  YouTubeIcon = ({ className: e }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={e}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  EPISODES = [
    {
      id: 104,
      title: "The Rookie Launchpad: Your First 6 Months in Mortgage",
      guest: "Tony Thompson",
      category: "Mortgage",
      duration: "45:15",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      desc: "Starting from zero? This is your survival guide. Tony breaks down exactly how to get your first 10 loans, build agent relationships, and avoid the 'rookie burnout' trap.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 103,
      title: "From 1 to 100: Scaling Your Volume Without Losing Your Mind",
      guest: "Top Originator Panel",
      category: "Mortgage",
      duration: "54:10",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      desc: "You've mastered the basics—now let's scale. We discuss hiring your first assistant, automating your workflow, and making the leap to 9-figure volume.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 102,
      title: "Finding Your Voice: Public Speaking for Introverts & Beginners",
      guest: "Tony Thompson",
      category: "Keynote",
      duration: "38:33",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      desc: "Think you can't command a stage? Think again. Tony reveals the framework he used to go from terrified to headlining major conferences.",
      image:
        "https://images.unsplash.com/photo-1475721027767-f4242310f17e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 101,
      title: "The Modern Loan Officer: Personal Branding 101",
      guest: "Industry Experts",
      category: "Branding",
      duration: "42:20",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      desc: "In a digital world, your reputation is your resume. Learn how to build a personal brand that attracts real estate agents and borrowers on autopilot.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
  ],
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
  PlatformButton = ({
    label: e,
    name: t,
    type: n = "text",
    value: r = "",
    onChange: i,
  }) => {
    const [a, s] = React.useState(!1);
    return (
      <div className="relative w-full group mb-8">
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor={t}
            className={
              "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 " +
              (a ? "text-[#FFD700]" : "text-white/40")
            }
          >
            {e}
          </label>
          <motion.div
            animate={{
              opacity: a ? 1 : 0,
            }}
            className="w-1.5 h-1.5 bg-[#FFD700] rounded-full shadow-[0_0_10px_#FFD700]"
          />
        </div>
        <div className="relative">
          <div
            className={
              "absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 transition-all duration-300 " +
              (a ? "h-full bg-[#FFD700]" : "h-2/3 top-1/6")
            }
          />
          <input
            type={n}
            name={t}
            id={t}
            value={r}
            onChange={i}
            onFocus={() => s(!0)}
            onBlur={() => s(!1)}
            className="w-full bg-white/5 border-none py-4 px-4 text-lg md:text-xl text-white font-bold focus:outline-none focus:bg-white/10 transition-colors duration-300 placeholder-transparent font-mono"
            placeholder={e}
          />
          <div
            className={
              "absolute right-0 top-0 bottom-0 w-[1px] bg-white/10 transition-all duration-300 " +
              (a ? "h-full bg-[#FFD700]" : "h-2/3 top-1/6")
            }
          />
        </div>
      </div>
    );
  },
  Equalizer = ({ isPlaying: e }) => (
    <motion.div
      animate={
        e
          ? {
              height: [4, 16, 8, 24, 4],
              backgroundColor: ["#FFFFFF", "#FFD700", "#FFFFFF"],
            }
          : {
              height: 4,
              backgroundColor: "#FFFFFF",
            }
      }
      transition={{
        duration: 0.5,
        repeat: 1 / 0,
        repeatType: "mirror",
      }}
      className="w-1 rounded-full bg-white"
    />
  ),
  FeaturedEpisode = ({ onPlay: e }) => {
    const t = EPISODES[0];
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
            EP.{t.id}
          </span>
        </div>
        <div className="flex gap-4 lg:gap-5 items-start">
          <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-lg bg-black/50 overflow-hidden flex-shrink-0 border border-white/10">
            <img
              src={t.image}
              alt="Thumb"
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
          <div className="hidden lg:flex w-12 h-12 items-center justify-center rounded-lg border border-white/10 text-white/40">
            <Volume2Icon className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    );
  },
  PlayerBar = ({
    activeEpisode: e,
    isPlaying: t,
    togglePlay: n,
    currentTime: r,
    duration: i,
    onClose: a,
  }) => {
    const s = i ? (r / i) * 100 : 0;
    return (
      <AnimatePresence>
        {e && (
          <motion.div
            initial={{
              y: "100%",
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#FFD700]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="max-w-[1800px] mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between gap-4 md:gap-8 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10">
                <motion.div
                  className="h-full bg-[#FFD700]"
                  style={{
                    width: `${s}%`,
                  }}
                  layoutId="progressBar"
                />
              </div>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFD700] flex items-center justify-center font-black text-black text-xs shrink-0 rounded">
                  {e.id}
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
              <div className="flex items-center gap-4 md:gap-6">
                <button className="hidden md:block text-white/40 hover:text-white transition-colors">
                  <SkipBackIcon size={20} />
                </button>
                <button
                  onClick={n}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all bg-white/5"
                >
                  {t ? (
                    <PauseIcon className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  ) : (
                    <PlayIcon className="w-4 h-4 md:w-5 md:h-5 fill-current translate-x-0.5" />
                  )}
                </button>
                <button className="hidden md:block text-white/40 hover:text-white transition-colors">
                  <SkipForwardIcon size={20} />
                </button>
                <button
                  onClick={a}
                  className="md:hidden text-white/40 hover:text-white"
                >
                  <XIcon size={20} />
                </button>
              </div>
              <div className="hidden md:flex items-center gap-1 h-8 flex-1 justify-end opacity-50">
                <div className="mr-8 font-mono text-xs text-[#FFD700]">
                  {new Date(1e3 * r).toISOString().substr(14, 5)}
                  {" / "}
                  {new Date(1e3 * i).toISOString().substr(14, 5)}
                </div>
                {[...Array(12)].map((e, n) => (
                  <Equalizer isPlaying={t} key={n} />
                ))}
                <button
                  onClick={a}
                  className="ml-6 text-white/40 hover:text-white transition-colors"
                >
                  <XIcon size={20} />
                </button>
              </div>
            </div>
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
            src={e.image}
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
            <button className="text-[#FFD700] text-[10px] md:text-xs font-black hover:underline mb-6 mt-3 uppercase tracking-wide">
              Read Full Brief
            </button>
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
              {[AppleIcon, SpotifyIcon, YouTubeIcon].map((Ce_, t) => (
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#9B26B6] hover:text-white text-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
                  key={t}
                >
                  <Ce_ className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

export function Podcasts() {
  const e = React.useRef(null),
    t = React.useRef(new Audio()),
    { scrollYProgress: n } = useScroll({
      target: e,
      offset: ["start start", "end end"],
    }),
    r = useTransform(n, [0, 1], ["0%", "30%"]),
    i = useTransform(n, [0, 1], ["0%", "10%"]),
    a = useTransform(n, [0.5, 1], ["0%", "-5%"]),
    [s, o] = React.useState(null),
    [l, c] = React.useState(!1),
    [u, d] = React.useState(0),
    [h, f] = React.useState(0),
    [p, m] = React.useState(""),
    [g, x] = React.useState({
      name: "",
      email: "",
    }),
    [b, v] = React.useState("idle");
  React.useEffect(() => {
    const e = t.current,
      n = () => {
        (f(e.duration), d(e.currentTime));
      },
      r = () => d(e.currentTime),
      i = () => c(!1);
    return (
      e.addEventListener("loadeddata", n),
      e.addEventListener("timeupdate", r),
      e.addEventListener("ended", i),
      () => {
        (e.removeEventListener("loadeddata", n),
          e.removeEventListener("timeupdate", r),
          e.removeEventListener("ended", i));
      }
    );
  }, []);
  const y = (e) => {
      ((s && s.id === e.id) ||
        (o(e), (t.current.src = e.audioUrl), t.current.load()),
        t.current
          .play()
          .then(() => {
            c(!0);
          })
          .catch((e) =>
            console.log("Audio play failed (interaction required first)", e),
          ));
    },
    w = React.useMemo(
      () =>
        EPISODES.filter(
          (e) =>
            e.title.toLowerCase().includes(p.toLowerCase()) ||
            e.guest.toLowerCase().includes(p.toLowerCase()),
        ),
      [p],
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
              <FeaturedEpisode onPlay={y} />
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
        <section className="relative z-20 bg-[#050005] py-32 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-stretch">
            <div className="max-w-full lg:max-w-5xl lg:pr-16 flex flex-col justify-between h-full py-4 md:py-6">
              <div className="flex flex-col scale-y-[1.2] lg:scale-y-[1.4] origin-top-left mb-16 lg:mb-0">
                <SplitText
                  text="JOIN THE"
                  color="text-white"
                  className="text-4xl sm:text-5xl md:text-[clamp(3rem,5vw,7rem)] !whitespace-normal"
                />
                <SplitText
                  text="INNER CIRCLE"
                  color="text-[#9B26B6]"
                  className="text-4xl sm:text-5xl md:text-[clamp(3rem,5vw,7rem)] -mt-2 md:-mt-2 lg:-mt-4 !whitespace-normal"
                />
              </div>
              <p className="text-white/60 text-base md:text-xl font-bold leading-relaxed max-w-[95%] md:max-w-xl">
                Access the tactical breakdowns from every episode. No spam. Just
                high-signal intelligence delivered to your terminal.
              </p>
            </div>
            <div className="relative">
              {"success" === b ? (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="h-[400px] flex flex-col justify-center items-center text-center p-12 border border-[#FFD700]/30 bg-[#FFD700]/5 backdrop-blur-md rounded-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                  <CircleCheckIcon className="w-16 h-16 text-[#FFD700] mb-6" />
                  <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">
                    Access Granted
                  </h3>
                  <p className="font-mono text-[#FFD700] text-sm">
                    Welcome to the 1%.
                  </p>
                </motion.div>
              ) : (
                <div className="relative p-6 md:p-10 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group/form h-full flex flex-col justify-center min-h-[400px]">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent -translate-x-full group-hover/form:animate-[scan_2s_ease-in-out_infinite]" />
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#9B26B6]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#9B26B6]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#9B26B6]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#9B26B6]" />
                  <form
                    onSubmit={(e) => {
                      (e.preventDefault(),
                        g.name &&
                          g.email &&
                          (v("loading"), setTimeout(() => v("success"), 2e3)));
                    }}
                  >
                    <PlatformButton
                      label="Your Name"
                      name="name"
                      value={g.name}
                      onChange={(e) =>
                        x({
                          ...g,
                          name: e.target.value,
                        })
                      }
                    />
                    <PlatformButton
                      label="Secure Email"
                      name="email"
                      type="email"
                      value={g.email}
                      onChange={(e) =>
                        x({
                          ...g,
                          email: e.target.value,
                        })
                      }
                    />
                    <div className="mt-12">
                      <button
                        disabled={"loading" === b}
                        className="w-full bg-[#FFD700] text-black py-4 font-black uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-4 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {"loading" === b ? (
                            <ActivityIcon className="animate-spin" />
                          ) : (
                            <TerminalIcon size={18} />
                          )}
                          {"loading" === b ? "Processing..." : "Request Access"}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
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
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
        <PlayerBar
          activeEpisode={s}
          isPlaying={l}
          togglePlay={() => {
            (l ? t.current.pause() : t.current.play(), c(!l));
          }}
          currentTime={u}
          duration={h}
          onClose={() => {
            (t.current.pause(), c(!1), o(null));
          }}
        />
      </main>
    </LayoutGroup>
  );
}

export default Podcasts;
