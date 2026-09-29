import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Go() {
  const e = useNavigate(),
    t = useLocation(),
    n = new URLSearchParams(t.search).get("plan") || "community";
  return (
    React.useEffect(() => {
      e(`/thank-you?plan=${n}`, {
        replace: !0,
      });
    }, [e, n]),
    (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-lg">
        Redirecting you to your thank you page...
      </div>
    )
  );
}

export default Go;
