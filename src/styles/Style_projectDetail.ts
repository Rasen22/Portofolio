// Project Detail Page Styles

export const projectDetailStyles = {
  // Main Section
  section: {
    padding: '80px 24px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  // Back Button
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '1px solid rgba(233, 227, 223, 0.2)',
    borderRadius: '8px',
    color: '#E9E3DF',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    marginBottom: '32px',
  },
  backButtonHover: {
    borderColor: '#FF7A30',
    color: '#FF7A30',
  },

  // Hero Section
  hero: {
    position: 'relative' as const,
    width: '100%',
    height: '400px',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '48px',
  },
  heroImage: {
    objectFit: 'cover' as const,
  },
  heroOverlay: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '40px',
    background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95), transparent)',
  },
  heroTitle: {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 700,
    color: '#E9E3DF',
    margin: '0 0 8px 0',
  },
  heroCategory: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#FF7A30',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  },

  // Content Layout
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 380px',
    gap: '48px',
    alignItems: 'start',
  },

  // Left Content
  leftContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '40px',
  },

  // Section Title
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(233, 227, 223, 0.5)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  sectionNumber: {
    color: '#FF7A30',
    fontWeight: 700,
  },

  // Description
  description: {
    color: 'rgba(233, 227, 223, 0.8)',
    fontSize: '15px',
    lineHeight: 1.9,
    margin: 0,
  },
  descriptionHighlight: {
    color: '#FF7A30',
    fontStyle: 'italic',
  },

  // Stats Section
  statsGrid: {
    display: 'flex',
    gap: '48px',
    marginTop: '24px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(233, 227, 223, 0.1)',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#E9E3DF',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '11px',
    color: 'rgba(233, 227, 223, 0.5)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },

  // Right Sidebar
  rightSidebar: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },

  // Tools Card
  toolsCard: {
    backgroundColor: '#111',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #222',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
  },
  toolItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    padding: '16px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },
  toolItemHover: {
    backgroundColor: 'rgba(255, 122, 48, 0.1)',
    transform: 'translateY(-2px)',
  },
  toolIcon: {
    width: '36px',
    height: '36px',
    objectFit: 'contain' as const,
  },
  toolName: {
    fontSize: '10px',
    color: 'rgba(233, 227, 223, 0.7)',
    textAlign: 'center' as const,
    fontWeight: 500,
  },
  toolMore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    color: 'rgba(233, 227, 223, 0.4)',
    fontSize: '24px',
  },

  // CTA Card
  ctaCard: {
    backgroundColor: '#FF7A30',
    borderRadius: '16px',
    padding: '24px',
  },
  ctaTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0a0a0a',
    margin: '0 0 8px 0',
  },
  ctaDescription: {
    fontSize: '13px',
    color: 'rgba(10, 10, 10, 0.7)',
    margin: '0 0 20px 0',
    lineHeight: 1.6,
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    backgroundColor: '#0a0a0a',
    color: '#E9E3DF',
    fontSize: '13px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  ctaButtonHover: {
    backgroundColor: '#1a1a1a',
  },

  // Gallery Section
  gallerySection: {
    marginTop: '60px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  galleryItem: {
    position: 'relative' as const,
    aspectRatio: '16/10',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  galleryItemHover: {
    transform: 'scale(1.02)',
  },
};

export default projectDetailStyles;
