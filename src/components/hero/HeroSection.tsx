"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight, FileDown, Terminal, Sparkles, ShieldCheck } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

// Dynamically import 3D artifact with SSR disabled for optimal hydration
const HeroArtifact = dynamic(() => import("../canvas/HeroArtifact"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-obsidian-border border-t-lime-accent animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-grid-pattern">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Editorial Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-obsidian-border text-xs font-mono text-stone">
          <div className="flex items-center gap-3">
            <span className="text-lime-accent font-semibold tracking-wider">[SYS_DEV // 2026]</span>
            <span className="hidden sm:inline text-obsidian-border">|</span>
            <span className="hidden sm:inline">FINAL-YEAR CS UNDERGRAD // CGPA 8.7</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-ivory-muted">
              <span className="w-2 h-2 rounded-full bg-lime-accent inline-block animate-ping" />
              BENGALURU, INDIA // UTC +5:30
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Split Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Editorial Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-2.5 py-1 rounded bg-obsidian-surface border border-obsidian-border font-mono text-[11px] text-lime-accent font-medium tracking-wider uppercase">
                AI Systems
              </span>
              <span className="px-2.5 py-1 rounded bg-obsidian-surface border border-obsidian-border font-mono text-[11px] text-ivory-dim font-medium tracking-wider uppercase">
                Agentic Workflows
              </span>
              <span className="px-2.5 py-1 rounded bg-obsidian-surface border border-obsidian-border font-mono text-[11px] text-amber-accent font-medium tracking-wider uppercase">
                Full-Stack
              </span>
              <span className="px-2.5 py-1 rounded bg-obsidian-surface border border-obsidian-border font-mono text-[11px] text-stone font-medium tracking-wider uppercase">
                Experimental Web
              </span>
            </div>

            {/* Oversized Architect Headings */}
            <h1 className="font-sans text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-ivory leading-[1.08] mb-6">
              VINAY <br />
              <span className="text-stone">BABANNAVAR</span>
            </h1>

            {/* Positioning Statement */}
            <div className="space-y-4 max-w-2xl mb-8">
              <p className="font-sans text-xl sm:text-2xl text-ivory-dim font-light leading-relaxed">
                “Engineering intelligent systems. Crafting digital experiences.”
              </p>
              <p className="font-sans text-sm sm:text-base text-stone leading-relaxed">
                {DEVELOPER_INFO.heroNarrative}
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold tracking-wider uppercase hover:bg-lime-dim transition-all duration-200 flex items-center gap-2 shadow-lg shadow-lime-accent/10"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded border border-obsidian-border bg-obsidian-surface text-ivory font-mono text-xs font-medium tracking-wider uppercase hover:border-lime-accent hover:text-lime-accent transition-all duration-200 flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={DEVELOPER_INFO.resumePdf}
                download="Vinay_Babannavar_Resume.pdf"
                className="px-5 py-3 rounded border border-obsidian-border hover:border-ivory/40 text-stone hover:text-ivory font-mono text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
                title="Download authentic PDF resume"
              >
                <FileDown className="w-3.5 h-3.5 text-lime-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Verified Credentials Ticker */}
            <div className="mt-10 pt-6 border-t border-obsidian-border/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-stone-dark">
              <div>
                <span className="block text-ivory font-mono text-sm font-semibold">T. John IT</span>
                <span className="text-[11px] text-stone">BE Comp Sci '27 (CGPA 8.7)</span>
              </div>
              <div>
                <span className="block text-ivory font-mono text-sm font-semibold">Unified Mentor</span>
                <span className="text-[11px] text-stone">Web Dev Intern (SwapWear)</span>
              </div>
              <div>
                <span className="block text-lime-accent font-mono text-sm font-semibold">IJSRED Journal</span>
                <span className="text-[11px] text-stone">Co-Authored Research '26</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Sculpture Artifact */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-obsidian-border rounded-lg bg-obsidian-card/40 backdrop-blur-sm p-2 overflow-hidden shadow-2xl">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-lime-accent pointer-events-none" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-lime-accent pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-lime-accent pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-lime-accent pointer-events-none" />

              <HeroArtifact />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Architectural Bar & Scroll Cue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between pt-4 border-t border-obsidian-border font-mono text-xs text-stone-dark">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-lime-accent" />
            <span className="text-stone">STACK: LANGGRAPH // FASTAPI // REACT 19 // DOCKER // POSTGRESQL</span>
          </div>
          <a
            href="#work"
            className="flex items-center gap-2 text-stone hover:text-lime-accent transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
