import { education } from "@/lib/data";
export default function Education() { return <section className="section education-section"><div className="education-card"><span className="section-kicker">06 / EDUCATION</span><div><h2>{education.degree}</h2><p>{education.school}</p></div><span className="education-year">{education.when}</span></div></section>; }
