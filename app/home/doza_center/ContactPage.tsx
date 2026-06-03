"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  MessageCircle,
  User,
  Building,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      text: "+234 812 772 8084",
      label: "Direct Line",
      color: "text-emerald-600",
    },
    {
      icon: Mail,
      text: "hello@doza.com",
      label: "General Inquiries",
      color: "text-blue-600",
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
      className={`py-20 md:py-32 bg-white relative overflow-hidden ${poppins.className}`}
    >
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="space-y-6"
            >
              <h2
                className={`text-6xl md:text-8xl font-bold text-slate-900 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
              >
                LET'S <br />
                <span className="text-emerald-600 italic">CONNECT.</span>
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                Have questions or need a customized solution? Our team is ready
                to assist with your requirements.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50/50"
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${item.color}`}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.text}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]"
          >
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h3
                  className={`text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                >
                  MESSAGE RECEIVED
                </h3>
                <p className="text-slate-500">
                  We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold text-sm underline hover:text-emerald-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name",
                      icon: User,
                      placeholder: "John Doe",
                      type: "text",
                    },
                    {
                      label: "Company/Clinic",
                      icon: Building,
                      placeholder: "Your Org",
                      type: "text",
                    },
                    {
                      label: "Email Address",
                      icon: Mail,
                      placeholder: "you@company.com",
                      type: "email",
                    },
                    {
                      label: "Phone Number",
                      icon: Phone,
                      placeholder: "+234...",
                      type: "tel",
                    },
                  ].map((field, i) => (
                    <div key={i} className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                        <field.icon size={12} className="text-emerald-600" />{" "}
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-slate-900"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                    <MessageCircle size={12} className="text-emerald-600" /> How
                    can we help?
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-slate-600 appearance-none">
                    <option>General Inquiry</option>
                    <option>Product Demo</option>
                    <option>Support</option>
                  </select>
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-base tracking-wide hover:bg-emerald-700 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "SENDING..."
                  ) : (
                    <>
                      SEND MESSAGE <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
