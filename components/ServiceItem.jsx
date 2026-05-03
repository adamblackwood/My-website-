"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   ServiceItem — Feature card for services
   Includes premium hover lift and accent glow
   ═══════════════════════════════════════════════════════ */
export default function ServiceItem({ title, description, icon: Icon }) {
  return (
    <motion.article
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 210, 137, 0.06)",
        borderColor: "rgba(0, 210, 137, 0.3)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-sidebar border border-subtle rounded-xl p-6 flex flex-col gap-4 group"
    >
      {/* Icon */}
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-1">
          <Icon className="w-5 h-5 text-accent" />
        </div>
      )}
      
      {/* Content */}
      <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </motion.article>
  );
}
