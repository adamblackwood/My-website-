"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { featuredWorks } from "@/data/featuredWorks";
import MixedWorkCard from "@/components/MixedWorkCard";
import ProjectDetailView from "@/components/ProjectDetailView";

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
   Featured Works Page
   Manages the selectedProject state
   ═══════════════════════════════════════════════════════ */
export default function FeaturedWorksPage() {
  const [selectedProject, setSelectedProject] = useState(featuredWorks[0]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* ─── Header Section ─── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mb-12"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            أبرز الأعمال
          </h1>
        </motion.div>

        <motion.p variants={fadeUp} className="text-muted text-base md:text-lg max-w-2xl pe-5">
          مجموعة مختارة من أحدث تصاميمي التي أحدثت فرقاً لعلامات تجارية متنوعة
        </motion.p>
      </motion.div>

      {/* ─── Mixed Portfolio Grid ─── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featuredWorks.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <MixedWorkCard
              project={project}
              isSelected={selectedProject.id === project.id}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ─── Interactive Project Detail View ─── */}
      <ProjectDetailView project={selectedProject} />
    </div>
  );
}
