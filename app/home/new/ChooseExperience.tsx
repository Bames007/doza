"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Stethoscope, Building2, ArrowRight } from "lucide-react";

export default function RoleSelector({
  onSelectRole,
}: {
  onSelectRole: (role: "user" | "medic" | "center") => void;
}) {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles = [
    {
      id: "user",
      title: "Doza User",
      subtitle: "Personal health companion",
      color: "#2AB04A",
      bg: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "medic",
      title: "Doza Medic",
      subtitle: "Digital clinic",
      color: "#2E98ED",
      bg: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "center",
      title: "Doza Center",
      subtitle: "Hospital OS",
      color: "#85AB8B",
      bg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <section className="h-screen w-full bg-[#050505] flex overflow-hidden">
      {roles.map((role) => (
        <motion.div
          key={role.id}
          onMouseEnter={() => setHoveredRole(role.id)}
          onMouseLeave={() => setHoveredRole(null)}
          onClick={() => onSelectRole(role.id as any)}
          className={`relative flex flex-col justify-center px-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer border-r border-white/5 ${
            hoveredRole === role.id ? "flex-[2.5]" : "flex-1"
          }`}
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src={role.bg}
              className="w-full h-full object-cover brightness-[0.3]"
              animate={{ scale: hoveredRole === role.id ? 1.1 : 1 }}
            />
          </div>

          <div className="relative z-10 text-white">
            <h2 className="text-6xl font-['Bebas_Neue'] leading-none mb-2">
              {role.title}
            </h2>
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: role.color }}
            >
              {role.subtitle}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
