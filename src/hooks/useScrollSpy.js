import React from "react";

export function useScrollSpy(e = [], t = {}) {
  const {
      sample: n = 0.5,
      hysteresis: r = 12,
      throttleMs: i = 80,
      lockMs: a = 800,
    } = t,
    [s, o] = React.useState(null),
    l = React.useRef(0),
    c = React.useRef(0),
    u = React.useRef(null),
    d = React.useRef([]),
    h = React.useRef(-1);
  return (
    React.useEffect(() => {
      const t = () => e.map((e) => document.querySelector(e)).filter(Boolean);
      d.current = t();
      let a = null;
      const f = () => {
          const e = performance.now();
          if (e - c.current < i) return;
          if (e < l.current) return;
          const t = window.innerHeight * n;
          let a = null,
            u = 1 / 0;
          for (const n of d.current) {
            const e = n.getBoundingClientRect();
            if (e.top - r <= t && e.bottom + r >= t) {
              ((a = `#${n.id}`), (u = 0));
              break;
            }
            const i = t < e.top ? e.top - t : t > e.bottom ? t - e.bottom : 0;
            i < u && ((u = i), (a = `#${n.id}`));
          }
          a && a !== s && (o(a), (c.current = e));
        },
        p = () => {
          const e = window.scrollY || document.documentElement.scrollTop || 0;
          e !== h.current && ((h.current = e), f());
        },
        m = () => {
          (f(), (u.current = requestAnimationFrame(m)));
        };
      (() => {
        (window.lenis && "function" == typeof window.lenis.on
          ? ((a = window.lenis), a.on("scroll", p), f())
          : ((u.current = requestAnimationFrame(m)),
            window.addEventListener("scroll", f, {
              passive: !0,
            })),
          window.addEventListener("resize", f));
        const e = new MutationObserver(() => {
          ((d.current = t()), setTimeout(f, 50));
        });
        (e.observe(document.body, {
          childList: !0,
          subtree: !0,
        }),
          (d.current.__mo = e));
      })();
      const g = setTimeout(() => {
        ((d.current = t()), f());
      }, 120);
      return () => {
        (clearTimeout(g),
          a && "function" == typeof a.off && a.off("scroll", p),
          u.current && cancelAnimationFrame(u.current),
          window.removeEventListener("scroll", f),
          window.removeEventListener("resize", f),
          d.current.__mo &&
            (d.current.__mo.disconnect(), delete d.current.__mo));
      };
    }, [e.join("|")]),
    {
      active: s,
      setActive: o,
      lock: (e = a) => {
        l.current = performance.now() + e;
      },
    }
  );
}

export default useScrollSpy;
