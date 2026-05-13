"use client";

import { motion } from "framer-motion";
import { featuredTools } from "@/lib/tools";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  return (
    <section className="relative py-20 px-5">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#E879B0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E879B0] animate-pulse" />
            Trending Now
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(232,121,176,0.3)] to-transparent" />
        </motion.div>

        {/* Horizontal scroll strip */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {featuredTools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-shrink-0 w-[260px] snap-start"
            >
              <ToolCard tool={tool} compact />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
