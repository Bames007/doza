"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Users } from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const FinalCTA: React.FC = () => {
  return (
    <section className={`py-32 bg-[#F8FAFC] relative ${poppins.className}`}>
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-12 md:p-20 rounded-[3rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] text-center relative overflow-hidden"
        >
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-10">
            <Sparkles size={14} className="text-emerald-600" />
            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">
              Join the future of medicine
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight ${bebasNeue.className}`}
          >
            READY TO ELEVATE <br />
            <span className="text-emerald-600 italic">YOUR OPERATIONS?</span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Transition your facility into a high-performance, modern ecosystem.
            Trusted by 2,000+ centers nationwide.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/registration/center">
              <button className="group relative px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center gap-3 shadow-lg shadow-emerald-600/20 active:scale-[0.98]">
                Get Started Now
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
            <button className="px-10 py-5 bg-slate-100 text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-all">
              Contact Sales
            </button>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Data",
                desc: "HL7 & HIPAA Ready",
              },
              { icon: Zap, title: "Rapid Deploy", desc: "Online in 14 Days" },
              {
                icon: Users,
                title: "Expert Support",
                desc: "24/7 Priority Access",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-emerald-600">
                  <item.icon size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
