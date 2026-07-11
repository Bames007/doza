"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Stethoscope,
  Pill,
  Ambulance,
} from "lucide-react";

const bebas = "font-['Bebas_Neue']";
const poppins = "font-['Poppins']";

const cards = [
  {
    id: 1,
    title: "Access",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format",
    problem:
      "You've visited multiple specialists, yet no one can diagnose your condition.",
    solution:
      "Doza's intelligent triage matches you with the right specialty center in minutes. Search by symptoms, not just location.",
    icon: <Stethoscope size={18} />,
  },
  {
    id: 2,
    title: "Inventory",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000&auto=format",
    problem:
      "Critical medication out of stock at every nearby pharmacy your treatment gets delayed.",
    solution:
      "Live inventory across 10,000+ partners. Reserve, verify, and get delivery within hours, not days.",
    icon: <Pill size={18} />,
  },
  {
    id: 3,
    title: "Emergency",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format",
    problem:
      "During an emergency, every second matters but you don't know which ER has capacity.",
    solution:
      "Real time ER wait times, bed availability, and one tap notification to activate trauma response teams.",
    icon: <Ambulance size={18} />,
  },
  {
    id: 4,
    title: "Tracking",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2000&auto=format",
    problem:
      "Managing multiple medications leads to missed doses, confusing schedules, and health setbacks.",
    solution:
      "Smart adherence tracking with clinically timed reminders, refill alerts, and caregiver insights all in one place.",
    icon: <Activity size={18} />,
  },
  {
    id: 5,
    title: "History",
    // Working medical history / patient record image (highly reliable)
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format",
    problem:
      "Repeating your medical history to every new provider wastes time, risks errors, and fragments your care.",
    solution:
      "You control your unified health record. Grant time limited, secure access to any clinician instantly.",
    icon: <ShieldCheck size={18} />,
  },
];

export default function DozaHero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active, isPaused]);

  const handleNavClick = (idx: number) => {
    setActive(idx);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cards[active].id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${cards[active].image}')` }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY FOR TEXT LEGIBILITY */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      {/* MAIN CONTENT CONTAINER — bottom aligned with extra top padding to avoid navbar */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-20 flex flex-col justify-end pb-20 lg:pb-12 pt-20 lg:pt-28">
        {/* FLEX ROW FOR TEXT + NAVIGATION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-8">
          {/* TEXT CONTENT (Left) */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={cards[active].id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`flex items-center gap-2 text-emerald-400 tracking-[0.2em] uppercase text-[10px] font-bold mb-6 ${poppins}`}
                >
                  {cards[active].icon}
                  {cards[active].title} Intelligence
                </div>

                <h1
                  className={`${bebas} text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight mb-8`}
                >
                  HEALTHCARE
                  <br />
                  <span className="text-white/20 italic">BARRIERS</span>
                </h1>

                <div className="flex flex-col gap-6 border-l border-white/20 pl-8">
                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-widest text-white/40 mb-2 ${poppins}`}
                    >
                      The barrier
                    </p>
                    <p
                      className={`text-lg md:text-xl text-white/90 font-light leading-relaxed ${poppins}`}
                    >
                      {cards[active].problem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p
                      className={`text-[10px] uppercase tracking-widest text-emerald-400 mb-2 ${poppins}`}
                    >
                      The breakthrough
                    </p>
                    <p
                      className={`text-lg md:text-xl text-emerald-50 leading-relaxed font-medium ${poppins}`}
                    >
                      {cards[active].solution}
                    </p>
                  </div>
                </div>

                <button
                  className={`mt-10 px-8 py-4 bg-emerald-500 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 ${poppins}`}
                >
                  Join Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION SIDEBAR (Right) — DESKTOP ONLY */}
          <div className="hidden lg:flex flex-row gap-3 pb-2">
            {cards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => handleNavClick(idx)}
                className={`relative w-20 h-28 rounded-sm overflow-hidden transition-all duration-300 border ${
                  active === idx
                    ? "border-emerald-400 ring-2 ring-emerald-400/20 scale-105"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                {/* Active Progress Bar (horizontal at bottom) */}
                {active === idx && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-1 bg-emerald-400"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
