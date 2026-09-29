import { gsap } from "gsap";
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGO_TT } from "../../constants/assets";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export function Navbar({ menuOpen: e, setMenuOpen: t }) {
  const n = useNavigate(),
    r = useLocation(),
    i = React.useRef(null),
    a = React.useRef(null),
    s = React.useRef(null),
    o = React.useRef(null),
    [l, c] = React.useState(!1),
    [u, d] = React.useState("home"),
    [h, f] = React.useState(null),
    [p, m] = React.useState(!0),
    [g, x] = React.useState(!1),
    b = React.useRef(null);
  var v;
  ((v = i),
    React.useEffect(() => {
      if (!v.current) return;
      const e = v.current,
        t = (t) => {
          const n = e.getBoundingClientRect(),
            r = t.clientX - n.left,
            i = t.clientY - n.top;
          (e.style.setProperty("--mouse-x", `${r}px`),
            e.style.setProperty("--mouse-y", `${i}px`));
        };
      return (
        e.addEventListener("mousemove", t),
        () => e.removeEventListener("mousemove", t)
      );
    }, []));
  const y = [
      {
        label: "HOME",
        key: "home",
        variant: "anchor",
      },
      {
        label: "MEET TONY",
        key: "meet-tony",
        variant: "identity",
      },
      {
        label: "MISSING PIECE",
        key: "about",
        variant: "hook",
      },
      {
        label: "TESTIMONIALS",
        key: "testimonials",
        variant: "logic",
      },
      {
        label: "COURSES",
        key: "/courses",
        variant: "logic",
      },
      {
        label: "BOOK TONY",
        key: "/book-tony",
        variant: "cta",
      },
      {
        label: "PROGRAMS",
        key: "programs",
        variant: "logic",
      },
      {
        label: "SHOP",
        key: "/shop",
        variant: "secondary",
      },
      {
        label: "PODCASTS",
        key: "/podcasts",
        variant: "secondary",
      },
      {
        label: "NEWSLETTER",
        key: "/newsletter",
        variant: "secondary",
      },
      {
        label: "CONTACT",
        key: "contact",
        variant: "secondary",
      },
    ],
    { active: w, lock: N } = useScrollSpy(
      [
        "#home",
        "#meet-tony",
        "#about",
        "#testimonials",
        "#trust",
        "#programs",
        "#contact",
      ],
      {
        sample: 0.45,
        lockMs: 1e3,
      },
    );
  (React.useEffect(() => {
    const e = () => {
      const e = 0.8 * window.innerHeight;
      if ((m(window.scrollY < e), "/" === r.pathname)) {
        const e = document.getElementById("contact");
        if (e) {
          const t = e.getBoundingClientRect().top < window.innerHeight - 50;
          x(t);
        } else x(!1);
      }
    };
    return (
      e(),
      window.addEventListener("scroll", e, {
        passive: !0,
      }),
      () => window.removeEventListener("scroll", e)
    );
  }, [r.pathname]),
    React.useEffect(() => {
      if ("/" === r.pathname) {
        const e = new URLSearchParams(r.search).get("target");
        e &&
          setTimeout(() => {
            const t = document.getElementById(e);
            t &&
              (window.lenis
                ? window.lenis.scrollTo(t, {
                    duration: 1.4,
                  })
                : t.scrollIntoView({
                    behavior: "smooth",
                  }));
          }, 100);
      }
    }, [r.pathname, r.search]),
    React.useEffect(() => {
      const e = r.pathname;
      if ("/shop" !== e) {
        if ("/courses" !== e) {
          if ("/podcasts" !== e) {
            if ("/newsletter" !== e) {
              if ("/book-tony" !== e) {
                if (!e.startsWith("/lets-win") && !e.startsWith("/quiz-intro"))
                  return "/" === e
                    ? (b.current && b.current.startsWith("/"),
                      void d(g ? "contact" : w ? w.replace("#", "") : "home"))
                    : void d("home");
                d("about");
              } else d("/book-tony");
            } else d("/newsletter");
          } else d("/podcasts");
        } else d("/courses");
      } else d("/shop");
    }, [w, g, r.pathname]),
    React.useLayoutEffect(() => {
      const t = gsap.context(() => {
        const t = gsap.utils.toArray(".menu-item-container"),
          n = gsap.utils.toArray(".social-icon-btn"),
          r = "#nav-divider",
          i = "#nav-copyright";
        if (e) {
          (gsap.set(t, {
            x: 60,
            opacity: 0,
            filter: "blur(12px)",
          }),
            gsap.set(n, {
              scale: 0.5,
              opacity: 0,
              x: -10,
            }),
            gsap.set(r, {
              scaleX: 0,
              opacity: 0,
            }),
            gsap.set(i, {
              opacity: 0,
              y: 10,
            }));
          const e = gsap.timeline();
          (e.to(
            t,
            {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.8,
              stagger: 0.05,
              ease: "power4.out",
              onComplete: () => c(!0),
            },
            "+=0.3",
          ),
            e.to(
              r,
              {
                scaleX: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power3.inOut",
              },
              "-=1.5",
            ),
            e.to(
              n,
              {
                scale: 1,
                opacity: 1,
                x: 0,
                duration: 1.2,
                stagger: 0.06,
                ease: "back.out(1.2)",
              },
              "-=1.2",
            ),
            e.to(
              i,
              {
                opacity: 1,
                y: 0,
                duration: 1,
              },
              "-=1.0",
            ));
        } else {
          (c(!1), f(null));
          const e = gsap.timeline();
          (e.to(t, {
            opacity: 0,
            x: 20,
            filter: "blur(5px)",
            duration: 0.5,
            stagger: 0.02,
            ease: "power2.in",
          }),
            e.to(
              [n, r, i],
              {
                opacity: 0,
                duration: 0.3,
              },
              "<",
            ));
        }
      }, s);
      return () => t.revert();
    }, [e]),
    React.useEffect(() => {
      const e = o.current;
      e &&
        (window.triggerGlobalFog = (t) => {
          ((e.style.transition = "opacity 0.6s ease-out"),
            (e.style.opacity = 1),
            (e.style.pointerEvents = "auto"),
            setTimeout(() => {
              t && t();
            }, 150),
            setTimeout(() => {
              ((e.style.opacity = 0),
                setTimeout(() => (e.style.pointerEvents = "none"), 400));
            }, 2200));
        });
    }, []));
  const k = (e) => {
    (N && N(),
      (b.current = e),
      f(e),
      window.triggerGlobalFog(() => {
        if ((t(!1), e.startsWith("/"))) return void n(e);
        if ("/" === r.pathname) {
          if ("home" === e)
            window.lenis
              ? window.lenis.scrollTo(0, {
                  duration: 1.4,
                })
              : window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
          else {
            const t = document.getElementById(e);
            window.lenis && t
              ? window.lenis.scrollTo(t, {
                  duration: 1.4,
                })
              : t?.scrollIntoView({
                  behavior: "smooth",
                });
          }
          window.history.pushState(null, "", `/?target=${e}`);
        } else n(`/?target=${e}`);
      }));
  };
  React.useEffect(() => {
    a.current &&
      (e
        ? a.current.classList.add("active")
        : a.current.classList.remove("active"));
  }, [e]);
  const _ = (
    <button
      ref={a}
      onClick={() => t(!e)}
      id="hamburger"
      aria-label="Toggle navigation menu"
      className="pointer-events-auto fixed top-[21px] right-[21px] md:top-[25px] md:right-[25px] flex flex-col justify-between w-[44px] h-[29px] md:w-[52px] md:h-[34px] transition-transform duration-300 z-[2147483648] group"
    >
      <span className="bar top" />
      <span className="bar middle" />
      <span className="bar bottom" />
      <style>
        {
          "\n                #hamburger .bar {\n                    display: block;\n                    width: 52px;\n                    background-color: rgba(255,255,255,0.95);\n                    border-radius: 2.5px;\n                    margin: 5px 0;\n                    box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.6);\n                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),\n                                opacity 0.4s ease,\n                                background-color 0.3s ease;\n                    transform-origin: center;\n                }\n                #hamburger .bar.top,\n                #hamburger .bar.bottom { height: 5.5px; }\n                #hamburger .bar.middle { height: 2px; opacity: 0.95; }\n                #hamburger.active .bar.top { transform: rotate(45deg) translate(9px, 9px); }\n                #hamburger.active .bar.middle { opacity: 0; transform: translateX(-20px); transition: opacity 0.2s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }\n                #hamburger.active .bar.bottom { transform: rotate(-45deg) translate(9px, -9px); }\n                #hamburger:not(.active):hover .bar.top { transform: translateY(-2px); }\n                #hamburger:not(.active):hover .bar.bottom { transform: translateY(2px); }\n                #hamburger.active:hover { transform: scale(1.05); }\n                @media (max-width: 768px) {\n                    #hamburger .bar { width: 44px; margin: 4px 0; border-radius: 2px; }\n                    #hamburger .bar.top, #hamburger .bar.bottom { height: 4.6px; }\n                    #hamburger .bar.middle { height: 1.7px; }\n                    #hamburger.active .bar.top { transform: rotate(45deg) translate(7.6px, 7.6px); }\n                    #hamburger.active .bar.bottom { transform: rotate(-45deg) translate(7.6px, -7.6px); }\n                    #hamburger.active .bar.middle { transform: translateX(-17px); }\n                }\n            "
        }
      </style>
    </button>
  );
  React.useEffect(() => {
    const n = (n) => {
      if (!e) return;
      if (!i.current || !a.current) return;
      const r = i.current.contains(n.target),
        s = a.current.contains(n.target);
      r || s || t(!1);
    };
    return (
      document.addEventListener("mousedown", n, !0),
      () => document.removeEventListener("mousedown", n, !0)
    );
  }, [e]);
  const Cj_ = ({
      item: e,
      onClick: t,
      isActive: n,
      showStrike: r,
      hoveredLink: i,
      setHoveredLink: a,
    }) => {
      const { label: s, variant: o, key: l } = e,
        c = React.useRef(null);
      ((e, t) => {
        React.useEffect(() => {
          if (!e.current) return;
          const t = e.current,
            n = (e) => {
              const n = t.getBoundingClientRect(),
                r = e.clientX - (n.left + n.width / 2),
                i = e.clientY - (n.top + n.height / 2);
              (gsap.to(t, {
                x: 0.08 * r,
                y: 0.08 * i,
                duration: 2,
                ease: "power2.out",
              }),
                gsap.to(t.querySelector(".text-content"), {
                  x: 0.04 * r,
                  y: 0.04 * i,
                  duration: 2,
                  ease: "power2.out",
                }));
            },
            r = () => {
              (gsap.to(t, {
                x: 0,
                y: 0,
                duration: 2,
                ease: "power2.out",
              }),
                gsap.to(t.querySelector(".text-content"), {
                  x: 0,
                  y: 0,
                  duration: 2,
                  ease: "power2.out",
                }));
            };
          return (
            t.addEventListener("mousemove", n),
            t.addEventListener("mouseleave", r),
            () => {
              (t.removeEventListener("mousemove", n),
                t.removeEventListener("mouseleave", r));
            }
          );
        }, [t]);
      })(c, !0);
      const u = i === l,
        d = i && !u,
        h = "logic" === o,
        f = "cta" === o,
        p = "secondary" === o;
      let m = p
          ? "text-[clamp(1.1rem,1.6vw,1.3rem)] font-[600]"
          : h
            ? "text-[clamp(2.6rem,4.2vw,3.1rem)]"
            : "text-[clamp(2.97rem,4.6vw,3.47rem)]",
        g = "hook" === o ? "font-[900]" : h ? "font-[700]" : "font-[830]",
        x = "identity" === o ? "tracking-[0.035em]" : "tracking-[0.019em]",
        b = p ? "my-[2px]" : "my-[4px]",
        v = d ? "opacity-85" : "opacity-100",
        y = d ? "text-white/90" : "text-white";
      return (
        u &&
          (v +=
            " translate-x-[6px] drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"),
        p && (y = "text-white/60 hover:text-white"),
        (
          <div
            ref={c}
            className={`menu-item-container relative ${b} perspective-[1000px] will-change-transform`}
          >
            <button
              onClick={t}
              onMouseEnter={() => a(l)}
              onMouseLeave={() => a(null)}
              className={`text-content relative text-left uppercase ${m} ${g} ${x} ${y} ${v}\n                                transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]\n                                leading-[0.95] subpixel-antialiased font-['Bebas_Neue'] group\n                                pointer-events-auto cursor-pointer`}
            >
              <span className="relative z-10 inline-block pointer-events-none">
                {s}
                <span
                  className={
                    "absolute left-0 top-1/2 -translate-y-1/2 h-[3px] rounded-sm origin-left bg-gradient-to-r from-white via-[#9B26B6] to-transparent transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]\n                            " +
                    (r ? "scale-x-105 opacity-100" : "scale-x-0 opacity-0")
                  }
                  style={{
                    width: "115%",
                    boxShadow: "0 0 12px rgba(155,38,182,0.5)",
                  }}
                />
              </span>
              {f && (
                <ArrowRightIcon
                  className={
                    "inline-block ml-4 text-white w-[clamp(1.8rem,2.8vw,2.3rem)] h-[clamp(1.8rem,2.8vw,2.3rem)]\n                                transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]\n                                " +
                    (u ? "translate-x-3" : "")
                  }
                  strokeWidth={3}
                />
              )}
            </button>
          </div>
        )
      );
    },
    S = p && "/" === r.pathname;
  return (
    <>
      <div
        className="fixed flex items-center pointer-events-auto cursor-pointer top-[22px] left-[24px] md:top-[26px] md:left-[28px]"
        style={{
          zIndex: 2147483647,
        }}
        onClick={() =>
          (function (e) {
            const t = "/" === window.location.pathname,
              n = document.querySelector(
                "#global-fog, [data-global-fog], .global-fog",
              );
            (n && ((n.style.pointerEvents = "none"), (n.style.opacity = 0)),
              t
                ? window.lenis
                  ? window.lenis.scrollTo(0, {
                      duration: 1.2,
                    })
                  : window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                : (e("/"),
                  setTimeout(() => {
                    window.lenis
                      ? window.lenis.scrollTo(0, {
                          duration: 1.1,
                        })
                      : window.scrollTo({
                          top: 0,
                        });
                  }, 250)));
          })(n)
        }
      >
        <div className="relative flex items-start">
          <img
            id="tt-mini-logo"
            src={LOGO_TT}
            alt="Tony Thompson TT logo"
            className="w-[39px] md:w-[46px]"
            style={{
              filter:
                "brightness(0) invert(1) drop-shadow(0 1px 4px rgba(0,0,0,0.5)) drop-shadow(0 0 8px rgba(255,255,255,0.8)) !important",
            }}
          />
        </div>
        <div
          className="h-[22px] md:h-[26.2px]"
          style={{
            marginLeft: "0.3cm",
            width: "1px",
            backgroundColor: "#fff",
            borderRadius: "1px",
            opacity: S ? 1 : 0,
            visibility: S ? "visible" : "hidden",
            transform: S ? "translateY(0)" : "translateY(-12px)",
            transition:
              "opacity 0.9s ease-in-out 0.15s, transform 0.9s ease-in-out 0.15s",
          }}
        />
        <img
          src="/assets/logoFull-FPZ5uA2o.png"
          alt="Tony Thompson full logo"
          className="w-[58px] md:w-[68px]"
          style={{
            marginLeft: "0.1cm",
            opacity: S ? 1 : 0,
            transform: S ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.9s ease-in-out, transform 0.9s ease-in-out",
          }}
        />
      </div>
      <div
        ref={s}
        id="global-overlay"
        role="navigation"
        className="fixed inset-0 z-[2147483650] pointer-events-none"
        style={{
          opacity: e ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div
          ref={i}
          className={`menu-overlay fixed top-0 right-0 h-screen w-[90%] md:w-[48%] lg:w-[42%] xl:w-[38%]\n                                flex flex-col justify-start items-start pt-[4.5rem] md:pt-[1cm] pl-[1.65cm] md:pl-[4.8cm] pr-[1cm]\n                                transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]\n                                ${e ? "translate-x-0" : "translate-x-full"}\n                                pointer-events-auto border-l border-white/10 shadow-[-100px_0_150px_rgba(0,0,0,0.8)]\n                                overflow-y-auto overflow-x-hidden`}
          style={{
            background:
              "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(155, 38, 182, 0.15), transparent 40%),\n                            linear-gradient(145deg, rgba(155,38,182,0.98) 0%, rgba(70,10,85,0.99) 50%, rgba(45,5,60,1) 100%)",
            backdropFilter: "blur(60px)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="flex flex-col w-full mt-[0.5cm] relative z-10 translate-x-[0.5cm]">
            <div className="flex flex-col">
              {y.slice(0, 7).map((e) => (
                <Cj_
                  item={e}
                  onClick={() => k(e.key)}
                  isActive={u === e.key}
                  showStrike={l && u === e.key}
                  hoveredLink={h}
                  setHoveredLink={f}
                  key={e.key}
                />
              ))}
            </div>
            <div
              id="nav-divider"
              className="w-[70%] h-[1px] bg-gradient-to-r from-white/10 via-white/40 to-transparent mt-10 mb-6 ml-1 relative origin-left"
            />
            <div className="flex flex-col gap-0 opacity-90">
              {y.slice(7).map((e) => (
                <Cj_
                  item={e}
                  onClick={() => k(e.key)}
                  isActive={u === e.key}
                  showStrike={l && u === e.key}
                  hoveredLink={h}
                  setHoveredLink={f}
                  key={e.key}
                />
              ))}
            </div>
          </div>
          <div
            id="nav-footer"
            className="relative mt-auto mb-[78px] md:mb-10 pt-10 z-20 flex flex-col items-start translate-x-[0.5cm]"
          >
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/tt5481562/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/5 hover:bg-white border border-white/20 hover:border-transparent transition-all duration-300 backdrop-blur-md group shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(155,38,182,0.8)]"
              >
                <InstagramIcon
                  size={14}
                  strokeWidth={1.5}
                  className="text-white group-hover:text-[#9B26B6] transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.tiktok.com/@tonythompson08?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/5 hover:bg-white border border-white/20 hover:border-transparent transition-all duration-300 backdrop-blur-md group shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(155,38,182,0.8)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-[14px] h-[14px] fill-white group-hover:fill-[#9B26B6] transition-all duration-300"
                >
                  <path d="M161.06 0h-34.1v166.63a30.75 30.75 0 1 1-30.75-30.75 31.2 31.2 0 0 1 6.89.75V99.1a64.74 64.74 0 1 0 57.6 64.64V79.06a79.47 79.47 0 0 0 49.77 17.07V61.46a49.63 49.63 0 0 1-49.4-49.4V0Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@meettonythompson"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/5 hover:bg-white border border-white/20 hover:border-transparent transition-all duration-300 backdrop-blur-md group shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(155,38,182,0.8)]"
              >
                <YoutubeIcon
                  size={14}
                  strokeWidth={1.5}
                  className="text-white group-hover:text-[#9B26B6] transition-colors duration-300"
                />
              </a>
              <a
                href="https://x.com/TonyThomps7989"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/5 hover:bg-white border border-white/20 hover:border-transparent transition-all duration-300 backdrop-blur-md group shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(155,38,182,0.8)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[14px] h-[14px] fill-white group-hover:fill-[#9B26B6] transition-all duration-300"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/meettonythompson/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/5 hover:bg-white border border-white/20 hover:border-transparent transition-all duration-300 backdrop-blur-md group shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(155,38,182,0.8)]"
              >
                <LinkedinIcon
                  size={14}
                  strokeWidth={1.5}
                  className="text-white group-hover:text-[#9B26B6] transition-colors duration-300"
                />
              </a>
            </div>
            <div
              id="nav-copyright"
              className="text-[0.65rem] tracking-[0.25em] text-white/40 font-bold uppercase select-none"
            >
              © 2025 Tony Thompson
            </div>
          </div>
        </div>
      </div>
      <div
        ref={o}
        className="fixed inset-0 z-[2147483645] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(155,38,182,0.2) 0%, rgba(20,5,30,0.9) 60%, rgba(0,0,0,1) 100%)",
          opacity: 0,
          transition: "opacity 1s ease-out",
        }}
      />
      {ReactDOM.createPortal(_, document.body)}
      <NavbarThemeWatcher />
    </>
  );
}

function NavbarThemeWatcher() {
  return (
    React.useEffect(() => {
      const e = document.querySelectorAll("#hamburger .bar"),
        t = document.querySelector("#tt-mini-logo");
      if (!e.length || !t) return;
      const n = document.querySelectorAll(".white-section");
      if (!n.length) return;
      let r = !1;
      const i = new IntersectionObserver(
        (n) => {
          let i = !1;
          (n.forEach((e) => {
            e.isIntersecting && e.intersectionRatio > 0.05 && (i = !0);
          }),
            i !== r &&
              ((r = i),
              i
                ? (e.forEach((e) => {
                    ((e.style.backgroundColor = "#9B26B6"),
                      (e.style.boxShadow = "0 0 12px #9B26B6"));
                  }),
                  (t.style.filter = "none"),
                  (t.style.opacity = "1"),
                  (t.style.transition = "filter 0.3s ease, opacity 0.3s ease"),
                  (t.style.filter = "drop-shadow(0 0 12px #9B26B6)"))
                : (e.forEach((e) => {
                    ((e.style.backgroundColor = "rgba(255,255,255,0.95)"),
                      (e.style.boxShadow =
                        "0 1px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.6)"));
                  }),
                  (t.style.filter =
                    "brightness(0) invert(1) drop-shadow(0 1px 4px rgba(0,0,0,0.5)) drop-shadow(0 0 8px rgba(255,255,255,0.8))"))));
        },
        {
          threshold: [0, 0.05, 0.1],
          rootMargin: "0px 0px -20% 0px",
        },
      );
      return (n.forEach((e) => i.observe(e)), () => i.disconnect());
    }, []),
    (
      <>
        <style>
          {
            "\n                #nav-footer .social-icon-btn, #nav-copyright { pointer-events: auto; z-index: 3 !important; }\n                .menu-overlay::-webkit-scrollbar { width: 6px; }\n                .menu-overlay::-webkit-scrollbar-track { background: transparent; }\n                .menu-overlay::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }\n                .menu-overlay::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.3); }\n            "
          }
        </style>
      </>
    )
  );
}

export default Navbar;
