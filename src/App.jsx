import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AmbientGlow } from "./components/layout/AmbientGlow";
import { ContactSection } from "./components/layout/ContactSection";
import { CookieBanner } from "./components/layout/CookieBanner";
import { Navbar } from "./components/layout/Navbar";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { VideoPlayerProvider } from "./components/media/VideoPlayerProvider";
import { QuizProvider } from "./context/QuizContext";
import { usePerformanceTier } from "./hooks/usePerformanceTier";
import { AboutTony } from "./pages/AboutTony";
import { BookTony } from "./pages/BookTony";
import { Courses } from "./pages/Courses";
import { Go } from "./pages/Go";
import { Home } from "./pages/Home";
import { InnerCircleSuccess } from "./pages/InnerCircleSuccess";
import { JoinInnerCircle } from "./pages/JoinInnerCircle";
import { LetsWin } from "./pages/LetsWin";
import { MeetTony } from "./pages/MeetTony";
import { Newsletter } from "./pages/Newsletter";
import { Podcasts } from "./pages/Podcasts";
import { Quiz } from "./pages/Quiz";
import { QuizIntro } from "./pages/QuizIntro";
import { QuizResults } from "./pages/QuizResults";
import { Roadmap } from "./pages/Roadmap";
import { Shop } from "./pages/Shop";
import { SmsApproval } from "./pages/SmsApproval";
import { StackBuilder } from "./pages/StackBuilder";
import { ThankYou } from "./pages/ThankYou";

// Legal pages and 404 are code-split, as on the original site.
const PrivacyPolicy = React.lazy(() => import("./pages/legal/PrivacyPolicy"));
const Terms = React.lazy(() => import("./pages/legal/Terms"));
const CookiePolicy = React.lazy(() => import("./pages/legal/CookiePolicy"));
const Disclaimer = React.lazy(() => import("./pages/legal/Disclaimer"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const [e, t] = React.useState(!1),
    [n, r] = React.useState(!0),
    i = useLocation(),
    a = "/" === i.pathname,
    s = "/sms-approval" === i.pathname,
    o = !a || n,
    l = "low" === usePerformanceTier();
  React.useEffect(() => {
    if (l) return;
    let e, t;
    return (
      window.addEventListener(
        "load",
        () => {
          ((document.documentElement.style.overflow = "visible"),
            (document.body.style.overflow = "visible"),
            (e = new Lenis({
              duration: 1.05,
              easing: (e) => 1 - Math.pow(1 - e, 3),
              smoothWheel: !0,
            })),
            (window.lenis = e),
            e.stop(),
            setTimeout(() => e.start(), 1400));
          const n = (r) => {
            (e.raf(r), (t = requestAnimationFrame(n)));
          };
          t = requestAnimationFrame(n);
        },
        {
          once: !0,
        },
      ),
      () => cancelAnimationFrame(t)
    );
  }, [l]);
  const c = "/" === i.pathname && !s;
  return (
    <VideoPlayerProvider>
      <QuizProvider>
        <main className="bg-black text-white overflow-x-hidden relative flex flex-col min-h-screen">
          <ScrollToTop />
          {!s && (
            <div className="fixed top-0 left-0 w-full z-[2147483646]">
              <Navbar menuOpen={e} setMenuOpen={t} heroVisible={o} />
            </div>
          )}
          {!l && !s && <AmbientGlow />}
          <AnimatePresence mode="wait">
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
              transition={{
                duration: 0.55,
              }}
              key={i.pathname}
            >
              <React.Suspense fallback={<div className="h-screen bg-black" />}>
                <Routes location={i}>
                  <Route path="/" element={<Home setHeroVisible={r} />} />
                  <Route
                    path="/salesgrowthplatform"
                    element={
                      <Home setHeroVisible={r} forcedTarget="programs" />
                    }
                  />
                  <Route
                    path="/booktony"
                    element={
                      <Home setHeroVisible={r} forcedTarget="book-tony" />
                    }
                  />
                  <Route
                    path="/meettony"
                    element={
                      <Home setHeroVisible={r} forcedTarget="meet-tony" />
                    }
                  />
                  <Route path="/lets-win" element={<LetsWin />} />
                  <Route path="/about-tony" element={<AboutTony />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/podcasts" element={<Podcasts />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/go" element={<Go />} />
                  <Route path="/meet-tony" element={<MeetTony />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/stackbuilder" element={<StackBuilder />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/book-tony" element={<BookTony />} />
                  <Route
                    path="/join-inner-circle"
                    element={<JoinInnerCircle />}
                  />
                  <Route
                    path="/inner-circle-success"
                    element={<InnerCircleSuccess />}
                  />
                  <Route path="/quiz-intro" element={<QuizIntro />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/quiz/results" element={<QuizResults />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/sms-approval" element={<SmsApproval />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </React.Suspense>
            </motion.div>
          </AnimatePresence>
          {c && <ContactSection isDark={!1} />}
          <CookieBanner />
        </main>
      </QuizProvider>
    </VideoPlayerProvider>
  );
}

export default App;
