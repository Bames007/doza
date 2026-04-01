"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Disclosure, Transition } from "@headlessui/react";
import {
  Heart,
  Stethoscope,
  Building,
  Users,
  ArrowRight,
  Play,
  X,
  Shield,
  Globe,
  Activity,
  Brain,
  Calendar,
  Pill,
  ChevronDown,
  Network,
  Database,
  Lock,
  TrendingUp,
  Plus,
  HeartPulse,
  CheckCircle,
  Video,
  Clock,
  FileText,
  AlertCircle,
  Fingerprint,
  Zap,
  Award,
  ShieldCheck,
  Microscope,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Types ---
export type UserRole = "user" | "medic" | "center" | null;

interface Props {
  onRoleSelect: (role: UserRole) => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

// --- Premium Grain Overlay ---
const GrainOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-[99] opacity-[0.02] mix-blend-overlay">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// --- Section Label with pulse dot ---
const SectionLabel = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 mb-6"
  >
    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
    <span
      className={`text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-600 ${poppins.className}`}
    >
      {text}
    </span>
  </motion.div>
);

// --- Premium Card with hover effects ---
const PremiumCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all hover:border-emerald-500/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-transparent to-emerald-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// --- 3D Tilt Card ---
const TiltCard = ({ children, className }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 250 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 250 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

// --- Magnetic Button ---
const MagneticButton = ({ children, onClick, className }: any) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      btnRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    gsap.to(btnRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.2)",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

// --- Data for pillars, features, advantages, role cards ---

const ECOSYSTEM_PILLARS = [
  {
    id: "user",
    title: "Doza User",
    tagline: "Your Health, Always With You",
    description:
      "A personal health companion that captures your complete medical journey. From symptom logging to instant doctor booking, digital prescriptions, and daily medication reminders—all in one place. Your history follows you, so every doctor you see already knows your story.",
    icon: Heart,
    gradient: "from-emerald-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    caseStudy: {
      name: "Maria Gonzalez",
      location: "Barcelona",
      quote:
        "I used to forget doses and carry paper records everywhere. Now my medication is tracked, my doctor sees my progress, and I feel in control.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    },
  },
  {
    id: "medic",
    title: "Doza Medic",
    tagline: "Practice Without Paperwork",
    description:
      "A digital workspace that unifies patient history, appointments, prescriptions, and telemedicine. See trends, set dosage plans, and get alerted when patients miss doses. Collaborate with specialists instantly. More time with patients, less time on admin.",
    icon: Stethoscope,
    gradient: "from-emerald-600 to-emerald-700",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070",
    caseStudy: {
      name: "Dr. Amina Diallo",
      location: "Dakar",
      quote:
        "I've cut administrative work by 40%. Now I can focus on diagnosis and care, while Doza handles the rest.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
    },
  },
  {
    id: "center",
    title: "Doza Center",
    tagline: "Operations, Streamlined",
    description:
      "The operating system for modern hospitals. Connect departments, integrate legacy systems, and get real-time visibility into patient flow, staff coordination, and resource allocation. Reduce wait times and improve outcomes.",
    icon: Building,
    gradient: "from-emerald-700 to-emerald-800",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070",
    caseStudy: {
      name: "Clinique du Lac",
      location: "Geneva",
      quote:
        "Waiting times dropped by 30% and we finally have a single source of truth for patient data across all departments.",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070",
    },
  },
];

const MEDIC_FEATURES = [
  {
    icon: FileText,
    title: "Complete Patient Timeline",
    description:
      "Every consultation, prescription, lab result, and note in one place. No more searching through paper or different systems.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automated appointment booking, reminders, and prioritization. Reduce no-shows and manage your day efficiently.",
  },
  {
    icon: Pill,
    title: "Digital Prescriptions & Dosage Tracking",
    description:
      "Issue structured prescriptions with clear dosage plans. Patients get reminders; you get alerts if doses are missed.",
  },
  {
    icon: Video,
    title: "Telemedicine Built‑In",
    description:
      "Secure video calls, chat, and file sharing. Consult patients remotely without leaving the platform.",
  },
  {
    icon: Users,
    title: "Specialist Network",
    description:
      "Instantly consult other doctors, share cases, and collaborate on treatment plans—all within Doza.",
  },
  {
    icon: Activity,
    title: "Health Trends Dashboard",
    description:
      "Visualize patient data over time: blood pressure, glucose, medication adherence. Make informed decisions.",
  },
  {
    icon: Database,
    title: "Lifelong Patient Records",
    description:
      "Every interaction is stored securely. Patients own their data, and you have the full context at every visit.",
  },
  {
    icon: Globe,
    title: "Seamless Center Integration",
    description:
      "If your hospital uses Doza Center, data flows automatically—appointments, lab orders, discharge summaries.",
  },
];

const STRATEGIC_ADVANTAGES = [
  {
    icon: Network,
    title: "Network That Grows Itself",
    description:
      "More patients attract more doctors, more doctors attract more centers. Each new user makes the platform more valuable for everyone.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    medicalIcon: HeartPulse,
  },
  {
    icon: Database,
    title: "Data That Informs Care",
    description:
      "Anonymized insights help identify regional health trends and improve treatment protocols—without needing a data science team.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070",
    medicalIcon: Activity,
  },
  {
    icon: Lock,
    title: "Doctors Don't Leave",
    description:
      "Once your daily workflow runs on Doza—appointments, records, prescriptions—switching becomes unthinkable.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
    medicalIcon: Shield,
  },
  {
    icon: TrendingUp,
    title: "Infrastructure, Not Just an App",
    description:
      "Doza becomes essential: hospitals, clinics, and patients depend on it daily. That's the foundation for long‑term value.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    medicalIcon: Building,
  },
];

const ROLE_CARDS = [
  {
    role: "user",
    title: "For Patients",
    subtitle: "Take control of your health",
    perks: [
      "Track symptoms, medications, and history",
      "Book appointments in seconds",
      "Get reminders for doses and visits",
      "Share records instantly with any doctor",
    ],
    icon: Heart,
    gradient: "from-emerald-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070",
  },
  {
    role: "medic",
    title: "For Medics",
    subtitle: "Focus on patients, not paperwork",
    perks: [
      "Full patient history at your fingertips",
      "Issue digital prescriptions with dosage plans",
      "Telemedicine & specialist network",
      "Reduce admin by 40% or more",
    ],
    icon: Stethoscope,
    gradient: "from-emerald-600 to-emerald-700",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070",
  },
  {
    role: "center",
    title: "For Centers",
    subtitle: "Operational excellence",
    perks: [
      "Unified patient flow across departments",
      "Real‑time resource analytics",
      "Integrate with existing systems",
      "Improve patient throughput",
    ],
    icon: Building,
    gradient: "from-emerald-700 to-emerald-800",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070",
  },
];

const FAQS = [
  {
    q: "How does Doza improve medication adherence?",
    a: "Doctors create structured dosage plans (drug, dose, frequency, duration). Patients receive reminders, can mark doses as taken, and doctors are alerted if doses are missed—so they can intervene early.",
  },
  {
    q: "Is patient data secure?",
    a: "Yes. All data is encrypted with military‑grade protocols, and patients control who accesses their records. We comply with HIPAA, GDPR, and local healthcare regulations.",
  },
  {
    q: "Can hospitals connect their existing systems?",
    a: "Doza Center acts as an interoperability layer, connecting legacy databases, lab systems, and billing software to a single modern interface.",
  },
  {
    q: "What makes Doza different from a telemedicine app?",
    a: "Doza is a complete ecosystem: patient app, doctor workstation, and center management—all communicating. It's continuous care, not just video calls.",
  },
];

const EXPERIENCE_HIGHLIGHTS = [
  {
    icon: Clock,
    title: "Healthcare Continuity",
    description:
      "No more isolated visits. Every interaction—symptoms, prescriptions, lab results—adds to a lifelong health journey. Doctors see the full picture instantly.",
  },
  {
    icon: FileText,
    title: "Digital Medical Identity",
    description:
      "Every patient builds a portable health profile. Move between doctors, cities, or countries—your history is always accessible (with your permission).",
  },
  {
    icon: AlertCircle,
    title: "Medication Adherence",
    description:
      "Structured dosage plans with reminders and tracking. Alerts go to doctors when patients fall behind, enabling timely follow‑up.",
  },
];

const DATA_ICONS = [
  { icon: Shield, label: "Security" },
  { icon: Lock, label: "Privacy" },
  { icon: Fingerprint, label: "Identity" },
  { icon: Database, label: "Storage" },
  { icon: Heart, label: "Wellness" },
  { icon: Activity, label: "Analytics" },
  { icon: Globe, label: "Global" },
  { icon: Award, label: "Trust" },
  { icon: Zap, label: "Speed" },
];

// --- Main Component ---
export default function DozaExplainer({
  onRoleSelect,
  showBackButton,
  onBack,
}: Props) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Parallax mouse values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const bgX = useTransform(mouseX, [-0.5, 0.5], ["-15px", "15px"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["-15px", "15px"]);

  const openVideoModal = () => setVideoModalOpen(true);
  const closeVideoModal = () => setVideoModalOpen(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen bg-[#FAFAFA] overflow-x-hidden text-slate-900 selection:bg-emerald-200 flex flex-col"
      ref={containerRef}
    >
      <GrainOverlay />
      <LuxuryCursor />

      {/* Parallax background – soft emerald glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-50 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/60 blur-[150px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-50/30 blur-[200px] rounded-full" />
        </motion.div>
      </div>

      {/* Back button */}
      {showBackButton && onBack && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-5 py-3 text-slate-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg border border-slate-200/60"
        >
          <X size={18} />
          <span className={`text-sm font-medium ${poppins.className}`}>
            Back
          </span>
        </motion.button>
      )}

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 z-[100] hidden -translate-x-1/2 w-fit md:block">
        <div className="flex items-center gap-8 rounded-full border border-white/40 bg-white/60 px-8 py-3 backdrop-blur-xl shadow-lg ring-1 ring-black/5">
          <span
            className={`text-2xl font-bold tracking-tighter ${bebasNeue.className}`}
          >
            DOZA.
          </span>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollTo("ecosystem")}
              className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors ${poppins.className}`}
            >
              Ecosystem
            </button>
            <button
              onClick={() => scrollTo("medic")}
              className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors ${poppins.className}`}
            >
              Medic
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors ${poppins.className}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo("advantages")}
              className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors ${poppins.className}`}
            >
              Investors
            </button>
          </div>
          <button
            onClick={() => scrollTo("choose")}
            className="rounded-full bg-slate-950 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-emerald-600 transition-all"
          >
            Join
          </button>
        </div>
      </nav>

      {/* Scroll indicator */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        {[
          "hero",
          "ecosystem",
          "experience",
          "medic",
          "advantages",
          "faq",
          "choose",
        ].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="group relative flex items-center justify-center"
          >
            <span className="w-2 h-2 bg-slate-300 rounded-full group-hover:bg-emerald-500 transition-all duration-300 group-hover:scale-125" />
            <span className="absolute right-full mr-3 text-xs font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* MAIN CONTENT - takes all remaining space */}
      <div className="relative z-10 flex-grow">
        {/* --- HERO SECTION with improved mobile UI --- */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 md:px-6"
        >
          <div className="container relative z-10 mx-auto max-w-7xl text-center">
            <SectionLabel text="Your Health, Connected" />

            <h1
              className={`mb-6 text-[15vw] font-bold leading-[0.9] tracking-tighter md:text-[9rem] lg:text-[11rem] ${bebasNeue.className}`}
            >
              CARE WITHOUT <br />
              <span className="bg-gradient-to-b from-emerald-600 to-emerald-900 bg-clip-text text-transparent">
                BOUNDARIES
              </span>
            </h1>

            <p
              className={`mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-500 md:text-xl ${poppins.className}`}
            >
              A unified platform that connects patients, doctors, and medical
              centers—so every visit builds on the last, and every prescription
              is followed through.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <MagneticButton
                onClick={() => scrollTo("ecosystem")}
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-emerald-600 px-8 py-4 text-white transition-all hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/40 sm:px-10 sm:py-5"
              >
                <span className="font-bold uppercase tracking-widest text-sm">
                  Explore Ecosystem
                </span>
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </MagneticButton>
              <button
                onClick={openVideoModal}
                className="flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 transition-all hover:bg-slate-50 sm:px-10 sm:py-5"
              >
                <Play size={18} fill="currentColor" />
                <span className="font-bold uppercase tracking-widest text-slate-900 text-sm">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Hero Visual - improved for mobile */}
          <motion.div
            style={{ scale: zoom }}
            className="mt-16 w-full max-w-6xl px-4 md:mt-24 md:px-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/50 p-2 shadow-2xl backdrop-blur-sm md:rounded-[3rem] md:p-3">
              <div className="relative h-48 w-full overflow-hidden rounded-[1.5rem] sm:h-64 md:h-80 lg:h-96 md:rounded-[2.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000"
                  alt="Modern Hospital"
                  fill
                  className="object-cover brightness-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ECOSYSTEM PILLARS --- */}
        <section id="ecosystem" className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className={`text-6xl md:text-8xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                THREE PILLARS, ONE ECOSYSTEM
              </h2>
              <p
                className={`text-lg text-slate-500 max-w-2xl mx-auto ${poppins.className}`}
              >
                Doza seamlessly connects everyone in the healthcare journey.
              </p>
            </motion.div>

            <div className="space-y-20">
              {ECOSYSTEM_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    idx % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image side */}
                  <div className={idx % 2 === 1 ? "md:col-start-2" : ""}>
                    <TiltCard>
                      <PremiumCard className="!p-0 overflow-hidden">
                        <div className="relative h-80 md:h-96">
                          <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          <div className="absolute bottom-6 left-6 flex items-center gap-3">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white flex items-center justify-center shadow-lg`}
                            >
                              <pillar.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3
                              className={`text-3xl text-white font-bold ${bebasNeue.className}`}
                            >
                              {pillar.title}
                            </h3>
                          </div>
                        </div>
                      </PremiumCard>
                    </TiltCard>
                  </div>

                  {/* Text + case study */}
                  <div
                    className={
                      idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    }
                  >
                    <span
                      className={`text-sm font-bold tracking-widest uppercase text-emerald-600 ${poppins.className}`}
                    >
                      {pillar.tagline}
                    </span>
                    <p
                      className={`mt-4 text-slate-600 text-lg leading-relaxed ${poppins.className}`}
                    >
                      {pillar.description}
                    </p>

                    {/* Case study card */}
                    <PremiumCard className="mt-8 !p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-emerald-200">
                          <Image
                            src={pillar.caseStudy.image}
                            alt={pillar.caseStudy.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p
                            className={`text-base font-semibold text-slate-800 ${poppins.className}`}
                          >
                            {pillar.caseStudy.name}
                          </p>
                          <p
                            className={`text-sm text-slate-500 ${poppins.className}`}
                          >
                            {pillar.caseStudy.location}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`mt-4 text-slate-600 italic ${poppins.className}`}
                      >
                        "{pillar.caseStudy.quote}"
                      </p>
                    </PremiumCard>

                    <MagneticButton
                      onClick={() => onRoleSelect(pillar.id as UserRole)}
                      className="mt-6 px-6 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold flex items-center gap-2 group/btn"
                    >
                      Learn more about {pillar.title}
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </MagneticButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE DOZA EXPERIENCE --- */}
        <section
          id="experience"
          className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className={`text-6xl md:text-8xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                THE DOZA EXPERIENCE
              </h2>
              <p
                className={`text-lg text-slate-500 max-w-2xl mx-auto ${poppins.className}`}
              >
                Continuous care, not isolated visits. A seamless journey for
                patients and professionals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
                <PremiumCard key={idx} delay={idx * 0.1}>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-6">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`text-3xl font-bold text-slate-900 mb-3 ${bebasNeue.className}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-slate-600 ${poppins.className}`}>
                    {item.description}
                  </p>
                </PremiumCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- DOZA MEDIC DEEP DIVE --- */}
        <section id="medic" className="py-32 px-6 bg-[#fcfcfc]">
          <div className="container mx-auto max-w-7xl">
            {/* --- HEADER: Professional & Sharp --- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
                  <Activity size={14} className="text-emerald-600" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
                    Provider Suite v2.0
                  </span>
                </div>
                <h2
                  className={`text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-slate-950 ${bebasNeue.className}`}
                >
                  YOUR PRACTICE, <br />
                  <span className="text-emerald-500 italic">SIMPLIFIED.</span>
                </h2>
              </div>
              <p
                className={`text-xl text-slate-500 max-w-sm font-light leading-relaxed mb-2 ${poppins.className}`}
              >
                The first clinical OS designed to reduce cognitive load and
                prioritize patient outcomes.
              </p>
            </motion.div>

            {/* --- BENTO GRID: The Clinical OS --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
              {/* 1. The Timeline (Primary Feature) */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-8 md:row-span-1 relative rounded-[3rem] bg-white border border-slate-200 p-10 overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-10 h-full items-center">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 shadow-sm">
                      <FileText size={28} />
                    </div>
                    <h3
                      className={`text-5xl font-bold text-slate-950 mb-6 leading-none ${bebasNeue.className}`}
                    >
                      COMPLETE PATIENT <br /> TIMELINE
                    </h3>
                    <p
                      className={`text-slate-500 text-lg leading-relaxed ${poppins.className}`}
                    >
                      Every visit, prescription, and lab result in a single,
                      high-fidelity chronological view. No more fragmented
                      records.
                    </p>
                  </div>

                  {/* Mockup: Timeline UI */}
                  <div className="relative bg-slate-50 rounded-[2rem] border border-slate-200 h-full min-h-[300px] p-6 overflow-hidden">
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm opacity-60 hover:opacity-100 transition-opacity"
                        >
                          <div className="w-1 h-10 bg-emerald-500 rounded-full" />
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">
                              Oct 1{i}, 2026
                            </p>
                            <p className="text-sm font-bold text-slate-900 leading-none">
                              Diagnostic Imaging - Report
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* 2. Dosage Tracking (The Dark Accent) */}
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="md:col-span-4 md:row-span-1 bg-slate-950 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden text-white"
              >
                <div className="relative z-10">
                  <Pill className="text-emerald-400 mb-8" size={48} />
                  <h3
                    className={`text-5xl font-bold mb-6 tracking-tight ${bebasNeue.className}`}
                  >
                    ADHERENCE <br /> ENGINE
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Automated reminders and real-time alerts if doses are
                    missed. Bridge the gap between consultation and recovery.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
              </motion.div>

              {/* 3. Specialist Network (Image Heavy) */}
              <motion.div className="md:col-span-6 md:row-span-1 relative rounded-[3rem] overflow-hidden group border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200"
                  alt="Collaboration"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <Users size={32} className="text-emerald-400 mb-4" />
                  <h3
                    className={`text-5xl text-white font-bold mb-2 ${bebasNeue.className}`}
                  >
                    PEER CONSULTATION
                  </h3>
                  <p className="text-white/60 text-sm max-w-xs uppercase tracking-widest font-bold">
                    Secure Second Opinions • Instant Messaging
                  </p>
                </div>
              </motion.div>

              {/* 4. Telemedicine (Minimalist) */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-6 md:row-span-1 rounded-[3rem] bg-emerald-50 border border-emerald-100 p-10 flex flex-col justify-center items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-emerald-600 mb-8 shadow-xl shadow-emerald-600/10 group-hover:scale-110 transition-transform duration-500">
                  <Video size={40} />
                </div>
                <h3
                  className={`text-5xl font-bold text-slate-950 mb-4 ${bebasNeue.className}`}
                >
                  TELEMEDICINE REDEFINED
                </h3>
                <p className={`text-slate-600 max-w-md ${poppins.className}`}>
                  Seamless encrypted video, chat, and file sharing within one
                  window. No external plugins, no friction.
                </p>
              </motion.div>
            </div>

            {/* --- WORKFLOW: The "Pulse" Interface --- */}
            <div className="mt-32 relative bg-emerald-600 rounded-[4rem] p-10 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(16,185,129,0.3)]">
              {/* Decorative SVG Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h3
                    className={`text-7xl md:text-8xl font-bold text-white mb-10 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
                  >
                    A DAY WITH <br />
                    <span className="text-slate-900 italic opacity-40">
                      DOZA MEDIC
                    </span>
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Smart-Scheduler Booking",
                      "Verified Medical History Access",
                      "Digital Diagnosis Bridge",
                      "Structured Dosage Protocol",
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-6 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white hover:text-emerald-900 transition-all duration-300 group"
                      >
                        <span className="text-3xl font-bold opacity-30 group-hover:opacity-100 leading-none">
                          {i + 1}
                        </span>
                        <p
                          className={`text-xl font-bold tracking-tight ${poppins.className}`}
                        >
                          {step}
                        </p>
                        <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* The "Brain" Visual */}
                <div className="relative h-[500px] flex items-center justify-center">
                  <div className="absolute w-[400px] h-[400px] bg-emerald-400 rounded-full blur-[100px] opacity-50 animate-pulse" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative w-80 h-80 rounded-full border-2 border-white/20 flex items-center justify-center"
                  >
                    <div className="w-64 h-64 rounded-full border border-white/40 border-dashed" />
                    <div className="absolute top-0 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]" />
                  </motion.div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={80}
                      height={80}
                      className="brightness-0 invert mb-4"
                    />
                    <div className="px-4 py-1 bg-white text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                      Ecosystem Live
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STRATEGIC ADVANTAGES --- */}
        <section
          id="infrastructure"
          className="relative py-24 md:py-48 px-6 bg-white overflow-hidden selection:bg-emerald-500 selection:text-white"
        >
          {/* --- CLEAN ARCHITECTURAL BACKGROUND --- */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* --- HEADER: THE MISSION --- */}
            <div className="flex flex-col items-center text-center mb-32 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8"
              >
                Integrated Healthcare Ecosystem
              </motion.div>

              <h2
                className={`text-[clamp(3rem,8vw,8rem)] font-light text-slate-950 leading-[0.9] tracking-tight mb-8 ${bebasNeue.className}`}
              >
                HEALTH DATA, <br />
                <span className="font-black text-emerald-600">IN MOTION.</span>
              </h2>

              <p
                className={`text-xl md:text-2xl text-slate-500 font-light leading-relaxed ${poppins.className}`}
              >
                Doza is the link between your personal vitals and the
                professionals who save lives. We turn static data into{" "}
                <span className="text-black font-semibold">active care</span>.
              </p>
            </div>

            {/* --- THE THREE PILLARS: USER | CENTER | MEDIC --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* 01. FOR THE USER: Peace of Mind */}
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-[580px] bg-[#fafafa] border border-slate-100 rounded-[3rem] p-12 flex flex-col group overflow-hidden"
              >
                <div className="mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-8">
                    <ShieldCheck size={28} />
                  </div>
                  <h3
                    className={`text-5xl text-black leading-none mb-6 ${bebasNeue.className}`}
                  >
                    YOUR DATA <br /> SAVES YOU
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Your medical history and real-time vitals stay with you. In
                    an emergency, Doza speaks for you when you can't.
                  </p>
                </div>

                <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <li>• Instant Allergy Alerts</li>
                  <li>• Secure Vital Tracking</li>
                  <li>• Direct Family Notify</li>
                </ul>
              </motion.div>

              {/* 02. FOR MEDICAL CENTERS: Efficiency */}
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-[580px] bg-slate-950 rounded-[3rem] p-12 flex flex-col text-white group overflow-hidden shadow-2xl"
              >
                <div className="mb-12 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20">
                    <Activity size={28} />
                  </div>
                  <h3
                    className={`text-5xl leading-none mb-6 ${bebasNeue.className}`}
                  >
                    SYSTEM <br /> READINESS
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Equip your facility with a live feed of incoming patient
                    data. Reduce intake time and improve triage accuracy.
                  </p>
                </div>

                <ul className="relative z-10 space-y-4 text-[11px] font-bold uppercase tracking-widest text-emerald-500/60 group-hover:text-emerald-400 transition-colors">
                  <li>• Real-time Triage Hub</li>
                  <li>• Resource Optimization</li>
                  <li>• Inter-Facility Sync</li>
                </ul>

                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              </motion.div>

              {/* 03. FOR THE MEDIC: Speed */}
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-[580px] bg-[#fafafa] border border-slate-100 rounded-[3rem] p-12 flex flex-col group overflow-hidden"
              >
                <div className="mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-8">
                    <Microscope size={28} />
                  </div>
                  <h3
                    className={`text-5xl text-black leading-none mb-6 ${bebasNeue.className}`}
                  >
                    PRE-ARRIVAL <br /> INSIGHT
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Know the patient's condition before you even reach the
                    scene. Access critical records with one biometric scan.
                  </p>
                </div>

                <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <li>• No-Touch Data Intake</li>
                  <li>• Verified Medical IDs</li>
                  <li>• Vital Trend Analysis</li>
                </ul>
              </motion.div>
            </div>

            {/* --- THE DOZA BRIDGE: RELIABILITY --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#fcfcfc] border border-slate-200 rounded-[4rem] p-10 md:p-24 overflow-hidden relative"
            >
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="w-full lg:w-1/2">
                  <h4
                    className={`text-6xl text-black mb-8 leading-[0.85] ${bebasNeue.className}`}
                  >
                    THE DOZA <br />{" "}
                    <span className="text-emerald-600 italic underline decoration-slate-200 underline-offset-8">
                      ASSURANCE
                    </span>
                  </h4>
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                    We don't just store data; we facilitate{" "}
                    <span className="text-black font-semibold">
                      intervention
                    </span>
                    . By linking users directly to the medical grid, we
                    eliminate the minutes of uncertainty that stand between a
                    crisis and care.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p
                        className={`text-4xl text-black ${bebasNeue.className}`}
                      >
                        0.4s
                      </p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                        Average Sync Time
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-4xl text-black ${bebasNeue.className}`}
                      >
                        100%
                      </p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                        HIPAA Compliant
                      </p>
                    </div>
                  </div>
                </div>

                {/* --- VISUAL INTERFACE: THE LIVE HUB --- */}
                <div className="w-full lg:w-1/2 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12 relative">
                  <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-50">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Patient Profile #8821
                      </p>
                      <p
                        className={`text-4xl text-black ${bebasNeue.className}`}
                      >
                        CRITICAL ALERT
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full uppercase">
                      Transmitting
                    </div>
                  </div>

                  {/* Minimal Bio-Feed */}
                  <div className="space-y-6 mb-10">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Blood Oxygen (SpO2)
                      </span>
                      <span
                        className={`text-3xl text-black ${bebasNeue.className}`}
                      >
                        98%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        className="h-full bg-emerald-500"
                      />
                    </div>

                    <div className="flex justify-between items-end pt-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Heart Rate
                      </span>
                      <span
                        className={`text-3xl text-emerald-600 ${bebasNeue.className}`}
                      >
                        104{" "}
                        <span className="text-xs italic text-slate-300">
                          BPM
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 py-4 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
                      Access Medical ID
                    </button>
                    <button className="flex-1 py-4 border border-slate-200 text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-black transition-all">
                      Dispatch Status
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* --- FAQ SECTION --- */}
        <section id="faq" className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-4xl relative">
            {/* Decorative Soft Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <HelpCircle size={14} className="text-emerald-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                  Support Center
                </span>
              </div>

              <h2
                className={`text-6xl md:text-8xl font-bold text-slate-950 mb-6 tracking-tighter leading-none ${bebasNeue.className}`}
              >
                COMMON{" "}
                <span className="text-emerald-500 italic">QUESTIONS</span>
              </h2>
              <p
                className={`text-lg text-slate-500 max-w-xl mx-auto font-light leading-relaxed ${poppins.className}`}
              >
                Clarity on security, integration, and the future of your medical
                identity.
              </p>
            </motion.div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Disclosure>
                    {({ open }) => (
                      <div
                        className={`
                group rounded-[2rem] border transition-all duration-500 overflow-hidden
                ${
                  open
                    ? "bg-slate-50 border-emerald-200 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.08)]"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }
              `}
                      >
                        <Disclosure.Button className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none">
                          <span
                            className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${open ? "text-emerald-700" : "text-slate-900"} ${poppins.className}`}
                          >
                            {faq.q}
                          </span>

                          {/* Custom Animated Icon */}
                          <div
                            className={`
                    flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                    ${open ? "bg-emerald-500 text-white rotate-180" : "bg-slate-100 text-slate-400 rotate-0"}
                  `}
                          >
                            <ChevronDown size={20} strokeWidth={2.5} />
                          </div>
                        </Disclosure.Button>

                        <Transition
                          enter="transition duration-300 ease-out"
                          enterFrom="transform scale-95 opacity-0 max-h-0"
                          enterTo="transform scale-100 opacity-100 max-h-[500px]"
                          leave="transition duration-200 ease-in"
                          leaveFrom="transform scale-100 opacity-100 max-h-[500px]"
                          leaveTo="transform scale-95 opacity-0 max-h-0"
                        >
                          <Disclosure.Panel
                            className={`px-8 pb-8 text-slate-600 leading-relaxed text-base md:text-lg max-w-3xl ${poppins.className}`}
                          >
                            <div className="pt-2 border-t border-slate-200/50">
                              {faq.a}
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    )}
                  </Disclosure>
                </motion.div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-16 p-8 rounded-[2.5rem] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className={poppins.className}>
                <h4 className="text-xl font-bold mb-1">
                  Still have questions?
                </h4>
                <p className="text-slate-400 text-sm">
                  Our medical advisory team is here to help.
                </p>
              </div>
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* --- CHOOSE YOUR PATH --- */}
        <section
          id="choose"
          className="py-24 px-6 relative overflow-hidden bg-slate-50"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-700">
                  Onboarding
                </span>
              </div>
              <h2
                className={`text-6xl md:text-8xl font-bold text-slate-950 mb-6 tracking-tighter leading-[0.85] ${bebasNeue.className}`}
              >
                READY TO EXPERIENCE <br />
                <span className="text-emerald-600 italic">THE FUTURE?</span>
              </h2>
              <p
                className={`text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light ${poppins.className}`}
              >
                Select your ecosystem entry point. Every path is secured,
                encrypted, and built for life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ROLE_CARDS.map((card, idx) => (
                <TiltCard key={card.role} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="group relative h-full bg-white rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_rgba(16,185,129,0.12)] transition-all duration-500 flex flex-col"
                  >
                    {/* Top Visual Section */}
                    <div className="relative h-64 m-3 overflow-hidden rounded-[2rem]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      {/* Dynamic Icon Badge */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl transition-transform group-hover:-translate-y-2`}
                        >
                          <card.icon size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3
                            className={`text-3xl font-bold text-white tracking-tight ${bebasNeue.className}`}
                          >
                            {card.title}
                          </h3>
                          <div className="h-1 w-0 group-hover:w-full bg-emerald-400 transition-all duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 pt-4 flex flex-col flex-grow">
                      <span
                        className={`text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-4 block ${poppins.className}`}
                      >
                        {card.subtitle}
                      </span>

                      <ul className="space-y-4 mb-10 flex-grow">
                        {card.perks.map((perk, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 group/li"
                          >
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center group-hover/li:bg-emerald-500 transition-colors">
                              <CheckCircle
                                size={12}
                                className="text-emerald-500 group-hover/li:text-white transition-colors"
                              />
                            </div>
                            <span
                              className={`text-slate-600 text-sm leading-tight group-hover/li:text-slate-900 transition-colors ${poppins.className}`}
                            >
                              {perk}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <MagneticButton
                        onClick={() => onRoleSelect(card.role as UserRole)}
                        className="relative overflow-hidden w-full py-4 rounded-2xl bg-slate-950 text-white font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 group/btn hover:bg-emerald-600 transition-colors duration-300"
                      >
                        <span className="relative z-10">
                          Choose {card.title.split(" ")[1]}
                        </span>
                        <ArrowRight
                          size={18}
                          className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300"
                        />
                      </MagneticButton>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - compact, now outside main content */}
      <footer className="py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto mb-3 relative">
            <Image
              src="/logo.png"
              alt="Doza"
              fill
              className="object-contain opacity-60"
            />
          </div>
          <p
            className={`text-sm text-slate-500 font-medium tracking-wider ${poppins.className}`}
          >
            ENGINEERED BY{" "}
            <span className="font-bold text-slate-700">EBCOM TECHNOLOGIES</span>
          </p>
          <p className={`text-xs text-slate-400 mt-2 ${poppins.className}`}>
            © 2026 Doza. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/60"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1Bpj38bxJ60?si=eP66oKXsbHvFhYgM"
                title="Doza Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideoModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white transition-all shadow-lg"
              >
                <X size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// LuxuryCursor component
const LuxuryCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-emerald-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-emerald-500/30 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
