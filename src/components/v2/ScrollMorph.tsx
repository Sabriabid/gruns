"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// Honest punchy stat words (short, gruns "60+ INGREDIENTS" rhythm).
const WORDS = ["15–20 ACTIFS", "8 GUMMIES", "1 SACHET", "30 SECONDES"];

// Static fallback (mobile + prefers-reduced-motion): no scroll-jacking.
function StaticStat() {
  return (
    <section className="relative bg-gomu-purple-deep text-gomu-cream py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {WORDS.map((w, i) => (
          <div
            key={i}
            className="reveal stat-giant font-display font-bold tracking-display text-gomu-cream"
          >
            {w}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ScrollMorph() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Phase B: background morphs purple-deep → chartreuse (overlay opacity).
  const morphOpacity = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);
  // Words group fades out as the tear scene takes over.
  const wordsExit = useTransform(scrollYProgress, [0.42, 0.58], [1, 0]);
  // Per-word entrance (phase A).
  const o0 = useTransform(scrollYProgress, [0.03, 0.16], [0.12, 1]);
  const o1 = useTransform(scrollYProgress, [0.13, 0.26], [0.12, 1]);
  const o2 = useTransform(scrollYProgress, [0.23, 0.36], [0.12, 1]);
  const o3 = useTransform(scrollYProgress, [0.33, 0.46], [0.12, 1]);
  const wordOps = [o0, o1, o2, o3];
  // Sachet tear scene (phase B).
  const sceneOpacity = useTransform(scrollYProgress, [0.5, 0.62], [0, 1]);
  const lidY = useTransform(scrollYProgress, [0.55, 0.9], ["0%", "-150%"]);
  const lidRot = useTransform(scrollYProgress, [0.55, 0.9], [0, -10]);
  const gummyScale = useTransform(scrollYProgress, [0.62, 0.92], [0.3, 1]);
  const gummyY = useTransform(scrollYProgress, [0.62, 0.92], ["20%", "-30%"]);

  if (reduce) return <StaticStat />;

  return (
    <>
      {/* Mobile: static, no pin */}
      <div className="md:hidden">
        <StaticStat />
      </div>

      {/* Desktop: pinned scroll scene */}
      <section ref={ref} className="relative hidden md:block h-[280vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-gomu-purple-deep">
          <motion.div
            aria-hidden
            style={{ opacity: morphOpacity }}
            className="absolute inset-0 bg-gomu-chartreuse"
          />
          <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none" />

          {/* Phase A — giant stacked words */}
          <motion.div
            style={{ opacity: wordsExit }}
            className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-8"
          >
            {WORDS.map((w, i) => (
              <motion.div
                key={i}
                style={{ opacity: wordOps[i] }}
                className="stat-giant font-display font-bold tracking-display text-gomu-cream leading-[0.85]"
              >
                {w}
              </motion.div>
            ))}
          </motion.div>

          {/* Phase B — sachet tear + gummy */}
          <motion.div
            style={{ opacity: sceneOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[220px] h-[300px]">
              {/* gummy emerging from the top */}
              <motion.div
                style={{ scale: gummyScale, y: gummyY }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-36 rounded-[44%] bg-gomu-purple-3 border-4 border-gomu-purple-deep flex items-center justify-center text-center text-[9px] uppercase tracking-cap text-gomu-cream/85 px-3"
              >
                [PHOTO : ours violet]
              </motion.div>
              {/* sachet base */}
              <div className="absolute inset-0 rounded-[26px] bg-gomu-cream border-2 border-gomu-purple-deep overflow-hidden flex items-end justify-center">
                <span className="mb-5 text-[11px] uppercase tracking-cap text-gomu-purple-deep/50">
                  [PHOTO : sachet]
                </span>
              </div>
              {/* torn lid */}
              <motion.div
                style={{ y: lidY, rotate: lidRot }}
                className="absolute top-0 inset-x-0 h-24 rounded-t-[26px] bg-gomu-purple-deep flex items-center justify-center font-display font-bold text-[22px] text-gomu-cream origin-bottom"
              >
                Gomu<span className="text-gomu-chartreuse">.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
