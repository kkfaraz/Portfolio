"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiBarChart2, FiLayers, FiCpu } from "react-icons/fi";
import { MLProject } from "@/lib/mlProjects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: MLProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
              style={{ color: "var(--text)" }}
            >
              <FiX size={20} />
            </button>

            {/* Header Banner */}
            <div
              className={`p-8 pb-12 rounded-t-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag shadow-lg border-white/10 bg-black/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="tag shadow-lg border-white/10 bg-black/30 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-semibold rounded bg-white/10 text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-10 relative z-20 -mt-6 rounded-t-3xl" style={{ background: "var(--surface)" }}>
              
              {/* Problem Statement */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <FiCpu className="text-indigo-400" /> The Engineering Problem
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.problem}
                </p>
              </div>

              {/* Pipeline Breakdown */}
              <div className="p-5 rounded-xl" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                  <FiLayers className="text-cyan-400" /> Pipeline Architecture
                </h3>
                <ol className="space-y-4">
                  {project.pipeline.map((step, idx) => {
                    const [phase, desc] = step.split(": ");
                    return (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {idx + 1}
                        </span>
                        <div>
                          <strong style={{ color: "var(--text)" }}>{phase}:</strong>{" "}
                          <span style={{ color: "var(--text-muted)" }}>{desc}</span>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Metrics Grid */}
              <div>
                <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                  <FiBarChart2 className="text-emerald-400" /> Key Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded-lg text-center"
                      style={{
                        background: m.highlight ? "rgba(16, 185, 129, 0.1)" : "var(--bg)",
                        border: m.highlight ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid var(--border)",
                      }}
                    >
                      <div
                        className="text-xl font-extrabold"
                        style={{ color: m.highlight ? "#34d399" : "var(--text)" }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Model Comparisons */}
              <div>
                <h3 className="text-base font-bold mb-4">Model Evaluation & Comparison</h3>
                <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "var(--border)" }}>
                  <table className="w-full text-left text-sm border-collapse">
                    <thead style={{ background: "var(--surface-2)" }}>
                      <tr>
                        <th className="p-3 font-semibold">Model Architecture</th>
                        <th className="p-3 font-semibold">Performance</th>
                        {project.comparisons[0].parameters && <th className="p-3 font-semibold">Params</th>}
                        <th className="p-3 font-semibold">Engineering Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.comparisons.map((comp, idx) => (
                        <tr
                          key={idx}
                          className="border-t"
                          style={{ borderColor: "var(--border)", background: idx === 1 && comp.note?.includes("Retained") ? "rgba(99, 102, 241, 0.05)" : "transparent" }}
                        >
                          <td className="p-3 font-medium" style={{ color: "var(--text)" }}>{comp.model}</td>
                          <td className="p-3 font-bold text-indigo-400">{comp.accuracy}</td>
                          {comp.parameters && <td className="p-3" style={{ color: "var(--text-muted)" }}>{comp.parameters}</td>}
                          <td className="p-3 text-xs" style={{ color: "var(--text-muted)" }}>{comp.note || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Challenges & Improvements */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold mb-2 text-rose-400">Technical Challenges</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 text-amber-400">Future Iteration</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {project.improvements}
                  </p>
                </div>
              </div>

              {/* Footer Links */}
              <div className="pt-6 border-t flex flex-wrap gap-4" style={{ borderColor: "var(--border)" }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 sm:flex-none justify-center"
                  >
                    <FiGithub size={14} /> View Source Code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 sm:flex-none justify-center"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
