"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Layout, GitMerge, Server, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const icons: Record<string, React.ReactNode> = {
    AI_ORCHESTRATION: <Cpu className="w-5 h-5 text-lime-accent" />,
    BACKEND_CORE: <Server className="w-5 h-5 text-amber-accent" />,
    FRONTEND_UI: <Layout className="w-5 h-5 text-ivory" />,
    DATA_PERSISTENCE: <Database className="w-5 h-5 text-lime-dim" />,
    SYSTEMS_DELIVERY: <GitMerge className="w-5 h-5 text-stone" />,
  };

  const displayedCategories = selectedCategory === "ALL"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.code === selectedCategory);

  return (
    <section id="skills" className="py-32 sm:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-obsidian-border pb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-3 font-semibold">
            <Terminal className="w-4 h-4" />
            <span>[CAPABILITY_REGISTRY // 2026]</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-6xl font-black text-ivory tracking-tight">
            Technical Capabilities
          </h2>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-4 py-2 rounded font-mono text-xs transition-all duration-200 ${
              selectedCategory === "ALL"
                ? "bg-lime-accent text-obsidian font-bold shadow-md shadow-lime-accent/10"
                : "bg-obsidian-surface text-stone hover:text-ivory border border-obsidian-border"
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.code}
              onClick={() => setSelectedCategory(cat.code)}
              className={`px-4 py-2 rounded font-mono text-xs transition-all duration-200 ${
                selectedCategory === cat.code
                  ? "bg-lime-accent text-obsidian font-bold shadow-md shadow-lime-accent/10"
                  : "bg-obsidian-surface text-stone hover:text-ivory border border-obsidian-border"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Engineering Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCategories.map((category) => (
          <div
            key={category.code}
            className="p-8 rounded-2xl border border-obsidian-border bg-obsidian-surface/60 hover:border-obsidian-border/90 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-5">
                <div className="flex items-center gap-3">
                  {icons[category.code]}
                  <h3 className="font-sans font-bold text-xl text-ivory">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-stone-dark uppercase">
                  {category.code}
                </span>
              </div>

              {/* Subtitle */}
              <p className="font-sans text-sm text-stone mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Tokens */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-3 py-1.5 rounded font-mono text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                      skill.highlight
                        ? "bg-obsidian-card border border-lime-accent/40 text-ivory shadow-sm hover:border-lime-accent"
                        : "bg-obsidian-card border border-obsidian-border text-stone hover:text-ivory"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Footer Note */}
            <div className="pt-6 mt-8 border-t border-obsidian-border/60 flex items-center justify-between text-xs font-mono text-stone-dark">
              <span>Ground Truth Verified</span>
              <Check className="w-4 h-4 text-lime-accent" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
