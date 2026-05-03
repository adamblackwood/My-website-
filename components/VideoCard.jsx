"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   VideoCard — Standard Grid Video Card
   Smaller 16:9 ratio, duration tag, dynamic brightness
   ═══════════════════════════════════════════════════════ */
export default function VideoCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/portfolio/motion-graphics/${project.slug}`} className="block group">
        <article className="relative aspect-video rounded-xl overflow-hidden border border-subtle bg-sidebar cursor-pointer">
          {/* ─── Thumbnail / Gradient Fallback ─── */}
          <div className="absolute inset-0 brightness-75 group-hover:brightness-100 transition-all duration-500">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* ─── Duration Tag (Top-Start / Top-Right in RTL) ─── */}
          <div className="absolute top-3 start-3 z-30 bg-black/70 backdrop-blur-sm text-xs text-white font-medium px-2 py-1 rounded">
            {project.duration}
          </div>

          {/* ─── Center Play Button ─── */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm
                         flex items-center justify-center
                         group-hover:bg-accent/30 group-hover:backdrop-blur-md
                         transition-colors duration-300"
            >
              <Play className="w-5 h-5 text-white fill-white mr-[-1px]" />
            </div>
          </div>

          {/* ─── Bottom Gradient Overlay ─── */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

          {/* ─── Info (Overlaid at bottom) ─── */}
          <div className="absolute bottom-0 start-0 end-0 p-4 z-20">
            <h3 className="text-white font-bold text-sm mb-1 drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-muted text-xs">{project.category}</p>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
