"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  MessageCircle,
  User,
  Building,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      text: "+234 812 772 8084",
      subtitle: "Direct Deployment Line",
      color: "text-blue-500",
    },
    {
      icon: Mail,
      text: "partnerships@doza.com",
      subtitle: "Priority Institution Support",
      color: "text-emerald-500",
    },
    {
      icon: MapPin,
      text: "Abuja HQ, Nigeria",
      subtitle: "Nationwide Onboarding",
      color: "text-purple-500",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-32 bg-[#FDFDFD] relative overflow-hidden ${poppins.className}`}
    >
      {/* Dynamic Background Auras */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
              >
                <Zap size={14} className="text-emerald-500 fill-emerald-500" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">
                  Institutional Access
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className={`text-6xl md:text-8xl font-bold text-slate-900 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
              >
                UPGRADE YOUR <br />
                <span className="text-emerald-600 italic">OPERATIONS</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="mt-8 text-slate-500 text-lg leading-relaxed font-medium"
              >
                Our deployment team specializes in transitioning legacy centers
                to AI-first facilities in under 14 days.
              </motion.p>
            </div>

            {/* Premium Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-5 p-2 pr-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-tight">
                      {item.text}
                    </h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h5 className={`text-2xl font-bold ${bebasNeue.className}`}>
                    DOZA ENTERPRISE SHIELD
                  </h5>
                  <p className="text-xs text-slate-400 font-medium">
                    Data encryption & HL7 compliance guaranteed by default.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
            </div>
          </div>

          {/* Right Side: The Glass Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[4rem] border border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={40} />
                </div>
                <h3
                  className={`text-5xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                >
                  REQUEST RECEIVED
                </h3>
                <p className="text-slate-500 font-medium">
                  A deployment specialist will call you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-600 font-bold text-sm underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                      <Building size={12} className="text-emerald-500" /> Center
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. St. Davids Clinic"
                      className="w-full px-7 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                      <User size={12} className="text-emerald-500" /> Admin/MD
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. Surname"
                      className="w-full px-7 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                      <Mail size={12} className="text-emerald-500" /> Business
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="admin@center.com"
                      className="w-full px-7 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                      <Phone size={12} className="text-emerald-500" /> Phone
                      Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234..."
                      className="w-full px-7 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                    <MessageCircle size={12} className="text-emerald-500" /> How
                    can we help?
                  </label>
                  <select className="w-full px-7 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 outline-none transition-all font-medium text-slate-500 appearance-none">
                    <option>Institutional Demo Request</option>
                    <option>EMR Data Migration</option>
                    <option>Partnership Inquiry</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <button
                  disabled={isSubmitting}
                  className="group relative w-full py-6 rounded-[2.5rem] bg-emerald-600 overflow-hidden transition-all hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-900/20 disabled:opacity-70"
                >
                  <div className="relative z-10 flex items-center justify-center gap-4 text-white font-black text-lg tracking-wider">
                    {isSubmitting ? (
                      "PROCESSING..."
                    ) : (
                      <>
                        <Calendar size={22} />
                        BOOK CONSULTATION
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </div>
                  {/* Button gloss effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  No commitment required. 100% Secure.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
