"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Computer Vision", "AI Agents", "Applied ML", "Data Analysis", "Voice AI", "Mobile AI"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.domain === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Selected Work</div>
          <h2 className="section-title">Projects That Ship Results</h2>
          <p className="section-subtitle">
            Every project below solves a real problem, uses a deliberate technical
            approach, and delivers measurable outcomes. No toy datasets. No filler.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeFilter === f
                  ? "border-indigo-500 text-indigo-400 bg-indigo-500/10 shadow-sm shadow-indigo-500/20"
                  : "border-transparent hover:border-indigo-500/30"
              }`}
              style={{ color: activeFilter === f ? undefined : "var(--text-muted)" }}
              id={`filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured Spotlight (only shown in "All" filter) */}
        {activeFilter === "All" && (
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              ⭐ Featured
            </motion.p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* All / Filtered Grid */}
        {activeFilter !== "All" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Show non-featured when "All" */}
        {activeFilter === "All" && projects.some((p) => !p.featured) && (
          <div className="mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              More Projects
            </motion.p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            All projects are version-controlled and documented on GitHub
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/kkfaraz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="view-all-github-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Repositories →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
