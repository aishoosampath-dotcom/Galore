"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Browse Tools", "Categories"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-[rgba(8,5,15,0.8)] border-b border-[rgba(123,63,190,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Wordmark */}
        <a href="/" className="font-display text-2xl font-bold tracking-tight select-none">
          <span className="wordmark-shimmer">Glore</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#tools"
              className="relative text-sm font-medium text-[#9D8CB0] hover:text-[#F0EAF8] transition-colors duration-200 group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#7B3FBE] to-[#E879B0] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#"
            className="text-sm font-medium text-[#9D8CB0] hover:text-[#F0EAF8] transition-colors duration-200 relative group"
          >
            Sign In
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#7B3FBE] to-[#E879B0] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#"
            className="rounded-full border border-[rgba(123,63,190,0.5)] px-5 py-1.5 text-sm font-semibold text-[#F0EAF8] hover:border-[#7B3FBE] hover:bg-[rgba(123,63,190,0.18)] hover:shadow-[0_0_16px_rgba(123,63,190,0.35)] transition-all duration-200"
          >
            Get Access
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 w-11 h-11 min-w-[44px] min-h-[44px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-[#F0EAF8] transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#F0EAF8] transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#F0EAF8] transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-[rgba(123,63,190,0.2)] bg-[rgba(8,5,15,0.96)] backdrop-blur-2xl px-6 py-5 flex flex-col gap-4"
        >
          {[...links, "Sign In"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-[#9D8CB0] hover:text-[#F0EAF8] transition-colors py-3 min-h-[44px] flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-1 inline-block rounded-full border border-[rgba(123,63,190,0.5)] px-5 py-3 text-sm font-semibold text-[#F0EAF8] text-center min-h-[44px]"
            onClick={() => setMenuOpen(false)}
          >
            Get Access
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
