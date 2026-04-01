"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";
import { useState } from "react";
import { SectionLabel, PremiumCard } from "@/app/ui/Premium";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "user",
  });

  return (
    <section className="relative py-24 lg:py-32 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5">
            <SectionLabel text="Support Hub" />
            <h1
              className={`mt-6 text-6xl md:text-8xl font-bold text-slate-950 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
            >
              GLOBAL CARE. <br />
              <span className="text-[#0086DB]">PERSONAL TOUCH.</span>
            </h1>
            <p
              className={`mt-8 text-slate-500 text-lg leading-relaxed max-w-md ${poppins.className}`}
            >
              Whether you are a patient seeking care or a medical professional
              looking to join our network, we are 24/7.
            </p>

            <div className="mt-12 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "EMERGENCY HOTLINE",
                  val: "+234 812 772 8084",
                  color: "#EF4444",
                },
                {
                  icon: Mail,
                  label: "GENERAL SUPPORT",
                  val: "care@dozamedic.com",
                  color: "#0086DB",
                },
                {
                  icon: Clock,
                  label: "AVAILABILITY",
                  val: "24/7/365 Non-Stop",
                  color: "#2BB14B",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm group hover:border-[#0086DB]/30 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: `${item.color}10`,
                      color: item.color,
                    }}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p
                      className={`text-[10px] font-bold tracking-[0.2em] text-slate-400 ${poppins.className}`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`text-xl font-bold text-slate-900 ${bebasNeue.className}`}
                    >
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium Form */}
          <div className="lg:col-span-7 relative">
            <PremiumCard className="relative overflow-hidden !p-10 bg-white shadow-2xl rounded-[3rem]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-[#2BB14B] flex items-center justify-center text-white shadow-lg shadow-[#2BB14B]/20">
                  <Send size={20} />
                </div>
                <div>
                  <h2
                    className={`text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    SECURE MESSAGE PORTAL
                  </h2>
                  <p className={`text-xs text-slate-400 ${poppins.className}`}>
                    End-to-end encrypted communication
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {["user", "medic"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, userType: type })
                      }
                      className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all ${
                        formData.userType === type
                          ? "border-[#2BB14B] bg-[#2BB14B]/5 text-[#2BB14B]"
                          : "border-slate-100 text-slate-400"
                      }`}
                    >
                      {type === "user" ? (
                        <User size={18} />
                      ) : (
                        <Building size={18} />
                      )}
                      <span
                        className={`text-sm font-bold uppercase tracking-wider ${bebasNeue.className}`}
                      >
                        I AM A {type}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Full Name" placeholder="John Doe" />
                  <InputField
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>

                <InputField label="Subject" placeholder="How can we help?" />

                <div className="space-y-2">
                  <label
                    className={`text-[10px] font-bold tracking-widest text-slate-400 uppercase ml-4 ${poppins.className}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0086DB]/20 outline-none transition-all placeholder:text-slate-300"
                    placeholder="Describe your inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-6 bg-slate-950 text-white rounded-2xl font-bold text-xl tracking-widest hover:bg-[#2BB14B] transition-colors shadow-xl ${bebasNeue.className}`}
                >
                  DISPATCH MESSAGE
                </motion.button>

                <div className="flex justify-center items-center gap-2 text-slate-400">
                  <ShieldCheck size={14} />
                  <span
                    className={`text-[10px] font-medium ${poppins.className}`}
                  >
                    Your data is protected by AES-256 encryption
                  </span>
                </div>
              </form>
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label
        className={`text-[10px] font-bold tracking-widest text-slate-400 uppercase ml-4 ${poppins.className}`}
      >
        {label}
      </label>
      <input
        {...props}
        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0086DB]/20 outline-none transition-all placeholder:text-slate-300"
      />
    </div>
  );
}
