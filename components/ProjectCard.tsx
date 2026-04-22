"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiZap } from "react-icons/fi";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const domainColors: Record<string, string> = {
    "Computer Vision": "#06b6d4",
    "AI Agents": "#6366f1",
    "Voice AI": "#10b981",
    "Applied ML": "#f59e0b",
    "Data Analysis": "#8b5cf6",
    "Mobile AI": "#f43f5e",
  };

  const color = domainColors[project.domain] || "#6366f1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className="gradient-border group"
      id={`project-card-${project.id}`}
    >
      <div className="card p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: `${color}15`,
                  color: color,
                  border: `1px solid ${color}25`,
                }}
              >
                {project.domain}
              </span>
              {project.demoUrl && (
                <span className="tag tag-accent text-xs">Live Demo</span>
              )}
            </div>
            <h3 className="text-lg font-bold leading-tight" style={{ color: "var(--text)" }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-4">
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
            <span className="font-medium" style={{ color }}>Problem: </span>
            {project.problem}
          </p>
        </div>

        {/* Results — Always Visible */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.results.map((r) => (
            <div
              key={r.label}
              className="rounded-lg px-3 py-2 text-center"
              style={{ background: `${color}10`, border: `1px solid ${color}20` }}
            >
              <div className="text-sm font-bold" style={{ color }}>{r.value}</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>{r.label}</div>
            </div>
          ))}
        </div>

        {/* Models + Frameworks */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {[...project.models.slice(0, 3), ...project.frameworks.slice(0, 3)].map((tech) => (
            <span key={tech} className="code-badge">{tech}</span>
          ))}
          {project.models.length + project.frameworks.length > 6 && (
            <span className="code-badge opacity-60">
              +{project.models.length + project.frameworks.length - 6} more
            </span>
          )}
        </div>

        {/* Expandable Section */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium mb-3 transition-colors duration-200"
          style={{ color: color }}
          id={`expand-${project.id}`}
        >
          {expanded ? (
            <>
              <FiChevronUp size={14} /> Show Less
            </>
          ) : (
            <>
              <FiChevronDown size={14} /> Technical Details
            </>
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Approach */}
              <div className="mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>
                  Technical Approach
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.approach}
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>
                  Key Features
                </div>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                      <FiZap
                        size={10}
                        className="mt-0.5 shrink-0"
                        style={{ color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="rounded-lg p-3 mb-4" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color }}>
                  Impact
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.impact}
                </p>
              </div>

              {/* All models + frameworks */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[...project.models, ...project.frameworks].map((tech) => (
                  <span key={tech} className="code-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-indigo-400"
              style={{ color: "var(--text-muted)" }}
              id={`github-link-${project.id}`}
            >
              <FiGithub size={13} /> GitHub
            </motion.a>
          )}
          {project.demoUrl && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
              style={{ color }}
              id={`demo-link-${project.id}`}
            >
              <FiExternalLink size={13} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
