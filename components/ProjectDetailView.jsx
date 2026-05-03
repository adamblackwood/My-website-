"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, DollarSign } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   ProjectDetailView — Dynamic selected project display
   Uses AnimatePresence to smoothly fade/slide content 
   when the selected project changes.
   ═══════════════════════════════════════════════════════ */

// Animation variants for the content switch
const detailVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
};

// Mini info card component
function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="bg-main border border-subtle rounded-lg p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-accent" />
        <h4 className="text-white font-semibold text-sm">{title}</h4>
      </div>
      <div className="text-muted text-sm">{children}</div>
    </div>
  );
}

export default function ProjectDetailView({ project }) {
  if (!project) return null;

  return (
    <div className="bg-sidebar border border-subtle rounded-xl p-8 md:p-10 mt-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          variants={detailVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* ─── Left Column: Detail Image ─── */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-subtle">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.detail_gradient}`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/5 text-lg font-bold">Detail View</span>
            </div>
          </div>

          {/* ─── Right Column: Project Info ─── */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-3" dir="ltr">
                {project.title}
              </h2>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-accent/10 text-accent rounded-full mb-5">
                {project.category}
              </span>
              <p className="text-muted text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* ─── Info Cards Grid ─── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
              <InfoCard icon={Briefcase} title="الخدمات">
                <ul className="list-disc list-inside space-y-1">
                  {project.services_provided.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </InfoCard>
              
              <InfoCard icon={Users} title="حجم الفريق">
                <p>{project.team_size}</p>
              </InfoCard>

              <InfoCard icon={DollarSign} title="الميزانية">
                <p dir="ltr" className="text-start">{project.price_range}</p>
              </InfoCard>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
