"use client";

import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Download,
  Star,
  Shield,
  Users,
  Building,
  Clock,
  MessageCircle,
  Stethoscope,
  Calendar,
  FileText,
  Activity,
  Pill,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
  purple: { primary: "#8B5CF6", light: "#A78BFA", dark: "#7C3AED" },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-green-50/30 border-t border-slate-200/60 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200 rounded-full blur-3xl"
        />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <BrandSection />

          {/* Quick Links */}
          <QuickLinksSection />

          {/* Contact Info */}
          <ContactSection />

          {/* App Download */}
          <AppDownloadSection />
        </div>

        {/* Bottom Bar */}
        <BottomBar currentYear={currentYear} />
      </div>
    </footer>
  );
}

function BrandSection() {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-r from-white-600 to-green-200 flex items-center justify-center shadow-lg shadow-green-500/25"
        >
          <Image
            src="/logo.png"
            alt="Doza Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </motion.div>
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-4xl font-bold text-slate-900 ${bebasNeue.className}`}
          >
            Doza
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-green-600 text-sm font-medium ${poppins.className} flex items-center gap-1`}
          >
            <Sparkles size={12} className="text-green-500" />
            Healthcare Ecosystem
          </motion.p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className={`text-slate-600 mb-6 leading-relaxed ${poppins.className}`}
      >
        Transforming healthcare through innovative technology. Connecting
        patients, medical professionals, and facilities in one seamless
        ecosystem.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-6"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-2 text-slate-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-200/60 shadow-sm"
        >
          <Shield size={16} className="text-green-600" />
          <span className={`text-sm font-medium ${poppins.className}`}>
            HIPAA Compliant
          </span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-2 text-slate-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-200/60 shadow-sm"
        >
          <Users size={16} className="text-blue-600" />
          <span className={`text-sm font-medium ${poppins.className}`}>
            500K+ Users
          </span>
        </motion.div>
      </motion.div>

      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  const socialPlatforms = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-500 hover:text-white",
      bgColor: "text-blue-600",
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
      label: "X",
      color: "hover:bg-black hover:text-white",
      bgColor: "text-gray-900",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dozamedic?igsh=NndsMmF4N2JrNW41",
      label: "Instagram",
      color: "hover:bg-pink-500 hover:text-white",
      bgColor: "text-pink-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "text-blue-700",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:bg-red-600 hover:text-white",
      bgColor: "text-red-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <span
        className={`text-slate-600 text-sm font-medium ${poppins.className}`}
      >
        Follow us:
      </span>
      <div className="flex items-center gap-2">
        {socialPlatforms.map((platform, index) => (
          <motion.a
            key={platform.label}
            href={platform.href}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-9 h-9 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg ${platform.bgColor} ${platform.color}`}
            aria-label={platform.label}
          >
            <platform.icon />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

function QuickLinksSection() {
  const linkGroups = [
    {
      title: "For Patients",
      icon: Heart,
      color: "green",
      links: [
        { name: "Find Doctors", href: "/doctors", icon: Stethoscope },
        { name: "Book Appointments", href: "/book", icon: Calendar },
        { name: "Health Records", href: "/records", icon: FileText },
        { name: "Emergency Services", href: "/emergency", icon: Activity },
        { name: "Medication Management", href: "/medications", icon: Pill },
      ],
    },
    {
      title: "For Medics",
      icon: Users,
      color: "blue",
      links: [
        { name: "Join Our Network", href: "/medics/join", icon: User },
        { name: "Telehealth Platform", href: "/telehealth", icon: Video },
        { name: "Professional Resources", href: "/resources", icon: FileText },
        {
          name: "Continuing Education",
          href: "/education",
          icon: GraduationCap,
        },
        { name: "Medic Community", href: "/community", icon: Users },
      ],
    },
  ];

  return (
    <div className="lg:col-span-1">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-2xl font-bold text-slate-900 mb-8 ${bebasNeue.className}`}
      >
        Quick Links
      </motion.h3>
      <div className="space-y-8">
        {linkGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: `${
                    colors[group.color as keyof typeof colors].primary
                  }15`,
                  border: `2px solid ${
                    colors[group.color as keyof typeof colors].primary
                  }30`,
                }}
              >
                <group.icon
                  size={24}
                  style={{
                    color: colors[group.color as keyof typeof colors].primary,
                  }}
                />
              </motion.div>
              <h4
                className={`text-slate-800 font-bold text-lg ${bebasNeue.className}`}
              >
                {group.title}
              </h4>
            </div>
            <ul className="space-y-3">
              {group.links.map((link, linkIndex) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: groupIndex * 0.2 + linkIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className={`text-slate-600 hover:text-green-600 transition-all duration-300 flex items-center gap-3 group py-2 px-3 rounded-xl hover:bg-white/50 backdrop-blur-sm ${poppins.className}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-green-100 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <link.icon
                        size={16}
                        className="text-slate-500 group-hover:text-green-600 transition-colors"
                      />
                    </motion.div>
                    <span className="font-medium flex-1">{link.name}</span>
                    <ArrowRight
                      size={14}
                      className="text-slate-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Emergency Hotline",
      value: "+234 81 2772 8084 ",
      subtext: "24/7 Available",
      emergency: true,
    },
    {
      icon: Mail,
      label: "General Inquiries",
      value: "care@doza.com",
      subtext: "We reply within 2 hours",
      emergency: false,
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Wuye, Abuja, Nigeria",
      subtext: "Open directions",
      emergency: false,
    },
    {
      icon: MessageCircle,
      label: "Live Support",
      value: "Start Live Chat",
      subtext: "Available now",
      emergency: false,
    },
  ];

  return (
    <div className="lg:col-span-1">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-2xl font-bold text-slate-900 mb-8 ${bebasNeue.className}`}
      >
        Contact & Location
      </motion.h3>

      <div className="space-y-4 mb-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`flex items-start gap-3 group cursor-pointer p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
              item.emergency
                ? "bg-red-50/80 border border-red-200 hover:border-red-300 hover:shadow-lg"
                : "bg-white/50 border border-slate-200/60 hover:border-green-200 hover:shadow-lg"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-md ${
                item.emergency
                  ? "bg-red-100 text-red-600 group-hover:bg-red-200"
                  : "bg-green-100 text-green-600 group-hover:bg-green-200"
              }`}
            >
              <item.icon size={24} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`font-semibold text-slate-800 ${poppins.className}`}
                >
                  {item.label}
                </div>
                {item.emergency && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium flex items-center gap-1"
                  >
                    <Zap size={10} />
                    Emergency
                  </motion.span>
                )}
              </div>
              <div
                className={`font-medium mb-1 text-lg ${
                  item.emergency ? "text-red-600" : "text-green-600"
                } ${poppins.className}`}
              >
                {item.value}
              </div>
              <div className={`text-slate-500 text-sm ${poppins.className}`}>
                {item.subtext}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="p-4 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-green-600" />
            <span
              className={`font-semibold text-slate-800 ${poppins.className}`}
            >
              Our Location
            </span>
          </div>
        </div>
        <div className="relative h-48 bg-gradient-to-br from-blue-50/80 to-green-50/80">
          {/* Animated Map Placeholder */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-green-100/50 to-blue-100/50 bg-[length:200%_200%]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin size={32} className="text-green-600 mx-auto mb-2" />
              </motion.div>
              <div
                className={`text-slate-700 font-medium ${poppins.className}`}
              >
                Interactive Map
              </div>
              <div className={`text-slate-500 text-sm ${poppins.className}`}>
                123 Healthcare Ave
              </div>
            </div>
          </div>
          {/* Map overlay with action button */}
          <div className="absolute bottom-4 right-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 px-4 py-2 rounded-lg border border-slate-300/60 shadow-lg flex items-center gap-2 transition-all duration-300"
            >
              <Globe size={16} />
              <span className={`text-sm font-medium ${poppins.className}`}>
                View Map
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star size={18} className="text-yellow-500 fill-current" />
            </motion.div>
            <span
              className={`text-sm font-semibold text-slate-800 ${poppins.className}`}
            >
              4.9/5 Rating
            </span>
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-7 h-7 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-2 border-white shadow-md"
              />
            ))}
          </div>
        </div>
        <p className={`text-slate-600 text-sm ${poppins.className}`}>
          Trusted by 500,000+ patients and 10,000+ medical professionals
        </p>
      </motion.div>
    </div>
  );
}

function AppDownloadSection() {
  return (
    <div className="lg:col-span-1">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-2xl font-bold text-slate-900 mb-8 ${bebasNeue.className}`}
      >
        Get the App
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-green-600 via-green-500 to-blue-600 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full"
        />

        <div className="text-center mb-4 relative z-10">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 rounded-2xl bg-white/20 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20"
          >
            <Download size={32} className="text-white" />
          </motion.div>

          <h4 className={`text-2xl font-bold mb-2 ${bebasNeue.className}`}>
            Doza
          </h4>

          <p className={`text-green-100 mb-6 ${poppins.className}`}>
            Download our mobile app for better health management
          </p>
        </div>

        {/* App Store Badges */}
        <div className="space-y-3 relative z-10">
          <AppStoreButton
            platform="ios"
            title="Download on the"
            storeName="App Store"
          />
          <AppStoreButton
            platform="android"
            title="Get it on"
            storeName="Google Play"
          />
        </div>

        {/* App Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-2 gap-3 relative z-10"
        >
          {[
            { feature: "Health Tracking", icon: Activity },
            { feature: "Medication Reminders", icon: Pill },
            { feature: "Virtual Visits", icon: Video },
            { feature: "Emergency Help", icon: Shield },
          ].map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
            >
              <item.icon size={16} className="text-green-300" />
              <span
                className={`text-green-100 text-xs font-medium ${poppins.className}`}
              >
                {item.feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* QR Code Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/60 shadow-lg inline-block"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-36 h-36 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center mb-3 border border-slate-200/60 relative overflow-hidden"
          >
            {/* QR Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-4 gap-1 w-full h-full">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`bg-green-600 rounded-sm ${
                      i % 2 === 0 ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center relative z-10">
              <Smartphone size={32} className="text-green-600 mx-auto mb-2" />
              <div
                className={`text-sm text-slate-700 font-medium ${poppins.className}`}
              >
                Scan to Download
              </div>
            </div>
          </motion.div>
          <div
            className={`text-slate-500 text-sm ${poppins.className} flex items-center justify-center gap-1`}
          >
            <Crown size={14} className="text-yellow-500" />
            Quick mobile access
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function AppStoreButton({
  platform,
  title,
  storeName,
}: {
  platform: "ios" | "android";
  title: string;
  storeName: string;
}) {
  const PlatformIcon = platform === "ios" ? AppleIcon : PlayStoreIcon;

  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="block w-full bg-black/30 hover:bg-black/40 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 group border border-white/20 hover:border-white/40 shadow-lg"
    >
      <div className="flex items-center justify-center gap-4">
        <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
          <PlatformIcon />
        </motion.div>
        <div className="text-left">
          <div className={`text-white/80 text-xs ${poppins.className}`}>
            {title}
          </div>
          <div
            className={`text-white font-bold text-lg ${bebasNeue.className}`}
          >
            {storeName}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
    </svg>
  );
}

function BottomBar({ currentYear }: { currentYear: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 pt-8 border-t border-slate-300/60"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div
          className={`text-slate-600 text-sm ${poppins.className} flex items-center gap-2`}
        >
          <motion.span
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ©
          </motion.span>
          {currentYear} Doza Healthcare. All rights reserved.
        </div>

        {/* EBCom Technologies */}
        <div className="flex items-center gap-4">
          <div className={`text-slate-600 text-sm ${poppins.className}`}>
            Created by
          </div>
          <motion.a
            href="https://www.ebcomtechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 hover:bg-white backdrop-blur-sm transition-all duration-300 group border border-slate-300/60 shadow-lg hover:shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-r from-white-500 to-blue-200 flex items-center justify-center shadow-md"
            >
              <Image
                src="/assets/images/ebcom logo.png"
                alt="EBCom Technologies"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </motion.div>
            <span
              className={`font-semibold text-slate-800 ${poppins.className} group-hover:text-blue-600 transition-colors`}
            >
              EBCom Technologies
            </span>
          </motion.a>
        </div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          {[
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Security", href: "/security" },
            { name: "Compliance", href: "/compliance" },
          ].map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className={`text-slate-600 hover:text-green-600 transition-colors text-sm font-medium ${poppins.className} hover:underline`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Add missing icon components
const User = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Video = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const GraduationCap = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const Smartphone = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);
