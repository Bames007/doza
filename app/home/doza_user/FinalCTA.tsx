"use client";

import { motion } from "framer-motion";
import { ArrowRight, Video, Shield } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
};

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Header />
          <CTAButtons />
          <Guarantee />
        </motion.div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <>
      <h2
        className={`text-4xl sm:text-5xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
      >
        Ready to Take Control of Your{" "}
        <span style={{ color: colors.green.primary }}>Health Journey</span>?
      </h2>

      <p
        className={`text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
      >
        Join thousands of patients who have transformed their healthcare
        experience with Doza. Get started today—it's free to try, and your
        health is worth it.
      </p>
    </>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
      <button
        className="px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
        style={{ backgroundColor: colors.green.primary }}
      >
        Start Your Free Trial
        <ArrowRight size={20} />
      </button>
      <button className="px-8 py-4 rounded-xl font-semibold text-lg bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
        <Video size={20} />
        Watch Patient Stories
      </button>
    </div>
  );
}

function Guarantee() {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Shield size={24} style={{ color: colors.green.primary }} />
        <span className={`font-bold text-slate-800 ${bebasNeue.className}`}>
          Doza Guarantee
        </span>
      </div>
      <p className={`text-slate-600 ${poppins.className}`}>
        Love Doza in 30 days or get a full refund. Your health satisfaction is
        100% guaranteed.
      </p>
    </div>
  );
}
