import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { usePerformanceTier } from "./hooks/usePerformanceTier";
import "./styles/index.css";

const PerformanceContext = React.createContext("mid");

function PerformanceProvider({ children }) {
  const tier = usePerformanceTier();
  return (
    <PerformanceContext.Provider value={tier}>{children}</PerformanceContext.Provider>
  );
}

// Support links of the form /?redirect=/some/path (used by the host's 404 fallback).
if (window.location.search.startsWith("?redirect=")) {
  const target = decodeURIComponent(
    window.location.search.replace("?redirect=", ""),
  );
  window.history.replaceState(null, "", target);
}

window.scrollTo(0, 0);
document.body.style.overflow = "visible";
document.documentElement.style.overflow = "visible";
document.body.style.height = "auto";
document.documentElement.style.height = "auto";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <PerformanceProvider>
        <App />
      </PerformanceProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
