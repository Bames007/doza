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
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useState } from "react";

export default function ContactPage() {
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
      title: "Phone Support",
      description: "Speak directly with our medical professional support team",
      contact: "+234 812 772 8084",
      hours: "24/7 Emergency Support",
      color: "green",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses from our expert team",
      contact: "medics@doza.com",
      hours: "Response within 2 hours",
      color: "green",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with our support specialists",
      contact: "Start Chat Now",
      hours: "Mon-Fri, 6AM-9PM WAT",
      color: "green",
    },
  ];

  const supportAreas = [
    {
      title: "Onboarding & Setup",
      description: "Get your practice set up and running smoothly",
    },
    {
      title: "Technical Support",
      description: "Technical issues and platform questions",
    },
    {
      title: "Practice Partnership",
      description: "Maximize your practice growth and efficiency",
    },
    {
      title: "Professional Collaboration",
      description: "Connect with other healthcare professionals",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 overflow-x-hidden">
      {/* Header Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
          >
            Get In <span className="text-green-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Join our network of healthcare professionals. Contact us to learn
            about partnership opportunities and how Doza Medics can help grow
            your practice.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center bg-green-100">
                  <method.icon
                    size={24}
                    className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600"
                  />
                </div>
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 ${bebasNeue.className}`}
                >
                  {method.title}
                </h3>
                <p
                  className={`text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base ${poppins.className}`}
                >
                  {method.description}
                </p>
                <div className="font-semibold text-base sm:text-lg md:text-lg text-green-600 mb-1 sm:mb-2">
                  {method.contact}
                </div>
                <div
                  className={`text-slate-500 text-xs sm:text-sm ${poppins.className}`}
                >
                  {method.hours}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-slate-200"
            >
              <h2
                className={`text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
              >
                Partner With Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      className={`block text-slate-700 mb-2 text-sm sm:text-base ${poppins.className}`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 text-gray-900 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-slate-700 mb-2 text-sm sm:text-base ${poppins.className}`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 text-gray-900 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      className={`block text-slate-700 mb-2 text-sm sm:text-base ${poppins.className}`}
                    >
                      Profession *
                    </label>
                    <select
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      className="w-full px-3 text-gray-900 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select your profession</option>
                      <option value="doctor">Doctor/Physician</option>
                      <option value="nurse">Nurse/Nurse Practitioner</option>
                      <option value="nutritionist">
                        Nutritionist/Dietitian
                      </option>
                      <option value="therapist">Therapist/Specialist</option>
                      <option value="other">
                        Other Healthcare Professional
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      className={`block text-slate-700 mb-2 text-sm sm:text-base ${poppins.className}`}
                    >
                      Practice/Organization
                    </label>
                    <input
                      type="text"
                      name="practice"
                      value={formData.practice}
                      onChange={handleChange}
                      className="w-full px-3 text-gray-900 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your practice name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-slate-700 mb-2 text-sm sm:text-base ${poppins.className}`}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full text-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your practice and partnership interests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  <Send size={16} className="sm:w-5 sm:h-5" />
                  Send Partnership Request
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </button>

                <p
                  className={`text-slate-500 text-xs sm:text-sm text-center ${poppins.className}`}
                >
                  ✓ No upfront costs • Free partnership • Grow your practice
                </p>
              </form>
            </motion.div>

            {/* Contact Information & Support Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              {/* Office Information */}
              <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white">
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${bebasNeue.className}`}
                >
                  Our Locations
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin
                      size={20}
                      className="sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div
                        className={`font-semibold text-sm sm:text-base ${poppins.className}`}
                      >
                        Lagos Headquarters
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        123 Medical District, Victoria Island
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        Lagos, Nigeria
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin
                      size={20}
                      className="sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div
                        className={`font-semibold text-sm sm:text-base ${poppins.className}`}
                      >
                        Abuja Office
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        456 Healthcare Avenue, Maitama
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        Abuja, Nigeria
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <Clock
                      size={20}
                      className="sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div
                        className={`font-semibold text-sm sm:text-base ${poppins.className}`}
                      >
                        Support Hours
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        24/7 Emergency Technical Support
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        Business: Mon-Fri, 6AM-9PM WAT
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <Users
                      size={20}
                      className="sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div
                        className={`font-semibold text-sm sm:text-base ${poppins.className}`}
                      >
                        Partnership Benefits
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        No subscription fees • Free setup
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        Revenue sharing model
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Areas */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-slate-200">
                <h3
                  className={`text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
                >
                  Partnership Opportunities
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {supportAreas.map((area, index) => (
                    <div
                      key={area.title}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4
                          className={`font-semibold text-slate-900 text-sm sm:text-base ${poppins.className}`}
                        >
                          {area.title}
                        </h4>
                        <p
                          className={`text-slate-600 text-xs sm:text-sm ${poppins.className}`}
                        >
                          {area.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Banner */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 ${bebasNeue.className}`}
            >
              Free Partnership - Grow Your Practice
            </h2>
            <p
              className={`text-base sm:text-lg md:text-xl text-green-100 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Join Doza Medics at no cost. We invest in your success with our
              revenue-sharing model. No upfront fees, no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-lg bg-white text-green-600 hover:bg-slate-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3">
                <Phone size={18} className="sm:w-5 sm:h-5" />
                Call Partnership Team
                <ArrowRight size={16} className="sm:w-4 sm:h-4" />
              </button>
              <div className="text-white font-semibold text-sm sm:text-lg">
                +234 812 772 8084
              </div>
            </div>
            <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {[
                "No Setup Fees",
                "Free Training",
                "Revenue Share",
                "NGN 0 Upfront",
              ].map((benefit, index) => (
                <div
                  key={benefit}
                  className="bg-green-500/20 rounded-lg p-2 sm:p-3"
                >
                  <div className="text-white font-semibold text-xs sm:text-sm">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
