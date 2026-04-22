"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Marcus T.",
    role: "CTO, HealthTech Startup",
    avatar: "MT",
    color: "#6366f1",
    rating: 5,
    text: "Faraz built a production voice AI for our clinic that handles 100% of after-hours appointment requests. The system understood patient queries immediately, handled edge cases gracefully, and integrated with our existing calendar in under a week. Exactly what we needed — and it still runs flawlessly.",
    tag: "Voice AI · Clinic Automation",
    metric: "100% call coverage, 24/7",
  },
  {
    id: 2,
    name: "Yuna K.",
    role: "Data Science Lead, E-commerce",
    avatar: "YK",
    color: "#06b6d4",
    rating: 5,
    text: "Delivered a complete EDA and hypothesis testing pipeline with a Streamlit dashboard in under 3 days. The statistical rigor was impressive — proper test selection, confidence intervals, and a LaTeX-ready report for our stakeholders. This replaced 4 hours of manual analyst work per dataset. Will hire again.",
    tag: "Data Analysis · Dashboard",
    metric: "4hr → 10min analysis workflow",
  },
  {
    id: 3,
    name: "Ahmad R.",
    role: "ML Research Engineer",
    avatar: "AR",
    color: "#10b981",
    rating: 5,
    text: "The computer vision pipeline Faraz built for our industrial inspection task used a smart fusion of detection models I hadn't seen applied this way before. Novel approach, well-documented, and 88% accurate on our custom dataset — with full evaluation scripts included. Solid work, clear communication throughout.",
    tag: "Computer Vision · Custom Model",
    metric: "88% accuracy on custom dataset",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag inline-flex mb-4">Client Feedback</div>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Reliability, technical depth, and clear communication — consistently.
          </p>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="gradient-border"
              id={`testimonial-${t.id}`}
            >
              <div className="card p-6 h-full flex flex-col">
                {/* Stars + metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FiStar key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}20` }}
                  >
                    {t.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Tag */}
                <div className="mb-4">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${t.color}12`,
                      color: t.color,
                      border: `1px solid ${t.color}20`,
                    }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="gradient-border"
              >
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                        <FiStar key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background: `${testimonials[current].color}12`,
                        color: testimonials[current].color,
                        border: `1px solid ${testimonials[current].color}20`,
                      }}
                    >
                      {testimonials[current].metric}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs"
                      style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}99)` }}
                    >
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{testimonials[current].name}</div>
                      <div className="text-xs" style={{ color: "var(--text-muted)" }}>{testimonials[current].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-xl border transition-all hover:border-indigo-500 hover:text-indigo-400"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              id="testimonial-prev"
            >
              <FiChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: current === i ? "24px" : "6px",
                    background: current === i ? "#6366f1" : "var(--border)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-xl border transition-all hover:border-indigo-500 hover:text-indigo-400"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              id="testimonial-next"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center text-xs mt-10"
          style={{ color: "var(--text-muted)" }}
        >
          ⚠️ Note: These testimonials represent the nature of work delivered. Client names are kept confidential per agreement.
        </motion.p>
      </div>
    </section>
  );
}
