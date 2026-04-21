import { useEffect, useState } from "react";

/**
 * Full-screen Siddha-themed loader. Shows on first paint and fades out
 * once the window load event fires (or after a max timeout fallback).
 */
const SiddhaLoader = () => {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const finish = () => setDone(true);
    if (document.readyState === "complete") {
      const t = setTimeout(finish, 900);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", finish);
    const fallback = setTimeout(finish, 2800);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div
      className={`siddha-loader ${done ? "is-done" : ""}`}
      aria-hidden={done}
      role="status"
    >
      <div className="siddha-loader__inner">
        <svg
          viewBox="0 0 120 120"
          className="siddha-loader__mandala"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ldr-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--gold-soft))" />
              <stop offset="50%" stopColor="hsl(var(--gold))" />
              <stop offset="100%" stopColor="hsl(var(--clay))" />
            </linearGradient>
          </defs>
          {[0, 45, 90, 135].map((rot) => (
            <ellipse
              key={rot}
              cx="60"
              cy="60"
              rx="44"
              ry="16"
              fill="none"
              stroke="url(#ldr-g)"
              strokeWidth="1"
              transform={`rotate(${rot} 60 60)`}
              opacity="0.85"
            />
          ))}
          <circle cx="60" cy="60" r="6" fill="hsl(var(--gold))" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="hsl(var(--gold) / 0.4)"
            strokeWidth="0.5"
            strokeDasharray="2 6"
          />
        </svg>
        <p className="siddha-loader__label">
          <span>S</span><span>i</span><span>d</span><span>d</span><span>h</span><span>a</span>
        </p>
        <p className="siddha-loader__sub">Awakening ancient roots…</p>
      </div>
    </div>
  );
};

export default SiddhaLoader;
