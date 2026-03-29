"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { PLANS } from "@/lib/constants";

function PriceDisplay({ amount, annual }: { amount: number; annual: boolean }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={`${amount}-${annual}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="text-5xl font-extrabold font-[family-name:var(--font-display)] tracking-tight"
      >
        ${amount}
      </motion.span>
    </AnimatePresence>
  );
}

function PlanCard({
  plan,
  index,
  annual,
}: {
  plan: (typeof PLANS)[number];
  index: number;
  annual: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const speeds = [-20, -35, -20];
  const y = useTransform(scrollYProgress, [0, 1], [40, speeds[index]]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative cursor-pointer rounded-3xl p-8 transition-shadow duration-300 ${
        plan.popular
          ? "glass scale-105 ring-1 ring-electric/30 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          : "glass hover:shadow-lg hover:shadow-electric/5"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-electric to-cyan-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Most Popular
        </div>
      )}

      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
        {plan.name}
      </h3>
      <p className="mt-2 text-sm text-white/40">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <PriceDisplay
          amount={annual ? plan.yearlyPrice : plan.monthlyPrice}
          annual={annual}
        />
        <span className="text-sm text-white/40">
          /{annual ? "year" : "month"}
        </span>
      </div>

      <div className="my-8 h-px bg-white/10" />

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            {feature.included ? (
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
            <span className={`text-sm ${feature.included ? "text-white/70" : "text-white/25"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full cursor-pointer rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${
          plan.popular
            ? "bg-electric text-white hover:bg-blue-500"
            : "border border-white/15 text-white hover:bg-white/5"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}

export function Plans() {
  const [annual, setAnnual] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOrbY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="plans" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      {/* Parallax background orb */}
      <motion.div
        style={{ y: bgOrbY }}
        className="pointer-events-none absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-electric/5 blur-[160px]"
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
            Coverage <span className="gradient-text">Plans</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Choose the protection level that fits your life. All plans include
            our core benefits with no hidden fees.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-white/40"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-7 w-14 cursor-pointer rounded-full transition-colors duration-300 ${annual ? "bg-electric" : "bg-white/20"}`}
              aria-label="Toggle annual pricing"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md ${annual ? "left-[calc(100%-1.625rem)]" : "left-0.5"}`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-white/40"}`}>
              Annually
              <span className="ml-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} annual={annual} />
          ))}
        </div>
      </div>
    </section>
  );
}
