import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  ClockIcon,
} from "lucide-react";
import React from "react";

const ACCENT = "#9b26b6",
  ACCENT_LIGHT = "#d069f0",
  ArticleModal = ({
    label: e,
    name: t,
    type: n = "text",
    value: r,
    onChange: i,
    placeholder: a,
    className: s = "",
  }) => {
    const [o, l] = React.useState(!1);
    return (
      <div className={`relative group w-full ${s}`}>
        <motion.label
          htmlFor={t}
          className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transition-colors duration-300"
          animate={{
            color: o ? ACCENT_LIGHT : "rgba(255,255,255,0.7)",
          }}
        >
          {e}
        </motion.label>
        <div className="relative">
          <input
            type={n}
            id={t}
            name={t}
            value={r}
            onChange={i}
            onFocus={() => l(!0)}
            onBlur={() => l(!1)}
            placeholder={a}
            className="w-full px-0 py-3 bg-transparent border-b-2 border-white/30 text-white text-base placeholder:text-white/30 focus:outline-none transition-all duration-500"
            style={{
              borderBottomColor: o ? ACCENT_LIGHT : void 0,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT})`,
            }}
            initial={{
              width: "0%",
            }}
            animate={{
              width: o ? "100%" : "0%",
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
          {o && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-8 blur-xl"
              style={{
                background: `linear-gradient(90deg, ${ACCENT}40, ${ACCENT_LIGHT}40)`,
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
            />
          )}
        </div>
      </div>
    );
  },
  ArticleCard = ({ article: e, index: t }) => {
    const [n, r] = React.useState(!1);
    return (
      <motion.article
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: !0,
          margin: "-100px",
        }}
        transition={{
          duration: 0.6,
          delay: 0.1 * t,
        }}
        whileHover={{
          y: -5,
        }}
        onHoverStart={() => r(!0)}
        onHoverEnd={() => r(!1)}
        className="group relative bg-black/40 backdrop-blur-md border-2 rounded-xl p-5 md:p-8 transition-all duration-500 cursor-pointer overflow-hidden"
        style={{
          borderColor: n ? ACCENT_LIGHT : "rgba(255,255,255,0.2)",
        }}
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background: `linear-gradient(180deg, ${ACCENT}, ${ACCENT_LIGHT})`,
          }}
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: !0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1 * t + 0.3,
          }}
        />
        <AnimatePresence>
          {n && (
            <motion.div
              className="absolute inset-0 opacity-20 blur-2xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${ACCENT_LIGHT}, transparent 70%)`,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.2,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <div className="relative flex flex-col sm:flex-row items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <motion.div
              className="w-12 h-12 rounded-lg backdrop-blur-sm flex items-center justify-center border-2 transition-all duration-300"
              style={{
                backgroundColor: n ? `${ACCENT}30` : "rgba(255,255,255,0.1)",
                borderColor: n ? ACCENT_LIGHT : "rgba(255,255,255,0.2)",
              }}
            >
              <CalendarIcon
                className="w-6 h-6 transition-colors duration-300"
                strokeWidth={1.5}
                style={{
                  color: n ? ACCENT_LIGHT : "rgba(255,255,255,0.8)",
                }}
              />
            </motion.div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300"
                style={{
                  color: n ? ACCENT_LIGHT : "rgba(255,255,255,0.6)",
                  borderColor: n ? ACCENT_LIGHT : "rgba(255,255,255,0.2)",
                  backgroundColor: n ? `${ACCENT}20` : "rgba(255,255,255,0.05)",
                }}
              >
                {e.category}
              </span>
              <span className="flex items-center gap-1 text-white/60 text-xs font-semibold whitespace-nowrap">
                <ClockIcon className="w-3 h-3" />
                {e.date}
              </span>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
              {e.title}
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              {e.excerpt}
            </p>
            <div
              className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300"
              style={{
                color: n ? ACCENT_LIGHT : "white",
              }}
            >
              <span>Read More</span>
              <ChevronRightIcon
                className="w-4 h-4 transition-transform duration-300"
                style={{
                  transform: n ? "translateX(4px)" : "translateX(0)",
                }}
              />
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

export function Newsletter() {
  const [e, t] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      company: "",
      phone: "",
      city: "",
      state: "",
    }),
    [n, r] = React.useState("idle"),
    [i, a] = React.useState(""),
    s = React.useRef(null),
    { scrollYProgress: o } = useScroll({
      target: s,
      offset: ["start start", "end start"],
    }),
    l = useTransform(o, [0, 0.4], [1, 0]),
    c = useTransform(o, [0, 0.4], [0, -80]),
    u = (n) => {
      (t({
        ...e,
        [n.target.name]: n.target.value,
      }),
        a(""));
    };
  return (
    <main
      ref={s}
      className="relative min-h-screen w-full overflow-x-hidden bg-black"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="fixed inset-0 z-0 bg-cover bg-no-repeat bg-[54%_center] md:bg-center"
        style={{
          backgroundImage: "url(/assets/images/Newsletter.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}15 0%, ${ACCENT_LIGHT}10 100%)`,
            mixBlendMode: "multiply",
          }}
        />
      </div>
      <motion.section
        style={{
          opacity: l,
          y: c,
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 md:py-32"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] font-black uppercase tracking-tighter text-center mt-24 md:mt-40 mb-4"
          style={{
            background: `linear-gradient(135deg, white 0%, ${ACCENT_LIGHT} 50%, white 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.8))",
          }}
        >
          CHASING
          <br className="md:hidden" />
          {" EXCELLENCE"}
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto px-4"
        >
          <h2 className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-relaxed mb-2 drop-shadow-lg">
            WINNING Strategies, insights, and inspiration from Tony Thompson.
          </h2>
          <p
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em]"
            style={{
              color: ACCENT_LIGHT,
            }}
          >
            Delivered Weekly
          </p>
        </motion.div>
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
            delay: 0.8,
          }}
          className="w-full max-w-4xl mb-16 md:mb-24"
        >
          <AnimatePresence mode="wait">
            {"success" !== n ? (
              <motion.form
                onSubmit={async (n) => {
                  if (
                    (n.preventDefault(),
                    e.firstName.trim() && e.lastName.trim() && e.email.trim())
                  ) {
                    r("loading");
                    try {
                      (await fetch(
                        "https://script.google.com/macros/s/AKfycby8XptgBAHSaAuz0k-mVFIeZK0gGH4ZnUN-fymJaKpMNzqU_aopShiLAqpXF8Vw_B3uiQ/exec",
                        {
                          method: "POST",
                          mode: "no-cors",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            firstName: e.firstName,
                            lastName: e.lastName,
                            email: e.email,
                            jobTitle: e.jobTitle,
                            company: e.company,
                            phone: e.phone,
                            city: e.city,
                            state: e.state,
                          }),
                        },
                      ),
                        r("success"),
                        t({
                          firstName: "",
                          lastName: "",
                          email: "",
                          jobTitle: "",
                          company: "",
                          phone: "",
                          city: "",
                          state: "",
                        }));
                    } catch (i) {
                      (console.error(i),
                        a("Connection error. Please check your network."),
                        r("idle"));
                    }
                  } else a("Please complete all required fields");
                }}
                initial={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="relative bg-black/50 backdrop-blur-2xl rounded-2xl p-6 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.6)] border-2"
                style={{
                  borderColor: `${ACCENT}40`,
                }}
                key={"form"}
              >
                <div
                  className="absolute top-0 left-0 w-20 h-20 rounded-tl-2xl opacity-30 blur-2xl"
                  style={{
                    background: ACCENT_LIGHT,
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-br-2xl opacity-30 blur-2xl"
                  style={{
                    background: ACCENT,
                  }}
                />
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
                  <ArticleModal
                    label="First Name"
                    name="firstName"
                    value={e.firstName}
                    onChange={u}
                    placeholder="Jane"
                  />
                  <ArticleModal
                    label="Last Name"
                    name="lastName"
                    value={e.lastName}
                    onChange={u}
                    placeholder="Doe"
                  />
                  <ArticleModal
                    label="Email Address"
                    name="email"
                    type="email"
                    value={e.email}
                    onChange={u}
                    placeholder="jane@company.com"
                  />
                  <ArticleModal
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={e.phone}
                    onChange={u}
                    placeholder="+1 (555) 000-0000"
                  />
                  <ArticleModal
                    label="Job Title"
                    name="jobTitle"
                    value={e.jobTitle}
                    onChange={u}
                    placeholder="Director of Sales"
                  />
                  <ArticleModal
                    label="Company"
                    name="company"
                    value={e.company}
                    onChange={u}
                    placeholder="Acme Corp"
                  />
                  <ArticleModal
                    label="City"
                    name="city"
                    value={e.city}
                    onChange={u}
                    placeholder="New York"
                  />
                  <ArticleModal
                    label="State / Region"
                    name="state"
                    value={e.state}
                    onChange={u}
                    placeholder="NY"
                  />
                  <div className="md:col-span-2 space-y-6 mt-2">
                    {i && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="text-white bg-red-500/30 border-2 border-red-400/50 rounded-lg p-4 text-sm font-semibold text-center backdrop-blur-sm"
                      >
                        {"⚠ "}
                        {i}
                      </motion.div>
                    )}
                    <motion.button
                      type="submit"
                      disabled={"loading" === n}
                      whileHover={{
                        scale: 1.02,
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="relative w-full group overflow-hidden rounded-xl"
                    >
                      <div
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_LIGHT})`,
                          opacity: 1,
                        }}
                      />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="relative py-4 md:py-5 px-4 md:px-8 font-black uppercase text-xs md:text-sm tracking-[0.25em] text-white border-2 border-white/20 rounded-xl">
                        <div className="flex items-center justify-center gap-3">
                          <span className="whitespace-nowrap">
                            {"loading" === n
                              ? "Subscribing..."
                              : "Subscribe Now"}
                          </span>
                          <motion.div
                            animate={{
                              x: "loading" === n ? [0, 5, 0] : 0,
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: "loading" === n ? 1 / 0 : 0,
                            }}
                          >
                            <ArrowRightIcon
                              className="w-5 h-5"
                              strokeWidth={3}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.button>
                    <p className="text-white/50 text-xs text-center leading-relaxed tracking-wide">
                      Unsubscribe anytime. No spam.
                    </p>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative bg-black/50 backdrop-blur-2xl rounded-2xl p-8 md:p-14 text-center border-2"
                style={{
                  borderColor: ACCENT_LIGHT,
                }}
                key={"success"}
              >
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.1,
                  }}
                >
                  <CircleCheckIcon
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8"
                    strokeWidth={1.5}
                    style={{
                      color: ACCENT_LIGHT,
                    }}
                  />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-5 uppercase tracking-tight">
                  You're In
                </h2>
                <p className="text-white/80 text-base md:text-xl mb-8 md:mb-10">
                  Check your inbox for confirmation.
                </p>
                <button
                  onClick={() => r("idle")}
                  className="text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
                  style={{
                    color: ACCENT_LIGHT,
                  }}
                >
                  Subscribe Another →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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
            duration: 1,
            delay: 1.2,
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white/70 text-xs uppercase tracking-[0.25em] font-bold w-full px-4"
        >
          <div className="text-center group">
            <div
              className="text-3xl font-black mb-2 transition-colors duration-300"
              style={{
                color: "white",
                textShadow: `0 2px 10px rgba(0,0,0,0.5), 0 0 20px ${ACCENT}40`,
              }}
            >
              10K+
            </div>
            <div className="group-hover:text-purple-300 transition-colors">
              Subscribers
            </div>
          </div>
          <div
            className="h-px w-20 md:w-px md:h-10"
            style={{
              backgroundColor: `${ACCENT}60`,
            }}
          />
          <div className="text-center group">
            <div
              className="text-3xl font-black mb-2 transition-colors duration-300"
              style={{
                color: "white",
                textShadow: `0 2px 10px rgba(0,0,0,0.5), 0 0 20px ${ACCENT}40`,
              }}
            >
              Weekly
            </div>
            <div className="group-hover:text-purple-300 transition-colors">
              Delivery
            </div>
          </div>
          <div
            className="h-px w-20 md:w-px md:h-10"
            style={{
              backgroundColor: `${ACCENT}60`,
            }}
          />
          <div className="text-center group">
            <div
              className="text-3xl font-black mb-2 transition-colors duration-300"
              style={{
                color: "white",
                textShadow: `0 2px 10px rgba(0,0,0,0.5), 0 0 20px ${ACCENT}40`,
              }}
            >
              100%
            </div>
            <div className="group-hover:text-purple-300 transition-colors">
              Value
            </div>
          </div>
        </motion.div>
      </motion.section>
      <section className="relative z-10 px-4 md:px-6 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: !0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-12 md:mb-20"
          >
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6"
              style={{
                background: `linear-gradient(135deg, white 0%, ${ACCENT_LIGHT} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.8))",
              }}
            >
              Recent Insights
            </h2>
            <p className="text-white/80 text-base md:text-xl font-medium px-4">
              The latest perspectives on strategy, leadership, and excellence.
            </p>
          </motion.div>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                category: "Strategy",
                date: "Dec 10, 2024",
                title: "The Missing Piece in Your Sales Framework",
                excerpt:
                  "Discover the overlooked component that separates top performers from average achievers in high-stakes environments.",
              },
              {
                category: "Leadership",
                date: "Dec 5, 2024",
                title: "Building Teams That Execute Under Pressure",
                excerpt:
                  "The psychology and systems behind creating resilient, high-performance teams that thrive in challenging conditions.",
              },
              {
                category: "Mindset",
                date: "Nov 28, 2024",
                title: "The Excellence Equation: Consistency Over Intensity",
                excerpt:
                  "Why sustainable success comes from daily discipline, not sporadic bursts of motivation.",
              },
            ].map((e, t) => (
              <ArticleCard article={e} index={t} key={t} />
            ))}
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: !0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="text-center mt-12 md:mt-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 backdrop-blur-md rounded-xl text-white font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border-2"
              style={{
                backgroundColor: `${ACCENT}30`,
                borderColor: ACCENT_LIGHT,
              }}
            >
              <span>View Archive</span>
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Newsletter;
