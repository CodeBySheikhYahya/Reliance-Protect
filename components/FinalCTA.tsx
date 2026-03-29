"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const orb3X = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -15]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-electric via-blue-600 to-cyan-accent opacity-90" />
      <div className="gradient-mesh absolute inset-0 opacity-30" />

      {/* Parallax decorative orbs at different speeds */}
      <motion.div
        style={{ y: orb1Y, x: orb1X }}
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[100px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-accent/20 blur-[120px]"
      />
      <motion.div
        style={{ y: orb3Y, x: orb3X }}
        className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-white/5 blur-[80px]"
      />

      {/* Foreground accent dots at 1.5x speed */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 60]) }}
        className="absolute right-[20%] top-[15%] h-2 w-2 rounded-full bg-white/30"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [30, -50]) }}
        className="absolute left-[25%] bottom-[20%] h-3 w-3 rounded-full bg-white/20"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 40]) }}
        className="absolute right-[35%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-white/40"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            Ready to Protect What
            <br />
            Matters Most?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Join 50,000+ people who trust ShieldElite for their insurance needs.
            Get a free quote in under 2 minutes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#calculator"
              className="cursor-pointer rounded-full bg-white px-8 py-4 text-sm font-bold text-electric transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/20 sm:text-base"
            >
              Get Your Free Quote
            </a>
            <a
              href="#plans"
              className="cursor-pointer rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:text-base"
            >
              Explore Plans
            </a>
          </div>

          <p className="mt-6 text-xs text-white/50">
            No credit card required. Cancel anytime. Satisfaction guaranteed.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
