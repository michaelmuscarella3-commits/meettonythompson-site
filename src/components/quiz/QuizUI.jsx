import { motion } from "framer-motion";
import React from "react";

export function GlassPanel({ children: e, className: t = "" }) {
  const n = React.useRef(null),
    [r, i] = React.useState({
      x: 0,
      y: 0,
    });
  return (
    <motion.div
      ref={n}
      onMouseMove={(e) => {
        if (!n.current) return;
        const { clientX: t, clientY: r } = e,
          {
            height: a,
            width: s,
            left: o,
            top: l,
          } = n.current.getBoundingClientRect();
        i({
          x: 0.15 * (t - (o + s / 2)),
          y: 0.15 * (r - (l + a / 2)),
        });
      }}
      onMouseLeave={() =>
        i({
          x: 0,
          y: 0,
        })
      }
      animate={{
        x: r.x,
        y: r.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={`relative inline-flex z-10 ${t}`}
    >
      {e}
    </motion.div>
  );
}

export const SplitText = ({
  text: e,
  className: t,
  color: n = "text-white",
}) => (
  <span
    className={`block font-black uppercase leading-[1] md:leading-[0.85] tracking-tighter whitespace-normal md:whitespace-nowrap ${n} ${t}`}
    style={{
      fontFamily: "'Inter', sans-serif",
      transform: "scaleY(1.15)",
      transformOrigin: "left bottom",
      willChange: "transform",
    }}
  >
    {e}
  </span>
);

export function NeonCard({ children: e, className: t = "" }) {
  const n = React.useRef(null),
    [r, i] = React.useState({
      x: 0,
      y: 0,
    });
  return (
    <motion.div
      ref={n}
      onMouseMove={(e) => {
        if (!n.current) return;
        const { clientX: t, clientY: r } = e,
          {
            height: a,
            width: s,
            left: o,
            top: l,
          } = n.current.getBoundingClientRect();
        i({
          x: 0.15 * (t - (o + s / 2)),
          y: 0.15 * (r - (l + a / 2)),
        });
      }}
      onMouseLeave={() =>
        i({
          x: 0,
          y: 0,
        })
      }
      animate={{
        x: r.x,
        y: r.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={`relative inline-flex z-10 ${t}`}
    >
      {e}
    </motion.div>
  );
}

export const CornerAccent = ({ position: e = "top-left" }) => (
  <div
    className={`absolute w-8 h-8 border-[#9b26b6]/30 ${
      {
        "top-left": "top-0 left-0 border-t-2 border-l-2",
        "top-right": "top-0 right-0 border-t-2 border-r-2",
        "bottom-left": "bottom-0 left-0 border-b-2 border-l-2",
        "bottom-right": "bottom-0 right-0 border-b-2 border-r-2",
      }[e]
    } pointer-events-none`}
  />
);
