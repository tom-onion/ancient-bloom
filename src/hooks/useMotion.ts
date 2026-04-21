import { useEffect } from "react";

/**
 * Tracks scroll velocity (signed) and writes it to --scroll-velocity (px/frame, clamped).
 * Used for skew/squash effects on hero / marquee.
 */
export const useScrollVelocity = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lastY = window.scrollY;
    let velocity = 0;
    let raf = 0;

    const tick = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      // ease velocity toward delta
      velocity += (delta - velocity) * 0.2;
      const clamped = Math.max(-30, Math.min(30, velocity));
      document.documentElement.style.setProperty(
        "--scroll-velocity",
        clamped.toFixed(2)
      );
      // skew degrees (small)
      const skew = Math.max(-4, Math.min(4, clamped * 0.12));
      document.documentElement.style.setProperty(
        "--scroll-skew",
        `${skew.toFixed(2)}deg`
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
};

/**
 * Magnetic effect: element drifts toward the cursor when nearby.
 * Pass a ref to attach.
 */
export const useMagnetic = (
  ref: React.RefObject<HTMLElement>,
  strength = 0.35,
  radius = 140
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        el.style.transform = "translate(0, 0)";
      }
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength, radius]);
};
