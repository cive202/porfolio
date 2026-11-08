import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import SubNav from "../../components/SubNav";
import Footer from "../../components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: `${post.meta.title} — Utsav Paneru`, description: post.meta.summary };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  const { meta, html } = post;
  const incident = meta.type === "incident";

  const facts: [string, string | undefined][] = incident
    ? [
        ["Severity", meta.severity],
        ["Status", meta.status],
        ["Duration", meta.duration],
        ["Impact", meta.impact],
        ["System", meta.project],
      ]
    : [];

  return (
    <>
      <header className="page-hero post-hero">
        <SubNav />
        <div className="post-hero-inner">
          <Link href="/blog" className="back-link">← All entries</Link>
          <div className="eyebrow">
            <span className={`pulse ${incident ? "pulse-warn" : ""}`} />
            {incident ? "INCIDENT REPORT" : "BLOG POST"} · {formatDate(meta.date).toUpperCase()} · {meta.readMinutes} MIN READ
          </div>
          <h1 className="post-title">{meta.title}</h1>
          {meta.summary && <p className="hero-lede">{meta.summary}</p>}
          {incident && (
            <dl className="incident-facts">
              {facts.filter(([, v]) => v).map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd className={k === "Severity" ? "sev" : ""}>{v}</dd></div>
              ))}
            </dl>
          )}
        </div>
      </header>
      <main className="section post-section">
        <article className="prose-post" dangerouslySetInnerHTML={{ __html: html }} />
        {meta.tags.length > 0 && <div className="tag-row post-tags">{meta.tags.map((t) => <span key={t}>{t}</span>)}</div>}
      </main>
      <Footer />
    </>
  );
}
