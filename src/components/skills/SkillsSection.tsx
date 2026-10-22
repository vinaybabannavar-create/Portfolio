"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Layout, GitMerge, Server, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const icons: Record<string, React.ReactNode> = {
    AI_ORCHESTRATION: <Cpu className="w-4 h-4 text-lime-accent" />,
    BACKEND_CORE: <Server className="w-4 h-4 text-amber-accent" />,
    FRONTEND_UI: <Layout className="w-4 h-4 text-ivory" />,
    DATA_PERSISTENCE: <Database className="w-4 h-4 text-lime-dim" />,
    SYSTEMS_DELIVERY: <GitMerge className="w-4 h-4 text-stone" />,
  };

  const displayedCategories = selectedCategory === "ALL"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.code === selectedCategory);

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-obsidian-border pb-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-2 font-semibold">
            <Terminal className="w-4 h-4" />
            <span>[CAPABILITY_REGISTRY // 2026]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Technical Capabilities
          </h2>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-3 py-1.5 rounded font-mono text-xs transition-colors ${
              selectedCategory === "ALL"
                ? "bg-lime-accent text-obsidian font-bold"
                : "bg-obsidian-surface text-stone hover:text-ivory border border-obsidian-border"
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.code}
              onClick={() => setSelectedCategory(cat.code)}
              className={`px-3 py-1.5 rounded font-mono text-xs transition-colors ${
                selectedCategory === cat.code
                  ? "bg-lime-accent text-obsidian font-bold"
                  : "bg-obsidian-surface text-stone hover:text-ivory border border-obsidian-border"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Engineering Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category) => (
          <div
            key={category.code}
            className="p-6 rounded-xl border border-obsidian-border bg-obsidian-surface/60 hover:border-obsidian-border/90 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  {icons[category.code]}
                  <h3 className="font-sans font-bold text-lg text-ivory">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-stone-dark uppercase">
                  {category.code}
                </span>
              </div>

              {/* Subtitle */}
              <p className="font-sans text-xs text-stone mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Tokens (Architectural tags without arbitrary %) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-2.5 py-1 rounded font-mono text-xs transition-all duration-200 flex items-center gap-1.5 ${
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
            <div className="pt-6 mt-6 border-t border-obsidian-border/60 flex items-center justify-between text-[11px] font-mono text-stone-dark">
              <span>Ground Truth Verified</span>
              <Check className="w-3.5 h-3.5 text-lime-accent" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
