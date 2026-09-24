"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  User,
  Calendar,
  Code2,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PROJECTS } from "@/lib/data";

/**
 * Placeholder screenshot component shown when no real screenshot is available.
 */
function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-[#02181c] to-[#011113] border border-emerald-500/20 flex flex-col items-center justify-center gap-3 text-slate-500 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.06),transparent_70%)] pointer-events-none" />
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
        <Code2 size={26} />
      </div>
      <div className="text-center z-10 px-4">
        <p className="text-sm font-semibold text-slate-200">
          {title}
        </p>
        <p className="text-xs text-slate-500 mt-1 font-mono">Production Application Interface</p>
      </div>
    </div>
  );
}

/**
 * Projects section — case-study cards that expand to reveal full details.
 */
export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="projects" data-room="03" className="story-room room-projects section-py">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          subtitle="Real projects shipped in production — each presented as a case study."
        />

        <div className="space-y-5">
          {PROJECTS.map((project, idx) => {
            const isOpen = expanded === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-400/40 bg-[#03181c] shadow-2xl shadow-emerald-950/50"
                    : "border-emerald-500/15 bg-[#031518]/90 hover:border-emerald-400/30 hover:bg-[#031a1e]"
                }`}
              >
                {/* ── Card Header (always visible) ── */}
                <button
                  onClick={() => toggle(project.id)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`project-body-${project.id}`}
                >
                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      {/* AI highlight badge */}
                      {project.highlight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 rounded-full">
                          <Sparkles size={11} />
                          {project.highlightLabel}
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Calendar size={12} className="text-slate-600" />
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                      {project.role}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-900/80 text-emerald-300/80 border border-emerald-500/15 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono bg-slate-900/80 text-slate-400 border border-slate-800 rounded-md">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Expand Arrow */}
                  <div className={`p-2 rounded-xl border border-emerald-500/20 bg-slate-900/50 text-slate-400 group-hover:text-emerald-300 group-hover:border-emerald-400/40 transition-all shrink-0 ${isOpen ? "bg-emerald-500/20 text-emerald-300" : ""}`}>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* ── Expanded Body ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`project-body-${project.id}`}
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2 sm:px-8 border-t border-emerald-500/15">
                        {/* Screenshot Placeholder */}
                        <div className="mt-4 mb-8">
                          <ScreenshotPlaceholder title={project.title} />
                        </div>

                        {/* Case Study Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                          <CaseStudyBlock
                            icon={Target}
                            label="Problem"
                            text={project.problem}
                          />
                          <CaseStudyBlock
                            icon={User}
                            label="My Role"
                            text={project.contribution}
                          />
                          <CaseStudyBlock
                            icon={TrendingUp}
                            label="Outcome"
                            text={project.outcome}
                          />
                        </div>

                        {/* Key Deliverables */}
                        <div className="p-5 rounded-xl bg-slate-900/40 border border-emerald-500/15 mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Lightbulb size={15} className="text-emerald-400" />
                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300">
                              Key Deliverables
                            </span>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.bullets.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* All Tech */}
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-xs font-mono bg-emerald-950/40 text-emerald-200 border border-emerald-500/20 rounded-lg"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Small labelled case-study block */
function CaseStudyBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: React.FC<{ size?: number; className?: string }>;
  label: string;
  text: string;
}) {
  return (
    <div className="bg-[#021316]/80 rounded-xl p-5 border border-emerald-500/15">
      <div className="flex items-center gap-2 mb-2.5">
        <Icon size={14} className="text-emerald-400" />
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300/80">
          {label}
        </span>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
    </div>
  );
}
