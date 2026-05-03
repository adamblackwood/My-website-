"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Image,
  Mail,
  ArrowUpRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   Navigation Items — Arabic labels with Lucide icons
   ═══════════════════════════════════════════════════════ */
const navItems = [
  { name: "الرئيسية", icon: Home, href: "/#home" },
  { name: "من أنا", icon: User, href: "/about" },
  { name: "أبرز الأعمال", icon: Briefcase, href: "/portfolio/featured" },
  { name: "الهوية البصرية", icon: Layers, href: "/portfolio/brand-identity" },
  { name: "الموشن جرافيك", icon: Image, href: "/portfolio/motion-graphics" },
  { name: "السوشيال ميديا", icon: Mail, href: "/portfolio/social-media" },
  { name: "الانفوجرافيك", icon: Layers, href: "/portfolio/infographic" },
  { name: "الباوربوينت", icon: Briefcase, href: "/portfolio/ppt" },
];

/* ═══════════════════════════════════════════════════════
   Social Links — Inline SVGs for brand icons
   (Lucide doesn't include brand logos)
   ═══════════════════════════════════════════════════════ */
const socialLinks = [
  {
    name: "Behance",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════
   Framer Motion — Animation Variants
   Premium, subtle transitions only
   ═══════════════════════════════════════════════════════ */

// Sidebar slides in from the left
const sidebarVariants = {
  hidden: { x: -260, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
    },
  },
};

// Nav items stagger in one by one
const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.08, // Stagger delay
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// CTA button fades up
const ctaVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.9, duration: 0.4, ease: "easeOut" },
  },
};

// Social icons fade in together
const socialsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.1, duration: 0.5 },
  },
};

/* ═══════════════════════════════════════════════════════
   Sidebar Component
   ═══════════════════════════════════════════════════════ */
export default function Sidebar() {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-64 h-screen
                 bg-sidebar/80 backdrop-blur-2xl
                 border-r border-subtle
                 flex flex-col justify-between p-6
                 overflow-y-auto"
    >
      {/* ─── Top Section: Logo + Navigation ─── */}
      <div>
        {/* Logo — dir="ltr" ensures "AN" reads naturally left-to-right */}
        <div className="mb-8">
          <Link
            href="/"
            dir="ltr"
            className="inline-block group"
          >
            <span className="text-3xl font-extrabold text-accent tracking-tight transition-colors duration-300 group-hover:text-accent-dark">
              A
            </span>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              N
            </span>
          </Link>
          <p className="text-[11px] text-muted font-medium mt-1.5 tracking-wide">
            مصمم جرافيك
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg
                             text-muted hover:text-white
                             hover:bg-white/[0.04]
                             transition-all duration-300 group"
                >
                  <Icon
                    className="w-[16px] h-[16px] shrink-0
                               group-hover:text-accent
                               transition-colors duration-300"
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>

      {/* ─── Bottom Section: CTA + Social Icons ─── */}
      <div className="space-y-6 mt-8">
        {/* CTA Button — Outline style with accent color */}
        <motion.div variants={ctaVariants} initial="hidden" animate="visible">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2
                       w-full py-3 px-5
                       border border-accent text-accent
                       rounded-lg
                       hover:bg-accent hover:text-main
                       active:scale-[0.98]
                       transition-all duration-300
                       text-sm font-semibold"
          >
            <span>ابدأ مشروعك</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          variants={socialsVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3
                     pt-5 border-t border-subtle"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted hover:text-accent
                         p-2 rounded-md
                         hover:bg-white/[0.04]
                         transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.aside>
  );
}
