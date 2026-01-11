'use client';

import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  SkillSection,
  ProjectSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
