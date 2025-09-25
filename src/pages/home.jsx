import { AboutSection } from "../components/aboutSection";
import { ContactSection } from "../components/contactSection";
import { HomeSection } from "../components/homeSection";
import { NavBar } from "../components/navBar";
import { ProjectsSection } from "../components/projectSection";
import { SkillsSection } from "../components/skillsSection";
import { StarBackground } from "../components/starBackground";
import { ThemeToggle } from "../components/themetoggle";
import { FooterSection } from "../components/footerSection";
import { LightModeBackground } from "../components/lightModeBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}

        <StarBackground />


      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main >
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <FooterSection />
    </div>
  );
};
