import { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function CursorTrail() {
  const { theme } = useTheme();

  useEffect(() => {
    // Avoid on touch devices
    const isCoarse = window.matchMedia?.("(pointer: coarse)")?.matches;
    if (isCoarse) return;

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    let last = 0;

    const spawn = (x, y) => {
      const el = document.createElement("span");
      const size = [6, 8, 10][Math.floor(Math.random() * 3)];
      const dx = `${(Math.random() * 24 - 12).toFixed(0)}px`;
      const dy = `${(Math.random() * 28 - 14).toFixed(0)}px`;

      // Theme-tinted particles
      const color =
        theme === "retro"
          ? (Math.random() > 0.5 ? "rgba(255,170,255,0.9)" : "rgba(255,220,255,0.85)")
          : (Math.random() > 0.5 ? "rgba(167,139,250,0.9)" : "rgba(129,140,248,0.85)");

      el.style.position = "absolute";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = color;
      el.style.borderRadius = "0px"; // pixel
      el.style.filter = "drop-shadow(0 0 8px rgba(255,170,255,0.15))";
      el.style.setProperty("--dx", dx);
      el.style.setProperty("--dy", dy);
      el.style.animation = `pixel-pop ${0.6 + Math.random() * 0.35}s ease-out forwards`;

      container.appendChild(el);
      el.addEventListener("animationend", () => el.remove());
    };

    const onMove = (e) => {
      const now = performance.now();
      // Throttle to keep it light
      if (now - last < 18) return;
      last = now;

      spawn(e.clientX, e.clientY);

      // occasional extra sparkle
      if (Math.random() < 0.25) spawn(e.clientX + 6, e.clientY - 6);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      container.remove();
    };
  }, [theme]);

  return null;
}