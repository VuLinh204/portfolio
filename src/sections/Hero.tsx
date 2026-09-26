"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  Briefcase,
  Terminal,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Play,
  Copy,
  Check,
} from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { PERSONAL } from "@/lib/data";

/* --- Typewriter / Cycling Role Hook --- */
const ROLES = [
  "Software Developer",
  "Fullstack Web Builder",
  "AI & API Integrator",
  "Workflow Systems Engineer",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "skills" | "terminal">("profile");
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycling roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  /* -- Scroll-driven exit parallax -- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const rawY = useTransform(scrollYProgress, [0, 0.7], [0, -40]);
  const scale = useSpring(rawScale, { stiffness: 90, damping: 25 });
  const opacity = useSpring(rawOpacity, { stiffness: 90, damping: 25 });
  const y = useSpring(rawY, { stiffness: 90, damping: 25 });

  /* -- Mouse tilt for interactive Terminal Card -- */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotY = useTransform(mouseX, [0, 1], [-6, 6]);
  const springRotX = useSpring(rotX, { stiffness: 75, damping: 18 });
  const springRotY = useSpring(rotY, { stiffness: 75, damping: 18 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  const copyCode = () => {
    navigator.clipboard.writeText(`git clone https://github.com/VuLinh204/portfolio.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* -- Stagger animations -- */
  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const line: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 lg:py-0"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #032024 0%, #020f12 55%, #010809 100%)",
      }}
    >
      {/* -- Background Grid & Aurora Ambient -- */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(52, 211, 153, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 211, 153, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"
      />

      {/* -- Main Content Container -- */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
      >
        {/* --- LEFT COLUMN: Typography & Actions (7 cols) --- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <motion.div variants={line} className="hero-badge mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-emerald-300 font-medium">Available for Opportunities</span>
            <span className="mx-1 text-slate-600">·</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin size={11} className="text-emerald-400" /> HCMC, Vietnam
            </span>
          </motion.div>

          {/* Intro line */}
          <motion.p
            variants={line}
            className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400/90 mb-2 flex items-center gap-2"
          >
            <Code2 size={15} /> Hello World, I am
          </motion.p>

          {/* Main Title with Split Name styling */}
          <motion.div variants={line} className="mb-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
              Vu Ngoc{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent inline-block">
                Khanh Linh
              </span>
            </h1>
          </motion.div>

          {/* Animated Dynamic Role Switcher */}
          <motion.div variants={line} className="h-8 mb-5 flex items-center gap-2 font-mono">
            <span className="text-slate-400 text-sm sm:text-base">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-300 text-sm sm:text-lg font-semibold tracking-wide"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Tagline / Value Proposition */}
          <motion.p
            variants={line}
            className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl mb-7"
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* Metrics / Key highlights row */}
          <motion.div
            variants={line}
            className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/15 backdrop-blur-md"
          >
            <div className="flex flex-col px-2 border-r border-slate-800">
              <span className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-1">
                2+ <span className="text-emerald-400 text-xs font-normal">YR</span>
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Experience</span>
            </div>
            <div className="flex flex-col px-2 border-r border-slate-800">
              <span className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-1">
                4+ <span className="text-cyan-400 text-xs font-normal">APPS</span>
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Projects Built</span>
            </div>
            <div className="flex flex-col px-2">
              <span className="text-lg sm:text-xl font-bold text-emerald-400 font-mono flex items-center gap-1">
                AI <span className="text-emerald-300 text-xs font-normal">Ready</span>
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">OpenAI & Gemini</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={line} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.55)] transition-all duration-300 group"
            >
              View Projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={PERSONAL.cvUrl}
              download="VuNgocKhanhLinh_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-300 bg-slate-900/80 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300"
            >
              <Download size={14} />
              Download CV
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-mono text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-all duration-300"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: Interactive 3D Developer Terminal (5 cols) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springRotX,
            rotateY: springRotY,
            transformStyle: "preserve-3d",
          }}
          className="lg:col-span-5 relative w-full perspective-1000"
        >
          {/* Subtle Ambient Back Glow */}
          <div
            aria-hidden
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"
          />

          {/* Terminal Window Box */}
          <div className="relative rounded-2xl bg-[#031317]/95 border border-emerald-500/25 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-emerald-500/15 bg-[#020b0d]/90">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal size={12} className="text-emerald-400" /> linh-dev-env
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeTab === "profile"
                      ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  profile.ts
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeTab === "skills"
                      ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  stack.json
                </button>
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeTab === "terminal"
                      ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  agent.sh
                </button>
              </div>
            </div>

            {/* Terminal Body Content */}
            <div className="p-5 font-mono text-xs leading-relaxed min-h-[330px] flex flex-col justify-between">
              {activeTab === "profile" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1.5 text-slate-300"
                >
                  <p className="text-slate-500">// Personal developer contract</p>
                  <p>
                    <span className="text-cyan-400">const</span>{" "}
                    <span className="text-emerald-400">developer</span>:{" "}
                    <span className="text-amber-300">DeveloperProfile</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-200">&quot;Vu Ngoc Khanh Linh&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-200">&quot;Software Developer&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">specialties:</span> [
                  </p>
                  <p className="pl-8 text-teal-300">
                    &quot;Fullstack Web Apps&quot;, &quot;HR Tech &amp; LMS&quot;,
                  </p>
                  <p className="pl-8 text-teal-300">
                    &quot;OpenAI &amp; Gemini Integration&quot;,
                  </p>
                  <p className="pl-8 text-teal-300">&quot;SQL Optimization&quot;</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-emerald-400 font-semibold">&quot;Ready for interview&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">codeQuality:</span>{" "}
                    <span className="text-purple-400">100%</span>
                  </p>
                  <p>&#125;;</p>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1.5 text-slate-300"
                >
                  <p className="text-slate-500">&#47;&#42; Verified Tech Ecosystem &#42;&#47;</p>
                  <p>&#123;</p>
                  <p className="pl-4">
                    <span className="text-cyan-400">&quot;languages&quot;</span>: [
                    <span className="text-amber-200">&quot;JavaScript&quot;</span>,{" "}
                    <span className="text-amber-200">&quot;PHP&quot;</span>,{" "}
                    <span className="text-amber-200">&quot;SQL&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">&quot;frameworks&quot;</span>: [
                    <span className="text-emerald-300">&quot;Laravel&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;DevExtreme&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">&quot;aiApis&quot;</span>: [
                    <span className="text-teal-300">&quot;OpenAI GPT-4&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;Google Gemini&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">&quot;database&quot;</span>: [
                    <span className="text-emerald-200">&quot;SQL Server (SP, Tuning)&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">&quot;learning&quot;</span>: [
                    <span className="text-purple-300">&quot;React Ecosystem&quot;</span>,{" "}
                    <span className="text-purple-300">&quot;Microservices&quot;</span>]
                  </p>
                  <p>&#125;</p>
                </motion.div>
              )}

              {activeTab === "terminal" && (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2 text-slate-300"
                >
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Play size={12} />
                    <span>bash ./diagnostics.sh</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">&gt; Initializing developer environment...</p>
                  <p className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Database connection: SQL Server online (12ms)</span>
                  </p>
                  <p className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>AI Model Pipeline: OpenAI &amp; Gemini API synced</span>
                  </p>
                  <p className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Status: Ready to build and scale your products!</span>
                  </p>
                  <div className="mt-4 p-2.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[11px] flex items-center justify-between">
                    <span>linhlg2004@gmail.com</span>
                    <span className="text-[10px] text-emerald-400/80">PING OK (14ms)</span>
                  </div>
                </motion.div>
              )}

              {/* Bottom Quick Command Bar */}
              <div className="pt-4 mt-2 border-t border-emerald-500/15 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">git clone portfolio.git</span>
                </div>
                <button
                  onClick={copyCode}
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                  title="Copy command"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Floating Feature Badges around Terminal */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-3 py-2 rounded-xl bg-[#021316]/95 border border-emerald-500/30 shadow-xl backdrop-blur-md"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu size={14} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-white">Fullstack &amp; AI</p>
              <p className="text-[10px] text-emerald-300 font-mono">Modern Architecture</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="hidden sm:flex absolute -bottom-5 -right-3 items-center gap-2 px-3 py-2 rounded-xl bg-[#021316]/95 border border-cyan-500/30 shadow-xl backdrop-blur-md z-20"
          >
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Sparkles size={14} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-white">HR Tech Specialist</p>
              <p className="text-[10px] text-cyan-300 font-mono">Vietinsoft Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* -- Scroll Indicator -- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-400/50">
          Scroll Down
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-emerald-400/60 via-cyan-400/30 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
