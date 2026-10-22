export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "Agentic AI" | "Full-Stack" | "Enterprise Systems" | "DevOps & Cloud" | "Computer Vision";
  status: "Live Deployed" | "Production-Ready" | "Research & Implementation" | "Completed System";
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  metrics: string[];
  decisions: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architectureType: "state-machine" | "microservices" | "rag-pipeline" | "distributed-system" | "iot-ml";
  workflowSteps?: { name: string; desc: string; nodeType: "input" | "process" | "eval" | "output" | "fallback" }[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  type: "Internship" | "Research" | "Education";
}

export interface Publication {
  title: string;
  journal: string;
  issn: string;
  volume: string;
  issue: string;
  date: string;
  status: string;
  abstract: string;
  contributions: string[];
  repoUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: "Cloud & AI" | "Systems & Data" | "Machine Learning";
  verified: boolean;
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const DEVELOPER_INFO = {
  name: "Vinay Babannavar",
  role: "AI Systems Builder & Full-Stack Engineer",
  heroSubtitle: "Engineering intelligent systems. Crafting digital experiences.",
  heroNarrative: "I build AI-powered products, agentic workflows, and full-stack systems that connect intelligent automation with real-world software.",
  location: "Bengaluru, India",
  timezone: "IST (UTC +5:30)",
  availability: "Available for Engineering Roles & AI System Internships",
  email: "vinaybabannavar@gmail.com",
  phone: "+91 8971093279",
  github: "https://github.com/vinaybabannavar-create",
  linkedin: "https://www.linkedin.com/in/vinay-babannavar-0057b6339/",
  resumePdf: "/Vinay_Babannavar_Resume.pdf",
  education: {
    institution: "T. John Institute of Technology",
    location: "Bengaluru, India",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    period: "Aug 2023 — Jun 2027",
    cgpa: "8.7 / 10.0",
    standing: "Final Year Undergrad",
  },
  preUniversity: {
    institution: "Govindram Seksaria Science College",
    location: "Belagavi, India",
    degree: "Pre-University Education (Science)",
    period: "Jun 2021 — May 2023",
    score: "80%",
  },
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "jenkins-self-healing-agent",
    number: "01",
    title: "AI-Powered Jenkins Pipeline Analyzer & Self-Healing Agent",
    tagline: "Autonomous CI/CD Log Interception, Root-Cause Classification, and Self-Healing Remediation",
    category: "DevOps & Cloud",
    status: "Production-Ready",
    problem: "CI/CD build failures frequently stall engineering velocity. Sifting through 10,000+ lines of raw Jenkins console logs to find flaky tests, mismatched dependencies, or docker permission faults wastes 20–30 minutes of human triage per failure.",
    solution: "Engineered an autonomous DevOps agent that hooks directly into Jenkins pipeline webhooks, streams failure logs into a memory-efficient tokenizer, executes AST-based stack trace isolation, and dispatches diagnostic blocks to an LLM reasoning engine to classify root causes and execute automated remediation.",
    role: "Lead Architect & AI Systems Engineer",
    technologies: ["Python", "Jenkins API", "LLM APIs (Groq/OpenAI)", "Docker", "CI/CD", "PyYAML", "Regex AST"],
    metrics: [
      "Sub-45s end-to-end failure analysis vs 25m manual triage",
      "5-phase autonomous recovery loop",
      "Zero human intervention required for deterministic container & dependency faults",
    ],
    decisions: [
      "Constructed a localized sliding-window log tokenizer to truncate noise before LLM ingestion, preventing token waste on repetitive compilation warnings.",
      "Configured dual-path fallback: deterministic shell-based safe commands for known errors, and human-in-the-loop escalation with generated patch diffs for ambiguous logic bugs.",
    ],
    githubUrl: "https://github.com/vinaybabannavar-create/AI-Powered-Jenkins-Pipeline-Analyzer-Self-Healing-DevOps-Agent",
    featured: true,
    architectureType: "state-machine",
    workflowSteps: [
      { name: "Build Failure Intercept", desc: "Webhook trigger captures failed Jenkins build ID & console stream", nodeType: "input" },
      { name: "Log Stream Parsing", desc: "Sliding-window AST tokenizer isolates error traces & environment context", nodeType: "process" },
      { name: "Root-Cause Classification", desc: "LLM reasoning model identifies failure class: Dependency / Env / Script", nodeType: "eval" },
      { name: "Remediation Synthesis", desc: "Generates fix instructions, config patches, or permission commands", nodeType: "process" },
      { name: "Auto-Patch / Safe Dispatch", desc: "Applies safe patch and triggers build retry or dispatches alert", nodeType: "output" },
    ],
  },
  {
    id: "neural-nexus",
    number: "02",
    title: "Neural Nexus — Corrective RAG Pipeline",
    tagline: "Stateful Self-Reflective Retrieval with Dynamic Fallback & Hallucination Guardrails",
    category: "Agentic AI",
    status: "Production-Ready",
    problem: "Standard RAG systems fail when the retriever pulls irrelevant chunks, leading to hallucinated answers that users blindly trust. Naive vector search offers no self-correction mechanism when queried on out-of-domain topics.",
    solution: "Built a stateful 5-node LangGraph orchestration pipeline featuring active document grading with DeepSeek-R1, automated web-search query rewriting when internal document relevance falls below threshold, and post-generation hallucination verification.",
    role: "System Designer & AI Engineer",
    technologies: ["Python", "LangGraph", "DeepSeek-R1", "ChromaDB", "Pinecone", "FastAPI", "Streamlit"],
    metrics: [
      "5-node stateful LangGraph graph with cycle protection",
      "100% citation grounding validation before payload return",
      "Dynamic web search fallback via Tavily/Search API",
    ],
    decisions: [
      "Separated document relevance grading from answer synthesis to eliminate confirmation bias during generation.",
      "Engineered a hallucination verification node that cross-checks LLM response claims directly against retrieved chunks, automatically rerouting to regeneration if ungrounded claims appear.",
    ],
    githubUrl: "https://github.com/vinaybabannavar-create/Neural-Nexus",
    featured: true,
    architectureType: "rag-pipeline",
    workflowSteps: [
      { name: "Retrieve Documents", desc: "Query vectorized into 384d space & top-K retrieved from ChromaDB", nodeType: "input" },
      { name: "Grade Relevance", desc: "DeepSeek-R1 scores retrieved context relevance against user intent", nodeType: "eval" },
      { name: "Web Fallback Decision", desc: "If score < threshold, rewrites query and queries web search fallback", nodeType: "fallback" },
      { name: "Grounded Generation", desc: "Generates factual synthesis strictly referencing verified context", nodeType: "process" },
      { name: "Hallucination Loop Check", desc: "Validates assertions against citations; returns final response", nodeType: "output" },
    ],
  },
  {
    id: "recruitmind-ai",
    number: "03",
    title: "RecruitMind AI — Candidate Discovery & Ranking",
    tagline: "Multi-Signal Dense Embedding Orchestration & Explainable Recruiter Intelligence",
    category: "Agentic AI",
    status: "Production-Ready",
    problem: "Keyword-based ATS platforms discard qualified candidates who lack exact buzzword matches while failing to provide human recruiters with explainable rationale for why candidate A ranks above candidate B.",
    solution: "Engineered a stateful 6-node LangGraph system that breaks down job descriptions into dense semantic representations, computes dense embeddings across 300+ candidate profiles in ChromaDB, calculates weighted multi-signal scores, and produces data-grounded recruiter summaries via Groq Llama-3.3-70B.",
    role: "Full-Stack AI Developer",
    technologies: ["Python", "LangGraph", "ChromaDB", "Groq Llama-3.3-70B", "FastAPI", "Streamlit"],
    metrics: [
      "300+ candidate profiles indexed and semantically matched",
      "384-dimensional dense semantic embedding space",
      "Sub-second multi-signal ranking query latency",
    ],
    decisions: [
      "Adopted dense embeddings over sparse BM25 keyword matching to bridge the semantic gap between varied resume terminology.",
      "Integrated Groq high-throughput Llama inference for instantaneous executive summaries highlighting candidate strengths and trade-offs.",
    ],
    githubUrl: "https://github.com/vinaybabannavar-create/RecruitMind-AI",
    featured: true,
    architectureType: "state-machine",
    workflowSteps: [
      { name: "Parse Job Spec", desc: "Extract core technical competencies, role constraints, and seniority", nodeType: "input" },
      { name: "Dense Embedding", desc: "Compute 384-dimensional vector representation via sentence transformer", nodeType: "process" },
      { name: "ChromaDB Semantic Query", desc: "Vector similarity search over 300+ pre-indexed candidate vectors", nodeType: "process" },
      { name: "Multi-Signal Scoring", desc: "Calculate weighted composite: domain skill, recency, project complexity", nodeType: "eval" },
      { name: "Recruiter Synthesis", desc: "Groq Llama-3.3-70B compiles grounded executive decision cards", nodeType: "output" },
    ],
  },
  {
    id: "medstock-pharmacy-suite",
    number: "04",
    title: "MedStock / MediLedger — GST Pharmacy Suite",
    tagline: "Full-Stack GST-Compliant Pharmacy Billing & Real-Time Batch Inventory Platform",
    category: "Full-Stack",
    status: "Live Deployed",
    problem: "Small-to-medium retail pharmacies struggle with manual billing, compliance errors under complex Indian GST tax slabs, batch expiry oversights, and slow offline transaction processing.",
    solution: "Architected a full-stack, GST-compliant pharmaceutical billing and inventory system with React 19 and FastAPI, utilizing PostgreSQL for ACID-compliant transactional persistence, batch-level expiry alerts, and ESC/POS thermal receipt generation.",
    role: "Full-Stack Architect",
    technologies: ["React 19", "JavaScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker Compose"],
    metrics: [
      "Verified production deployment live on Vercel",
      "Instant dual-tax (CGST + SGST) calculation engine",
      "Real-time atomic stock decrement preventing overselling",
    ],
    decisions: [
      "Implemented PostgreSQL row-level locking on inventory batches during invoice finalization to avoid race conditions during simultaneous sales counter checkouts.",
      "Optimized client state management for rapid keyboard-only barcode entry and instant invoice generation.",
    ],
    githubUrl: "https://github.com/vinaybabannavar-create/MedStock-GST-Pharmacy-Billing-Inventory-Suite",
    liveUrl: "https://med-stock-gst-pharmacy-billing-inve.vercel.app",
    featured: true,
    architectureType: "distributed-system",
    workflowSteps: [
      { name: "Barcode / Item Input", desc: "Instant drug search by chemical salt, brand name, or batch scan", nodeType: "input" },
      { name: "Inventory Batch Check", desc: "ACID check for batch expiry date, MRP, and available stock units", nodeType: "process" },
      { name: "GST Calculation Engine", desc: "Automatic application of 5%, 12%, or 18% CGST/SGST tax slabs", nodeType: "eval" },
      { name: "Atomic Ledger Commit", desc: "Transaction committed to PostgreSQL with automated stock deduction", nodeType: "process" },
      { name: "Thermal Receipt Output", desc: "ESC/POS print formatting with GSTIN, customer details & drug ledger", nodeType: "output" },
    ],
  },
  {
    id: "nexora-enterprise-platform",
    number: "05",
    title: "NEXORA — AI Enterprise Operations Platform",
    tagline: "Microservices Operations Platform with Embedded RAG Knowledge Assistant & Real-Time Sync",
    category: "Enterprise Systems",
    status: "Production-Ready",
    problem: "Modern enterprise operations are fragmented across separate CRM, project tracking, employee databases, and support ticketing tools, creating organizational silos and sluggish cross-team communication.",
    solution: "Engineered a unified enterprise platform integrating employee management, task kanban boards, customer ticketing, and project milestones. Incorporates Gemini-powered document RAG search and Socket.IO for real-time team notifications and collaborative workflows.",
    role: "Full-Stack & Systems Engineer",
    technologies: ["Next.js", "TypeScript", "Django", "FastAPI", "PostgreSQL", "Redis", "MongoDB", "Socket.IO"],
    metrics: [
      "Microservice separation between auth, core API, and AI worker",
      "Real-time pub/sub notification layer via Redis and Socket.IO",
      "Role-Based Access Control (RBAC) across 4 permission tiers",
    ],
    decisions: [
      "Decoupled heavy RAG document indexing to an asynchronous FastAPI microservice, protecting Django core CRUD operations from blocking during bulk PDF uploads.",
      "Used Redis caching for frequently accessed project metadata and live socket session states.",
    ],
    githubUrl: "https://github.com/vinaybabannavar-create/NEXORA",
    featured: true,
    architectureType: "microservices",
    workflowSteps: [
      { name: "Client Gateway", desc: "Next.js frontend with SSR and optimistic UI state updates", nodeType: "input" },
      { name: "JWT / RBAC Guard", desc: "Authentication and granular permission check per role tier", nodeType: "eval" },
      { name: "Core Business Engine", desc: "Django REST microservices handling transactional relational records", nodeType: "process" },
      { name: "Real-time Pub/Sub", desc: "Redis and Socket.IO broadcasting live board updates to team members", nodeType: "process" },
      { name: "AI/RAG Document Worker", desc: "FastAPI semantic query engine parsing enterprise PDFs and records", nodeType: "output" },
    ],
  },
  {
    id: "connected-campus-platform",
    number: "06",
    title: "Towards a Connected Campus — Multi-Role Institutional OS",
    tagline: "AI-Augmented Institutional Operating System & Cryptographic Gate Clearance Engine",
    category: "Full-Stack",
    status: "Research & Implementation",
    problem: "Higher education institutions face severe administrative friction across manual gate pass clearance, uncoordinated campus placement drives, and disconnected academic records.",
    solution: "Researched and built a modular campus management system featuring dynamic cryptographic QR gate passes with time-bounded validation, faculty clearance workflows, and an AI-driven resume-to-job matching engine for institutional recruitment drives. Published as peer-reviewed research in IJSRED (2026).",
    role: "Lead Author & Full-Stack Developer",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "QR Engine", "AI Resume Matcher", "Excel Export"],
    metrics: [
      "Published in peer-reviewed journal IJSRED (ISSN: 2581-7175, Vol. 9, 2026)",
      "Dynamic QR gate clearance with timestamp anti-spoofing",
      "Placement recruitment ledger with live bulk candidate export",
    ],
    decisions: [
      "Generated time-stamped, single-use encrypted QR tokens to prevent unauthorized student exit via screenshot sharing.",
      "Designed an extensible role hierarchy allowing instantaneous transition between Student, Warden, Faculty, and Placement Officer views.",
    ],
    githubUrl: "https://github.com/vinaybabannavar-create/Towords-Connected-Campus",
    featured: true,
    architectureType: "distributed-system",
    workflowSteps: [
      { name: "Student Request Entry", desc: "Gate pass submission specifying leave rationale, duration, and guardian", nodeType: "input" },
      { name: "Faculty / Warden Approval", desc: "Multi-stage digital signoff dashboard verifying student status", nodeType: "eval" },
      { name: "Cryptographic QR Minting", desc: "Generates time-bounded, encrypted QR clearance pass", nodeType: "process" },
      { name: "Security Checkpoint Scan", desc: "Warden/Guard camera scan validates hash and logs timestamp", nodeType: "output" },
      { name: "Placement AI Matcher", desc: "Background job parses student resumes and aligns with incoming hiring JDs", nodeType: "process" },
    ],
  },
];

