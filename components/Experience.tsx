"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    id: "nexltech",
    role: "AI Engineer Intern",
    org: "NexlTech",
    orgUrl: "#",
    period: "2024 – 2025",
    location: "Gujranwala, PK",
    type: "Internship",
    color: "#6366f1",
    description:
      "Shipped 4 production AI products for real clients — voice automation, lead generation, AI scheduling, and calendar booking systems. All deployed and actively used.",
    highlights: [
      "Built clinic voice AI (Retell AI + N8N + Cal.com) → deployed for Toothsi Dental Clinic",
      "Engineered lead gen agent (LinkedIn/Instagram → GPT-4o → Airtable CRM) cutting outreach time by 90%",
      "Developed adaptive study planner (Flask + GPT-4o) with 12+ REST endpoints and 5 AI workflows",
      "Delivered calendar booking automation with real-time availability and multi-step conversation flows",
    ],
    tags: ["AI Agents", "Voice AI", "N8N", "GPT-4o", "Flask"],
  },
  {
    id: "fyp",
    role: "Final Year Project — Research Lead",
    org: "GIFT University",
    orgUrl: "#",
    period: "2025 – 2026",
    location: "Gujranwala, PK",
    type: "Research",
    color: "#06b6d4",
    description:
      "Led research and implementation of an open-vocabulary novel object detection system using cooperative foundational models. Research basis: WACV 2025 publication.",
    highlights: [
      "Designed cooperative pipeline: Grounding DINO + CLIP + DINO with Optimal Transport fusion",
      "Achieved +12.4 AP50 improvement on novel categories vs single-model baseline",
      "Evaluated on COCO OVD and LVIS benchmarks",
      "Presented multi-modal zero-shot detection enabling real-world deployment without retraining",
    ],
    tags: ["PyTorch", "Transformers", "Computer Vision", "WACV'25", "Zero-shot"],
  },
  {
    id: "hisl",
    role: "Applied AI Project — Mobile Developer",
    org: "HISL Lab",
    orgUrl: "#",
    period: "2026",
    location: "Gujranwala, PK",
    type: "Project",
    color: "#10b981",
    description:
      "Developed MindGuard — a privacy-first React Native app for passive mental health risk detection using behavioral smartphone signals and on-device ML inference.",
    highlights: [
      "Passive monitoring of 5+ behavioral signals (screen time, app usage, typing cadence)",
      "On-device ML inference — no raw data leaves device",
      "Explainable risk scoring with 7/14/30-day trend analysis",
      "Personalized wellness interventions triggered by ML-detected risk thresholds",
    ],
    tags: ["React Native", "Expo", "On-device ML", "Privacy-first", "Behavioral AI"],
  },
];

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  Internship: { bg: "#6366f115", text: "#818cf8", border: "#6366f130" },
  Research: { bg: "#06b6d415", text: "#22d3ee", border: "#06b6d430" },
  Project: { bg: "#10b98115", text: "#34d399", border: "#10b98130" },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag inline-flex mb-4">Applied Technical Work</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Not coursework. Not theory. Real systems built for real clients
            and evaluated on real benchmarks.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => {
            const typeStyle = typeColors[exp.type] || typeColors.Project;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="gradient-border group"
                id={`experience-${exp.id}`}
              >
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Left: Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-xl font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}99)` }}
                    >
                      {exp.org[0]}
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 min-w-0">
                      {/* Top Row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>
                              {exp.role}
                            </h3>
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: typeStyle.bg,
                                color: typeStyle.text,
                                border: `1px solid ${typeStyle.border}`,
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                            <span className="font-semibold" style={{ color: exp.color }}>
                              {exp.org}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiCalendar size={10} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiMapPin size={10} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: exp.color }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="code-badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
