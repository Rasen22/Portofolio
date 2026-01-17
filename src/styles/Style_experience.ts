// Experience/Timeline Styles

export const experienceStyles = {
  // Page Section
  section: {
    padding: '40px 24px 80px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative' as const,
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

  // Header
  header: {
    textAlign: 'center' as const,
    marginBottom: '60px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#E9E3DF',
    marginBottom: '12px',
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: '16px',
    color: '#6c757d',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '24px',
    padding: '12px 24px',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 122, 48, 0.5)',
    borderRadius: '9999px',
    color: '#FF7A30',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // Timeline Container
  timelineContainer: {
    position: 'relative' as const,
    maxWidth: '1000px',
    margin: '0 auto',
  },

  // Timeline Line (Center)
  timelineLine: {
    position: 'absolute' as const,
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: 'rgba(67, 97, 238, 0.3)',
    transform: 'translateX(-50%)',
    transformOrigin: 'top',
  },
  timelineLineGlow: {
    position: 'absolute' as const,
    left: '50%',
    top: 0,
    bottom: 0,
    width: '4px',
    background: 'linear-gradient(180deg, #4361ee 0%, rgba(67, 97, 238, 0.1) 100%)',
    transform: 'translateX(-50%)',
    filter: 'blur(4px)',
    opacity: 0.5,
  },

  // Milestone Row
  milestoneRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 60px 1fr',
    gap: '0',
    marginBottom: '40px',
    alignItems: 'start',
  },

  // Milestone Card
  card: {
    backgroundColor: 'rgba(33, 37, 41, 0.6)',
    borderRadius: '10px',
    padding: '30px',
    border: '1px solid rgba(67, 97, 238, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(67, 97, 238, 0.15)',
    borderColor: 'rgba(67, 97, 238, 0.4)',
  },
  cardLeft: {
    gridColumn: '1',
    textAlign: 'right' as const,
    marginRight: '0',
  },
  cardRight: {
    gridColumn: '3',
    textAlign: 'left' as const,
    marginLeft: '0',
  },

  // Date Badge
  dateBadge: {
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 600,
    color: '#4361ee',
    marginBottom: '8px',
    letterSpacing: '1px',
  },

  // Ongoing Badge
  ongoingBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#4ade80',
    marginBottom: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  ongoingDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#4ade80',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },

  // Card Title
  cardTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#E9E3DF',
    marginBottom: '12px',
    lineHeight: 1.3,
  },

  // Card Description
  cardDescription: {
    fontSize: '16px',
    color: 'rgba(233, 227, 223, 0.7)',
    lineHeight: 1.7,
    marginBottom: '16px',
  },

  // Card Image
  cardImageContainer: {
    position: 'relative' as const,
    width: '100%',
    aspectRatio: '16/9',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: '16px',
    border: '1px solid rgba(67, 97, 238, 0.2)',
  },
  cardImage: {
    objectFit: 'cover' as const,
  },
  cardImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(67, 97, 238, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(67, 97, 238, 0.5)',
    fontSize: '14px',
  },

  // Timeline Node
  nodeContainer: {
    gridColumn: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '30px',
    position: 'relative' as const,
  },
  node: {
    width: '20px',
    height: '20px',
    backgroundColor: '#4361ee',
    borderRadius: '50%',
    border: '4px solid #0a0a0a',
    boxShadow: '0 0 0 2px #4361ee, 0 0 20px rgba(67, 97, 238, 0.4)',
    position: 'relative' as const,
    zIndex: 2,
  },
  nodeOngoing: {
    backgroundColor: '#4ade80',
    boxShadow: '0 0 0 2px #4ade80, 0 0 20px rgba(74, 222, 128, 0.4)',
  },
  nodePulse: {
    position: 'absolute' as const,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(74, 222, 128, 0.2)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
  nodeConnector: {
    position: 'absolute' as const,
    top: '50%',
    width: '30px',
    height: '2px',
    backgroundColor: 'rgba(67, 97, 238, 0.4)',
  },
  nodeConnectorLeft: {
    right: '100%',
  },
  nodeConnectorRight: {
    left: '100%',
  },

  // Empty Space for alternating layout
  emptySpace: {
    gridColumn: '1',
  },
  emptySpaceRight: {
    gridColumn: '3',
  },

  // Mobile Styles (Single Column)
  mobileTimeline: {
    position: 'relative' as const,
    paddingLeft: '40px',
  },
  mobileTimelineLine: {
    position: 'absolute' as const,
    left: '10px',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: 'rgba(67, 97, 238, 0.3)',
  },
  mobileCard: {
    backgroundColor: 'rgba(33, 37, 41, 0.6)',
    borderRadius: '10px',
    padding: '24px',
    border: '1px solid rgba(67, 97, 238, 0.2)',
    marginBottom: '24px',
    position: 'relative' as const,
    textAlign: 'left' as const,
  },
  mobileNode: {
    position: 'absolute' as const,
    left: '-40px',
    top: '30px',
    width: '20px',
    height: '20px',
    backgroundColor: '#4361ee',
    borderRadius: '50%',
    border: '4px solid #0a0a0a',
    boxShadow: '0 0 0 2px #4361ee',
    zIndex: 2,
  },
};

// CSS Animation for pulse effect (add to globals.css)
export const pulseKeyframes = `
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}
`;

export default experienceStyles;
