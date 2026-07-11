"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

// --- Types (unchanged) ---
type MetricKey = "admissions" | "hoursSaved" | "satisfaction";
type StoryMetrics = {
  admissions: number;
  hoursSaved: number;
  satisfaction: number;
};
type Story = {
  id: string;
  name: string;
  role: string;
  image: string;
  logo: string;
  quote: string;
  before: StoryMetrics;
  after: StoryMetrics;
};
type Metric = {
  key: MetricKey;
  label: string;
  unit: string;
  color: string;
  max: number | null;
};

// --- Data (unchanged) ---
const stories: Story[] = [
  {
    id: "hospital",
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    logo: "City General Hospital",
    quote:
      "Doza transformed our hospital's efficiency. The scheduling alone saved us 200+ staff hours monthly.",
    before: { admissions: 2100, hoursSaved: 0, satisfaction: 72 },
    after: { admissions: 3100, hoursSaved: 220, satisfaction: 99 },
  },
  {
    id: "pharmacy",
    name: "James Rodriguez",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    logo: "Metro Pharmacy Chain",
    quote:
      "The EMR and inventory management system revolutionized our 12‑location pharmacy chain overnight.",
    before: { admissions: 0, hoursSaved: 0, satisfaction: 65 },
    after: { admissions: 62, hoursSaved: 0, satisfaction: 98 },
  },
  {
    id: "vision",
    name: "Dr. Emily Watson",
    role: "Lead Ophthalmologist",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80",
    logo: "Vision Care Specialists",
    quote:
      "Doza's specialized features for vision care made patient management and record tracking seamless.",
    before: { admissions: 180, hoursSaved: 0, satisfaction: 70 },
    after: { admissions: 243, hoursSaved: 0, satisfaction: 95 },
  },
];

const metrics: Metric[] = [
  {
    key: "admissions",
    label: "Monthly Admissions",
    unit: "",
    color: "#2AB04A",
    max: null,
  },
  {
    key: "hoursSaved",
    label: "Staff Hours Saved",
    unit: " hrs",
    color: "#2E98ED",
    max: null,
  },
  {
    key: "satisfaction",
    label: "Patient Satisfaction",
    unit: "%",
    color: "#85AB8B",
    max: 100,
  },
];

const globalMax: Record<MetricKey, number> = {
  admissions: Math.max(
    ...stories.flatMap((s) => [s.before.admissions, s.after.admissions]),
    1,
  ),
  hoursSaved: Math.max(
    ...stories.flatMap((s) => [s.before.hoursSaved, s.after.hoursSaved]),
    1,
  ),
  satisfaction: 100,
};

const getDisplayValue = (key: MetricKey, val: number) => {
  if (key === "satisfaction") return `${val}%`;
  if (key === "hoursSaved") return `${val} hrs`;
  return val;
};

