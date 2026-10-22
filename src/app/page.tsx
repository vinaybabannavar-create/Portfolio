import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ArchitectureVisualizer from "@/components/projects/ArchitectureVisualizer";
import AboutSection from "@/components/about/AboutSection";
import ResearchSection from "@/components/research/ResearchSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import GithubSection from "@/components/github/GithubSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-ivory relative selection:bg-lime-accent selection:text-obsidian">
      {/* Precision architectural layout */}
      <Navbar />
      <HeroSection />
      <ProjectGallery />
      <ArchitectureVisualizer />
      <AboutSection />
      <ResearchSection />
      <SkillsSection />
      <ExperienceTimeline />
      <GithubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
