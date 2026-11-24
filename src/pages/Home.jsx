import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#14081f] via-[#1a0f2e] to-[#0f0620] text-white"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.22),transparent_38%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-16 text-white">
        {/* Title Screen */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 border-2 border-fuchsia-400 bg-black/70 px-4 py-2 text-xs text-white/80 shadow-[0_0_16px_rgba(217,70,239,0.16)]">
            <span className="font-pixel">NOW LOADING</span>
            <span className="text-white/60">— Portfolio Build</span>
          </div>
          <h1 className="mt-8 font-pixel text-4xl leading-tight sm:text-5xl md:text-6xl"
           style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: 1.4 }}>
            OMASAN
            <br />
            <span className="mt-2 inline-block">EDEGBELE</span>
          </h1>

          <p className="mt-5 text-xl text-white/85 xl:text-base mb-4">
            Full-stack software engineer exploring{" "}
            <span className="text-pink-300">AI/ML</span> and
            <span className="text-pink-300"> computer vision</span>.
          </p>
        </div>

        {/* Game Mode Select */}
        <div className="mt-14">
          <Link
            to="/ArcadeUIResume"
            className="border-2 border-pink-400 bg-pink-500/10 px-4 py-2 text-pink-300 transition hover:bg-pink-500/20"
          >
            View Resume UI
          </Link>
          <div className="mt-6 text-center">
            <h2 className="font-pixel text-xl sm:text-2xl">SELECT GAME MODE</h2>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-1">
            {/* Mode 1 */}
            <div className="relative overflow-hidden border-4 border-fuchsia-400 bg-black/75 p-6 shadow-[0_0_0_2px_#000,0_0_22px_rgba(217,70,239,0.24)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 7px)",
                }}
              />
              <div className="relative">
                <div className="font-pixel text-xs text-pink-300">MODE 01</div>
                <h3 className="mt-3 font-pixel text-lg">MACHINE LEARNING</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Machine learning projects with a focus on data cleaning, EDA,
                  and visualization dashboards—built to tell a business story
                  clearly.
                </p>

                <NavLink
                  to="/MLProjects"
                  className="mt-6 inline-flex bg-white px-5 py-2 font-pixel text-xs text-black transition hover:bg-white/90"
                  style={{ borderRadius: 0 }}
                >
                  GO →
                </NavLink>
              </div>
            </div>

            {/* Mode 2 */}
            {/* <div className="relative overflow-hidden rounded-xl bg-white/10 p-6 ring-1 ring-white/15">
              <div className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,170,255,0.35) 2px, transparent 2px)",
                  backgroundSize: "56px 56px",
                  backgroundPosition: "14px 18px",
                }}
              />
              <div className="relative">
                <div className="font-pixel text-xs text-pink-200">MODE 02</div>
                <h3 className="mt-3 font-pixel text-lg">SOFTWARE ENGINEER</h3>
                <p className="mt-3 text-sm text-white/80 leading-6">
                  Project Data coming soon
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Player Profile (light + professional) */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-2 border-purple-400 bg-black/70 p-6 shadow-[0_0_18px_rgba(168,85,247,0.16)] md:flex-row">
          <div>
            <div className="font-pixel text-xs text-white/80">PLAYER PROFILE</div>
            <div className="mt-2 text-sm text-white/80">
              Full-stack dev with a focus on clean UI + practical ML projects.
            </div>
          </div>

          <NavLink
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 font-pixel text-xs text-white ring-1 ring-white/25 transition hover:bg-white/10"
            style={{ borderRadius: 0 }}
          >
            VIEW STATS →
          </NavLink>
        </div>
      </section>
    </div>
  );
}
