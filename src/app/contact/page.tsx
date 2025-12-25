'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactStyles } from '@/styles';
import {
  contactSchema,
  socialContactLinks,
  getContactIcon,
  generateDots,
  drawWorldMapCanvas,
  submitContactForm,
  locationInfo,
  footerText,
  type ContactFormData,
  type Dot,
} from '@/logic';

// Animated World Map Component
function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dotsRef.current = generateDots(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation loop
    let animationId: number;
    const animate = () => {
      drawWorldMapCanvas(ctx, dotsRef.current, mousePos, canvas.width);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className={contactStyles.worldMap.canvas}
      onMouseMove={handleMouseMove}
      aria-label="Interactive world map visualization"
    />
  );
}

// Input Field Component
function InputField({
  label,
  type = 'text',
  error,
  ...props
}: {
  label: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);

  const getInputClassName = () => {
    const base = contactStyles.inputField.input.base;
    if (error) return `${base} ${contactStyles.inputField.input.error}`;
    if (isFocused) return `${base} ${contactStyles.inputField.input.focused}`;
    return `${base} ${contactStyles.inputField.input.default}`;
  };

  return (
    <div className={contactStyles.inputField.wrapper}>
      <label className={contactStyles.inputField.label}>{label}</label>
      <div className={contactStyles.inputField.inputWrapper}>
        <input
          type={type}
          className={getInputClassName()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {/* Gradient border on focus */}
        <motion.div
          className={contactStyles.inputField.gradientLine}
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          className={contactStyles.inputField.errorText}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

// Textarea Component
function TextArea({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [isFocused, setIsFocused] = useState(false);

  const getTextareaClassName = () => {
    const base = contactStyles.textarea.base;
    if (error) return `${base} ${contactStyles.inputField.input.error}`;
    if (isFocused) return `${base} ${contactStyles.inputField.input.focused}`;
    return `${base} ${contactStyles.inputField.input.default}`;
  };

  return (
    <div className={contactStyles.inputField.wrapper}>
      <label className={contactStyles.inputField.label}>{label}</label>
      <div className={contactStyles.inputField.inputWrapper}>
        <textarea
          className={getTextareaClassName()}
          rows={4}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <motion.div
          className={contactStyles.inputField.gradientLine}
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          className={contactStyles.inputField.errorText}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

// Social Link Component
function SocialLink({
  iconPath,
  label,
  href,
  handle,
}: {
  iconPath: string;
  label: string;
  href: string;
  handle: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={contactStyles.socialLink.container}
      whileHover={{ scale: 1.02, x: 10 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={contactStyles.socialLink.iconWrapper}>
        <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
          <path d={iconPath} />
        </svg>
      </div>
      <div>
        <p className={contactStyles.socialLink.labelText}>{label}</p>
        <p className={contactStyles.socialLink.handleText}>
          {handle}
        </p>
      </div>
    </motion.a>
  );
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await submitContactForm(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className={contactStyles.container}>
      {/* Background Effects */}
      <div className={contactStyles.background.orbCyan} />
      <div className={contactStyles.background.orbPurple} />

      <div className={contactStyles.contentContainer}>
        {/* Header */}
        <motion.div
          className={contactStyles.header.container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={contactStyles.header.label}>
            Get In Touch
          </span>
          <h1 className={contactStyles.header.heading}>
            Let&apos;s{' '}
            <span className={contactStyles.header.gradientText}>
              Connect
            </span>
          </h1>
        </motion.div>

        {/* Two Column Layout */}
        <div className={contactStyles.grid}>
          {/* Left: Contact Form */}
          <motion.div
            className={contactStyles.formCard.container}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={contactStyles.formCard.heading}>Send a Message</h2>
            <p className={contactStyles.formCard.description}>
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>

            {isSubmitted ? (
              <motion.div
                className={contactStyles.successMessage.container}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className={contactStyles.successMessage.iconWrapper}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className={contactStyles.successMessage.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className={contactStyles.successMessage.heading}>Message Sent!</h3>
                <p className={contactStyles.successMessage.text}>I&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={contactStyles.formCard.form}>
                <InputField
                  label="Name"
                  placeholder="John Doe"
                  {...register('name')}
                  error={errors.name?.message}
                />
                <InputField
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />
                <TextArea
                  label="Message"
                  placeholder="Tell me about your project..."
                  {...register('message')}
                  error={errors.message?.message}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={contactStyles.submitButton.base}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={contactStyles.submitButton.content}>
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className={contactStyles.submitButton.spinner}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        BROADCAST SIGNAL
                        <svg className={contactStyles.submitButton.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right: Map and Contact Info */}
          <motion.div
            className={contactStyles.rightColumn}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* World Map */}
            <div className={contactStyles.worldMap.container}>
              <WorldMap />
              <div className={contactStyles.worldMap.overlay} />
            </div>

            {/* Contact Info */}
            <div className={contactStyles.contactInfo.container}>
              <h2 className={contactStyles.contactInfo.heading}>Direct Contact</h2>
              
              <div className={contactStyles.contactInfo.list}>
                {socialContactLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    iconPath={getContactIcon(link.iconType)}
                    label={link.label}
                    href={link.href}
                    handle={link.handle}
                  />
                ))}
              </div>
            </div>

            {/* Location */}
            <div className={contactStyles.location.container}>
              <p>
                <svg className="inline-block w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locationInfo.primary}
              </p>
              <p>{locationInfo.secondary}</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className={contactStyles.footer.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>© {footerText}</p>
        </motion.div>
      </div>
    </div>
  );
}
