'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  useContactForm, 
  pageAnimations, 
  socialIconMap,
  buttonHoverAnimation,
  buttonTapAnimation,
  SendIcon,
} from '@/logic/Logic_contactPage';
import { contactPageStyles, contactPageMobileStyles } from '@/styles/Style_contactPage';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const {
    formData,
    formState,
    handleInputChange,
    handleSubmit,
    isFormValid,
    contactPageData,
  } = useContactForm();

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = contactPageStyles;
  const mobileStyles = contactPageMobileStyles;

  return (
    <div style={styles.page}>
      <Navbar />
      
      <main style={{
        ...styles.main,
        ...(isMobile ? mobileStyles.main : {}),
      }}>
        <motion.div
          style={styles.container}
          variants={pageAnimations.container}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <div style={styles.header}>
            <motion.h1 
              style={{
                ...styles.title,
                ...(isMobile ? mobileStyles.title : {}),
              }}
              variants={pageAnimations.title}
            >
              {contactPageData.title}
            </motion.h1>
            <motion.p 
              style={styles.subtitle}
              variants={pageAnimations.subtitle}
            >
              {contactPageData.subtitle}
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div 
            style={{
              ...styles.formCard,
              ...(isMobile ? mobileStyles.formCard : {}),
            }}
            variants={pageAnimations.form}
          >
            {/* Success Message */}
            {formState.isSuccess && (
              <motion.div 
                style={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent! WhatsApp is opening...
              </motion.div>
            )}

            {/* Error Message */}
            {formState.error && (
              <motion.div 
                style={styles.errorMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formState.error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{
                ...styles.formGrid,
                ...(isMobile ? mobileStyles.formGrid : {}),
              }}>
                {/* Full Name & Email Row */}
                {contactPageData.formFields.slice(0, 2).map((field, index) => (
                  <motion.div
                    key={field.id}
                    style={styles.fieldGroup}
                    variants={pageAnimations.formField}
                    custom={index}
                  >
                    <label style={styles.label} htmlFor={field.id}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      required={field.required}
                      style={{
                        ...styles.input,
                        ...(focusedField === field.id ? styles.inputFocus : {}),
                      }}
                    />
                  </motion.div>
                ))}

                {/* Subject Field */}
                <motion.div
                  style={{ ...styles.fieldGroup, ...styles.formGridFullWidth }}
                  variants={pageAnimations.formField}
                  custom={2}
                >
                  <label style={styles.label} htmlFor="subject">
                    {contactPageData.formFields[2].label}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={contactPageData.formFields[2].placeholder}
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{
                      ...styles.input,
                      ...(focusedField === 'subject' ? styles.inputFocus : {}),
                    }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  style={{ ...styles.fieldGroup, ...styles.formGridFullWidth }}
                  variants={pageAnimations.formField}
                  custom={3}
                >
                  <label style={styles.label} htmlFor="message">
                    {contactPageData.formFields[3].label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={contactPageData.formFields[3].placeholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{
                      ...styles.textarea,
                      ...(focusedField === 'message' ? styles.inputFocus : {}),
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div style={styles.formGridFullWidth}>
                  <motion.button
                    type="submit"
                    style={{
                      ...styles.button,
                      ...(formState.isSubmitting || !isFormValid ? styles.buttonDisabled : {}),
                    }}
                    variants={pageAnimations.button}
                    whileHover={isFormValid && !formState.isSubmitting ? buttonHoverAnimation : {}}
                    whileTap={isFormValid && !formState.isSubmitting ? buttonTapAnimation : {}}
                    disabled={formState.isSubmitting || !isFormValid}
                  >
                    {formState.isSubmitting ? 'Sending...' : contactPageData.buttonText}
                    <SendIcon />
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            style={styles.socialSection}
            variants={pageAnimations.social}
          >
            <p style={styles.socialTitle}>{contactPageData.socialTitle}</p>
            <div style={styles.socialLinks}>
              {contactPageData.socialLinks.map((social, index) => {
                const IconComponent = socialIconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialLink}
                    variants={pageAnimations.socialIcon}
                    custom={index}
                    whileHover={{
                      scale: 1.1,
                      borderColor: '#FF7A30',
                      color: '#FF7A30',
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {IconComponent && <IconComponent />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
