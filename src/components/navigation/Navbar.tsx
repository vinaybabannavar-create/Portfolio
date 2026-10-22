"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileDown, Terminal } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Selected Work", href: "#work" },
    { label: "Architecture", href: "#architecture" },
    { label: "Research", href: "#research" },
    { label: "Capabilities", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-obsidian/85 backdrop-blur-md border-b border-obsidian-border py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus:ring-1 focus:ring-lime-accent rounded"
          >
            <div className="w-8 h-8 rounded border border-obsidian-border bg-obsidian-surface flex items-center justify-center font-mono text-xs font-bold text-lime-accent group-hover:border-lime-accent transition-colors">
              VB
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-wider text-ivory group-hover:text-lime-accent transition-colors">
                VINAY BABANNAVAR
              </span>
              <span className="font-mono text-[9px] tracking-widest text-stone uppercase">
                SYSTEMS IN MOTION // '27
              </span>
            </div>
          </Link>

          {/* Availability Pill - Desktop */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded border border-obsidian-border bg-obsidian-surface/60 font-mono text-[11px] text-ivory-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" />
            <span>Open to AI & Full-Stack Roles</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs text-stone hover:text-ivory transition-colors uppercase tracking-wider focus:outline-none focus:text-lime-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={DEVELOPER_INFO.resumePdf}
              download="Vinay_Babannavar_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-obsidian-border hover:border-lime-accent bg-obsidian-surface text-ivory hover:text-lime-accent font-mono text-xs transition-all duration-200"
              title="Download Authentic Verified Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-lime-accent" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-lime-accent text-obsidian font-mono text-xs font-semibold hover:bg-lime-dim transition-colors"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-obsidian-border text-ivory hover:text-lime-accent hover:border-lime-accent transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-obsidian/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-obsidian-border">
          <div className="flex flex-col gap-6">
            <div className="font-mono text-xs text-stone uppercase tracking-widest border-b border-obsidian-border pb-3 flex items-center justify-between">
              <span>Navigation Matrix</span>
              <span className="text-lime-accent">BLR // UTC +5:30</span>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-lg text-ivory hover:text-lime-accent transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-stone-dark group-hover:text-lime-accent">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-dark group-hover:text-lime-accent transition-colors" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-obsidian-border">
            <a
              href={DEVELOPER_INFO.resumePdf}
              download="Vinay_Babannavar_Resume.pdf"
              className="flex items-center justify-center gap-2 py-3 rounded border border-obsidian-border bg-obsidian-surface text-ivory font-mono text-xs"
            >
              <FileDown className="w-4 h-4 text-lime-accent" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded bg-lime-accent text-obsidian font-mono text-xs font-semibold"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
