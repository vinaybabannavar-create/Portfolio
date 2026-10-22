"use client";

import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Terminal, CheckCircle2, ShieldCheck, ArrowRight, Play } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { FEATURED_PROJECTS, ARCHIVE_PROJECTS, Project } from "@/data/portfolio-data";
import CaseStudyModal from "./CaseStudyModal";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Agentic AI", "Full-Stack", "Enterprise Systems", "DevOps & Cloud"];

  const flagshipProject = FEATURED_PROJECTS[0]; // Jenkins Self-Healing Agent
  const secondaryFeatured = FEATURED_PROJECTS.slice(1);

  const filteredSecondary = activeCategory === "All"
    ? secondaryFeatured
    : secondaryFeatured.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-32 sm:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
            <span>[PROJECT_INDEX // PRODUCTION_BUILDS]</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded font-mono text-xs transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-lime-accent text-obsidian font-bold shadow-lg shadow-lime-accent/15"
                  : "bg-obsidian-surface text-stone hover:text-ivory border border-obsidian-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================================
          FLAGSHIP PROJECT SHOWCASE: JENKINS SELF-HEALING AGENT
          ========================================================================= */}
      {(activeCategory === "All" || activeCategory === "DevOps & Cloud") && (
        <div className="mb-24">
          <div className="border-2 border-lime-accent/40 rounded-2xl bg-obsidian-surface/90 overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 relative">
            
            {/* Top Label Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-obsidian-border pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold uppercase tracking-wider">
                  FLAGSHIP ENGINEERING BUILD // 01
                </span>
                <span className="font-mono text-xs text-stone-dark uppercase">
                  {flagshipProject.category}
                </span>
              </div>
              <span className="px-3 py-1 rounded bg-obsidian-card border border-lime-accent/40 font-mono text-xs text-lime-accent">
                {flagshipProject.status}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Purpose, Problem, Solution */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-ivory leading-tight">
                  {flagshipProject.title}
                </h3>

                <p className="font-sans text-lg text-ivory-dim font-light italic leading-relaxed">
                  {flagshipProject.tagline}
                </p>

                {/* Problem & Motivation */}
                <div className="p-6 rounded-xl bg-obsidian-card border border-obsidian-border space-y-2">
                  <span className="font-mono text-xs text-amber-accent font-bold uppercase tracking-wider block">
                    The Problem &amp; Operational Bottleneck
                  </span>
                  <p className="font-sans text-base text-ivory-dim leading-relaxed">
                    {flagshipProject.problem}
                  </p>
                </div>

                {/* What Was Engineered */}
                <div className="p-6 rounded-xl bg-obsidian-card border border-obsidian-border space-y-2">
                  <span className="font-mono text-xs text-lime-accent font-bold uppercase tracking-wider block">
                    What Was Built &amp; Engineering Solution
                  </span>
                  <p className="font-sans text-base text-ivory-dim leading-relaxed">
                    {flagshipProject.solution}
                  </p>
                </div>

                {/* Verified Metrics Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {flagshipProject.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded bg-obsidian-card border border-obsidian-border flex items-start gap-2.5 font-mono text-xs text-stone"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime-accent flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {flagshipProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-obsidian-card border border-obsidian-border font-mono text-xs text-ivory-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Flagship CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="px-6 py-3.5 rounded bg-lime-accent text-obsidian font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-lime-dim transition-colors flex items-center gap-2 shadow-lg shadow-lime-accent/15"
                  >
                    <span>Inspect Agent Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded border border-obsidian-border bg-obsidian-card text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-lime-accent" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Distinctive Architecture Workflow Graphic */}
              <div className="lg:col-span-5">
                <div className="border border-obsidian-border rounded-xl bg-obsidian p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-obsidian-border font-mono text-xs text-stone">
                    <span className="flex items-center gap-2 text-lime-accent">
                      <Terminal className="w-4 h-4" />
                      <span>AUTONOMOUS_DIAGNOSTIC_FLOW</span>
                    </span>
                    <span className="text-stone-dark">5 NODES</span>
                  </div>

                  {/* Flow Steps with Clear Visual Connectors */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded bg-obsidian-card border border-red-500/40 text-red-400">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">01 // FAILURE INTERCEPT</span>
                        <span className="text-[10px] text-stone">WEBHOOK</span>
                      </div>
                      <p className="font-sans text-xs text-stone">
                        Intercepts failed build #104 &amp; opens sliding-window log stream.
                      </p>
                    </div>

                    <div className="text-center text-stone-dark text-xs flex items-center justify-center gap-2">
                      <span className="w-px h-3 bg-obsidian-border" />
                    </div>

                    <div className="p-3.5 rounded bg-obsidian-card border border-obsidian-border text-ivory">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">02 // AST LOG PARSER</span>
                        <span className="text-[10px] text-stone">HEURISTIC</span>
                      </div>
                      <p className="font-sans text-xs text-stone">
                        Isolates compilation stack trace from 14,000+ lines of raw console noise.
                      </p>
                    </div>

                    <div className="text-center text-stone-dark text-xs flex items-center justify-center gap-2">
                      <span className="w-px h-3 bg-obsidian-border" />
                    </div>

                    <div className="p-3.5 rounded bg-obsidian-card border border-amber-accent/40 text-amber-accent">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">03 // ROOT-CAUSE CLASSIFIER</span>
                        <span className="text-[10px] text-stone">LLM REASONING</span>
                      </div>
                      <p className="font-sans text-xs text-stone">
                        Classifies: Missing native dependency &apos;libpq-dev&apos; in Alpine layer.
                      </p>
                    </div>

                    <div className="text-center text-stone-dark text-xs flex items-center justify-center gap-2">
                      <span className="w-px h-3 bg-obsidian-border" />
                    </div>

                    <div className="p-3.5 rounded bg-obsidian-card border border-obsidian-border text-ivory">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">04 // PATCH SYNTHESIS</span>
                        <span className="text-[10px] text-stone">REMEDIATION</span>
                      </div>
                      <p className="font-sans text-xs text-stone">
                        Generates configuration diff adding required package header.
                      </p>
                    </div>

                    <div className="text-center text-stone-dark text-xs flex items-center justify-center gap-2">
                      <span className="w-px h-3 bg-obsidian-border" />
                    </div>

                    <div className="p-3.5 rounded bg-obsidian-card border border-lime-accent/50 text-lime-accent">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">05 // RE-DISPATCH &amp; VERIFY</span>
                        <span className="text-[10px] text-lime-accent font-bold">42s END-TO-END</span>
                      </div>
                      <p className="font-sans text-xs text-stone">
                        Build #105 retry dispatches &amp; succeeds with zero human delay.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="font-mono text-xs text-stone hover:text-lime-accent transition-colors"
                    >
                      [Click to view full architecture specifications]
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          SECONDARY FEATURED PROJECTS (02—06)
          ========================================================================= */}
      <div className="space-y-16 mb-24">
        {filteredSecondary.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={project.id}
              className="border border-obsidian-border rounded-xl bg-obsidian-surface/60 overflow-hidden hover:border-obsidian-border/90 transition-all duration-300 p-8 sm:p-12 shadow-xl relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Text Content */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs">
                      <span className="text-lime-accent font-bold">
                        PRJ // {project.number}
                      </span>
                      <span className="text-obsidian-border">/</span>
                      <span className="text-stone uppercase">
                        {project.category}
                      </span>
                      <span className="text-obsidian-border">/</span>
                      <span className="px-2.5 py-0.5 rounded bg-obsidian-card border border-obsidian-border text-ivory-dim text-[11px]">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory mb-2 group-hover:text-lime-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-base text-stone italic mb-4">
                      {project.tagline}
                    </p>

                    <p className="font-sans text-base text-ivory-dim leading-relaxed mb-6">
                      {project.problem}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2 p-2.5 rounded bg-obsidian-card border border-obsidian-border font-mono text-xs text-stone"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent flex-shrink-0" />
                          <span className="truncate">{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-obsidian-card border border-obsidian-border font-mono text-xs text-stone-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-obsidian-border">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim transition-colors flex items-center gap-2"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded border border-obsidian-border bg-obsidian-card text-stone hover:text-ivory hover:border-lime-accent font-mono text-xs flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-lime-accent" />
                      <span>Code Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded border border-lime-accent/40 bg-lime-accent/5 text-lime-accent hover:bg-lime-accent hover:text-obsidian font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Architecture Thumbnail */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="rounded-xl border border-obsidian-border bg-obsidian-card p-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-obsidian-border font-mono text-xs text-stone">
                      <span className="text-lime-accent flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>SYSTEM_GRAPH</span>
                      </span>
                      <span>DIAGRAM // {project.number}</span>
                    </div>

                    {project.id === "neural-nexus" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2.5 rounded bg-obsidian border border-obsidian-border text-ivory">
                            Retriever (384d)
                          </div>
                          <div className="p-2.5 rounded bg-obsidian border border-amber-accent/40 text-amber-accent">
                            Grader (&lt;0.70)
                          </div>
                        </div>
                        <div className="p-2.5 rounded bg-obsidian border border-stone-dark text-stone text-center text-xs">
                          ⚡ Dynamic Web Search Fallback (Tavily API)
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2.5 rounded bg-obsidian border border-obsidian-border text-ivory">
                            Grounded Generator
                          </div>
                          <div className="p-2.5 rounded bg-obsidian border border-lime-accent/40 text-lime-accent">
                            Hallucination Check ✓
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "recruitmind-ai" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-2.5 rounded bg-obsidian border border-obsidian-border flex justify-between">
                          <span className="text-stone">Input Spec:</span>
                          <span className="text-ivory font-bold">8 Technical Constraints</span>
                        </div>
                        <div className="p-2.5 rounded bg-obsidian border border-obsidian-border flex justify-between">
                          <span className="text-stone">ChromaDB Match:</span>
                          <span className="text-lime-accent font-bold">300+ Profiles (8ms)</span>
                        </div>
                        <div className="p-2.5 rounded bg-obsidian border border-lime-accent/30 text-lime-accent flex justify-between">
                          <span>Groq Llama-3.3-70B:</span>
                          <span className="font-bold">Executive Decision Card</span>
                        </div>
                      </div>
                    )}

                    {project.id === "medstock-pharmacy-suite" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex justify-between p-2.5 rounded bg-obsidian border border-obsidian-border">
                          <span className="text-stone">Tax Engine:</span>
                          <span className="text-lime-accent font-bold">CGST 9% + SGST 9%</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded bg-obsidian border border-obsidian-border">
                          <span className="text-stone">Stock Lock:</span>
                          <span className="text-ivory font-bold">PostgreSQL ACID Rows</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded bg-obsidian border border-lime-accent/30 text-lime-accent">
                          <span>Receipt Output:</span>
                          <span className="font-bold">ESC/POS Thermal Format</span>
                        </div>
                      </div>
                    )}

                    {project.id === "nexora-enterprise-platform" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                          <div className="p-2.5 rounded bg-obsidian border border-obsidian-border text-ivory">
                            Next.js Client
                          </div>
                          <div className="p-2.5 rounded bg-obsidian border border-obsidian-border text-ivory">
                            Django Core
                          </div>
                          <div className="p-2.5 rounded bg-obsidian border border-obsidian-border text-ivory">
                            FastAPI RAG
                          </div>
                        </div>
                        <div className="p-2.5 rounded bg-obsidian border border-lime-accent/30 text-lime-accent text-center">
                          Redis Pub/Sub &amp; Socket.IO Real-Time Engine
                        </div>
                      </div>
                    )}

                    {project.id === "connected-campus-platform" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex justify-between p-2.5 rounded bg-obsidian border border-obsidian-border">
                          <span className="text-stone">Dynamic QR Pass:</span>
                          <span className="text-lime-accent font-bold">Time-Bounded Clearance</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded bg-obsidian border border-obsidian-border">
                          <span className="text-stone">Research Paper:</span>
                          <span className="text-ivory font-bold">IJSRED ISSN 2581-7175</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded bg-obsidian border border-amber-accent/30 text-amber-accent">
                          <span>Placement Matcher:</span>
                          <span className="font-bold">Semantic JD Alignment</span>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full mt-4 py-2 rounded border border-obsidian-border hover:border-lime-accent text-xs font-mono text-stone hover:text-lime-accent text-center transition-colors block"
                    >
                      [Click to expand full architecture case study]
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          CURATED PROJECT ARCHIVE (07—12)
          ========================================================================= */}
      <div className="pt-16 border-t border-obsidian-border">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold block mb-1">
              [SYSTEM_ARCHIVE // 07—12]
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-black text-ivory">
              Curated Builds &amp; Prototypes
            </h3>
          </div>
          <p className="font-sans text-sm text-stone">
            Additional verified repositories and deployed applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHIVE_PROJECTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-obsidian-border bg-obsidian-surface/40 hover:border-lime-accent/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-mono text-xs">
                  <span className="text-stone-dark group-hover:text-lime-accent font-bold transition-colors">
                    PRJ // {item.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-obsidian-card border border-obsidian-border text-ivory-dim text-[11px]">
                    {item.category}
                  </span>
                </div>

                <h4 className="font-sans font-bold text-xl text-ivory mb-2 group-hover:text-lime-accent transition-colors">
                  {item.title}
                </h4>

                <p className="font-sans text-sm text-stone leading-relaxed mb-6">
                  {item.problem}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded font-mono text-xs bg-obsidian-card text-stone-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-obsidian-border/60 font-mono text-xs">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-ivory flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-lime-accent" />
                  <span>Repository</span>
                </a>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-accent hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
