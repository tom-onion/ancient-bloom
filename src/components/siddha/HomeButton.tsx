import { useRef } from "react";
import { useMagnetic } from "@/hooks/useMotion";

const HomeButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  useMagnetic(btnRef, 0.3, 120);

  const goHome = () => {
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 group/home"
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      {/* Tooltip */}
      <span
        aria-hidden
        className="home-tooltip pointer-events-none absolute right-full top-1/2 mr-3 sm:mr-4 -translate-y-1/2 whitespace-nowrap px-3 py-2 sm:px-4 rounded-full glass-dark text-[10px] sm:text-xs tracking-[0.25em] uppercase opacity-0 translate-x-2 transition-all duration-500 group-hover/home:opacity-100 group-hover/home:translate-x-0"
        style={{
          color: "hsl(var(--parchment))",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        back to <span className="text-gradient-gold font-serif-display italic text-sm sm:text-base normal-case tracking-normal">arinamm</span>
      </span>

      <button
        ref={btnRef}
        type="button"
        onClick={goHome}
        aria-label="Back to arinamm"
        className="relative group glass-dark rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-500"
      >
        <span aria-hidden className="pulse-ring" />
        <span aria-hidden className="pulse-ring" style={{ animationDelay: "1.3s" }} />
        <span
          aria-hidden
          className="absolute inset-0 rounded-full breathe"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--gold) / 0.35), transparent 70%)",
          }}
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="hsl(var(--parchment))"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative w-5 h-5 transition-transform duration-500 group-hover:-translate-y-0.5"
        >
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
        </svg>
      </button>
    </div>
  );
};

export default HomeButton;
