"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="py-12 border-t"
      style={{ borderColor: "var(--border)", background: "#08080d" }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
              >
                F
              </div>
              <span className="font-bold text-sm gradient-text">Faraz.dev</span>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              AI & ML Engineer · Available Globally · Open to Freelance
            </p>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {["#projects", "#experience", "#services", "#skills", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-xs transition-colors duration-200 hover:text-indigo-400 animated-underline"
                style={{ color: "var(--text-muted)" }}
              >
                {href.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
              </a>
            ))}
          </div>

          {/* Social Links + Back to Top */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/kkfaraz", icon: FiGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/kkfaraz/", icon: FiLinkedin, label: "LinkedIn" },
              { href: "mailto:khokharfaraz54@gmail.com", icon: FiMail, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg transition-all duration-200 hover:text-indigo-400 hover:bg-indigo-500/10"
                style={{ color: "var(--text-muted)" }}
                id={`footer-${s.label.toLowerCase()}`}
              >
                <s.icon size={16} />
              </a>
            ))}

            <div className="w-px h-4" style={{ background: "var(--border)" }} />

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              aria-label="Back to top"
              id="back-to-top-btn"
            >
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2025 Faraz KK · Built with Next.js, Tailwind CSS & Framer Motion
          </span>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow inline-block" />
            Open to freelance — respond in &lt;12hrs
          </div>
        </div>
      </div>
    </footer>
  );
}
