"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import {
  SiPython, SiPytorch, SiTensorflow, SiOpencv,
  SiDocker, SiFlask, SiHuggingface
} from "react-icons/si";
import { useEffect, useState } from "react";

const techStack = [
  { icon: SiPython, label: "Python", color: "#3b82f6" },
  { icon: SiPytorch, label: "PyTorch", color: "#ef4444" },
  { icon: SiTensorflow, label: "TensorFlow", color: "#f59e0b" },
  { icon: SiOpencv, label: "OpenCV", color: "#22c55e" },
  { icon: SiHuggingface, label: "HuggingFace", color: "#fbbf24" },
  { icon: SiDocker, label: "Docker", color: "#06b6d4" },
  { icon: SiFlask, label: "Flask", color: "#a78bfa" },
];

const typewriterWords = [
  "AI Systems",
  "CV Pipelines",
  "ML Models",
  "AI Agents",
  "Data Solutions",
];

const stats = [
  { value: "7+", label: "Projects Shipped" },
  { value: "4+", label: "AI Products Deployed" },
  { value: "5+", label: "Domains Covered" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterWords[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, isDeleting ? 45 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "4rem" }}
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient mesh */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, #6366f118 0%, transparent 70%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="glow-orb w-[500px] h-[500px] opacity-[0.05]"
        style={{ background: "#6366f1", top: "-5%", left: "-10%" }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] opacity-[0.04]"
        style={{ background: "#06b6d4", bottom: "10%", right: "-5%" }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] opacity-[0.03]"
        style={{ background: "#8b5cf6", top: "40%", right: "20%" }}
      />

      <div className="section-container relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="tag">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow inline-block" />
                Available for Freelance Projects
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 tracking-tight"
            >
              <span style={{ color: "var(--text)" }}>I build{" "}</span>
              <span className="gradient-text">
                {displayText}
                <span className="typewriter-cursor" />
              </span>
              <br />
              <span style={{ color: "var(--text)" }}>
                that solve real problems.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              AI & ML Engineer specializing in{" "}
              <span style={{ color: "var(--text)" }} className="font-medium">Computer Vision</span>,{" "}
              <span style={{ color: "var(--text)" }} className="font-medium">Deep Learning</span>, and{" "}
              <span style={{ color: "var(--text)" }} className="font-medium">AI Agents</span>.
              I turn complex data challenges into production-ready systems — with measurable results and clean architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.fiverr.com/farazkk72/buying?source=avatar_menu_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
                id="hero-hire-btn"
              >
                Hire Me on Fiverr
                <FiExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="btn-secondary group"
                id="hero-projects-btn"
              >
                View Projects
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-8 mb-10 pb-10 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      background: `${tech.color}12`,
                      borderColor: `${tech.color}28`,
                      color: tech.color,
                    }}
                  >
                    <tech.icon size={12} />
                    {tech.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="card p-6 animate-float">
                {/* Profile header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
                  >
                    F
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Faraz KK</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      AI & ML Engineer
                    </div>
                  </div>
                  <div className="tag tag-green text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow inline-block" />
                    Open to work
                  </div>
                </div>

                {/* Code snippet visual */}
                <div
                  className="rounded-xl p-4 font-mono text-xs mb-5"
                  style={{ background: "#0a0a0f", border: "1px solid #2a2a3e" }}
                >
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="space-y-1 leading-relaxed">
                    <div><span className="text-purple-400">import</span> <span className="text-cyan-400">torch</span></div>
                    <div><span className="text-purple-400">from</span> <span className="text-cyan-400">transformers</span> <span className="text-purple-400">import</span> <span className="text-yellow-400">GroundingDINO</span></div>
                    <div className="text-slate-500"># Zero-shot novel object detection</div>
                    <div><span className="text-blue-400">model</span> = <span className="text-yellow-400">CooperativePipeline</span>(</div>
                    <div className="pl-4"><span className="text-green-400">detectors</span>=<span className="text-orange-400">[</span><span className="text-cyan-400">&quot;GDINO&quot;</span>, <span className="text-cyan-400">&quot;CLIP&quot;</span><span className="text-orange-400">]</span>,</div>
                    <div className="pl-4"><span className="text-green-400">fusion</span>=<span className="text-cyan-400">&quot;OptimalTransport&quot;</span></div>
                    <div>)</div>
                    <div className="text-green-400 mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Novel AP50: +12.4 pts on COCO OVD
                    </div>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "CV Projects", val: "3+" },
                    { label: "AI Agents", val: "4+" },
                    { label: "Domains", val: "5+" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center py-2.5 rounded-lg"
                      style={{ background: "#6366f110", border: "1px solid #6366f118" }}
                    >
                      <div className="text-sm font-extrabold gradient-text">{s.val}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 tag shadow-xl"
                style={{ background: "#12121a", borderColor: "#06b6d435" }}
              >
                🏆 FYP — WACV&apos;25 Research
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 tag shadow-xl"
                style={{ background: "#12121a", borderColor: "#6366f135" }}
              >
                🤖 NexlTech AI Intern
              </motion.div>

              {/* Orbiting glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, #6366f115, transparent 70%)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
