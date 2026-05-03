"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";
import { pptProjects } from "@/data/pptProjects";
import SlideShowcaseCard from "@/components/SlideShowcaseCard";

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
    },
  },
};

/* ═══════════════════════════════════════════════════════
   PPT Case Study Detail Page
   ═══════════════════════════════════════════════════════ */
export default function PptDetailPage() {
  const params = useParams();
  const slug = params.slug;

  // Find the current project and its index
  const currentIndex = pptProjects.findIndex((p) => p.slug === slug);
  const project = pptProjects[currentIndex];

  // Determine Previous and Next projects for navigation
  const prevProject = currentIndex > 0 ? pptProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < pptProjects.length - 1 ? pptProjects[currentIndex + 1] : null;

  // Handle 404 gracefully
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-muted" />
        <h1 className="text-2xl font-bold text-white">المشروع غير موجود</h1>
        <p className="text-muted">الرابط الذي أدخلته غير صحيح.</p>
        <Link
          href="/portfolio/ppt"
          className="text-accent hover:underline flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          العودة للمعرض
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* ─── Header & Back Link ─── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <Link
          href="/portfolio/ppt"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 mb-8 group"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">العودة للمشاريع</span>
        </Link>

        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{project.title}</h1>
          <span className="px-3 py-1 text-xs font-semibold tracking-wider bg-accent/10 text-accent rounded-full">
            {project.category}
          </span>
        </div>
      </motion.div>

      {/* ─── Problem & Solution Section ─── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
      >
        <motion.div variants={fadeUp} className="bg-sidebar border border-subtle rounded-xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-accent" />
            <h3 className="text-accent font-bold text-lg">المشكلة</h3>
          </div>
          <p className="text-white/80 leading-relaxed">{project.problem_solved}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-sidebar border border-subtle rounded-xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <h3 className="text-accent font-bold text-lg">ما تم تقديمه</h3>
          </div>
          <p className="text-white/80 leading-relaxed">{project.what_delivered}</p>
        </motion.div>
      </motion.div>

      {/* ─── Slides Showcase Section ─── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-7 rounded-full bg-accent shrink-0" />
          <h2 className="text-2xl font-bold text-white">شرائح العرض التقديمي</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.slides.map((slide, index) => (
            <SlideShowcaseCard key={index} slide={slide} index={index} />
          ))}
        </div>
      </div>

      {/* ─── Project Navigation ─── */}
      <div className="border-t border-subtle pt-8 flex items-center justify-between">
        {prevProject ? (
          <Link href={`/portfolio/ppt/${prevProject.slug}`} className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="text-right">
              <p className="text-[10px] text-muted uppercase tracking-widest">المشروع السابق</p>
              <p className="text-white font-semibold group-hover:text-accent transition-colors duration-300">{prevProject.title}</p>
            </div>
          </Link>
        ) : (
          <div /> // Empty div for flex layout spacing
        )}

        {nextProject ? (
          <Link href={`/portfolio/ppt/${nextProject.slug}`} className="group flex items-center gap-3">
            <div className="text-left">
              <p className="text-[10px] text-muted uppercase tracking-widest">المشروع التالي</p>
              <p className="text-white font-semibold group-hover:text-accent transition-colors duration-300">{nextProject.title}</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <div /> // Empty div for flex layout spacing
        )}
      </div>
    </div>
  );
}
