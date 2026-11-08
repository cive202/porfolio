import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHead from "./SectionHead";
import PostRow from "./PostRow";

export default function Blogs() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <section id="blogs" className="section alt-section">
        <SectionHead title="Notes from the build" idx="06" kicker="BLOG & INCIDENTS" />
        {posts.length === 0 ? (
          <p className="empty-note">Writing in progress — posts and incident reports land here as I ship.</p>
        ) : (
          <div className="project-list">{posts.map((p, i) => <PostRow key={p.slug} post={p} i={i} />)}</div>
        )}
        <div className="blog-more"><Link className="text-link" href="/blog">All posts &amp; incident reports →</Link></div>
    </section>
  );
}
