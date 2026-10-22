"use client";

import { ArrowUp, FileDown } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-obsidian-border bg-obsidian py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-obsidian-border">
          
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded border border-obsidian-border bg-obsidian-surface flex items-center justify-center font-mono text-xs font-bold text-lime-accent">
                VB
              </div>
              <span className="font-mono text-sm font-bold text-ivory tracking-wider">
                VINAY BABANNAVAR
              </span>
            </div>
            <p className="font-sans text-xs text-stone max-w-sm">
              Engineering intelligent systems. Crafting digital experiences.
            </p>
          </div>

          {/* Direct Quick Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-stone">
            <a href="#work" className="hover:text-lime-accent transition-colors">Work</a>
            <a href="#architecture" className="hover:text-lime-accent transition-colors">Architecture</a>
            <a href="#research" className="hover:text-lime-accent transition-colors">Research</a>
            <a href="#skills" className="hover:text-lime-accent transition-colors">Capabilities</a>
            <a href="#experience" className="hover:text-lime-accent transition-colors">Experience</a>
            <a href="#contact" className="hover:text-lime-accent transition-colors">Contact</a>
            <a
              href={DEVELOPER_INFO.resumePdf}
              download="Vinay_Babannavar_Resume.pdf"
              className="text-ivory hover:text-lime-accent transition-colors flex items-center gap-1"
            >
              <FileDown className="w-3.5 h-3.5 text-lime-accent" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded border border-obsidian-border bg-obsidian-surface hover:border-lime-accent text-stone hover:text-ivory transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Telemetry & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-dark">
          <div className="flex items-center gap-4">
            <span>BENGALURU, INDIA // 12.9716° N, 77.5946° E</span>
            <span>•</span>
            <span className="text-lime-accent/80">SYSTEMS IN MOTION</span>
          </div>

          <div className="text-right">
            <span>© {new Date().getFullYear()} VINAY BABANNAVAR. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
