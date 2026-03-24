import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Download,
  User,
  Swords,
  Trophy,
  Cpu,
  FolderKanban,
  TerminalSquare,
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";

const skillData = [
  { name: "Software Engineering", value: 70 },
  { name: "Machine Learning", value: 30 },
];

const equippedItems = [
  "React.js",
  "Angular.js",
  "JavaScript",
  "HTML/CSS",
  "Python",
  ".Net",
  "Git",
  "Visual Basic",
  "C#"
];

const quests = [
  {
    title: "Application Developer",
    subtitle: "Professional Computer Solutions",
    bullets: [
      "Jan 2024 – Present",
      "Build and support financial and billing software systems for utility clients.",
      "Improve workflows, reliability, and internal application functionality.",
      "Translate business needs into maintainable software features and fixes.",
    ],
  },
  {
    title: "Information Technology Intern",
    subtitle: "Union Pacific Railroad",
    bullets: [
      "June 2021 – Dec 2023",
      "Supported enterprise applications and internal tools across the organization.",
      "Collaborated with cross-functional teams to troubleshoot and resolve technical issues.",
      "Assisted in the development and deployment of software solutions to enhance operational efficiency.",
      "Gained experience in software maintenance, user support, and IT project coordination.",
    ],
  }

];

const bossBattles = [
  {
    title: "YOLOv8 Object Detection System",
    type: "AI / ML",
    bullets: [
      "Trained an object-detection pipeline on 5.6k+ autonomous-vehicle images.",
      "Worked across 11 detection classes including cars, buses, bikes, and trucks.",
      "Built portfolio-ready documentation and evaluation visuals for presentation.",
    ],
  },
  {
    title: "Sales Analysis Dashboard",
    type: "AI/ML",
    bullets: [
      "Extracted actionable insights that support sales strategy, regional investment decisions, and marketing optimization.",
    ],
  },
];

const achievements = [
  "University of Nebraska Omaha — B.S. Computer Science, 2023",
  "Purdue University - Professional Certificate in AI & Machine Learning, 2026",
];

const menuItems = [
  { id: "profile", label: "START", icon: User },
  { id: "skills", label: "VIEW SKILLS", icon: Cpu },
  { id: "quests", label: "QUEST LOG", icon: TerminalSquare },
  { id: "bosses", label: "BOSS BATTLES", icon: Swords },
  { id: "achievements", label: "ACHIEVEMENTS", icon: Trophy },
  { id: "projects", label: "LOADOUT", icon: FolderKanban },
];

function PixelPanel({ title, children, className = "" }) {
  return (
    <Card
      className={`rounded-none border-4 border-fuchsia-400 bg-black/75 shadow-[0_0_0_2px_#000,0_0_22px_rgba(217,70,239,0.24)] backdrop-blur-sm ${className}`}
    >
      <CardContent className="p-0">
        <div className="border-b-4 border-fuchsia-400 bg-gradient-to-r from-pink-500/15 via-fuchsia-500/10 to-purple-500/15 px-4 py-2 text-sm tracking-widest text-pink-300" style={{ fontFamily: 'Press Start 2P, monospace', lineHeight: 1.6 }}>
          {title}
        </div>
        <div className="p-4 md:p-5">{children}</div>
      </CardContent>
    </Card>
  );
}

function BootLine({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay }}
      className="text-sm text-pink-300"
      style={{ fontFamily: 'Orbitron, sans-serif' }}
    >
      {children}
    </motion.div>
  );
}

function GradientBar({ value }) {
  return (
    <div className="h-3 overflow-hidden rounded-none border border-pink-400 bg-zinc-900">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 shadow-[0_0_14px_rgba(217,70,239,0.45)]"
      />
    </div>
  );
}

