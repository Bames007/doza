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
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      text: "+234 812 772 8084",
      subtitle: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: Mail,
      text: "partnerships@doza.com",
      subtitle: "Typically replies within 2 hours",
    },
    {
      icon: MapPin,
      text: "Healthcare specialists available nationwide",
      subtitle: "Serving all 50 states",
    },
  ];

  const guarantees = [
    "30-minute personalized demo",
    "Free system assessment",
    "Custom implementation plan",
    "No obligation commitment",
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const formItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // Handle form submission here
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 md:space-y-8"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4"
              >
                <MessageCircle size={16} className="text-green-500" />
                <span
                  className={`text-green-600 text-sm font-medium ${poppins.className}`}
                >
                  Get Started Today
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight ${bebasNeue.className}`}
              >
                Ready to Transform
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
                >
                  Your Center?
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`text-base md:text-lg text-slate-600 leading-relaxed ${poppins.className}`}
              >
                Schedule a personalized demo with our healthcare specialists.
                See how Doza can streamline your operations, increase patient
                satisfaction, and grow your practice.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div variants={containerVariants} className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-slate-800 font-semibold ${poppins.className}`}
                    >
                      {item.text}
                    </p>
                    <p
                      className={`text-slate-500 text-sm mt-1 ${poppins.className}`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Guarantees */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`text-xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                What to Expect
              </motion.h3>
              <motion.div variants={containerVariants} className="space-y-3">
                {guarantees.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-500 flex-shrink-0"
                      />
                    </motion.div>
                    <span className={`text-slate-600 ${poppins.className}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Background Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full blur-2xl opacity-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500 rounded-full blur-2xl opacity-10"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200/50 backdrop-blur-sm relative z-10"
            >
              <motion.h3
                variants={formItemVariants}
                className={`text-2xl md:text-3xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
              >
                Schedule Your Demo
              </motion.h3>
              <motion.p
                variants={formItemVariants}
                className={`text-slate-600 mb-6 md:mb-8 ${poppins.className}`}
              >
                Fill out the form and we'll contact you within 24 hours
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Center Name */}
                <motion.div variants={formItemVariants}>
                  <label
                    className={`block text-slate-700 mb-2 font-medium ${poppins.className}`}
                  >
                    <Building size={16} className="inline mr-2" />
                    Center Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl text-gray-900 border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                    placeholder="Enter your center name"
                  />
                </motion.div>

                {/* Name and Phone */}
                <motion.div
                  variants={formItemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label
                      className={`block text-slate-700 mb-2 font-medium ${poppins.className}`}
                    >
                      <User size={16} className="inline mr-2" />
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      required
                      className="w-full px-4 py-3 text-gray-900 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-slate-700 mb-2 font-medium ${poppins.className}`}
                    >
                      <Phone size={16} className="inline mr-2" />
                      Phone Number
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      required
                      className="w-full px-4 py-3 text-gray-900 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={formItemVariants}>
                  <label
                    className={`block text-slate-700 mb-2 font-medium ${poppins.className}`}
                  >
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    required
                    className="w-full px-4 py-3 text-gray-900 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Center Type */}
                <motion.div variants={formItemVariants}>
                  <label
                    className={`block text-slate-700 mb-2 font-medium ${poppins.className}`}
                  >
                    Center Type
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 text-gray-900 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                  >
                    <option>Hospital</option>
                    <option>Clinic</option>
                    <option>Pharmacy</option>
                    <option>Eye Center</option>
                    <option>Laboratory</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </motion.select>
                </motion.div>

                {/* Current System */}
                <motion.div variants={formItemVariants}>
                  <label
                    className={`block text-slate-700 mb-2 font-medium ${poppins.className}`}
                  >
                    Current System (if any)
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    className="w-full px-4 py-3 text-gray-900 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                    placeholder="e.g., Epic, Cerner, Custom EMR"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={formItemVariants}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: isSubmitting
                      ? "#9CA3AF"
                      : "linear-gradient(135deg, #28B64C 0%, #10B981 100%)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Scheduling...
                    </>
                  ) : (
                    <>
                      <Calendar size={20} />
                      Schedule Free Demo
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>

              <motion.p
                variants={formItemVariants}
                className={`text-center text-slate-500 text-sm mt-4 ${poppins.className}`}
              >
                No credit card required • 100% free consultation
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
