"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Image from "next/image";

export default function PatientStories() {
  const stories = [
    {
      id: 1,
      name: "Chinedu O.",
      condition: "Malaria Recovery",
      location: "Lagos, Nigeria",
      story:
        "Traffic used to be my biggest barrier to health. Doza didn't just find me a clinic; it found me time. I recovered in days, not weeks.",
      result: "65% Faster Recovery",
      metric: "3 days less in hospital",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
      id: 2,
      name: "Aisha B.",
      condition: "Prenatal Care",
      location: "Kano, Nigeria",
      story:
        "As a first-time mother, anxiety was constant. Having my vitals monitored remotely gave me peace of mind. My baby is healthy and I felt supported.",
      result: "Full term healthy delivery",
      metric: "40% less stress",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Emeka N.",
      condition: "Hypertension",
      location: "Port Harcourt",
      story:
        "I wasn't just taking pills; I was tracking a transformation. My BP is now at athlete levels, and I feel ten years younger.",
      result: "120/80 Stable",
      metric: "Stopped 1 medication",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    },
    {
      id: 4,
      name: "Fatima S.",
      condition: "Diabetes Type 2",
      location: "Abuja",
      story:
        "The medication reminders and diet tracking helped me lower my A1C from 9.2 to 6.5 in six months. I finally feel in control.",
      result: "A1C 6.5%",
      metric: "30% less medication",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => updateScrollButtons(), 200);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const handleScroll = () => {
    updateScrollButtons();
  };

  const totalRatings = stories.reduce((acc, s) => acc + s.rating, 0);
  const avgRating = (totalRatings / stories.length).toFixed(1);

  return (
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-white via-emerald-50/30 to-slate-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Two‑column header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-tight ${bebasNeue.className}`}
            >
              TRUSTED BY
              <br />
              <span className="text-emerald-600">THOUSANDS</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span
                className={`text-sm font-bold text-slate-600 ${poppins.className}`}
              >
                {avgRating} / 5
              </span>
            </div>
            <p
              className={`text-slate-500 font-medium text-base leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
            >
              Real stories from patients who took control of their health with
              Doza. No filters, just results.
            </p>
          </div>
        </div>

        {/* Horizontal scrollable cards */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg border border-slate-200 hover:bg-emerald-500 hover:text-white transition-all -translate-x-4 lg:-translate-x-6"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg border border-slate-200 hover:bg-emerald-500 hover:text-white transition-all translate-x-4 lg:translate-x-6"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-8"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#10b981 #e2e8f0",
              scrollSnapType: "x mandatory",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 6px;
              }
              div::-webkit-scrollbar-track {
                background: #e2e8f0;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb {
                background: #10b981;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: #059669;
              }
            `}</style>
            {stories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0 w-[350px] md:w-[400px] lg:w-[450px] scroll-snap-align-start"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider">
                        {story.condition}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className={`text-2xl font-bold text-slate-800 ${bebasNeue.className}`}
                        >
                          {story.name}
                        </h3>
                        <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                          <MapPin size={12} />
                          {story.location}
                        </div>
                      </div>
                      <div className="flex gap-0.5 text-yellow-500">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="currentColor"
                            stroke="none"
                          />
                        ))}
                        {[...Array(5 - story.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-slate-300" />
                        ))}
                      </div>
                    </div>

                    <div className="relative mb-4 flex-1">
                      <Quote className="absolute -top-2 -left-2 text-emerald-200 w-6 h-6" />
                      <p
                        className={`text-sm text-slate-600 italic pl-5 leading-relaxed ${poppins.className}`}
                      >
                        "{story.story}"
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p
                          className={`text-[9px] font-black uppercase tracking-wider text-emerald-600 ${poppins.className}`}
                        >
                          Clinical outcome
                        </p>
                        <p
                          className={`text-base font-bold text-slate-800 ${bebasNeue.className}`}
                        >
                          {story.result}
                        </p>
                      </div>
                      <div className="bg-emerald-50 rounded-full px-3 py-1">
                        <span
                          className={`text-[10px] font-bold text-emerald-700 ${poppins.className}`}
                        >
                          {story.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200">
          <div className="flex gap-8">
            <div>
              <div
                className={`text-3xl font-bold text-emerald-600 ${bebasNeue.className}`}
              >
                98%
              </div>
              <div
                className={`text-[10px] text-slate-500 uppercase tracking-wide ${poppins.className}`}
              >
                Would recommend
              </div>
            </div>
            <div>
              <div
                className={`text-3xl font-bold text-emerald-600 ${bebasNeue.className}`}
              >
                2k+
              </div>
              <div
                className={`text-[10px] text-slate-500 uppercase tracking-wide ${poppins.className}`}
              >
                Active patients
              </div>
            </div>
            <div>
              <div
                className={`text-3xl font-bold text-emerald-600 ${bebasNeue.className}`}
              >
                4.9
              </div>
              <div
                className={`text-[10px] text-slate-500 uppercase tracking-wide ${poppins.className}`}
              >
                People's rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
