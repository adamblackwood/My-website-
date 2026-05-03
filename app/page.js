"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpLeft, Palette, Smartphone, Package } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

/* ═══════════════════════════════════════════════════════
   Animation Variants — Premium, subtle, no bounce
   ═══════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* ═══════════════════════════════════════════════════════
   CountUp — Animates from 0 → target when in view
   Uses ease-out cubic for a premium deceleration feel
   ═══════════════════════════════════════════════════════ */
function CountUp({ target, suffix = "+" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));

      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   SectionHeader — Title with green decorative bar
   The bar sits at the start (right in RTL) of the title
   ═══════════════════════════════════════════════════════ */
function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="w-1.5 h-8 rounded-full bg-accent shrink-0" />
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Static Data — Projects, Services, Stats
   ═══════════════════════════════════════════════════════ */
const stats = [
  { number: 150, text: "مشروع مكتمل" },
  { number: 80, text: "عميل سعيد" },
  { number: 5, text: "سنوات خبرة" },
];

const projects = [
  {
    title: "هوية بصرية متكاملة",
    category: "هوية بصرية",
    gradient: "from-[#0d1f15] to-[#0a0f0c]",
  },
  {
    title: "تصميم تطبيق تسوّق",
    category: "تصميم واجهات",
    gradient: "from-[#111827] to-[#0a0e1a]",
  },
  {
    title: "تغليف منتجات العناية",
    category: "تصميم تغليف",
    gradient: "from-[#1f150d] to-[#0f0c0a]",
  },
];

const services = [
  {
    number: "01",
    title: "الهوية البصرية",
    description:
      "بناء هوية بصرية متكاملة تعكس قيم علامتك التجارية وتميزها في السوق",
    icon: Palette,
  },
  {
    number: "02",
    title: "تصميم السوشيال ميديا",
    description:
      "تصميم محتوى جذاب يحقق التفاعل ويعزّز حضورك الرقمي على جميع المنصات",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "تصميم التغليف",
    description:
      "تصميم تغليف إبداعي يجذب الانتباه ويُعزّز تجربة العميل مع منتجك",
    icon: Package,
  },
];

/* ═══════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="relative max-w-6xl mx-auto space-y-28 pb-24">
      {/* ─── Decorative Background Monogram ─── */}
      <div
        className="absolute top-20 end-0 pointer-events-none select-none opacity-[0.015] hidden lg:block"
        dir="ltr"
      >
        <span className="text-[280px] font-extrabold text-white leading-none">
          AN
        </span>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
          Flex row on desktop (RTL: text→right, image→left)
          Flex col on mobile (stacked)
          ═══════════════════════════════════════════ */}
      <motion.section
        id="home"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="min-h-[85vh] flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-8"
      >
        {/* ─── Text Content (renders on RIGHT in RTL) ─── */}
        <div className="flex-1 space-y-7">
          {/* Tag / Badge */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5
                         text-[11px] font-semibold tracking-widest uppercase
                         text-accent border border-accent/20 rounded-full"
              dir="ltr"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Graphic Designer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15]"
          >
            تصاميم تلهم وتحقق{" "}
            <span className="text-accent">النتائج</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-muted text-base md:text-lg leading-relaxed max-w-lg"
          >
            أنا عبدالله نبيل، مصمم جرافيك متخصص في تحويل الأفكار إلى تصاميم
            إبداعية تترك أثراً وتحقق أهداف العملاء.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5
                         bg-accent text-main rounded-xl
                         font-semibold text-sm
                         hover:bg-accent-dark active:scale-[0.97]
                         transition-all duration-300"
            >
              <span>دعنا نعمل معاً</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5
                         border border-subtle text-white rounded-xl
                         font-semibold text-sm
                         hover:border-accent/40 hover:text-accent
                         transition-all duration-300"
            >
              شاهد أعمالي
            </a>
          </motion.div>
        </div>

        {/* ─── Portrait Area (renders on LEFT in RTL) ─── */}
        <motion.div variants={fadeUp} className="flex-shrink-0 relative">
          {/* Outer decorative rings */}
          <div className="absolute -inset-4 rounded-full border border-accent/[0.06] animate-[spin_30s_linear_infinite]" />
          <div className="absolute -inset-8 rounded-full border border-accent/[0.03]" />

          {/* Dotted orbit ring */}
          <div
            className="absolute -inset-12 rounded-full hidden md:block opacity-20"
            style={{
              border: "1px dashed rgba(0,210,137,0.15)",
            }}
          />

          {/* Portrait circle */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-accent/15">
            <div className="absolute inset-0 bg-gradient-to-br from-sidebar via-main to-sidebar flex items-center justify-center">
              {/* Monogram inside portrait */}
              <span
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white/[0.06] select-none"
                dir="ltr"
              >
                AN
              </span>
            </div>

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.03] to-transparent" />
          </div>

          {/* Floating badge — experience counter */}
          <div className="absolute -bottom-1 start-4 md:bottom-4 md:start-6 bg-sidebar/90 backdrop-blur-md border border-subtle rounded-xl px-4 py-2.5 shadow-2xl">
            <p className="text-accent font-extrabold text-xl leading-none" dir="ltr">
              5+
            </p>
            <p className="text-muted text-[10px] mt-0.5">سنوات خبرة</p>
          </div>

          {/* Floating badge — projects counter */}
          <div className="absolute top-2 end-0 md:top-6 md:end-2 bg-sidebar/90 backdrop-blur-md border border-subtle rounded-xl px-4 py-2.5 shadow-2xl">
            <p className="text-accent font-extrabold text-xl leading-none" dir="ltr">
              150+
            </p>
            <p className="text-muted text-[10px] mt-0.5">مشروع</p>
          </div>
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          SECTION 2: STATS
          2 columns mobile / 3 columns desktop
          CountUp animation triggers on scroll
          ═══════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 gap-5"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="bg-sidebar border border-subtle rounded-2xl p-7 md:p-9 text-center"
          >
            <p className="text-3xl md:text-5xl font-extrabold text-accent mb-2">
              <CountUp target={stat.number} />
            </p>
            <p className="text-muted text-sm md:text-base">{stat.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ═══════════════════════════════════════════
          SECTION 3: LATEST WORK — أحدث أعمالي
          1 col mobile / 2 col tablet / 3 col desktop
          ═══════════════════════════════════════════ */}
      <section id="work">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeader title="أحدث أعمالي" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: SERVICES — خدماتي
          Numbered cards with icons and descriptions
          ═══════════════════════════════════════════ */}
      <section id="services">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeader title="خدماتي" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
