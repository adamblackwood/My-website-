"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   MixedWorkCard — Clickable Grid Card
   Handles active state highlighting and conditional Play icon
   ═══════════════════════════════════════════════════════ */
export default function MixedWorkCard({ project, isSelected, onClick }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className={`relative bg-sidebar border rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                  ${isSelected ? "border-accent shadow-[0_0_25px_rgba(0,210,137,0.15)]" : "border-subtle hover:border-muted"}`}
    >
      {/* ─── Thumbnail Area ─── */}
      <div className="relative aspect-video overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
        
        {/* Conditional Play Button for Motion type */}
        {project.work_type === "motion" && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Play className="w-5 h-5 text-white fill-white mr-[-1px]" />
            </div>
          </div>
        )}
      </div>

      {/* ─── Info Area ─── */}
      <div className="p-4">
        <h3 className={`font-bold text-base mb-1 transition-colors duration-300 ${isSelected ? "text-accent" : "text-white"}`}>
          {project.title}
        </h3>
        <p className="text-muted text-xs">{project.category}</p>
      </div>
    </motion.article>
  );
}
