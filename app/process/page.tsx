"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Link from "next/link";
import { PROCESS_STEPS_FULL } from "@/lib/constants";

/* ─── Icons ─── */
const ICONS: Record<string, React.ReactNode> = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v6" /><path d="M8 11h6" />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="12" r="10" /><path d="M16 8h-4a3 3 0 000 6h2a3 3 0 010 6H8" /><path d="M12 2v2" /><path d="M12 20v2" />
    </svg>
  ),
  compare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <polyline points="17,1 21,5 17,9" /><path d="M3 11V9a4 4 0 014-4h14" /><polyline points="7,23 3,19 7,15" /><path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  ),
  signup: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
  manage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

/* ─── Single timeline step ─── */
function ProcessStep({
  step,
  index,
  total,
}: {
  step: (typeof PROCESS_STEPS_FULL)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001,
  });

  const opacity = useTransform(smooth, [0, 0.35, 1], [0, 1, 1]);
  const slideX = useTransform(smooth, [0, 0.5, 1], [isLeft ? -100 : 100, 0, 0]);
  const scale = useTransform(smooth, [0, 0.4, 1], [0.88, 1, 1]);
  const blurRaw = useTransform(smooth, [0, 0.3], [6, 0]);
  const blur = useTransform(blurRaw, (v) => `blur(${v}px)`);

  const iconY = useTransform(smooth, [0, 1], [40, -15]);
  const iconX = useTransform(smooth, [0, 1], [isLeft ? -20 : 20, 0]);
  const iconRotate = useTransform(smooth, [0, 0.5, 1], [-8, 0, 0]);

  const dotScale = useTransform(smooth, [0, 0.25, 0.5], [0, 0, 1]);
  const dotGlow = useTransform(
    smooth,
    [0, 0.4, 0.8, 1],
    [
      "0 0 0px rgba(37,99,235,0)",
      "0 0 24px rgba(37,99,235,0.8)",
      "0 0 16px rgba(6,182,212,0.5)",
      "0 0 10px rgba(37,99,235,0.3)",
    ]
  );

  const connectorScale = useTransform(smooth, [0, 0.3, 0.6], [0, 0, 1]);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-[1fr_100px_1fr] ${
        index < total - 1 ? "pb-8 lg:pb-0" : ""
      }`}
      style={{ minHeight: index < total - 1 ? "320px" : undefined }}
    >
      {/* ── Left column ── */}
      <motion.div
        style={isLeft ? { opacity, x: slideX, scale, filter: blur } : {}}
        className={`flex flex-col ${
          isLeft ? "items-end text-right" : "pointer-events-none invisible hidden lg:flex"
        } justify-center px-4 lg:px-8`}
      >
        {isLeft && (
          <StepContent step={step} index={index} iconY={iconY} iconX={iconX} iconRotate={iconRotate} alignRight />
        )}
      </motion.div>

      {/* ── Center timeline ── */}
      <div className="hidden flex-col items-center lg:flex">
        {/* Connector line from previous dot */}
        {index > 0 && (
          <motion.div
            style={{ scaleY: connectorScale, transformOrigin: "top" }}
            className="h-8 w-px bg-gradient-to-b from-electric/50 to-electric"
          />
        )}

        {/* Dot */}
        <motion.div
          style={{ scale: dotScale, boxShadow: dotGlow }}
          className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-electric bg-navy"
        >
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-electric to-cyan-accent" />
        </motion.div>

        {/* Step number badge */}
        <motion.div
          style={{ opacity, scale: dotScale }}
          className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-electric/10 text-xs font-bold text-electric"
        >
          {step.step}
        </motion.div>

        {/* Line to next */}
        {index < total - 1 && (
          <div className="flex-1 w-px bg-white/5" />
        )}
      </div>

      {/* ── Right column ── */}
      <motion.div
        style={!isLeft ? { opacity, x: slideX, scale, filter: blur } : {}}
        className={`flex flex-col ${
          !isLeft ? "items-start text-left" : "pointer-events-none invisible hidden lg:flex"
        } justify-center px-4 lg:px-8`}
      >
        {!isLeft && (
          <StepContent step={step} index={index} iconY={iconY} iconX={iconX} iconRotate={iconRotate} />
        )}
      </motion.div>

      {/* ── Mobile (always visible on small screens) ── */}
      <motion.div
        style={{ opacity, x: useTransform(smooth, [0, 0.5, 1], [60, 0, 0]), scale, filter: blur }}
        className="flex gap-5 px-4 lg:hidden"
      >
        <div className="flex flex-col items-center">
          <motion.div
            style={{ scale: dotScale, boxShadow: dotGlow }}
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-electric bg-navy"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-electric" />
          </motion.div>
          {index < total - 1 && <div className="mt-1 flex-1 w-px bg-white/10" />}
        </div>
        <div className="pb-10">
          <motion.div
            style={{ y: iconY }}
            className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan-accent text-white shadow-lg shadow-electric/20"
          >
            {ICONS[step.icon]}
          </motion.div>
          <span className="mb-1 block font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-[0.25em] text-electric/60">
            Step {step.step} — {step.subtitle}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Shared content block ─── */
function StepContent({
  step,
  index,
  iconY,
  iconX,
  iconRotate,
  alignRight,
}: {
  step: (typeof PROCESS_STEPS_FULL)[number];
  index: number;
  iconY: ReturnType<typeof useTransform>;
  iconX: ReturnType<typeof useTransform>;
  iconRotate: ReturnType<typeof useTransform>;
  alignRight?: boolean;
}) {
  return (
    <>
      <motion.div
        style={{ y: iconY, x: iconX, rotate: iconRotate }}
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan-accent text-white shadow-xl shadow-electric/25 ${
          alignRight ? "self-end" : "self-start"
        }`}
      >
        {ICONS[step.icon]}
      </motion.div>
      <span className="mb-1 block font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-[0.25em] text-electric/60">
        Step {step.step} — {step.subtitle}
      </span>
      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
        {step.description}
      </p>
    </>
  );
}

