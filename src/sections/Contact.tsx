"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Send, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import SectionHeader from "@/components/SectionHeader";
import { PERSONAL } from "@/lib/data";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    description: "Best way to reach me",
    cta: "Send Email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
    description: "Available Mon–Fri",
    cta: "Call Now",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/VuLinh204",
    href: PERSONAL.github,
    description: "See my code",
    cta: "View Profile",
    external: true,
  },
];

/**
 * Contact section with method cards and modern CTA banner.
 */
export default function Contact() {
  return (
    <section id="contact" data-room="06" className="story-room room-contact section-py">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Let's Work Together"
          subtitle="I'm actively looking for frontend, fullstack, or AI integration roles. Don't hesitate to reach out."
        />

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {CONTACT_METHODS.map(
            ({ icon: Icon, label, value, href, description, cta, external }, i) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -7, scale: 1.02 }}
                className="group flex flex-col p-6 bg-[#031518]/90 border border-emerald-500/20 rounded-2xl hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-950/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-emerald-400/15 border border-emerald-400/25 rounded-xl group-hover:bg-emerald-400/25 transition-colors">
                    <Icon size={18} className="text-emerald-400" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <p className="text-xs font-mono text-slate-500 mb-0.5">{description}</p>
                <p className="text-base font-bold text-white mb-1">{label}</p>
                <p className="text-xs font-mono text-emerald-300/80 break-all">{value}</p>
                <span className="mt-5 text-xs font-mono font-medium text-emerald-400 group-hover:underline flex items-center gap-1">
                  {cta} →
                </span>
              </motion.a>
            )
          )}
        </div>

        {/* Big CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#032025] via-[#021316] to-[#010b0d] p-8 sm:p-12 text-center shadow-2xl"
        >
          {/* Background blur orb */}
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={14} className="text-emerald-400" />
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">{PERSONAL.location}</p>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Exceptional?
              </span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Whether it&apos;s fullstack web applications, HR systems, or
              AI-assisted product tools — I&apos;m ready to contribute immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.55)]"
              >
                <Mail size={16} />
                {PERSONAL.email}
              </a>
              <a
                href={PERSONAL.cvUrl}
                download="VuNgocKhanhLinh_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/80 hover:bg-emerald-950/40 text-emerald-300 font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
