"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
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
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Capabilities", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-obsidian/95 backdrop-blur-xl border-b border-obsidian-border py-3 shadow-2xl shadow-black/40"
            : "bg-obsidian/80 backdrop-blur-md py-5 border-b border-obsidian-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none focus:ring-1 focus:ring-lime-accent rounded"
          >
            <div className="w-9 h-9 rounded-md border border-obsidian-border bg-obsidian-surface flex items-center justify-center font-mono text-xs font-bold text-lime-accent group-hover:border-lime-accent transition-colors shadow-sm">
              VB
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-wider text-ivory group-hover:text-lime-accent transition-colors">
                VINAY BABANNAVAR
              </span>
              <span className="font-mono text-[10px] tracking-widest text-stone uppercase">
                SYSTEMS IN MOTION // &apos;27
              </span>
            </div>
          </Link>

          {/* Availability Pill - Desktop */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-obsidian-border bg-obsidian-surface/80 font-mono text-xs text-ivory-dim">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span>Open to AI &amp; Full-Stack Roles</span>
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
              className="flex items-center gap-1.5 px-3.5 py-2 rounded border border-obsidian-border hover:border-lime-accent bg-obsidian-surface text-ivory hover:text-lime-accent font-mono text-xs font-semibold transition-all duration-200"
              title="Download Authentic Verified Resume PDF"
            >
              <FileDown className="w-4 h-4 text-lime-accent" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim transition-colors shadow-md shadow-lime-accent/15"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded border border-obsidian-border text-ivory hover:text-lime-accent hover:border-lime-accent transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-obsidian/98 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-12 border-b border-obsidian-border">
          <div className="flex flex-col gap-6">
            <div className="font-mono text-xs text-stone uppercase tracking-widest border-b border-obsidian-border pb-4 flex items-center justify-between">
              <span>Navigation Matrix</span>
              <span className="text-lime-accent font-semibold">BLR // UTC +5:30</span>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-lg text-ivory hover:text-lime-accent transition-colors flex items-center justify-between group py-2"
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
              className="flex items-center justify-center gap-2 py-3.5 rounded border border-obsidian-border bg-obsidian-surface text-ivory font-mono text-xs font-semibold"
            >
              <FileDown className="w-4 h-4 text-lime-accent" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
