// About Section Styles

export const aboutStyles = {
  // Section
  section: {
    padding: '40px 24px 60px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },

  // Breadcrumb
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '32px',
    fontSize: '13px',
  },
  breadcrumbHome: {
    color: 'rgba(233, 227, 223, 0.5)',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  breadcrumbSeparator: {
    color: 'rgba(233, 227, 223, 0.3)',
  },
  breadcrumbCurrent: {
    color: '#FF7A30',
    fontWeight: 500,
  },

  // Title
  title: {
    fontSize: 'clamp(36px, 5vw, 48px)',
    fontWeight: 700,
    color: '#E9E3DF',
    marginBottom: '32px',
    lineHeight: 1.2,
  },
  titleHighlight: {
    color: '#FF7A30',
  },

  // Main Content Grid
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 350px',
    gap: '48px',
    alignItems: 'start',
  },

  // Left Content
  leftContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  description: {
    color: 'rgba(233, 227, 223, 0.7)',
    fontSize: '14px',
    lineHeight: 1.8,
    margin: 0,
  },
  descriptionHighlight: {
    color: '#FF7A30',
    fontWeight: 500,
  },

  // Right Content (Photo Area)
  rightContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
    position: 'relative' as const,
  },
  experienceBadge: {
    position: 'absolute' as const,
    top: '-10px',
    right: '0',
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
    padding: '12px 16px',
    borderRadius: '8px',
    textAlign: 'center' as const,
    zIndex: 10,
  },
  experienceValue: {
    fontSize: '24px',
    fontWeight: 700,
    display: 'block',
    lineHeight: 1,
  },
  experienceLabel: {
    fontSize: '10px',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginTop: '4px',
    display: 'block',
  },
  photoContainer: {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    border: '4px solid #1e4976',
    overflow: 'hidden',
    position: 'relative' as const,
    boxShadow: '0 0 40px rgba(30, 73, 118, 0.3)',
  },
  quote: {
    color: 'rgba(233, 227, 223, 0.6)',
    fontSize: '13px',
    fontStyle: 'italic' as const,
    textAlign: 'center' as const,
    maxWidth: '280px',
    lineHeight: 1.6,
  },
  quoteHighlight: {
    color: '#FF7A30',
  },

  // Personal Details Card
  detailsCard: {
    backgroundColor: '#111',
    border: '1px solid #222',
    borderRadius: '16px',
    padding: '24px',
    marginTop: '40px',
  },
  detailsTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#E9E3DF',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '20px',
  },
  detailsIcon: {
    fontSize: '16px',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginBottom: '24px',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  detailLabel: {
    color: 'rgba(233, 227, 223, 0.4)',
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  },
  detailValue: {
    color: '#E9E3DF',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  detailValueIcon: {
    color: '#FF7A30',
    fontSize: '12px',
  },

  // Buttons
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  btnPrimary: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
    fontSize: '12px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  btnSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    backgroundColor: 'transparent',
    color: '#E9E3DF',
    fontSize: '12px',
    fontWeight: 600,
    border: '1px solid #333',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },

  // Social Links
  socialSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginTop: '60px',
    paddingTop: '40px',
    borderTop: '1px solid #1a1a1a',
  },
  socialLink: {
    color: 'rgba(233, 227, 223, 0.5)',
    fontSize: '13px',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },

  // Footer
  footer: {
    textAlign: 'center' as const,
    marginTop: '40px',
    paddingTop: '24px',
    color: 'rgba(233, 227, 223, 0.3)',
    fontSize: '12px',
  },
};

export default aboutStyles;
