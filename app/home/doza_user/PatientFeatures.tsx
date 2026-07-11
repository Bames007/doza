"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Activity,
  Heart,
  Pill,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { PremiumCard, GrainOverlay } from "@/app/ui/Premium";

export default function PatientFeatures() {
  const [activeTab, setActiveTab] = useState<"today" | "week" | "month">(
    "today",
  );
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "today") return "week";
        if (prev === "week") return "month";
        return "today";
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTabClick = (tab: "today" | "week" | "month") => {
    setActiveTab(tab);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const mainFeatures = [
    {
      icon: Shield,
      title: "EMERGENCY ACCESS",
      desc: "First responders see your medical history instantly.",
      color: "#0086DB",
    },
    {
      icon: TrendingUp,
      title: "HEALTH TRACKING",
      desc: "See your heart rate, steps, and sleep trends.",
      color: "#2BB14B",
    },
    {
      icon: Users,
      title: "FAMILY CARE",
      desc: "Manage health for parents, kids, and loved ones.",
      color: "#0086DB",
    },
    {
      icon: Award,
      title: "HEALTH REWARDS",
      desc: "Earn benefits for staying on track with your meds.",
      color: "#2BB14B",
    },
  ];

  const tabData = {
    today: {
      stats: [
        { icon: Activity, text: "Medication adherence", val: "98%" },
        { icon: Heart, text: "Heart rate (avg)", val: "72 bpm" },
        { icon: Pill, text: "On‑time doses", val: "100%" },
      ],
      graphLabel: "HEART RATE TODAY (BPM)",
      graphData: [72, 74, 71, 73, 78, 76, 75, 77, 74, 72],
      days: [
        "6am",
        "8am",
        "10am",
        "12pm",
        "2pm",
        "4pm",
        "6pm",
        "8pm",
        "10pm",
        "12am",
      ],
      trend: "▲ 2%",
      unit: "bpm",
    },
    week: {
      stats: [
        { icon: Activity, text: "Weekly adherence", val: "96%" },
        { icon: Heart, text: "Heart rate (weekly avg)", val: "74 bpm" },
        { icon: Pill, text: "Missed doses", val: "2" },
      ],
      graphLabel: "WEEKLY HEART RATE (BPM)",
      graphData: [68, 72, 71, 74, 78, 76, 75],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      trend: "▲ 4%",
      unit: "bpm",
    },
    month: {
      stats: [
        { icon: Activity, text: "Monthly adherence", val: "94%" },
        { icon: Heart, text: "Heart rate (monthly avg)", val: "73 bpm" },
        { icon: Pill, text: "Refills needed", val: "2" },
      ],
      graphLabel: "MONTHLY HEART RATE (BPM)",
      graphData: [70, 72, 71, 74, 73, 75, 74, 76, 75, 74, 73, 72],
      days: [
        "W1",
        "W2",
        "W3",
        "W4",
        "W5",
        "W6",
        "W7",
        "W8",
        "W9",
        "W10",
        "W11",
        "W12",
      ],
      trend: "▲ 3%",
      unit: "bpm",
    },
  };

  const current = tabData[activeTab];
  const maxValue = Math.max(...current.graphData, 80);

  return (
    <section className="relative py-24 lg:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
            >
              YOUR HEALTH,
              <br />
              <span className="text-emerald-600">IN YOUR HANDS</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            Doza brings together your records, daily tracking, and family care —
            so you always know where you stand.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Features */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {mainFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
                >
                  <feat.icon
                    size={24}
                    className="mb-4 transition-colors"
                    style={{ color: feat.color }}
                  />
                  <h3
                    className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={`text-xs text-slate-500 leading-snug ${poppins.className}`}
                  >
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 to-blue-100/30 blur-[100px] -z-10 rounded-full" />
            <PremiumCard className="relative overflow-hidden !p-0 border-white/40 bg-white/60 backdrop-blur-2xl shadow-2xl">
              <div className="p-6 sm:p-8 border-b border-slate-100 bg-white/40 flex justify-between items-center flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full bg-emerald-50 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Doza Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                    >
                      DOZA DASHBOARD
                    </h3>
                    <p
                      className={`text-[10px] font-bold text-emerald-600 tracking-[0.2em] uppercase ${poppins.className}`}
                    >
                      Your daily snapshot
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 bg-slate-100 rounded-full p-1">
                  {[
                    { id: "today", label: "Today" },
                    { id: "week", label: "Week" },
                    { id: "month", label: "Month" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id as typeof activeTab)}
                      className={`text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all ${
                        activeTab === tab.id
                          ? "bg-emerald-500 text-white shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      } ${poppins.className}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                {current.stats.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-50 shadow-sm group hover:border-emerald-200 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <item.icon size={18} />
                      </div>
                      <span
                        className={`text-sm font-medium text-slate-700 ${poppins.className}`}
                      >
                        {item.text}
                      </span>
                    </div>
                    <span
                      className={`text-lg font-bold text-emerald-600 ${bebasNeue.className}`}
                    >
                      {item.val}
                    </span>
                  </motion.div>
                ))}

                {/* Graph Section - FIXED */}
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
                  <GrainOverlay />
                  <div className="relative z-10">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p
                          className={`text-[10px] font-bold tracking-[0.2em] text-slate-400 ${poppins.className}`}
                        >
                          {current.graphLabel}
                        </p>
                        <p
                          className={`text-xs text-slate-400 mt-1 ${poppins.className}`}
                        >
                          {activeTab === "today"
                            ? "Hourly readings"
                            : activeTab === "week"
                              ? "Last 7 days"
                              : "Last 12 weeks"}
                        </p>
                      </div>
                      <span className="text-xs text-emerald-400">
                        {current.trend}
                      </span>
                    </div>

                    {/* Y-axis labels */}
                    <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                      <span>{maxValue}</span>
                      <span>{Math.round(maxValue * 0.66)}</span>
                      <span>{Math.round(maxValue * 0.33)}</span>
                      <span>0</span>
                    </div>

                    {/* Bar chart container with fixed height */}
                    <div className="relative h-32 flex items-end gap-1.5">
                      {current.graphData.map((value, i) => {
                        const heightPercent = (value / maxValue) * 100;
                        return (
                          <div
                            key={i}
                            className="flex-1 relative group/bar h-full"
                            onMouseEnter={() => setHoveredBar(i)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {/* The bar */}
                            <motion.div
                              initial={{ height: "0%" }}
                              animate={{ height: `${heightPercent}%` }}
                              transition={{
                                delay: i * 0.03,
                                duration: 0.6,
                                ease: "easeOut",
                              }}
                              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-emerald-400 to-emerald-500 rounded-t-md"
                              style={{ height: `${heightPercent}%` }}
                            />
                            {/* Tooltip */}
                            {hoveredBar === i && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-[9px] rounded whitespace-nowrap z-20 pointer-events-none">
                                {value} {current.unit}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* X-axis labels */}
                    <div className="flex justify-between mt-2 text-[8px] text-slate-400">
                      {current.days.map((day, i) => (
                        <span key={i} className="text-center flex-1 truncate">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p
                  className={`text-[10px] text-slate-400 text-center pt-2 ${poppins.className}`}
                >
                  *Data from your connected devices or manual entries • Auto
                  updates every 6 seconds
                </p>
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  );
}
