import { useEffect, useRef } from "react";

/**
 * Soft glowing cursor follower. Hidden on touch devices.
 * Uses requestAnimationFrame + lerp for buttery-smooth easing.
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onEnterInteractive = () => ref.current?.classList.add("is-hover");
    const onLeaveInteractive = () => ref.current?.classList.remove("is-hover");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={ref} className="cursor-glow" aria-hidden="true">
        <span className="cursor-glow__dot" />
        <span className="cursor-glow__ring" />
      </div>
    </>
  );
};

export default CursorGlow;
