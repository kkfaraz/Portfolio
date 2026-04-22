import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraz KK | AI & Machine Learning Engineer",
  description:
    "I build production-grade AI systems — Computer Vision pipelines, ML models, AI agents, and data solutions that solve real-world problems. Specialized in PyTorch, HuggingFace, OpenCV, and LLM agents. Available for freelance on Fiverr & LinkedIn.",
  keywords: [
    "Machine Learning Engineer",
    "AI Developer",
    "Computer Vision",
    "Deep Learning",
    "Python Developer",
    "Data Science Freelancer",
    "Fiverr AI Developer",
    "PyTorch Engineer",
    "AI Agent Developer",
    "HuggingFace",
    "LLM Development",
    "Freelance ML Engineer",
    "Open-vocabulary detection",
    "Grounding DINO",
  ],
  authors: [{ name: "Muhammad Faraz", url: "https://github.com/kkfaraz" }],
  creator: "Muhammad Faraz",
  openGraph: {
    title: "Muhammad Faraz | AI & Machine Learning Engineer",
    description:
      "Production-grade AI systems: CV pipelines, ML models, AI agents, data solutions. Available for freelance.",
    type: "website",
    locale: "en_US",
    url: "https://faraz-portfolio.vercel.app",
    siteName: "Muhammad Faraz — AI Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faraz | AI & Machine Learning Engineer",
    description:
      "Production-grade AI systems: CV pipelines, ML models, AI agents, data solutions.",
    creator: "@farazkk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
