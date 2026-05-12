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

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#E879B0]"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function AvatarPlaceholder({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div
      className="relative w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-base font-bold text-white p-[2px]"
      style={{ background: gradient }}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center text-sm font-bold text-[#F0EAF8]"
        style={{ background: "rgba(18,10,30,0.85)" }}
      >
        {initials}
      </div>
    </div>
  );
}

const testimonials = [
  {
    initials: "SK",
    gradient: "linear-gradient(135deg, #7B3FBE, #A855C8)",
    quote:
      "Glore completely changed how I approach my content workflow. I found three tools in one afternoon that replaced six others I was paying for. I've cut my production time in half — and the quality went up.",
    name: "Sofia K.",
    title: "AI Content Creator · 280K followers",
  },
  {
    initials: "MR",
    gradient: "linear-gradient(135deg, #A855C8, #E879B0)",
    quote:
      "I've tried every AI directory out there. Most are just SEO dumps. Glore feels like it was curated by someone who actually creates. The filtering alone is worth coming back for every week.",
    name: "Marcus R.",
    title: "Tech Influencer & Educator · YouTube",
  },
  {
    initials: "AL",
    gradient: "linear-gradient(135deg, #7B3FBE, #E879B0)",
    quote:
      "My agency team uses Glore as our first stop when scoping AI tool stacks for clients. The category breakdowns are sharp and the descriptions are honest — no hype, just what each tool actually does.",
    name: "Anika L.",
    title: "Founder, Creator Growth Agency",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* Ambient glow — centered */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse, #A855C8 0%, transparent 70%)",
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
            Social Proof
          </motion.span>

          <motion.h2
            {...inView(0.1)}
            className="text-4xl md:text-5xl font-bold text-[#F0EAF8] leading-tight mb-4"
          >
            What Clients Are{" "}
            <span style={gradientText}>Saying</span>
          </motion.h2>

          <motion.p
            {...inView(0.2)}
            className="text-[#9D8CB0] max-w-lg mx-auto leading-relaxed"
          >
            Real creators. Real workflows. Real results.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ initials, gradient, quote, name, title }, i) => (
            <motion.div
              key={name}
              {...inView(0.1 + i * 0.13)}
              className="testimonial-card rounded-2xl p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="flex-1 text-sm text-[#9D8CB0] leading-relaxed relative">
                {/* Opening quote mark */}
                <span
                  className="absolute -top-2 -left-1 text-4xl leading-none select-none opacity-20 font-serif"
                  aria-hidden
                  style={gradientText}
                >
                  &ldquo;
                </span>
                <p className="relative z-10 pt-2">{quote}</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <AvatarPlaceholder initials={initials} gradient={gradient} />
                <div>
                  <p className="text-sm font-semibold text-[#F0EAF8]">{name}</p>
                  <p className="text-xs text-[#9D8CB0] mt-0.5">{title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mx-auto max-w-7xl mt-28 px-6" />
    </section>
  );
}
