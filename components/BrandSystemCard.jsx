"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   BrandSystemCard — Versatile card for Logo, Colors, Fonts
   Renders different layouts based on the `type` prop
   ═══════════════════════════════════════════════════════ */
export default function BrandSystemCard({ type, data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-sidebar border border-subtle rounded-xl p-6 h-full flex flex-col"
    >
      <h3 className="text-accent font-bold text-sm uppercase tracking-widest mb-6 border-b border-subtle pb-4">
        {type === "logo" ? "الشعار" : type === "colors" ? "الألوان" : "الخطوط"}
      </h3>

      {/* ─── Logo Variant ─── */}
      {type === "logo" && (
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
          {data.map((variation, i) => (
            <div
              key={i}
              className={`w-full aspect-[3/2] rounded-lg flex items-center justify-center border border-subtle
                ${i === 0 ? "bg-main" : "bg-white"}`}
            >
              <span className={`text-3xl font-extrabold tracking-tight ${i === 0 ? "text-white" : "text-main"}`} dir="ltr">
                Logo
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ─── Colors Variant ─── */}
      {type === "colors" && (
        <div className="flex-1 flex flex-wrap gap-6 justify-center items-center">
          {data.map((color, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span
                className="w-16 h-16 rounded-xl shadow-lg border border-white/10"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-white text-xs font-medium mt-1" dir="ltr">{color.hex}</span>
              <span className="text-muted text-[10px] uppercase tracking-wider">{color.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* ─── Typography Variant ─── */}
      {type === "typography" && (
        <div className="flex-1 flex flex-col gap-6 justify-center">
          {data.map((font, i) => (
            <div key={i} className="border-b border-subtle pb-4 last:border-0 last:pb-0">
              <p className="text-muted text-xs mb-2 uppercase tracking-wider" dir="ltr">{font}</p>
              <p className="text-white text-2xl" style={{ fontFamily: font, sansFallback: true }} dir="ltr">
                Aa Bb Cc
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
