"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { EXPERIENCE } from "@/lib/data";

/**
 * Experience section - timeline layout for work history.
 */
export default function Experience() {
  return (
    <section id="experience" data-room="04" className="story-room room-experience section-py">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          title="Work History"
          subtitle="Building production software that HR teams rely on every day."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-teal-500/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, idx) => (
              <motion.div
                key={`${job.company}-${idx}`}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#031518] border border-emerald-400/40 shadow-lg shadow-emerald-500/10">
                  <Briefcase size={16} className="text-emerald-400" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 19 }}
                  className="bg-[#031518]/90 border border-emerald-500/20 rounded-2xl p-6 sm:p-7 hover:border-emerald-400/40 transition-all duration-300 shadow-xl"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <p className="text-emerald-300 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="inline-flex items-center px-3 py-1 bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-medium rounded-full">
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={11} className="text-emerald-400/70" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
