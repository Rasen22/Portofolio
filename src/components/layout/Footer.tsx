'use client';

import { motion } from 'framer-motion';
import { useFooterLogic, socialLinks } from '@/logic/Logic_footer';
import { footerStyles } from '@/styles/Style_footer';

export default function Footer() {
  const { currentYear, socialHoverAnimation, socialTapAnimation } = useFooterLogic();

  return (
    <footer id="contact" style={footerStyles.footer}>
      <div style={footerStyles.container}>
        {/* Social Media Section */}
        <div style={footerStyles.socialSection}>
          <p style={footerStyles.socialTitle}>
            Let's Connect on Social Media
          </p>
          
          <div style={footerStyles.socialLinks}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.socialLink}
                whileHover={socialHoverAnimation}
                whileTap={socialTapAnimation}
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={footerStyles.divider} />

        {/* Copyright */}
        <p style={footerStyles.copyright}>
          © {currentYear} Farhan Rasendriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
