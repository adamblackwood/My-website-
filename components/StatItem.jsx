"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   StatItem — Animated counter on scroll
   Uses ease-out cubic deceleration for premium feel
   ═══════════════════════════════════════════════════════ */
export default function StatItem({ target, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <span className="text-4xl md:text-5xl font-extrabold text-accent tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-muted text-sm mt-2">{label}</span>
    </div>
  );
}
