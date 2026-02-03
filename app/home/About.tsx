"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Stethoscope,
  Users,
  Heart,
  Shield,
  Clock,
  Globe,
  Award,
  Star,
  UserCheck,
  Building,
  Zap,
  Pill,
  Ambulance,
  Play,
  Pause,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Type definitions
interface ColorVariant {
  primary: string;
  light: string;
  dark: string;
  gradient: string;
}

interface BackgroundColors {
  light: string;
  medium: string;
  dark: string;
}

interface Colors {
  green: ColorVariant;
  blue: ColorVariant;
  background: BackgroundColors;
}

interface HealthcareFeature {
  icon: React.ComponentType<any>;
  text: string;
}

interface HealthcareExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  features: HealthcareFeature[];
  cta: string;
  color: "green" | "blue";
}

interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface ContactInfo {
  icon: React.ComponentType<any>;
  text: string;
  subtext: string;
}

export default function ModernDozaExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Enhanced color palette with proper typing
  const colors: Colors = {
    green: {
      primary: "#239C3E",
      light: "#4CAF50",
      dark: "#1B7930",
      gradient: "linear-gradient(135deg, #239C3E 0%, #4CAF50 100%)",
    },
    blue: {
      primary: "#1D4ED8",
      light: "#3B82F6",
      dark: "#1E40AF",
      gradient: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
    },
    background: {
      light: "#F8FAFC",
      medium: "#F1F5F9",
      dark: "#0F172A",
    },
  };

  // Helper function to safely get color variants
  const getColorVariant = (color: "green" | "blue"): ColorVariant => {
    return colors[color];
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced animations
      gsap.utils.toArray(".scroll-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Enhanced floating animations
      gsap.to(".float-1", {
        y: -30,
        rotation: 5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-2", {
        y: 25,
        rotation: -4,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const healthcareExperience: HealthcareExperience[] = [
    {
      id: "medics",
      title: "Doza Medics",
      description:
        "Join our network of verified healthcare professionals with advanced tools and resources to elevate your practice.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { icon: Zap, text: "Digital Practice Management" },
        { icon: Globe, text: "Telehealth Integration" },
        { icon: Award, text: "Continuing Education" },
        { icon: Users, text: "Professional Community" },
      ],
      cta: "Join Our Network",
      color: "blue",
    },
    {
      id: "patients",
      title: "Doza Patients",
      description:
        "Your personalized healthcare journey with 24/7 access to medical professionals and comprehensive health management.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { icon: Clock, text: "24/7 Virtual Consultations" },
        { icon: Heart, text: "Personal Health Dashboard" },
        { icon: Pill, text: "Medication Management" },
        { icon: Ambulance, text: "Emergency Services" },
      ],
      cta: "Start Your Journey",
      color: "green",
    },
    {
      id: "centers",
      title: "Doza Centers",
      description:
        "State-of-the-art medical facilities equipped with cutting-edge technology and expert medical teams.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { icon: Shield, text: "Advanced Diagnostics" },
        { icon: Stethoscope, text: "Specialized Treatments" },
        { icon: Building, text: "Comfortable Environment" },
        { icon: UserCheck, text: "Expert Medical Teams" },
      ],
      cta: "Find a Center",
      color: "blue",
    },
  ];

  const stats: StatItem[] = [
    { number: "10,000+", label: "Verified Medics", icon: UserCheck },
    { number: "500K+", label: "Patients Served", icon: Heart },
    { number: "200+", label: "Care Centers", icon: Building },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      text: "+1 (555) 123-HEAL",
      subtext: "24/7 Support",
    },
    {
      icon: Mail,
      text: "care@doza.com",
      subtext: "Quick Response",
    },
    {
      icon: MapPin,
      text: "Nationwide Coverage",
      subtext: "200+ Locations",
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onClick={toggleVideoPlayback}
        >
          <source src="/assets/video/doza-video.mp4" type="video/mp4" />
        </video>

        {/* Enhanced Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.green.primary}30 0%, ${colors.blue.primary}30 100%)`,
          }}
        />

        {/* Video Control */}
        <button
          onClick={toggleVideoPlayback}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2 rounded-full bg-white/90 px-4 py-3 text-slate-800 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
        >
          {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span className={`text-sm font-medium ${poppins.className}`}>
            {isVideoPlaying ? "Pause" : "Play"}
          </span>
        </button>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-6xl px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`mb-6 text-7xl md:text-9xl font-bold tracking-tight ${bebasNeue.className}`}
            >
              The Future of
              <span
                className="block bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${colors.green.light} 50%, ${colors.blue.light} 100%)`,
                }}
              >
                Healthcare
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`mb-12 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed ${poppins.className} text-white/90`}
            >
              Experience seamless healthcare through our integrated ecosystem of
              medics, patients, and advanced care centers. Better care, powered
              by technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button
                className="group px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                style={{ background: colors.green.gradient }}
              >
                Find Care Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="group px-10 py-5 rounded-2xl font-semibold text-lg bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-2xl">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span
              className={`text-sm text-white/90 font-medium ${poppins.className}`}
            >
              Discover Doza
            </span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
                style={{ background: colors.green.gradient }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="scroll-section py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl mb-4 text-slate-900 ${bebasNeue.className}`}
            >
              Trusted Healthcare{" "}
              <span style={{ color: colors.green.primary }}>Network</span>
            </h2>
            <p
              className={`text-lg text-slate-600 max-w-2xl mx-auto ${poppins.className}`}
            >
              Join thousands of healthcare professionals and patients who trust
              Doza for exceptional care
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: colors.green.gradient,
                    boxShadow: `0 10px 30px ${colors.green.primary}30`,
                  }}
                >
                  <stat.icon size={36} className="text-white" />
                </div>
                <div
                  className={`text-4xl md:text-5xl font-bold mb-3 ${bebasNeue.className}`}
                  style={{ color: colors.green.primary }}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-slate-600 font-medium ${poppins.className}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Healthcare Experience Sections */}
      {healthcareExperience.map((experience, index) => {
        const colorConfig = getColorVariant(experience.color);

        return (
          <section
            key={experience.id}
            className={`scroll-section min-h-screen flex items-center justify-center ${
              index % 2 === 0 ? "bg-white" : "bg-slate-50"
            }`}
          >
            <div
              className={`max-w-7xl mx-auto px-6 py-20 flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  {/* Enhanced floating elements */}
                  <div
                    className="float-1 absolute -top-8 -left-8 w-32 h-32 rounded-3xl opacity-20"
                    style={{
                      background: colorConfig.gradient,
                    }}
                  />
                  <div
                    className="float-2 absolute -bottom-8 -right-8 w-20 h-20 rounded-full opacity-20"
                    style={{
                      background: colorConfig.gradient,
                    }}
                  />

                  {/* Badge */}
                  <div className="absolute -bottom-6 -left-6">
                    <div
                      className="px-6 py-4 rounded-2xl shadow-2xl text-white font-semibold text-lg"
                      style={{
                        background: colorConfig.gradient,
                      }}
                    >
                      {experience.id === "medics"
                        ? "For Professionals"
                        : experience.id === "patients"
                        ? "For Patients"
                        : "Our Facilities"}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="max-w-lg"
                >
                  <h2
                    className={`text-5xl md:text-6xl mb-6 text-slate-900 ${bebasNeue.className}`}
                  >
                    {experience.title}
                  </h2>

                  <p
                    className={`text-lg text-slate-600 mb-8 leading-relaxed ${poppins.className}`}
                  >
                    {experience.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {experience.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-lg group"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: `${colorConfig.primary}15`,
                          }}
                        >
                          <feature.icon
                            size={24}
                            style={{
                              color: colorConfig.primary,
                            }}
                          />
                        </div>
                        <span
                          className={`text-slate-700 font-medium ${poppins.className}`}
                        >
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl text-white flex items-center gap-3"
                    style={{
                      background: colorConfig.gradient,
                    }}
                  >
                    {experience.cta}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Enhanced Final CTA Section */}
      <section className="scroll-section relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 20% 80%, ${colors.green.primary} 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, ${colors.blue.primary} 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-7xl mb-8 text-white ${bebasNeue.className}`}
          >
            Ready to Transform
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.green.light} 0%, ${colors.blue.light} 100%)`,
              }}
            >
              Your Healthcare?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Join thousands of healthcare professionals and patients who are
            already experiencing the future of medical care with Doza's
            innovative platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <button
              className="group px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white flex items-center gap-3"
              style={{ background: colors.green.gradient }}
            >
              Get Started Today
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              className="group px-10 py-5 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm"
              style={{
                borderColor: colors.blue.light,
                color: colors.blue.light,
              }}
            >
              Schedule a Demo
            </button>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group p-6 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: colors.green.gradient }}
                >
                  <item.icon size={28} className="text-white" />
                </div>
                <div
                  className={`font-semibold text-white mb-1 ${poppins.className}`}
                >
                  {item.text}
                </div>
                <div className="text-slate-400 text-sm">{item.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
