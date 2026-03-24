import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeProvider";



export default function RetroNav() {
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `relative text-xs transition rounded-sm
     focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-0
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-pink-300 after:transition-all
     ${isActive ? "text-pink-200 after:w-full" : "text-white/80 hover:text-white after:w-0 hover:after:w-full"}`;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Transparent / glassy bar (no dark blue strip) */}
      <div
        className="relative w-full backdrop-blur-md"
        style={{
          background: "rgba(255,170,255,0.07)",
          borderBottom: "1px solid rgba(255,170,255,0.12)",
        }}
      >
        {/* Subtle overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,170,255,0.35) 2px, transparent 2px)",
              backgroundSize: "48px 48px",
              backgroundPosition: "12px 18px",
            }}
          />
          
        </div>
        <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-center px-4 sm:px-8">
          <nav className="flex items-center gap-8" aria-label="Main Navigation">
            <NavLink className={linkClass} to="/about">
              About Me
            </NavLink>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
            <NavLink className={linkClass} to="/home">
              Home
            </NavLink>

            <button
              onClick={toggleTheme}
              className="ml-2 grid h-9 w-9 place-items-center rounded-md bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition"
              aria-label="Toggle theme"
              aria-pressed={theme === "retro"}
              type="button"
              title={theme === "retro" ? "Switch to Dark" : "Switch to Retro"}
            >
              <span className="text-xs">{theme === "retro" ? "🌙" : "✨"}</span>
            </button>
          </nav>

        </div>



        <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
      </div>
    </header>
  );
}