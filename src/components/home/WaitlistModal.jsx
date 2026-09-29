import { AnimatePresence, motion } from "framer-motion";
import {
  CheckIcon,
  LoaderCircleIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";
import React from "react";

export function WaitlistModal({ show: e, onClose: t, tier: n }) {
  const [r, i] = React.useState(""),
    [a, s] = React.useState(""),
    [o, l] = React.useState(!1),
    [c, u] = React.useState(!1),
    [d, h] = React.useState(!1),
    [f, p] = React.useState(""),
    [m, g] = React.useState({}),
    x = n && "string" == typeof n ? n.toLowerCase() : "aspire",
    b = "ccl" === x ? "IGNITE" : x.toUpperCase(),
    v = React.useCallback(() => {
      (i(""), s(""), l(!1), u(!1), p(""), g({}), h(!1));
    }, []);
  React.useEffect(() => {
    e || v();
  }, [e, v]);
  const y = {
    aspire:
      "https://script.google.com/macros/s/AKfycbzhYG9VZXYtkmgJJlBaX3d2yKLt0ZK6PuN08ch9SA5E9WRjMDvmOFVk4wMMmq6tRUPj/exec",
    ccl: "https://script.google.com/macros/s/AKfycbytdnEfwBgbG6e-Y478MWX07tWz7iq_GxdC3QzoaC0gy-8CDZKJBvQRb7cLrvg3C9zBoQ/exec",
    elevate:
      "https://script.google.com/macros/s/AKfycbyNk1RgnU_37Nsi40IWR3fTUG1LDtfR0YFdzxxd9P-B9sLafKXYX-HKjkGYuo2muF3p/exec",
  };
  return e ? (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2147483647,
          padding: "1rem",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={t}
      >
        <motion.div
          style={{
            position: "relative",
            background: "#0f0f0f",
            border: "1px solid rgba(155,38,182,0.4)",
            borderRadius: "18px",
            padding: "32px",
            width: "100%",
            maxWidth: "410px",
            fontFamily: "Montserrat, sans-serif",
            color: "white",
          }}
          initial={{
            scale: 0.92,
            y: 40,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={t}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          >
            <XIcon size={26} />
          </button>
          {c ? (
            <div
              style={{
                textAlign: "center",
                padding: "32px 0",
              }}
            >
              <CheckIcon
                size={42}
                style={{
                  color: "#9b26b6",
                  margin: "0 auto 16px",
                }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                TRANSMISSION COMPLETE
              </h3>
              <p
                style={{
                  opacity: 0.6,
                  fontSize: "13px",
                  marginBottom: "24px",
                }}
              >
                {b}
                {" protocol confirmed."}
                <br />
                <span
                  style={{
                    color: "#9b26b6",
                    fontWeight: "bold",
                    marginTop: "8px",
                    display: "block",
                  }}
                >
                  You have been added to the priority waitlist.
                </span>
              </p>
              <button
                onClick={t}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                EXIT MODULE
              </button>
            </div>
          ) : (
            <>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                {b}
                {" ACCESS"}
              </h2>
              <form
                onSubmit={async (e) => {
                  if (
                    (e.preventDefault(),
                    p(""),
                    !(() => {
                      const e = {};
                      return (
                        a.trim() || (e.name = "Name is required."),
                        r.trim()
                          ? ((e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(r) ||
                            (e.email = "Invalid email format.")
                          : (e.email = "Email is required."),
                        o || (e.consent = "Consent required."),
                        g(e),
                        0 === Object.keys(e).length
                      );
                    })())
                  )
                    return;
                  const t = a.trim().split(" "),
                    n = t[0] || "",
                    i = t.slice(1).join(" ") || "";
                  h(!0);
                  const s = y[x];
                  if (!s)
                    return (
                      p("Configuration Error: Invalid Tier."),
                      void h(!1)
                    );
                  try {
                    (await fetch(s, {
                      method: "POST",
                      mode: "no-cors",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        email: r.trim(),
                        first: n,
                        last: i,
                        tier: x,
                      }),
                    }),
                      u(!0));
                  } catch (l) {
                    (console.error("API Error:", l), u(!0));
                  } finally {
                    h(!1);
                  }
                }}
              >
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "11px",
                      opacity: 0.6,
                    }}
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: "10px",
                      border: m.name
                        ? "1px solid red"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                      marginTop: "4px",
                    }}
                    value={a}
                    onChange={(e) => s(e.target.value)}
                  />
                  {m.name && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "11px",
                        marginTop: "4px",
                      }}
                    >
                      {m.name}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "11px",
                      opacity: 0.6,
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: "10px",
                      border: m.email
                        ? "1px solid red"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                      marginTop: "4px",
                    }}
                    value={r}
                    onChange={(e) => i(e.target.value)}
                  />
                  {m.email && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "11px",
                        marginTop: "4px",
                      }}
                    >
                      {m.email}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    fontSize: "11px",
                    opacity: 0.6,
                    marginBottom: "8px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={o}
                    onChange={(e) => l(e.target.checked)}
                    style={{
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    I agree to receive tier updates from Tony Thompson.
                  </span>
                </div>
                {m.consent && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "11px",
                      marginBottom: "6px",
                    }}
                  >
                    {m.consent}
                  </p>
                )}
                {f && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "4px",
                    }}
                  >
                    <TriangleAlertIcon
                      size={14}
                      style={{
                        marginRight: "4px",
                      }}
                    />
                    {f}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={d}
                  style={{
                    width: "100%",
                    marginTop: "18px",
                    padding: "14px 0",
                    borderRadius: "10px",
                    background: "#9b26b6",
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "'Press Start 2P'",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    cursor: "pointer",
                    opacity: d ? 0.6 : 1,
                    border: "none",
                  }}
                >
                  {d ? (
                    <LoaderCircleIcon className="animate-spin mx-auto" />
                  ) : (
                    "TRANSMIT ACCESS"
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : null;
}

export default WaitlistModal;
