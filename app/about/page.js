"use client";

import { motion } from "framer-motion";
import { Palette, Video, BarChart3, Coffee } from "lucide-react";
import ServiceTag from "@/components/ServiceTag";
import ServiceItem from "@/components/ServiceItem";
import StatItem from "@/components/StatItem";

/* ═══════════════════════════════════════════════════════
   Animation Variants
   ═══════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ═══════════════════════════════════════════════════════
   Static Data
   ═══════════════════════════════════════════════════════ */
const services = [
  {
    title: "تصميم الهوية البصرية",
    description: "بناء هويات تجارية متكاملة تعكس قيم علامتك وتميزها عن المنافسين بسرد بصري متقن.",
    icon: Palette,
  },
  {
    title: "الموشن جرافيك",
    description: "تحويل الأفكار المعقدة إلى قصص مرئية متحركة تجذب الانتباه وتحقق أعلى معدلات التفاعل.",
    icon: Video,
  },
  {
    title: "تصميم البيانات والانفوجرافيك",
    description: "تبسيط البيانات والإحصائيات المعقدة وتحويلها إلى رسوم بيانية بصرية أنيقة وسهلة الفهم.",
    icon: BarChart3,
  },
];

const stats = [
  { target: 120, suffix: "+", label: "مشروع" },
  { target: 50, suffix: "+", label: "عميل" },
  { target: 5, suffix: "+", label: "جوائز" },
  { target: 10, suffix: "+", label: "دولة" },
];

/* ═══════════════════════════════════════════════════════
   About Page
   ═══════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-28 pb-24">
      {/* ═══════════════════════════════════════════
          SECTION 1: SPLIT HERO
          Grid: RTL places Text (1st) on Right, Image (2nd) on Left
          Mobile: Stacks vertically (Text top, Image bottom)
          ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-8">
        {/* ─── Text Content (Right side in RTL) ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              عبدالله نبيل
            </h2>
            <p className="text-2xl font-bold text-accent">مصمم جرافيك</p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-muted text-base md:text-lg leading-relaxed">
            نص تعريفي يبرز الشغف بتحويل الأفكار إلى تصاميم تجمع بين الجمالية والوظيفة لتحقيق أهداف العملاء. أؤمن بأن التصميم الجيد ليس مجرد شكل جذاب، بل هو أداة استراتيجية لبناء العلامات التجارية وترك أثر دائم في الأذهان.
          </motion.p>

          {/* Service Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            <ServiceTag>Branding</ServiceTag>
            <ServiceTag>Motion</ServiceTag>
            <ServiceTag>Data-viz</ServiceTag>
            <ServiceTag>UI/UX</ServiceTag>
          </motion.div>
        </motion.div>

        {/* ─── Visual Content (Left side in RTL) ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-subtle shadow-2xl shadow-black/50 group">
            {/* Gradient Placeholder for Studio Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a120a] via-[#0f0d09] to-[#0A0A0A] flex items-center justify-center">
              <Coffee className="w-16 h-16 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />
            </div>
            
            {/* Green Glow Effect behind the image */}
            <div className="absolute -inset-1 bg-accent/0 group-hover:bg-accent/10 blur-2xl rounded-xl transition-all duration-700 -z-10" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: MY SERVICES
          3 column grid on desktop
          ═══════════════════════════════════════════ */}
      <section id="services">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
          <h2 className="text-3xl font-extrabold text-white">خدماتي</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ServiceItem {...service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: ABOUT STATS
          4 column grid, contained in a single card
          ═══════════════════════════════════════════ */}
      <section id="stats">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-sidebar border border-subtle rounded-xl p-10 md:p-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
