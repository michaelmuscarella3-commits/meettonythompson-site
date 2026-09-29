import React from "react";

export function usePerformanceTier() {
  const [e, t] = React.useState("mid");
  return (
    React.useEffect(() => {
      try {
        const e = navigator.deviceMemory || 4,
          n = navigator.hardwareConcurrency || 4,
          r = window.devicePixelRatio || 1,
          i = window.innerWidth;
        let a = "mid";
        ((e <= 2 || n <= 4 || r > 3 || i < 380) && (a = "low"),
          e >= 6 && n >= 6 && i > 1280 && (a = "high"),
          t(a));
      } catch {
        t("mid");
      }
    }, []),
    e
  );
}

export default usePerformanceTier;
