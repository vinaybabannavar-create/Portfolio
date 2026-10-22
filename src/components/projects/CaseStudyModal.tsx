"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Cpu, GitFork, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/portfolio-data";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-obsidian/90 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-obsidian-surface border border-obsidian-border rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-ivory max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between border-b border-obsidian-border pb-6 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold">
                SYSTEM_CASE_STUDY // {project.number}
              </span>
              <span className="px-2 py-0.5 rounded bg-obsidian-card border border-obsidian-border font-mono text-[10px] text-ivory-dim">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded bg-lime-accent/10 border border-lime-accent/30 font-mono text-[10px] text-lime-accent">
                {project.status}
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-ivory pt-1">
              {project.title}
            </h2>
            <p className="font-sans text-sm text-stone italic">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded border border-obsidian-border bg-obsidian-card text-stone hover:text-ivory hover:border-lime-accent transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8">
          
          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded border border-obsidian-border bg-obsidian-card/60">
              <span className="font-mono text-xs text-amber-accent uppercase tracking-wider block mb-2 font-semibold">
                [01] The Problem & Motivation
              </span>
              <p className="font-sans text-sm text-stone leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded border border-obsidian-border bg-obsidian-card/60">
              <span className="font-mono text-xs text-lime-accent uppercase tracking-wider block mb-2 font-semibold">
                [02] Engineering Solution
              </span>
              <p className="font-sans text-sm text-stone leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Workflow Step Sequence */}
          {project.workflowSteps && project.workflowSteps.length > 0 && (
            <div>
              <span className="font-mono text-xs text-stone-light uppercase tracking-wider block mb-3 font-semibold">
                [03] Execution Workflow & Node Graph
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                {project.workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded border border-obsidian-border bg-obsidian-card text-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-lime-accent font-semibold block mb-1">
                        STEP 0{idx + 1}
                      </span>
                      <h4 className="font-mono font-bold text-ivory text-xs mb-1.5">{step.name}</h4>
                    </div>
                    <p className="font-sans text-[11px] text-stone leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Decisions */}
          <div>
            <span className="font-mono text-xs text-stone-light uppercase tracking-wider block mb-3 font-semibold">
              [04] Architectural Decisions & Trade-Offs
            </span>
            <div className="space-y-3">
              {project.decisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded border border-obsidian-border bg-obsidian-card flex items-start gap-3"
                >
                  <Cpu className="w-4 h-4 text-lime-accent flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed">{dec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verifiable Metrics & Outcomes */}
          <div>
            <span className="font-mono text-xs text-stone-light uppercase tracking-wider block mb-3 font-semibold">
              [05] Verifiable Impact & Metrics
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded border border-obsidian-border bg-obsidian-card flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-lime-accent flex-shrink-0 mt-0.5" />
                  <span className="font-mono text-xs text-ivory-dim leading-relaxed">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack Badges */}
          <div>
            <span className="font-mono text-xs text-stone uppercase tracking-wider block mb-2 font-semibold">
              Verified Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-obsidian-card border border-obsidian-border font-mono text-xs text-ivory"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between pt-6 border-t border-obsidian-border gap-4">
            <div className="font-mono text-xs text-stone">
              <span>Role: </span>
              <span className="text-ivory font-medium">{project.role}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-obsidian-border bg-obsidian-card text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-lime-accent text-obsidian hover:bg-lime-dim font-mono text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Deployment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
