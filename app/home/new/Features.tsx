"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
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

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
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
      className="bg-[#FAFAFA] py-32 text-[#1f2a1d] min-h-screen"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#336443]" />
            <span className="text-[11px] tracking-[0.3em] text-[#336443] uppercase font-['Poppins'] font-semibold">
              What we offer
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Bebas_Neue'] leading-[1.1] text-[#1f2a1d] mb-4">
            Features <span className="text-[#85AB8B] italic">For you</span>
          </h2>
          <p className="text-[#4b5b47] font-['Poppins'] text-lg leading-relaxed">
            Built for clinicians, patients, and centers each tool solves a real
            problem, no fluff.
          </p>
        </motion.div>

        {/* Two‑column layout */}
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left sidebar – interactive list */}
          <div className="md:col-span-3">
            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative flex items-center gap-6 text-left transition-all duration-300 ${
                    selectedIndex === idx
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`font-['Bebas_Neue'] text-4xl transition-colors ${
                      selectedIndex === idx
                        ? "text-[#336443]"
                        : "text-[#1f2a1d] group-hover:text-[#336443]"
                    }`}
                  >
                    {feature.id}
                  </span>
                  <span className="font-['Poppins'] text-sm uppercase tracking-widest">
                    {feature.title}
                  </span>
                  {selectedIndex === idx && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute -left-6 w-1 h-10 bg-[#2AB04A] rounded-r"
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

          {/* Right panel – solid card, no blur */}
          <div className="md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 md:p-16 shadow-xl rounded-[2rem] border border-black/5"
              >
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left side content */}
                  <div className="space-y-8">
                    <h3 className="text-5xl md:text-6xl font-['Bebas_Neue'] leading-[1.1] text-[#1f2a1d]">
                      {current.title}
                    </h3>
                    <p className="font-['Poppins'] text-[#4b5b47] leading-relaxed text-base">
                      {current.longDesc}
                    </p>
                    <div className="flex items-center gap-8 pt-8 border-t border-black/10">
                      <div>
                        <div className="text-3xl font-['Bebas_Neue'] text-[#336443]">
                          {current.stat}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-[#4b5b47]">
                          {current.statLabel}
                        </div>
                      </div>
                      <button className="group flex items-center gap-3 font-['Poppins'] text-sm uppercase font-bold text-[#1f2a1d] hover:text-[#336443] transition-all">
                        Explore
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Image container – solid overlay, no gradient */}
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#1f2a1d] shadow-xl group/image">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110"
                    />
                    {/* Solid overlay instead of gradient */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 border border-white flex items-center justify-center shadow-md">
                      <current.icon className="text-[#1f2a1d]" size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Solid bottom line – no gradient */}
        <div className="mt-32 w-24 h-px bg-[#336443] mx-auto opacity-30" />
      </div>
    </section>
  );
}
