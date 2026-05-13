"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tools, Category } from "@/lib/tools";
import CategoryFilter from "./CategoryFilter";
import ToolCard from "./ToolCard";

export default function ToolGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <section id="tools" className="relative py-20 px-5">
      {/* Subtle top divider */}
      <div className="section-divider mb-16" />

      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="font-display font-bold text-[#F0EAF8] text-2xl md:text-3xl tracking-tight">
              All Tools
            </h2>
            <p className="text-[#9D8CB0] text-sm mt-1">
              {filtered.length} tool{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <CategoryFilter active={active} onChange={setActive} />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-[#9D8CB0]"
          >
            <p className="text-lg font-medium">No tools in this category yet.</p>
            <p className="text-sm mt-2">Check back soon — more are coming.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
