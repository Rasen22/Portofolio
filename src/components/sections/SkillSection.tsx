'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillData, sectionVariants, headerVariants, type SkillCategory, type SkillItem } from '@/logic/Logic_skill';
import { skillInlineStyles as styles, skillGlobalCSS } from '@/styles/Style_skill';
import LogoLoop from '@/components/ui/LogoLoop';
import type { LogoItem } from '@/types/logoLoop';

// Convert skill items to LogoLoop format
const convertSkillsToLogos = (skills: SkillItem[]): LogoItem[] => {
  return skills.map(skill => ({
    src: skill.icon,
    alt: skill.name,
    title: skill.name,
  }));
};

export default function SkillSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" style={styles.section}>
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={styles.container}
      >
        {/* Header */}
        <motion.div
          variants={headerVariants}
          style={styles.header}
        >
          <span style={styles.badge}>
            {skillData.badge}
          </span>
          <h2 style={styles.title}>
            {skillData.title}
          </h2>
          <p style={styles.subtitle}>
            {skillData.subtitle}
          </p>
        </motion.div>

        {/* Skills Categories with LogoLoop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {skillData.categories.map((category: SkillCategory, catIndex: number) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2, ease: 'easeOut' }}
            >
              {/* Category Title */}
              <h3 style={{
                color: '#E9E3DF',
                fontSize: '14px',
                fontWeight: 500,
                marginBottom: '32px',
                textAlign: 'center',
                letterSpacing: '0.05em',
              }}>
                {category.title}
              </h3>

              {/* LogoLoop Animation */}
              <div style={{ 
                height: '140px', 
                position: 'relative', 
                overflow: 'hidden',
              }}>
                <LogoLoop
                  logos={convertSkillsToLogos(category.skills)}
                  speed={60}
                  direction={catIndex % 2 === 0 ? 'left' : 'right'}
                  logoHeight={40}
                  gap={80}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#0a0a0a"
                  ariaLabel={`${category.title} skills`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{skillGlobalCSS}</style>
    </section>
  );
}
