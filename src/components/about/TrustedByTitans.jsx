import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React from "react";

export const PublicationLink = ({ href: e, children: t }) => (
    <a
      href={e}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block group cursor-pointer text-white font-semibold"
    >
      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-[#7d1f97] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      <span className="relative group-hover:text-[#d8b6e2] transition-colors duration-300">
        {t}
      </span>
    </a>
  ),
  BASE = "/",
  PUBLICATIONS = [
    {
      name: "Mortgage Bankers Association (MBA)",
      logo: `${BASE}assets/partners/mba.png`,
      link: "https://www.mba.org/",
    },
    {
      name: "National Association of REALTORS®",
      logo: `${BASE}assets/partners/Real.jpg`,
      link: "https://www.nar.realtor/",
    },
    {
      name: "Scotsman Guide",
      logo: `${BASE}assets/partners/scotsman.png`,
      link: "https://www.scotsmanguide.com/",
    },
    {
      name: "National Mortgage News",
      logo: `${BASE}assets/partners/nmn.png`,
      link: "https://www.nationalmortgagenews.com/",
    },
    {
      name: "Mortgage Professional America (MPA)",
      logo: `${BASE}assets/partners/mpa.jpg`,
      link: "https://www.mpamag.com/",
    },
    {
      name: "National Association of Mortgage Brokers (NAMB)",
      logo: `${BASE}assets/partners/namb_logo.png`,
      link: "https://namb.org/",
    },
    {
      name: "Inman",
      logo: `${BASE}assets/partners/inman.png`,
      link: "https://www.inman.com/",
    },
    {
      name: "HousingWire",
      logo: `${BASE}assets/partners/House.png`,
      link: "https://www.housingwire.com/",
    },
  ];

export function TrustedByTitans() {
  const e = React.useRef(null),
    t = useInView(e, {
      once: !0,
      margin: "-100px",
    }),
    n = useMotionValue(0),
    r = useMotionValue(0);
  return (
    <section
      id="partners"
      ref={e}
      onMouseMove={({ currentTarget: e, clientX: t, clientY: i }) => {
        const { left: a, top: s } = e.getBoundingClientRect();
        (n.set(t - a), r.set(i - s));
      }}
      className="partners-section relative"
    >
      <style>
        {
          "\n                :root { --np: #9b26b6; }\n\n                .partners-section {\n                    background: white;\n                    transition: background-color 0.5s ease, filter 0.5s ease;\n                    margin-top: -135px;\n                    padding: 4rem 2rem 8rem 2rem;\n                    text-align: center;\n                    position: relative;\n                    z-index: 40;\n                    \n                    width: 100vw;\n                    margin-left: calc(50% - 50vw);\n                }\n\n                @media (max-width: 768px) {\n                    .partners-section {\n                        margin-top: -85px; \n                        padding: 3rem 1.5rem 6rem 1.5rem;\n                        \n                        width: 100vw;\n                        margin-left: calc(50% - 50vw);\n                    }\n                }\n\n                .partners-section.hover-white {\n                    background: #ffffff !important;\n                    filter: brightness(1.08); \n                }\n\n                .logo-cell {\n                    background: transparent !important;\n                    border: none !important;\n                    box-shadow: none !important;\n                    outline: none !important;\n                    padding: 0 !important;\n                }\n\n                /* Heading Lift */\n                .heading-lift { margin-top: -30px; }\n                @media (min-width: 768px) { .heading-lift { margin-top: -50px; } }\n\n                .spotlight-overlay {\n                    position: absolute;\n                    inset: 0;\n                    pointer-events: none;\n                    background: radial-gradient(\n                        550px circle at var(--mouse-x) var(--mouse-y),\n                        rgba(155,38,182,0.06),\n                        transparent 65%\n                    );\n                    z-index: 2;\n                }\n\n                .grid-lines {\n                    position: absolute;\n                    inset: 0;\n                    background-image:\n                        linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),\n                        linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);\n                    background-size: 60px 60px;\n                    opacity: 0.15;\n                    pointer-events: none;\n                }\n\n                .status-indicator {\n                    display: inline-flex;\n                    align-items: center;\n                    gap: 8px;\n                    border: 1px solid rgba(155,38,182,0.3);\n                    padding: 4px 12px;\n                    background: rgba(155,38,182,0.06);\n                    color: var(--np);\n                    font-family: monospace;\n                    letter-spacing: 2px;\n                    font-size: 0.8rem;\n                }\n\n                .blink-dot {\n                    width: 6px;\n                    height: 6px;\n                    background: var(--np);\n                    border-radius: 50%;\n                    animation: blink 1s infinite;\n                }\n\n                @keyframes blink { 50% { opacity: 0; } }\n\n                .main-title {\n                    font-family: 'Arial Black', sans-serif;\n                    font-size: clamp(1.8rem, 5vw, 4rem);\n                    margin-top: 1.5rem;\n                    text-transform: uppercase;\n                    letter-spacing: -1px;\n                    line-height: 1.1;\n                }\n\n                .main-title span {\n                    color: transparent;\n                    -webkit-text-stroke: 1px rgba(0,0,0,0.8);\n                }\n            "
        }
      </style>
      <motion.div
        className="spotlight-overlay"
        style={{
          "--mouse-x": useMotionTemplate`${n}px`,
          "--mouse-y": useMotionTemplate`${r}px`,
        }}
      />
      <div className="grid-lines" />
      <div className="heading-lift relative z-10 text-center mb-14">
        <div className="status-indicator">
          <span className="blink-dot" />
          SYSTEM_TRUST_ESTABLISHED
        </div>
        <motion.h2
          className="main-title"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            t
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
        >
          Trusted by
          <br />
          <span>Industry Titans</span>
        </motion.h2>
      </div>
      <div
        onMouseEnter={() => e.current.classList.add("hover-white")}
        onMouseLeave={() => e.current.classList.remove("hover-white")}
        className={
          "\r\n                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4\r\n                    gap-6 md:gap-16 justify-items-center\r\n                    w-full max-w-7xl mx-auto relative z-10\r\n                "
        }
      >
        {PUBLICATIONS.map((e, t) => (
          <motion.a
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15 * t,
            }}
            viewport={{
              once: !0,
            }}
            className="group logo-cell flex items-center justify-center w-full max-w-[280px] h-[120px] md:h-[160px]"
            key={e.name}
          >
            <motion.img
              src={e.logo}
              alt={e.name}
              loading="lazy"
              whileHover={{
                scale: 1.06,
              }}
              className={
                "\r\n                                object-contain \r\n                                w-[70%] md:w-[80%] h-auto\r\n                                grayscale opacity-60\r\n                                group-hover:grayscale-0 group-hover:opacity-100\r\n                                transition-all duration-400 ease-out\r\n                            "
              }
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default TrustedByTitans;
