import React from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const e = useLocation();
  return (
    React.useEffect(() => {
      if (new URLSearchParams(e.search).get("target")) return;
      const t = window.lenis;
      t
        ? t.scrollTo(0, {
            duration: 0,
          })
        : window.scrollTo({
            top: 0,
            behavior: "auto",
          });
    }, [e.pathname, e.search]),
    null
  );
}

export default ScrollToTop;
