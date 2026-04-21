interface Props {
  items: string[];
  reverse?: boolean;
}

/** Infinite seamless marquee using CSS keyframes (GPU-only transform). */
const Marquee = ({ items, reverse = false }: Props) => {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {loop.map((t, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
