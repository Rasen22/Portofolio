// Contact Page Logic
'use client';

import React, { useState, useCallback } from 'react';
import { Variants } from 'framer-motion';
import { ContactFormData, ContactPageData, ContactFormState } from '@/types/contact';

// ========== ICON COMPONENTS ==========
export const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
  </svg>
);

// Icon mapping
export const socialIconMap: Record<string, React.FC> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
};

// ========== PAGE DATA ==========
export const contactPageData: ContactPageData = {
  title: 'Get In Touch',
  subtitle: "Have a project in mind? Let's build something extraordinary together.",
  formFields: [
    { id: 'fullName', label: 'FULL NAME', placeholder: 'John Doe', type: 'text', required: true },
    { id: 'email', label: 'EMAIL ADDRESS', placeholder: 'hello@example.com', type: 'email', required: true },
    { id: 'subject', label: 'SUBJECT', placeholder: 'New Project Proposal', type: 'text', required: true },
    { id: 'message', label: 'MESSAGE', placeholder: 'Tell me about your vision...', type: 'textarea', required: true },
  ],
  buttonText: 'Send Message',
  socialTitle: 'FIND ME ON SOCIAL',
  socialLinks: [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Rasen22' },
    { name: 'Twitter', icon: 'twitter', url: 'https://x.com/' },
  ],
  whatsappNumber: '6281234567890', // Ganti dengan nomor WhatsApp yang benar
};

// ========== ANIMATIONS ==========
export const pageAnimations: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  title: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  subtitle: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  },
  form: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  },
  formField: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  },
  button: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.5 },
    },
  },
  social: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.6 },
    },
  },
  socialIcon: {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.7 + i * 0.1, duration: 0.3 },
    }),
  },
};

// Button hover animation
export const buttonHoverAnimation = {
  scale: 1.02,
  boxShadow: '0 0 30px rgba(255, 122, 48, 0.4)',
};

export const buttonTapAnimation = {
  scale: 0.98,
};

export const socialIconHoverAnimation = {
  scale: 1.1,
  color: '#FF7A30',
};

// ========== HOOK ==========
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const generateWhatsAppMessage = useCallback(() => {
    const { fullName, email, subject, message } = formData;
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${message}`;
    return whatsappMessage;
  }, [formData]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setFormState(prev => ({ ...prev, error: 'Please fill in all fields' }));
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    // Generate WhatsApp URL
    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${contactPageData.whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form after delay
    setTimeout(() => {
      setFormState({ isSubmitting: false, isSuccess: true, error: null });
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSuccess: false }));
      }, 3000);
    }, 500);
  }, [formData, generateWhatsAppMessage]);

  const isFormValid = formData.fullName && formData.email && formData.subject && formData.message;

  return {
    formData,
    formState,
    handleInputChange,
    handleSubmit,
    isFormValid,
    contactPageData,
  };
};

export default {
  contactPageData,
  pageAnimations,
  useContactForm,
  socialIconMap,
};
