export function ScrollIndicator({ target: e = "#meet-tony" }) {
  return (
    <div
      onClick={() => {
        const t = document.querySelector(e);
        if (t) {
          const e = window.lenis;
          e
            ? e.scrollTo(t, {
                duration: 1.2,
              })
            : t.scrollIntoView({
                behavior: "smooth",
              });
        }
      }}
      className="group cursor-pointer flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 select-none"
      style={{
        bottom: "0",
        position: "absolute",
      }}
    >
      <span
        className={
          "text-white font-['Press_Start_2P'] text-[0.5rem]\r\n                tracking-[0.2em] mb-2\r\n                drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]\r\n                select-none opacity-60"
        }
      >
        SCROLL
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-[#9b26b6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default ScrollIndicator;
