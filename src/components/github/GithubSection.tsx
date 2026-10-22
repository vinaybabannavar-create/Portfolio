"use client";

import React from "react";
import { ExternalLink, ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

export default function GithubSection() {
  const verifiedRepositories = [
    {
      name: "AI-Powered-Jenkins-Pipeline-Analyzer-Self-Healing-DevOps-Agent",
      desc: "Autonomous DevOps agent analyzing CI/CD logs, isolating root causes, and executing remediation.",
      lang: "Python",
      topics: ["jenkins", "ci-cd", "llm", "docker", "self-healing"],
      url: "https://github.com/vinaybabannavar-create/AI-Powered-Jenkins-Pipeline-Analyzer-Self-Healing-DevOps-Agent",
    },
    {
      name: "Neural-Nexus",
      desc: "Advanced self-reflective corrective RAG pipeline with DeepSeek-R1 document grading and hallucination loops.",
      lang: "Python",
      topics: ["langgraph", "rag", "deepseek-r1", "chromadb", "fastapi"],
      url: "https://github.com/vinaybabannavar-create/Neural-Nexus",
    },
    {
      name: "RecruitMind-AI",
      desc: "Agentic AI candidate discovery and 384-dimensional dense semantic embedding ranker.",
      lang: "Python",
      topics: ["langgraph", "chromadb", "groq", "llama-3-3", "fastapi"],
      url: "https://github.com/vinaybabannavar-create/RecruitMind-AI",
    },
    {
      name: "MedStock-GST-Pharmacy-Billing-Inventory-Suite",
      desc: "Live deployed GST-compliant billing, batch expiry tracking, and PostgreSQL atomic inventory management.",
      lang: "JavaScript",
      topics: ["react-19", "fastapi", "postgresql", "gst-billing", "docker"],
      url: "https://github.com/vinaybabannavar-create/MedStock-GST-Pharmacy-Billing-Inventory-Suite",
      deploy: "https://med-stock-gst-pharmacy-billing-inve.vercel.app",
    },
    {
      name: "NEXORA",
      desc: "Enterprise operations platform with embedded RAG document search, Socket.IO, and microservices.",
      lang: "TypeScript",
      topics: ["nextjs", "django", "fastapi", "redis", "socket-io", "mongodb"],
      url: "https://github.com/vinaybabannavar-create/NEXORA",
    },
    {
      name: "VendorMind-AI",
      desc: "8-node LangGraph procurement evaluation agent with multi-signal risk & bias scoring.",
      lang: "Python",
      topics: ["langgraph", "agentic-ai", "procurement", "explainable-ai"],
      url: "https://github.com/vinaybabannavar-create/VendorMind-AI",
    },
    {
      name: "AI-Agent-Workflow-Builder",
      desc: "Visual interactive drag-and-drop DAG workflow canvas for AI agent orchestration.",
      lang: "TypeScript",
      topics: ["typescript", "react-flow", "nextjs", "agent-builder"],
      url: "https://github.com/vinaybabannavar-create/AI-Agent-Workflow-Builder",
      deploy: "https://ai-agent-workflow-builder-rose.vercel.app",
    },
    {
      name: "Towords-Connected-Campus",
      desc: "AI-augmented multi-role campus management platform published in peer-reviewed IJSRED journal.",
      lang: "JavaScript",
      topics: ["nodejs", "mongodb", "qr-engine", "research-paper"],
      url: "https://github.com/vinaybabannavar-create/Towords-Connected-Campus",
    },
  ];

  return (
    <section className="py-32 sm:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
            <GithubIcon className="w-4 h-4 text-lime-accent" />
            <span>[SOURCE_TELEMETRY // GITHUB]</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight">
            Codebase &amp; Open Source
          </h2>
        </div>

        <a
          href={DEVELOPER_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-surface border border-obsidian-border text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs sm:text-sm font-semibold transition-colors"
        >
          <GithubIcon className="w-4 h-4 text-lime-accent" />
          <span>github.com/vinaybabannavar-create</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {verifiedRepositories.map((repo) => (
          <div
            key={repo.name}
            className="p-6 rounded-2xl border border-obsidian-border bg-obsidian-surface/60 hover:border-lime-accent/50 transition-all duration-200 flex flex-col justify-between group shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-lime-accent bg-lime-accent/10 px-2.5 py-0.5 rounded border border-lime-accent/20 font-semibold">
                  {repo.lang}
                </span>
                <FolderGit2 className="w-4 h-4 text-stone-dark group-hover:text-lime-accent transition-colors" />
              </div>

              <h4 className="font-mono font-bold text-sm text-ivory mb-2 group-hover:text-lime-accent transition-colors break-words">
                {repo.name}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed mb-6">
                {repo.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="font-mono text-[11px] text-stone-dark bg-obsidian-card px-2 py-0.5 rounded border border-obsidian-border/50"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-obsidian-border/60 flex items-center justify-between font-mono text-xs">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-ivory flex items-center gap-1 transition-colors font-semibold"
              >
                <span>Code Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {repo.deploy && (
                <a
                  href={repo.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-accent hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Explore Note */}
      <div className="mt-12 text-center">
        <a
          href={`${DEVELOPER_INFO.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-stone hover:text-lime-accent transition-colors font-bold uppercase tracking-wider"
        >
          <span>EXPLORE ALL 34 PUBLIC REPOSITORIES ON GITHUB</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
}
