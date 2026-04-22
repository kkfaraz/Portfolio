"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiActivity, FiArrowRight } from "react-icons/fi";
import { mlProjects, MLProject } from "@/lib/mlProjects";
import ProjectModal from "./ProjectModal";

const filters = ["All", "Computer Vision", "Healthcare", "Tabular", "Distillation", "Classification"];

export default function CoreMLSystems() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<MLProject | null>(null);

  const filtered = mlProjects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter || p.type === activeFilter;
  });

  return (
    <section id="core-ml" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
            <FiActivity size={12} className="mr-1 inline" /> Applied AI
          </div>
          <h2 className="section-title">Core ML Systems</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Here are a few ML systems I&apos;ve built to solve real-world problems. No toy datasets, just production-ready pipelines.
          </p>
        </motion.div>

        {/* Dynamic Filters */}
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
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col h-full border hover:border-indigo-500/50 transition-colors duration-300"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/20 text-indigo-400">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/20 text-emerald-400">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1 line-clamp-3" style={{ color: "var(--text-muted)" }}>
                    {project.problem}
                  </p>
                  
                  {/* Highlight Metric */}
                  <div className="py-3 border-t border-b flex items-center justify-between mb-6" style={{ borderColor: "var(--border)" }}>
                    <div className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                      Top Metric:
                    </div>
                    <div className="text-sm font-bold text-emerald-400">
                      {project.metrics.find(m => m.highlight)?.label}: {project.metrics.find(m => m.highlight)?.value}
                    </div>
                  </div>

                  {/* Tools snippet */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tools.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded border font-medium" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                        {t}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded border font-medium" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-sm font-semibold text-indigo-400 mt-auto">
                    View Technical Breakdown 
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
