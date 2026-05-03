"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   Circular Progress Ring — SVG based
   Animates stroke-dashoffset when in view
   ═══════════════════════════════════════════════════════ */
function CircularProgress({ percentage }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-36 h-36 mx-auto my-4">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Track */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#222222"
          strokeWidth="8"
        />
        {/* Progress */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#00D289"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-2xl font-extrabold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Bar Chart — CSS based
   Animates height from 0 to target when in view
   ═══════════════════════════════════════════════════════ */
function BarChart({ percentage, barHeights }) {
  return (
    <div className="relative w-full h-36 my-4 px-2 flex items-end gap-3">
      {/* Background percentage faint text */}
      <span className="absolute top-0 end-2 text-5xl font-extrabold text-white/[0.03] select-none pointer-events-none">
        {percentage}%
      </span>
      
      {barHeights.map((height, index) => (
        <div key={index} className="relative flex-1 bg-subtle rounded-t-md overflow-hidden" style={{ height: '100%' }}>
          <motion.div
            className="absolute bottom-0 w-full bg-accent rounded-t-md"
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.15 }}
          />
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   InfographicCard Component
   ═══════════════════════════════════════════════════════ */
export default function InfographicCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = project.icon;

  return (
    <motion.article
      ref={ref}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 50px rgba(0, 210, 137, 0.08)",
        borderColor: "rgba(0, 210, 137, 0.3)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative bg-sidebar border border-subtle rounded-xl p-6 flex flex-col overflow-hidden group"
    >
      {/* ─── Subtle Grid Background Overlay ─── */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#00D289 1px, transparent 1px), linear-gradient(90deg, #00D289 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* ─── Top Row: Icon & Category ─── */}
      <div className="relative flex items-center justify-between mb-4 z-10">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <span className="text-[11px] font-medium text-muted tracking-wider uppercase bg-main/50 px-2.5 py-1 rounded-full border border-subtle">
          {project.category}
        </span>
      </div>

      {/* ─── Middle Row: Chart Visualization ─── */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        {project.chart_type === "circular_progress" ? (
          <CircularProgress percentage={project.percentage} />
        ) : (
          <BarChart percentage={project.percentage} barHeights={project.barHeights} />
        )}
      </div>

      {/* ─── Bottom Row: Title & Link ─── */}
      <div className="relative z-10 mt-4 pt-4 border-t border-subtle">
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <Link 
          href={`/portfolio/infographic/${project.slug}`} 
          className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300"
        >
          <span>عرض التفاصيل</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
