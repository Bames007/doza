"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Building,
  ShieldCheck,
  MessageCircle,
  Stethoscope,
  Hospital,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "patient", // patient, medic, center
  });

  const whatsappNumber = "2348127728084"; // Without + for URL

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // User type label
    const userTypeLabel =
      formData.userType === "patient"
        ? "Patient"
        : formData.userType === "medic"
          ? "Medical Professional"
          : "Healthcare Center";

    // Build WhatsApp message
    const message = `*New message from Doza contact form*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*User Type:* ${userTypeLabel}%0A*Subject:* ${formData.subject || "(Not specified)"}%0A*Message:*%0A${formData.message}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/20 to-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Two‑column header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-tight ${bebasNeue.className}`}
            >
              WE'RE HERE
              <br />
              <span className="text-emerald-600">TO HELP</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p
              className={`text-slate-500 font-medium text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500 pl-4 sm:pl-6 ${poppins.className}`}
            >
              Whether you're a patient, medic, or healthcare center, our team is
              ready 24/7. Reach out any way you prefer.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left side – contact methods + WhatsApp direct */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Phone,
                  label: "Call us",
                  value: "+234 812 772 8084",
                  action: "tel:+2348127728084",
                  color: "emerald",
                },
                {
                  icon: Mail,
                  label: "Email us",
                  value: "care@dozamedic.com",
                  action: "mailto:care@dozamedic.com",
                  color: "blue",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+234 812 772 8084",
                  action: "https://wa.me/2348127728084",
                  color: "green",
                },
                {
                  icon: Clock,
                  label: "Support hours",
                  value: "24/7 / 365",
                  action: null,
                  color: "purple",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.action || "#"}
                  target={
                    item.action?.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.action?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group block p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all ${
                    !item.action ? "cursor-default" : "hover:border-emerald-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 ${
                        item.color === "emerald"
                          ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                          : item.color === "blue"
                            ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                            : item.color === "green"
                              ? "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white"
                              : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ${poppins.className}`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-base font-bold text-slate-800 ${bebasNeue.className}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 pt-4">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span
                className={`text-[11px] font-bold text-slate-500 uppercase tracking-wider ${poppins.className}`}
              >
                HIPAA & GDPR compliant • Encrypted
              </span>
            </div>
          </div>

          {/* Right side – contact form (sends to WhatsApp) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-10 transition-all"
            >
              <div className="mb-8">
                <h3
                  className={`text-3xl md:text-4xl font-bold text-slate-800 ${bebasNeue.className}`}
                >
                  SEND US A MESSAGE
                </h3>
                <p
                  className={`text-sm text-slate-500 mt-2 ${poppins.className}`}
                >
                  Fill out the form and we'll reply via WhatsApp within minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User type toggle – three options */}
                <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-2xl w-full max-w-md">
                  {[
                    { id: "patient", label: "Patient", icon: User },
                    { id: "medic", label: "Medic", icon: Stethoscope },
                    { id: "center", label: "Center", icon: Hospital },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, userType: type.id })
                      }
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        formData.userType === type.id
                          ? "bg-white text-emerald-600 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <type.icon size={16} />
                      <span className={`${poppins.className}`}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Form fields */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className={`block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 ${poppins.className}`}
                    >
                      Full name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 ${poppins.className}`}
                    >
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 ${poppins.className}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 ${poppins.className}`}
                  >
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-5 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none"
                    placeholder="Describe your inquiry or request..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg tracking-wide hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span className={`${bebasNeue.className}`}>
                    SEND VIA WHATSAPP
                  </span>
                </button>

                <p
                  className={`text-[10px] text-slate-400 text-center ${poppins.className}`}
                >
                  Your message will be sent securely to our WhatsApp support.
                  We'll get back to you shortly.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
