import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      {/* Title Screen */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 ring-1 ring-white/15">
          <span className="font-pixel">NOW LOADING</span>
          <span className="text-white/60">— Portfolio Build</span>
        </div>

        <h1 className="mt-8 font-pixel text-4xl leading-tight sm:text-5xl md:text-6xl">
          OMASAN
          <br />
          <span className="inline-block mt-2">EDEGBELE</span>
        </h1>

        <p className="mt-5 text-sm sm:text-base text-white/85">
          Full-stack software engineer exploring <span className="text-pink-200">AI/ML</span> and
          <span className="text-pink-200"> computer vision</span>.
        </p>
      </div>

  
      {/* Game Mode Select */}
      <div className="mt-14">
      <Link to="/ArcadeUIResume" className="border-2 border-pink-400 bg-pink-500/10 px-4 py-2 text-pink-300 hover:bg-pink-500/20">
        View Resume UI
      </Link>
        <div className="text-center justify-between gap-6">
          <h2 className="font-pixeltext-xl sm:text-2xl">SELECT GAME MODE</h2>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Mode 1 */}
          <div className="relative overflow-hidden rounded-xl bg-white/10 p-6 ring-1 ring-white/15">
            <div className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 7px)",
              }}
            />
            <div className="relative">
              <div className="font-pixel text-xs text-pink-200">MODE 01</div>
              <h3 className="mt-3 font-pixel text-lg">MACHINE LEARNING</h3>
              <p className="mt-3 text-sm text-white/80 leading-6">
                Machine learning projects with a focus on data cleaning, EDA, and visualization dashboards—built to tell a business story clearly.
              </p>

              {/* <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">EDA</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Data Cleaning</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Viz</span>
              </div> */}

              <NavLink
                to="/MLProjects"
                className="mt-6 inline-flex bg-white px-5 py-2 font-pixel text-xs text-black hover:bg-white/90"
                style={{ borderRadius: 0 }}
              >
                GO →
              </NavLink>
            </div>
          </div>

          {/* Mode 2 */}
          <div className="relative overflow-hidden rounded-xl bg-white/10 p-6 ring-1 ring-white/15">
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
          </div>
        </div>
      </div>

      {/* Player Profile (light + professional) */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 md:flex-row">
        <div>
          <div className="font-pixel text-xs text-white/80">PLAYER PROFILE</div>
          <div className="mt-2 text-sm text-white/80">
            Full-stack dev with a focus on clean UI + practical ML projects.
          </div>
        </div>

        <NavLink
          to="/about"
          className="inline-flex items-center justify-center px-6 py-3 font-pixel text-xs text-white ring-1 ring-white/25 hover:bg-white/10"
          style={{ borderRadius: 0 }}
        >
          VIEW STATS →
        </NavLink>
      </div>
    </section>
  );
}