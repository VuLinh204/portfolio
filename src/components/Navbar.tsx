"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/**
 * Sticky top navigation bar with mobile hamburger menu.
 * Becomes opaque on scroll.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route hash changes
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#04191c]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="#hero"
            className="text-sm font-semibold tracking-widest uppercase text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            KL<span className="text-white/40">.</span><span className="ml-2 text-[9px] font-medium text-emerald-100/35">STUDIO</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-1.5 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/VuLinh204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="/cv-vu-ngoc-khanh-linh.pdf"
              download
              className="px-4 py-1.5 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-[#031314] rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#04191c]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <ul className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5 mt-2">
                <a
                  href="/cv-vu-ngoc-khanh-linh.pdf"
                  download
                  onClick={handleNavClick}
                  className="block px-4 py-2.5 text-center text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-[#031314] rounded-lg transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
