// Footer Styles

export const footerStyles = {
  // Main Footer
  footer: {
    backgroundColor: '#0a0a0a',
    borderTop: '1px solid rgba(255, 122, 48, 0.1)',
    padding: '48px 24px 32px',
  },
  
  // Container
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '24px',
  },
  
  // Social Section
  socialSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '16px',
  },
  
  socialTitle: {
    color: '#E9E3DF',
    fontSize: '15px',
    fontWeight: 500,
    fontStyle: 'italic',
  },
  
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  
  socialLink: {
    color: 'rgba(233, 227, 223, 0.7)',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Divider
  divider: {
    width: '100%',
    maxWidth: '200px',
    height: '1px',
    backgroundColor: 'rgba(233, 227, 223, 0.1)',
  },
  
  // Copyright
  copyright: {
    color: 'rgba(233, 227, 223, 0.5)',
    fontSize: '13px',
    textAlign: 'center' as const,
  },
};

export default footerStyles;
