import { useMemo } from "react";

const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const snap = (n, step) => Math.round(n / step) * step;

export default function PixelSquaresDynamic({ count = 18 }) {
  const squares = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = pick([8, 12, 16]);           // pixel-like sizes
      const left = snap(rand(0, 100), 2);       // snap to grid
      const top = snap(rand(0, 100), 2);
      const dx = snap(rand(-12, 12), 2);
      const dy = snap(rand(18, 55), 2);
      const dur = rand(8, 16);                  // animation duration
      const delay = rand(0, 8);
      const opacity = rand(0.15, 0.35);

      const color =
        Math.random() > 0.5
          ? "rgba(255,170,255,0.85)"
          : "rgba(255,220,255,0.75)";

      return { id: i, size, left, top, dx, dy, dur, delay, opacity, color };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {squares.map((s) => (
        <span
          key={s.id}
          className="absolute"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.left}vw`,
            top: `${s.top}vh`,
            background: s.color,

            "--x0": "0px",
            "--y0": "0px",
            "--x1": `${s.dx}vw`,
            "--y1": `${s.dy}vh`,
            "--o": s.opacity,

            animation: `pixel-drift ${s.dur}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
