function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25h6.773l4.22 5.573 4.997-5.573Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { Icon: XIcon,         label: "X (Twitter)" },
  { Icon: InstagramIcon, label: "Instagram"   },
  { Icon: LinkedInIcon,  label: "LinkedIn"    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Purple → pink gradient divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #7B3FBE 35%, #E879B0 65%, transparent 100%)",
        }}
      />

      <div
        style={{
          background: "rgba(8, 5, 15, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand — left */}
          <a
            href="/"
            className="font-display text-lg font-bold wordmark-shimmer select-none"
          >
            Glore
          </a>

          {/* Social icons — centre */}
          <div className="flex items-center gap-2 order-last sm:order-none">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] text-[#9D8CB0] hover:text-[#F0EAF8] hover:border-[rgba(123,63,190,0.45)] hover:bg-[rgba(123,63,190,0.1)] transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright — right */}
          <p className="text-xs text-[#9D8CB0]">
            © {year} Glore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
