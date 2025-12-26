'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks';
import { 
  SkeletonModel, 
  SkeletonParticles, 
  SkeletonSkills, 
  SkeletonProjects,
  FallbackHeroImage,
  FallbackParticles 
} from '@/components/ui';

// Lazy load heavy components with proper skeletons
const Hero3DModel = dynamic(() => import('@/components/hero/Hero3DModel'), {
  ssr: false,
  loading: () => <SkeletonModel />,
});

const HeroContent = dynamic(() => import('@/components/hero/HeroContent'), {
  ssr: false,
});

const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection'),
  { 
    ssr: false,
    loading: () => (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SkeletonSkills />
        </div>
      </section>
    ),
  }
);

const LatestProjects = dynamic(
  () => import('@/components/sections/LatestProjects'),
  { 
    ssr: false,
    loading: () => (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SkeletonProjects />
        </div>
      </section>
    ),
  }
);

const ParticlesBackground = dynamic(
  () => import('@/components/animations/ParticlesBackground'),
  { 
    ssr: false,
    loading: () => <SkeletonParticles />,
  }
);

export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        {isMobile ? (
          <FallbackParticles />
        ) : (
          <ParticlesBackground className="opacity-30" />
        )}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />

        {/* Main Content Container */}
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Grid: 2 columns - LEFT: 3D Model, RIGHT: Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
            
            {/* LEFT COLUMN: 3D Model / Animation */}
            <motion.div
              className="flex items-center justify-center lg:justify-start order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                {isMobile ? <FallbackHeroImage /> : <Hero3DModel />}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Text Content */}
            <motion.div
              className="flex flex-col justify-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeroContent />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Latest Projects Section */}
      <LatestProjects />

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Amazing</span>{' '}
              Together
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can
              work together to bring your ideas to life.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-black font-semibold group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
