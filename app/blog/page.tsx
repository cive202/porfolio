import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import SubNav from "../components/SubNav";
import SectionHead from "../components/SectionHead";
import PostRow from "../components/PostRow";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog — Utsav Paneru",
  description: "Write-ups and incident reports from building AI/ML systems.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <header className="page-hero"><SubNav /></header>
      <main className="section">
        <SectionHead title="Blog & incident reports" idx="BLOG" kicker="ALL ENTRIES" />
        {posts.length === 0 ? (
          <p className="empty-note">Nothing here yet.</p>
        ) : (
          <div className="project-list">{posts.map((p, i) => <PostRow key={p.slug} post={p} i={i} />)}</div>
        )}
      </main>
      <Footer />
    </>
  );
}
