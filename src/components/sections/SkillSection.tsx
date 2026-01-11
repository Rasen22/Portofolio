'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillStyles } from '@/styles';
import { skillData, sectionVariants, headerVariants, circleVariants } from '@/logic/Logic_skill';

export default function SkillSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className={skillStyles.section}>
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={skillStyles.container}
      >
        {/* Header */}
        <motion.div variants={headerVariants} className={skillStyles.header}>
          <span className={skillStyles.badge}>{skillData.badge}</span>
          <h2 className={skillStyles.title}>{skillData.title}</h2>
          <p className={skillStyles.subtitle}>{skillData.subtitle}</p>
        </motion.div>

        {/* Skills Grid with vertical divider */}
        <div className={skillStyles.gridWrapper}>
          {/* Vertical Divider */}
          <div className={skillStyles.verticalDivider} />
          
          <div className={skillStyles.grid}>
            {skillData.categories.map((category, catIndex) => (
              <div key={catIndex} className={skillStyles.category}>
                <div className={skillStyles.categoryHeader}>
                  <span className={skillStyles.categoryTitle}>{category.title}</span>
                </div>
                <div className={skillStyles.circlesGrid}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      custom={catIndex * 8 + skillIndex}
                      variants={circleVariants}
                      className={skill.filled ? skillStyles.circleFilled : skillStyles.circleEmpty}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill.name && (
                        <span className={skillStyles.circleText}>{skill.name}</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
