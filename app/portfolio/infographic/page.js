"use client";

import { motion } from "framer-motion";
import { infographicProjects } from "@/data/infographicProjects";
import InfographicCard from "@/components/InfographicCard";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/* ═══════════════════════════════════════════════════════
   Infographic Portfolio Page
   Features a futuristic data-dashboard aesthetic
   ═══════════════════════════════════════════════════════ */
export default function InfographicPortfolioPage() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* ─── Ambient Background Glow ─── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/[0.02] rounded-full blur-[80px] pointer-events-none" />

      {/* ─── Header Section ─── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mb-14 relative z-10"
      >
        {/* Title with decorative line */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            معرض أعمال الانفوجرافيك
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="text-muted text-base md:text-lg max-w-2xl pe-5">
          تحويل البيانات المعقدة إلى قصص بصرية ملهمة وتفاعلية
        </motion.p>
      </motion.div>

      {/* ─── Dashboard Grid ─── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {infographicProjects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <InfographicCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
