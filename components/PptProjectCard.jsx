"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   PptProjectCard — Animated card with layout prop
   'layout' enables smooth position transitions when
   sibling items are filtered out/in.
   ═══════════════════════════════════════════════════════ */
export default function PptProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/portfolio/ppt/${project.slug}`}>
        <motion.article
          whileHover={{
            y: -5,
            boxShadow: "0 12px 40px rgba(0, 210, 137, 0.07)",
            borderColor: "rgba(0, 210, 137, 0.3)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-sidebar border border-subtle rounded-xl p-4 h-full flex flex-col"
        >
          {/* ─── Thumbnail / Preview Area ─── */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
            {/* Gradient fallback (serves as placeholder until real images are added) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              {/* Grid overlay for visual texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <FileText className="w-8 h-8 text-white/10" />
            </div>

            {/* ─── Category Badge (Top-Start / Top-Right in RTL) ─── */}
            <span
              className="absolute top-3 start-3 px-3 py-1 text-[10px] font-semibold tracking-wider
                         bg-accent/10 text-accent rounded-full backdrop-blur-sm border border-accent/20"
            >
              {project.category}
            </span>
          </div>

          {/* ─── Title ─── */}
          <h3
            className="text-white font-bold text-base mt-auto
                       group-hover:text-accent transition-colors duration-300"
          >
            {project.title}
          </h3>
        </motion.article>
      </Link>
    </motion.div>
  );
}
