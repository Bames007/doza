"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue'] tracking-[0.01rem]" };
const poppins = { className: "font-['Poppins']" };

export default function Contact() {
  return (
    <section className="bg-white py-20 md:py-32 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header – left heading + right description (consistent with other sections) */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold leading-[1.1] md:leading-[0.9] ${bebasNeue.className}`}
            >
              Let's <span className="text-emerald-500">talk</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            Questions? Ideas? We're here to help. Reach out any time.
          </p>
        </div>

        {/* Two‑column layout: contact methods + form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h3
                className={`text-2xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
              >
                Direct line
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 flex items-center justify-center">
                    <Phone size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <p
                      className={`text-xs text-slate-500 uppercase tracking-wider ${poppins.className}`}
                    >
                      Call or WhatsApp
                    </p>
                    <a
                      href="tel:+2348127728084"
                      className={`text-lg md:text-xl font-semibold text-slate-800 hover:text-emerald-600 transition-colors ${poppins.className}`}
                    >
                      0812 772 8084
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center">
                    <Mail size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <p
                      className={`text-xs text-slate-500 uppercase tracking-wider ${poppins.className}`}
                    >
                      Email us
                    </p>
                    <a
                      href="mailto:contact@dozamedic.com"
                      className={`text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors ${poppins.className}`}
                    >
                      contact@dozamedic.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 flex items-center justify-center">
                    <Clock size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <p
                      className={`text-xs text-slate-500 uppercase tracking-wider ${poppins.className}`}
                    >
                      Response time
                    </p>
                    <p
                      className={`text-base text-slate-800 ${poppins.className}`}
                    >
                      Within 24 hours, usually sooner
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h3
                className={`text-2xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
              >
                Office
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <MapPin size={22} className="text-slate-600" />
                </div>
                <div>
                  <p
                    className={`text-sm text-slate-600 leading-relaxed ${poppins.className}`}
                  >
                    EBCOM Technologies
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick message form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
          >
            <h3
              className={`text-2xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
            >
              Send a message
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  className={`block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 ${poppins.className}`}
                >
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                  placeholder="e.g., Dr. Sarah"
                />
              </div>
              <div>
                <label
                  className={`block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 ${poppins.className}`}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  className={`block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1 ${poppins.className}`}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-emerald-500 focus:outline-none transition-colors text-sm resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 group"
              >
                <span className={`text-sm ${poppins.className}`}>
                  Send message
                </span>
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
            <p
              className={`text-[10px] text-center text-slate-400 mt-4 ${poppins.className}`}
            >
              We'll never share your info. Protected by our privacy policy.
            </p>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="mt-20 md:mt-32 w-24 h-px bg-emerald-600/30 mx-auto" />
      </div>
    </section>
  );
}
