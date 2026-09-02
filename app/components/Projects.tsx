import { projects } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section id="work" className="section work-section">
      <SectionHead title="Selected work" idx="01" kicker="WORK" />
      <div className="project-list">
        {projects.map((project, i) => (
          <article className={`project-card ${i === 0 ? "project-featured" : ""}`} key={project.title}>
            <div className="project-number">0{i + 1}</div>
            <div className="project-content">
              <div className="project-topline"><span>{i === 0 ? "FLAGSHIP SYSTEM" : i === 1 ? "RESEARCH" : "APPLICATION"}</span><b>{project.stat}</b></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              {"status" in project && project.status && <div className="project-status"><span /> {project.status}</div>}
              <div className="project-links">
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
                {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
                {project.links.paper && <a href={project.links.paper} target="_blank" rel="noopener noreferrer">Read paper ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
