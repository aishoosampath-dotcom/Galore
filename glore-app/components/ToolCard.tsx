import Image from "next/image";
import { Tool } from "@/lib/tools";

const categoryColors: Record<string, string> = {
  "Image Gen": "rgba(123,63,190,0.18)",
  Video: "rgba(232,121,176,0.18)",
  Writing: "rgba(168,85,200,0.18)",
  Coding: "rgba(123,63,190,0.18)",
  Audio: "rgba(232,121,176,0.18)",
};

const categoryTextColors: Record<string, string> = {
  "Image Gen": "#A855C8",
  Video: "#E879B0",
  Writing: "#C084FC",
  Coding: "#A855C8",
  Audio: "#E879B0",
};

interface Props {
  tool: Tool;
  compact?: boolean;
}

export default function ToolCard({ tool, compact = false }: Props) {
  return (
    <a
      href={tool.url}
      className={`card-hover rounded-2xl flex flex-col gap-3 group ${
        compact ? "p-5" : "p-6"
      }`}
    >
      {/* Logo + category row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex-shrink-0 rounded-xl overflow-hidden"
          style={{
            width: compact ? 40 : 48,
            height: compact ? 40 : 48,
            background: `linear-gradient(135deg, ${tool.accent}55, ${tool.accent}22)`,
            border: `1px solid ${tool.accent}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/tool-placeholder.svg"
            alt={tool.name}
            width={compact ? 40 : 48}
            height={compact ? 40 : 48}
            className="rounded-xl"
          />
        </div>

        <span
          className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full flex-shrink-0"
          style={{
            background: categoryColors[tool.category] ?? "rgba(123,63,190,0.18)",
            color: categoryTextColors[tool.category] ?? "#A855C8",
          }}
        >
          {tool.category}
        </span>
      </div>

      {/* Name */}
      <h3
        className={`font-semibold text-[#F0EAF8] leading-snug group-hover:text-white transition-colors ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        {tool.name}
      </h3>

      {/* Tagline */}
      <p
        className={`text-[#9D8CB0] leading-relaxed flex-1 ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        {tool.tagline}
      </p>

      {/* Visit link */}
      <span
        className="text-xs font-semibold tracking-wide transition-colors mt-1"
        style={{ color: tool.accent }}
      >
        Visit Tool →
      </span>
    </a>
  );
}
