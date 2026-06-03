"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Activity,
  Users,
  TrendingUp,
  Globe,
  Clock,
  Shield,
  Database,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// BoomerangVideoBg – captures and loops video frames (15fps)
// ============================================================
function BoomerangVideoBg({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const displayCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const [framesReady, setFramesReady] = useState(false);
  const framesRef = React.useRef<HTMLCanvasElement[]>([]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const frames: HTMLCanvasElement[] = [];
    let capturing = true;
    let lastTime = -1;
    const MAX_WIDTH = 960;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;
      lastTime = video.currentTime;
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;
      const scale = Math.min(1, MAX_WIDTH / vw);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(vw * scale);
      canvas.height = Math.round(vh * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      frames.push(canvas);
    };

    const vfcVideo = video as any;
    const hasVFC = typeof vfcVideo.requestVideoFrameCallback === "function";
    let rafId = 0;
    const rafLoop = () => {
      captureFrame();
      if (capturing) rafId = requestAnimationFrame(rafLoop);
    };
    const vfcLoop = () => {
      captureFrame();
      if (capturing && vfcVideo.requestVideoFrameCallback)
        vfcVideo.requestVideoFrameCallback(vfcLoop);
    };

    const onEnded = () => {
      capturing = false;
      if (frames.length > 0) {
        framesRef.current = frames;
        setFramesReady(true);
      }
    };
    const onLoaded = () => {
      video.play().catch(() => {});
      if (hasVFC) vfcVideo.requestVideoFrameCallback(vfcLoop);
      else rafId = requestAnimationFrame(rafLoop);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    if (video.readyState >= 1) onLoaded();
    return () => {
      capturing = false;
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, [src]);

  React.useEffect(() => {
    if (!framesReady) return;
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const frames = framesRef.current;
    if (frames.length === 0) return;
    const first = frames[0];
    canvas.width = first.width;
    canvas.height = first.height;
    let index = 0,
      direction = 1,
      last = performance.now();
    const interval = 1000 / 15;
    let rafId = 0;
    const render = (now: number) => {
      if (now - last >= interval) {
        last = now;
        ctx.drawImage(frames[index], 0, 0);
        index += direction;
        if (index >= frames.length - 1) {
          index = frames.length - 1;
          direction = -1;
        } else if (index <= 0) {
          index = 0;
          direction = 1;
        }
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [framesReady]);

  return (
    <div className={className ?? "absolute inset-0 w-full h-full"}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        style={{ display: framesReady ? "none" : "block" }}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />
      <canvas
        ref={displayCanvasRef}
        className="w-full h-full object-cover"
        style={{ display: framesReady ? "block" : "none" }}
      />
    </div>
  );
}

// ============================================================
// CenterHero – Optimized for Mobile and Desktop
// ============================================================
export default function CenterHero() {
  const benefits = [
    {
      icon: Globe,
      title: "Online Infrastructure",
      desc: "Run your entire facility from any device. Manage beds, staff, and records in real time.",
    },
    {
      icon: Users,
      title: "Staff Management",
      desc: "Easily assign roles, track performance, and coordinate shifts – no more spreadsheets.",
    },
    {
      icon: TrendingUp,
      title: "Higher ROI",
      desc: "Reduce administrative costs by 35% and increase patient throughput by 20% in months.",
    },
    {
      icon: Activity,
      title: "Patient Flow",
      desc: "Know exactly where each patient is – from arrival to discharge – and remove bottlenecks.",
    },
    {
      icon: Shield,
      title: "Unified EMR",
      desc: "Complete, cross-department medical records. No lost files, no repeated tests.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Mission-critical reliability with 99.9% uptime and dedicated support.",
    },
    {
      icon: Database,
      title: "Data Insights",
      desc: "Dashboards that show occupancy, staff productivity, and revenue trends.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [benefits.length]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-black">
      <BoomerangVideoBg
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4"
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-emerald-900/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16 pt-24 md:pt-16">
        {/* Main Content Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Left Column: Text */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="font-['Bebas_Neue'] text-white text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter mb-6">
              The Operating System <br />
              <span className="text-emerald-400">for Modern Care</span>
            </h1>
            <p className="font-['Poppins'] text-white/70 text-base md:text-lg max-w-md font-light leading-relaxed mb-8">
              Doza Center brings your entire medical infrastructure into one
              platform. Real-time patient tracking, unified records, and
              powerful analytics.
            </p>
            <button className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold font-['Poppins'] text-sm uppercase tracking-wider hover:bg-emerald-400 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2">
              Book Now
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Carousel */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            <div className="relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-3 w-fit bg-emerald-500/10 rounded-2xl border border-emerald-500/20 mb-4">
                    {React.createElement(benefits[activeIndex].icon, {
                      size: 28,
                      className: "text-emerald-400",
                    })}
                  </div>
                  <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-white mb-2">
                    {benefits[activeIndex].title}
                  </h3>
                  <p className="font-['Poppins'] text-white/60 text-sm leading-relaxed">
                    {benefits[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              <div className="flex gap-2 mt-6">
                {benefits.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-8 bg-emerald-400"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics (Responsive Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          {[
            { label: "Uptime", val: "99.9%" },
            { label: "Cost Reduction", val: "35%" },
            { label: "Throughput", val: "20%" },
            { label: "Support", val: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-['Bebas_Neue'] text-2xl md:text-3xl text-white">
                {stat.val}
              </div>
              <div className="font-['Poppins'] text-[10px] text-white/40 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
