export const profile = {
  name: "Utsav Paneru",
  role: "AI/ML Engineer",
  tagline: "Building systems that understand language.",
  summary:
    "AI/ML engineer working across LLM fine-tuning, retrieval-augmented generation, and agentic systems — from QLoRA training runs to production voice pipelines.",
  location: "Kalanki, Kathmandu",
  email: "utsav10paneru@gmail.com",
  phone: "9761662351",
  github: "https://github.com/cive202",
  huggingface: "https://huggingface.co/cive202",
};

export const metrics = [
  { label: "faster TTS", value: "~16×" },
  { label: "per voice turn", value: "$0.004" },
  { label: "BERTScore", value: "0.92" },
  { label: "QLoRA on Mistral-7B", value: "4-bit" },
];

export const about = {
  paragraph:
    "I'm a final-year Computer Engineering student building AI systems end to end — from fine-tuning language models on consumer hardware to shipping full-duplex voice products. My work sits at the intersection of NLP and applied engineering: making models understand messy, domain-specific text and making them fast and cheap enough to run in production.",
  skills: [
    {
      tag: "nlp",
      title: "Language & retrieval",
      body: "Transformers, LLMs, RAG, text classification, embeddings, fine-tuning.",
    },
    {
      tag: "vision",
      title: "Computer vision",
      body: "Image classification, object detection, image processing.",
    },
    {
      tag: "agentic",
      title: "Agentic AI",
      body: "AI agents, tool calling, workflow orchestration, memory, multi-agent systems.",
    },
  ],
};

export const experience = [
  {
    company: "MetaMinds",
    when: "Nov 2025 — Mar 2026",
    location: "Lalitpur",
    title: "AI Engineer Intern",
    points: [
      "Built an NLP chatbot using Hugging Face Transformers for entity extraction, query routing, and structured data extraction from domain-specific accounting text.",
      "Fine-tuned BERT for accounting document analysis, optimizing preprocessing and evaluation to improve performance on noisy, domain-specific data.",
    ],
  },
];

export const projects = [
  {
    title: "SettleAI — Nepali Voice Assistant",
    stat: "~16× faster TTS",
    status: "Backend sleeping — RunPod GPU worker is offline, so live voice replies are paused.",
    description:
      "24/7 AI customer care that speaks Nepali — grounded in a business's own documents, with a real-time voice pipeline and natural barge-in. Fine-tuned Nepali ASR and TTS run on self-hosted GPU workers behind VAD endpointing, retrieval grounding, and streaming, holding a 3.7s median spoken-reply latency (1ms on cached repeats) across 397 measured turns.",
    stack: ["Next.js", "FastAPI", "Silero VAD", "Whisper", "Groq", "indic-parler-tts", "WebSockets"],
    links: {
      github: "https://github.com/cive202/settleAI-NepaliVoiceAssistance",
      demo: "https://settle-ai-nepali-voice-assistance.vercel.app/",
    },
  },
  {
    title: "AI-to-Human Text Style Transfer",
    stat: "BERTScore F1 0.924",
    description:
      "A research benchmark asking whether AI-generated text can be systematically rewritten to sound genuinely human. Compares BART (encoder-decoder, full fine-tune) against Mistral-7B (decoder-only, QLoRA) on a 25,140-pair dataset, evaluated across semantic, lexical, fluency, and 11 linguistic-marker dimensions. Headline finding: BART-large outperforms Mistral-7B despite being 17× smaller — pretraining objective matters more than parameter scale for this kind of controlled rewriting.",
    stack: ["BART", "Mistral-7B", "QLoRA", "4-bit quantization", "BERTScore"],
    links: {
      github:
        "https://github.com/cive202/Please-Make-It-Sound-Human-Encoder-Decoder-vs-Decoder-Only-Transformers-for-AI-Style-Transfer-Texts",
      paper: "https://arxiv.org/abs/2604.11687",
    },
  },
  {
    title: "RAG-Based AI Teaching Assistant",
    stat: "deployed on Render",
    description:
      "A retrieval-augmented question-answering system for semantic search over lecture transcripts, built with Cohere embeddings and containerized for deployment.",
    stack: ["Python", "Flask", "Cohere embeddings", "Docker"],
    links: {
      github: "https://github.com/cive202/ragbased_ai",
      demo: "https://ragbased-ai-1.onrender.com/",
    },
  },
];

export const education = {
  degree: "Bachelor's in Computer Engineering",
  school: "Kathmandu Engineering College",
  when: "Final year",
};

// Pulled from https://github.com/cive202?tab=repositories (pinned repos).
// SettleAI, the style-transfer research, and ragbased_ai are linked directly
// from their Projects cards above, so this grid covers the rest.
export const githubRepos = [
  {
    name: "Self_driving_car",
    fullName: "Self_driving_car",
    description: "A self-driving car simulation project.",
    language: "JavaScript",
    stars: 8,
  },
  {
    name: "Detecting_Parkinsons_Disease",
    fullName: "Detecting_Parkinsons_Disease",
    description: "Machine learning model for detecting Parkinson's disease from clinical data.",
    language: "Jupyter Notebook",
    stars: null as number | null,
  },
];

export const githubStats = {
  repoCount: 33,
  followers: 7,
  following: 5,
};

// Pulled from https://huggingface.co/cive202
export const huggingfaceModels = [
  {
    name: "humanize-ai-text-bart-large",
    task: "Text Generation",
    params: "0.4B",
    downloads: 766,
    likes: 2,
  },
  {
    name: "humanize-ai-text-bart-base",
    task: "Text Generation",
    params: "0.1B",
    downloads: 43,
    likes: null as number | null,
  },
  {
    name: "flan-t5-base-ai-text-seq2seq",
    task: "Seq2Seq",
    params: "0.2B",
    downloads: 3,
    likes: null as number | null,
  },
  {
    name: "gemma-2-2b-it-lora-ai-text-humanization-adapter",
    task: "Text Generation",
    params: null as string | null,
    downloads: 3,
    likes: null as number | null,
  },
  {
    name: "humanize-ai-text-mistral-7b-lora",
    task: "Text Generation",
    params: null as string | null,
    downloads: null as number | null,
    likes: null as number | null,
  },
  {
    name: "weapon-detection-yolov8-cctv",
    task: "Object Detection",
    params: null as string | null,
    downloads: null as number | null,
    likes: null as number | null,
  },
];

export const huggingfaceDatasets = [
  {
    name: "Lifestyle_Preferences_Dataset",
    downloads: "10k",
    likes: 49,
  },
];
