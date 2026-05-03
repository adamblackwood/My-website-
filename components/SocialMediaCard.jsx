"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   SocialMediaCard — Promotional / E-Commerce style
   Features an aspect-[4/5] image area with bottom gradient,
   niche tag, and smooth image zoom on hover.
   ═══════════════════════════════════════════════════════ */
export default function SocialMediaCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/portfolio/social-media/${project.slug}`}>
        <motion.article
          whileHover={{
            borderColor: "rgba(0, 210, 137, 0.4)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-sidebar border border-subtle rounded-xl overflow-hidden h-full flex flex-col"
        >
          {/* ─── Image / Preview Area ─── */}
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* Gradient Fallback / Thumbnail */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Decorative subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </motion.div>

            {/* ─── Niche Tag (Top-Start / Top-Right in RTL) ─── */}
            <div className="absolute top-3 start-3 z-20">
              <span
                className="px-2.5 py-1 text-[10px] font-bold tracking-widest
                           bg-accent text-main rounded"
                dir="ltr" // Force LTR so "COFFEE SHOP" doesn't reverse
              >
                {project.niche_tag}
              </span>
            </div>

            {/* ─── Bottom Gradient Overlay for Text Pop ─── */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
          </div>

          {/* ─── Text Content ─── */}
          <div className="p-5 space-y-2 mt-auto">
            <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
