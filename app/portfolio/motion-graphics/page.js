"use client";

import { motion } from "framer-motion";
import { motionProjects } from "@/data/motionProjects";
import FeaturedVideoCard from "@/components/FeaturedVideoCard";
import VideoCard from "@/components/VideoCard";

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
   Motion Graphics Portfolio Page
   Cinematic / Video Streaming platform layout
   ═══════════════════════════════════════════════════════ */
export default function MotionGraphicsPage() {
  // Separate featured project from the rest
  const featuredProject = motionProjects.find((p) => p.isFeatured);
  const gridProjects = motionProjects.filter((p) => !p.isFeatured);

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
            أعمال الموشن جرافيك
          </h1>
        </motion.div>

        <motion.p variants={fadeUp} className="text-muted text-base md:text-lg max-w-2xl pe-5">
          نحرك أفكارك بسلاسة لنقل رسالتك بأسلوب بصري جذاب لا يُنسى
        </motion.p>
      </motion.div>

      {/* ─── Featured Video Section ─── */}
      {featuredProject && (
        <section className="mb-14">
          <FeaturedVideoCard project={featuredProject} />
        </section>
      )}

      {/* ─── Video Grid Section ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {gridProjects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <VideoCard project={project} />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
