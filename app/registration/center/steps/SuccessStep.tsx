import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Clock,
  FileCheck,
  Calendar,
  Settings,
  Mail,
  Download,
  Share2,
  Building,
  User,
  ArrowLeft,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import Link from "next/link";

const SuccessStep: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      icon: FileCheck,
      title: "Document Verification",
      description:
        "We're reviewing your submitted documents and registration details",
      time: "1-2 business days",
      status: "pending",
    },
    {
      icon: Calendar,
      title: "Site Inspection",
      description: "Schedule a facility visit with our medical audit team",
      time: "3-5 business days",
      status: "upcoming",
    },
    {
      icon: CheckCircle,
      title: "Medical Board Approval",
      description: "Review by DOZA medical governing board",
      time: "24-48 hours after inspection",
      status: "upcoming",
    },
    {
      icon: Settings,
      title: "System Activation",
      description: "Full access to DOZA Medic platform and patient management",
      time: "Immediate after approval",
      status: "upcoming",
    },
  ];

  const handleDownloadReceipt = () => {
    // Implement download logic
    console.log("Download receipt");
  };

  const handleShare = () => {
    // Implement share logic
    console.log("Share registration");
  };

  // Mobile-friendly confetti with client-side only rendering
  const Confetti = () => {
    if (!isClient) return null;

    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 100),
              y: -50,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              y:
                (typeof window !== "undefined" ? window.innerHeight : 100) +
                100,
              scale: [0, 1, 0.8, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 py-4 px-3 sm:py-8 sm:px-4 relative overflow-hidden">
      {/* Enhanced Background Elements - Reduced size for mobile */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-lime-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Enhanced Confetti Effect */}
      <AnimatePresence>{showConfetti && <Confetti />}</AnimatePresence>

      {/* Back Button for Mobile */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-4 sm:mb-6"
      >
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-200 text-emerald-700 font-semibold hover:bg-white transition-all duration-300 shadow-lg"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Home</span>
          </motion.button>
        </Link>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden mb-6 sm:mb-8 border border-emerald-100"
        >
          {/* Header with Enhanced Gradient */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Success Icon - Smaller on mobile */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3,
              }}
              className="relative z-10"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 backdrop-blur-sm border-2 border-white/30 shadow-2xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <CheckCircle
                    size={28}
                    className="sm:w-10 sm:h-10 text-emerald-600"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Title & Description */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Welcome to DOZA
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed ${poppins.className} px-2`}
            >
              Your healthcare facility registration has been successfully
              submitted.
            </motion.p>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
            {/* Registration Summary - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              {[
                {
                  icon: Building,
                  label: "Reference ID",
                  value: "DOZA-#48392",
                  color: "emerald",
                },
                {
                  icon: Clock,
                  label: "Submitted",
                  value: "Just now",
                  color: "blue",
                },
                {
                  icon: Calendar,
                  label: "Est. Review",
                  value: "24-48 hrs",
                  color: "green",
                },
                {
                  icon: FileCheck,
                  label: "Status",
                  value: "Under Review",
                  color: "teal",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-br from-white to-emerald-50/50 p-4 sm:p-6 rounded-2xl border border-emerald-100 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                  >
                    <stat.icon
                      size={20}
                      className={`sm:w-6 sm:h-6 text-${stat.color}-600`}
                    />
                  </div>
                  <div
                    className={`text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                  <div
                    className={`text-gray-900 font-bold text-sm sm:text-base lg:text-lg ${bebasNeue.className}`}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
            >
              <motion.button
                onClick={handleDownloadReceipt}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span>Download Receipt</span>
              </motion.button>

              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border-2 border-emerald-200 text-emerald-700 rounded-2xl font-semibold hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 text-sm sm:text-base"
              >
                <Share2 size={18} className="sm:w-5 sm:h-5" />
                <span>Share Registration</span>
              </motion.button>
            </motion.div>

            {/* Next Steps Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center ${bebasNeue.className}`}
              >
                Verification Process
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.15 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-white to-emerald-50/30 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
                      <div
                        className={`p-3 sm:p-4 rounded-2xl ${
                          step.status === "pending"
                            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                            : "bg-gray-100 text-gray-400"
                        } transition-all duration-300 flex-shrink-0`}
                      >
                        <step.icon size={24} className="sm:w-7 sm:h-7" />
                      </div>

                      {/* Status badge - show on mobile only */}
                      <div className="sm:hidden">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            step.status === "pending"
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                              : "bg-gray-100 text-gray-500"
                          } ${poppins.className}`}
                        >
                          {step.status === "pending" ? "Current" : "Upcoming"}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                        <h4
                          className={`text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-0 ${bebasNeue.className} break-words`}
                        >
                          {step.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock size={16} className="sm:w-5 sm:h-5" />
                          <span
                            className={`text-xs sm:text-sm font-medium ${poppins.className}`}
                          >
                            {step.time}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`text-gray-600 leading-relaxed text-sm sm:text-base ${poppins.className} break-words`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Status badge - show on desktop only */}
                    <div className="hidden sm:block flex-shrink-0">
                      <div
                        className={`px-3 py-2 rounded-full text-sm font-semibold ${
                          step.status === "pending"
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                            : "bg-gray-100 text-gray-500"
                        } ${poppins.className}`}
                      >
                        {step.status === "pending"
                          ? "Current Step"
                          : "Upcoming"}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="bg-gradient-to-r from-emerald-50 to-green-50 border-t border-emerald-200 p-4 sm:p-6 lg:p-8 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-emerald-700 mb-3">
              <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span
                className={`text-sm sm:text-base lg:text-lg font-semibold ${poppins.className} break-words`}
              >
                Need assistance? Contact: support@dozamedic.com
              </span>
            </div>
            <p
              className={`text-emerald-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto ${poppins.className}`}
            >
              Our medical governing team will review your application and
              contact you within 24-48 hours. You'll receive detailed email
              updates at every stage.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 border border-emerald-100"
        >
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center ${bebasNeue.className}`}
          >
            Prepare for Your DOZA Journey
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Explore DOZA Features",
                description:
                  "Learn about our advanced medical management tools",
                action: "Platform Tour",
                color: "from-emerald-500 to-green-500",
                icon: Settings,
                href: "/features-tour",
              },
              {
                title: "Medical Community",
                description: "Connect with certified healthcare providers",
                action: "Join Network",
                color: "from-teal-500 to-cyan-500",
                icon: User,
                href: "/community-forum",
              },
              {
                title: "Training Resources",
                description: "Access medical protocols and guidelines",
                action: "View Resources",
                color: "from-lime-500 to-emerald-500",
                icon: FileCheck,
                href: "/tutorials-library",
              },
            ].map((resource, index) => (
              <Link key={resource.title} href={resource.href} passHref>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`bg-gradient-to-r ${resource.color} text-white p-4 sm:p-6 rounded-2xl text-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group h-full`}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm flex-shrink-0">
                      <resource.icon
                        size={24}
                        className="sm:w-8 sm:h-8 text-white"
                      />
                    </div>
                    <h4
                      className={`text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex-shrink-0 ${bebasNeue.className}`}
                    >
                      {resource.title}
                    </h4>
                    <p
                      className={`text-white/90 mb-4 text-xs sm:text-sm leading-relaxed flex-grow ${poppins.className}`}
                    >
                      {resource.description}
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-white hover:bg-white/30 transition-all duration-300 group-hover:scale-105 text-sm sm:text-base flex-shrink-0">
                      {resource.action}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Improve mobile touch targets */
        @media (max-width: 640px) {
          button,
          [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessStep;
