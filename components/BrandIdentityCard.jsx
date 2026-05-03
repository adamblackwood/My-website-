"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   BrandIdentityCard — Premium Moodboard Style
   Features a visual mockup area with overlaid logo,
   typography info, and color palette swatches.
   ═══════════════════════════════════════════════════════ */
export default function BrandIdentityCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/portfolio/brand-identity/${project.slug}`} className="block group">
        <motion.article
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(0, 210, 137, 0.4)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-sidebar border border-subtle rounded-xl overflow-hidden h-full flex flex-col relative"
        >
          {/* ─── Top Section: The Mockup / Visual Area (60% height) ─── */}
          <div className="relative h-72 md:h-80 overflow-hidden">
            {/* Gradient Fallback for Mockup Image */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
            >
              {/* Subtle grid pattern overlay for depth */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-sidebar via-sidebar/40 to-transparent z-10" />

            {/* ─── Primary Logo Overlay (Centered) ─── */}
            <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
              {/* Since actual logo images are placeholders, we render the brand name as the logo mark */}
              <h2 
                className="text-5xl md:text-6xl font-extrabold text-white/90 tracking-tight select-none drop-shadow-lg"
                dir="ltr" // Force LTR for brand names like RAFAH
              >
                {project.brandName}
              </h2>
            </div>
          </div>

          {/* ─── Bottom Section: Brand System Details ─── */}
          <div className="p-6 flex-grow flex flex-col justify-between gap-6">
            {/* Top Row: Brand Info & Arrow */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-accent transition-colors duration-300">
                  {project.brandName}
                </h3>
                <p className="text-muted text-sm">{project.category}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300 mt-1">
                <ArrowUpLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Row: Typography & Color Palette Swatches */}
            <div className="flex items-end justify-between border-t border-subtle pt-5">
              {/* Typography Used */}
              <div>
                <p className="text-[10px] text-muted/70 uppercase tracking-widest mb-1.5">Typography</p>
                <p className="text-white/80 text-xs font-medium" dir="ltr">
                  {project.brandFonts.join(" & ")}
                </p>
              </div>

              {/* Color Swatches */}
              <div className="flex items-center gap-2">
                {project.brandColors.map((color, index) => (
                  <div key={index} className="relative group/swatch">
                    <span
                      className="block w-7 h-7 rounded-full border-2 border-subtle shadow-sm transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: color.hex }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
