"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  Database,
  Wrench,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { SKILLS } from "@/lib/data";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Layers,
  Database,
  Wrench,
  Sparkles,
};

/**
 * Skills section — grouped skill categories displayed as animated cards with emerald/cyan theme.
 */
export default function Skills() {
  return (
    <section id="skills" data-room="02" className="story-room room-skills section-py">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Skills"
          title="Tools & Technologies"
          subtitle="A curated stack built through real project delivery — not just tutorials."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, groupIdx) => {
            const Icon = ICON_MAP[group.icon] ?? Code2;
            const isLearning = group.category === "Currently Learning";

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: groupIdx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 group hover:shadow-xl ${
                  isLearning
                    ? "border-emerald-400/35 bg-gradient-to-br from-emerald-500/10 via-[#031c20] to-[#021214] shadow-emerald-500/5"
                    : "border-emerald-500/15 bg-[#031518]/90 hover:border-emerald-400/30 hover:shadow-emerald-500/10"
                }`}
              >
                {/* Active Learning badge */}
                {isLearning && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-300 bg-emerald-400/15 border border-emerald-400/30 px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                )}

                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isLearning
                        ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30"
                        : "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 border border-emerald-500/15"
                    } transition-all duration-300`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: groupIdx * 0.05 + skillIdx * 0.03,
                        duration: 0.25,
                      }}
                      className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                        isLearning
                          ? "bg-emerald-400/15 text-emerald-200 border border-emerald-400/25"
                          : "bg-slate-900/60 text-slate-300 border border-emerald-500/15 hover:text-white hover:border-emerald-400/40 hover:bg-emerald-950/30"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
