"use client";

import React, { useState } from "react";
import { BookOpen, FileText, Copy, Check, ExternalLink, Sparkles, Award } from "lucide-react";
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
    <section id="research" className="py-24 bg-obsidian-surface/40 border-y border-obsidian-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-obsidian-border pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-2 font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>[PEER_REVIEWED_RESEARCH // 2026]</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
              Research &amp; Publications
            </h2>
          </div>
          <p className="font-sans text-sm text-stone max-w-md">
            Academic inquiry meeting practical engineering systems. Investigating security vulnerabilities, automated gate clearance, and AI placement matching in collegiate environments.
          </p>
        </div>

        {/* Digital Research Journal Cover Card */}
        <div className="border border-obsidian-border rounded-xl bg-obsidian-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle watermarked ISSN in background */}
          <div className="absolute right-6 -bottom-6 font-mono text-6xl lg:text-8xl font-black text-obsidian-border/30 select-none pointer-events-none">
            ISSN: 2581-7175
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Journal Visual Spine / Cover Presentation */}
            <div className="lg:col-span-4 p-6 rounded-lg border border-obsidian-border bg-obsidian flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-4">
                  <span className="font-mono text-[10px] text-lime-accent font-semibold uppercase tracking-wider">
                    IJSRED JOURNAL // VOL 9
                  </span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian-surface border border-obsidian-border text-ivory-dim">
                    {PUBLICATION_INFO.status}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="font-mono text-xs text-stone uppercase tracking-widest">
                    Original Research Article
                  </span>
                  <h3 className="font-sans font-bold text-lg text-ivory leading-snug">
                    {PUBLICATION_INFO.title}
                  </h3>
                </div>

                <div className="p-3 rounded bg-obsidian-surface border border-obsidian-border space-y-1.5 font-mono text-xs text-stone">
                  <div className="flex justify-between">
                    <span>Journal:</span>
                    <span className="text-ivory">IJSRED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ISSN:</span>
                    <span className="text-lime-accent">2581-7175</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volume / Issue:</span>
                    <span className="text-ivory">Vol. 9, Issue 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Published:</span>
                    <span className="text-ivory">May 2026</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-obsidian-border flex flex-col gap-2">
                <button
                  onClick={handleCopyCitation}
                  className="w-full py-2 px-3 rounded border border-obsidian-border hover:border-lime-accent text-stone hover:text-ivory font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime-accent" />
                      <span className="text-lime-accent">Citation Copied (BibTeX)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy BibTeX Citation</span>
                    </>
                  )}
                </button>

                <a
                  href={PUBLICATION_INFO.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Implementation Repo</span>
                </a>
              </div>
            </div>

            {/* Paper Overview, Abstract, and Verified Contributions */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs text-stone-dark uppercase tracking-widest block mb-2 font-semibold">
                  Executive Abstract
                </span>
                <p className="font-sans text-sm sm:text-base text-ivory-dim leading-relaxed mb-6">
                  {PUBLICATION_INFO.abstract}
                </p>

                <span className="font-mono text-xs text-stone-dark uppercase tracking-widest block mb-3 font-semibold">
                  Key Research Contributions &amp; Methodology
                </span>
                <div className="space-y-3">
                  {PUBLICATION_INFO.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded border border-obsidian-border bg-obsidian-surface flex items-start gap-3"
                    >
                      <span className="font-mono text-xs text-lime-accent font-bold flex-shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research distinction alert */}
              <div className="p-3.5 rounded border border-obsidian-border/80 bg-obsidian/70 font-mono text-xs text-stone-light flex items-center justify-between">
                <span className="text-stone">
                  DISTINCTION: Full-stack codebase actively implemented &amp; published under peer review.
                </span>
                <span className="text-lime-accent font-semibold hidden sm:inline">
                  VERIFIED RECORD
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
