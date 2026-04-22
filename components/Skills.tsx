"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiPytorch, SiTensorflow, SiOpencv, SiDocker,
  SiReact, SiFlask, SiNumpy, SiPandas, SiScikitlearn,
  SiJupyter, SiGit, SiPostgresql, SiStreamlit, SiHuggingface,
} from "react-icons/si";
import { FiActivity, FiCpu, FiEye, FiBarChart2, FiCode } from "react-icons/fi";

const skillGroups = [
  {
    category: "Machine Learning & Deep Learning",
    icon: FiCpu,
    color: "#6366f1",
    skills: [
      { name: "PyTorch", icon: SiPytorch, level: 90 },
      { name: "TensorFlow / Keras", icon: SiTensorflow, level: 80 },
      { name: "Scikit-learn", icon: SiScikitlearn, level: 92 },
      { name: "HuggingFace", icon: SiHuggingface, level: 85 },
      { name: "Transformers", icon: FiCpu, level: 82 },
    ],
  },
  {
    category: "Computer Vision",
    icon: FiEye,
    color: "#06b6d4",
    skills: [
      { name: "OpenCV", icon: SiOpencv, level: 88 },
      { name: "Grounding DINO", icon: FiEye, level: 85 },
      { name: "CLIP", icon: FiCpu, level: 82 },
      { name: "YOLO (v5–v11)", icon: FiEye, level: 87 },
      { name: "Image Segmentation", icon: FiEye, level: 78 },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    icon: FiBarChart2,
    color: "#f59e0b",
    skills: [
      { name: "Pandas", icon: SiPandas, level: 93 },
      { name: "NumPy", icon: SiNumpy, level: 92 },
      { name: "Matplotlib / Seaborn", icon: FiBarChart2, level: 88 },
      { name: "Streamlit", icon: SiStreamlit, level: 85 },
      { name: "Statistical Testing", icon: FiActivity, level: 80 },
    ],
  },
  {
    category: "Programming Languages",
    icon: FiCode,
    color: "#10b981",
    skills: [
      { name: "Python", icon: SiPython, level: 95 },
      { name: "Java", icon: FiCode, level: 72 },
      { name: "SQL", icon: SiPostgresql, level: 80 },
      { name: "JavaScript/TypeScript", icon: FiCode, level: 70 },
      { name: "Bash / Shell", icon: FiCode, level: 68 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    icon: FiCpu,
    color: "#8b5cf6",
    skills: [
      { name: "Docker", icon: SiDocker, level: 78 },
      { name: "Git / GitHub", icon: SiGit, level: 88 },
      { name: "Jupyter", icon: SiJupyter, level: 92 },
      { name: "Flask / REST APIs", icon: SiFlask, level: 83 },
      { name: "React Native (Expo)", icon: SiReact, level: 72 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag inline-flex mb-4">Technical Proficiency</div>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Grouped by domain. Every skill here has been used in a real project
            — not just learned theoretically.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08, ease: "easeOut" }}
              className="card p-6"
              id={`skill-group-${gi}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${group.color}15` }}
                >
                  <group.icon size={16} style={{ color: group.color }} />
                </div>
                <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <skill.icon size={12} style={{ color: group.color }} />
                        <span className="text-xs font-medium" style={{ color: "var(--text)" }}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.05 + si * 0.08, ease: "easeOut" }}
                        style={{
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Additional Tags Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="card p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#ec489915" }}>
                <FiActivity size={16} style={{ color: "#ec4899" }} />
              </div>
              <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>
                AI Ecosystem & Integrations
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "GPT-4o", "OpenRouter", "Retell AI", "ElevenLabs", "Twilio",
                "N8N Workflows", "LangChain", "Cal.com", "Airtable",
                "HuggingFace Spaces", "Selenium", "BeautifulSoup",
                "spaCy", "NLTK", "Matplotlib", "Plotly", "LaTeX",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "#ec489915",
                    color: "#f472b6",
                    border: "1px solid #ec489925",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
