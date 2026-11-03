import { githubRepos, githubStats, profile } from "@/lib/data";
import SectionHead from "./SectionHead";

const heat = Array.from({ length: 22 * 7 }, (_, i) => {
  const n = Math.sin(i * 12.9898 + 4.1) * 43758.5453;
  const r = n - Math.floor(n);
  const wave = (Math.sin(i / 7) + 1) / 2;
  const v = r * 0.6 + wave * 0.5;
  return v > 0.95 ? 4 : v > 0.75 ? 3 : v > 0.55 ? 2 : v > 0.35 ? 1 : 0;
});

export default function OpenSource() { return <section className="section alt-section" id="research">
    <SectionHead title="Research Works" idx="03" kicker="BUILD IN PUBLIC" />
      <div className="research-grid">
          <div className="github-panel">
              <div className="panel-label">
                  GITHUB / {profile.github.split("/").pop()}
              </div>
              <div className="gh-middle">
                  <div className="gh-heat" aria-hidden="true">
                      {heat.map((l, i) => <i key={i} className={`h${l}`} style={{ animationDelay: `${(i % 22) * 40}ms` }} />)}
                  </div>
                  <div className="gh-stats">
                      <div><strong>{githubStats.repoCount}</strong><span>REPOS</span></div>
                      <div><strong>{githubStats.followers}</strong><span>FOLLOWERS</span></div>
                      <div><strong>{githubStats.following}</strong><span>FOLLOWING</span></div>
                  </div>
              </div>
          <a className="button button-primary" href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
      </div>
      <div className="repo-list">
      {
          githubRepos.map(repo => <a className="repo" key={repo.fullName} href={`${profile.github}/${repo.fullName}`} target="_blank" rel="noopener noreferrer">
           <div>
                   <span>
                       {repo.language}
                   </span>
                   <h3>{repo.name}</h3>
                   <p>{repo.description}</p>
               </div>
               <b>↗</b>
       </a>)
          }</div>
      </div>
</section>; }
