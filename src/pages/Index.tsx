
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Set document title
  useEffect(() => {
    document.title = "Suyash Kumar Singh | Data Scientist & AI Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
