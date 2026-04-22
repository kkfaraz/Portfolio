"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub, FiLinkedin, FiMail, FiExternalLink,
  FiSend, FiCheck, FiMessageSquare
} from "react-icons/fi";

const contactLinks = [
  {
    id: "fiverr",
    label: "Fiverr",
    href: "https://www.fiverr.com/farazkk72/buying?source=avatar_menu_profile",
    description: "Hire me for a project",
    icon: "🛒",
    color: "#1dbf73",
    note: "Quick turnaround packages",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kkfaraz/",
    description: "Connect professionally",
    icon: "💼",
    color: "#0a66c2",
    iconComponent: FiLinkedin,
    note: "DMs open",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/kkfaraz",
    description: "Inspect my codebase",
    icon: "⚙️",
    color: "#8b5cf6",
    iconComponent: FiGithub,
    note: "20+ repos, documented",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:khokharfaraz54@gmail.com",
    description: "khokharfaraz54@gmail.com",
    icon: "✉️",
    color: "#6366f1",
    iconComponent: FiMail,
    note: "Reply within 12hrs",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", project: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1400);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag inline-flex mb-4">
            <FiMessageSquare size={11} />
            Let&apos;s Work Together
          </div>
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-subtitle text-xl font-semibold gradient-text" style={{ WebkitTextFillColor: undefined, backgroundClip: "unset", color: undefined }}>
            <span className="gradient-text">Let&apos;s build it.</span>
          </p>
          <p className="text-sm max-w-lg mx-auto -mt-6" style={{ color: "var(--text-muted)" }}>
            I typically respond within 12 hours. Describe your problem and I&apos;ll tell
            you exactly how I&apos;d approach it — no obligation, no fluff.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold mb-6">Reach me on</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {contactLinks.map((link) => (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={link.id}
                  href={link.href}
                  target={link.id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card p-4 group flex flex-col gap-2"
                  id={`contact-${link.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                      style={{ background: `${link.color}18` }}
                    >
                      {link.icon}
                    </div>
                    <FiExternalLink
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: link.color }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold group-hover:opacity-80 transition-colors"
                      style={{ color: link.color }}
                    >
                      {link.label}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {link.note}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl p-5 mb-6"
              style={{
                background: "linear-gradient(135deg, #6366f112, #06b6d412)",
                border: "1px solid #6366f130",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-sm font-bold text-green-400">Available for New Projects</span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Open to freelance engagements — short-term deliverables, long-term
                collaborations, and consulting on AI/ML architecture.
              </p>
            </motion.div>

            {/* Response time */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
            >
              <div className="text-2xl">⚡</div>
              <div>
                <div className="text-sm font-semibold">Fast Response Guaranteed</div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  I reply to all project inquiries within 12 hours — usually faster.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <div className="card p-6 sm:p-8">
              <h3 className="text-base font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-project"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project"
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="input-field"
                    style={{ background: "var(--bg)", color: form.project ? "var(--text)" : "var(--text-muted)" }}
                  >
                    <option value="" style={{ color: "var(--text-muted)" }}>Select a service...</option>
                    <option value="ml">ML Model Development & Training</option>
                    <option value="cv">Computer Vision Pipeline</option>
                    <option value="agent">AI Agent & Automation</option>
                    <option value="data">Data Analysis & Dashboard</option>
                    <option value="voice">Voice AI / Chatbot System</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Describe Your Problem
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="What are you trying to build? What problem needs solving? What does success look like?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="btn-primary w-full justify-center"
                  id="contact-submit-btn"
                  style={{ opacity: status === "sending" ? 0.8 : 1 }}
                >
                  {status === "idle" && (
                    <>
                      <FiSend size={14} />
                      Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <FiCheck size={14} />
                      Message Sent! I&apos;ll reply within 12 hours.
                    </>
                  )}
                </button>

                <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
                  Or reach me directly at{" "}
                  <a
                    href="mailto:khokharfaraz54@gmail.com"
                    className="animated-underline"
                    style={{ color: "#818cf8" }}
                  >
                    khokharfaraz54@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
