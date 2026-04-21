import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
}

/** Splits text into words and animates them in sequence on viewport enter. */
const SplitText = ({
  children,
  className = "",
  as: Tag = "h1",
  delay = 0,
  stagger = 0.06,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("split-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <Tag
      ref={ref as never}
      className={`split-text ${className}`}
      aria-label={children}
    >
      {words.map((w, i) => (
        <span className="split-word" key={i}>
          <span
            className="split-inner"
            style={{
              transitionDelay: `${delay + i * stagger}s`,
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      )) as ReactNode}
    </Tag>
  );
};

export default SplitText;
