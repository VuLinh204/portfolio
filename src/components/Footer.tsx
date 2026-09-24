import { Mail, Phone, MapPin } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { PERSONAL } from "@/lib/data";

/**
 * Site footer with contact summary, navigation shortcuts, and social links.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-violet-400 tracking-widest uppercase mb-3">
              KL<span className="text-white/40">.</span>
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Software Developer specialising in HR web apps and AI integration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-violet-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                >
                  <Mail size={14} />
                  {PERSONAL.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                >
                  <Phone size={14} />
                  {PERSONAL.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <MapPin size={14} />
                {PERSONAL.location}
              </li>
              <li>
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                >
                  <GithubIcon size={14} />
                  github.com/VuLinh204
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>© {year} Vu Ngoc Khanh Linh. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
