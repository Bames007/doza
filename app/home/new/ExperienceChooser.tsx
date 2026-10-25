// app/components/ExperienceChooser.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Stethoscope, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/app/utils/utils";

type Role = "user" | "medic" | "center";

const ROLES = [
  {
    id: "user" as Role,
    label: "Doza User",
    tag: "Personal Health",
    desc: "Track vitals, manage medications, and stay connected with your care team.",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format",
    icon: User,
  },
  {
    id: "medic" as Role,
    label: "Doza Medic",
    tag: "Clinical Practice",
    desc: "Access patient histories, prescribe digitally, and collaborate across centers.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format",
    icon: Stethoscope,
  },
  {
    id: "center" as Role,
    label: "Doza Center",
    tag: "Hospital Operations",
    desc: "Real-time patient flow, integrated records, and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format",
    icon: Building2,
  },
];

export default function ExperienceChooser({
  onSelect,
  onExplore,
}: {
  onSelect: (role: Role) => void;
  onExplore: () => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 6s until the user interacts
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % ROLES.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const handleTabSelect = (idx: number) => {
    setActiveIdx(idx);
    setPaused(true);
  };

  const active = ROLES[activeIdx];
  const Icon = active.icon;

  return (
    <div className="relative h-[100dvh] w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 flex flex-col overflow-hidden select-none">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[120px]" />
      </div>

      {/* ─── Header ─────────────────────────────────────────── */}
      <header className="relative z-30 shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
            <img
              src="/logo.png"
              alt="Doza"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-['Bebas_Neue'] text-lg sm:text-xl text-white tracking-widest leading-none">
              DOZA
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.28em] text-emerald-200/70 uppercase mt-0.5 truncate">
              Your Personal Medical Assistant
            </span>
          </div>
        </div>

        <button
          onClick={onExplore}
          className="group shrink-0 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-100/80 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-all active:scale-95"
        >
          <span>Explore</span>
          <ArrowRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </header>

      {/* ─── Hero + Tabs ────────────────────────────────────── */}
      <main className="relative z-10 flex-1 flex flex-col min-h-0 px-3 sm:px-6 lg:px-8 pb-3 sm:pb-6 gap-2.5 sm:gap-4">
        {/* Hero card */}
        <button
          onClick={() => onSelect(active.id)}
          className="relative flex-1 min-h-0 rounded-3xl overflow-hidden text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0"
            >
              {/* Background image */}
              <motion.img
                src={active.image}
                alt={active.label}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.65] group-hover:brightness-[0.8] transition-[filter] duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-black/20" />

              {/* Corner: icon badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
                <Icon size={18} className="text-white sm:w-5 sm:h-5" />
              </div>

              {/* Corner: counter */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-baseline gap-1 text-white/50 font-mono">
                <span className="text-3xl sm:text-4xl text-white font-bold leading-none tracking-tighter">
                  {String(activeIdx + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">/</span>
                <span className="text-sm">03</span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-12">
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-emerald-300 mb-2">
                    {active.tag}
                  </p>
                  <h2 className="font-['Bebas_Neue'] text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.9] mb-3">
                    {active.label}
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-white/65 max-w-md leading-relaxed mb-5 line-clamp-2">
                    {active.desc}
                  </p>

                  <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:gap-4 transition-all duration-300">
                    <span className="w-6 h-0.5 bg-white group-hover:w-10 transition-all duration-300" />
                    <span>Enter Experience</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300"
                    />
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Tab bar */}
        <div className="shrink-0 grid grid-cols-3 gap-2 sm:gap-3">
          {ROLES.map((r, i) => {
            const TabIcon = r.icon;
            const isActive = i === activeIdx;
            return (
              <button
                key={r.id}
                onClick={() => handleTabSelect(i)}
                className={cn(
                  "group relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3.5 px-2 rounded-2xl transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                  isActive
                    ? "bg-white text-emerald-900 shadow-lg shadow-black/20"
                    : "bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white/75 hover:text-white",
                )}
              >
                <TabIcon
                  size={15}
                  className={cn(
                    "shrink-0 transition-transform duration-300",
                    isActive ? "text-emerald-600" : "text-white/80",
                  )}
                />
                <span className="text-[10px] sm:text-xs font-bold tracking-wide truncate max-w-full">
                  {r.label}
                </span>

                {/* Progress underline for the active tab (during autoplay only) */}
                {isActive && !paused && (
                  <motion.span
                    key={`progress-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-emerald-500 origin-left rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