export const ARCHIVE_PROJECTS: Project[] = [
  {
    id: "vendormind-ai",
    number: "07",
    title: "VendorMind AI — Agentic Procurement Evaluation",
    tagline: "8-Node LangGraph Procurement Agent with Explainable AI Rankings & Risk Scoring",
    category: "Agentic AI",
    status: "Production-Ready",
    problem: "B2B procurement teams struggle with slow, subjective evaluation of vendor proposals and inconsistent risk assessments.",
    solution: "Engineered an 8-node LangGraph autonomous agent for multi-signal vendor evaluation, compliance auditing, risk & bias detection, and human-in-the-loop signoff.",
    role: "AI Architect",
    technologies: ["Python", "LangGraph", "ChromaDB", "FastAPI", "Streamlit"],
    metrics: ["8-node stateful workflow", "Human-in-the-loop approval gate"],
    decisions: ["Implemented explicit human-in-the-loop checkpoint for contracts over defined thresholds."],
    githubUrl: "https://github.com/vinaybabannavar-create/VendorMind-AI",
    featured: false,
    architectureType: "state-machine",
  },
  {
    id: "ai-agent-workflow-builder",
    number: "08",
    title: "AI Agent Workflow Builder",
    tagline: "Interactive Visual DAG Canvas for Agentic Workflow Orchestration",
    category: "Agentic AI",
    status: "Live Deployed",
    problem: "Visualizing and debugging complex multi-agent execution graphs requires dedicated visual orchestration tools.",
    solution: "Built a drag-and-drop workflow canvas allowing developers to construct, configure, and simulate multi-agent AI execution pipelines visually in real time.",
    role: "Frontend & AI Engineer",
    technologies: ["TypeScript", "Next.js", "React Flow", "Tailwind CSS"],
    metrics: ["Live deployed on Vercel", "Visual DAG graph engine"],
    decisions: ["Used optimized canvas virtualization to maintain 60 FPS with complex 20+ node graphs."],
    githubUrl: "https://github.com/vinaybabannavar-create/AI-Agent-Workflow-Builder",
    liveUrl: "https://ai-agent-workflow-builder-rose.vercel.app",
    featured: false,
    architectureType: "distributed-system",
  },
  {
    id: "swapwear-marketplace",
    number: "09",
    title: "SwapWear — Clothing Exchange Marketplace",
    tagline: "MERN Stack Circular Economy Fashion Exchange Platform",
    category: "Full-Stack",
    status: "Live Deployed",
    problem: "Fast fashion generates tremendous textile waste without dedicated peer-to-peer sustainable garment exchange platforms.",
    solution: "Developed during the Unified Mentor internship: a complete MERN stack community marketplace enabling users to list, discover, and trade pre-owned garments.",
    role: "Web Development Intern",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    metrics: ["Live deployed on Vercel", "Primary deliverable of Unified Mentor internship"],
    decisions: ["Engineered responsive UI and optimized MongoDB aggregation pipelines for fast product feed filtering."],
    githubUrl: "https://github.com/vinaybabannavar-create/Clothing-Exchange-Swap-Marketplace",
    liveUrl: "https://clothing-exchange-swap-marketplace.vercel.app",
    featured: false,
    architectureType: "distributed-system",
  },
  {
    id: "task-management-system",
    number: "10",
    title: "Full-Stack Task Management System",
    tagline: "Production Kanban Board with NestJS Architecture & Theme Persistence",
    category: "Enterprise Systems",
    status: "Live Deployed",
    problem: "Technical assessment requiring a production-quality task management board with role segregation and resilient API architecture.",
    solution: "Built guest-accessible task board with drag-and-drop state transitions, light/dark theme persistence, and a validated NestJS backend API.",
    role: "Full-Stack Developer",
    technologies: ["TypeScript", "NestJS", "React", "Tailwind CSS"],
    metrics: ["Live deployed on Vercel", "Clean modular NestJS backend"],
    decisions: ["Implemented optimistic UI mutations to guarantee zero-latency drag-and-drop feedback."],
    githubUrl: "https://github.com/vinaybabannavar-create/Task-Management-System",
    liveUrl: "https://task-management-system-alpha-two.vercel.app",
    featured: false,
    architectureType: "distributed-system",
  },
  {
    id: "smart-traffic-signal",
    number: "11",
    title: "Smart AI Traffic Signal Optimization",
    tagline: "Computer Vision Vehicle Density Analysis & Dynamic Phase Timing",
    category: "Computer Vision",
    status: "Completed System",
    problem: "Fixed-timer traffic lights fail during asymmetric peak congestion, causing prolonged intersection delays and elevated emissions.",
    solution: "Built an AI-driven traffic optimization system pairing OpenCV vehicle count extraction with Flask and React to dynamically recalibrate green light intervals.",
    role: "Computer Vision & ML Developer",
    technologies: ["Python", "OpenCV", "Machine Learning", "Flask", "React", "Vite"],
    metrics: ["Real-time metropolitan congestion forecasting grid", "Dynamic density-weighted signal switching"],
    decisions: ["Used frame-sampling heuristics to maintain accurate vehicle counts without overloading CPU inference."],
    githubUrl: "https://github.com/vinaybabannavar-create/Smart-AI-Traffic-Signal-System",
    featured: false,
    architectureType: "iot-ml",
  },
  {
    id: "intelligent-digital-twin",
    number: "12",
    title: "Intelligent Digital Twin System",
    tagline: "Real-Time IoT Sensor Telemetry Sync & Predictive Machine Learning",
    category: "Enterprise Systems",
    status: "Completed System",
    problem: "Industrial agricultural operations lack real-time digital replicas to forecast crop stress, soil hydration levels, and optimal harvesting windows.",
    solution: "Developed a digital twin simulation platform linking real-time simulated IoT sensor streams with predictive ML models for proactive anomaly alerts.",
    role: "Systems & ML Engineer",
    technologies: ["JavaScript", "Python", "IoT Telemetry", "Machine Learning"],
    metrics: ["Continuous sensor state synchronization", "Predictive yield and stress models"],
    decisions: ["Implemented threshold deviation alerts to surface localized anomalies before widespread crop damage."],
    githubUrl: "https://github.com/vinaybabannavar-create/Intelligent-Digital-Twin-System-for-Smart",
    featured: false,
    architectureType: "iot-ml",
  },
];

