"use client";

import React, { useState } from "react";
import { BookOpen, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PUBLICATION_INFO } from "@/data/portfolio-data";

export default function ResearchSection() {
  const [copiedCitation, setCopiedCitation] = useState(false);

  const bibtexCitation = `@article{babannavar2026connectedcampus,
  author = {Vinay Babannavar et al.},
  title = {Towards a Connected Campus: AI-Augmented Institutional Management Platform},
  journal = {International Journal of Scientific Research and Engineering Development (IJSRED)},
  volume = {9},
  number = {3},
  year = {2026},
  issn = {2581-7175}
}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <section id="research" className="py-32 sm:py-40 bg-obsidian-surface/40 border-y border-obsidian-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>[PEER_REVIEWED_RESEARCH // PUBLISHED_WORK]</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight">
              Research &amp; Publications
            </h2>
          </div>
          <p className="font-sans text-base text-stone max-w-md">
            Academic inquiry meeting practical engineering systems. Investigating security vulnerabilities, automated gate clearance, and AI placement matching in collegiate environments.
          </p>
        </div>

        {/* Digital Research Journal Cover Card */}
        <div className="border border-obsidian-border rounded-2xl bg-obsidian-card p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="absolute right-8 -bottom-8 font-mono text-7xl lg:text-9xl font-black text-obsidian-border/20 select-none pointer-events-none">
            ISSN: 2581-7175
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Journal Visual Spine / Presentation Column */}
            <div className="lg:col-span-5 p-8 rounded-xl border border-obsidian-border bg-obsidian flex flex-col justify-between shadow-2xl space-y-8">
              <div>
                <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-6">
                  <span className="font-mono text-xs text-lime-accent font-bold uppercase tracking-wider">
                    IJSRED JOURNAL // VOL 9
                  </span>
                  <span className="px-3 py-1 rounded font-mono text-xs bg-obsidian-surface border border-obsidian-border text-ivory-dim">
                    {PUBLICATION_INFO.status}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="font-mono text-xs text-stone uppercase tracking-widest block font-semibold">
                    Original Research Article
                  </span>
                  <h3 className="font-sans font-black text-2xl text-ivory leading-snug">
                    {PUBLICATION_INFO.title}
                  </h3>
                </div>

                {/* Journal Coordinates Table */}
                <div className="p-4 rounded-lg bg-obsidian-surface border border-obsidian-border space-y-2.5 font-mono text-xs text-stone">
                  <div className="flex justify-between">
                    <span>Journal:</span>
                    <span className="text-ivory font-semibold">IJSRED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ISSN:</span>
                    <span className="text-lime-accent font-bold">2581-7175</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volume / Issue:</span>
                    <span className="text-ivory">Volume 9, Issue 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Publication Date:</span>
                    <span className="text-ivory font-semibold">May 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Author:</span>
                    <span className="text-ivory-dim">Co-Authored by Vinay Babannavar</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-obsidian-border flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopyCitation}
                  className="flex-1 py-3 px-4 rounded border border-obsidian-border hover:border-lime-accent text-stone hover:text-ivory font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-4 h-4 text-lime-accent" />
                      <span className="text-lime-accent">Citation Copied (BibTeX)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy BibTeX</span>
                    </>
                  )}
                </button>

                <a
                  href={PUBLICATION_INFO.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Codebase</span>
                </a>
              </div>
            </div>

            {/* Paper Overview & Abstract Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <span className="font-mono text-xs text-stone-dark uppercase tracking-widest block mb-3 font-bold">
                  Executive Abstract &amp; Scope
                </span>
                <p className="font-sans text-base sm:text-lg text-ivory-dim leading-relaxed mb-8">
                  {PUBLICATION_INFO.abstract}
                </p>

                <span className="font-mono text-xs text-stone-dark uppercase tracking-widest block mb-4 font-bold">
                  Key Research Contributions &amp; Architectural Findings
                </span>
                <div className="space-y-4">
                  {PUBLICATION_INFO.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-obsidian-border bg-obsidian-surface flex items-start gap-4"
                    >
                      <span className="font-mono text-sm text-lime-accent font-bold flex-shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="font-sans text-sm sm:text-base text-stone leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Distinction Banner */}
              <div className="p-4 rounded-xl border border-obsidian-border/80 bg-obsidian/70 font-mono text-xs text-stone-light flex flex-wrap items-center justify-between gap-2">
                <span className="text-stone">
                  DISTINCTION: Full-stack codebase actively implemented &amp; published under peer review.
                </span>
                <span className="text-lime-accent font-bold">
                  VERIFIED PEER-REVIEWED RECORD
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
