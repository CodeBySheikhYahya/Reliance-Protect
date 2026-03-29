"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHY_US_FEATURES, WHY_US_COUNTERS } from "@/lib/constants";
import { AnimatedCounter } from "./AnimatedCounter";

const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M20 21V19A4 4 0 0016 15H8A4 4 0 004 19V21" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7A5 5 0 0117 7V11" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20V16" />
    </svg>
  ),
};

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bgOrb2Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="why-us" ref={sectionRef} className="relative overflow-hidden bg-navy-light/40 py-24 sm:py-32">
      {/* Parallax background layer */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-electric/4 blur-[160px]"
      />
      <motion.div
        style={{ y: bgOrb2Y }}
        className="pointer-events-none absolute right-[-5%] bottom-[10%] h-72 w-72 rounded-full bg-cyan-accent/4 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Why Choose <span className="gradient-text">ShieldElite</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            We combine decades of expertise with cutting-edge technology to
            deliver protection you can count on.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              className="flip-card h-64 cursor-pointer"
            >
              <div className="flip-card-inner relative h-full w-full">
                <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-2xl glass p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    {ICONS[feature.icon]}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
                <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-electric/20 to-cyan-accent/10 glass p-6 text-center">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-cyan-accent">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {WHY_US_COUNTERS.map((counter) => (
            <div key={counter.label} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl font-extrabold gradient-text sm:text-5xl">
                <AnimatedCounter
                  value={counter.value}
                  prefix={counter.prefix}
                  suffix={counter.suffix}
                />
              </div>
              <p className="mt-2 text-sm text-white/40">{counter.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
