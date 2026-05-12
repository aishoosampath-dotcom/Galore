"use client";

import { motion } from "framer-motion";

function inView(delay = 0) {
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

const gradientText = {
  background: "linear-gradient(135deg, #7B3FBE, #E879B0)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

function CompassIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#E879B0]">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#A855C8]">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#7B3FBE]">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

const services = [
  {
    Icon: CompassIcon,
    name: "Tool Discovery",
    description:
      "Cut through the noise and find AI tools that actually fit your workflow. No more tab overload, no more wasted free trials on tools that don't stick.",
    resultLabel: "Your Result",
    result:
      "You launch better content in half the time, using tools chosen specifically for your niche and audience.",
  },
  {
    Icon: StackIcon,
    name: "Creator Stack Building",
    description:
      "We map your entire creator workflow and replace every gap with the right AI tool, in the right order — nothing redundant, nothing missing.",
    resultLabel: "Your Result",
    result:
      "A lean, powerful stack that scales with your audience and compounds your output week over week.",
  },
  {
    Icon: TrendingIcon,
    name: "AI Growth Strategy",
    description:
      "Turn the AI tools you're already using into a system that compounds — more reach, deeper engagement, and revenue that doesn't rely on a single platform.",
    resultLabel: "Your Result",
    result:
      "Measurable growth in 60 days, with a documented playbook you own — and can hand to a team when you're ready.",
  },
];

export default function Offers() {
  return (
    <section id="tools" className="relative py-20 md:py-28 overflow-hidden">
      {/* Soft pink accent right */}
      <div
        className="pointer-events-none absolute top-1/2 -right-32 w-[500px] h-[500px] -translate-y-1/2 opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #E879B0, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            {...inView(0)}
            className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#E879B0] mb-3"
          >
            What I Offer
          </motion.span>

          <motion.h2
            {...inView(0.1)}
            className="text-4xl md:text-5xl font-bold text-[#F0EAF8] leading-tight mb-4"
          >
            Built to Move{" "}
            <span style={gradientText}>Creators Forward</span>
          </motion.h2>

          <motion.p
            {...inView(0.2)}
            className="text-[#9D8CB0] max-w-xl mx-auto leading-relaxed"
          >
            Three focused offerings. Each one designed around a single
            outcome: your growth — not a list of features you&apos;ll never use.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ Icon, name, description, resultLabel, result }, i) => (
            <motion.div
              key={name}
              {...inView(0.1 + i * 0.12)}
              className="card-hover rounded-2xl p-8 flex flex-col"
            >
              {/* Icon */}
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(123,63,190,0.22), rgba(232,121,176,0.12))",
                  border: "1px solid rgba(123,63,190,0.28)",
                }}
              >
                <Icon />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#F0EAF8] mb-3">{name}</h3>

              {/* Description */}
              <p className="text-sm text-[#9D8CB0] leading-relaxed flex-1">
                {description}
              </p>

              {/* Result */}
              <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.06)]">
                <p
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-1.5"
                  style={gradientText}
                >
                  {resultLabel}
                </p>
                <p className="text-sm text-[#F0EAF8] leading-relaxed">
                  {result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mx-auto max-w-7xl mt-16 md:mt-28 px-6" />
    </section>
  );
}
