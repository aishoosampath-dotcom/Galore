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

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#E879B0] flex-shrink-0"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function AtIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#A855C8] flex-shrink-0"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Dual ambient glows */}
      <div
        className="pointer-events-none absolute top-1/2 -left-24 w-[420px] h-[420px] -translate-y-1/2 opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #7B3FBE, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 w-[420px] h-[420px] -translate-y-1/2 opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #E879B0, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Label */}
        <motion.span
          {...inView(0)}
          className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#E879B0] mb-4"
        >
          Contact
        </motion.span>

        {/* Headline */}
        <motion.h2
          {...inView(0.1)}
          className="text-4xl md:text-5xl font-bold text-[#F0EAF8] leading-tight mb-5"
        >
          Let&apos;s Work{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7B3FBE, #E879B0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Together.
          </span>
        </motion.h2>

        {/* Invitation */}
        <motion.p
          {...inView(0.2)}
          className="text-[#9D8CB0] leading-relaxed mb-10 max-w-md mx-auto"
        >
          Whether you&apos;re building your first AI stack or scaling an
          established creator business — I&apos;d love to hear from you. No
          pitch decks, no forms. Just a real conversation.
        </motion.p>

        {/* Glass card */}
        <motion.div
          {...inView(0.3)}
          className="gradient-border rounded-2xl p-8 md:p-10 text-left"
        >
          {/* Contact rows */}
          <div className="space-y-5 mb-8">
            {/* Email */}
            <a
              href="mailto:hello@glore.co"
              className="flex items-center gap-4 group"
            >
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232,121,176,0.18), rgba(123,63,190,0.12))",
                  border: "1px solid rgba(232,121,176,0.25)",
                }}
              >
                <MailIcon />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#9D8CB0] mb-0.5">
                  Email
                </p>
                <p className="text-sm font-medium text-[#F0EAF8] group-hover:text-[#E879B0] transition-colors duration-200">
                  hello@glore.co
                </p>
              </div>
            </a>

            {/* Divider */}
            <div className="h-px bg-[rgba(255,255,255,0.05)]" />

            {/* Social */}
            <a
              href="#"
              className="flex items-center gap-4 group"
            >
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,200,0.18), rgba(123,63,190,0.12))",
                  border: "1px solid rgba(168,85,200,0.25)",
                }}
              >
                <AtIcon />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#9D8CB0] mb-0.5">
                  Social
                </p>
                <p className="text-sm font-medium text-[#F0EAF8] group-hover:text-[#A855C8] transition-colors duration-200">
                  @glore.co
                </p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@glore.co"
            className="block w-full text-center rounded-full py-3.5 text-[0.95rem] font-semibold text-white tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7B3FBE, #A855C8, #E879B0)",
              boxShadow: "0 0 0 0 rgba(232,121,176,0)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 22px 6px rgba(232,121,176,0.45), 0 0 50px 15px rgba(123,63,190,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 0 rgba(232,121,176,0)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Send a Message →
          </a>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mx-auto max-w-7xl mt-16 md:mt-28 px-6" />
    </section>
  );
}
