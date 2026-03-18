"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, Quote, Star } from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { SectionLabel } from "@/app/ui/Premium";
import Image from "next/image";

export default function PatientStories() {
  const stories = [
    {
      name: "Chinedu O.",
      condition: "Malaria Recovery",
      location: "Lagos",
      story:
        "Traffic used to be my biggest barrier to health. Doza didn't just find me a clinic; it found me time.",
      result: "65% Faster Care",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
      name: "Aisha B.",
      condition: "Prenatal Journey",
      location: "Kano",
      story:
        "As a first-time mother, anxiety was constant. Having my vitals monitored by specialists remotely gave me peace of mind.",
      result: "Zero Stress Birth",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=80",
    },
    {
      name: "Emeka N.",
      condition: "Hypertension",
      location: "Port Harcourt",
      story:
        "I wasn't just taking pills; I was tracking a transformation. My BP is now at athlete levels.",
      result: "120/80 Stable",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <SectionLabel text="Clinical Impact" />
            <h2
              className={`mt-6 text-6xl md:text-8xl font-bold text-slate-950 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
            >
              LIVES <span className="text-[#2BB14B]">IMPROVED</span>, <br />
              DATA <span className="text-[#0086DB]">VERIFIED</span>.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-1 text-[#2BB14B] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p
              className={`text-sm font-bold text-slate-400 tracking-widest uppercase ${poppins.className}`}
            >
              4.9/5 Average Patient Rating
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`relative group ${idx === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full bg-[#2BB14B] text-white text-[10px] font-bold uppercase tracking-widest mb-4 ${poppins.className}`}
                    >
                      {story.condition}
                    </span>
                    <h3
                      className={`text-4xl text-white font-bold mb-2 ${bebasNeue.className}`}
                    >
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                      <MapPin size={12} /> {story.location}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-4 -left-2 text-white/20 w-8 h-8" />
                    <p
                      className={`text-sm text-white/80 italic leading-relaxed mb-6 pl-4 ${poppins.className}`}
                    >
                      "{story.story}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 py-4 border-t border-white/10">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-[#2BB14B]">
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <p
                        className={`text-[10px] font-bold text-white/40 uppercase tracking-tighter ${poppins.className}`}
                      >
                        Outcome
                      </p>
                      <p
                        className={`text-sm font-bold text-white ${bebasNeue.className}`}
                      >
                        {story.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
