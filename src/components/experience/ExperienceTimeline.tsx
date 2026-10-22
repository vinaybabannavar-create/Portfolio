"use client";

import React from "react";
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { WORK_EXPERIENCE, CERTIFICATIONS, DEVELOPER_INFO } from "@/data/portfolio-data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-obsidian-surface/40 border-y border-obsidian-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-2 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>[CHRONOLOGY &amp; CREDENTIALS]</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
              Experience &amp; Education
            </h2>
          </div>
          <p className="font-sans text-sm text-stone max-w-md">
            Verified professional milestones, academic rigor at T. John Institute of Technology (CGPA 8.7/10), and industry credentials.
          </p>
        </div>

        {/* Two-Column Grid: Timeline on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience & Education Timeline */}
          <div className="lg:col-span-7 space-y-10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime-accent font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Professional &amp; Academic Timeline</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-obsidian-border space-y-12">
              
              {/* 1. Degree at T. John IT */}
              <div className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian border-2 border-lime-accent" />

                <div className="p-6 rounded-lg border border-obsidian-border bg-obsidian-card/80 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-lime-accent font-bold">
                      {DEVELOPER_INFO.education.period}
                    </span>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian border border-obsidian-border text-ivory">
                      CGPA: {DEVELOPER_INFO.education.cgpa}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-lg text-ivory mb-1">
                    {DEVELOPER_INFO.education.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone mb-4">
                    <span className="text-ivory-dim font-medium">{DEVELOPER_INFO.education.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-dark" />
                      {DEVELOPER_INFO.education.location}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-stone leading-relaxed">
                    Final-year Computer Science Engineering student specializing in AI systems, agentic architectures, distributed data stores, and full-stack software delivery.
                  </p>
                </div>
              </div>

              {/* 2. Unified Mentor Web Development Internship */}
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian border-2 border-amber-accent" />

                  <div className="p-6 rounded-lg border border-obsidian-border bg-obsidian-card/80 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-amber-accent font-bold">
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian border border-obsidian-border text-ivory">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="font-sans font-bold text-lg text-ivory mb-1">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-mono text-stone mb-4">
                      <span className="text-ivory-dim font-medium">{exp.organization}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="font-sans text-xs text-stone leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    <div className="space-y-2 mb-4">
                      {exp.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs font-sans text-ivory-dim">
                          <span className="text-lime-accent mt-0.5">•</span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-obsidian-border/60">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian border border-obsidian-border text-stone"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* 3. Govindram Seksaria Science College */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian border-2 border-stone" />

                <div className="p-6 rounded-lg border border-obsidian-border bg-obsidian-card/80 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-stone-light font-bold">
                      {DEVELOPER_INFO.preUniversity.period}
                    </span>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-obsidian border border-obsidian-border text-ivory">
                      Score: {DEVELOPER_INFO.preUniversity.score}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base text-ivory mb-1">
                    {DEVELOPER_INFO.preUniversity.degree}
                  </h4>
                  <div className="text-xs font-mono text-stone">
                    {DEVELOPER_INFO.preUniversity.institution} • {DEVELOPER_INFO.preUniversity.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Verified Industry Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime-accent font-semibold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-obsidian-border bg-obsidian-card hover:border-lime-accent/40 transition-colors flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-stone uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h5 className="font-sans font-semibold text-sm text-ivory">
                      {cert.name}
                    </h5>
                    <span className="font-mono text-[10px] text-stone-dark">
                      Field: {cert.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-lime-accent bg-lime-accent/5 px-2 py-1 rounded border border-lime-accent/20 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Authenticity */}
            <div className="p-4 rounded border border-obsidian-border bg-obsidian text-xs font-mono text-stone-dark">
              <span className="text-lime-accent block mb-1">ACCURACY GUARANTEE:</span>
              <span>All certifications, academic degrees, and internship durations are cross-referenced directly with Vinay's verified curriculum vitae and institutional credentials.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
