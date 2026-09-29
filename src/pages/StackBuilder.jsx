import { AnimatePresence, motion } from "framer-motion";
import { jsPDF } from "jspdf";
import React from "react";
import { useNavigate } from "react-router-dom";

export function StackBuilder() {
  const e = useNavigate(),
    t = React.useRef(null),
    [n, r] = React.useState([]),
    [i, a] = React.useState(null),
    [s, o] = React.useState(0),
    [l, c] = React.useState(!1),
    [u, d] = React.useState(!1),
    [h, f] = React.useState({
      archetype: "Visionary",
      focus: "Business Development",
    }),
    p = 10,
    m = 20,
    g = 24;
  React.useEffect(() => {
    const e = JSON.parse(localStorage.getItem("quizResult"));
    e && f(e);
  }, []);
  const x = {
      Visionary: ["#9b26b6", "#7d1f97", "#b84fd4"],
      Challenger: ["#e84c3d", "#ff6b00", "#ffad42"],
      Harmonizer: ["#a5f0d0", "#6ef2b3", "#ffffff"],
    }[h.archetype],
    b = {
      I: [[1, 1, 1, 1]],
      O: [
        [1, 1],
        [1, 1],
      ],
      T: [
        [1, 1, 1],
        [0, 1, 0],
      ],
      L: [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
      J: [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
      S: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      Z: [
        [1, 1, 0],
        [0, 1, 1],
      ],
    };
  (React.useEffect(() => {
    r(
      Array.from(
        {
          length: m,
        },
        () => Array(p).fill(0),
      ),
    );
  }, []),
    React.useEffect(() => {
      const e = t.current;
      if (!e) return;
      const r = e.getContext("2d");
      (r.clearRect(0, 0, 240, 480),
        (r.fillStyle = "#000"),
        r.fillRect(0, 0, 240, 480),
        n.forEach((e, t) =>
          e.forEach((e, n) => {
            e && ((r.fillStyle = e), r.fillRect(n * g, t * g, 23, 23));
          }),
        ),
        i &&
          ((r.fillStyle = i.color),
          i.shape.forEach((e, t) =>
            e.forEach(
              (e, n) => e && r.fillRect((i.x + n) * g, (i.y + t) * g, 23, 23),
            ),
          )));
    }, [n, i]));
  const v = () => {
      const e = Object.keys(b),
        t = b[e[Math.floor(Math.random() * e.length)]];
      return {
        shape: t,
        x: Math.floor(5) - Math.ceil(t[0].length / 2),
        y: 0,
        color: x[Math.floor(Math.random() * x.length)],
      };
    },
    y = (e, t, r = i.shape) =>
      r.some((r, i) =>
        r.some(
          (r, a) =>
            r && (e + a < 0 || e + a >= p || t + i >= m || n[t + i]?.[e + a]),
        ),
      );
  React.useEffect(() => {
    if (!l) return;
    const e = setInterval(() => {
      if (!i) return;
      const e = i.y + 1;
      if (y(i.x, e)) {
        const e = ((e) => {
            const t = n.map((e) => e.slice());
            return (
              e.shape.forEach((n, r) =>
                n.forEach((n, i) => {
                  n && e.y + r >= 0 && (t[e.y + r][e.x + i] = e.color);
                }),
              ),
              t
            );
          })(i),
          t = ((e) => {
            const t = e.filter((e) => !e.every((e) => e)),
              n = m - t.length;
            for (; t.length < m;) t.unshift(Array(p).fill(0));
            return (n > 0 && (o((e) => e + 100 * n), k()), t);
          })(e);
        r(t);
        const s = v();
        if (y(s.x, s.y, s.shape)) return (c(!1), void k());
        a(s);
      } else
        a({
          ...i,
          y: e,
        });
    }, 300);
    return () => clearInterval(e);
  }, [i, n, l]);
  const w = (e) => {
      if (!i) return;
      const t = "left" === e ? i.x - 1 : i.x + 1;
      y(t, i.y) ||
        a({
          ...i,
          x: t,
        });
    },
    N = () => {
      const e = i.shape[0].map((e, t) => i.shape.map((e) => e[t]).reverse());
      y(i.x, i.y, e) ||
        a({
          ...i,
          shape: e,
        });
    },
    k = () => {
      (c(!1), d(!0), _(), setTimeout(() => e("/?target=#tiers"), 4e3));
    },
    _ = () => {
      const e = new jsPDF(),
        { archetype: t, focus: n } = h;
      (e.setFontSize(22),
        e.setTextColor(155, 38, 182),
        e.text(`${t} Playbook`, 20, 30),
        e.setFontSize(13),
        e.setTextColor(40),
        e.text(`Focus Area: ${n}`, 20, 50),
        e.text(
          {
            Visionary:
              "Strategic vision defines your path. You build scalable systems with clarity.",
            Challenger:
              "Ambition and drive push you forward. You thrive on challenge and execution.",
            Harmonizer:
              "Balance and rhythm guide you. You align people, process, and purpose.",
          }[t],
          20,
          70,
        ),
        e.text(`Final Score: ${s}`, 20, 120),
        e.save(`${t}_Playbook.pdf`));
    };
  return (
    React.useEffect(() => {
      const e = (e) => {
        ("ArrowLeft" === e.key && w("left"),
          "ArrowRight" === e.key && w("right"),
          "ArrowUp" === e.key && N(),
          "ArrowDown" === e.key &&
            a((e) => ({
              ...e,
              y: e.y + 1,
            })));
      };
      return (
        window.addEventListener("keydown", e),
        () => window.removeEventListener("keydown", e)
      );
    }),
    (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#9b26b6] mb-2 uppercase">
          Stack Your Success
        </h1>
        <p className="text-gray-400 mb-4 text-center text-sm">
          {h.archetype}
          {" Mode — "}
          {h.focus}
        </p>
        <canvas
          ref={t}
          width={240}
          height={480}
          className="border border-[#9b26b6]/50 rounded-xl shadow-[0_0_35px_rgba(155,38,182,0.4)]"
        />
        <div className="flex gap-3 mt-4">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => w("left")}
            className="px-3 py-2 bg-[#7d1f97] hover:bg-[#952ca8] rounded-md text-xs font-bold uppercase"
          >
            ←
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => w("right")}
            className="px-3 py-2 bg-[#7d1f97] hover:bg-[#952ca8] rounded-md text-xs font-bold uppercase"
          >
            →
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={N}
            className="px-3 py-2 bg-[#952ca8] hover:bg-[#7d1f97] rounded-md text-xs font-bold uppercase"
          >
            ⟳
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => {
              (r(
                Array.from(
                  {
                    length: m,
                  },
                  () => Array(p).fill(0),
                ),
              ),
                a(v()),
                o(0),
                d(!1),
                c(!0));
            }}
            className="px-5 py-2 bg-gradient-to-br from-[#952ca8] to-[#7d1f97] rounded-md font-bold uppercase text-xs"
          >
            Start / Reset
          </motion.button>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          {"Score: "}
          {s}
        </p>
        <AnimatePresence>
          {u && (
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
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="bg-white text-black rounded-2xl shadow-[0_0_40px_rgba(155,38,182,0.8)] max-w-sm w-[90%] p-8 text-center font-[Poppins]"
              >
                <h2 className="text-2xl font-extrabold text-[#9b26b6] mb-3 uppercase tracking-tight">
                  {"🎁 "}
                  {h.archetype}
                  {" Playbook Ready!"}
                </h2>
                <p className="text-gray-700 mb-5 leading-snug">
                  {"Focus: "}
                  {h.focus}.<br />
                  Your personalized strategy playbook has been downloaded.
                </p>
                <div className="bg-gradient-to-br from-[#952ca8] to-[#7d1f97] text-white px-6 py-3 rounded-full font-bold uppercase shadow-[0_0_20px_rgba(155,38,182,0.6)]">
                  Redirecting...
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  );
}

export default StackBuilder;
