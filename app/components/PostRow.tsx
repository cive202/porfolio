import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";

export default function PostRow({ post, i }: { post: PostMeta; i: number }) {
  const incident = post.type === "incident";
  return (
    <Link href={`/blog/${post.slug}`} className="post-row">
      <div className="project-number">{String(i + 1).padStart(2, "0")}</div>
      <div className="project-content">
        <div className="project-topline">
          <span>{incident ? "INCIDENT REPORT" : "BLOG POST"} · {formatDate(post.date).toUpperCase()}</span>
          <b>{incident && post.severity ? `${post.severity} · ${post.status ?? "resolved"}` : `${post.readMinutes} MIN READ`}</b>
        </div>
        <h3>{post.title}</h3>
        <p>{post.summary}</p>
        {post.tags.length > 0 && <div className="tag-row">{post.tags.map((t) => <span key={t}>{t}</span>)}</div>}
      </div>
    </Link>
  );
}
