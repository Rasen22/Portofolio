// Contact Page Logic
'use client';

import React, { useState, useCallback } from 'react';
import { Variants } from 'framer-motion';
import { ContactFormData, ContactPageData, ContactFormState } from '@/types/contact';

// ========== ICON COMPONENTS ==========
export const LinkedinIcon = () => (
  <img src="/Assets/Icon/linkedin.png" alt="LinkedIn" width="24" height="24" style={{ objectFit: 'contain' }} />
);

export const GithubIcon = () => (
  <img src="/Assets/Icon/github_dark.png" alt="GitHub" width="24" height="24" style={{ objectFit: 'contain' }} />
);

export const WhatsappIcon = () => (
  <img src="/Assets/Icon/whatsapp-icon.png" alt="WhatsApp" width="24" height="24" style={{ objectFit: 'contain' }} />
);

export const EmailIcon = () => (
  <img src="/Assets/Icon/gmail.png" alt="Email" width="24" height="24" style={{ objectFit: 'contain' }} />
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
  whatsapp: WhatsappIcon,
  email: EmailIcon,
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
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/6285282808785' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/farhan-rasendriya-319718352' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Rasen22' },
    { name: 'Email', icon: 'email', url: 'mailto:farhan@example.com' },
  ],
  whatsappNumber: '6285282808785',
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
    const whatsappMessage = encodeURIComponent(
      `Nama : ${fullName}\nEmail : ${email}\nSubject : ${subject}\nMessage : ${message}`
    );
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
