import Link from "next/link";
import { profile } from "@/lib/data";

export default function SubNav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="brand" aria-label="Home">
        <span className="brand-mark">UP</span>
        <span>{profile.name}</span>
      </Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/blog">Blogs</Link>
      </div>
      <a className="nav-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <span>↗</span></a>
    </nav>
  );
}
