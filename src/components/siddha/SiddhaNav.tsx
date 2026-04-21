import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Origin" },
  { id: "biodiversity", label: "Biodiversity" },
  { id: "nutrition", label: "Nutrition" },
  { id: "community", label: "Community" },
];

const SiddhaNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
              setActive(s.id);
            }
          });
        },
        { threshold: [0.4, 0.6, 0.8] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));

  return (
    <nav
      aria-label="Primary"
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)]"
    >
      <div className="glass-dark rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1 relative">
        <span
          aria-hidden
          className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full transition-all duration-700"
          style={{
            background:
              "linear-gradient(120deg, hsl(var(--gold) / 0.35), hsl(var(--clay) / 0.35))",
            border: "1px solid hsl(var(--gold) / 0.4)",
            width: `${100 / sections.length}%`,
            left: `${(activeIndex * 100) / sections.length}%`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`nav-link relative z-10 ${active === s.id ? "active" : ""}`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SiddhaNav;
