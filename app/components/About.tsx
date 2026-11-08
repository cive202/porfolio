import { about, profile } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function About() {
    return <section id="about" className="section"><SectionHead title="A little about me" idx="04" kicker="PROFILE" />
        <div className="about-grid"><div><p className="about-lede">{about.paragraph}</p><a className="text-link" href={`mailto:${profile.email}`}>Have a problem worth solving? Start a conversation ↗</a></div>
            <div className="skill-stack">{about.skills.map((skill, i) => <div className="skill" key={skill.tag}><span>0{i + 1}</span><div><b>{skill.title}</b><p>{skill.body}</p></div></div>)}</div>
        </div>
    </section>;
}
