import { experience } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Experience() {
  return <section id="experience" className="section alt-section"><SectionHead title="Experience" idx="02" kicker="CAREER" />
    {experience.map((job) => <article className="experience-card" key={job.company}>
      <div className="experience-meta"><span className="company-dot" /> <strong>{job.company}</strong><span>{job.when}</span></div>
      <div><h3>{job.title}</h3><span className="location">{job.location}</span><ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul></div>
    </article>)}
  </section>;
}
