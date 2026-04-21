import { useEffect } from "react";

/** Adds .is-visible to any element with .reveal or .reveal-stagger when it enters viewport. */
export const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/** Maps page scroll to CSS variables on :root via rAF. */
export const useScrollVars = () => {
  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const progress = max > 0 ? y / max : 0;
      const root = document.documentElement;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--scroll-y", `${y}px`);
      root.style.setProperty("--hero-parallax", `${y * 0.35}px`);
      root.style.setProperty("--bg-hue-shift", `${progress * 40}deg`);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
};
