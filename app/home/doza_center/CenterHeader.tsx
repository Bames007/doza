import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { bebasNeue, poppins, colors } from "./constant";
import Image from "next/image";

interface HeaderProps {
  onBack: () => void;
  currentExperience?: string;
}

export const CenterHeader: React.FC<HeaderProps> = ({
  onBack,
  currentExperience,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Image
                  alt="Doza Logo"
                  src={"/logo.png"}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>

              {/* Current Experience - Hidden on mobile */}
              {currentExperience && (
                <div className="hidden sm:block ml-2">
                  <span className="text-slate-400 mx-2">/</span>
                  <span
                    className={`text-slate-600 font-medium text-sm ${poppins.className}`}
                  >
                    {currentExperience}
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Navigation & Actions */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <nav className="flex items-center gap-4 lg:gap-6 mr-4 lg:mr-6">
                <a
                  href="#about"
                  className={`text-slate-700 hover:text-green-600 transition-colors font-medium text-sm ${poppins.className}`}
                >
                  About
                </a>
                <a
                  href="#benefits"
                  className={`text-slate-700 hover:text-green-600 transition-colors font-medium text-sm ${poppins.className}`}
                >
                  Benefits
                </a>
                <a
                  href="#features"
                  className={`text-slate-700 hover:text-green-600 transition-colors font-medium text-sm ${poppins.className}`}
                >
                  Features
                </a>
              </nav>

              {/* Change Experience Button */}
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group flex-shrink-0"
                style={{
                  borderColor: colors.green?.primary || "#10b981",
                  color: colors.green?.primary || "#10b981",
                }}
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
                <span
                  className={`font-medium text-xs sm:text-sm ${poppins.className} hidden sm:block`}
                >
                  Change Experience
                </span>
              </button>

              {/* Get Started Button */}
              <button
                className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm flex-shrink-0"
                style={{
                  backgroundColor: colors.green?.primary || "#10b981",
                  color: "white",
                }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Navigation & Actions */}
            <div className="flex md:hidden items-center gap-2">
              {/* Change Experience Button - Mobile (Icon only) */}
              <button
                onClick={onBack}
                className="flex items-center justify-center p-2 rounded-full border-2 transition-all duration-300 hover:scale-105 group flex-shrink-0"
                style={{
                  borderColor: colors.green?.primary || "#10b981",
                  color: colors.green?.primary || "#10b981",
                }}
                aria-label="Go back"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 flex-shrink-0"
                style={{
                  borderColor: colors.green?.primary || "#10b981",
                  color: colors.green?.primary || "#10b981",
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Full Screen */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 md:hidden p-6"
        >
          {/* Header for Mobile Menu */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  alt="Doza Logo"
                  src={"/logo.png"}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div
                className={`text-xl font-bold text-slate-900 ${bebasNeue.className}`}
              >
                Menu
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: colors.green?.primary || "#10b981",
                color: colors.green?.primary || "#10b981",
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Current Experience in Mobile Menu */}
          {currentExperience && (
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className={`text-slate-600 text-sm ${poppins.className} mb-1`}>
                Currently viewing:
              </p>
              <p
                className={`font-semibold text-slate-900 ${poppins.className}`}
              >
                {currentExperience}
              </p>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-2 mb-8">
            {[
              { label: "About", href: "#about" },
              { label: "Benefits", href: "#benefits" },
              { label: "Features", href: "#features" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="block py-4 px-4 text-lg font-semibold text-slate-700 border-b border-gray-200 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="space-y-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-full px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 text-base flex items-center justify-center gap-3"
              style={{
                background: `linear-gradient(135deg, ${colors.green.primary}, ${colors.green.light})`,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              onClick={onBack}
              className="w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-base flex items-center justify-center gap-3 border-2"
              style={{
                borderColor: colors.green?.primary || "#10b981",
                color: colors.green?.primary || "#10b981",
              }}
            >
              <ArrowLeft size={18} />
              Change Experience
            </motion.button>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-200"
          >
            <p
              className={`text-center text-slate-600 text-sm ${poppins.className}`}
            >
              Need help?{" "}
              <a
                href="#contact"
                className="font-semibold text-blue-600 hover:text-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact our team
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
};
