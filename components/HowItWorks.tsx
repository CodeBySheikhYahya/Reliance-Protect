"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const STEP_ICONS = [
  <svg key="q" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 2H6A2 2 0 004 4V20A2 2 0 006 22H18A2 2 0 0020 20V8Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" /><path d="M9 12L11 14L15 10" /></svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" /><polyline points="17,8 12,3 7,8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 11.08V12A10 10 0 112.46 6.45" /><polyline points="22,4 12,14.01 9,11.01" /></svg>,
];

function TimelineStep({
  step,
  index,
  total,
}: {
  step: (typeof HOW_IT_WORKS_STEPS)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4, 1], [0, 1, 1]);
  const slideX = useTransform(
    smoothProgress,
    [0, 0.6, 1],
    [isLeft ? -80 : 80, 0, 0]
  );
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 1]);

  const iconY = useTransform(smoothProgress, [0, 1], [30, -10]);
  const iconParallaxX = useTransform(
    smoothProgress,
    [0, 1],
    [isLeft ? -15 : 15, 0]
  );

  const dotScale = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0, 1]);
  const dotGlow = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [
      "0 0 0px rgba(37,99,235,0)",
      "0 0 20px rgba(37,99,235,0.6)",
      "0 0 12px rgba(37,99,235,0.3)",
    ]
  );

  const blurVal = useTransform(smoothProgress, [0, 0.3], [4, 0]);
  const filterBlur = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_80px_1fr] ${
        index < total - 1 ? "pb-20 lg:pb-28" : ""
      }`}
    >
      {/* Left column */}
      <motion.div
        style={
          isLeft
            ? { opacity, x: slideX, scale, filter: filterBlur }
            : { opacity: 0 }
        }
        className={`flex flex-col ${
          isLeft
            ? "items-end text-right"
            : "pointer-events-none lg:invisible"
        } justify-center`}
      >
        {isLeft && (
          <>
            <motion.div
              style={{ y: iconY, x: iconParallaxX }}
              className="mb-4 flex h-16 w-16 items-center justify-center self-end rounded-2xl bg-gradient-to-br from-electric to-cyan-accent text-white shadow-lg shadow-electric/20"
            >
              {STEP_ICONS[index]}
            </motion.div>
            <span className="mb-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.2em] text-electric/60">
              Step {step.step}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
              {step.description}
            </p>
          </>
        )}
      </motion.div>

      {/* Center — timeline dot */}
      <div className="hidden flex-col items-center lg:flex">
        <motion.div
          style={{
            scale: dotScale,
            boxShadow: dotGlow,
          }}
          className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-electric bg-navy"
        >
          <div className="h-2 w-2 rounded-full bg-electric" />
        </motion.div>
      </div>

      {/* Right column */}
      <motion.div
        style={
          !isLeft
            ? { opacity, x: slideX, scale, filter: filterBlur }
            : { opacity: 0 }
        }
        className={`flex flex-col ${
          !isLeft
            ? "items-start text-left"
            : "pointer-events-none lg:invisible"
        } justify-center`}
      >
        {!isLeft && (
          <>
            <motion.div
              style={{ y: iconY, x: iconParallaxX }}
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan-accent text-white shadow-lg shadow-electric/20"
            >
              {STEP_ICONS[index]}
            </motion.div>
            <span className="mb-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.2em] text-electric/60">
              Step {step.step}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
              {step.description}
            </p>
          </>
        )}
      </motion.div>

      {/* Mobile layout (replaces the grid on small screens) */}
      <motion.div
        style={{ opacity, x: slideX, scale, filter: filterBlur }}
        className="flex gap-4 lg:hidden"
      >
        <motion.div
          style={{ y: iconY }}
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan-accent text-white shadow-lg shadow-electric/20"
        >
          {STEP_ICONS[index]}
        </motion.div>
        <div>
          <span className="mb-1 block font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.2em] text-electric/60">
            Step {step.step}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
            {step.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-white/50">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 60, damping: 20 }
  );

  const bgOrbY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const bgOrbY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const bgOrbX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Parallax background orbs */}
      <motion.div
        style={{ y: bgOrbY1, x: bgOrbX }}
        className="pointer-events-none absolute left-[5%] top-[10%] h-80 w-80 rounded-full bg-electric/5 blur-[140px]"
      />
      <motion.div
        style={{ y: bgOrbY2 }}
        className="pointer-events-none absolute right-[10%] bottom-[20%] h-64 w-64 rounded-full bg-cyan-accent/5 blur-[120px]"
      />
      <motion.div
        style={{ y: bgOrbY1 }}
        className="pointer-events-none absolute left-[50%] top-[50%] h-40 w-40 -translate-x-1/2 rounded-full bg-electric/3 blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.25em] text-electric/60">
            Our Process
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold sm:text-4xl md:text-5xl">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Getting covered is simple. Four easy steps and you&apos;re protected.
          </p>
          <a
            href="/process"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-electric transition-colors hover:text-cyan-accent"
          >
            See our full process
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line that draws with scroll — desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden -translate-x-1/2 lg:block">
            {/* Track (faded) */}
            <div className="h-full w-px bg-white/5" />
            {/* Filled line (scroll-driven) */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-electric via-electric to-cyan-accent"
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-electric/30 to-cyan-accent/30 lg:hidden" />

          {/* Steps */}
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <TimelineStep
              key={step.step}
              step={step}
              index={i}
              total={HOW_IT_WORKS_STEPS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
