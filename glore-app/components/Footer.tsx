const gradientText = {
  background: "linear-gradient(135deg, #7B3FBE, #E879B0)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25h6.773l4.22 5.573 4.997-5.573Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { icon: <XIcon />,         label: "X (Twitter)" },
  { icon: <InstagramIcon />, label: "Instagram"   },
  { icon: <LinkedInIcon />,  label: "LinkedIn"    },
];

const quickLinks = ["Browse Tools", "Categories", "Submit a Tool", "Blog"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #7B3FBE 35%, #E879B0 65%, transparent 100%)",
        }}
      />

      <div
        className="relative"
        style={{
          background: "rgba(10, 6, 18, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          {/* 3-col grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">

            {/* ── Brand ── */}
            <div>
              <a
                href="/"
                className="font-display text-2xl font-bold wordmark-shimmer inline-block mb-3 select-none"
              >
                Glore
              </a>
              <p className="text-sm text-[#9D8CB0] leading-relaxed max-w-[18rem] mt-1">
                The one-stop directory where AI influencers discover and access
                every tool that matters — faster than anyone else.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-6">
                {socials.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.09)] text-[#9D8CB0] hover:text-[#F0EAF8] hover:border-[rgba(123,63,190,0.5)] hover:bg-[rgba(123,63,190,0.12)] hover:shadow-[0_0_12px_rgba(123,63,190,0.35)] transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Quick links ── */}
            <div>
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9D8CB0] mb-5">
                Navigate
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative text-sm text-[#9D8CB0] hover:text-[#F0EAF8] transition-colors duration-200 pl-4"
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#E879B0] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        ›
                      </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Stay ahead ── */}
            <div>
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9D8CB0] mb-5">
                Stay Ahead
              </h3>
              <p className="text-sm text-[#9D8CB0] leading-relaxed mb-5 max-w-[18rem]">
                New tools drop every week. Be the first to know what&apos;s worth
                your time.
              </p>
              <a
                href="#tools"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-transform duration-200"
                style={gradientText}
              >
                Explore the Directory →
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9D8CB0]">
            <span>© {year} Glore. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#F0EAF8] transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-[#F0EAF8] transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
