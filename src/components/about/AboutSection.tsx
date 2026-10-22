"use client";

import React from "react";
import { Terminal, ShieldCheck, Compass, Code2, Cpu, ArrowUpRight } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-obsidian-border pb-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-2 font-semibold">
            <Compass className="w-4 h-4" />
            <span>[ENGINEERING_PHILOSOPHY // PERSPECTIVE]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            About &amp; Core Principles
          </h2>
        </div>
        <div className="font-mono text-xs text-stone">
          VINAY BABANNAVAR // BENGALURU, INDIA
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Narrative Main Statement */}
        <div className="lg:col-span-7 space-y-6">
          <p className="font-sans text-xl sm:text-2xl text-ivory font-light leading-relaxed">
            “I’m interested in the space where intelligent systems meet practical engineering. My work spans agentic AI, retrieval pipelines, backend architecture, and full-stack products — with a focus on turning technical ideas into usable software.”
          </p>

          <p className="font-sans text-sm sm:text-base text-stone leading-relaxed">
            Currently in my final year of Computer Science Engineering at <strong className="text-ivory font-medium">T. John Institute of Technology, Bengaluru</strong> (graduating in 2027, maintaining a <strong className="text-lime-accent font-medium">CGPA of 8.7 / 10.0</strong>). My technical focus is centered on stateful agentic workflows with LangGraph, deterministic self-healing CI/CD agents, dense vector retrieval pipelines, and high-performance transactional web systems.
          </p>

          <p className="font-sans text-sm sm:text-base text-stone leading-relaxed">
            During my internship at <strong className="text-ivory font-medium">Unified Mentor</strong>, I delivered <strong className="text-ivory font-medium">SwapWear</strong>, a production-oriented MERN stack community marketplace with responsive interfaces, optimized MongoDB indexing, and modular REST services. Alongside engineering applications, I co-authored peer-reviewed academic research published in <strong className="text-ivory font-medium">IJSRED (2026)</strong> on cryptographic QR access control and AI campus orchestration.
          </p>

          {/* Quick Metrics Callout */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-obsidian-border">
            <div>
              <span className="font-mono text-2xl font-bold text-lime-accent block">8.7</span>
              <span className="font-mono text-[11px] text-stone">B.E. CSE CGPA</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-ivory block">34+</span>
              <span className="font-mono text-[11px] text-stone">GitHub Repos</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-amber-accent block">01</span>
              <span className="font-mono text-[11px] text-stone">Peer-Reviewed Paper</span>
            </div>
          </div>
        </div>

        {/* Engineering Tenets Card */}
        <div className="lg:col-span-5 p-6 rounded-xl border border-obsidian-border bg-obsidian-surface/80 space-y-5 shadow-xl">
          <h3 className="font-mono text-xs uppercase tracking-widest text-lime-accent font-semibold flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Engineering Principles</span>
          </h3>

          <div className="space-y-4">
            <div className="p-3.5 rounded bg-obsidian-card border border-obsidian-border space-y-1">
              <span className="font-mono text-xs text-ivory font-bold block">
                01 // Deterministic Guardrails Over Blind Faith
              </span>
              <p className="font-sans text-xs text-stone leading-relaxed">
                LLMs are reasoning components, not magic wands. Every agentic pipeline must incorporate relevance grading, assertion checks, and fallbacks.
              </p>
            </div>

            <div className="p-3.5 rounded bg-obsidian-card border border-obsidian-border space-y-1">
              <span className="font-mono text-xs text-ivory font-bold block">
                02 // Real-World Usability Trumps Artificial Complexity
              </span>
              <p className="font-sans text-xs text-stone leading-relaxed">
                A system that cannot be easily audited, packaged in Docker, or operated by end-users provides no enterprise value regardless of algorithmic novelty.
              </p>
            </div>

            <div className="p-3.5 rounded bg-obsidian-card border border-obsidian-border space-y-1">
              <span className="font-mono text-xs text-ivory font-bold block">
                03 // Grounded Truth Over Fabricated Metrics
              </span>
              <p className="font-sans text-xs text-stone leading-relaxed">
                Software claims must be verifiable in repository code, unit tests, and live deployments rather than speculative marketing copy.
              </p>
            </div>
          </div>

          <div className="pt-2 text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-lime-accent hover:underline font-semibold"
            >
              <span>Discuss engineering opportunities</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
