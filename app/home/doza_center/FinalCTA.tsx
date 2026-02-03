import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  MessageCircle,
  Shield,
  Clock,
  Zap,
  Star,
  CheckCircle,
} from "lucide-react";
import { bebasNeue, poppins, colors } from "./constant";

const FinalCTA: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonHoverVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const iconHoverVariants: Variants = {
    rest: { x: 0 },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const guaranteeItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + ((i * 20) % 80)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star size={16} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-300 rounded-full"
            ></motion.div>
            <span
              className={`text-green-100 text-sm font-medium ${poppins.className}`}
            >
              LIMITED TIME OFFER
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight ${bebasNeue.className}`}
          >
            Ready to Transform Your
            <motion.span
              className="block text-green-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Healthcare Center?
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-xl text-green-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
          >
            Join hundreds of successful healthcare centers already using Doza.
            Start your free trial today and experience the future of healthcare
            management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12"
          >
            {/* Primary Button */}
            <motion.button
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg bg-white text-green-600 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto group"
              style={{
                backgroundColor: "white",
                color: colors.green?.primary || "#059669",
              }}
            >
              <motion.div
                variants={iconHoverVariants}
                className="flex items-center gap-2 sm:gap-3"
              >
                <Rocket size={20} className="sm:w-6 sm:h-6" />
                <span>Start Free Trial</span>
                <ArrowRight
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.div>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-white text-white backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto group hover:bg-white/10 transition-colors duration-300"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              <span>Talk to Our Team</span>
            </motion.button>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-green-100 max-w-2xl mx-auto"
          >
            {[
              {
                icon: Shield,
                text: "No credit card required",
                subtext: "Start completely free",
              },
              {
                icon: Clock,
                text: "Setup in 24 hours",
                subtext: "Quick implementation",
              },
              {
                icon: Zap,
                text: "Free forever plan",
                subtext: "Always have a free option",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={guaranteeItemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-5 text-center group cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon size={24} className="text-green-200" />
                </motion.div>
                <h4
                  className={`font-semibold text-green-50 mb-1 ${poppins.className}`}
                >
                  {item.text}
                </h4>
                <p
                  className={`text-green-200 text-xs sm:text-sm ${poppins.className}`}
                >
                  {item.subtext}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-green-500/30"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-green-200">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-300" />
                <span className={`text-sm ${poppins.className}`}>
                  No setup fees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-300" />
                <span className={`text-sm ${poppins.className}`}>
                  Cancel anytime
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-300" />
                <span className={`text-sm ${poppins.className}`}>
                  24/7 Support
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
