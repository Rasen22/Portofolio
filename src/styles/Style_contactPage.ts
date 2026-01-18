// Contact Page Styles
import { CSSProperties } from 'react';

export const contactPageStyles: Record<string, CSSProperties> = {
  // Main container
  page: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    flexDirection: 'column',
  },
  
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px 80px',
  },

  container: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },

  // Header
  header: {
    textAlign: 'center' as const,
  },

  title: {
    fontSize: '42px',
    fontWeight: 700,
    color: '#E9E3DF',
    marginBottom: '12px',
    letterSpacing: '-1px',
  },

  subtitle: {
    fontSize: '15px',
    color: 'rgba(233, 227, 223, 0.6)',
    maxWidth: '400px',
    lineHeight: 1.6,
  },

  // Form Card
  formCard: {
    width: '100%',
    backgroundColor: 'rgba(20, 20, 20, 0.6)',
    border: '1px solid rgba(255, 122, 48, 0.2)',
    borderRadius: '16px',
    padding: '32px',
    backdropFilter: 'blur(10px)',
  },

  // Form Grid
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },

  formGridFullWidth: {
    gridColumn: '1 / -1',
  },

  // Form Fields
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },

  label: {
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgba(233, 227, 223, 0.7)',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
  },

  input: {
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    border: '1px solid rgba(255, 122, 48, 0.15)',
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '14px',
    color: '#E9E3DF',
    outline: 'none',
    transition: 'all 0.3s ease',
  },

  inputFocus: {
    borderColor: 'rgba(255, 122, 48, 0.5)',
    boxShadow: '0 0 0 3px rgba(255, 122, 48, 0.1)',
  },

  textarea: {
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    border: '1px solid rgba(255, 122, 48, 0.15)',
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '14px',
    color: '#E9E3DF',
    outline: 'none',
    transition: 'all 0.3s ease',
    resize: 'vertical' as const,
    minHeight: '120px',
    fontFamily: 'inherit',
  },

  // Button
  button: {
    width: '100%',
    marginTop: '8px',
    padding: '16px 24px',
    backgroundColor: 'transparent',
    border: '2px solid #FF7A30',
    borderRadius: '50px',
    color: '#FF7A30',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
  },

  buttonHover: {
    backgroundColor: 'rgba(255, 122, 48, 0.1)',
  },

  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  // Social Section
  socialSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '16px',
    marginTop: '16px',
  },

  socialTitle: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'rgba(233, 227, 223, 0.5)',
    letterSpacing: '2px',
  },

  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  socialLink: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '1px solid rgba(233, 227, 223, 0.3)',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(233, 227, 223, 0.7)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },

  socialLinkHover: {
    borderColor: '#FF7A30',
    color: '#FF7A30',
    transform: 'scale(1.1)',
  },

  // Success Message
  successMessage: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    border: '1px solid rgba(76, 175, 80, 0.3)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#4CAF50',
    fontSize: '14px',
    textAlign: 'center' as const,
    marginBottom: '16px',
  },

  // Error Message
  errorMessage: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    border: '1px solid rgba(244, 67, 54, 0.3)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#F44336',
    fontSize: '14px',
    textAlign: 'center' as const,
    marginBottom: '16px',
  },
};

// Responsive styles for mobile
export const contactPageMobileStyles: Record<string, CSSProperties> = {
  main: {
    padding: '100px 16px 60px',
  },

  title: {
    fontSize: '32px',
  },

  formCard: {
    padding: '24px',
  },

  formGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
};

export default contactPageStyles;
