export default function SectionHead({ title, idx, kicker }: { title: string; idx: string; kicker?: string }) {
  return (
    <div className="section-head">
      <div><span className="section-kicker">{idx} / {kicker || "SELECTED"}</span><h2>{title}</h2></div>
      <span className="section-line" />
    </div>
  );
}
