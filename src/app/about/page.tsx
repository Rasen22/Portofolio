'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { useAboutLogic } from '@/logic/Logic_about';
import { aboutStyles as styles } from '@/styles/Style_about';

export default function AboutPage() {
  const { aboutData, parseDescription } = useAboutLogic();

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <section id="about" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={styles.container}
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={styles.breadcrumb}
            >
              <Link href="/" style={styles.breadcrumbHome}>
                {aboutData.breadcrumb.home}
              </Link>
              <span style={styles.breadcrumbSeparator}>|</span>
              <span style={styles.breadcrumbCurrent}>
                {aboutData.breadcrumb.current}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={styles.title}
            >
              {aboutData.title.text}{' '}
              <span style={styles.titleHighlight}>{aboutData.title.highlight}</span>
            </motion.h1>

            {/* Main Content Grid */}
            <div style={styles.contentGrid}>
              {/* Left Content - Description */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={styles.leftContent}
              >
                {aboutData.description.map((paragraph, index) => (
                  <p key={index} style={styles.description}>
                    {parseDescription(paragraph).map((part, i) => (
                      part.isHighlight ? (
                        <span key={i} style={styles.descriptionHighlight}>
                          {part.text}
                        </span>
                      ) : (
                        <span key={i}>{part.text}</span>
                      )
                    ))}
                  </p>
                ))}

                {/* Personal Details Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={styles.detailsCard}
                >
                  <div style={styles.detailsTitle}>
                    <span style={styles.detailsIcon}></span>
                    {aboutData.personalDetails.title}
                  </div>

                  <div style={styles.detailsGrid}>
                    {/* Location */}
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>
                        {aboutData.personalDetails.location.label}
                      </span>
                      <span style={styles.detailValue}>
                        <span style={styles.detailValueIcon}>●</span>
                        {aboutData.personalDetails.location.value}
                      </span>
                    </div>

                    {/* Education */}
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>
                        {aboutData.personalDetails.education.label}
                      </span>
                      <span style={styles.detailValue}>
                        <span style={styles.detailValueIcon}>●</span>
                        {aboutData.personalDetails.education.value}
                      </span>
                    </div>

                    {/* Languages */}
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>
                        {aboutData.personalDetails.languages.label}
                      </span>
                      <span style={styles.detailValue}>
                        <span style={styles.detailValueIcon}>●</span>
                        {aboutData.personalDetails.languages.value}
                      </span>
                    </div>

                    {/* Interests */}
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>
                        {aboutData.personalDetails.interests.label}
                      </span>
                      <div style={{ ...styles.detailValue, flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                        {aboutData.personalDetails.interests.value.split(', ').map((interest, i) => (
                          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={styles.detailValueIcon}>●</span>
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div style={styles.buttonGroup}>
                    <motion.a
                      href="/Assets/CV Farhan Rasendriya.pdf"
                      download="CV Farhan Rasendriya.pdf"
                      style={styles.btnPrimary}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 25px rgba(255, 122, 48, 0.5)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>↓</span>
                      {aboutData.buttons.download}
                    </motion.a>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        borderColor: '#FF7A30',
                        color: '#FF7A30',
                        boxShadow: '0 0 20px rgba(255, 122, 48, 0.3)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href="/contact" style={styles.btnSecondary}>
                        <span>✉</span>
                        {aboutData.buttons.contact}
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Photo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={styles.rightContent}
              >
                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  style={styles.experienceBadge}
                >
                  <span style={styles.experienceValue}>
                    {aboutData.experienceBadge.value}
                  </span>
                  <span style={styles.experienceLabel}>
                    {aboutData.experienceBadge.label}
                  </span>
                </motion.div>

                {/* Photo */}
                <div style={styles.photoContainer}>
                  <Image
                    src="/Assets/Profile/Profile1.jpg"
                    alt="Profile"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>

                {/* Quote */}
                <p style={styles.quote}>
                  {aboutData.quote.text}{' '}
                  <span style={styles.quoteHighlight}>{aboutData.quote.highlight}</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
