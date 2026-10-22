"use client";

import React from "react";
import { Compass, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 sm:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
            <Compass className="w-4 h-4" />
            <span>[ENGINEERING_PHILOSOPHY // PERSPECTIVE]</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight">
            About &amp; Principles
          </h2>
        </div>
        <div className="font-mono text-xs text-stone uppercase tracking-wider">
          VINAY BABANNAVAR &bull; BENGALURU, INDIA (UTC +5:30)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Narrative with 17-19px Body Copy */}
        <div className="lg:col-span-7 space-y-8">
          <p className="font-sans text-2xl sm:text-3xl text-ivory font-light leading-relaxed">
            “I’m interested in the space where intelligent systems meet practical engineering. My work spans agentic AI, retrieval pipelines, backend architecture, and full-stack products — with a focus on turning technical ideas into usable software.”
          </p>

          <p className="font-sans text-base sm:text-lg text-ivory-dim leading-relaxed">
            I am a final-year Computer Science Engineering student at <strong className="text-ivory font-semibold">T. John Institute of Technology, Bengaluru</strong> (graduating in 2027, maintaining a <strong className="text-lime-accent font-semibold">CGPA of 8.7 / 10.0</strong>). My work focuses on building stateful multi-node agentic architectures with LangGraph, deterministic self-healing DevOps loops, dense semantic vector retrieval, and high-throughput transactional web platforms.
          </p>

          <p className="font-sans text-base sm:text-lg text-ivory-dim leading-relaxed">
            During my web development internship at <strong className="text-ivory font-semibold">Unified Mentor</strong>, I delivered <strong className="text-ivory font-semibold">SwapWear</strong>, a production-oriented MERN stack community marketplace with responsive client interfaces, optimized MongoDB indexing, and modular REST services. Concurrently, I co-authored peer-reviewed academic research published in <strong className="text-ivory font-semibold">IJSRED (2026)</strong> investigating cryptographic QR access control and AI campus orchestration.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-obsidian-border">
            <div className="space-y-1">
              <span className="font-mono text-3xl sm:text-4xl font-black text-lime-accent block">8.7</span>
              <span className="font-mono text-xs text-stone uppercase tracking-wider">B.E. CSE CGPA</span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-3xl sm:text-4xl font-black text-ivory block">34+</span>
              <span className="font-mono text-xs text-stone uppercase tracking-wider">Public Repos</span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-3xl sm:text-4xl font-black text-amber-accent block">01</span>
              <span className="font-mono text-xs text-stone uppercase tracking-wider">Peer-Reviewed Paper</span>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Principles Card */}
        <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl border border-obsidian-border bg-obsidian-surface/80 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-obsidian-border pb-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime-accent font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Engineering Tenets</span>
            </h3>
            <span className="font-mono text-[10px] text-stone-dark">CORE_SYSTEM</span>
          </div>

          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-obsidian-card border border-obsidian-border space-y-1.5">
              <span className="font-mono text-xs text-ivory font-bold uppercase tracking-wider block">
                01 // Deterministic Guardrails Over Blind Faith
              </span>
              <p className="font-sans text-sm text-stone leading-relaxed">
                LLMs are reasoning engines, not magic wands. Every agentic pipeline must incorporate relevance grading, assertion verification, and deterministic fallbacks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-card border border-obsidian-border space-y-1.5">
              <span className="font-mono text-xs text-ivory font-bold uppercase tracking-wider block">
                02 // Real-World Usability Trumps Artificial Complexity
              </span>
              <p className="font-sans text-sm text-stone leading-relaxed">
                A system that cannot be easily audited, packaged in Docker, or operated by real humans provides no enterprise value regardless of algorithmic novelty.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-card border border-obsidian-border space-y-1.5">
              <span className="font-mono text-xs text-ivory font-bold uppercase tracking-wider block">
                03 // Grounded Truth Over Fabricated Metrics
              </span>
              <p className="font-sans text-sm text-stone leading-relaxed">
                Software claims must be verifiable in repository source code, unit test suites, and live deployments rather than speculative marketing copy.
              </p>
            </div>
          </div>

          <div className="pt-2 text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-lime-accent hover:underline font-bold"
            >
              <span>Discuss engineering roles</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
