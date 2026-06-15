'use client';

import { Navbar, Footer } from '@/components/layout';
import {
  SkillSection,
  ProjectSection,
  ScrollytellingSection,
  ContactCTASection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <ScrollytellingSection />
        <SkillSection />
        <ProjectSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
