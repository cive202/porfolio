import { profile, metrics } from "@/lib/data";
import Nav from "./Nav";

export default function Hero() {
  return (
    <header id="top" className="hero-shell">
      <Nav />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> AI/ML ENGINEER · KATHMANDU, NEPAL</div>
          <h1>Building AI systems<br /><em>that actually ship.</em></h1>
          <p className="hero-lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI systems architecture illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-grid" />
          <div className="node node-main"><span>AI</span><small>systems</small></div>
          <div className="node node-a"><span>RAG</span><small>retrieve</small></div>
          <div className="node node-b"><span>LLM</span><small>reason</small></div>
          <div className="node node-c"><span>VOICE</span><small>respond</small></div>
          <div className="connector connector-a" /><div className="connector connector-b" /><div className="connector connector-c" />
          <div className="visual-caption">01 / BUILD · MEASURE · DEPLOY</div>
        </div>
      </div>
      <div className="hero-bottom"><span><br /><br />Currently exploring inference engineering</span><span>Scroll to discover ↓</span></div>
    </header>
  );
}
