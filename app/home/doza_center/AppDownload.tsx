"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Cloud, Monitor, Activity, Users } from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import Image from "next/image";

const AppDownload: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Monitor,
      title: "Omnichannel Command",
      desc: "Instant synchronization across tablet, desktop, and mobile.",
    },
    {
      icon: Shield,
      title: "Vault-Level Security",
      desc: "AES-256 military-grade encryption.",
    },
    {
      icon: Cloud,
      title: "Edge Sovereignty",
      desc: "Local speed with global redundancy.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-32 relative overflow-hidden bg-[#01100F] ${poppins.className}`}
    >
      {/* Background Glow - Reduced opacity on mobile to reduce noise */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-emerald-900/40 blur-[120px] md:blur-[200px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2
                className={`text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter ${bebasNeue.className}`}
              >
                CLINIC AT YOUR <br />
                <span className="text-[#2BB14B] italic">FINGERTIPS.</span>
              </h2>
              <p className="text-emerald-100/60 text-base md:text-lg max-w-lg leading-relaxed">
                Legacy software is a bottleneck. Doza is engineered for the
                high-pressure environment of modern healthcare—responsive,
                intuitive, and built for velocity.
              </p>
            </motion.div>

            {/* Feature List */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 bg-emerald-900/30 rounded-xl border border-emerald-500/20">
                    <item.icon className="text-[#2BB14B]" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                      {item.title}
                    </h4>
                    <p className="text-emerald-100/50 text-[11px] md:text-xs mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Interface Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            {/* The Device Frame */}
            <div className="relative z-10 rounded-[2rem] border border-white/10 bg-[#021817] p-2 md:p-3 shadow-2xl">
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/assets/images/dashboard screenshot.png"
                  alt="Doza Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01100F]/80 to-transparent" />
              </div>
            </div>

            {/* Floating Status Cards: 
                On Mobile: Stacked statically 
                On Desktop: Absolute Positioned 
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 lg:absolute lg:-bottom-12 lg:-left-12 lg:z-20 flex flex-col sm:flex-row gap-4 lg:gap-6 p-5 bg-[#01100F]/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl md:rounded-[2.5rem] shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2BB14B]/10 flex items-center justify-center shrink-0">
                  <Activity size={18} className="text-[#2BB14B]" />
                </div>
                <div>
                  <p className="text-[9px] text-emerald-100/50 uppercase tracking-widest font-bold">
                    Active Patients
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white font-mono">
                    1,204
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px bg-emerald-500/20" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-[9px] text-emerald-100/50 uppercase tracking-widest font-bold">
                    Team Online
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white font-mono">
                    84
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
