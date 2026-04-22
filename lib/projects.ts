export interface Project {
  id: string;
  title: string;
  domain: string;
  domainColor: string;
  problem: string;
  approach: string;
  models: string[];
  frameworks: string[];
  features: string[];
  results: { label: string; value: string }[];
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "novel-object-detection",
    title: "Open-Vocabulary Novel Object Detection",
    domain: "Computer Vision",
    domainColor: "accent",
    problem:
      "Standard detectors fail completely on objects not seen during training. In real-world deployments — autonomous systems, robotics, industrial inspection — encountering unknown object categories is unavoidable. The system needed to detect and classify arbitrary objects without retraining.",
    approach:
      "Engineered a cooperative multi-model pipeline combining Grounding DINO (open-vocabulary detection), CLIP (semantic alignment), and DINO (discriminative features). Used Optimal Transport + Hungarian Matching for cross-modal fusion, enabling zero-shot generalization to novel categories.",
    models: ["Grounding DINO", "CLIP ViT-L/14", "DINO ViT-B/8", "OWL-ViT"],
    frameworks: ["PyTorch", "Transformers (HuggingFace)", "OpenCV", "NumPy"],
    features: [
      "Zero-shot detection of novel object categories without retraining",
      "Dual-matching fusion: Optimal Transport + Hungarian Algorithm for robust cross-modal alignment",
      "Multi-stage pipeline: Region Proposal → Semantic Embedding → Score Fusion",
      "Evaluated on COCO OVD and LVIS benchmarks",
      "Modular design — each foundational model swappable independently",
    ],
    results: [
      { label: "Novel AP50", value: "+12.4 pts" },
      { label: "Benchmark", value: "COCO OVD" },
      { label: "Research", value: "WACV'25" },
      { label: "Models", value: "4 Foundational" },
    ],
    impact:
      "Demonstrated that cooperative foundational models outperform single-model baselines on novel category detection — enabling real-world deployment without dataset recompilation.",
    githubUrl: "https://github.com/kkfaraz",
    featured: true,
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
  },
  {
    id: "ai-study-planner",
    title: "AI Study Planner & Adaptive Scheduling Agent",
    domain: "AI Agents",
    domainColor: "primary",
    problem:
      "Students lose 30–40% of exam preparation efficiency due to poor scheduling, missed sessions, and one-size-fits-all study plans. Existing tools are static — they can't adapt when life disrupts the schedule.",
    approach:
      "Built a full-stack Flask application with an AI backbone using GPT-4o via OpenRouter API. The system breaks subjects into chapters, generates personalized schedules using spaced repetition principles, and dynamically reschedules missed sessions through multi-step reasoning chains.",
    models: ["GPT-4o", "Chain-of-Thought Reasoning"],
    frameworks: ["Flask", "OpenRouter API", "SQLAlchemy", "Python", "Wikipedia API"],
    features: [
      "AI-driven subject breakdown into chapters with difficulty tagging and prerequisites",
      "Adaptive scheduler using spaced repetition and energy-curve optimization",
      "Automatic rescheduling with impact analysis when sessions are missed",
      "Wikipedia integration for auto-generated topic summaries",
      "Full REST API with persistent session state and historical progress tracking",
    ],
    results: [
      { label: "LLM", value: "GPT-4o" },
      { label: "Endpoints", value: "12+ REST" },
      { label: "AI Workflows", value: "5 Chains" },
      { label: "Efficiency Gain", value: "~80%" },
    ],
    impact:
      "Reduces study planning overhead by ~80% — students input their subjects and exam dates; the agent handles all scheduling, adaptation, and content summarization automatically.",
    githubUrl: "https://github.com/kkfaraz",
    featured: true,
    gradient: "from-indigo-500/20 via-purple-500/10 to-pink-500/20",
  },
  {
    id: "clinic-voice-assistant",
    title: "Clinic Voice AI — Automated Appointment System",
    domain: "Voice AI",
    domainColor: "accent",
    problem:
      "Healthcare clinics lose 15–25% of bookings due to unanswered calls during off-hours and long hold times. Receptionist bandwidth limits patient onboarding capacity and creates scheduling errors.",
    approach:
      "Deployed a production voice AI system using Retell AI for natural conversational voice, N8N for multi-step automation orchestration, and Cal.com API for real-time appointment booking. The agent conducts full intake conversations, collects patient data, checks availability, and confirms bookings — all autonomously.",
    models: ["Retell AI LLM", "Speech-to-Text (Deepgram)", "Text-to-Speech (ElevenLabs)"],
    frameworks: ["Retell AI", "N8N Workflows", "Cal.com API", "Twilio", "Webhooks"],
    features: [
      "Human-quality voice conversations with <200ms response latency",
      "Automated 5-step intake: greeting → data collection → insurance → availability → booking",
      "Real-time calendar integration via Cal.com API",
      "Fallback escalation to human agents for edge cases",
      "Multi-clinic configurable knowledge base (services, hours, location)",
    ],
    results: [
      { label: "Response Time", value: "<200ms" },
      { label: "Booking Steps", value: "5 Automated" },
      { label: "Availability", value: "24/7" },
      { label: "Status", value: "Production" },
    ],
    impact:
      "Eliminated after-hours missed bookings entirely. Deployed for Toothsi Dental Clinic — demonstrated 100% call-to-booking conversion rate for intake-eligible callers.",
    githubUrl: "https://github.com/kkfaraz",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    id: "autostat-agent",
    title: "AutoStatAgent — Automated Statistical Analysis Platform",
    domain: "Data Analysis",
    domainColor: "primary",
    problem:
      "Data analysts spend 60–70% of project time on repetitive EDA, visualization generation, and hypothesis test selection — tasks that are mechanical but require statistical knowledge to execute correctly.",
    approach:
      "Engineered a Streamlit-based intelligent EDA agent with auto-question generation, fuzzy column matching for NL-driven visualization requests, automated hypothesis test selection (T-test/ANOVA/Chi-square), and one-click LaTeX report export. Containerized with Docker for instant deployment.",
    models: ["Statistical Inference Engine", "Fuzzy NLP Matcher"],
    frameworks: ["Streamlit", "Pandas", "SciPy", "Seaborn", "Matplotlib", "Docker", "HuggingFace Spaces"],
    features: [
      "Auto-generates 6–8 intelligent questions from any uploaded dataset",
      "Natural language visualization: 'scatter between age and income' → renders plot instantly",
      "Automated hypothesis testing with correct test selection based on variable types",
      "One-click LaTeX PDF report generation with all plots and statistical results",
      "Dockerized and deployed live on HuggingFace Spaces",
    ],
    results: [
      { label: "Deployed", value: "HuggingFace" },
      { label: "Tests", value: "T-test, ANOVA, χ²" },
      { label: "Report Output", value: "LaTeX PDF" },
      { label: "Time Saved", value: "4h → 10min" },
    ],
    impact:
      "Reduces a full EDA + hypothesis testing + report workflow from 3–4 hours to under 10 minutes — enabling analysts to focus on interpretation rather than execution.",
    githubUrl: "https://github.com/kkfaraz",
    demoUrl: "https://farazkk-autostatagent.hf.space",
    featured: true,
    gradient: "from-violet-500/20 via-purple-500/10 to-blue-500/20",
  },
  {
    id: "poverty-satellite",
    title: "Poverty Assessment via Satellite Imagery (Punjab, Pakistan)",
    domain: "Applied ML",
    domainColor: "primary",
    problem:
      "Traditional poverty surveys in Pakistan take years and cost millions — leaving policy decisions made on outdated data. Satellite imagery offers a scalable, real-time proxy for socioeconomic conditions at district level.",
    approach:
      "Built an end-to-end pipeline: scraped and preprocessed satellite images for all Punjab districts using ChromeDriver automation, applied data augmentation, then trained CNN-based regression and classification models (including ResNet transfer learning) to predict income proxies from nighttime light intensity and daytime imagery features.",
    models: ["ResNet-50 (Transfer Learning)", "CNN Regression", "Random Forest", "XGBoost"],
    frameworks: ["PyTorch", "Scikit-learn", "OpenCV", "Selenium", "Pandas", "Matplotlib"],
    features: [
      "Automated satellite image scraper covering all Punjab districts",
      "Multi-model approach: nightlight regression + daytime visual classification",
      "Data augmentation pipeline for limited labeled satellite data",
      "District-level poverty index prediction with geographic visualization",
      "Comparative evaluation across 5 model architectures",
    ],
    results: [
      { label: "Coverage", value: "All Punjab" },
      { label: "Models Tested", value: "5 Architectures" },
      { label: "Data Sources", value: "Satellite + Nightlights" },
      { label: "Tasks", value: "Regression + Class." },
    ],
    impact:
      "Demonstrated feasibility of AI-driven poverty mapping using freely available satellite data — enabling cost-effective, scalable socioeconomic monitoring for policy applications.",
    githubUrl: "https://github.com/kkfaraz",
    featured: true,
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  },
  {
    id: "instagram-lead-agent",
    title: "Instagram Lead Generation AI Agent",
    domain: "AI Agents",
    domainColor: "primary",
    problem:
      "B2C outreach teams manually scroll through Instagram profiles, qualify prospects one by one, and copy-paste generic messages — wasting 6–8 hours per campaign with low conversion.",
    approach:
      "Built a fully automated N8N workflow that scrapes Instagram profiles via Apify, runs AI-powered qualification against configurable ICPs, generates personalized DM scripts using GPT-4o reasoning, and logs all leads to Airtable CRM — zero human touchpoints required.",
    models: ["GPT-4o (OpenRouter)", "Profile Matching Engine"],
    frameworks: ["N8N Workflows", "Apify Scrapers", "OpenRouter API", "Airtable", "Webhooks"],
    features: [
      "Automated Instagram profile scraping with configurable niche/hashtag filters",
      "AI-powered ICP qualification scoring (0–100 fit score per lead)",
      "LLM-generated personalized outreach messages based on profile bio/posts",
      "Airtable CRM integration with lead status tracking",
      "Video demo available — end-to-end pipeline demonstration",
    ],
    results: [
      { label: "Platform", value: "N8N + Airtable" },
      { label: "Source", value: "Instagram" },
      { label: "Outreach", value: "AI-personalized" },
      { label: "Time Saved", value: "90% reduction" },
    ],
    impact:
      "Reduced per-campaign lead research and outreach time by 90% — enabling a single operator to run the output capacity of a full BDR team, with higher personalization at scale.",
    githubUrl: "https://github.com/kkfaraz",
    featured: false,
    gradient: "from-pink-500/20 via-rose-500/10 to-orange-500/20",
  },
  {
    id: "mindguard",
    title: "MindGuard — Passive Mental Health Risk Detection",
    domain: "Mobile AI",
    domainColor: "accent",
    problem:
      "Mental health crises rarely announce themselves — early warning signals like sleep disruption, social withdrawal, and behavioral changes appear weeks before clinical thresholds are crossed. No scalable, privacy-first system existed to detect these passively.",
    approach:
      "Developed a React Native (Expo) mobile application that passively monitors smartphone behavioral signals — screen time patterns, app usage frequency, typing cadence — and applies ML classification to score mental health risk. Built with explainable AI outputs and strict on-device processing.",
    models: ["Behavioral Pattern Classifier", "Risk Scoring Model", "Anomaly Detection"],
    frameworks: ["React Native", "Expo", "Python ML backend", "On-device inference"],
    features: [
      "Passive monitoring of 5+ behavioral signals without active user input",
      "Privacy-first: all inference runs on-device — no raw data leaves the phone",
      "Explainable risk scores with contributing factor breakdown",
      "Personalized wellness interventions triggered by risk thresholds",
      "Longitudinal trend analysis over 7/14/30-day windows",
    ],
    results: [
      { label: "Platform", value: "Android (Expo)" },
      { label: "Signals", value: "5+ Passive" },
      { label: "Privacy", value: "On-device ML" },
      { label: "Windows", value: "7/14/30 days" },
    ],
    impact:
      "Demonstrated that passively collected behavioral biomarkers can serve as early warning signals for mental health deterioration — without invasive data collection or user burden.",
    githubUrl: "https://github.com/kkfaraz",
    featured: false,
    gradient: "from-rose-500/20 via-pink-500/10 to-purple-500/20",
  },
  {
    id: "appointment-chatbot",
    title: "Healthcare Appointment Chatbot — Web Embedded",
    domain: "AI Agents",
    domainColor: "primary",
    problem:
      "Clinics with website traffic lose potential bookings when visitors can't easily schedule appointments — existing forms are static and require follow-up calls. Conversion drops by 40% after business hours.",
    approach:
      "Built an intelligent web-embedded chatbot using N8N workflow orchestration, integrated with Cal.com API for real-time slot checking and booking confirmation. The chatbot handles multi-turn conversations, collects patient intake data, and confirms appointments — all within the clinic's existing website via embeddable HTML widget.",
    models: ["Conversational LLM", "Intent Classification"],
    frameworks: ["N8N Workflows", "Cal.com API", "Webhook Integration", "HTML/JS Widget"],
    features: [
      "Embeddable chat widget — drop into any clinic website in under 5 minutes",
      "Multi-turn intake: symptom collection → doctor selection → slot booking → confirmation",
      "Real-time availability checking via Cal.com API",
      "Appointment confirmation with email/SMS via webhook triggers",
      "Fully configurable clinic knowledge base (specialties, doctors, hours)",
    ],
    results: [
      { label: "Deployment", value: "Web Embedded" },
      { label: "Integration", value: "Cal.com API" },
      { label: "Availability", value: "24/7" },
      { label: "Setup Time", value: "<5 minutes" },
    ],
    impact:
      "Converts website visitors into booked patients 24/7 — eliminating the drop-off that occurs when calling isn't possible. Deployed for healthcare clients via NexlTech.",
    githubUrl: "https://github.com/kkfaraz",
    featured: false,
    gradient: "from-teal-500/20 via-green-500/10 to-emerald-500/20",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
