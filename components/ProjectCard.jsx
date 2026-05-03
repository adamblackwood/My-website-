"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   ProjectCard — Dark card with hover lift + green glow
   Used in the "أحدث أعمالي" section
   ═══════════════════════════════════════════════════════ */
export default function ProjectCard({ title, category, gradient }) {
  return (
    <motion.article
      whileHover={{
        y: -5,
        boxShadow: "0 12px 40px rgba(0, 210, 137, 0.07)",
        borderColor: "rgba(0, 210, 137, 0.25)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-sidebar border border-subtle rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* ─── Image / Placeholder Area ─── */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Gradient background as project thumbnail placeholder */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          {/* Decorative grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Center icon — becomes accent on hover */}
          <div
            className="w-14 h-14 rounded-full border border-subtle
                       flex items-center justify-center
                       group-hover:border-accent/40
                       transition-colors duration-500"
          >
            <ArrowUpLeft
              className="w-5 h-5 text-muted
                         group-hover:text-accent
                         transition-colors duration-500"
            />
          </div>
        </div>

        {/* Hover overlay wash */}
        <div
          className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.04]
                     transition-colors duration-500"
        />
      </div>

      {/* ─── Text Content ─── */}
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted text-xs tracking-wide">{category}</p>
        </div>

        {/* Subtle arrow indicator */}
        <ArrowUpLeft
          className="w-4 h-4 text-subtle group-hover:text-accent
                     transition-all duration-300
                     group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </motion.article>
  );
}
