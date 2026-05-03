"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   FeaturedVideoCard — Cinematic Hero Video
   Large 16:9 aspect ratio, frosted play button, 
   gradient overlay for text legibility
   ═══════════════════════════════════════════════════════ */
export default function FeaturedVideoCard({ project }) {
  return (
    <Link href={`/portfolio/motion-graphics/${project.slug}`} className="block group">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer"
      >
        {/* ─── Thumbnail / Gradient Fallback ─── */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Cinematic grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        {/* ─── Dark Gradient Overlay (Bottom to Top) ─── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

        {/* ─── Center Play Button ─── */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md
                       flex items-center justify-center
                       shadow-lg shadow-black/20
                       group-hover:bg-accent/20 group-hover:backdrop-blur-lg
                       transition-colors duration-300"
          >
            <Play className="w-8 h-8 text-white fill-white mr-[-2px]" /> 
            {/* Slight margin adjustment to visually center the play triangle */}
          </motion.div>
        </div>

        {/* ─── Info (Bottom-Start / Bottom-Right in RTL) ─── */}
        <div className="absolute bottom-0 start-0 end-0 p-8 z-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
            {project.title}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-muted text-sm">{project.category}</span>
            <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-sm text-white font-medium">
              {project.duration}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