export const PUBLICATION_INFO: Publication = {
  title: "Towards a Connected Campus: AI-Augmented Institutional Management Platform",
  journal: "International Journal of Scientific Research and Engineering Development (IJSRED)",
  issn: "2581-7175",
  volume: "Volume 9",
  issue: "Issue 3",
  date: "May 2026",
  status: "Peer-Reviewed & Published",
  abstract: "Higher education campuses present multifaceted operational challenges across administrative record management, security protocols, and student career progression. This paper proposes a unified, AI-augmented institutional architecture that synthesizes dynamic cryptographic QR gate passes with time-bounded validation, automated multi-tier administrative approval workflows, and an intelligent resume-to-job matching pipeline. Through empirical evaluation, the platform demonstrates substantial reductions in gate processing latency and heightened administrative auditability.",
  contributions: [
    "Co-authored peer-reviewed research analyzing higher-ed operational bottlenecks and security vulnerabilities in manual gate logging.",
    "Formulated a time-bounded cryptographic QR pass protocol to eliminate pass forgery and physical credential sharing.",
    "Designed an automated placement ledger integrating semantic resume-to-JD matching algorithms for institutional recruitment drives.",
    "Engineered the full-stack prototype validated with simulated multi-role campus user workflows.",
  ],
  repoUrl: "https://github.com/vinaybabannavar-create/Towords-Connected-Campus",
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Web Development Intern",
    organization: "Unified Mentor",
    period: "Apr 2026 — Jul 2026",
    location: "Remote / Bengaluru, India",
    summary: "Contributed to the design, architectural planning, and end-to-end delivery of production-oriented full-stack web applications in an agile environment.",
    deliverables: [
      "Engineered SwapWear, a complete MERN-stack circular economy clothing marketplace, implementing responsive user interfaces and backend REST services.",
      "Developed modular REST APIs with Express.js and Node.js, managing schema models and database queries in MongoDB.",
      "Collaborated on code reviews, Git branching strategies, and responsive UI optimization across mobile and desktop displays.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
    type: "Internship",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Agentic Systems",
    code: "AI_ORCHESTRATION",
    description: "Multi-node state machines, reflection, self-correcting RAG, and dense vector search.",
    skills: [
      { name: "LangGraph", highlight: true },
      { name: "Agentic Workflows", highlight: true },
      { name: "Self-Corrective RAG", highlight: true },
      { name: "ChromaDB", highlight: true },
      { name: "Pinecone" },
      { name: "LLM APIs (Groq, OpenAI, Gemini)", highlight: true },
      { name: "Dense Embeddings" },
      { name: "DeepSeek-R1 Reasoning" },
    ],
  },
  {
    title: "Backend Engineering",
    code: "BACKEND_CORE",
    description: "High-throughput asynchronous APIs, microservice design, and schema modeling.",
    skills: [
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Django" },
      { name: "Flask" },
      { name: "Java" },
      { name: "REST API Design", highlight: true },
      { name: "JWT & RBAC Auth" },
    ],
  },
  {
    title: "Frontend & Interfaces",
    code: "FRONTEND_UI",
    description: "Responsive, performant client applications, modern typography, and spatial 3D graphics.",
    skills: [
      { name: "React 19 / 18", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Three.js / WebGL", highlight: true },
      { name: "Framer Motion" },
      { name: "HTML5 & Modern CSS" },
      { name: "Responsive Architecture" },
    ],
  },
  {
    title: "Databases & Storage",
    code: "DATA_PERSISTENCE",
    description: "Relational transactional databases, document stores, and memory caches.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "MySQL" },
      { name: "Redis Caching" },
      { name: "SQL Query Optimization" },
      { name: "ACID Transactions" },
    ],
  },
  {
    title: "DevOps & Engineering Delivery",
    code: "SYSTEMS_DELIVERY",
    description: "Continuous integration, containerized deployments, and production reliability.",
    skills: [
      { name: "Docker & Docker Compose", highlight: true },
      { name: "Jenkins CI/CD", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Linux CLI" },
      { name: "Vercel Deployment" },
      { name: "VS Code & Tooling" },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft", category: "Cloud & AI", verified: true },
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", category: "Cloud & AI", verified: true },
  { name: "GenAI Powered Data Analytics Job Simulation", issuer: "TATA Forage", category: "Machine Learning", verified: true },
  { name: "Networking Basics", issuer: "Cisco", category: "Systems & Data", verified: true },
  { name: "Cloud Computing", issuer: "NPTEL (IIT Kharagpur)", category: "Cloud & AI", verified: true },
  { name: "Database Management System", issuer: "NPTEL (IIT Madras)", category: "Systems & Data", verified: true },
  { name: "Introduction to Machine Learning", issuer: "NPTEL (IIT Madras)", category: "Machine Learning", verified: true },
  { name: "Generative AI Mastermind", issuer: "Outskill", category: "Machine Learning", verified: true },
];
