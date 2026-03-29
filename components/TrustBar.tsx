"use client";

import { motion } from "framer-motion";
import { TRUST_LOGOS } from "@/lib/constants";

export function TrustBar() {
  const doubled = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-navy-light/50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-white/30">
          Trusted by leading companies
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-navy to-transparent" />

          {/* Marquee track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {doubled.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="group mx-8 flex flex-shrink-0 items-center justify-center cursor-pointer sm:mx-12"
              >
                <div className="flex items-center gap-2 rounded-lg px-6 py-3 transition-all duration-300 opacity-40 blur-[0.5px] hover:opacity-100 hover:blur-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="text-white/60 transition-colors duration-300 group-hover:text-electric"
                  >
                    <rect
                      width="28"
                      height="28"
                      rx="6"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M8 14L12 18L20 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-white/60 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
