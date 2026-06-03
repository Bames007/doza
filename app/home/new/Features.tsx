"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Pill,
  Users,
  Activity,
  Globe,
  Calendar,
  Shield,
  Clock,
  Heart,
} from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

const features = [
  {
    id: "01",
    icon: Video,
    title: "Telemedicine",
    stat: "24/7",
    statLabel: "availability",
    longDesc:
      "Connect with specialists instantly, share records in real time, and never wait for an in‑person visit again. Encrypted, compliant, and built for trust.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
  },
  {
    id: "02",
    icon: Pill,
    title: "Digital Scripts",
    stat: "40%",
    statLabel: "fewer errors",
    longDesc:
      "Doctors create structured dosage plans; patients receive reminders and can mark doses as taken. Doctors are alerted if doses are missed – enabling timely intervention.",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070",
  },
  {
    id: "03",
    icon: Users,
    title: "Specialist Sync",
    stat: "instant",
    statLabel: "referrals",
    longDesc:
      "Share cases, images, and notes with any specialist in the Doza network. Get second opinions in hours, not weeks – all within the same secure platform.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
  },
  {
    id: "04",
    icon: Activity,
    title: "Health Trends",
    stat: "real-time",
    statLabel: "insights",
    longDesc:
      "Blood pressure, glucose, medication adherence – see trends over time. Predictive alerts help you act before small issues become emergencies.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  },
  {
    id: "05",
    icon: Globe,
    title: "Center Flow",
    stat: "35%",
    statLabel: "shorter waits",
    longDesc:
      "Doza Center connects your legacy EMR, lab systems, and billing software – no rip and replace. Real‑time patient flow, bed tracking, and discharge summaries.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070",
  },
  {
    id: "06",
    icon: Calendar,
    title: "Intelligent Booking",
    stat: "50%",
    statLabel: "less no-shows",
    longDesc:
      "Automated reminders, waitlist management, and smart rescheduling. Patients book in seconds; clinics fill every slot.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
  },
  {
    id: "07",
    icon: Shield,
    title: "Secure Records",
    stat: "100%",
    statLabel: "encrypted",
    longDesc:
      "Your health data is yours. End‑to‑end encryption, granular consent controls, and full audit trails.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
  },
  {
    id: "08",
    icon: Clock,
    title: "Continuity",
    stat: "unbroken",
    statLabel: "history",
    longDesc:
      "Every consultation, prescription, lab result builds a continuous timeline. No more starting from scratch.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070",
  },
  {
    id: "09",
    icon: Heart,
    title: "Patient Portal",
    stat: "portable",
    statLabel: "identity",
    longDesc:
      "You control who sees what. Instantly grant access to new providers – your history travels with you.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const current = features[selectedIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasAnimated(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-32 text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
            >
              What we <br />
              <span className="text-emerald-600">Offer</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            Built for clinicians, patients, and centers – each tool solves a
            real problem, no fluff.
          </p>
        </div>

        {/* Two‑column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left sidebar – feature list */}
          <div className="lg:w-1/3">
            <div
              className="flex lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
              style={{ scrollbarWidth: "none" }}
            >
              {features.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`
                    group relative flex items-center gap-4 lg:gap-6 text-left transition-all duration-300 shrink-0 lg:shrink
                    ${selectedIndex === idx ? "opacity-100" : "opacity-60 hover:opacity-100"}
                  `}
                >
                  <span
                    className={`
                      text-3xl lg:text-4xl transition-colors ${bebasNeue.className}
                      ${selectedIndex === idx ? "text-emerald-600" : "text-slate-400 group-hover:text-emerald-500"}
                    `}
                  >
                    {feature.id}
                  </span>
                  <span
                    className={`text-xs lg:text-sm uppercase tracking-wider whitespace-nowrap lg:whitespace-normal ${poppins.className}`}
                  >
                    {feature.title}
                  </span>
                  {selectedIndex === idx && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute -left-4 lg:-left-6 w-1 h-8 lg:h-10 bg-emerald-500 rounded-r"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel – feature details */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left side content */}
                  <div className="order-2 md:order-1 space-y-6 md:space-y-8">
                    <h3
                      className={`text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-slate-900 ${bebasNeue.className}`}
                    >
                      {current.title}
                    </h3>
                    <p
                      className={`text-slate-600 leading-relaxed text-sm md:text-base ${poppins.className}`}
                    >
                      {current.longDesc}
                    </p>
                    <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
                      <div>
                        <div
                          className={`text-2xl md:text-3xl text-emerald-600 ${bebasNeue.className}`}
                        >
                          {current.stat}
                        </div>
                        <div
                          className={`text-[10px] uppercase tracking-widest text-slate-400 ${poppins.className}`}
                        >
                          {current.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="order-1 md:order-2 relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-slate-800 shadow-md group/image">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 border border-white flex items-center justify-center shadow-md">
                      <current.icon className="text-slate-800" size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-20 md:mt-32 w-24 h-px bg-emerald-600/30 mx-auto" />
      </div>
    </section>
  );
}
