"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCE, CERTIFICATIONS, DEVELOPER_INFO } from "@/data/portfolio-data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-32 sm:py-40 bg-obsidian-surface/40 border-y border-obsidian-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>[CHRONOLOGY &amp; CREDENTIALS]</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight">
              Experience &amp; Education
            </h2>
          </div>
          <p className="font-sans text-base text-stone max-w-md">
            Verified professional milestones, academic rigor at T. John Institute of Technology (CGPA 8.7/10), and industry certifications.
          </p>
        </div>

        {/* Two-Column Grid: Timeline on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime-accent font-bold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Professional &amp; Academic Timeline</span>
            </h3>

            <div className="relative pl-8 sm:pl-10 border-l-2 border-obsidian-border space-y-12">
              
              {/* 1. Degree at T. John IT */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[49px] top-2 w-4 h-4 rounded-full bg-obsidian border-2 border-lime-accent shadow-sm shadow-lime-accent/50" />

                <div className="p-8 rounded-2xl border border-obsidian-border bg-obsidian-card/90 transition-all duration-200 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-sm text-lime-accent font-bold">
                      {DEVELOPER_INFO.education.period}
                    </span>
                    <span className="px-3 py-1 rounded font-mono text-xs bg-obsidian border border-lime-accent/40 text-lime-accent font-semibold">
                      CGPA: {DEVELOPER_INFO.education.cgpa}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-2xl text-ivory mb-1">
                      {DEVELOPER_INFO.education.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-sm font-mono text-stone">
                      <span className="text-ivory-dim font-medium">{DEVELOPER_INFO.education.institution}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-dark" />
                        {DEVELOPER_INFO.education.location}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-base text-stone leading-relaxed">
                    Final-year Computer Science Engineering student specializing in full-stack architecture, agentic AI pipelines with LangGraph, distributed systems, and real-world deployment.
                  </p>
                </div>
              </div>

              {/* 2. Unified Mentor Web Development Internship */}
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] sm:-left-[49px] top-2 w-4 h-4 rounded-full bg-obsidian border-2 border-amber-accent shadow-sm shadow-amber-accent/50" />

                  <div className="p-8 rounded-2xl border border-obsidian-border bg-obsidian-card/90 transition-all duration-200 shadow-xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-sm text-amber-accent font-bold">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 rounded font-mono text-xs bg-obsidian border border-obsidian-border text-ivory">
                        {exp.type}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-sans font-bold text-2xl text-ivory mb-1">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-sm font-mono text-stone">
                        <span className="text-ivory-dim font-medium">{exp.organization}</span>
                        <span>&bull;</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="font-sans text-base text-stone leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {exp.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-sm font-sans text-ivory-dim leading-relaxed">
                          <span className="text-lime-accent font-bold mt-0.5">&bull;</span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-obsidian-border/60">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded font-mono text-xs bg-obsidian border border-obsidian-border text-stone-light"
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
                <div className="absolute -left-[41px] sm:-left-[49px] top-2 w-4 h-4 rounded-full bg-obsidian border-2 border-stone" />

                <div className="p-8 rounded-2xl border border-obsidian-border bg-obsidian-card/90 transition-all duration-200 shadow-xl space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-sm text-stone-light font-bold">
                      {DEVELOPER_INFO.preUniversity.period}
                    </span>
                    <span className="px-3 py-1 rounded font-mono text-xs bg-obsidian border border-obsidian-border text-ivory">
                      Score: {DEVELOPER_INFO.preUniversity.score}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-xl text-ivory mb-1">
                    {DEVELOPER_INFO.preUniversity.degree}
                  </h4>
                  <div className="text-sm font-mono text-stone">
                    {DEVELOPER_INFO.preUniversity.institution} &bull; {DEVELOPER_INFO.preUniversity.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime-accent font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-obsidian-border bg-obsidian-card hover:border-lime-accent/40 transition-colors flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-stone uppercase tracking-wider block font-semibold">
                      {cert.issuer}
                    </span>
                    <h5 className="font-sans font-bold text-base text-ivory">
                      {cert.name}
                    </h5>
                    <span className="font-mono text-xs text-stone-dark">
                      Discipline: {cert.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-lime-accent bg-lime-accent/10 px-2.5 py-1 rounded border border-lime-accent/30 flex-shrink-0 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Accuracy Notice */}
            <div className="p-5 rounded-xl border border-obsidian-border bg-obsidian text-xs font-mono text-stone leading-relaxed">
              <span className="text-lime-accent font-bold block mb-1">AUTHORITATIVE ACCURACY:</span>
              <span>All qualifications, internship timelines, and certifications are directly cross-referenced against Vinay Babannavar&apos;s authoritative curriculum vitae.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
