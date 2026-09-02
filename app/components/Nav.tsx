import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <a href="#top" className="brand" aria-label="Back to top">
        <span className="brand-mark">UP</span>
        <span>{profile.name}</span>
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
      <a className="nav-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <span>↗</span></a>
    </nav>
  );
}
