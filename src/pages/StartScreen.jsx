import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  const navigate = useNavigate();

  const hiScore = useMemo(() => String(12571).padStart(7, "0"), []);
  const [credits, setCredits] = useState(12);
  const [selection, setSelection] = useState(0);

  const startGame = () => {
    console.log("start clicked");
    navigate("/home");
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp" || e.key === "w") setSelection(0);
      if (e.key === "ArrowDown" || e.key === "s") setSelection(1);
      if (e.key === "c") setCredits((c) => Math.min(99, c + 1));

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startGame();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0716] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-700 via-purple-700 to-slate-900" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_80%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-10">
        <div
          className="relative w-full overflow-hidden rounded-[42px] border border-white/10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,170,255,0.10), rgba(168,85,247,0.08))",
            boxShadow:
              "0 30px 90px rgba(0,0,0,0.55), 0 0 60px rgba(255,170,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[520px] rotate-12 rounded-full bg-white/10 blur-2xl opacity-50" />

          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,170,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,170,255,0.18) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 2px, transparent 2px, transparent 8px)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,170,255,0.35) 2px, transparent 2px)",
              backgroundSize: "64px 64px",
              backgroundPosition: "16px 20px",
            }}
          />

          <div className="relative px-8 py-10 sm:px-12 sm:py-14">
            <div className="flex items-center justify-between font-pixel text-sm text-white/90">
              <div className="drop-shadow-[0_0_10px_rgba(255,170,255,0.25)]">1UP</div>
              <div className="drop-shadow-[0_0_10px_rgba(255,170,255,0.25)]">2UP</div>
            </div>

            <div className="mt-8 text-center">
              <div className="font-pixel text-sm text-white/90">HI-SCORE</div>
              <div className="mt-2 font-pixel text-lg text-pink-200">{hiScore}</div>
            </div>

            <div className="mt-10 text-center">
              <h1
                className="font-pixel text-4xl sm:text-5xl"
                style={{
                  color: "#ffd1f2",
                  textShadow:
                    "0 3px 0 rgba(0,0,0,0.35), 0 0 22px rgba(255,170,255,0.25)",
                }}
              >
                START GAME
              </h1>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 font-pixel text-lg text-white/90">
              <button
                className="group relative flex items-center gap-3"
                onClick={() => setSelection(0)}
                type="button"
              >
                <span className={`w-5 ${selection === 0 ? "opacity-100" : "opacity-0"}`}>
                  <BlinkCaret />
                </span>
                <span className="group-hover:text-pink-200 transition">1 PLAYER</span>
              </button>

              <button
                className="group relative flex items-center gap-3"
                onClick={() => setSelection(1)}
                type="button"
              >
                <span className={`w-5 ${selection === 1 ? "opacity-100" : "opacity-0"}`}>
                  <BlinkCaret />
                </span>
                <span className="group-hover:text-pink-200 transition">2 PLAYER</span>
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between font-pixel text-sm text-white/80">
              <div className="opacity-90">
                PRESS <span className="text-pink-200">ENTER</span> TO START •{" "}
                <span className="text-pink-200">C</span> = COIN
              </div>
              <div>
                CREDIT <span className="text-pink-200">{String(credits).padStart(3, "0")}</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={startGame}
                className="font-pixel text-lg text-pink-100 hover:text-white"
                type="button"
                style={{
                  animation: "crt-flicker 3s infinite, neon-pulse 2s ease-in-out infinite",
                }}
              >
                ► PRESS START ◄
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_65%)]" />
        </div>
      </div>
    </div>
  );
}

function BlinkCaret() {
  return (
    <span
      className="inline-block"
      style={{
        width: 10,
        height: 10,
        background: "rgba(255,170,255,0.95)",
        boxShadow: "0 0 18px rgba(255,170,255,0.35)",
        animation: "blink 1s steps(2, jump-none) infinite",
      }}
    />
  );
}