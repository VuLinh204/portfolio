"use client";

import { WordReveal, Reveal } from "@/components/ScrollReveal";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

/**
 * Reusable scroll-animated section header used across all portfolio sections.
 * Uses word-by-word reveal for the title and fade-up for badge/subtitle.
 */
export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={`story-heading mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      {badge && (
        <Reveal direction="up" delay={0}>
          <span className="story-badge inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full">
            {badge}
          </span>
        </Reveal>
      )}

      <WordReveal
        text={title}
        delay={badge ? 0.05 : 0}
        className={`text-3xl md:text-4xl font-bold text-white mb-4 leading-tight ${isCenter ? "justify-center flex flex-wrap" : "flex flex-wrap"}`}
        wordClassName="text-white"
      />

      {subtitle && (
        <Reveal direction="up" delay={0.2}>
          <p className={`text-slate-400 max-w-xl text-base leading-relaxed ${isCenter ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
