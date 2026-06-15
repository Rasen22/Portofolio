import type { CSSProperties } from 'react';

export const contactCTAStyles = {
  section: {
    padding: '80px 24px',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as CSSProperties,

  container: {
    width: '100%',
    maxWidth: '1000px',
    backgroundColor: '#111111',
    borderRadius: '24px',
    border: '1px solid rgba(255, 122, 48, 0.15)',
    padding: '48px 32px 36px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 122, 48, 0.05)',
  } as CSSProperties,

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 122, 48, 0.08)',
    border: '1px solid rgba(255, 122, 48, 0.2)',
    borderRadius: '20px',
    padding: '6px 16px',
    fontSize: '11px',
    fontWeight: 600,
    color: '#FF7A30',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '28px',
  } as CSSProperties,

  title: {
    fontSize: '38px',
    fontWeight: 700,
    color: '#E9E3DF',
    margin: '0 0 16px 0',
    lineHeight: '1.25',
    letterSpacing: '-0.02em',
  } as CSSProperties,

  titleItalic: {
    color: '#FF7A30',
    fontStyle: 'italic',
  } as CSSProperties,

  subtitle: {
    fontSize: '15px',
    color: 'rgba(233, 227, 223, 0.6)',
    lineHeight: '1.6',
    maxWidth: '650px',
    margin: '0 0 36px 0',
  } as CSSProperties,

  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    width: '100%',
  } as CSSProperties,

  whatsappBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
    textDecoration: 'none',
  } as CSSProperties,

  emailBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#ffffff',
    color: '#0f0f0f',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 14px rgba(255, 255, 255, 0.1)',
    textDecoration: 'none',
  } as CSSProperties,

  projectsBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'transparent',
    color: '#E9E3DF',
    border: '1px solid rgba(233, 227, 223, 0.25)',
    borderRadius: '30px',
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  } as CSSProperties,

  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(233, 227, 223, 0.08)',
    margin: '40px 0 24px',
  } as CSSProperties,

  features: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '24px 36px',
  } as CSSProperties,

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: 'rgba(233, 227, 223, 0.55)',
  } as CSSProperties,

  featureText: {
    fontWeight: 500,
  } as CSSProperties,
};

export const contactCTAMobileStyles = {
  container: {
    padding: '36px 20px 28px',
    borderRadius: '20px',
  } as CSSProperties,

  title: {
    fontSize: '28px',
  } as CSSProperties,

  subtitle: {
    fontSize: '14px',
    marginBottom: '28px',
  } as CSSProperties,

  divider: {
    margin: '32px 0 20px',
  } as CSSProperties,

  features: {
    gap: '16px 24px',
  } as CSSProperties,
};

export default contactCTAStyles;
