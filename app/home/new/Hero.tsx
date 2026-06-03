"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Facebook,
  Instagram,
  User,
  Stethoscope,
  Building2,
  Quote,
  Star,
} from "lucide-react";
import Image from "next/image";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l7-7" />
    <path d="M20 4l-7 7" />
  </svg>
);

const avatarImages: Record<string, string> = {
  "Amina K.":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=56&h=56&fit=crop",
  "Michael O.":
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=56&h=56&fit=crop",
  "Priya S.":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=56&h=56&fit=crop",
  "John D.":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop",
  "Dr. Adaobi N.":
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=56&h=56&fit=crop",
  "Dr. Kwame A.":
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=56&h=56&fit=crop",
  "Dr. Fatima B.":
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=56&h=56&fit=crop",
  "Dr. Emeka O.":
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=56&h=56&fit=crop",
  "Medina General":
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=56&h=56&fit=crop",
  "Coast Clinic":
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=56&h=56&fit=crop",
  "City Hospital":
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=56&h=56&fit=crop",
  "Wellness Center":
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=56&h=56&fit=crop",
};

type SlideRole = "user" | "medic" | "center";
type Review = { name: string; rating: number; comment: string };
type Benefits = { patient: string[]; medic: string[]; center: string[] };
type Slide = {
  id: number;
  title: string;
  desc: string;
  img: string;
  gradientColor: string;
  isCinematic: boolean;
  cta: string;
  becomePoints: string[];
  benefits: Benefits;
  reviews: Review[];
  role: SlideRole | null;
};

const slides: Slide[] = [
  // ... (your existing slides array, unchanged)
  {
    id: 1,
    title: "Doza",
    desc: "The healthcare ecosystem. Connecting patients, doctors, and centers into one continuous care system.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format",
    gradientColor: "#2AB04A",
    isCinematic: true,
    cta: "Explore ecosystem",
    becomePoints: [],
    benefits: { patient: [], medic: [], center: [] },
    reviews: [],
    role: null,
  },
  {
    id: 2,
    title: "Why Doza",
    desc: "From episodic visits to continuous health journeys. Better outcomes, lower costs, complete control.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8c25d0a?q=80&w=2070&auto=format",
    gradientColor: "#2E98ED",
    isCinematic: true,
    cta: "See the difference",
    becomePoints: [],
    benefits: { patient: [], medic: [], center: [] },
    reviews: [],
    role: null,
  },
  {
    id: 3,
    title: "Doza User",
    desc: "Your digital medical identity. Track symptoms, manage medications, and own your health journey.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format",
    gradientColor: "#2AB04A",
    isCinematic: false,
    becomePoints: [
      "Build your lifelong health profile",
      "Get medication reminders & adherence tracking",
      "Video consultations & secure records",
    ],
    benefits: {
      patient: [
        "Symptom checker & triage",
        "Dosage reminders",
        "Lab results & history",
        "Direct doctor chat",
      ],
      medic: [],
      center: [],
    },
    cta: "Start your health journey",
    role: "user",
    reviews: [
      {
        name: "Amina K.",
        rating: 5,
        comment:
          "Finally a health app that actually works. My doctor follows up regularly.",
      },
      {
        name: "Michael O.",
        rating: 4.5,
        comment:
          "Medication reminders saved me from forgetting my blood pressure pills.",
      },
      {
        name: "Priya S.",
        rating: 5,
        comment:
          "Video consultations are seamless. Love my digital health record.",
      },
      {
        name: "John D.",
        rating: 4,
        comment: "Easy to use, quick appointment booking. Recommended.",
      },
    ],
  },
  {
    id: 4,
    title: "Doza Medic",
    desc: "Your digital hospital workstation. Diagnose, prescribe, monitor – all in one intelligent platform.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format",
    gradientColor: "#2E98ED",
    isCinematic: false,
    becomePoints: [
      "Access complete patient histories instantly",
      "Issue digital prescriptions & dosage plans",
      "Collaborate with specialists across centers",
    ],
    benefits: {
      patient: [],
      medic: [
        "Clinical insights dashboard",
        "Voice notes & templates",
        "Cross‑center referrals",
        "60% less admin work",
      ],
      center: [],
    },
    cta: "Join the Medic Network",
    role: "medic",
    reviews: [
      {
        name: "Dr. Adaobi N.",
        rating: 5,
        comment:
          "The clinical insights are surprisingly accurate. Huge time saver.",
      },
      {
        name: "Dr. Kwame A.",
        rating: 4.5,
        comment: "Cross‑center referrals work flawlessly. My patients love it.",
      },
      {
        name: "Dr. Fatima B.",
        rating: 5,
        comment:
          "Prescription automation changed my practice. No more handwriting errors.",
      },
      {
        name: "Dr. Emeka O.",
        rating: 4,
        comment: "Great platform, needs more lab integrations but solid.",
      },
    ],
  },
  {
    id: 5,
    title: "Doza Center",
    desc: "Intelligent hospital operations. Real‑time patient flow, integrated records, and connected care.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format",
    gradientColor: "#2AB04A",
    isCinematic: false,
    becomePoints: [
      "Onboard in 48 hours",
      "Integrate with existing EMR/EHR",
      "Unlock data‑driven growth",
    ],
    benefits: {
      patient: [],
      medic: [],
      center: [
        "Bed & resource tracking",
        "Predictive occupancy",
        "Revenue cycle insights",
        "Patient satisfaction scores",
      ],
    },
    cta: "Power your center",
    role: "center",
    reviews: [
      {
        name: "Medina General",
        rating: 5,
        comment: "Patient flow improved instantly. Our staff adapted quickly.",
      },
      {
        name: "Coast Clinic",
        rating: 4.5,
        comment: "Integration was smooth. Analytics dashboard is eye‑opening.",
      },
      {
        name: "City Hospital",
        rating: 5,
        comment: "Reduced no‑shows by 40% with automated reminders.",
      },
      {
        name: "Wellness Center",
        rating: 4,
        comment: "Great support team. Looking forward to more features.",
      },
    ],
  },
];

