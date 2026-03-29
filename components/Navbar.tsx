"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 glass-strong shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 cursor-pointer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M18 2L4 9V17C4 25.28 9.84 32.94 18 35C26.16 32.94 32 25.28 32 17V9L18 2Z"
                fill="url(#shield-grad)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <path
                d="M18 7L9 11.5V17.5C9 23.02 12.84 28.16 18 29.5C23.16 28.16 27 23.02 27 17.5V11.5L18 7Z"
                fill="rgba(255,255,255,0.1)"
              />
              <path
                d="M15 18L17 20L22 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="shield-grad" x1="4" y1="2" x2="32" y2="35">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-bold font-[family-name:var(--font-display)] tracking-tight">
              Shield<span className="text-cyan-accent">Elite</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative cursor-pointer text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-electric to-cyan-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#calculator"
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-electric px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:scale-[1.03] lg:flex relative overflow-hidden"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="shimmer-btn absolute inset-0" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 rounded-full bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-6 rounded-full bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 rounded-full bg-white"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy/95 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="cursor-pointer text-3xl font-bold font-[family-name:var(--font-display)] text-white transition-colors hover:text-cyan-accent"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#calculator"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4 }}
                className="mt-4 cursor-pointer rounded-full bg-electric px-8 py-3 text-lg font-semibold text-white"
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
