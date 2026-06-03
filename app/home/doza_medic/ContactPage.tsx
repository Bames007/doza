"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-32 text-[#1f2a1d]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header – matches your design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#336443]" />
            <span className="text-[11px] tracking-[0.3em] text-[#336443] uppercase font-['Poppins'] font-semibold">
              Get in touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Bebas_Neue'] leading-[1.1] text-[#1f2a1d] mb-4">
            Let's <span className="text-[#85AB8B] italic">talk</span>
          </h2>
          <p className="text-[#4b5b47] font-['Poppins'] text-lg leading-relaxed">
            Questions? Ideas? We're here to help. Reach out any time.
          </p>
        </motion.div>

        {/* Contact cards – two column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-black/5">
              <h3 className="text-2xl font-['Bebas_Neue'] mb-6">Direct line</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2AB04A]/10 flex items-center justify-center">
                    <Phone size={22} className="text-[#2AB04A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4b5b47] uppercase tracking-wider">
                      Call or WhatsApp
                    </p>
                    <a
                      href="tel:+2348127728084"
                      className="text-xl font-['Poppins'] font-semibold text-[#1f2a1d] hover:text-[#2AB04A] transition-colors"
                    >
                      0812 772 8084
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2E98ED]/10 flex items-center justify-center">
                    <Mail size={22} className="text-[#2E98ED]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4b5b47] uppercase tracking-wider">
                      Email us
                    </p>
                    <a
                      href="mailto:contact@dozamedic.com"
                      className="text-lg font-['Poppins'] font-medium text-[#1f2a1d] hover:text-[#2E98ED] transition-colors"
                    >
                      contact@dozamedic.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#336443]/10 flex items-center justify-center">
                    <Clock size={22} className="text-[#336443]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4b5b47] uppercase tracking-wider">
                      Response time
                    </p>
                    <p className="text-base font-['Poppins'] text-[#1f2a1d]">
                      Within 24 hours, usually sooner
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-black/5">
              <h3 className="text-2xl font-['Bebas_Neue'] mb-6">Office</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1f2a1d]/10 flex items-center justify-center">
                  <MapPin size={22} className="text-[#1f2a1d]" />
                </div>
                <div>
                  <p className="text-[#4b5b47] font-['Poppins'] text-sm leading-relaxed">
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
            className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-['Bebas_Neue'] mb-6">
              Send a message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4b5b47] font-['Poppins'] font-semibold mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAFA] focus:border-[#2AB04A] focus:outline-none transition-colors font-['Poppins'] text-sm"
                  placeholder="e.g., Dr. Sarah"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4b5b47] font-['Poppins'] font-semibold mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAFA] focus:border-[#2AB04A] focus:outline-none transition-colors font-['Poppins'] text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4b5b47] font-['Poppins'] font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAFA] focus:border-[#2AB04A] focus:outline-none transition-colors font-['Poppins'] text-sm resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#1f2a1d] hover:bg-[#336443] text-white font-['Poppins'] font-semibold py-3 rounded-xl transition-all duration-300 group"
              >
                <span>Send message</span>
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
            <p className="text-[10px] text-center text-[#4b5b47] mt-4 font-['Poppins']">
              We'll never share your info. Protected by our privacy policy.
            </p>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="mt-32 w-24 h-px bg-[#336443] mx-auto opacity-30" />
      </div>
    </section>
  );
}
