"use client";

import { motion } from "framer-motion";
import {
  FiCpu, FiEye, FiMic, FiBarChart2, FiZap, FiArrowRight
} from "react-icons/fi";

const services = [
  {
    id: "ml-development",
    icon: FiCpu,
    title: "ML Model Development & Training",
    color: "#6366f1",
    tagline: "Custom models for your exact problem — not off-the-shelf templates.",
    deliverables: [
      "End-to-end model pipeline: data prep → training → evaluation → export",
      "Architecture selection justified by your problem type and data constraints",
      "Classification, regression, NLP, and multi-modal models",
      "Performance benchmarking with F1, AUC, mAP, or domain-specific metrics",
      "Model compression and ONNX export for deployment",
    ],
    outcome: "A trained, evaluated model with documented performance metrics, ready for integration.",
    tools: ["PyTorch", "Scikit-learn", "HuggingFace", "ONNX", "W&B"],
  },
  {
    id: "computer-vision",
    icon: FiEye,
    title: "Computer Vision Pipelines",
    color: "#06b6d4",
    tagline: "From raw pixels to structured intelligence — detection, segmentation, classification.",
    deliverables: [
      "Object detection (YOLO, DINO, Faster R-CNN) and open-vocabulary detection",
      "Image segmentation (semantic, instance, panoptic)",
      "Custom dataset creation: annotation, augmentation, preprocessing",
      "Real-time inference pipelines with OpenCV integration",
      "Model evaluation with COCO metrics (AP, AP50, AP75)",
    ],
    outcome: "A production-grade CV system with documented accuracy benchmarks and inference pipeline.",
    tools: ["PyTorch", "OpenCV", "Ultralytics", "CLIP", "Grounding DINO"],
  },
  {
    id: "ai-agents",
    icon: FiZap,
    title: "AI Agent & Automation Systems",
    color: "#10b981",
    tagline: "Autonomous workflows that replace repetitive human labor — reliably and at scale.",
    deliverables: [
      "Multi-step reasoning agents using GPT-4o or open-source LLMs",
      "N8N workflow orchestration with webhook integrations",
      "Voice AI systems (Retell AI) for call handling and appointment booking",
      "Lead generation agents (LinkedIn, Instagram scraping + qualification)",
      "CRM integrations: Airtable, HubSpot, Notion",
    ],
    outcome: "A deployed automation that eliminates a specific manual process end-to-end.",
    tools: ["OpenAI", "N8N", "Retell AI", "LangChain", "Webhooks"],
  },
  {
    id: "data-analysis",
    icon: FiBarChart2,
    title: "Data Analysis & Visualization",
    color: "#f59e0b",
    tagline: "Turn raw datasets into decision-ready insights — with statistical rigor.",
    deliverables: [
      "Exploratory data analysis with automated question generation",
      "Hypothesis testing (T-test, ANOVA, Chi-square, regression)",
      "Interactive dashboards with Streamlit or Plotly",
      "Automated EDA reports exportable as LaTeX/PDF",
      "Predictive modeling for business KPIs",
    ],
    outcome: "A clear analytical report or interactive dashboard your stakeholders can act on immediately.",
    tools: ["Pandas", "Seaborn", "Plotly", "Streamlit", "SciPy"],
  },
  {
    id: "voice-chatbot",
    icon: FiMic,
    title: "Voice AI & Chatbot Systems",
    color: "#8b5cf6",
    tagline: "Deploy conversational AI that handles real customer interactions — not just demos.",
    deliverables: [
      "Voice agents with sub-200ms response latency via Retell AI",
      "Chatbot flows with multi-step data collection and validation",
      "Knowledge base integration (clinic info, products, FAQs)",
      "Calendar and booking integrations (Cal.com, Calendly)",
      "Twilio telephony + ElevenLabs voice customization",
    ],
    outcome: "A live voice or chat agent handling real customer queries, integrated with your existing systems.",
    tools: ["Retell AI", "ElevenLabs", "Twilio", "N8N", "Cal.com"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag inline-flex mb-4">What I Build for Clients</div>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Each service is scoped around a specific outcome — not a vague description.
            You know exactly what you&apos;ll receive before we start.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="gradient-border group"
              id={`service-${service.id}`}
            >
              <div className="card p-6 h-full flex flex-col">
                {/* Icon + Title */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>

                <h3 className="text-base font-bold mb-1" style={{ color: "var(--text)" }}>
                  {service.title}
                </h3>
                <p className="text-xs italic mb-4" style={{ color: service.color }}>
                  {service.tagline}
                </p>

                {/* Deliverables */}
                <div className="mb-4 flex-1">
                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    What you get
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span
                          className="mt-1 w-1 h-1 rounded-full shrink-0"
                          style={{ background: service.color }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div
                  className="rounded-lg p-3 mb-4"
                  style={{ background: `${service.color}08`, border: `1px solid ${service.color}20` }}
                >
                  <div className="text-xs font-semibold mb-1" style={{ color: service.color }}>
                    Outcome
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {service.outcome}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tools.map((t) => (
                    <span key={t} className="code-badge">{t}</span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group/link"
                  style={{ color: service.color }}
                  id={`service-cta-${service.id}`}
                >
                  Discuss Your Project
                  <FiArrowRight
                    size={12}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-14"
        >
          <div
            className="inline-block rounded-2xl p-8 max-w-2xl"
            style={{ background: "linear-gradient(135deg, #6366f110, #06b6d410)", border: "1px solid #6366f130" }}
          >
            <h3 className="text-xl font-bold mb-2">Have a custom project?</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              Most high-value projects don&apos;t fit a standard package. Describe your
              problem and I&apos;ll tell you exactly how I&apos;d approach it.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="btn-primary"
              id="services-contact-btn"
            >
              Get a Free Scoping Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
