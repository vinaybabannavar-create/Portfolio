"use client";

import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Database, ShieldAlert, GitBranch, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { FEATURED_PROJECTS, ARCHIVE_PROJECTS, Project } from "@/data/portfolio-data";
import CaseStudyModal from "./CaseStudyModal";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Agentic AI", "Full-Stack", "Enterprise Systems", "DevOps & Cloud"];

  const filteredProjects = activeCategory === "All"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-obsidian-border pb-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-2 font-semibold">
            <span>[PROJECT_INDEX // 01—06]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Selected Engineering Work
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded font-mono text-xs transition-colors ${
                activeCategory === cat
                  ? "bg-lime-accent text-obsidian font-bold shadow-md shadow-lime-accent/10"
                  : "bg-obsidian-surface text-stone hover:text-ivory border border-obsidian-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects - High-Impact Alternating Grid */}
      <div className="space-y-16">
        {filteredProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={project.id}
              className="border border-obsidian-border rounded-xl bg-obsidian-surface/60 overflow-hidden hover:border-obsidian-border/90 transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-2xl relative group"
            >
              {/* Subtle top lime indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-lime-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Content Column */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}>
                  <div>
                    {/* Meta bar */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-lime-accent font-bold">
                        PRJ // {project.number}
                      </span>
                      <span className="text-obsidian-border">/</span>
                      <span className="font-mono text-xs text-stone-dark uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-obsidian-border">/</span>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian-card border border-obsidian-border text-ivory-dim">
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-ivory mb-2 group-hover:text-lime-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-stone italic mb-4">
                      {project.tagline}
                    </p>

                    {/* Concise Problem & Solution Narrative */}
                    <p className="font-sans text-sm text-ivory-dim leading-relaxed mb-6">
                      {project.problem}
                    </p>

                    {/* Metrics Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2 p-2 rounded bg-obsidian-card/80 border border-obsidian-border font-mono text-xs text-stone"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent flex-shrink-0" />
                          <span className="truncate">{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-obsidian-card border border-obsidian-border font-mono text-[11px] text-stone"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-obsidian-border">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border border-obsidian-border bg-obsidian-card text-stone hover:text-ivory hover:border-lime-accent font-mono text-xs flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded border border-lime-accent/40 bg-lime-accent/5 text-lime-accent hover:bg-lime-accent hover:text-obsidian font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Architectural Diagram Column */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="rounded-lg border border-obsidian-border bg-obsidian-card p-5 relative overflow-hidden">
                    
                    {/* Visual header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-obsidian-border font-mono text-[11px] text-stone">
                      <span className="flex items-center gap-1.5 text-lime-accent">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>ARCHITECTURE_PREVIEW</span>
                      </span>
                      <span>DIAGRAM // {project.number}</span>
                    </div>

                    {/* Custom Abstract Technical Visual per project */}
                    {project.id === "jenkins-self-healing-agent" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded bg-obsidian border border-red-500/30 text-red-400 flex items-center justify-between">
                          <span>[FAIL] Jenkins Build #104</span>
                          <span className="text-[10px]">Exit 137</span>
                        </div>
                        <div className="text-center text-stone-dark text-[10px]">↓ AST LOG STREAM FILTER</div>
                        <div className="p-2.5 rounded bg-obsidian border border-amber-accent/30 text-amber-accent flex items-center justify-between">
                          <span>[ROOT_CAUSE] Missing libpq-dev</span>
                          <span className="text-[10px]">Conf: 98%</span>
                        </div>
                        <div className="text-center text-stone-dark text-[10px]">↓ AUTONOMOUS REMEDIATION</div>
                        <div className="p-2.5 rounded bg-obsidian border border-lime-accent/40 text-lime-accent flex items-center justify-between">
                          <span>[PASS] Re-dispatch #105</span>
                          <span className="text-[10px]">42s TOTAL</span>
                        </div>
                      </div>
                    )}

                    {project.id === "neural-nexus" && (
                      <div className="space-y-2 font-mono text-xs">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 rounded bg-obsidian border border-obsidian-border text-ivory text-center">
                            Retriever (384d)
                          </div>
                          <div className="p-2 rounded bg-obsidian border border-amber-accent/30 text-amber-accent text-center">
                            Grader (&lt;0.70)
                          </div>
                        </div>
                        <div className="p-2 rounded bg-obsidian border border-stone-dark text-stone text-center text-[11px]">
                          ⚡ Dynamic Web Search Fallback (Tavily API)
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 rounded bg-obsidian border border-obsidian-border text-ivory text-center">
                            Grounded Generator
                          </div>
                          <div className="p-2 rounded bg-obsidian border border-lime-accent/40 text-lime-accent text-center">
                            Hallucination Check ✓
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "recruitmind-ai" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2 rounded bg-obsidian border border-obsidian-border text-stone flex justify-between">
                          <span>Input Spec</span>
                          <span className="text-ivory">8 Core Constraints</span>
                        </div>
                        <div className="p-2 rounded bg-obsidian border border-obsidian-border text-stone flex justify-between">
                          <span>ChromaDB Vector Match</span>
                          <span className="text-lime-accent">300+ Profiles (8ms)</span>
                        </div>
                        <div className="p-2 rounded bg-obsidian border border-lime-accent/30 text-lime-accent flex justify-between">
                          <span>Groq Llama-3.3-70B</span>
                          <span>Executive Summary</span>
                        </div>
                      </div>
                    )}

                    {project.id === "medstock-pharmacy-suite" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="flex justify-between p-2 rounded bg-obsidian border border-obsidian-border text-stone">
                          <span>GST Engine</span>
                          <span className="text-lime-accent">CGST 9% + SGST 9%</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-obsidian border border-obsidian-border text-stone">
                          <span>Stock Lock</span>
                          <span className="text-ivory">PostgreSQL ACID Rows</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-obsidian border border-lime-accent/30 text-lime-accent">
                          <span>Receipt Output</span>
                          <span>ESC/POS Thermal Ready</span>
                        </div>
                      </div>
                    )}

                    {project.id === "nexora-enterprise-platform" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                          <div className="p-2 rounded bg-obsidian border border-obsidian-border text-ivory">
                            Next.js Client
                          </div>
                          <div className="p-2 rounded bg-obsidian border border-obsidian-border text-ivory">
                            Django Core
                          </div>
                          <div className="p-2 rounded bg-obsidian border border-obsidian-border text-ivory">
                            FastAPI RAG
                          </div>
                        </div>
                        <div className="p-2 rounded bg-obsidian border border-lime-accent/30 text-lime-accent text-center text-xs">
                          Redis Pub/Sub &amp; Socket.IO Real-Time Engine
                        </div>
                      </div>
                    )}

                    {project.id === "connected-campus-platform" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="flex justify-between p-2 rounded bg-obsidian border border-obsidian-border text-stone">
                          <span>Dynamic QR Pass</span>
                          <span className="text-lime-accent">Cryptographic Expiry</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-obsidian border border-obsidian-border text-stone">
                          <span>Research Base</span>
                          <span className="text-ivory">IJSRED ISSN 2581-7175</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-obsidian border border-amber-accent/30 text-amber-accent">
                          <span>Placement Ledger</span>
                          <span>AI Resume Alignment</span>
                        </div>
                      </div>
                    )}

                    {/* Subtle click cue */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full mt-4 py-1.5 rounded border border-obsidian-border hover:border-lime-accent text-[11px] font-mono text-stone hover:text-lime-accent text-center transition-colors block"
                    >
                      [Click to view full architecture diagram]
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Curated Projects Archive */}
      <div className="mt-24 pt-12 border-t border-obsidian-border">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold block mb-1">
              [SYSTEM_ARCHIVE // 07—12]
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-ivory">
              Curated Technical Builds & Prototypes
            </h3>
          </div>
          <p className="font-mono text-xs text-stone">
            Additional verified repositories and live deployments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHIVE_PROJECTS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg border border-obsidian-border bg-obsidian-surface/40 hover:border-lime-accent/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-stone-dark group-hover:text-lime-accent transition-colors">
                    {item.number}
                  </span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian-card border border-obsidian-border text-ivory-dim">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-sans font-bold text-lg text-ivory mb-1.5 group-hover:text-lime-accent transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-stone leading-relaxed mb-4">
                  {item.problem}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 rounded font-mono text-[10px] bg-obsidian-card text-stone-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-obsidian-border/60">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-stone hover:text-ivory flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-lime-accent hover:underline flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Mount */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
