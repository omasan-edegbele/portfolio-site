import pixelMe from "../assets/PixelMe.png";
export default function About() {
  const stats = [
    { label: "Software Engineering", value: 70 },
    { label: "AI & Machine Learning", value: 30 }
  ];

  const skills = [
    "Python",
    "Pandas",
    "TensorFlow",
    "PyTorch",
    "YOLO",
    "React",
    "JavaScript",
    "SQL",
    "Unity",
    "C#",
    "Git",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Natural Language Processing",
    "Generative AI",
    "Java",
    "Visual Basic", 
    "HTML/CSS",
    "Angular",
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 ring-1 ring-white/15">
            <span className="font-pixel">PLAYER PROFILE</span>
          </div>

          <h1 className="mt-8 font-pixel text-3xl sm:text-4xl md:text-5xl">
            ABOUT ME
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Software engineer with a strong interest in machine learning,
            computer vision, and interactive systems. I enjoy building projects
            that combine technical depth with clean user experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className=" arcade-card relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <div className="font-pixel text-xs text-pink-200">CHARACTER DATA</div>

            <div className="mt-5 flex justify-center">
              <div className="grid h-44 w-44 place-items-center rounded-2xl bg-white/10 ring-1 ring-pink-200/20">
                <div className="text-center">
                  <div className="font-pixel text-5xl text-pink-200">
                    <img src={pixelMe} alt="Pixel Me" className="w-full h-full object-contain" />

                  </div>
                  <div className="mt-3 font-pixel text-xs text-white/70">
                    <p>PLAYER ONE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/60">Name</span>
                <span className="text-right">Omasan Edegbele</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/60">Class</span>
                <span className="text-right">Software Engineer</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/60">Specialization</span>
                <span className="text-right">AI / ML + Full Stack</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/60">Experience</span>
                <span className="text-right">4+ Years</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/60">Status</span>
                <span className="font-pixel text-xs text-pink-200">READY</span>
              </div>
            </div>
          </div>

          <div className="arcade-card relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <div className="font-pixel text-xs text-pink-200">STATS + LORE</div>

            <h2 className="mt-4 font-pixel text-lg sm:text-xl">
              PLAYER ONE
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              I’m a software engineer who enjoys building practical, creative,
              and data-driven experiences. My work spans full-stack development,
              machine learning, data science, and interactive systems. I’m
              especially interested in projects where engineering and creativity
              overlap—whether that’s training a computer vision model, building
              a polished front end, or designing something with a strong visual
              identity.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              Right now, I’m focused on strengthening my AI/ML portfolio through
              projects like sales analytics and YOLO object detection, while
              continuing to grow as a well-rounded software engineer.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              I'm also very passionate about gaming and game development, which has been a hobby of mine for years. I love exploring how interactive systems can create engaging experiences, and I often draw inspiration from games when designing projects or thinking about user experience -
              Hence the idea for this site design! I wanted to create a portfolio that reflects my personality and interests, while also showcasing my skills in a unique way. If you have any questions or just want to chat about games, AI, or anything else, feel free to reach out!
            </p>


            <div className="mt-8">
              <div className="font-pixel text-xs text-pink-200">POWER LEVELS</div>

              <div className="mt-4 space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-white/85">{stat.label}</span>
                      <span className="font-pixel text-[10px] text-white/70">
                        {stat.value}
                      </span>
                    </div>

                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${stat.value}%`,
                          background:
                            "linear-gradient(90deg, rgba(255,170,255,0.95), rgba(168,85,247,0.95))",
                          boxShadow: "0 0 14px rgba(255,170,255,0.25)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className=" arcade-card relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <div className="font-pixel text-xs text-pink-200">INVENTORY</div>

            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs text-white/85 ring-1 ring-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="arcade-card relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <div className="font-pixel text-xs text-pink-200">CURRENT QUEST</div>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>• Expanding AI/ML portfolio projects</li>
              <li>• Strengthening full-stack React workflows</li>
              <li>• Building polished portfolio case studies</li>
              <li>• Exploring creative interactive experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}