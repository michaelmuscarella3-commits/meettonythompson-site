import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useVideoPlayer } from "../media/VideoPlayerProvider";

export function Testimonials() {
  const e = [
      {
        id: "horizon",
        img: "/assets/testimonial1-Dq84t2qp.jpg",
        name: "Jane Smith",
        role: "VP, Horizon",
        quote:
          "Working with Tony didn’t just redefine our strategy — it redefined our mindset.",
        video: "/assets/testimonials/testimonialVideo1.mp4",
      },
      {
        id: "diversegrowth",
        img: "/assets/testimonial2-D-YzYaYD.jpg",
        name: "Lermacus Therman",
        role: "Founder, DiverseGrowth",
        quote:
          "Tony unlocked a level of confidence and performance we didn’t think possible.",
        video: "/assets/testimonials/testimonialVideo2.mp4",
      },
      {
        id: "maven",
        img: "/assets/testimonial3-XYm2s9A0.jpg",
        name: "Sophie K.",
        role: "Brand Director, Maven",
        quote:
          "Every interaction with Tony is a masterclass in clarity, focus, and results.",
        video: "/assets/testimonials/testimonialVideo3.mp4",
      },
      {
        id: "stellar",
        img: "/assets/testimonial4-Dvk34l4N.jpg",
        name: "Lucas Howard",
        role: "Head of Ops, Stellar",
        quote:
          "Tony has that rare precision that moves teams and transforms outcomes.",
        video: "/assets/testimonials/testimonialVideo4.mp4",
      },
      {
        id: "nextgen",
        img: "/assets/testimonial5-Df8x1THz.jpg",
        name: "Alicia Ramos",
        role: "CEO, NextGen Realty",
        quote:
          "The systems Tony built with us turned inspiration into measurable momentum.",
        video: "/assets/testimonials/testimonialVideo5.mp4",
      },
    ],
    { openVideo: t } = useVideoPlayer(),
    [n, r] = React.useState(0),
    i = React.useRef(null),
    a = React.useRef(null),
    s = React.useRef(null),
    [o, l] = React.useState(!1);
  React.useEffect(() => {
    const e = () => l(window.innerWidth < 768);
    return (
      e(),
      window.addEventListener("resize", e),
      () => window.removeEventListener("resize", e)
    );
  }, []);
  const c = React.useRef(Array(e.length).fill(0)),
    u = React.useRef(!1);
  React.useEffect(() => {
    const e = a.current;
    if (!e) return;
    const t = new IntersectionObserver(
      ([e]) => {
        ((u.current = e.isIntersecting),
          e.isIntersecting ? o || (f(), d()) : (p(), o || h()));
      },
      {
        threshold: 0.35,
      },
    );
    return (t.observe(e), () => t.disconnect());
  }, [o]);
  const d = () => {
      if (o) return;
      const e = i.current;
      e &&
        ((e.currentTime = c.current[n] || 0),
        setTimeout(() => {
          e.play().catch(() => {});
        }, 50));
    },
    h = () => {
      if (o) return;
      const e = i.current;
      e && ((c.current[n] = e.currentTime), e.pause());
    },
    f = () => {
      o ||
        s.current ||
        (s.current = setInterval(() => {
          m();
        }, 12e3));
    },
    p = () => {
      (clearInterval(s.current), (s.current = null));
    },
    m = () => {
      (o || h(),
        r((t) => {
          const n = (t + 1) % e.length;
          return (
            o ||
              setTimeout(() => {
                d();
              }, 80),
            n
          );
        }));
    },
    g = (e) => {
      (o || h(),
        r(e),
        p(),
        o ||
          (setTimeout(() => {
            d();
          }, 80),
          f()));
    };
  return (
    <motion.section
      id="testimonials"
      ref={a}
      className="relative flex flex-col items-center justify-center overflow-hidden text-white bg-gradient-to-br from-[#7d1f97] via-[#952ca8] to-[#7d1f97]"
      style={{
        backgroundColor: "#7d1f97",
        marginBottom: "-8px",
        zIndex: 20,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-[#9b26b6]/40 via-[#000]/60 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-[1.5rem] md:top-[1.2rem] left-1/2 -translate-x-1/2 z-[25] w-full text-center px-4">
        <motion.h2 className="text-[clamp(1.8rem,5vw,3.75rem)] md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_0_25px_rgba(0,0,0,0.45)] uppercase">
          Proof Beats Promise
        </motion.h2>
      </div>
      <div className="relative flex flex-col md:flex-row w-full min-h-[100dvh] md:min-h-[100vh]">
        <div className="flex-1 flex flex-col justify-start px-6 md:px-[6vw] pt-32 md:pt-[14rem] pb-10 md:pb-[5rem] text-left relative overflow-hidden">
          <div className="relative z-10 max-w-[700px] min-h-[14rem] md:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                className="absolute inset-0"
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
                  duration: 1,
                  ease: [0.25, 1, 0.3, 1],
                }}
                key={n}
              >
                <p className="text-[clamp(1.5rem,3.5vw,3rem)] md:text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.2] mb-6 md:mb-10 tracking-tight">
                  “{e[n].quote}”
                </p>
                <div className="text-xl md:text-2xl font-semibold tracking-wide">
                  <span className="text-white font-bold block md:inline">
                    {e[n].name}
                  </span>
                  {o ? <br /> : <span className="hidden md:inline"> </span>}
                  <span className="text-white/80 font-medium">{e[n].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative md:absolute md:bottom-[6rem] left-0 md:left-[8%] mt-8 md:mt-0 flex gap-2 md:gap-8 z-30 flex-nowrap md:flex-wrap w-full md:w-auto justify-center md:justify-start">
            {e.map((e, t) => (
              <motion.div
                onClick={() => g(t)}
                whileHover={{
                  scale: 1.4,
                  boxShadow:
                    "0 0 40px rgba(155,38,182,0.8), 0 0 20px rgba(255,255,255,0.2)",
                }}
                transition={{
                  duration: 0.35,
                }}
                className={`relative rounded-full overflow-hidden cursor-pointer border-[3px] sm:border-[4px] \n                                    ${t === n ? "border-white shadow-[0_0_25px_rgba(255,255,255,0.7)]" : "border-white/40"}\n                                    w-[52px] h-[52px] sm:w-[82px] sm:h-[82px] md:w-[105px] md:h-[105px] flex-shrink-0`}
                key={e.id}
              >
                <img
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full object-cover"
                  style={{
                    filter: t === n ? "brightness(1.1)" : "brightness(0.8)",
                  }}
                />
              </motion.div>
            ))}
          </div>
          <div className="relative md:absolute md:bottom-[3rem] left-0 md:left-[8%] mt-6 md:mt-0 flex gap-3 z-30 w-full md:w-auto justify-center md:justify-start">
            {e.map((e, t) => (
              <motion.div
                onClick={() => g(t)}
                className={
                  "w-[14px] h-[14px] rounded-full cursor-pointer transition-all duration-300 \n                                    " +
                  (t === n
                    ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                    : "bg-white/40 hover:bg-white/70")
                }
                key={t}
              />
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center overflow-hidden group min-h-[40vh] md:min-h-auto">
          {!o && (
            <AnimatePresence mode="wait">
              <motion.video
                ref={i}
                src={e[n].video}
                className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_15%)] md:[mask-image:linear-gradient(to_right,transparent,black_20%)]"
                autoPlay={!0}
                muted={!0}
                loop={!0}
                playsInline={!0}
                onTimeUpdate={(e) => {
                  c.current[n] = e.target.currentTime;
                }}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                }}
                transition={{
                  duration: 2,
                  ease: [0.25, 1, 0.3, 1],
                }}
                style={{
                  boxShadow:
                    "inset 0 0 200px rgba(0,0,0,0.3), 0 0 80px rgba(155,38,182,0.3)",
                }}
                key={n}
              />
            </AnimatePresence>
          )}
          {o && (
            <motion.video
              src={e[n].video}
              poster={e[n].img}
              controls={!0}
              playsInline={!0}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              key={`mobile-video-${n}`}
            />
          )}
          {!o && (
            <motion.div
              className="absolute inset-0 z-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
              onClick={() =>
                ((e) => {
                  !o && i.current && i.current.pause();
                  const n = window.scrollY;
                  (t(e),
                    window.addEventListener(
                      "focus",
                      () => {
                        window.scrollTo({
                          top: n,
                          behavior: "instant",
                        });
                      },
                      {
                        once: !0,
                      },
                    ));
                })(e[n].video)
              }
            >
              <motion.span
                className="text-white font-['Press_Start_2P'] text-[1.45rem] md:text-[2rem] tracking-[0.2em] uppercase opacity-100"
                initial={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                Watch Story
              </motion.span>
            </motion.div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-[#9b26b6]/50 to-[#fff] pointer-events-none z-[5]" />
    </motion.section>
  );
}

export default Testimonials;
