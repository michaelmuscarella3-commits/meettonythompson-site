import { motion } from "framer-motion";

const BASE = "/";

export function TrustedBy() {
  const e = [
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
    ],
    t = [...e, ...e];
  return (
    <section
      id="trust"
      className="relative flex flex-col items-center justify-center w-full bg-white text-[#111] py-20 md:py-[8rem] px-[5vw] overflow-hidden"
      style={{
        position: "relative",
        zIndex: 15,
        marginTop: "-64px",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#fff] via-[#fff]/95 to-[#fff]/90 pointer-events-none z-[0]" />
      <motion.h2
        className="text-[clamp(1.8rem,4vw,4rem)] font-extrabold tracking-tight text-center mb-6 uppercase relative z-[1]"
        style={{
          color: "#9b26b6",
        }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        viewport={{
          once: !0,
        }}
      >
        Trusted by Industry Leaders
      </motion.h2>
      <motion.p
        className="text-base md:text-xl text-[#444] text-center max-w-2xl mb-12 relative z-[1] px-4 md:px-0"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.1,
        }}
        viewport={{
          once: !0,
        }}
      >
        Featured and recognized by the nation’s most respected real estate and
        mortgage organizations.
      </motion.p>
      <div className="hidden md:grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16 place-items-center w-full max-w-7xl relative z-[1]">
        {e.map((e, t) => (
          <motion.a
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{
              scale: 0.95,
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1 * t,
              duration: 0.8,
            }}
            viewport={{
              once: !0,
            }}
            className="group flex items-center justify-center w-[320px] h-[170px]"
            key={e.name}
          >
            <motion.img
              src={e.logo}
              alt={e.name}
              loading="lazy"
              whileHover={{
                scale: 1.06,
              }}
              className="object-contain w-[80%] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
            />
          </motion.a>
        ))}
      </div>
      <div className="md:hidden w-full mt-10 overflow-hidden relative">
        <motion.div
          className="flex gap-12"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: 1 / 0,
            duration: 22,
            ease: "linear",
            willChange: "transform",
          }}
        >
          {t.map((e, t) => (
            <a
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[180px] h-[100px] flex-shrink-0 transform translate-z-0"
              key={`${e.name}-${t}`}
            >
              <img
                src={e.logo}
                alt={e.name}
                loading="lazy"
                className="w-full h-full object-contain grayscale opacity-80"
              />
            </a>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute top-0 left-0 w-[80px] h-full bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-[80px] h-full bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

export default TrustedBy;
