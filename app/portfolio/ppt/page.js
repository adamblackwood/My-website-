"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pptProjects, pptCategories } from "@/data/pptProjects";
import PptProjectCard from "@/components/PptProjectCard";

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
   PPT Portfolio Page — Grid + Category Filtering
   ═══════════════════════════════════════════════════════ */
export default function PptPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  // Filter logic
  const filteredProjects =
    activeCategory === "الكل"
      ? pptProjects
      : pptProjects.filter((p) => p.category === activeCategory);

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
        className="mb-12"
      >
        {/* Title with decorative green line */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            معرض أعمال الباوربوينت
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="text-muted text-base md:text-lg max-w-2xl pe-5">
          أسلوب واضح ومبسط يحقق أهدافك التجارية والتسويقية
        </motion.p>
      </motion.div>

      {/* ─── Category Filters ─── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {pptCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-accent/10 text-accent border-accent/40"
                  : "bg-transparent text-muted border-subtle hover:text-white hover:border-muted"
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* ─── Projects Grid with AnimatePresence ─── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AnimatePresence handles exit animations for filtered items */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <PptProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ─── Empty State (if no projects match filter) ─── */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-muted"
        >
          لا توجد أعمال في هذا التصنيف حالياً.
        </motion.div>
      )}
    </div>
  );
}
