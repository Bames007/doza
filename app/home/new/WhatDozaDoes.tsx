"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Pill,
  Ambulance,
  Calendar,
  Stethoscope,
  Users,
  Microscope,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    id: 1,
    problem:
      "You've been to multiple hospitals – each one says they can't treat you.",
    solution:
      "Doza connects you to the right center instantly. Search by specialty, location, or condition – no more running around.",
    icon: Building2,
    color: "#2AB04A",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    problem:
      "You've checked five pharmacies – none have the medication you need.",
    solution:
      "Real‑time inventory tracking across our network. Order and pick up – or get delivery – from the nearest provider.",
    icon: Pill,
    color: "#2E98ED",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 3,
    problem: "Emergency strikes – you don't know which ER is truly ready.",
    solution:
      "Live capacity data, specialty verification, and estimated wait times. One tap for ER alerts.",
    icon: Ambulance,
    color: "#2AB04A",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8c25d0a?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 4,
    problem:
      "You take multiple medications – you forget doses, or when you took what.",
    solution:
      "Smart tracking logs every dose, sends gentle reminders, and shares adherence data with your doctor.",
    icon: Calendar,
    color: "#2E98ED",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c6de5ec1?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 5,
    problem:
      "A doctor asks, 'When was your last malaria treatment?' – you have no idea.",
    solution:
      "A lifelong, secure timeline of every prescription and lab result. Instantly shareable, infinitely accessible.",
    icon: Stethoscope,
    color: "#2AB04A",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 6,
    problem:
      "You want to stay healthy with friends – but nobody's tracking together.",
    solution:
      "Create private wellness circles. Share goals, intake, and streaks to keep each other accountable.",
    icon: Users,
    color: "#2E98ED",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 7,
    problem:
      "You need a specialist urgently – but appointments are weeks away.",
    solution:
      "Telepresence and remote specialist consultations within hours, not weeks, directly from your device.",
    icon: Microscope,
    color: "#2AB04A",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 8,
    problem:
      "You need a lab test or imaging – no idea where to go or how long it'll take.",
    solution:
      "A comprehensive directory for imaging and labs. Book, view wait times, and receive results digitally.",
    icon: Building2,
    color: "#2E98ED",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 9,
    problem:
      "Every new doctor asks for your history – you repeat yourself endlessly.",
    solution:
      "You own your EMR. Grant secure, time‑limited access to any provider to see your full story instantly.",
    icon: FileText,
    color: "#2AB04A",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
  },
];

export default function WhatDozaDoes() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelDelta = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // Safety check: if slides is empty or currentSlide undefined, return null
  if (!slides.length) return null;
  const currentSlide = slides[index];
  if (!currentSlide) return null;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    if (index < slides.length - 1) {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, index]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    if (index > 0) {
      setIsTransitioning(true);
      setIndex((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, index]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentIdx = indexRef.current;
      if (currentIdx === slides.length - 1 && e.deltaY > 0) return;
      if (currentIdx === 0 && e.deltaY < 0) return;
      e.preventDefault();
      if (isTransitioning) return;
      wheelDelta.current += e.deltaY;
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(() => (wheelDelta.current = 0), 150);
      if (Math.abs(wheelDelta.current) > 40) {
        wheelDelta.current > 0 ? nextSlide() : prevSlide();
        wheelDelta.current = 0;
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [nextSlide, prevSlide, isTransitioning]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={currentSlide.img}
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 0% 50%, 
                rgba(10, 31, 10, 0.95) 0%, 
                rgba(20, 50, 20, 0.85) 25%, 
                rgba(30, 70, 30, 0.6) 50%, 
                rgba(50, 90, 50, 0.3) 75%, 
                transparent 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div
          className="h-full bg-[#2AB04A] transition-all duration-700"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full flex items-center justify-center px-6 md:px-12 relative z-10"
        >
          <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm"
                  style={{ backgroundColor: `${currentSlide.color}30` }}
                >
                  <currentSlide.icon
                    size={28}
                    style={{ color: currentSlide.color }}
                    strokeWidth={1.2}
                  />
                </div>
                <span className="text-[11px] tracking-[0.3em] text-white/80 uppercase font-['Poppins'] font-semibold">
                  The Problem
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-['Bebas_Neue'] leading-[1.2] text-white mb-6 drop-shadow-lg">
                {currentSlide.problem}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-5">
                  <CheckCircle
                    size={32}
                    className="text-[#2AB04A] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="text-[11px] tracking-[0.3em] text-[#2AB04A] uppercase font-['Poppins'] font-semibold block mb-4">
                      Doza Helps
                    </span>
                    <p className="text-white/90 font-['Poppins'] text-base md:text-lg leading-relaxed font-medium">
                      {currentSlide.solution}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-[#2AB04A] group/btn">
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Learn more
                      </span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="flex items-baseline gap-1 text-white/90">
          <span className="text-5xl font-['Bebas_Neue'] leading-none tracking-tighter">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-['Poppins'] text-white/40 mx-1">/</span>
          <span className="text-2xl font-['Bebas_Neue'] text-white/40">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
        <div className="w-12 h-px bg-[#2AB04A]/50 mt-2" />
      </div>

      {index < slides.length - 1 && (
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
          <span className="text-[9px] tracking-wider text-white/80 uppercase font-['Poppins'] font-medium">
            Scroll
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v10m0 0l-3-3m3 3 3-3"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
