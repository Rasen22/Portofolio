// About Me Section Styles (Profile Singkat di Homepage)

export const aboutMeStyles = {
  // Section Container
  section: {
    padding: '80px 24px',
    backgroundColor: '#0a0a0a',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  containerMobile: {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },

  // Image Side
  imageWrapper: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: '400px',
  },
  imageContainer: {
    position: 'relative' as const,
    width: '100%',
    aspectRatio: '1',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  image: {
    objectFit: 'cover' as const,
    objectPosition: 'center top',
    filter: 'grayscale(100%)',
    transition: 'filter 0.5s ease',
  },
  imageHover: {
    filter: 'grayscale(0%)',
  },

  // Content Side
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },

  // Title Area
  titleArea: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  title: {
    fontSize: 'clamp(28px, 4vw, 36px)',
    fontWeight: 700,
    color: '#E9E3DF',
    margin: 0,
    lineHeight: 1.2,
    letterSpacing: '0.02em',
  },
  badge: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#FF7A30',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
  },

  // Description
  description: {
    color: 'rgba(233, 227, 223, 0.7)',
    fontSize: '15px',
    lineHeight: 1.8,
    margin: 0,
  },

  // Buttons
  buttonsWrapper: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
    flexWrap: 'wrap' as const,
  },
  buttonPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
    fontSize: '13px',
    fontWeight: 600,
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.3s ease',
  },
  buttonPrimaryHover: {
    backgroundColor: '#ff8c4a',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(255, 122, 48, 0.4)',
  },
  buttonSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    backgroundColor: 'transparent',
    color: '#E9E3DF',
    fontSize: '13px',
    fontWeight: 600,
    borderRadius: '6px',
    border: '2px solid rgba(233, 227, 223, 0.3)',
    cursor: 'pointer',
    textDecoration: 'none',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.3s ease',
  },
  buttonSecondaryHover: {
    borderColor: '#FF7A30',
    color: '#FF7A30',
    transform: 'translateY(-2px)',
  },

  // Responsive Styles (untuk media queries dalam component)
  responsive: {
    tablet: {
      container: {
        gridTemplateColumns: '1fr',
        gap: '40px',
      },
      imageWrapper: {
        maxWidth: '350px',
        margin: '0 auto',
      },
      content: {
        textAlign: 'center' as const,
      },
      buttonsWrapper: {
        justifyContent: 'center',
      },
    },
    mobile: {
      section: {
        padding: '60px 16px',
      },
      imageWrapper: {
        maxWidth: '300px',
      },
      buttonsWrapper: {
        flexDirection: 'column' as const,
        width: '100%',
      },
      button: {
        width: '100%',
      },
    },
  },
};

export default aboutMeStyles;
