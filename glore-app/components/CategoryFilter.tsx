"use client";

import { categories, Category } from "@/lib/tools";

interface Props {
  active: Category;
  onChange: (c: Category) => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "text-white shadow-[0_0_16px_rgba(123,63,190,0.5)]"
                : "text-[#9D8CB0] border border-[rgba(255,255,255,0.09)] hover:text-[#F0EAF8] hover:border-[rgba(123,63,190,0.4)] hover:bg-[rgba(123,63,190,0.1)]"
            }`}
            style={
              isActive
                ? { background: "linear-gradient(135deg,#7B3FBE,#E879B0)" }
                : {}
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
