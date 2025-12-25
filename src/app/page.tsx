'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { homeStyles } from '@/styles';

// Lazy load heavy components
const Hero3DModel = dynamic(() => import('@/components/hero/Hero3DModel'), {
  ssr: false,
  loading: () => (
    <div className={homeStyles.loadingContainer}>
      <div className={homeStyles.loadingSpinner} />
    </div>
  ),
});

const HeroContent = dynamic(() => import('@/components/hero/HeroContent'), {
  ssr: false,
});

const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection'),
  { ssr: false }
);

const LatestProjects = dynamic(
  () => import('@/components/sections/LatestProjects'),
  { ssr: false }
);

const ParticlesBackground = dynamic(
  () => import('@/components/animations/ParticlesBackground'),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className={homeStyles.container}>
      {/* Hero Section */}
      <section id="home" className={homeStyles.hero.section}>
        {/* Background Effects */}
        <ParticlesBackground className={homeStyles.particles} />
        
        {/* Gradient Orbs */}
        <div className={homeStyles.hero.gradientOrbCyan} />
        <div className={homeStyles.hero.gradientOrbPurple} />

        <div className={homeStyles.hero.contentContainer}>
          {/* Split Layout: Content Left, 3D Right */}
          <div className={homeStyles.hero.gridLayout}>
            {/* Left: Content - Shows second on mobile */}
            <motion.div
              className={homeStyles.hero.leftContent}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroContent />
            </motion.div>

            {/* Right: 3D Model - Shows first on mobile */}
            <motion.div
              className={homeStyles.hero.rightContent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Hero3DModel />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className={homeStyles.scrollIndicator.container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className={homeStyles.scrollIndicator.text}>Scroll Down</span>
          <motion.div
            className={homeStyles.scrollIndicator.wheel}
            animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(0,243,255,0.5)', 'rgba(255,255,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className={homeStyles.scrollIndicator.dot}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Latest Projects Section */}
      <LatestProjects />

      {/* CTA Section */}
      <section className={homeStyles.cta.section}>
        {/* Background gradient */}
        <div className={homeStyles.cta.bgGradient} />
        
        <div className={homeStyles.cta.contentContainer}>
          <motion.div
            className={homeStyles.cta.innerContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={homeStyles.cta.heading}>
              Let&apos;s Build Something{' '}
              <span className={homeStyles.cta.gradientText}>Amazing</span>{' '}
              Together
            </h2>
            <p className={homeStyles.cta.description}>
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can
              work together to bring your ideas to life.
            </p>
            <motion.a
              href="/contact"
              className={homeStyles.cta.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <svg
                className={homeStyles.cta.buttonIcon}
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
