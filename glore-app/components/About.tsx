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

function PhotoPlaceholder() {
  return (
    <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
      {/* Ambient glow behind the circle */}
      <div
        className="absolute inset-0 rounded-full scale-125 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(123,63,190,0.45) 0%, rgba(232,121,176,0.3) 50%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />
      {/* Gradient border ring */}
      <div
        className="relative w-full h-full rounded-full p-[2.5px]"
        style={{
          background: "linear-gradient(135deg, #7B3FBE, #A855C8, #E879B0)",
        }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden flex items-end justify-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,14,48,0.9) 0%, rgba(18,10,30,0.95) 100%)",
          }}
        >
          {/* Person silhouette */}
          <svg
            viewBox="0 0 200 220"
            className="w-4/5 opacity-[0.22]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="72" r="42" fill="#F0EAF8" />
            <ellipse cx="100" cy="190" rx="72" ry="55" fill="#F0EAF8" />
          </svg>
        </div>
      </div>

      {/* Small floating badge */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#F0EAF8] whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, #7B3FBE, #E879B0)",
        }}
      >
        AI Curator & Builder
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Soft purple accent left */}
      <div
        className="pointer-events-none absolute top-1/2 -left-32 w-[480px] h-[480px] -translate-y-1/2 opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #7B3FBE, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <motion.div {...inView(0)} className="text-center mb-16">
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#E879B0] mb-3">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0EAF8] leading-tight">
            The Person Behind Glore
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Photo */}
          <motion.div {...inView(0.15)} className="flex justify-center">
            <PhotoPlaceholder />
          </motion.div>

          {/* Story copy */}
          <div className="flex-1 max-w-2xl space-y-6">
            <motion.p
              {...inView(0.2)}
              className="text-lg text-[#9D8CB0] leading-relaxed"
            >
              I&apos;ve spent years at the intersection of AI and creator
              culture — watching brilliant influencers burn hours on the wrong
              tools while the genuinely transformative ones stayed buried in
              Product Hunt lists nobody reads.
            </motion.p>

            <motion.p
              {...inView(0.3)}
              className="text-lg text-[#9D8CB0] leading-relaxed"
            >
              Glore started as a personal spreadsheet. Every time I found a
              tool that actually moved the needle — for content creation,
              audience growth, monetisation — I saved it. That spreadsheet
              became an obsession, then a system, then this.
            </motion.p>

            <motion.p
              {...inView(0.4)}
              className="text-lg text-[#9D8CB0] leading-relaxed"
            >
              What makes Glore different isn&apos;t the volume of tools listed.
              It&apos;s that every entry has been tested, rated, and filtered
              through one lens:{" "}
              <span className="text-[#F0EAF8] font-medium">
                does this actually help a creator move faster?
              </span>
            </motion.p>

            {/* Signature divider */}
            <motion.div
              {...inView(0.5)}
              className="flex items-center gap-4 pt-2"
            >
              <div
                className="h-px flex-1 opacity-40"
                style={{
                  background:
                    "linear-gradient(to right, #7B3FBE, transparent)",
                }}
              />
              <span className="text-sm text-[#9D8CB0] italic tracking-wide">
                Curator · Builder · AI Enthusiast
              </span>
              <div
                className="h-px flex-1 opacity-40"
                style={{
                  background:
                    "linear-gradient(to left, #E879B0, transparent)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mx-auto max-w-7xl mt-16 md:mt-28 px-6" />
    </section>
  );
}
