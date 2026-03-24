import { NavLink } from "react-router-dom";

function ModeCard({ level, title, desc, tags, to, comingSoon }) {
  return (
    <div className="pixel-frame arcade-card relative rounded-xl bg-white/10 p-6 ring-1 ring-white/15 transition hover:ring-pink-300/50">
      <div className="font-pixel text-xs text-pink-200">{level}</div>
      <h2 className="mt-3 font-pixel text-lg">{title}</h2>
      <p className="mt-4 text-sm text-white/80 leading-6">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {comingSoon ? (
          <span className="font-pixel text-xs text-white/70">COMING SOON</span>
        ) : (
          <NavLink
            to={to}
            className="inline-flex bg-white px-5 py-2 font-pixel text-xs text-black"
            style={{ borderRadius: 0 }}
          >
            ENTER →
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default function MLProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="text-center">
        <h1 className="font-pixel text-3xl sm:text-4xl">SELECT PROJECT</h1>
        <p className="mt-4 text-white/80 text-sm sm:text-base">
          Pick a category to explore.
        </p>
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
            <h3 className="mt-3 font-pixel text-lg">SALES ANALYSIST PROJECT</h3>
            <p className="mt-3 text-sm text-white/80 leading-6">
              Data cleaning, EDA, and visualization dashboards—built to tell a business story clearly.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Python</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Pandas</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Viz</span>
            </div>

            <NavLink
            target="_blank"
              to="https://github.com/omasan-edegbele/Sales-Analysis"
              className="mt-6 inline-flex bg-white px-5 py-2 font-pixel text-xs text-black hover:bg-white/90"
              style={{ borderRadius: 0 }}
            >
              PLAY →
            </NavLink>
          </div>
          </div>

           <div className="relative overflow-hidden rounded-xl bg-white/10 p-6 ring-1 ring-white/15">
            <div className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 7px)",
              }}
            />

          <div className="relative">
            <div className="font-pixel text-xs text-pink-200">MODE 02</div>
            <h3 className="mt-3 font-pixel text-lg">OBJECT DETECTION FOR AUTONOMOUS VEHICLE SCENARIOS</h3>
            <p className="mt-3 text-sm text-white/80 leading-6">
              Autonomous vehicle safety project combining YOLOv8 object detection with data analysis of reported Tesla-related fatalities.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Python</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Tensorflow</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Matplotlib</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Yolov8</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Pandas</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Sklearn</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Ultralytics</span>
            </div>

            <NavLink
              to="https://github.com/omasan-edegbele/YOLOv8-Object-Detection-for-Autonomous-Vehicle-Scenarios"
              className="mt-6 inline-flex bg-white px-5 py-2 font-pixel text-xs text-black hover:bg-white/90"
              style={{ borderRadius: 0 }}
            >
              PLAY →
            </NavLink>
          </div>
          </div>

          
        </div>

        



         


      {/* <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ModeCard
          level="MODE 01"
          title="MACHINE LEARNING"
          desc="Case studies covering data analysis, model training, and computer vision."
          tags={["YOLO", "Data Science", "Python"]}
          to="/ml"
        />

        <ModeCard
          level="MODE 02"
          title="SOFTWARE DEVELOPMENT"
          desc="Full-stack and app development projects. Building these now before launch."
          tags={["React", "APIs", "Full Stack"]}
          to="/dev"
          comingSoon
        />

        <ModeCard
          level="MODE 03"
          title="RESUME"
          desc="View my resume in-browser or download a PDF copy."
          tags={["PDF", "Download"]}
          to="/resume"
        />
      </div> */}
    </section>
  );
}
