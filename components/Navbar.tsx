"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiGithub } from "react-icons/fi";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#core-ml", label: "Core ML" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl border-b"
          : ""
        }`}
      style={{
        background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        borderColor: scrolled ? "rgba(99, 102, 241, 0.1)" : "transparent",
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
              F
            </div>
            <span className="font-bold text-base tracking-tight">
              <span className="gradient-text">Faraz</span>
              <span className="text-slate-400 font-normal">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
                style={{ color: "var(--text-muted)" }}
                aria-label="Toggle theme"
                id="theme-toggle-btn"
              >
                {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
            )}

            {/* GitHub */}
            <a
              href="https://github.com/kkfaraz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              style={{ color: "var(--text-muted)" }}
              id="nav-github-link"
            >
              <FiGithub size={16} />
            </a>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="hidden sm:flex btn-primary text-xs py-2 px-4"
              id="nav-hire-btn"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: "var(--text-muted)" }}
              id="mobile-menu-btn"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t"
            style={{
              background: "rgba(10, 10, 15, 0.98)",
              borderColor: "var(--border)",
            }}
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-base py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-sm mt-2 w-fit"
                onClick={() => setMobileOpen(false)}
                id="mobile-hire-btn"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
