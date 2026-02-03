import React from "react";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle,
  Building,
  Stethoscope,
  Pill,
  Eye,
  FlaskRound,
  Ambulance,
  Cloud,
  Brain,
  Network,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import { CenterType } from "./type";

const CenterAbout: React.FC = () => {
  const centerTypes: CenterType[] = [
    {
      icon: Building,
      title: "Hospitals",
      description:
        "Comprehensive hospital management with integrated departments and emergency response",
      features: [
        "Multi-department EMR",
        "Emergency coordination",
        "Staff management",
        "Resource allocation",
      ],
    },
    {
      icon: Stethoscope,
      title: "Clinics",
      description:
        "Streamlined clinic operations with patient management and appointment scheduling",
      features: [
        "Appointment scheduling",
        "Patient records",
        "Billing integration",
        "Telehealth ready",
      ],
    },
    {
      icon: Pill,
      title: "Pharmacies",
      description:
        "Advanced pharmacy management with inventory control and prescription tracking",
      features: [
        "Inventory management",
        "Prescription tracking",
        "Drug interactions",
        "Online ordering",
      ],
    },
    {
      icon: Eye,
      title: "Eye Centers",
      description:
        "Specialized solutions for ophthalmology practices and vision care centers",
      features: [
        "Vision test records",
        "Appointment management",
        "Equipment tracking",
        "Patient education",
      ],
    },
    {
      icon: FlaskRound,
      title: "Laboratories",
      description:
        "Efficient lab management with test tracking and result delivery systems",
      features: [
        "Test tracking",
        "Result delivery",
        "Quality control",
        "Equipment maintenance",
      ],
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "Rapid response coordination and emergency care management",
      features: [
        "Dispatch coordination",
        "Patient tracking",
        "Hospital integration",
        "Response analytics",
      ],
    },
  ];

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // const cardHoverVariants = {
  //   rest: {
  //     y: 0,
  //     scale: 1,
  //     transition: { duration: 0.3, ease: "easeInOut" },
  //   },
  //   hover: {
  //     y: -8,
  //     scale: 1.02,
  //     transition: { duration: 0.3, ease: "easeOut" },
  //   },
  // };

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-50px", // Starts animation slightly earlier
          }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
          >
            Built for Every
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Healthcare Facility
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className} px-2 sm:px-0`}
          >
            Doza Center provides specialized solutions for all types of
            healthcare providers, creating a unified network that enhances
            patient care and operational efficiency.
          </motion.p>
        </motion.div>

        {/* Center Types Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px", // Trigger animation earlier
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16"
        >
          {centerTypes.map((center) => (
            <motion.div
              key={center.title}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              whileInView="visible"
              viewport={{ once: true }}
              className="group p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-purple-200 transition-all duration-300 hover:shadow-xl"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl lg:rounded-2xl bg-purple-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <center.icon className="text-purple-600 w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>

              <h3
                className={`text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 ${bebasNeue.className}`}
              >
                {center.title}
              </h3>
              <p
                className={`text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base ${poppins.className}`}
              >
                {center.description}
              </p>

              <ul className="space-y-1.5 sm:space-y-2">
                {center.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle
                      size={14}
                      className="text-green-500 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <span
                      className={`text-xs sm:text-sm text-slate-600 ${poppins.className}`}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${bebasNeue.className}`}
              >
                Seamless Integration with Existing Systems
              </h3>
              <p
                className={`text-purple-100 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base ${poppins.className}`}
              >
                Already have an EMR? No problem. Doza integrates with your
                current systems to enhance functionality without disrupting your
                workflow. Our AI-powered platform works alongside your existing
                infrastructure.
              </p>
              <motion.div
                className="flex items-center gap-3 sm:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[Cloud, Brain, Network].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/20 p-2 sm:p-3 rounded-xl lg:rounded-2xl backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { label: "Integration Success", value: "99.9%" },
                { label: "Uptime Guarantee", value: "100%" },
                { label: "Data Migration", value: "Secure" },
                { label: "Setup Time", value: "<24h" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 p-3 sm:p-4 rounded-xl lg:rounded-2xl backdrop-blur-sm text-center"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transition: { duration: 0.2 },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`text-xl sm:text-2xl font-bold ${bebasNeue.className}`}
                  >
                    {item.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm text-purple-100 ${poppins.className} mt-1`}
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CenterAbout;
