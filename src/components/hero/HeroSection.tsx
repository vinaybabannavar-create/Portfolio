"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight, FileDown, Terminal, CheckCircle2 } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

const HeroArtifact = dynamic(() => import("../canvas/HeroArtifact"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] sm:h-[560px] lg:h-[640px] flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border-2 border-obsidian-border border-t-lime-accent animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-28 flex flex-col justify-between overflow-hidden bg-grid-pattern">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[650px] bg-lime-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-accent/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Top Editorial System Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 sm:mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-obsidian-border font-mono text-xs text-stone">
          <div className="flex items-center gap-3">
            <span className="text-lime-accent font-bold tracking-wider">[SYS_DEV // ACTIVE_RECORD]</span>
            <span className="hidden sm:inline text-obsidian-border">|</span>
            <span className="hidden sm:inline text-ivory-dim">FINAL-YEAR CS UNDERGRAD &bull; CGPA 8.7 / 10.0</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-ivory-dim">
              <span className="w-2 h-2 rounded-full bg-lime-accent inline-block animate-ping" />
              BENGALURU, INDIA // UTC +5:30
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Disciplines Chips */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <span className="px-3 py-1.5 rounded bg-obsidian-surface border border-lime-accent/30 font-mono text-xs text-lime-accent font-semibold tracking-wider uppercase">
                AI Systems
              </span>
              <span className="px-3 py-1.5 rounded bg-obsidian-surface border border-obsidian-border font-mono text-xs text-ivory-dim font-medium tracking-wider uppercase">
                Agentic Workflows
              </span>
              <span className="px-3 py-1.5 rounded bg-obsidian-surface border border-amber-accent/30 font-mono text-xs text-amber-accent font-medium tracking-wider uppercase">
                Full-Stack Architecture
              </span>
              <span className="px-3 py-1.5 rounded bg-obsidian-surface border border-obsidian-border font-mono text-xs text-stone font-medium tracking-wider uppercase">
                Experimental Web
              </span>
            </div>

            {/* Oversized Headline */}
            <h1 className="font-sans text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-ivory leading-[1.02] mb-8">
              VINAY <br />
              <span className="text-stone-light">BABANNAVAR</span>
            </h1>

            {/* Narrative Copy with Enhanced 16-20px Readability */}
            <div className="space-y-4 max-w-2xl mb-10">
              <p className="font-sans text-xl sm:text-2xl text-ivory font-light leading-relaxed">
                “Engineering intelligent systems. Crafting digital experiences.”
              </p>
              <p className="font-sans text-base sm:text-lg text-ivory-dim leading-relaxed">
                {DEVELOPER_INFO.heroNarrative}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="px-8 py-4 rounded bg-lime-accent text-obsidian font-mono text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-lime-dim transition-all duration-200 flex items-center gap-2.5 shadow-xl shadow-lime-accent/15"
              >
                <span>Explore Flagship Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded border border-obsidian-border bg-obsidian-surface text-ivory font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-lime-accent hover:text-lime-accent transition-all duration-200 flex items-center gap-2"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={DEVELOPER_INFO.resumePdf}
                download="Vinay_Babannavar_Resume.pdf"
                className="px-6 py-4 rounded border border-obsidian-border hover:border-ivory/50 text-stone hover:text-ivory font-mono text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center gap-2"
                title="Download verified PDF resume"
              >
                <FileDown className="w-4 h-4 text-lime-accent" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Verified Foundation Milestones */}
            <div className="mt-12 pt-8 border-t border-obsidian-border grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="block text-ivory font-sans text-base font-bold">T. John IT</span>
                <span className="font-mono text-xs text-stone">B.E. Computer Science &apos;27</span>
                <span className="block font-mono text-xs text-lime-accent font-semibold">CGPA: 8.7 / 10.0</span>
              </div>
              <div className="space-y-1">
                <span className="block text-ivory font-sans text-base font-bold">Unified Mentor</span>
                <span className="font-mono text-xs text-stone">Web Dev Intern (Apr&ndash;Jul &apos;26)</span>
                <span className="block font-mono text-xs text-ivory-dim">SwapWear Platform</span>
              </div>
              <div className="space-y-1">
                <span className="block text-lime-accent font-sans text-base font-bold">IJSRED Journal</span>
                <span className="font-mono text-xs text-stone">Peer-Reviewed Research</span>
                <span className="block font-mono text-xs text-stone-dark">ISSN: 2581-7175</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Computational Artifact */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative border border-obsidian-border rounded-xl bg-obsidian-card/60 backdrop-blur-md p-2 overflow-hidden shadow-2xl">
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-lime-accent pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-lime-accent pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-lime-accent pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-lime-accent pointer-events-none" />

              <HeroArtifact />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="flex items-center justify-between pt-5 border-t border-obsidian-border font-mono text-xs text-stone">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-lime-accent" />
            <span className="text-stone">STACK: LANGGRAPH &bull; FASTAPI &bull; REACT 19 &bull; DOCKER &bull; POSTGRESQL &bull; THREE.JS</span>
          </div>
          <a
            href="#work"
            className="flex items-center gap-2 text-stone hover:text-lime-accent transition-colors font-semibold"
          >
            <span>EXPLORE ARCHITECTURE</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
