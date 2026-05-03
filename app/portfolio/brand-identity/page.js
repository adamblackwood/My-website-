"use client";

import { motion } from "framer-motion";
import { brandIdentityProjects } from "@/data/brandIdentityProjects";
import BrandIdentityCard from "@/components/BrandIdentityCard";

/* ═══════════════════════════════════════════════════════
   Animation Variants
   ═══════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════
   Brand Identity Portfolio Page
   2-column moodboard layout for desktop
   ═══════════════════════════════════════════════════════ */
export default function BrandIdentityPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* ─── Header Section ─── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mb-14"
      >
        {/* Title with decorative line */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            أعمال الهوية البصرية
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="text-muted text-base md:text-lg max-w-2xl pe-5">
          بناء هويات تجارية متكاملة تترك أثراً لا يُنسى في أذهان عملائك
        </motion.p>
      </motion.div>

      {/* ─── Brands Grid (2 Col Desktop / 1 Col Mobile) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brandIdentityProjects.map((project, i) => (
          <BrandIdentityCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
