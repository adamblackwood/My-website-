"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { brandIdentityProjects } from "@/data/brandIdentityProjects";
import BrandSystemCard from "@/components/BrandSystemCard";
import ApplicationCard from "@/components/ApplicationCard";

/* ═══════════════════════════════════════════════════════
   Animation Variants
   ═══════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════
   Brand Identity Case Study Detail Page
   ═══════════════════════════════════════════════════════ */
export default function BrandDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const project = brandIdentityProjects.find((p) => p.slug === slug);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-muted" />
        <h1 className="text-2xl font-bold text-white">المشروع غير موجود</h1>
        <Link href="/portfolio/brand-identity" className="text-accent hover:underline flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          العودة للمعرض
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* ─── Back Navigation ─── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          href="/portfolio/brand-identity"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 group"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">العودة للمعرض</span>
        </Link>
      </motion.div>

      {/* ═══════════════════════════════════════════
          SECTION 1: IMMERSIVE HERO
          Parallax subtle scroll effect on the hero image
          ═══════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
        className="relative w-full h-[70vh] rounded-2xl overflow-hidden mb-20 border border-subtle"
      >
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <div className={`w-full h-full bg-gradient-to-br ${project.heroGradient}`} />
        </motion.div>

        {/* Dark Gradient Overlay for Text Pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-main via-main/60 to-transparent z-10" />

        {/* Hero Text Content */}
        <div className="absolute bottom-0 start-0 end-0 p-8 md:p-14 z-20">
          <motion.span variants={fadeUp} className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-accent/10 text-accent rounded-full mb-4">
            {project.category}
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2" dir="ltr">
            {project.brandName}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/70 font-medium">
            {project.brandName} LUXURY BRAND IDENTITY
          </motion.p>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          SECTION 2: BRAND STORY
          2-column layout for Problem & Solution
          ═══════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
      >
        <motion.div variants={fadeUp} className="bg-sidebar border border-subtle rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-accent" />
            <h3 className="text-accent font-bold text-lg">التحدي</h3>
          </div>
          <p className="text-white/80 text-base leading-relaxed">{project.problem_solved}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-sidebar border border-subtle rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <h3 className="text-accent font-bold text-lg">الحل الإبداعي</h3>
          </div>
          <p className="text-white/80 text-base leading-relaxed">{project.what_delivered}</p>
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          SECTION 3: BRAND SYSTEM
          3-column grid for Logo, Colors, Typography
          ═══════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h2 className="text-3xl font-extrabold text-white">نظام العلامة التجارية</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BrandSystemCard type="logo" data={project.logoVariations} index={0} />
          <BrandSystemCard type="colors" data={project.brandColors} index={1} />
          <BrandSystemCard type="typography" data={project.brandFonts} index={2} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: BRAND APPLICATIONS
          Grid gallery of real-world applications
          ═══════════════════════════════════════════ */}
      <section className="pb-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h2 className="text-3xl font-extrabold text-white">التطبيقات</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.applicationMockups.map((mockup, i) => (
            <ApplicationCard key={i} mockup={mockup} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
