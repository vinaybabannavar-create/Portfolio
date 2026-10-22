"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Play, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Sparkles, Layers, ShieldCheck } from "lucide-react";

export default function ArchitectureVisualizer() {
  const [activePipeline, setActivePipeline] = useState<"jenkins" | "rag" | "recruit">("jenkins");
  const [simStep, setSimStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const runSimulation = () => {
    setIsRunning(true);
    setSimStep(1);

    const timer1 = setTimeout(() => setSimStep(2), 1200);
    const timer2 = setTimeout(() => setSimStep(3), 2400);
    const timer3 = setTimeout(() => setSimStep(4), 3600);
    const timer4 = setTimeout(() => {
      setSimStep(5);
      setIsRunning(false);
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  const resetSimulation = () => {
    setSimStep(0);
    setIsRunning(false);
  };

  return (
    <section id="architecture" className="py-24 bg-obsidian-surface/60 border-y border-obsidian-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>Interactive System Telemetry</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-ivory tracking-tight">
              State Machine & Pipeline Architecture
            </h2>
          </div>
          <p className="font-sans text-sm text-stone max-w-md">
            Simulate the internal state transitions, log stream analysis, and autonomous self-correction loops powering Vinay's flagship agentic systems.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-obsidian-border pb-4">
          <button
            onClick={() => {
              setActivePipeline("jenkins");
              resetSimulation();
            }}
            className={`px-4 py-2 rounded font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
              activePipeline === "jenkins"
                ? "bg-lime-accent text-obsidian shadow-lg shadow-lime-accent/10"
                : "bg-obsidian-card text-stone hover:text-ivory border border-obsidian-border"
            }`}
          >
            <span>01 // JENKINS SELF-HEALING AGENT</span>
          </button>

          <button
            onClick={() => {
              setActivePipeline("rag");
              resetSimulation();
            }}
            className={`px-4 py-2 rounded font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
              activePipeline === "rag"
                ? "bg-lime-accent text-obsidian shadow-lg shadow-lime-accent/10"
                : "bg-obsidian-card text-stone hover:text-ivory border border-obsidian-border"
            }`}
          >
            <span>02 // NEURAL NEXUS (CORRECTIVE RAG)</span>
          </button>

          <button
            onClick={() => {
              setActivePipeline("recruit");
              resetSimulation();
            }}
            className={`px-4 py-2 rounded font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
              activePipeline === "recruit"
                ? "bg-lime-accent text-obsidian shadow-lg shadow-lime-accent/10"
                : "bg-obsidian-card text-stone hover:text-ivory border border-obsidian-border"
            }`}
          >
            <span>03 // RECRUITMIND AI (LANGGRAPH)</span>
          </button>
        </div>

        {/* Pipeline Visualizer Box */}
        <div className="border border-obsidian-border rounded-lg bg-obsidian-card p-6 shadow-2xl relative overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-obsidian-border gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-accent/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-lime-accent/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-stone">
                {activePipeline === "jenkins" && "PIPELINE_AGENT://jenkins-hook/daemon.py"}
                {activePipeline === "rag" && "LANGGRAPH_GRAPH://neural-nexus/5_node_crag.py"}
                {activePipeline === "recruit" && "LANGGRAPH_ORCHESTRATOR://recruitmind/matcher.py"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="px-4 py-2 rounded bg-lime-accent text-obsidian font-mono text-xs font-bold hover:bg-lime-dim disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isRunning ? "Executing Loop..." : "Run Pipeline Simulation"}</span>
              </button>

              <button
                onClick={resetSimulation}
                className="p-2 rounded border border-obsidian-border text-stone hover:text-ivory hover:border-ivory/30 transition-colors"
                title="Reset simulation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive DAG Nodes Graph */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {activePipeline === "jenkins" && [
              {
                idx: 1,
                name: "01. Log Ingest",
                type: "Webhook Event",
                detail: "Catches build failure #104 & streams 14,200 console lines into AST parser",
              },
              {
                idx: 2,
                name: "02. AST Tokenize",
                type: "Heuristic Filter",
                detail: "Extracts stack trace & environment: ModuleNotFoundError: 'psycopg2' & Docker perms",
              },
              {
                idx: 3,
                name: "03. LLM Reasoner",
                type: "Root-Cause Classifier",
                detail: "Classifies: Missing native build dependency (libpq-dev) in Alpine container layer",
              },
              {
                idx: 4,
                name: "04. Patch Generator",
                type: "Remediation Engine",
                detail: "Synthesizes Dockerfile diff adding libpq-dev & rebuilds cached image layer",
              },
              {
                idx: 5,
                name: "05. Re-dispatch",
                type: "Jenkins Trigger",
                detail: "Triggers retry build #105: PASS verified in 42 seconds with zero human delay",
              },
            ].map((node) => {
              const isCurrent = simStep === node.idx;
              const isCompleted = simStep > node.idx || simStep === 5;
              return (
                <div
                  key={node.idx}
                  className={`p-4 rounded border transition-all duration-300 relative ${
                    isCurrent
                      ? "border-lime-accent bg-lime-accent/10 shadow-lg shadow-lime-accent/10 scale-105"
                      : isCompleted
                      ? "border-lime-accent/40 bg-obsidian-surface/90"
                      : "border-obsidian-border bg-obsidian-surface/40 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-lime-accent uppercase tracking-wider">
                      {node.type}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-obsidian-border" />
                    )}
                  </div>
                  <h3 className="font-mono text-xs font-bold text-ivory mb-1">{node.name}</h3>
                  <p className="font-sans text-[11px] text-stone leading-relaxed">{node.detail}</p>
                </div>
              );
            })}

            {activePipeline === "rag" && [
              {
                idx: 1,
                name: "01. Vector Retrieve",
                type: "ChromaDB Query",
                detail: "384-dimensional dense cosine retrieval of top-5 chunks from indexed enterprise corpus",
              },
              {
                idx: 2,
                name: "02. Document Grader",
                type: "DeepSeek-R1 Eval",
                detail: "Evaluates context relevance. Grade score = 0.58 (below 0.70 threshold for query)",
              },
              {
                idx: 3,
                name: "03. Web Fallback",
                type: "Self-Correction Loop",
                detail: "Triggers query rewrite & fetches live ground truth via Tavily search API",
              },
              {
                idx: 4,
                name: "04. Synthesize Answer",
                type: "Grounded Generation",
                detail: "Generates factual synthesis strictly citing retrieved and verified web context",
              },
              {
                idx: 5,
                name: "05. Hallucination Check",
                type: "Assertion Gate",
                detail: "Validates all assertions against citations. Passes verification with 0 hallucinations",
              },
            ].map((node) => {
              const isCurrent = simStep === node.idx;
              const isCompleted = simStep > node.idx || simStep === 5;
              return (
                <div
                  key={node.idx}
                  className={`p-4 rounded border transition-all duration-300 relative ${
                    isCurrent
                      ? "border-lime-accent bg-lime-accent/10 shadow-lg shadow-lime-accent/10 scale-105"
                      : isCompleted
                      ? "border-lime-accent/40 bg-obsidian-surface/90"
                      : "border-obsidian-border bg-obsidian-surface/40 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-lime-accent uppercase tracking-wider">
                      {node.type}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-obsidian-border" />
                    )}
                  </div>
                  <h3 className="font-mono text-xs font-bold text-ivory mb-1">{node.name}</h3>
                  <p className="font-sans text-[11px] text-stone leading-relaxed">{node.detail}</p>
                </div>
              );
            })}

            {activePipeline === "recruit" && [
              {
                idx: 1,
                name: "01. Ingest Job Spec",
                type: "Unstructured Parser",
                detail: "Parses 'Senior Full-Stack AI Engineer', isolating 8 technical constraints & seniority level",
              },
              {
                idx: 2,
                name: "02. Dense Embedding",
                type: "Sentence Transformer",
                detail: "Encodes job spec into 384-dimensional dense semantic vector space",
              },
              {
                idx: 3,
                name: "03. ChromaDB Query",
                type: "Vector KNN Search",
                detail: "Semantic similarity query matches 300+ pre-indexed candidate vectors with sub-10ms latency",
              },
              {
                idx: 4,
                name: "04. Multi-Signal Score",
                type: "Weighted Ranker",
                detail: "Scores candidates: 40% core skill match + 30% project depth + 30% stack recency",
              },
              {
                idx: 5,
                name: "05. Recruiter Summary",
                type: "Groq Llama-3.3-70B",
                detail: "Synthesizes data-grounded shortlist with explainable trade-offs and zero PII leaks",
              },
            ].map((node) => {
              const isCurrent = simStep === node.idx;
              const isCompleted = simStep > node.idx || simStep === 5;
              return (
                <div
                  key={node.idx}
                  className={`p-4 rounded border transition-all duration-300 relative ${
                    isCurrent
                      ? "border-lime-accent bg-lime-accent/10 shadow-lg shadow-lime-accent/10 scale-105"
                      : isCompleted
                      ? "border-lime-accent/40 bg-obsidian-surface/90"
                      : "border-obsidian-border bg-obsidian-surface/40 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-lime-accent uppercase tracking-wider">
                      {node.type}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-obsidian-border" />
                    )}
                  </div>
                  <h3 className="font-mono text-xs font-bold text-ivory mb-1">{node.name}</h3>
                  <p className="font-sans text-[11px] text-stone leading-relaxed">{node.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Real-time Diagnostics Log Stream */}
          <div className="mt-4 p-4 rounded bg-obsidian border border-obsidian-border font-mono text-xs scanline relative">
            <div className="flex items-center justify-between text-stone-dark pb-2 mb-2 border-b border-obsidian-border">
              <span className="text-[11px] text-lime-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" />
                EXECUTION_TELEMETRY // LOG_STREAM
              </span>
              <span className="text-[10px]">TIME: {simStep === 0 ? "IDLE" : `${simStep * 1.2}s`}</span>
            </div>

            <div className="space-y-1 text-stone text-[11px] h-28 overflow-y-auto">
              {activePipeline === "jenkins" && (
                <>
                  <p className="text-ivory-dim">&gt; Initializing Jenkins Webhook Listener on port 8088...</p>
                  {simStep >= 1 && <p className="text-amber-accent">&gt; [ALERT] Build #104 FAILED: Exit code 137 in Docker build step.</p>}
                  {simStep >= 2 && <p className="text-ivory-dim">&gt; Stream parsed: 14,200 lines scanned. Error isolated: psycopg2 compilation error.</p>}
                  {simStep >= 3 && <p className="text-lime-accent">&gt; Root-cause classifier: Missing native C headers (libpq-dev). Confidence: 0.98.</p>}
                  {simStep >= 4 && <p className="text-ivory-dim">&gt; Applying automated patch to Dockerfile: Added apk add --no-cache libpq-dev.</p>}
                  {simStep >= 5 && <p className="text-lime-accent font-semibold">&gt; [RESOLVED] Build #105 retry disptached. BUILD SUCCESS in 42s!</p>}
                </>
              )}

              {activePipeline === "rag" && (
                <>
                  <p className="text-ivory-dim">&gt; Initializing LangGraph stateful graph with memory checkpointer...</p>
                  {simStep >= 1 && <p className="text-ivory-dim">&gt; Query received: Ingesting into dense 384d embedding space...</p>}
                  {simStep >= 2 && <p className="text-amber-accent">&gt; DeepSeek-R1 document grader: Context relevance score 0.58 &lt; 0.70 threshold.</p>}
                  {simStep >= 3 && <p className="text-lime-accent">&gt; Self-corrective fallback triggered: Query rewritten, querying Tavily search API...</p>}
                  {simStep >= 4 && <p className="text-ivory-dim">&gt; Grounded generation initiated strictly utilizing verified search citations.</p>}
                  {simStep >= 5 && <p className="text-lime-accent font-semibold">&gt; [VERIFIED] Hallucination check passed: 100% assertions grounded. Output emitted.</p>}
                </>
              )}

              {activePipeline === "recruit" && (
                <>
                  <p className="text-ivory-dim">&gt; Initializing RecruitMind LangGraph pipeline with ChromaDB index...</p>
                  {simStep >= 1 && <p className="text-ivory-dim">&gt; Ingested JD: Parsing 8 core competencies and stack prerequisites...</p>}
                  {simStep >= 2 && <p className="text-ivory-dim">&gt; Dense representation generated via all-MiniLM-L6-v2 transformer...</p>}
                  {simStep >= 3 && <p className="text-lime-accent">&gt; Vector KNN query executed over 300+ candidate vectors (latency: 8.4ms)...</p>}
                  {simStep >= 4 && <p className="text-ivory-dim">&gt; Multi-signal composite computed: Domain fit, project complexity, recency.</p>}
                  {simStep >= 5 && <p className="text-lime-accent font-semibold">&gt; [COMPLETED] Groq Llama-3.3-70B generated executive candidate summary cards.</p>}
                </>
              )}

              {simStep === 0 && (
                <p className="text-stone-dark italic">&gt; Click 'Run Pipeline Simulation' above to execute live trace...</p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
