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
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Types ---
export type UserRole = "patient" | "medic" | "center" | null;

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

// --- Data for pillars, features, advantages, role cards (rewritten for persuasion) ---

const ECOSYSTEM_PILLARS = [
  {
    id: "patient",
    title: "Doza Patient",
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

// Medic features – practical, no AI hype
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
    role: "patient",
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
      className="relative min-h-screen bg-[#FAFAFA] overflow-x-hidden text-slate-900 selection:bg-emerald-200"
      ref={containerRef}
    >
      <GrainOverlay />
      <LuxuryCursor />

      {/* Parallax background – soft emerald glow */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-50 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/60 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-50/30 blur-[200px] rounded-full" />
      </motion.div>

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

      {/* Floating Navigation with correct scroll targets */}
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
              onClick={() => scrollTo("advantages")} // Investors → advantages
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

      <div className="relative z-10">
        {/* --- HERO SECTION with massive typography and parallax zoom --- */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
        >
          <div className="container relative z-10 mx-auto max-w-7xl text-center">
            <SectionLabel text="Your Health, Connected" />

            <h1
              className={`mb-8 text-[13vw] font-bold leading-[0.8] tracking-tighter md:text-[9rem] lg:text-[11rem] ${bebasNeue.className}`}
            >
              CARE WITHOUT <br />
              <span className="bg-gradient-to-b from-emerald-600 to-emerald-900 bg-clip-text text-transparent">
                BOUNDARIES
              </span>
            </h1>

            <p
              className={`mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-slate-500 md:text-xl ${poppins.className}`}
            >
              A unified platform that connects patients, doctors, and medical
              centers—so every visit builds on the last, and every prescription
              is followed through.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <MagneticButton
                onClick={() => scrollTo("ecosystem")}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-emerald-600 px-10 py-5 text-white transition-all hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/40"
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
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-10 py-5 transition-all hover:bg-slate-50"
              >
                <Play size={18} fill="currentColor" />
                <span className="font-bold uppercase tracking-widest text-slate-900 text-sm">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Hero Visual with Parallax Zoom */}
          <motion.div
            style={{ scale: zoom }}
            className="mt-24 w-full max-w-6xl px-6"
          >
            <div className="relative aspect-[21/9] overflow-hidden rounded-[3rem] border border-white bg-white/50 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000"
                  alt="Modern Hospital"
                  fill
                  className="object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ECOSYSTEM PILLARS with case studies --- */}
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

        {/* --- DOZA MEDIC DEEP DIVE with bento grid --- */}
        <section id="medic" className="py-24 px-6 bg-slate-50/80">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20 text-center md:text-left"
            >
              <SectionLabel text="Doza Medic" />
              <h2
                className={`text-6xl md:text-8xl font-bold tracking-tight ${bebasNeue.className}`}
              >
                YOUR PRACTICE,{" "}
                <span className="text-emerald-600 italic">SIMPLIFIED</span>
              </h2>
            </motion.div>

            {/* Bento grid for features */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Big Feature */}
              <PremiumCard className="md:col-span-8 flex flex-col md:flex-row gap-10 items-center min-h-[400px]">
                <div className="flex-1">
                  <FileText
                    className="mb-6 text-emerald-600"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3
                    className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}
                  >
                    Complete Patient Timeline
                  </h3>
                  <p
                    className={`text-slate-500 font-light leading-relaxed ${poppins.className}`}
                  >
                    No more flipping through papers. See every past visit,
                    prescription, and lab result—all in one chronological view.
                  </p>
                </div>
                <div className="w-full md:w-80 h-64 relative rounded-3xl overflow-hidden shadow-inner bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800"
                    alt="Patient timeline"
                    fill
                    className="object-cover"
                  />
                </div>
              </PremiumCard>

              {/* Dark Accent Card */}
              <PremiumCard className="md:col-span-4 bg-slate-950 text-white border-none flex flex-col justify-between">
                <div>
                  <Pill className="mb-6 text-emerald-400" size={40} />
                  <h3
                    className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}
                  >
                    Dosage Tracking
                  </h3>
                </div>
                <p
                  className={`text-slate-400 text-sm font-light leading-relaxed ${poppins.className}`}
                >
                  Create structured plans. Patients get reminders. You get
                  alerts if doses are missed—so you can follow up.
                </p>
              </PremiumCard>

              {/* Small Detailed Card */}
              <PremiumCard className="md:col-span-4">
                <Video className="mb-6 text-emerald-600" size={40} />
                <h3
                  className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}
                >
                  Telemedicine
                </h3>
                <p
                  className={`text-slate-500 text-sm font-light ${poppins.className}`}
                >
                  Secure video, chat, and file sharing. Consult patients
                  anywhere, without leaving Doza.
                </p>
              </PremiumCard>

              {/* Image-Heavy Bento */}
              <PremiumCard className="md:col-span-8 !p-0 overflow-hidden">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center">
                    <Users className="mb-6 text-emerald-600" size={40} />
                    <h3
                      className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}
                    >
                      Specialist Network
                    </h3>
                    <p
                      className={`text-slate-500 text-sm font-light ${poppins.className}`}
                    >
                      Consult colleagues instantly. Share cases, get second
                      opinions—all within the platform.
                    </p>
                  </div>
                  <div className="relative min-h-[250px] bg-emerald-50">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
                      alt="Doctors collaborating"
                      fill
                      className="object-cover mix-blend-multiply opacity-60"
                    />
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* Workflow illustration with Doza logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[2rem] p-10 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-6 ${bebasNeue.className}`}
                  >
                    A Day with Doza Medic
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Patient books appointment via Doza",
                      "You receive notification with full history",
                      "Consult, take notes, diagnose",
                      "Issue prescription + structured dosage plan",
                      "Patient gets reminders; you track adherence",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className={`text-white/90 ${poppins.className}`}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-white/10 rounded-[2rem] backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                    <div className="relative w-24 h-24">
                      <Image
                        src="/logo.png"
                        alt="Doza"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- STRATEGIC ADVANTAGES --- */}
        <section id="advantages" className="py-24 px-6">
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
                BEYOND AN APP
              </h2>
              <p
                className={`text-lg text-slate-500 max-w-2xl mx-auto ${poppins.className}`}
              >
                Doza is designed to become essential healthcare infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {STRATEGIC_ADVANTAGES.map((adv, idx) => (
                <TiltCard key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={adv.image}
                        alt={adv.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                          <adv.medicalIcon size={20} strokeWidth={1.5} />
                        </div>
                        <h3
                          className={`text-2xl font-bold text-white ${bebasNeue.className}`}
                        >
                          {adv.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p
                        className={`text-slate-600 leading-relaxed ${poppins.className}`}
                      >
                        {adv.description}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            {/* Data Moat with varied icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-white rounded-[2rem] border border-slate-200 shadow-2xl p-10 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 blur-[100px] rounded-full" />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3
                    className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                  >
                    The Data Advantage
                  </h3>
                  <p
                    className={`text-slate-600 text-lg leading-relaxed mb-6 ${poppins.className}`}
                  >
                    Every interaction generates anonymized insights. Over time,
                    Doza can identify treatment trends and provide regional
                    health intelligence – becoming indispensable.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium flex items-center gap-1">
                      <HeartPulse size={14} /> Treatment insights
                    </span>
                    <span className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium flex items-center gap-1">
                      <Activity size={14} /> Regional health
                    </span>
                    <span className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium flex items-center gap-1">
                      <Globe size={14} /> Anonymized analytics
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {DATA_ICONS.map((item, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors group"
                    >
                      <item.icon size={24} className="mb-1" />
                      <span className="text-[10px] font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Dark Luxury Investor Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto mt-24 overflow-hidden rounded-[4rem] bg-slate-950 py-24 px-6 text-white"
            >
              <div className="absolute top-0 right-0 h-full w-full opacity-20">
                <div className="absolute top-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-emerald-600 blur-[150px]" />
              </div>

              <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div>
                    <SectionLabel text="Investment Thesis" />
                    <h2
                      className={`text-7xl md:text-9xl font-bold leading-none mb-10 ${bebasNeue.className}`}
                    >
                      OWN THE <br />{" "}
                      <span className="text-emerald-400 italic">STACK</span>
                    </h2>
                    <p
                      className={`text-xl text-slate-400 font-light leading-relaxed mb-12 ${poppins.className}`}
                    >
                      Doza is digital infrastructure for the $9T healthcare
                      market. We capture value from symptom check to final
                      recovery.
                    </p>

                    <div className="flex gap-12">
                      <div>
                        <p
                          className={`text-6xl font-bold ${bebasNeue.className}`}
                        >
                          $2.4B
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                          TAM (Phase 1)
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-6xl font-bold ${bebasNeue.className}`}
                        >
                          320%
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                          YoY Growth
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        icon: Zap,
                        title: "Platform Velocity",
                        desc: "Exponential growth through network effects.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Defensive Moat",
                        desc: "Deep EMR integration makes switching impossible.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                      >
                        <item.icon
                          className="text-emerald-400 mb-4"
                          size={32}
                        />
                        <h4
                          className={`text-2xl font-bold mb-2 ${bebasNeue.className}`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 font-light">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FAQ SECTION (compact) --- */}
        <section id="faq" className="py-20 px-6 bg-slate-50/80">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className={`text-6xl md:text-7xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                FREQUENTLY ASKED
              </h2>
              <p className={`text-lg text-slate-500 ${poppins.className}`}>
                Everything you need to know about Doza.
              </p>
            </motion.div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-md"
                >
                  <summary
                    className={`flex items-center justify-between text-lg font-semibold text-slate-900 list-none ${poppins.className}`}
                  >
                    {faq.q}
                    <Plus className="group-open:rotate-45 transition-transform text-emerald-500" />
                  </summary>
                  <p
                    className={`mt-4 text-slate-600 leading-relaxed ${poppins.className}`}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- CHOOSE YOUR PATH (Role Cards) with reduced padding --- */}
        <section id="choose" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className={`text-6xl md:text-7xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                READY TO EXPERIENCE
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  THE FUTURE?
                </span>
              </h2>
              <p
                className={`text-lg text-slate-500 max-w-2xl mx-auto ${poppins.className}`}
              >
                Choose your path and step into a new era of connected
                healthcare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ROLE_CARDS.map((card, idx) => (
                <TiltCard key={card.role}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden group"
                  >
                    <div className="relative h-48">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-lg`}
                        >
                          <card.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3
                          className={`text-2xl font-bold text-white ${bebasNeue.className}`}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p
                        className={`text-sm font-medium text-emerald-600 mb-3 ${poppins.className}`}
                      >
                        {card.subtitle}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {card.perks.map((perk, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              size={16}
                              className="text-emerald-500 mt-0.5 flex-shrink-0"
                            />
                            <span
                              className={`text-slate-600 text-sm ${poppins.className}`}
                            >
                              {perk}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <MagneticButton
                        onClick={() => onRoleSelect(card.role as UserRole)}
                        className="w-full py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 group/btn"
                      >
                        Select {card.title.split(" ")[1]}
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </MagneticButton>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER (compact) --- */}
        <footer className="py-10 border-t border-slate-200">
          <div className="container mx-auto px-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
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
              <span className="font-bold text-slate-700">
                EBCOM TECHNOLOGIES
              </span>
            </p>
            <p className={`text-xs text-slate-400 mt-4 ${poppins.className}`}>
              © 2026 Doza. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

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
                src="https://youtu.be/1Bpj38bxJ60?si=8U8oqpQndM10Zjqn"
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

// LuxuryCursor component (needed)
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
