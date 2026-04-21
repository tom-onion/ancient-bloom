import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  strokeColor?: string;
}

const BotanicalSVG = ({ className, strokeColor = "hsl(var(--gold))" }: Props) => {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;
    const length = path.getTotalLength();
    wrap.style.setProperty("--path-length", String(length));

    let raf = 0;
    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress from when element enters viewport bottom to when it exits top
      const total = vh + rect.height;
      const seen = vh - rect.top;
      const progress = Math.max(0, Math.min(1, seen / total));
      wrap.style.setProperty("--draw", String(progress));
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <svg viewBox="0 0 400 600" fill="none" className="w-full h-full">
        <path
          ref={pathRef}
          className="draw-path"
          d="M200 580 C 200 520, 200 460, 200 400 C 200 340, 230 290, 260 250 C 290 210, 310 180, 320 140 M200 400 C 170 380, 130 360, 100 330 C 80 310, 70 280, 80 250 M200 340 C 230 320, 270 310, 300 290 C 320 275, 330 250, 325 225 M200 280 C 170 260, 140 250, 115 225 M200 220 C 225 205, 250 195, 275 180"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* leaves */}
        <g opacity="0.7" fill={strokeColor}>
          <ellipse cx="100" cy="330" rx="14" ry="6" transform="rotate(-30 100 330)" />
          <ellipse cx="300" cy="290" rx="16" ry="7" transform="rotate(25 300 290)" />
          <ellipse cx="115" cy="225" rx="12" ry="5" transform="rotate(-40 115 225)" />
          <ellipse cx="275" cy="180" rx="13" ry="5" transform="rotate(35 275 180)" />
          <ellipse cx="320" cy="140" rx="10" ry="4" transform="rotate(45 320 140)" />
        </g>
      </svg>
    </div>
  );
};

export default BotanicalSVG;