interface DozaHeroProps {
  onRoleSelect: (role: "user" | "medic" | "center") => void;
  onExploreClick?: () => void;
  onSeeDifferenceClick?: () => void;
}

export default function DozaHero({
  onRoleSelect,
  onExploreClick,
  onSeeDifferenceClick,
}: DozaHeroProps) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelDelta = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const currentSlide = slides[index];
  if (!currentSlide) return null;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    if (index < slides.length - 1) {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, index]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    if (index > 0) {
      setIsTransitioning(true);
      setIndex((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, index]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentIdx = indexRef.current;
      if (currentIdx === slides.length - 1 && e.deltaY > 0) return;
      if (currentIdx === 0 && e.deltaY < 0) return;
      e.preventDefault();
      if (isTransitioning) return;
      wheelDelta.current += e.deltaY;
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(() => (wheelDelta.current = 0), 150);
      if (Math.abs(wheelDelta.current) > 40) {
        wheelDelta.current > 0 ? nextSlide() : prevSlide();
        wheelDelta.current = 0;
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [nextSlide, prevSlide, isTransitioning]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  const gradientStyle = {
    background: `linear-gradient(90deg, ${currentSlide.gradientColor}40, transparent 70%)`,
  };

  const getBenefitCard = () => {
    if (currentSlide.id === 3)
      return {
        icon: <User size={24} />,
        title: "For Patients",
        points: currentSlide.benefits.patient,
        brandColor: "#2AB04A",
      };
    if (currentSlide.id === 4)
      return {
        icon: <Stethoscope size={24} />,
        title: "For Medics",
        points: currentSlide.benefits.medic,
        brandColor: "#2E98ED",
      };
    if (currentSlide.id === 5)
      return {
        icon: <Building2 size={24} />,
        title: "For Centers",
        points: currentSlide.benefits.center,
        brandColor: "#2AB04A",
      };
    return null;
  };
  const benefitCard = getBenefitCard();

  const handleCinematicClick = () => {
    if (currentSlide.id === 1 && onExploreClick) onExploreClick();
    else if (currentSlide.id === 2 && onSeeDifferenceClick)
      onSeeDifferenceClick();
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ touchAction: "none" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
      />
      <div
        className="absolute inset-0 z-10 backdrop-blur-xl pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 45%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 45%)",
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="absolute inset-0 z-10" style={gradientStyle} />

      {/* Responsive container – smaller side padding on mobile */}
      <div className="relative z-20 h-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8">
        <header className="flex justify-between items-center">
          <img
            src="/logo.png"
            alt="DOZA Logo"
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </header>

        <div className="flex-1 flex flex-col justify-end pb-8 sm:pb-12 md:pb-16">
          {currentSlide.isCinematic ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left"
              >
                <h1 className="font-['Bebas_Neue'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white">
                  {currentSlide.title}
                </h1>
                <p className="font-['Poppins'] text-white/70 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-lg mx-auto sm:mx-0 font-light">
                  {currentSlide.desc}
                </p>
                <button
                  onClick={handleCinematicClick}
                  className="group mt-8 sm:mt-10 flex items-center gap-3 py-2 pl-2 pr-5 sm:pr-6 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 mx-auto sm:mx-0"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-12">
                    <Play
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                      className="ml-0.5"
                    />
                  </div>
                  <span className="font-['Poppins'] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
                    {currentSlide.cta}
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14">
              {/* Left column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-end mb-6 lg:mb-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4 sm:space-y-5"
                  >
                    <h1 className="font-['Bebas_Neue'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white">
                      {currentSlide.title}
                    </h1>
                    <p className="font-['Poppins'] text-white/80 text-sm sm:text-base md:text-lg max-w-md font-light">
                      {currentSlide.desc}
                    </p>

                    {/* Become card */}
                    <div className="mt-4 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10">
                      <h3 className="font-['Poppins'] text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2AB04A]">
                        Become a Doza{" "}
                        {currentSlide.title.split(" ")[1] || "Member"}
                      </h3>
                      <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                        {currentSlide.becomePoints.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-white/70 text-xs sm:text-sm font-['Poppins']"
                          >
                            <span className="text-[#2E98ED] text-lg leading-5">
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() =>
                        currentSlide.role && onRoleSelect(currentSlide.role)
                      }
                      className="group mt-3 sm:mt-4 flex items-center gap-3 py-2 pl-2 pr-5 sm:pr-6 rounded-full bg-[#2AB04A]/20 border border-white/20 hover:bg-[#2AB04A]/40 transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-12 group-hover:bg-[#2AB04A] group-hover:text-white">
                        <Play
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                          className="ml-0.5"
                        />
                      </div>
                      <span className="font-['Poppins'] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 group-hover:text-white">
                        {currentSlide.cta}
                      </span>
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right column */}
              <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6">
                {benefitCard && (
                  <SingleBenefitCard
                    icon={benefitCard.icon}
                    title={benefitCard.title}
                    points={benefitCard.points}
                    brandColor={benefitCard.brandColor}
                  />
                )}
                {currentSlide.reviews.length > 0 && (
                  <ReviewArch
                    reviews={currentSlide.reviews}
                    brandColor="#2AB04A"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Responsive footer */}
        <footer className="flex flex-wrap justify-between items-center pt-4 sm:pt-6 border-t border-white/10 gap-3">
          <div className="flex items-center gap-3 sm:gap-5">
            <Facebook
              size={16}
              className="text-white/50 cursor-pointer hover:text-[#2AB04A] transition"
            />
            <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 cursor-pointer hover:text-white/80 transition" />
            <Instagram
              size={16}
              className="text-white/50 cursor-pointer hover:text-[#2E98ED] transition"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-3xl sm:text-5xl md:text-6xl font-mono font-bold text-white leading-none tracking-tighter">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm sm:text-base text-white/30 font-mono mx-0.5 sm:mx-1">
                /
              </span>
              <span className="text-sm sm:text-base font-mono text-white/30">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
            <div className="w-16 sm:w-24 md:w-36 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2AB04A] transition-all duration-700 rounded-full"
                style={{ width: `${((index + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap");
      `}</style>
    </div>
  );
}

// ---------- Helper components (with responsive adjustments) ----------
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  brandColor: string;
}
function SingleBenefitCard({
  icon,
  title,
  points,
  brandColor,
}: BenefitCardProps) {
  return (
    <div className="group relative bg-[#0a0a0a] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50">
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ backgroundColor: brandColor }}
      />
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${brandColor}20` }}
          >
            <div
              style={{ color: brandColor }}
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              {icon}
            </div>
          </div>
          <h3 className="font-['Poppins'] text-base sm:text-lg font-semibold tracking-wide text-white">
            {title}
          </h3>
        </div>
        <ul className="space-y-2 sm:space-y-3">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="text-xs sm:text-sm text-white/80 font-['Poppins'] flex items-start gap-2 sm:gap-3 leading-relaxed"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: brandColor }}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ReviewArchProps {
  reviews: Review[];
  brandColor: string;
}
function ReviewArch({ reviews, brandColor }: ReviewArchProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  // Responsive avatar offsets: smaller lift on mobile
  const avatarOffsets = [
    "translate-y-0",
    "-translate-y-2",
    "-translate-y-2",
    "translate-y-0",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-center items-end gap-3 sm:gap-4 py-4 sm:py-8">
        {reviews.map((review, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
              className={`group flex flex-col items-center transition-all duration-300 ${avatarOffsets[idx]} ${isSelected ? "scale-110" : "hover:scale-105"}`}
            >
              <img
                src={
                  avatarImages[review.name] ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop"
                }
                alt={review.name}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl object-cover transition-all duration-300 border-2 ${
                  isSelected
                    ? "border-[#2AB04A] grayscale-0 ring-4 ring-[#2AB04A]/20"
                    : "border-white/10 grayscale hover:grayscale-0 hover:border-white/30"
                }`}
              />
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {selectedIdx !== null && (
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mt-4 sm:mt-8 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/5 shadow-2xl"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <img
                src={
                  avatarImages[reviews[selectedIdx].name] ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop"
                }
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl object-cover border border-white/10"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <h4 className="font-['Poppins'] text-white font-bold text-sm sm:text-lg">
                    {reviews[selectedIdx].name}
                  </h4>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(reviews[selectedIdx].rating)
                            ? "text-[#2AB04A] fill-[#2AB04A]"
                            : "text-white/10"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-['Poppins'] italic">
                  "{reviews[selectedIdx].comment}"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
