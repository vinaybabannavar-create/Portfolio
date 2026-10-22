"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, FileDown, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "Engineering Inquiry" });
  const [status, setStatus] = useState<"idle" | "ready" | "dispatched">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please complete all fields before dispatching.");
      return;
    }

    // Direct genuine client-side email dispatch via encoded mailto
    const mailtoUrl = `mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus("dispatched");
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="border border-obsidian-border rounded-2xl bg-obsidian-surface/60 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Column: Memorable Closing Headline & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>[DIRECT_DISPATCH // INITIATE_CONTACT]</span>
              </div>
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-ivory tracking-tight mb-4">
                Have a problem worth solving? <br />
                <span className="text-lime-accent">Let's build something intelligent.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-stone leading-relaxed">
                Currently available for full-stack software engineering roles, agentic AI pipelines, and technical systems design. Let's discuss architecture, challenges, or potential collaborations.
              </p>
            </div>

            {/* Direct Email Action Card */}
            <div className="p-4 sm:p-5 rounded-xl border border-obsidian-border bg-obsidian-card space-y-3">
              <span className="font-mono text-xs text-stone uppercase tracking-wider block">
                Primary Communication Channel
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="font-mono text-sm sm:text-base text-ivory hover:text-lime-accent font-semibold transition-colors"
                >
                  {DEVELOPER_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded border border-obsidian-border hover:border-lime-accent bg-obsidian-surface text-stone hover:text-ivory font-mono text-xs flex items-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime-accent" />
                      <span className="text-lime-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels & Resume */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded border border-obsidian-border bg-obsidian-card text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded border border-obsidian-border bg-obsidian-card text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Network</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={DEVELOPER_INFO.resumePdf}
                download="Vinay_Babannavar_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="font-mono text-xs text-stone-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span>Location: Bengaluru, India (UTC +5:30) • Fast response window</span>
            </div>
          </div>

          {/* Right Column: Genuine Inquiry Dispatch Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl border border-obsidian-border bg-obsidian-card/80">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ivory font-semibold mb-6 flex items-center gap-2">
              <span>Direct Transmission Form</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-stone block mb-1.5 uppercase tracking-wider">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sharma (Acme Engineering)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded bg-obsidian border border-obsidian-border text-ivory placeholder-stone-dark font-sans text-sm focus:outline-none focus:border-lime-accent transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-stone block mb-1.5 uppercase tracking-wider">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded bg-obsidian border border-obsidian-border text-ivory placeholder-stone-dark font-sans text-sm focus:outline-none focus:border-lime-accent transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-stone block mb-1.5 uppercase tracking-wider">
                  Subject / Inquiring About
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded bg-obsidian border border-obsidian-border text-ivory font-sans text-sm focus:outline-none focus:border-lime-accent transition-colors"
                >
                  <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                  <option value="Agentic AI Project / Contract">Agentic AI Project / Contract</option>
                  <option value="Research & Academic Collaboration">Research &amp; Academic Collaboration</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs text-stone block mb-1.5 uppercase tracking-wider">
                  Message / Context *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, role, or technical challenge..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded bg-obsidian border border-obsidian-border text-ivory placeholder-stone-dark font-sans text-sm focus:outline-none focus:border-lime-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold uppercase tracking-wider hover:bg-lime-dim transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Inquiry to Vinay</span>
              </button>

              {status === "dispatched" && (
                <div className="p-3 rounded bg-lime-accent/10 border border-lime-accent/30 font-mono text-xs text-lime-accent text-center">
                  Email client opened with pre-filled message! Looking forward to connecting.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
