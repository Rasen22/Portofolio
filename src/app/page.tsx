'use client';

import { Navbar, Footer } from '@/components/layout';
import {
  SkillSection,
  ProjectSection,
  ScrollytellingSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <ScrollytellingSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
}
