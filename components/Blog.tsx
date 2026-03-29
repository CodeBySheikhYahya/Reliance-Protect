"use client";

import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";

export function Blog() {
  return (
    <section id="blog" className="relative bg-navy-light/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Insights &amp; <span className="gradient-text">Resources</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Expert advice and industry insights to help you make informed
            decisions about your coverage.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group cursor-pointer overflow-hidden rounded-2xl glass"
            >
              {/* Gradient image placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${post.gradient} flex items-end p-6`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative z-10 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-electric">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/40">{post.readTime}</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-electric transition-all duration-200 group-hover:gap-2">
                    Read more
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