export default function ArcadeUIResume() {
  const [activeSection, setActiveSection] = useState("profile");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;800&family=Press+Start+2P&display=swap');
    `;
    document.head.appendChild(style);

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (AudioContextCtor) {
      audioRef.current = new AudioContextCtor();
    }

    return () => {
      document.head.removeChild(style);
      if (audioRef.current && typeof audioRef.current.close === "function") {
        audioRef.current.close().catch(() => {});
      }
    };
  }, []);

  const playBeep = (frequency = 520, duration = 0.04, type = "square") => {
    if (!soundEnabled || !audioRef.current) return;

    const ctx = audioRef.current;
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.025, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  const activeLabel = useMemo(
    () => menuItems.find((item) => item.id === activeSection)?.label ?? "START",
    [activeSection]
  );

  return (
    
    <div
      className="min-h-screen overflow-hidden bg-gradient-to-br from-[#14081f] via-[#1a0f2e] to-[#0f0620] text-white"
      style={{ fontFamily: 'Orbitron, sans-serif' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.22),transparent_38%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div id="resume-pdf" className="relative mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 border-4 border-pink-400 bg-black/70 p-4 shadow-[0_0_0_2px_#000,0_0_26px_rgba(217,70,239,0.24)] backdrop-blur-sm"
        >
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              <div className="mb-3 space-y-1">
                <BootLine delay={0}>▸ BOOTING ARCADE PORTFOLIO SYSTEM...</BootLine>
                <BootLine delay={0.1}>▸ LOADING PLAYER PROFILE...</BootLine>
                <BootLine delay={0.2}>▸ STATUS: READY — PRESS START</BootLine>
              </div>

              <h1
                className="text-2xl font-black uppercase tracking-[0.18em] text-pink-300 md:text-4xl"
                style={{ fontFamily: 'Press Start 2P, monospace', lineHeight: 1.3 }}
              >
                Omasan Edegbele
              </h1>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-purple-300 md:text-base">
                LVL 99 Software Engineer · AI / ML 
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                <Badge className="rounded-none border border-pink-400 bg-pink-500/10 text-pink-300 hover:bg-pink-500/20">Omaha, Nebraska</Badge>
                <Badge className="rounded-none border border-purple-400 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20">Portfolio Ready</Badge>
                <Badge className="rounded-none border border-fuchsia-400 bg-fuchsia-500/10 text-fuchsia-300 hover:bg-fuchsia-500/20">Creative Tech Brand</Badge>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <div className="w-full max-w-sm border-4 border-purple-400 bg-[#12061d]/90 p-3 text-xs text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.16)]">
                <div className="mb-2 flex items-center justify-between text-purple-300">
                  <span style={{ fontFamily: 'Press Start 2P, monospace', fontSize: '10px', lineHeight: 1.6 }}>[ MAIN MENU ]</span>
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id);
                          playBeep(680, 0.05, "square");
                        }}
                        onMouseEnter={() => playBeep(420, 0.025, "triangle")}
                        className={`flex items-center gap-2 border-2 px-3 py-2 text-left transition duration-150 ${
                          isActive
                            ? "border-pink-400 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 shadow-[0_0_18px_rgba(217,70,239,0.28)]"
                            : "border-purple-500/60 bg-transparent text-purple-200 hover:border-pink-400 hover:bg-pink-500/5 hover:text-pink-300 hover:shadow-[0_0_16px_rgba(217,70,239,0.16)]"
                        } hover:scale-[1.02]`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-[11px] tracking-widest">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => {
                    setSoundEnabled((prev) => !prev);
                    playBeep(300, 0.04, "sine");
                  }}
                  className="rounded-none border-2 border-purple-400 bg-purple-500/10 uppercase tracking-[0.18em] text-purple-200 hover:bg-purple-500/20"
                >
                  {soundEnabled ? <Volume2 className="mr-2 h-4 w-4" /> : <VolumeX className="mr-2 h-4 w-4" />}
                  {soundEnabled ? "Sound On" : "Sound Off"}
                </Button>

                <Button asChild className="rounded-none border-2 border-pink-400 bg-pink-500/10 uppercase tracking-[0.2em] text-pink-200 hover:bg-pink-500/20 hover:shadow-[0_0_16px_rgba(217,70,239,0.22)]">
                  <a
                  download="Omasan_Edegbele_ATS.pdf"
                      href="/Omasan_Edegbele_ATS.pdf"
                      target="_blank"
                    rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-4 text-sm uppercase tracking-[0.2em] text-purple-300">
          Active Screen: {activeLabel}
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="space-y-6">
            <PixelPanel title="PLAYER STATS">
              <div className="space-y-3 text-sm text-zinc-200">
                <div className="flex justify-between gap-4 border-b border-zinc-700 pb-2">
                  <span className="text-zinc-400">CLASS</span>
                  <span className="text-pink-300">Engineer / Creator</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-700 pb-2">
                  <span className="text-zinc-400">SPECIALTY</span>
                  <span className="text-purple-300">AI · Software Engineering · Fullstack</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-700 pb-2">
                  <span className="text-zinc-400">EXP</span>
                  <span className="text-pink-300">4+ Years</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-zinc-400">STATUS</span>
                  <span className="text-fuchsia-300">Available for Cool Quests</span>
                </div>
              </div>
            </PixelPanel>

            <PixelPanel title="XP PROGRESSION">
              <div className="space-y-4">
                {skillData.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-widest">
                      <span className="text-purple-300">{skill.name}</span>
                      <span className="text-pink-300">{skill.value}%</span>
                    </div>
                    <GradientBar value={skill.value} />
                  </motion.div>
                ))}
              </div>
            </PixelPanel>

            <PixelPanel title="EQUIPPED LOADOUT">
              <div className="grid grid-cols-1 gap-2 text-xs uppercase tracking-widest">
                {equippedItems.map((item, idx) => (
                  <div
                    key={item}
                    className="border-2 border-purple-500/50 bg-gradient-to-r from-purple-500/8 to-pink-500/8 px-3 py-2 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.08)]"
                  >
                    [Slot {idx + 1}] {item}
                  </div>
                ))}
              </div>
            </PixelPanel>
            <PixelPanel title="ACHIEVEMENTS UNLOCKED">
  <div className="grid grid-cols-1 gap-2 text-xs uppercase tracking-widest">
    {achievements.map((achievement, idx) => (
      <div
        key={achievement}
        className="border-2 border-pink-500/60 bg-gradient-to-r from-pink-500/8 to-fuchsia-500/8 px-3 py-2 text-pink-200 shadow-[0_0_10px_rgba(217,70,239,0.1)]"
      >
        [Unlocked {idx + 1}] ★ {achievement}
      </div>
    ))}
  </div>
</PixelPanel>
          </div>

          <div className="space-y-6">
            <PixelPanel title="PROFILE / ABOUT">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="text-sm leading-7 text-zinc-200">
                  I’m a software engineer with a strong crossover between <span className="text-pink-300">AI/ML</span>, <span className="text-purple-300">Software Engineering</span>, and <span className="text-fuchsia-300">creative tech branding</span>. My work blends practical engineering with immersive presentation so the projects feel memorable, intentional, and visually cohesive.
                </div>
                <div className="border-4 border-pink-400 bg-gradient-to-br from-pink-500/8 to-purple-500/8 p-4 text-xs uppercase tracking-widest text-pink-200 shadow-[0_0_16px_rgba(217,70,239,0.12)]">
                  <div className="mb-3 text-pink-300" style={{ fontFamily: 'Press Start 2P, monospace', fontSize: '10px', lineHeight: 1.6 }}>[ CHARACTER DATA ]</div>
                  <div className="space-y-2">
                    <div>Origin: Software Engineering</div>
                    <div>Subclass: AI / ML Builder</div>
                    <div>Faction: Arcade Portfolio Mode</div>
                  </div>
                </div>
              </div>
            </PixelPanel>

            <PixelPanel title="QUEST LOG — EXPERIENCE">
              <div className="grid gap-4 xl:grid-cols-2">
                {quests.map((quest, i) => (
                  <motion.div
                    key={quest.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i }}
                    className="border-2 border-purple-500/50 bg-[#12061d]/85 p-4 shadow-[0_0_16px_rgba(168,85,247,0.08)]"
                  >
                    <div className="text-sm uppercase tracking-[0.18em] text-purple-300">
                      {quest.title}
                    </div>

                    <Badge className="mb-3 mt-2 rounded-none border border-pink-400 bg-pink-500/10 text-pink-300 hover:bg-pink-500/10">
                      {quest.subtitle}
                    </Badge>

                    <ul className="space-y-2 text-sm text-zinc-200">
                      {quest.bullets.map((bullet, idx) => (
                        <li key={idx}>▸ {bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </PixelPanel>

            <PixelPanel title="BOSS BATTLES — FEATURED PROJECTS">
              <div className="grid gap-4 xl:grid-cols-2">
                {bossBattles.map((battle, i) => (
                  <motion.div
                    key={battle.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i }}
                    className="border-2 border-purple-500/50 bg-[#12061d]/85 p-4 shadow-[0_0_16px_rgba(168,85,247,0.08)]"
                  >
                    <div className="text-sm uppercase tracking-[0.18em] text-purple-300">{battle.title}</div>
                    <Badge className="mb-3 mt-2 rounded-none border border-pink-400 bg-pink-500/10 text-pink-300 hover:bg-pink-500/10">{battle.type}</Badge>
                    <ul className="space-y-2 text-sm text-zinc-200">
                      {battle.bullets.map((bullet) => (
                        <li key={bullet}>▸ {bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </PixelPanel>
          </div>
        </div>

        <div
          className="mt-6 border-4 border-pink-400 bg-black/80 px-4 py-3 text-center text-xs uppercase tracking-[0.28em] text-pink-300 shadow-[0_0_16px_rgba(217,70,239,0.25)]"
          style={{ fontFamily: 'Press Start 2P, monospace', lineHeight: 1.8 }}
        >
          &gt;&gt;&gt; End of File · Thanks for Playing &lt;&lt;&lt;
        </div>
      </div>
    </div>
  );
}