const MetricLineGraph = ({
  metric,
  before,
  after,
}: {
  metric: Metric;
  before: number;
  after: number;
}) => {
  const maxVal = metric.max ?? globalMax[metric.key];
  const safeMax = maxVal > 0 ? maxVal : 1;

  const height = 160;
  const width = 280;
  const padding = { top: 15, bottom: 30, left: 35, right: 20 };
  const innerHeight = height - padding.top - padding.bottom;
  const innerWidth = width - padding.left - padding.right;

  const beforeY = padding.top + innerHeight - (before / safeMax) * innerHeight;
  const afterY = padding.top + innerHeight - (after / safeMax) * innerHeight;
  const startX = padding.left;
  const endX = width - padding.right;

  const [progress, setProgress] = useState(0);
  const direction = useRef(1);
  const animFrame = useRef<number | null>(null); // ✅ fixed

  useEffect(() => {
    const animate = () => {
      setProgress((prev) => {
        let next = prev + direction.current * 0.008;
        if (next >= 1) {
          next = 1;
          direction.current = -1;
        } else if (next <= 0) {
          next = 0;
          direction.current = 1;
        }
        return next;
      });
      animFrame.current = requestAnimationFrame(animate);
    };
    animFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  const dotX = startX + (endX - startX) * progress;
  const dotY = beforeY + (afterY - beforeY) * progress;
  const currentValue = before + (after - before) * progress;

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    label: string;
  } | null>(null);
  const handleDotMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      label: `Current: ${getDisplayValue(metric.key, currentValue)}`,
    });
  };
  const handleDotMouseLeave = () => setTooltip(null);

  return (
    <div className="relative w-full flex flex-col items-center">
      <p
        className={`text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ${poppins.className}`}
      >
        {metric.label}
      </p>
      <div className="relative">
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="max-w-[280px] mx-auto"
        >
          {/* grid & axes as before */}
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const y = padding.top + innerHeight * (1 - tick);
            return (
              <line
                key={tick}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="0.5"
                strokeDasharray="3"
              />
            );
          })}
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={height - padding.bottom}
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <line
            x1={padding.left}
            y1={height - padding.bottom}
            x2={width - padding.right}
            y2={height - padding.bottom}
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />

          <motion.line
            x1={startX}
            y1={beforeY}
            x2={endX}
            y2={afterY}
            stroke={metric.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <circle
            cx={startX}
            cy={beforeY}
            r="5"
            fill="#CBD5E1"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx={endX}
            cy={afterY}
            r="5"
            fill={metric.color}
            stroke="white"
            strokeWidth="2"
          />

          <circle
            cx={dotX}
            cy={dotY}
            r="6"
            fill={metric.color}
            stroke="white"
            strokeWidth="2"
            className="cursor-pointer"
            onMouseEnter={handleDotMouseEnter}
            onMouseLeave={handleDotMouseLeave}
          />
          <circle
            cx={dotX}
            cy={dotY}
            r="12"
            fill={metric.color}
            opacity="0.2"
          />
        </svg>
      </div>

      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: "fixed",
              left: tooltip.x,
              top: tooltip.y,
              transform: "translateX(-50%)",
            }}
            className="bg-slate-800 text-white text-xs rounded-md px-3 py-1.5 shadow-lg z-50 pointer-events-none whitespace-nowrap"
          >
            {tooltip.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component (unchanged, except we removed unused imports) ---
export default function CenterStories() {
  const [activeStoryId, setActiveStoryId] = useState(stories[0].id);
  const activeStory = stories.find((s) => s.id === activeStoryId)!;
  const [graphKey, setGraphKey] = useState(0);

  useEffect(() => {
    setGraphKey((prev) => prev + 1);
  }, [activeStoryId]);

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-tighter ${bebasNeue.className}`}
            >
              PROVEN RESULTS <br />
              <span className="text-emerald-600">ACROSS THE NETWORK</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            Trusted by clinicians worldwide. See the operational improvements
            Doza delivers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-200 pb-4">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeStoryId === story.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {story.logo}
            </button>
          ))}
        </div>

        {/* Quote & Profile */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={activeStory.image}
                alt={activeStory.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-100"
              />
              <div>
                <h3
                  className={`text-xl font-bold text-slate-800 ${bebasNeue.className}`}
                >
                  {activeStory.name}
                </h3>
                <p
                  className={`text-xs text-emerald-600 font-semibold uppercase tracking-wider ${poppins.className}`}
                >
                  {activeStory.role}
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
              <p
                className={`text-slate-600 italic text-base leading-relaxed ${poppins.className}`}
              >
                "{activeStory.quote}"
              </p>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric) => {
              const beforeVal = activeStory.before[metric.key];
              const afterVal = activeStory.after[metric.key];
              const change = ((afterVal - beforeVal) / (beforeVal || 1)) * 100;
              const isPositive = change >= 0;
              return (
                <div
                  key={metric.key}
                  className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100"
                >
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 ${poppins.className}`}
                  >
                    {metric.label.split(" ")[0]}
                  </p>
                  <div
                    className={`text-2xl font-bold text-slate-800 ${bebasNeue.className}`}
                  >
                    {getDisplayValue(metric.key, afterVal)}
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-[10px] text-slate-400">
                      vs before
                    </span>
                    <span
                      className={`text-[10px] font-bold ${isPositive ? "text-emerald-600" : "text-rose-500"}`}
                    >
                      {isPositive
                        ? `+${Math.round(change)}%`
                        : `${Math.round(change)}%`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated Line Graphs Row */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h3
            className={`text-2xl font-bold text-slate-800 mb-8 text-center ${bebasNeue.className}`}
          >
            Metric Growth (Before → After)
          </h3>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
            {metrics.map((metric) => (
              <MetricLineGraph
                key={`${metric.key}-${graphKey}`}
                metric={metric}
                before={activeStory.before[metric.key]}
                after={activeStory.after[metric.key]}
              />
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-20 md:mt-32 w-24 h-px bg-emerald-600/30 mx-auto" />
      </div>
    </section>
  );
}
