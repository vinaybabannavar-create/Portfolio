"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, FileDown, Send, MessageSquare, Phone, MapPin } from "lucide-react";
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
      alert("Please complete all required fields before dispatching.");
      return;
    }

    const mailtoUrl = `mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus("dispatched");
  };

  return (
    <section id="contact" className="py-32 sm:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intentional Architectural Enclosure */}
      <div className="border-2 border-obsidian-border rounded-3xl bg-obsidian-surface/90 p-8 sm:p-14 lg:p-20 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Radial Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-accent/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-accent/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Memorable Statement & Direct Channels */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-4 font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>[DIRECT_DISPATCH // INITIATE_CONTACT]</span>
              </div>

              <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight leading-[1.08] mb-6">
                Have a problem worth solving? <br />
                <span className="text-lime-accent">Let&apos;s build something intelligent.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-ivory-dim leading-relaxed">
                Currently open to software engineering roles, agentic AI pipelines, and full-stack systems engineering. Whether you want to discuss system architecture, potential opportunities, or new builds &mdash; let&apos;s connect.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl border border-obsidian-border bg-obsidian-card space-y-3 shadow-lg">
              <span className="font-mono text-xs text-stone uppercase tracking-wider block font-semibold">
                Direct Communication
              </span>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="font-mono text-base sm:text-lg text-ivory hover:text-lime-accent font-bold transition-colors"
                >
                  {DEVELOPER_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded border border-obsidian-border hover:border-lime-accent bg-obsidian-surface text-stone hover:text-ivory font-mono text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-lime-accent" />
                      <span className="text-lime-accent">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels, Phone & Resume */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded border border-obsidian-border bg-obsidian-card text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs sm:text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-lime-accent" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded border border-obsidian-border bg-obsidian-card text-ivory hover:border-lime-accent hover:text-lime-accent font-mono text-xs sm:text-sm font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={DEVELOPER_INFO.resumePdf}
                  download="Vinay_Babannavar_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-3 rounded bg-lime-accent text-obsidian font-mono text-xs sm:text-sm font-bold hover:bg-lime-dim transition-colors shadow-lg shadow-lime-accent/15"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-stone pt-2">
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-lime-accent" />
                  <span className="text-ivory-dim">{DEVELOPER_INFO.phone}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-dark" />
                  <span>Bengaluru, India (UTC +5:30)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border border-obsidian-border bg-obsidian-card/90 shadow-xl">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ivory font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span>Direct Transmission Form</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs text-stone block mb-2 uppercase tracking-wider font-semibold">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sharma (Engineering Lead)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-ivory placeholder-stone-dark font-sans text-base focus:outline-none focus:border-lime-accent transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-stone block mb-2 uppercase tracking-wider font-semibold">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-ivory placeholder-stone-dark font-sans text-base focus:outline-none focus:border-lime-accent transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-stone block mb-2 uppercase tracking-wider font-semibold">
                  Subject / Inquiring About
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-ivory font-sans text-base focus:outline-none focus:border-lime-accent transition-colors"
                >
                  <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                  <option value="Agentic AI Project / Contract">Agentic AI Project / Contract</option>
                  <option value="Research & Academic Collaboration">Research &amp; Academic Collaboration</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs text-stone block mb-2 uppercase tracking-wider font-semibold">
                  Message / Context *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your team, system challenge, or role specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-ivory placeholder-stone-dark font-sans text-base focus:outline-none focus:border-lime-accent transition-colors resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-lime-accent text-obsidian font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-lime-dim transition-colors flex items-center justify-center gap-2 shadow-lg shadow-lime-accent/15"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message Directly to Vinay</span>
              </button>

              {status === "dispatched" && (
                <div className="p-4 rounded-lg bg-lime-accent/10 border border-lime-accent/30 font-mono text-xs text-lime-accent text-center font-semibold">
                  Email client triggered with pre-filled parameters. I look forward to connecting!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
