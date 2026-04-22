"use client";

import { motion } from "framer-motion";
import { FiStar, FiGitBranch, FiCode } from "react-icons/fi";

// Static fallback repos (real GitHub username placeholder)
const repos = [
  {
    id: 1,
    name: "novel-object-detection",
    description: "Cooperative foundational models (Grounding DINO + CLIP + DINO) for open-vocabulary novel object detection. WACV'25 research basis.",
    language: "Python",
    stars: 12,
    forks: 3,
    color: "#06b6d4",
    topics: ["computer-vision", "pytorch", "transformers", "grounding-dino"],
  },
  {
    id: 2,
    name: "ai-study-planner",
    description: "Full-stack Flask AI agent using GPT-4o for adaptive study scheduling, spaced repetition, and missed-session rescheduling.",
    language: "Python",
    stars: 8,
    forks: 2,
    color: "#6366f1",
    topics: ["llm", "flask", "openai", "ai-agent"],
  },
  {
    id: 3,
    name: "autostatagent",
    description: "Streamlit EDA agent with auto-question generation, NL-driven visualization, hypothesis testing, and LaTeX report export. Deployed on HuggingFace.",
    language: "Python",
    stars: 15,
    forks: 4,
    color: "#8b5cf6",
    topics: ["streamlit", "data-science", "statistics", "docker"],
  },
  {
    id: 4,
    name: "poverty-satellite-imagery",
    description: "CNN + ResNet pipeline for poverty estimation across Punjab, Pakistan using satellite imagery and nighttime light data.",
    language: "Python",
    stars: 6,
    forks: 1,
    color: "#f59e0b",
    topics: ["deep-learning", "satellite-imagery", "remote-sensing", "pytorch"],
  },
  {
    id: 5,
    name: "clinic-voice-assistant",
    description: "Production voice AI for healthcare appointment booking using Retell AI, N8N workflows, and Cal.com integration.",
    language: "JSON / N8N",
    stars: 5,
    forks: 1,
    color: "#10b981",
    topics: ["voice-ai", "n8n", "automation", "retell-ai"],
  },
  {
    id: 6,
    name: "mindguard-mental-health",
    description: "React Native app for passive mental health risk detection via behavioral smartphone signals — on-device inference, privacy-first.",
    language: "TypeScript",
    stars: 9,
    forks: 2,
    color: "#f43f5e",
    topics: ["react-native", "expo", "mental-health", "ai"],
  },
];

const langColors: Record<string, string> = {
  Python: "#3b82f6",
  TypeScript: "#60a5fa",
  JavaScript: "#f59e0b",
  "JSON / N8N": "#10b981",
};

export default function GitHub() {
  return (
    <section id="github" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag inline-flex mb-4">Codebase Transparency</div>
          <h2 className="section-title">GitHub</h2>
          <p className="section-subtitle">
            Open code. Documented repos. Every project backed by a real codebase
            you can inspect before hiring.
          </p>
        </motion.div>

        {/* GitHub Profile Banner */}
        <motion.a
          href="https://github.com/kkfaraz"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="block mb-10 rounded-2xl overflow-hidden group"
          id="github-profile-banner"
        >
          <div
            className="p-6 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 group-hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6366f110, #06b6d415)",
              border: "1px solid #6366f130",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
            >
              F
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg font-bold">kkfaraz</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                github.com/kkfaraz · AI & ML Engineer
              </div>
            </div>
            <div className="ml-auto flex gap-6 text-center">
              {[
                { label: "Repos", value: "20+" },
                { label: "Projects", value: "7+" },
                { label: "Languages", value: "5" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-bold gradient-text">{s.value}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.a>

        {/* Repos Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href="https://github.com/kkfaraz"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className="card p-5 group block"
              id={`repo-card-${repo.id}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${repo.color}15` }}
                >
                  <FiCode size={14} style={{ color: repo.color }} />
                </div>
                <div>
                  <div className="text-sm font-semibold group-hover:text-indigo-400 transition-colors">
                    {repo.name}
                  </div>
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1 mb-4">
                {repo.topics.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${repo.color}10`, color: repo.color, border: `1px solid ${repo.color}20` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: langColors[repo.language] || "#6366f1" }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <FiStar size={11} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FiGitBranch size={11} /> {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/kkfaraz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="github-view-all-btn"
          >
            View All Repositories →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
