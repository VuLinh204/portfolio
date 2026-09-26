"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { EDUCATION } from "@/lib/data";

/**
 * Education section - clean card layout for academic credentials.
 */
export default function Education() {
  return (
    <section id="education" data-room="05" className="story-room room-education section-py">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Education"
          title="Academic Background"
        />

        <div className="space-y-5">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={`${edu.school}-${idx}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -7, rotateX: 2, rotateY: idx % 2 ? -2 : 2, scale: 1.01 }}
              style={{ transformPerspective: 1000 }}
              className="bg-[#16162b] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5 hover:border-violet-500/15 transition-colors gradient-border"
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <GraduationCap size={22} className="text-violet-400" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white">{edu.school}</h3>
                <p className="text-sm text-slate-400 mt-0.5">{edu.degree}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-xs text-slate-500">{edu.period}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-600">
                    <MapPin size={10} />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Period badge */}
              <div className="shrink-0">
                <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium rounded-full">
                  Graduated Feb 2025
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
