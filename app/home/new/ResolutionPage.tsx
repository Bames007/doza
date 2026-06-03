"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[#FAFBFC] snap-start text-center px-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl md:text-8xl font-bold text-slate-900 mb-10">
          Ready to start?
        </h2>
        <button className="px-12 py-5 bg-[#2AB04A] hover:bg-[#259d42] text-white rounded-full text-lg font-semibold shadow-xl transition-transform hover:scale-105">
          Join the Doza Ecosystem
        </button>
        <p className="mt-8 text-slate-400">
          Clinical precision. Human-centered care.
        </p>
      </motion.div>
    </section>
  );
}
