'use client';

import { motion } from 'framer-motion';
import { heroStyles } from '@/styles';
import { heroData, heroVariants, itemVariants, photoVariants, boxVariants } from '@/logic';

export default function HeroSection() {
  const placeholderBoxes = Array(8).fill(null);

  return (
    <section id="home" className={heroStyles.section}>
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className={heroStyles.container}
      >
        <div className={heroStyles.mainGrid}>
          {/* Photo Card - Left Side */}
          <motion.div variants={photoVariants} className={heroStyles.photoWrapper}>
            <div className={heroStyles.photoCard}>
              <span className={heroStyles.photoText}>Photo Card</span>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <div className={heroStyles.content}>
            <motion.div variants={itemVariants}>
              <span className={heroStyles.badge}>{heroData.badge}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className={heroStyles.greeting}>
              {heroData.greeting}{' '}
              <span className={heroStyles.nameAccent}>{heroData.name}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className={heroStyles.role}>
              {heroData.role}
            </motion.p>

            <motion.p variants={itemVariants} className={heroStyles.description}>
              {heroData.description}
            </motion.p>

            <motion.div variants={itemVariants} className={heroStyles.buttonGroup}>
              <button className={heroStyles.btnContact}>
                {heroData.buttons.contact}
              </button>
              <button className={heroStyles.btnDownload}>
                {heroData.buttons.download}
              </button>
            </motion.div>

            {/* Placeholder Boxes */}
            <motion.div variants={itemVariants} className={heroStyles.boxesWrapper}>
              <div className={heroStyles.boxesGrid}>
                {placeholderBoxes.map((_, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={boxVariants}
                    className={heroStyles.box}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
