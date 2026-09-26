"use client";

import { MapPin, Mail, Phone, Sparkles } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import SectionHeader from "@/components/SectionHeader";
import { PERSONAL } from "@/lib/data";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const CONTACT_INFO = [
  { icon: Mail, label: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  {
    icon: Phone,
    label: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: PERSONAL.location, href: null },
  {
    icon: GithubIcon,
    label: "github.com/VuLinh204",
    href: PERSONAL.github,
    external: true,
  },
];

const HIGHLIGHTS = [
  "2+ years of professional software development experience across different domains",
  "Delivered AI-powered tools for job description & interview generation",
  "Built LMS modules, Kanban boards, and payroll systems",
  "Optimised SQL Server stored procedures for complex data workflows",
  "Strong focus on clean, reusable UI components",
];

/**
 * About section - personal summary + contact details.
 */
export default function About() {
  return (
    <section id="about" data-room="01" className="story-room room-about section-py">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="A Developer Who Ships"
          subtitle="I build practical web apps that solve real business problems - from complex HR workflows to AI-assisted content tools."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* -- Left - Bio -- */}
          <Reveal direction="left" delay={0.1}>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                I&apos;m a Software Developer based in Ho Chi Minh City with over
                two years of hands-on experience building web applications
                across different domains, including enterprise HR systems at
                Vietinsoft. My work spans employee records, training modules,
                task management, and recruitment automation, alongside projects
                in other areas.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                What sets me apart is my practical experience integrating{" "}
                <span className="text-emerald-300 font-medium">
                  OpenAI and Gemini APIs
                </span>{" "}
                into real production tools - automating job descriptions and
                interview question generation for HR teams. I&apos;m not just
                learning AI; I&apos;ve shipped it.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Currently levelling up in React and Next.js, I&apos;m eager to
                bring my backend-to-frontend experience to a frontend, fullstack,
                or AI integration role.
              </p>
            </div>

            {/* AI Badge */}
            <div className="mt-8 p-4 bg-gradient-to-r from-emerald-600/10 to-transparent border border-emerald-500/15 rounded-xl flex items-start gap-3">
              <Sparkles size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  AI Integration Experience
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrated OpenAI &amp; Gemini APIs in production recruitment
                  tools, reducing content-creation time by over 80%. This
                  distinguishes me from typical jQuery/PHP developers.
                </p>
              </div>
            </div>
          </Reveal>

          {/* -- Right - Highlights + Contact -- */}
          <div className="flex flex-col gap-8">
            {/* Key Highlights */}
            <Reveal direction="right" delay={0.15}>
              <div className="poly-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-5 font-mono">
                  Key Highlights
                </h3>
                <StaggerReveal staggerDelay={0.07}>
                  {HIGHLIGHTS.map((item, i) => (
                    <StaggerItem key={i} direction="left">
                      <div className="flex items-start gap-3 text-sm text-slate-300 mb-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            </Reveal>

            {/* Contact Card */}
            <Reveal direction="right" delay={0.25}>
              <div className="poly-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-5 font-mono">
                  Get In Touch
                </h3>
                <ul className="space-y-3">
                  {CONTACT_INFO.map(({ icon: Icon, label, href, external }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-300 transition-colors group"
                        >
                          <Icon
                            size={15}
                            className="text-emerald-400/60 group-hover:text-emerald-300 transition-colors shrink-0"
                          />
                          {label}
                        </a>
                      ) : (
                        <span className="flex items-center gap-3 text-sm text-slate-500">
                          <Icon size={15} className="text-emerald-400/40 shrink-0" />
                          {label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
