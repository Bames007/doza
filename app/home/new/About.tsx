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

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

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
      className="bg-white py-20 sm:py-32 text-[#1f2a1d] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header – Our Driving Force */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.03em] ${bebasNeue.className}`}
            >
              OUR DRIVING <br />
              <span className="text-emerald-600">FORCE</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            We are moving from a reactive model of discrete visits to a
            proactive model of continuous, data informed companionship. Doza
            doesn't just manage records it connects outcomes.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl mb-20 sm:mb-32 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"
            alt="Modern medical facility"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Section A: The Challenge */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20 sm:mb-32">
          <div>
            <span
              className={`text-[10px] tracking-[0.3em] text-emerald-600 uppercase font-bold block mb-4 ${poppins.className}`}
            >
              The Challenge
            </span>
            <h3
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
            >
              THE ANATOMY OF A FRACTURE
            </h3>
            <p
              className={`text-slate-500 leading-relaxed mb-8 ${poppins.className}`}
            >
              Healthcare has evolved into a series of disconnected silos. Data
              lives in vaults, visits are recorded in isolation, and the patient
              is forced to become their own integrator.
            </p>
            <div className="space-y-3">
              {[
                "Fragmented Records",
                "Disconnected Care Paths",
                "Information Asymmetry",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 text-sm font-medium text-slate-600 ${poppins.className}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format"
              alt="Healthcare fragmentation"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Section B: The Three‑Sided Flow */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 border-t border-slate-200 pt-12 md:pt-16 mb-20 sm:mb-32">
          {[
            {
              icon: Activity,
              title: "Patient Thread",
              desc: "A singular, immutable timeline of health events.",
              stat: "100%",
              statLabel: "Continuity",
              color: "#2AB04A",
            },
            {
              icon: ShieldCheck,
              title: "Medic Logic",
              desc: "Admin‑free clinical workflows powered by intelligent triage.",
              stat: "60%",
              statLabel: "Less admin",
              color: "#2E98ED",
            },
            {
              icon: Database,
              title: "Center Alignment",
              desc: "Resource synchronization across the entire facility fabric.",
              stat: "35%",
              statLabel: "Shorter waits",
              color: "#2AB04A",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <item.icon
                className="text-emerald-600 mb-5 md:mb-6"
                size={32}
                strokeWidth={1.2}
              />
              <h3
                className={`text-2xl font-bold text-slate-900 mb-3 ${bebasNeue.className}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm text-slate-500 leading-relaxed mb-6 ${poppins.className}`}
              >
                {item.desc}
              </p>
              <div className="border-t border-slate-200 pt-4">
                <span
                  className={`text-3xl font-bold text-emerald-600 ${bebasNeue.className}`}
                >
                  {item.stat}
                </span>
                <span
                  className={`text-xs text-slate-400 ml-2 uppercase tracking-wide ${poppins.className}`}
                >
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section C: The Doza Experience */}
        <div className="mb-20 sm:mb-32">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01em] ${bebasNeue.className}`}
              >
                From Episodic to <br />
                <span className="text-emerald-600">Continous Care</span>
              </h2>
            </div>
            <p
              className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
            >
              Doza treats every moment of health as part of a seamless journey,
              so you can focus on living, not repeating.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Clock,
                title: "Healthcare Continuity",
                desc: "Every consultation, prescription, and lab result builds a lifelong timeline. No more fragmented care.",
                color: "#2AB04A",
              },
              {
                icon: FileText,
                title: "Digital Medical Identity",
                desc: "Your portable health profile share instantly with any doctor, anywhere, with your consent.",
                color: "#2E98ED",
              },
              {
                icon: AlertCircle,
                title: "Medication Adherence",
                desc: "Structured dosage plans with intelligent reminders. Doctors are alerted when doses are missed.",
                color: "#2AB04A",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h4
                  className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm text-slate-500 leading-relaxed ${poppins.className}`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section E: Closing Invitation */}
        <div className="mt-20 sm:mt-32 text-center">
          <div className="w-16 h-px bg-emerald-600/30 mx-auto mb-8" />
          <p
            className={`text-xl md:text-2xl font-light text-slate-500 max-w-3xl mx-auto italic leading-relaxed ${poppins.className}`}
          >
            “Doza threads every moment of your health into one seamless fabric
            so you can focus on living, not repeating.”
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-20 sm:mt-32 w-24 h-px bg-emerald-600/20 mx-auto" />
      </div>
    </section>
  );
}
