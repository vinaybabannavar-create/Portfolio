import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vinay Babannavar | AI Systems Builder & Full-Stack Engineer",
  description:
    "Engineering intelligent systems. Crafting digital experiences. Portfolio of Vinay Babannavar — AI systems builder, LangGraph agentic workflows, self-healing DevOps agent, and full-stack engineer based in Bengaluru, India.",
  keywords: [
    "Vinay Babannavar",
    "AI Systems Builder",
    "Full-Stack Engineer",
    "LangGraph",
    "Corrective RAG",
    "Agentic AI",
    "Three.js Portfolio",
    "FastAPI",
    "Next.js",
    "Bengaluru Software Engineer",
    "T. John Institute of Technology",
  ],
  authors: [{ name: "Vinay Babannavar", url: "https://github.com/vinaybabannavar-create" }],
  creator: "Vinay Babannavar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinaybabannavar.dev",
    title: "Vinay Babannavar | AI Systems Builder & Full-Stack Engineer",
    description:
      "Engineering intelligent systems. Crafting digital experiences. Explore flagship builds: Jenkins Self-Healing DevOps Agent, Neural Nexus Corrective RAG, and MedStock GST Suite.",
    siteName: "Vinay Babannavar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Babannavar | AI Systems Builder & Full-Stack Engineer",
    description:
      "Engineering intelligent systems. Crafting digital experiences. Explore flagship builds: Jenkins Self-Healing DevOps Agent, Neural Nexus Corrective RAG, and MedStock GST Suite.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-obsidian text-ivory antialiased selection:bg-lime-accent selection:text-obsidian`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
