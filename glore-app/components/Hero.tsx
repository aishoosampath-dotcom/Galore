"use client";

import { motion } from "framer-motion";
import BackgroundOrbs from "./BackgroundOrbs";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  };
}

const stats = [
  { value: "500+", label: "AI Tools" },
  { value: "40+",  label: "Categories" },
  { value: "10K+", label: "Creators" },
];

const gradientText = {
  background: "linear-gradient(135deg, #7B3FBE, #E879B0)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient orbs */}
      <BackgroundOrbs />

      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-28 pb-24 max-w-5xl mx-auto w-full">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,121,176,0.35)] bg-[rgba(232,121,176,0.08)] px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-[#E879B0] uppercase mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E879B0] animate-pulse" />
            The AI Tool Hub for Influencers
          </span>
        </motion.div>

        {/* Wordmark */}
        <motion.div {...fadeUp(0.2)}>
          <h1
            className="font-display font-bold leading-none tracking-tighter mb-6 select-none"
            style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
          >
            <span className="wordmark-shimmer">Glore</span>
          </h1>
        </motion.div>

        {/* Glass card */}
        <motion.div
          {...fadeUp(0.38)}
          className="gradient-border rounded-2xl p-8 md:p-12 w-full max-w-3xl"
        >
          {/* Headline */}
          <h2
            className="font-bold leading-tight tracking-tight text-[#F0EAF8] mb-5"
            style={{ fontSize: "clamp(1.45rem, 3.8vw, 2.4rem)" }}
          >
            Your AI Tool Stack,{" "}
            <span style={gradientText}>Curated for Creators</span>{" "}
            Who Move Fast.
          </h2>

          {/* Tagline */}
          <p
            className="text-[#9D8CB0] leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}
          >
            The AI tool hub built for influencers who create, grow, and lead.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tools"
              className="btn-glow rounded-full px-9 py-3.5 text-[0.95rem] font-semibold text-white tracking-wide w-full sm:w-auto text-center"
            >
              Explore Tools →
            </a>
            <a
              href="#"
              className="rounded-full px-9 py-3.5 text-[0.95rem] font-medium text-[#9D8CB0] hover:text-[#F0EAF8] border border-[rgba(255,255,255,0.09)] hover:border-[rgba(123,63,190,0.45)] hover:bg-[rgba(123,63,190,0.08)] transition-all duration-200 w-full sm:w-auto text-center"
            >
              Submit a Tool
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap justify-center gap-x-14 gap-y-6 mt-14"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold mb-0.5" style={gradientText}>
                {value}
              </p>
              <p className="text-[0.7rem] text-[#9D8CB0] tracking-[0.14em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-indicator"
        aria-hidden
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#9D8CB0]"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
