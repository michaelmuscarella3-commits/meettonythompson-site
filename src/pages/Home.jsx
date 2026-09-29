import React from "react";
import { EmpowerSection } from "../components/home/EmpowerSection";
import { Hero } from "../components/home/Hero";
import { JoinCommunity } from "../components/home/JoinCommunity";
import { MeetTonySection } from "../components/home/MeetTonySection";
import { Testimonials } from "../components/home/Testimonials";
import { TrustedBy } from "../components/home/TrustedBy";

export function Home({ setHeroVisible: e, forcedTarget: t }) {
  return (
    React.useEffect(() => {
      const t = document.querySelector("#home");
      if (!t) return;
      const n = new IntersectionObserver(([t]) => e(t.isIntersecting), {
        threshold: 0.35,
      });
      return (n.observe(t), () => n.disconnect());
    }, [e]),
    React.useEffect(() => {
      const e = new URLSearchParams(window.location.search),
        n = t || e.get("target");
      if (!n) return;
      let r = 0;
      const i = () => {
        const e = document.getElementById(n);
        e
          ? (window.lenis && window.lenis.stop(),
            e.scrollIntoView({
              behavior: "auto",
            }),
            window.lenis && window.lenis.start())
          : r < 40 && (r++, setTimeout(i, 100));
      };
      requestAnimationFrame(i);
    }, [t]),
    (
      <div className="flex flex-col w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="meet-tony">
          <MeetTonySection />
        </section>
        <section id="about">
          <EmpowerSection />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <div className="h-[8vh] w-full bg-gradient-to-b from-transparent via-[#9b26b6]/20 to-black" />
        <section id="trust">
          <TrustedBy />
        </section>
        <JoinCommunity />
        <section id="contact" />
      </div>
    )
  );
}

export default Home;
