"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Users,
  ArrowRight,
  Send,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    practice: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Line",
      contact: "+234 812 772 8084",
      hours: "24/7 Emergency Support",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Liaison",
      contact: "medics@doza.com",
      hours: "Response < 2 hours",
      gradient: "from-blue-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "Partner Chat",
      contact: "WhatsApp Support",
      hours: "Mon-Fri, 6AM-9PM",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`min-h-screen bg-white text-slate-900 selection:bg-green-100 ${poppins.className}`}
    >
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Support Active
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl font-bold tracking-tight text-slate-950 mb-6 ${bebasNeue.className}`}
          >
            LET’S BUILD THE <span className="text-green-600">FUTURE</span> OF
            CARE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're a solo practitioner or a multi-specialist clinic,
            we're here to streamline your operations and expand your reach.
          </motion.p>
        </div>
      </section>

      {/* Modern Contact Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group transition-all hover:bg-white hover:shadow-2xl hover:shadow-green-500/5"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-12 transition-transform`}
              >
                <method.icon size={28} />
              </div>
              <h3
                className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
              >
                {method.title}
              </h3>
              <p className="text-green-600 font-bold mb-1">{method.contact}</p>
              <p className="text-slate-400 text-sm font-medium">
                {method.hours}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Partnership Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200"
          >
            <div className="mb-10">
              <h2 className={`text-4xl font-bold mb-2 ${bebasNeue.className}`}>
                PARTNERSHIP INQUIRY
              </h2>
              <p className="text-slate-500">
                Fill out the form below and our onboarding specialist will
                contact you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup
                  label="Full Name"
                  name="name"
                  placeholder="Dr. Sarah Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputGroup
                  label="Medical Email"
                  name="email"
                  type="email"
                  placeholder="sarah@clinic.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                    Profession
                  </label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none appearance-none"
                  >
                    <option value="">Select Specialization</option>
                    <option value="doctor">Medical Doctor</option>
                    <option value="pharmacy">Pharmacist</option>
                    <option value="specialist">Therapist/Specialist</option>
                    <option value="admin">Clinic Administrator</option>
                  </select>
                </div>
                <InputGroup
                  label="Practice Name"
                  name="practice"
                  placeholder="Lagos Central Hospital"
                  value={formData.practice}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your practice goals..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="group w-full bg-slate-950 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Submit Partnership Request</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 size={120} />
              </div>

              <h3 className={`text-3xl font-bold mb-8 ${bebasNeue.className}`}>
                LOCAL HUBS
              </h3>

              <div className="space-y-8 relative z-10">
                <LocationItem city="Doza Abuja" address="Wuye, Abuja" />

                <hr className="border-white/10" />

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Clock
                      className="text-green-400 group-hover:text-white"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Response Time
                    </p>
                    <p className="font-semibold text-white">
                      Under 2 Hours (Standard)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-green-600 rounded-[2.5rem] p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-green-200" size={32} />
                <h4 className={`text-2xl font-bold ${bebasNeue.className}`}>
                  WHY PARTNER?
                </h4>
              </div>
              <ul className="space-y-3">
                {[
                  "NGN 0 Initial Investment",
                  "Advanced Telemedicine Tools",
                  "Unified Patient Records",
                  "Automated Revenue Share",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-300 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Helper Components ---

const InputGroup = ({ label, ...props }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
    />
  </div>
);

const LocationItem = ({ city, address }: { city: string; address: string }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <MapPin className="text-green-500" size={20} />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{city}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{address}</p>
    </div>
  </div>
);
