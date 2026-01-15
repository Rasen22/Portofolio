'use client';

import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutMeSection,
  SkillSection,
  ProjectSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <HeroSection />
        <AboutMeSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
