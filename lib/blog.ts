import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content", "blog");

export type PostType = "post" | "incident";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: PostType;
  summary: string;
  tags: string[];
  readMinutes: number;
  // incident-only (all optional)
  severity?: "SEV1" | "SEV2" | "SEV3" | "SEV4";
  status?: "investigating" | "mitigated" | "resolved";
  duration?: string;
  impact?: string;
  project?: string;
  draft: boolean;
};

function parse(file: string) {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  // gray-matter parses bare YYYY-MM-DD as a Date; normalise back to a string.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  const words = content.trim().split(/\s+/).length;
  const meta: PostMeta = {
    slug,
    title: data.title ?? slug,
    date,
    type: data.type === "incident" ? "incident" : "post",
    summary: data.summary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readMinutes: Math.max(1, Math.round(words / 200)),
    severity: data.severity,
    status: data.status,
    duration: data.duration,
    impact: data.impact,
    project: data.project,
    draft: data.draft === true,
  };
  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => parse(f).meta)
    .filter((p) => process.env.NODE_ENV !== "production" || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string) {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(DIR, file))) return null;
  const { meta, content } = parse(file);
  const html = await marked.parse(content, { gfm: true });
  return { meta, html };
}

export function formatDate(d: string) {
  return new Date(d + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric", timeZone: "UTC",
  });
}
