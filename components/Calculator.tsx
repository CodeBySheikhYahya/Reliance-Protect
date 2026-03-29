"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

type PlanType = "basic" | "premium" | "enterprise";

export function Calculator() {
  const [age, setAge] = useState(30);
  const [coverage, setCoverage] = useState(250000);
  const [plan, setPlan] = useState<PlanType>("premium");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const bgOrbY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const estimate = useMemo(() => {
    const ageFactor = age < 30 ? 0.8 : age < 45 ? 1 : age < 60 ? 1.4 : 1.8;
    const coverageFactor = coverage / 100000;
    const planMultiplier = plan === "basic" ? 0.7 : plan === "premium" ? 1 : 1.5;
    return Math.round(15 * ageFactor * coverageFactor * planMultiplier);
  }, [age, coverage, plan]);

  return (
    <section id="calculator" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgOrbY }}
        className="pointer-events-none absolute left-[20%] top-[10%] h-80 w-80 rounded-full bg-electric/5 blur-[160px]"
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
            Insurance <span className="gradient-text">Calculator</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Get an instant estimate. Adjust the sliders to see your projected
            monthly premium.
          </p>
        </motion.div>

        {/* Floating parallax card */}
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="glass rounded-3xl p-8 shadow-[0_0_60px_rgba(37,99,235,0.08)] sm:p-10">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-white/70">Age</label>
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">{age} years</span>
              </div>
              <input
                type="range" min={18} max={75} value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-electric [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-electric [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(37,99,235,0.5)]"
              />
              <div className="mt-1 flex justify-between text-xs text-white/30">
                <span>18</span><span>75</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-white/70">Coverage Amount</label>
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">${(coverage / 1000).toFixed(0)}K</span>
              </div>
              <input
                type="range" min={50000} max={1000000} step={50000} value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-electric [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-electric [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(37,99,235,0.5)]"
              />
              <div className="mt-1 flex justify-between text-xs text-white/30">
                <span>$50K</span><span>$1M</span>
              </div>
            </div>

            <div className="mb-10">
              <label className="mb-3 block text-sm font-medium text-white/70">Plan Type</label>
              <div className="grid grid-cols-3 gap-3">
                {(["basic", "premium", "enterprise"] as PlanType[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlan(p)}
                    className={`cursor-pointer rounded-xl py-3 text-sm font-semibold capitalize transition-all duration-200 ${
                      plan === p
                        ? "bg-electric text-white shadow-lg shadow-electric/25"
                        : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/40">Estimated Monthly Premium</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={estimate}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="font-[family-name:var(--font-display)] text-4xl font-extrabold gradient-text sm:text-5xl"
                    >
                      ${estimate}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-white/40">/mo</span>
                </div>
              </div>
              <a
                href="#plans"
                className="cursor-pointer rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:scale-[1.03]"
              >
                Get Exact Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
