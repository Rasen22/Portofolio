'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { heroData, itemVariants, photoVariants } from '@/logic/Logic_hero';
import { heroInlineStyles as styles, heroGlobalCSS } from '@/styles/Style_hero';

export default function HeroSection() {
  return (
    <section id="home" style={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={styles.container}
      >
        <div style={styles.mainGrid} className="hero-grid">
          {/* Content - Left Side */}
          <div style={styles.content}>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span style={styles.badge}>
                {heroData.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={styles.greeting}
            >
              {heroData.greeting}
              <br />
              <span style={styles.nameAccent}>{heroData.name}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={styles.role}
            >
              {heroData.role}
            </motion.p>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={styles.buttonGroup}
            >
              <a
                href="/Assets/CV Farhan Rasendriya.pdf"
                download="CV Farhan Rasendriya.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button
                  style={styles.btnDownload}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff8c4a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF7A30';
                  }}
                >
                  {heroData.buttons.download}
                </button>
              </a>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  style={styles.btnContact}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF7A30';
                    e.currentTarget.style.color = '#FF7A30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#444';
                    e.currentTarget.style.color = '#E9E3DF';
                  }}
                >
                  {heroData.buttons.contact}
                </button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={styles.statsWrapper}
            >
              <div style={styles.statsGrid}>
                {heroData.stats.map((stat) => (
                  <div key={stat.label} style={styles.statItem}>
                    {/* Icon */}
                    {stat.icon && (
                      <div style={styles.statIcon}>
                        <span style={styles.statIconText}>{stat.icon}</span>
                      </div>
                    )}
                    {/* Text */}
                    <div>
                      <div style={styles.statValue}>{stat.value}</div>
                      <div style={styles.statLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Photo Card - Right Side */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            style={styles.photoWrapper}
          >
            <div style={styles.photoCard}>
              {/* Glow Effect */}
              <div style={styles.photoGlowOuter} />
              {/* Card */}
              <div style={styles.photoCardInner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Assets/Profile/Profile1.jpg"
                  alt="Farhan Rasendriya"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
                {/* Gradient Overlay */}
                <div style={styles.photoGlow} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{heroGlobalCSS}</style>
    </section>
  );
}
