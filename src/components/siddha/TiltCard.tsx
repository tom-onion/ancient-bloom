import { useRef, ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    const ry = ((x / rect.width) - 0.5) * 10; // rotateY
    const rx = -((y / rect.height) - 0.5) * 10; // rotateX
    el.style.setProperty("--tilt-x", `${rx}deg`);
    el.style.setProperty("--tilt-y", `${ry}deg`);
    el.style.setProperty("--pointer-x", `${px}%`);
    el.style.setProperty("--pointer-y", `${py}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", `0deg`);
    el.style.setProperty("--tilt-y", `0deg`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;
