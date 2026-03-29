"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_STATS } from "@/lib/constants";

const wordAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HEADLINE_WORDS = ["Protection", "That", "Moves", "With", "Your", "Life"];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const shieldY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const shieldScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.4]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Parallax gradient mesh background */}
      <motion.div style={{ y: bgY }} className="gradient-mesh absolute inset-0" />

      {/* Parallax blobs at different speeds */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-electric/20 blur-[120px] animate-blob-1"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute right-[10%] bottom-[20%] h-96 w-96 rounded-full bg-cyan-accent/15 blur-[120px] animate-blob-2"
      />

      {/* Dark overlay that fades in as you scroll away */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 bg-navy"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left content — moves at 1x speed (foreground) */}
        <motion.div
          style={{ y: contentY }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-accent backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
            Trusted by 50,000+ clients nationwide
          </motion.div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className={`mr-3 inline-block ${
                  word === "Moves" || word === "Life"
                    ? "gradient-text"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Comprehensive insurance coverage designed around you. From instant
            quotes to lightning-fast claims — experience protection the modern
            way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#calculator"
              className="group relative cursor-pointer overflow-hidden rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] pulse-glow"
            >
              <span className="relative z-10">Get Your Free Quote</span>
            </a>
            <a
              href="#plans"
              className="cursor-pointer rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              See Our Plans
            </a>
          </motion.div>

          {/* Stats — slowest foreground parallax */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{ y: statsY }}
            className="mt-12 flex flex-wrap gap-4 sm:gap-6"
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`glass rounded-2xl px-5 py-4 ${
                  i === 0
                    ? "animate-float"
                    : i === 1
                    ? "animate-float-delay-1"
                    : "animate-float-delay-2"
                }`}
              >
                <div className="text-xl font-bold font-[family-name:var(--font-display)] text-white sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Shield at 0.7x speed (background layer) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          style={{ y: shieldY, scale: shieldScale }}
          className="hidden items-center justify-center lg:flex"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-electric/10 blur-[80px]" />

            <svg
              width="420"
              height="420"
              viewBox="0 0 420 420"
              fill="none"
              className="animate-slow-rotate"
            >
              <circle cx="210" cy="210" r="200" stroke="url(#ring-grad)" strokeWidth="1" strokeDasharray="8 12" />
              <circle cx="210" cy="210" r="170" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <defs>
                <linearGradient id="ring-grad" x1="0" y1="0" x2="420" y2="420">
                  <stop stopColor="#2563EB" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#06B6D4" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="160"
              height="190"
              viewBox="0 0 160 190"
              fill="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path d="M80 10L15 45V95C15 140 42 170 80 182C118 170 145 140 145 95V45L80 10Z" fill="url(#big-shield)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <path d="M80 30L30 55V95C30 130 52 155 80 165C108 155 130 130 130 95V55L80 30Z" fill="rgba(255,255,255,0.06)" />
              <path d="M65 100L75 110L100 85" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="big-shield" x1="15" y1="10" x2="145" y2="182">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute left-4 top-1/3 h-3 w-3 rounded-full bg-electric/60 animate-float" />
            <div className="absolute right-8 top-1/4 h-2 w-2 rounded-full bg-cyan-accent/60 animate-float-delay-1" />
            <div className="absolute bottom-16 left-16 h-2.5 w-2.5 rounded-full bg-electric/40 animate-float-delay-2" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 animate-bounce-slow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13L12 18L17 13" />
          <path d="M7 7L12 12L17 7" />
        </svg>
      </div>
    </section>
  );
}
