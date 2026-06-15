'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { contactCTAStyles as styles, contactCTAMobileStyles as mobileStyles } from '@/styles';

// ========== PNG/SVG ICONS ==========
const WhatsappIcon = () => (
  <img src="/Assets/Icon/whatsapp-icon.png" alt="WhatsApp" width="20" height="20" style={{ objectFit: 'contain' }} />
);

const GmailIcon = () => (
  <img src="/Assets/Icon/gmail.png" alt="Gmail" width="20" height="20" style={{ objectFit: 'contain' }} />
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ContactCTASection() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = {
    ...styles.container,
    ...(isMobile ? mobileStyles.container : {}),
  };

  const titleStyle = {
    ...styles.title,
    ...(isMobile ? mobileStyles.title : {}),
  };

  const subtitleStyle = {
    ...styles.subtitle,
    ...(isMobile ? mobileStyles.subtitle : {}),
  };

  const dividerStyle = {
    ...styles.divider,
    ...(isMobile ? mobileStyles.divider : {}),
  };

  const featuresStyle = {
    ...styles.features,
    ...(isMobile ? mobileStyles.features : {}),
  };

  return (
    <section id="contact-cta" ref={ref} style={styles.section}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={containerStyle}
      >
        {/* Badge */}
        <motion.div variants={childVariants} style={styles.badge}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#FF7A30', borderRadius: '50%' }}></span>
          GET IN TOUCH
        </motion.div>

        {/* Title */}
        <motion.h2 variants={childVariants} style={titleStyle}>
          Interested in working together? <span style={styles.titleItalic}>Let's talk.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p variants={childVariants} style={subtitleStyle}>
          Have a project in mind or want to collaborate? I'm available for freelance work and full-time opportunities. Reach out and let's build something extraordinary today.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={childVariants} style={styles.buttonGroup}>
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/6285282808785"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappBtn}
            className="cta-whatsapp-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsappIcon />
            WhatsApp
          </motion.a>

          {/* Send Email Button */}
          <motion.a
            href="mailto:farhan@example.com"
            style={styles.emailBtn}
            className="cta-email-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GmailIcon />
            Send Email
          </motion.a>

          {/* View Projects Button */}
          <Link href="/project" passHref legacyBehavior>
            <motion.a
              style={styles.projectsBtn}
              className="cta-projects-btn"
              whileHover={{ scale: 1.05, borderColor: '#FF7A30', color: '#FF7A30' }}
              whileTap={{ scale: 0.95 }}
            >
              <GridIcon />
              View Projects
            </motion.a>
          </Link>
        </motion.div>

        {/* Divider line */}
        <motion.div variants={childVariants} style={dividerStyle} />

        {/* Footer Features */}
        <motion.div variants={childVariants} style={featuresStyle}>
          {/* Feature 1 */}
          <div style={styles.featureItem}>
            <span style={{ color: '#FF7A30', display: 'flex', alignItems: 'center' }}><ClockIcon /></span>
            <span style={styles.featureText}>Reply in 24h</span>
          </div>

          {/* Feature 2 */}
          <div style={styles.featureItem}>
            <span style={{ color: '#FF7A30', display: 'flex', alignItems: 'center' }}><ShieldIcon /></span>
            <span style={styles.featureText}>No spam, ever</span>
          </div>

          {/* Feature 3 */}
          <div style={styles.featureItem}>
            <span style={{ color: '#FF7A30', display: 'flex', alignItems: 'center' }}><BriefcaseIcon /></span>
            <span style={styles.featureText}>Available for Freelance</span>
          </div>

          {/* Feature 4 */}
          <div style={styles.featureItem}>
            <span style={{ color: '#FF7A30', display: 'flex', alignItems: 'center' }}><StarIcon /></span>
            <span style={styles.featureText}>GPA 3.88 / 4.0</span>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .cta-whatsapp-btn:hover {
          background-color: #20ba56 !important;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4) !important;
        }
        .cta-email-btn:hover {
          background-color: #f2f2f2 !important;
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15) !important;
        }
        .cta-projects-btn:hover {
          box-shadow: 0 6px 20px rgba(255, 122, 48, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
