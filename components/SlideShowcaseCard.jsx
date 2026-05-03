"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   SlideShowcaseCard — Premium Pitch Deck Slide Viewer
   Renders individual slides with conditional highlight data
   ═══════════════════════════════════════════════════════ */
export default function SlideShowcaseCard({ slide, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.article
        whileHover={{
          scale: 1.03,
          borderColor: "rgba(0, 210, 137, 0.5)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-sidebar border border-subtle rounded-xl overflow-hidden cursor-pointer group"
      >
        {/* ─── Slide Image / Visual Area ─── */}
        <div className="relative aspect-video overflow-hidden">
          {/* Gradient Fallback for Slide Image */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-transform duration-700 group-hover:scale-105`}>
            {/* Dashboard grid lines overlay */}
            <div 
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          {/* ─── Data Highlight Badge (Conditional) ─── */}
          {slide.highlight_data && (
            <div className="absolute top-3 start-3 z-20">
              <span className="px-3 py-1 text-sm font-bold bg-accent text-main rounded-full shadow-lg shadow-accent/20">
                {slide.highlight_data}
              </span>
            </div>
          )}

          {/* ─── Bottom Gradient Overlay for Text Pop ─── */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
        </div>

        {/* ─── Slide Title ─── */}
        <div className="p-4 bg-sidebar z-20 relative">
          <h3 className="text-white font-bold text-base group-hover:text-accent transition-colors duration-300">
            {slide.slide_title}
          </h3>
        </div>
      </motion.article>
    </motion.div>
  );
}
