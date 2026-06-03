"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Database,
  Heart,
  Clock,
  FileText,
  AlertCircle,
  Network,
  Users,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function AboutDoza() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] py-32 text-[#1f2a1d] font-['Poppins'] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Navigation/Labeling System */}
        <div className="flex items-center gap-6 mb-24">
          <div className="h-px w-24 bg-[#336443]" />
          <span className="text-[10px] tracking-[0.3em] text-[#336443] uppercase font-bold">
            The Doza Protocol
          </span>
        </div>

        {/* Section A: The Problem (Architectural Layout) */}
        <div className="grid md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-4xl font-['Bebas_Neue'] text-[#1f2a1d] tracking-wide mb-8">
              THE ANATOMY OF A FRACTURE
            </h2>
            <p className="text-[#4b5b47] leading-relaxed mb-8">
              Healthcare has evolved into a series of disconnected silos. Data
              lives in vaults, visits are recorded in isolation, and the patient
              is forced to become their own integrator.
            </p>
            <div className="space-y-4">
              {[
                "Fragmented Records",
                "Disconnected Care Paths",
                "Information Asymmetry",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#85AB8B]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1c69?q=80&w=1000"
              alt="Medical abstraction"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Section B: The Three-Sided Flow (Data Grid) */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-[#336443]/20 mb-32">
          {[
            {
              icon: Activity,
              title: "Patient Thread",
              desc: "A singular, immutable timeline of health events.",
              stat: "100%",
              statLabel: "Continuity",
            },
            {
              icon: ShieldCheck,
              title: "Medic Logic",
              desc: "Admin‑free clinical workflows powered by intelligent triage.",
              stat: "60%",
              statLabel: "Less admin",
            },
            {
              icon: Database,
              title: "Center Alignment",
              desc: "Resource synchronization across the entire facility fabric.",
              stat: "35%",
              statLabel: "Shorter waits",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-12 border-r border-[#336443]/20 last:border-r-0 hover:bg-white transition-all duration-300 group"
            >
              <item.icon className="text-[#336443] mb-8" size={24} />
              <h3 className="text-xl font-['Bebas_Neue'] tracking-wide mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-[#4b5b47] leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="border-t border-[#336443]/10 pt-4">
                <span className="text-2xl font-bold text-[#336443]">
                  {item.stat}
                </span>
                <span className="text-xs text-[#4b5b47] ml-2">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section C: The Continuum (Three Core Benefits) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-[#336443] uppercase font-bold">
              The Doza Experience
            </span>
            <h2 className="text-5xl font-['Bebas_Neue'] text-[#1f2a1d] mt-4">
              From Episodic to Continuous Care
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Clock,
                title: "Healthcare Continuity",
                desc: "Every consultation, prescription, and lab result builds a lifelong timeline. No more fragmented care.",
                color: "#336443",
              },
              {
                icon: FileText,
                title: "Digital Medical Identity",
                desc: "Your portable health profile – share instantly with any doctor, anywhere, with your consent.",
                color: "#85AB8B",
              },
              {
                icon: AlertCircle,
                title: "Medication Adherence",
                desc: "Structured dosage plans with intelligent reminders. Doctors are alerted when doses are missed.",
                color: "#336443",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-['Bebas_Neue'] tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b5b47] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section D: The Network Effect (Magazine Pull Quote + Stats) */}
        <div className="mt-32 pt-32 border-t border-[#336443]/20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h3 className="text-5xl font-['Bebas_Neue'] leading-none text-[#1f2a1d] mb-6">
                A SYSTEM
                <br />
                THAT LEARNS
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Network size={18} className="text-[#336443]" />
                  <span className="text-sm">3‑sided network effect</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp size={18} className="text-[#336443]" />
                  <span className="text-sm">Exponential value per user</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-[#336443]" />
                  <span className="text-sm">Cross‑stakeholder alignment</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-light italic text-[#1f2a1d] mb-12 leading-relaxed">
                “We are moving from a reactive model of discrete visits to a
                proactive model of continuous, data‑informed companionship. Doza
                doesn't just manage records—it connects outcomes.”
              </p>
              <div className="flex flex-wrap gap-8 mb-12">
                {[
                  { value: "3‑sided", label: "Network effect" },
                  { value: "∞", label: "Shared intelligence" },
                  { value: "99%", label: "Retention rate" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#336443] pl-5">
                    <span className="text-3xl font-['Bebas_Neue'] text-[#336443]">
                      {stat.value}
                    </span>
                    <div className="text-[10px] uppercase tracking-widest text-[#4b5b47]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <button className="group flex items-center gap-4 text-[#336443] font-bold uppercase tracking-widest text-xs hover:gap-6 transition-all">
                The Network Topology <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Section E: Closing Invitation */}
        <div className="mt-40 text-center">
          <div className="w-16 h-px bg-[#336443]/40 mx-auto mb-8" />
          <p className="text-2xl font-light text-[#1f2a1d] max-w-3xl mx-auto italic leading-relaxed">
            “Doza threads every moment of your health into one seamless fabric –
            so you can focus on living, not repeating.”
          </p>
          <button className="mt-12 inline-flex items-center gap-2 px-8 py-3 bg-[#336443] text-white rounded-full text-sm font-semibold hover:bg-[#1f2a1d] transition-all group">
            Explore the Ecosystem
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
