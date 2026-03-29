"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FOOTER_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = [
  {
    label: "Twitter",
    path: "M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.32 3.91A12.16 12.16 0 013.16 4.86a4.28 4.28 0 001.32 5.71 4.24 4.24 0 01-1.94-.53v.05a4.28 4.28 0 003.43 4.19 4.27 4.27 0 01-1.93.07 4.29 4.29 0 004 2.98A8.59 8.59 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 5.55a8.5 8.5 0 01-2.54.7z",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-navy-light/60">
      {/* Gradient top border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 2L4 9V17C4 25.28 9.84 32.94 18 35C26.16 32.94 32 25.28 32 17V9L18 2Z"
                  fill="url(#footer-shield)"
                />
                <path d="M15 18L17 20L22 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="footer-shield" x1="4" y1="2" x2="32" y2="35">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                Shield<span className="text-cyan-accent">Elite</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Premium insurance protection designed for modern life. Fast claims,
              transparent pricing, and 24/7 expert support.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/5 text-white/40 transition-all duration-200 hover:bg-electric/20 hover:text-electric"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-white/60">
              Products
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-white/60">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-white/60">
              Stay Updated
            </h4>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 pr-20 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition-all duration-200 focus:ring-electric/50"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-1.5 top-1.5 cursor-pointer rounded-lg bg-electric px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  {subscribed ? "Sent!" : "Subscribe"}
                </motion.button>
              </div>
            </form>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-white/40">
                <span className="text-white/60">Phone:</span>{" "}
                {FOOTER_LINKS.contact.phone}
              </p>
              <p className="text-sm text-white/40">
                <span className="text-white/60">Email:</span>{" "}
                {FOOTER_LINKS.contact.email}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ShieldElite Insurance. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="cursor-pointer text-xs text-white/30 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer text-xs text-white/30 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="cursor-pointer text-xs text-white/30 hover:text-white/50 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
