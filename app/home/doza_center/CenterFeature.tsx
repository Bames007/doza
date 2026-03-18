"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  CheckCircle,
  Brain,
  Cloud,
  BarChart3,
  Globe,
  Cpu,
  Zap,
  ArrowRight,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import { Feature } from "./type";

const CenterFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const features: Feature[] = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms providing deep insights into patient flow and operational bottlenecks.",
      benefits: [
        "Predictive Volume",
        "Resource Optimization",
        "Revenue Forecasting",
        "Efficiency Scoring",
      ],
    },
    {
      icon: Cloud,
      title: "Free EMR Systems",
      description:
        "A comprehensive Electronic Medical Records cloud suite at zero cost, built for speed and security.",
      benefits: [
        "Zero Upfront Cost",
        "Cloud Backup",
        "Instant Migration",
        "Custom Templates",
      ],
    },
    {
      icon: BarChart3,
      title: "Inventory Intelligence",
      description:
        "Real-time stock tracking with predictive ordering to ensure your pharmacy or lab never runs dry.",
      benefits: [
        "Auto-Reordering",
        "Waste Tracking",
        "Supplier Sync",
        "Profit Tracking",
      ],
    },
    {
      icon: Globe,
      title: "Geo-Intelligence",
      description:
        "Connect with patients in your immediate vicinity through our high-intent routing network.",
      benefits: [
        "Local Matching",
        "Emergency Routing",
        "Market Analysis",
        "Density Mapping",
      ],
    },
    {
      icon: Cpu,
      title: "Vitals Monitoring",
      description:
        "Remote patient monitoring tools that alert your staff the moment a patient's vitals cross a threshold.",
      benefits: [
        "Remote Tracking",
        "Smart Alerts",
        "Live Progress",
        "Care Workflows",
      ],
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "An integrated emergency trigger system that connects you to ambulances and blood banks instantly.",
      benefits: [
        "1-Tap Dispatch",
        "Real-time Tracking",
        "Trauma Records",
        "Priority Comms",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      id="features"
      className={`py-32 bg-white relative overflow-hidden ${poppins.className}`}
      ref={containerRef}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-12 bg-[#2BB14B]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#2BB14B]">
                Technological Superiority
              </span>
            </motion.div>

            <h2
              className={`text-6xl md:text-9xl font-bold text-slate-900 leading-[0.8] ${bebasNeue.className}`}
            >
              ENGINEERED FOR <br />
              <span className="text-[#2BB14B] italic">PRECISION</span> CARE
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed pb-2">
            Eliminate operational manual labor with our suite of clinical
            intelligence tools designed for the 2026 healthcare landscape.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-10 rounded-[3.5rem] bg-slate-50/50 border border-slate-200/60 hover:border-[#2BB14B]/40 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(43,177,75,0.1)]"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem]" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#2BB14B] group-hover:bg-[#2BB14B] group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm mb-8">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>

                <h3
                  className={`text-4xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={10} className="text-[#2BB14B]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 md:p-24 rounded-[4rem] bg-slate-950 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 flex flex-col items-center">
            <h3
              className={`text-5xl md:text-8xl text-white mb-8 leading-none ${bebasNeue.className}`}
            >
              TRANSCEND THE <br />{" "}
              <span className="text-[#2BB14B]">ORDINARY CLINIC</span>
            </h3>
            <p className="text-slate-400 max-w-xl mb-12 text-lg font-medium">
              Join 2,000+ facilities already using our 2026 infrastructure to
              automate their future.
            </p>
            <button className="group relative flex items-center gap-4 px-12 py-6 bg-[#2BB14B] text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-emerald-900/20">
              GET STARTED NOW
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Advanced background decorative patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2BB14B]/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CenterFeatures;
