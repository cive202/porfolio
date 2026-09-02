export default function PipelineDiagram() {
  return (
    <div className="p-4">
      <div className="font-mono text-xs text-textlightdim mb-3">
        // settleai — real-time voice pipeline
      </div>
      <svg viewBox="0 0 340 260" width="100%" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="40" x2="60" y2="90" stroke="#333855" strokeWidth="1" />
        <line x1="60" y1="90" x2="270" y2="90" stroke="#333855" strokeWidth="1" />
        <line x1="270" y1="90" x2="270" y2="140" stroke="#333855" strokeWidth="1" />
        <line x1="270" y1="140" x2="60" y2="140" stroke="#333855" strokeWidth="1" />
        <line x1="60" y1="140" x2="60" y2="190" stroke="#333855" strokeWidth="1" />
        <line x1="60" y1="190" x2="270" y2="190" stroke="#333855" strokeWidth="1" />

        <rect x="15" y="18" width="90" height="40" rx="2" fill="none" stroke="#6e67f3" strokeWidth="1.2" />
        <text x="60" y="43" fill="#f2f1ec" fontSize="12" textAnchor="middle" fontFamily="var(--font-jbmono)">
          STT
        </text>

        <rect x="225" y="70" width="90" height="40" rx="2" fill="none" stroke="#494e73" strokeWidth="1" />
        <text x="270" y="95" fill="#a9abc0" fontSize="11" textAnchor="middle" fontFamily="var(--font-jbmono)">
          VAD
        </text>

        <rect x="225" y="120" width="90" height="40" rx="2" fill="none" stroke="#6e67f3" strokeWidth="1.2" />
        <text x="270" y="145" fill="#f2f1ec" fontSize="12" textAnchor="middle" fontFamily="var(--font-jbmono)">
          RAG
        </text>

        <rect x="15" y="170" width="90" height="40" rx="2" fill="none" stroke="#6e67f3" strokeWidth="1.2" />
        <text x="60" y="195" fill="#f2f1ec" fontSize="11" textAnchor="middle" fontFamily="var(--font-jbmono)">
          LLM stream
        </text>

        <rect x="225" y="170" width="90" height="40" rx="2" fill="none" stroke="#d98e3f" strokeWidth="1.4" />
        <text x="270" y="195" fill="#f2f1ec" fontSize="12" textAnchor="middle" fontFamily="var(--font-jbmono)">
          TTS
        </text>

        <text x="170" y="240" fill="#5b5c78" fontSize="10" textAnchor="middle" fontFamily="var(--font-jbmono)">
          WebSockets · FastAPI · RunPod · ChromaDB
        </text>
      </svg>
    </div>
  );
}
