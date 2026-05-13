export type Category =
  | "All"
  | "Image Gen"
  | "Video"
  | "Writing"
  | "Coding"
  | "Audio";

export interface Tool {
  id: string;
  name: string;
  tagline: string;
  category: Exclude<Category, "All">;
  url: string;
  featured?: boolean;
  accent: string;
}

export const tools: Tool[] = [
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "Generate stunning visuals from text prompts in seconds.",
    category: "Image Gen",
    url: "#",
    featured: true,
    accent: "#7B3FBE",
  },
  {
    id: "dalle3",
    name: "DALL·E 3",
    tagline: "OpenAI's most expressive image model, built into ChatGPT.",
    category: "Image Gen",
    url: "#",
    featured: true,
    accent: "#10A37F",
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    tagline: "Commercially safe generative AI directly inside Creative Cloud.",
    category: "Image Gen",
    url: "#",
    accent: "#E879B0",
  },
  {
    id: "runway",
    name: "Runway Gen-3",
    tagline: "Cinematic AI video generation for next-level creators.",
    category: "Video",
    url: "#",
    featured: true,
    accent: "#E879B0",
  },
  {
    id: "pika",
    name: "Pika Labs",
    tagline: "Turn ideas and images into short-form video clips instantly.",
    category: "Video",
    url: "#",
    accent: "#7B3FBE",
  },
  {
    id: "sora",
    name: "Sora",
    tagline: "OpenAI's text-to-video model — realism at a new level.",
    category: "Video",
    url: "#",
    featured: true,
    accent: "#10A37F",
  },
  {
    id: "jasper",
    name: "Jasper AI",
    tagline: "Long-form copy, ads, and captions — branded and on-voice.",
    category: "Writing",
    url: "#",
    accent: "#E879B0",
  },
  {
    id: "copyai",
    name: "Copy.ai",
    tagline: "100+ templates for marketing copy that converts.",
    category: "Writing",
    url: "#",
    accent: "#7B3FBE",
  },
  {
    id: "notionai",
    name: "Notion AI",
    tagline: "Write, summarise, and brainstorm inside your workspace.",
    category: "Writing",
    url: "#",
    accent: "#A855C8",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    tagline: "AI pair programmer that lives inside your editor.",
    category: "Coding",
    url: "#",
    featured: true,
    accent: "#7B3FBE",
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor — chat, edit, and ship faster.",
    category: "Coding",
    url: "#",
    accent: "#E879B0",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Ultra-realistic voice cloning and AI speech synthesis.",
    category: "Audio",
    url: "#",
    featured: true,
    accent: "#A855C8",
  },
];

export const categories: Category[] = [
  "All",
  "Image Gen",
  "Video",
  "Writing",
  "Coding",
  "Audio",
];

export const featuredTools = tools.filter((t) => t.featured);
