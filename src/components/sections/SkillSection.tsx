'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { skillData, sectionVariants, headerVariants, circleVariants, type SkillCategory, type SkillItem } from '@/logic/Logic_skill';
import { skillInlineStyles as styles, skillGlobalCSS } from '@/styles/Style_skill';

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

        {/* Skills Categories */}
        <div style={styles.skillsGrid} className="skills-grid">
          {skillData.categories.map((category: SkillCategory, catIndex: number) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              {/* Category Title */}
              <h3 style={styles.categoryTitle}>
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div style={styles.skillsContainer}>
                {category.skills.map((skill: SkillItem, skillIndex: number) => (
                  <motion.div
                    key={skillIndex}
                    variants={circleVariants}
                    custom={skillIndex}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={styles.skillItem}
                  >
                    {/* Circle with Icon */}
                    <div style={styles.skillCircle}>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={36}
                        height={36}
                        style={styles.skillIcon}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Label */}
                    <span style={styles.skillLabel}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{skillGlobalCSS}</style>
    </section>
  );
}
