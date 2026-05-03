"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   ApplicationCard — Premium Mockup display
   Features a luxury scale + glow hover effect
   ═══════════════════════════════════════════════════════ */
export default function ApplicationCard({ mockup, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
    >
      <motion.article
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative aspect-[4/5] md:aspect-auto md:h-[400px] w-full overflow-hidden rounded-xl border border-subtle bg-sidebar"
      >
        {/* Gradient Placeholder for Mockup Image */}
        <div className={`absolute inset-0 bg-gradient-to-br ${mockup.gradient} transition-transform duration-700 group-hover:scale-110`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
        
        {/* Subtle Center Label */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <span className="text-white/10 text-sm font-bold uppercase tracking-widest">{mockup.title}</span>
        </div>

        {/* Premium Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_50px_rgba(0,210,137,0.1)] pointer-events-none z-20" />
      </motion.article>
    </motion.div>
  );
}
