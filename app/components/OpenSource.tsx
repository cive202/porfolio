import { githubRepos, githubStats, profile } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function OpenSource() { return <section className="section alt-section" id="research"><SectionHead title="Open source & research" idx="03" kicker="BUILD IN PUBLIC" />
  <div className="research-grid"><div className="github-panel"><div className="panel-label">GITHUB / {profile.github.split("/").pop()}</div><div className="github-stats"><strong>{githubStats.repoCount}</strong><span>repositories</span><strong>{githubStats.followers}</strong><span>followers</span></div><a className="button button-dark" href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub ↗</a></div>
  <div className="repo-list">{githubRepos.map(repo => <a className="repo" key={repo.fullName} href={`${profile.github}/${repo.fullName}`} target="_blank" rel="noopener noreferrer"><div><span>{repo.language}</span><h3>{repo.name}</h3><p>{repo.description}</p></div><b>↗</b></a>)}</div></div>
</section>; }
