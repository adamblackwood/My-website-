"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   ServiceCard — Numbered service card with hover lift + glow
   Sequence number appears at the RTL start (top-right visually)
   ═══════════════════════════════════════════════════════ */
export default function ServiceCard({ number, title, description, icon: Icon }) {
  return (
    <motion.article
      whileHover={{
        y: -5,
        boxShadow: "0 12px 40px rgba(0, 210, 137, 0.07)",
        borderColor: "rgba(0, 210, 137, 0.25)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-sidebar border border-subtle rounded-2xl p-7
                 flex flex-col justify-between min-h-[260px] cursor-pointer overflow-hidden"
    >
      {/* ─── Large Sequence Number (decorative, top-start in RTL = top-right) ─── */}
      <span
        className="absolute top-4 start-4 text-6xl font-extrabold text-accent/[0.07]
                    group-hover:text-accent/[0.12] transition-colors duration-500
                    select-none pointer-events-none leading-none"
        dir="ltr"
      >
        {number}
      </span>

      {/* ─── Icon ─── */}
      <div
        className="w-11 h-11 rounded-xl bg-accent/10
                   flex items-center justify-center mb-6
                   group-hover:bg-accent/20 transition-colors duration-300"
      >
        <Icon className="w-5 h-5 text-accent" />
      </div>

      {/* ─── Title & Description ─── */}
      <div className="space-y-3">
        <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>

      {/* ─── Bottom accent line (hidden → visible on hover) ─── */}
      <div className="absolute bottom-0 start-0 end-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-start transition-transform duration-500" />
    </motion.article>
  );
}
