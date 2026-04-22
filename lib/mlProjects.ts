export interface MLProject {
  id: string;
  title: string;
  category: "Computer Vision" | "Healthcare" | "Tabular" | "NLP";
  type: "Classification" | "Regression" | "Distillation" | "Clustering";
  tools: string[];
  problem: string;
  pipeline: string[];
  metrics: { label: string; value: string; highlight?: boolean }[];
  comparisons: { model: string; accuracy: string; parameters?: string; note?: string }[];
  challenges: string;
  improvements: string;
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const mlProjects: MLProject[] = [
  {
    id: "medical-distillation",
    title: "Medical Foundation Model Distillation",
    category: "Healthcare",
    type: "Distillation",
    tools: ["PyTorch", "BiomedCLIP", "DINOv2", "Knowledge Distillation"],
    problem:
      "Deploying massive foundation models (like BiomedCLIP and DINOv2) for COVID-19 detection in resource-constrained hospital environments is computationally prohibitive. A lightweight, real-time inference model was required without sacrificing the high accuracy of the heavy models.",
    pipeline: [
      "Feature Extraction: Multi-teacher feature extraction using BiomedCLIP and DINOv2",
      "Knowledge Distillation: Transferring soft targets and feature maps to a lightweight CNN student model",
      "Optimization: Foundation Distilled Medical Vision Network (FD-MVNet) architecture tuning",
      "Evaluation: Assessed on high-sensitivity/specificity thresholds for clinical readiness",
    ],
    metrics: [
      { label: "Accuracy", value: "99.2%", highlight: true },
      { label: "Parameter Reduction", value: "85x", highlight: true },
      { label: "Model Size", value: "1.4 MB" },
      { label: "Inference Time", value: "<10ms" },
    ],
    comparisons: [
      { model: "Teacher Ensemble (BiomedCLIP + DINOv2)", accuracy: "99.8%", parameters: "1.2B" },
      { model: "Student Model (FD-MVNet)", accuracy: "99.2%", parameters: "14M", note: "Retained 99% of accuracy at 1% of the size" },
      { model: "Baseline ResNet-50", accuracy: "92.4%", parameters: "25M" },
    ],
    challenges:
      "Aligning the high-dimensional feature spaces of multiple distinct foundation models (text-image vs pure vision) required a custom projection head to prevent negative transfer to the student model.",
    improvements:
      "Future iteration involves quantizing the student model to INT8 for deployment on mobile edge devices directly in field clinics.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    githubUrl: "https://github.com/kkfaraz",
  },
  {
    id: "oncology-diagnostic",
    title: "Oncology Diagnostic ML Pipeline",
    category: "Tabular",
    type: "Classification",
    tools: ["Scikit-learn", "Pandas", "Decision Trees", "Naive Bayes"],
    problem:
      "Pathologists require an interpretable, fast second-opinion system for classifying breast cancer tumors (Malignant vs Benign) from cell nuclei features. Black-box models are unacceptable in this domain; interpretability is mandatory.",
    pipeline: [
      "Preprocessing: Standardization of 30 numeric cell features to handle scale variance",
      "Feature Selection: Correlation analysis to drop redundant collinear features",
      "Modeling: Parallel training of interpretable baseline models (Decision Trees, Rule-based, Naive Bayes)",
      "Evaluation: Focus on Recall/Sensitivity to eliminate false negatives in cancer diagnosis",
    ],
    metrics: [
      { label: "Recall (Malignant)", value: "97.4%", highlight: true },
      { label: "F1-Score", value: "95.8%" },
      { label: "Precision", value: "94.2%" },
    ],
    comparisons: [
      { model: "Naive Bayes (Gaussian)", accuracy: "94.1%", note: "Struggled slightly with feature collinearity" },
      { model: "Decision Tree (Max Depth 4)", accuracy: "95.8%", note: "Best interpretability, strong baseline" },
      { model: "Random Forest (Ensemble)", accuracy: "97.4%", note: "Highest recall, chosen for production" },
    ],
    challenges:
      "Balancing the trade-off between model interpretability (Decision Trees) and high recall (Ensembles). Ultimately designed an ensemble where tree splits are logged for pathologist review.",
    improvements:
      "Deploy as a FastAPI microservice integrated directly into pathology lab software systems.",
    gradient: "from-rose-500/20 via-pink-500/10 to-purple-500/20",
    githubUrl: "https://github.com/kkfaraz",
  },
  {
    id: "market-basket-engine",
    title: "Market Basket & Customer Segmentation Engine",
    category: "Tabular",
    type: "Clustering",
    tools: ["Scikit-learn", "K-Means", "Apriori", "Seaborn"],
    problem:
      "An e-commerce client needed to understand hidden purchasing patterns and segment their customer base for targeted marketing campaigns, moving away from generic bulk email blasts.",
    pipeline: [
      "Data Cleaning: Outlier removal using Z-scores and handling missing transactional data",
      "Clustering: K-Means segmentation based on Recency, Frequency, Monetary (RFM) values",
      "Association: Apriori algorithm to discover frequent itemsets (Market Basket Analysis)",
      "Visualization: PCA dimensionality reduction for 2D visual cluster inspection",
    ],
    metrics: [
      { label: "Silhouette Score", value: "0.68", highlight: true },
      { label: "Clusters Found", value: "4 Distinct Profiles" },
      { label: "Rules Generated", value: "12 High-Confidence Rules" },
    ],
    comparisons: [
      { model: "K-Means (k=4)", accuracy: "0.68 Silh.", note: "Clear separation of high-value vs churn-risk" },
      { model: "DBSCAN", accuracy: "0.45 Silh.", note: "Failed to separate dense central points" },
      { model: "Agglomerative", accuracy: "0.65 Silh.", note: "Too computationally expensive for full dataset" },
    ],
    challenges:
      "Determining the optimal number of clusters (k). Used the Elbow Method and Silhouette Analysis to mathematically justify k=4 rather than guessing.",
    improvements:
      "Integrate the association rules into a real-time recommendation API ('Customers who bought X also bought Y').",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    githubUrl: "https://github.com/kkfaraz",
  },
];