/* ─── Sticky navbar for this page ─── */
function ProcessNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

/* ─── Stats row ─── */
function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-[family-name:var(--font-display)] text-4xl font-extrabold gradient-text sm:text-5xl">
        {value}
      </div>
      <p className="mt-2 text-sm text-white/40">{label}</p>
    </motion.div>
  );
}

/* ═══════════ PAGE ═══════════ */
export default function ProcessPage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.15"],
  });

  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 50, damping: 18 }
  );

  const heroOrbY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOrb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      {/* ── Top bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path d="M18 2L4 9V17C4 25.28 9.84 32.94 18 35C26.16 32.94 32 25.28 32 17V9L18 2Z" fill="url(#pnav)" />
              <path d="M15 18L17 20L22 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="pnav" x1="4" y1="2" x2="32" y2="35">
                  <stop stopColor="#2563EB" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold">
              Shield<span className="text-cyan-accent">Elite</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="cursor-pointer text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Back to Home
            </Link>
            <Link
              href="/#calculator"
              className="cursor-pointer rounded-full bg-electric px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:scale-[1.03]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="gradient-mesh absolute inset-0 opacity-60" />
        <motion.div
          style={{ y: heroOrbY }}
          className="pointer-events-none absolute left-[15%] top-[10%] h-96 w-96 rounded-full bg-electric/10 blur-[160px]"
        />
        <motion.div
          style={{ y: heroOrb2Y }}
          className="pointer-events-none absolute right-[10%] bottom-[5%] h-72 w-72 rounded-full bg-cyan-accent/8 blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 inline-block font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.3em] text-electric/60"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
          >
            Our <span className="gradient-text">Process</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base text-white/50 sm:text-lg"
          >
            From your very first consultation to ongoing premium management — every
            step is designed to be seamless, transparent, and tailored to your needs.
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30">Scroll to explore</span>
            <div className="h-12 w-px bg-gradient-to-b from-electric/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── Timeline section ── */}
      <section ref={timelineRef} className="relative overflow-hidden py-16 sm:py-24">
        {/* Parallax background accents */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [120, -120]) }}
          className="pointer-events-none absolute left-[5%] top-[15%] h-80 w-80 rounded-full bg-electric/4 blur-[160px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
          className="pointer-events-none absolute right-[8%] top-[50%] h-60 w-60 rounded-full bg-cyan-accent/4 blur-[130px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [60, -60]) }}
          className="pointer-events-none absolute left-[40%] bottom-[10%] h-48 w-48 rounded-full bg-electric/3 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Vertical timeline spine — desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden -translate-x-1/2 lg:block">
            <div className="h-full w-px bg-white/[0.03]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-electric via-electric/80 to-cyan-accent"
            />
          </div>

          {/* Steps */}
          {PROCESS_STEPS_FULL.map((step, i) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={i}
              total={PROCESS_STEPS_FULL.length}
            />
          ))}
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="relative border-y border-white/5 bg-navy-light/40 py-16">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-12 px-6 sm:gap-20">
          <StatItem value="2 min" label="Average Quote Time" />
          <StatItem value="48 hrs" label="Avg. Claim Processing" />
          <StatItem value="99.8%" label="Claims Approval Rate" />
          <StatItem value="24/7" label="Expert Support" />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-cyan-accent/10" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
              Our process is designed to get you covered fast — with zero hassle and
              complete transparency at every step.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#calculator"
                className="cursor-pointer rounded-full bg-electric px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-blue-500 pulse-glow sm:text-base"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/#plans"
                className="cursor-pointer rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 sm:text-base"
              >
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ShieldElite Insurance
          </p>
          <Link
            href="/"
            className="cursor-pointer text-xs text-white/30 transition-colors hover:text-white/50"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </>
  );
}

/* ─── Required imports for ProcessNav (used in top bar) ─── */
import { useState, useEffect } from "react";
