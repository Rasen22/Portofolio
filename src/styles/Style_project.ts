// Project Section Styles - Extended

export const projectStyles = {
  // ========== LANDING PAGE SLIDER SECTION ==========
  section: {
    padding: '80px 24px',
    backgroundColor: '#0a0a0a',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '48px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#E9E3DF',
    margin: 0,
  },
  titleAccent: {
    color: '#FF7A30',
  },

  // ========== SLIDER STYLES ==========
  sliderContainer: {
    position: 'relative' as const,
    overflow: 'hidden',
  },
  sliderWrapper: {
    display: 'flex',
    gap: '32px',
    transition: 'transform 0.5s ease',
  },
  sliderNavigation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    marginTop: '32px',
  },
  sliderButton: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 122, 48, 0.1)',
    border: '1px solid rgba(255, 122, 48, 0.3)',
    color: '#FF7A30',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderButtonHover: {
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
  },
  sliderDots: {
    display: 'flex',
    gap: '8px',
  },
  sliderDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(233, 227, 223, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  sliderDotActive: {
    backgroundColor: '#FF7A30',
    width: '24px',
    borderRadius: '4px',
  },

  // ========== PROJECT CARD (Landing Page) ==========
  card: {
    minWidth: 'calc(50% - 16px)',
    backgroundColor: '#111',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #222',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-8px)',
    borderColor: 'rgba(255, 122, 48, 0.3)',
  },
  cardImage: {
    position: 'relative' as const,
    width: '100%',
    height: '240px',
    backgroundColor: '#1a1a1a',
    overflow: 'hidden',
  },
  cardContent: {
    padding: '24px',
  },
  cardTitleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#E9E3DF',
    margin: 0,
  },
  cardArrow: {
    color: '#E9E3DF',
    fontSize: '18px',
  },
  cardCategory: {
    display: 'inline-block',
    color: '#FF7A30',
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '12px',
  },
  cardDescription: {
    color: 'rgba(233, 227, 223, 0.6)',
    fontSize: '13px',
    lineHeight: 1.6,
    margin: 0,
  },

  // ========== LOAD MORE BUTTON ==========
  loadMoreWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '48px',
  },
  loadMoreBtn: {
    padding: '16px 32px',
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  loadMoreBtnHover: {
    backgroundColor: '#ff8c4a',
    transform: 'scale(1.05)',
  },

  // ========== PROJECT DETAIL CARD (dalam slider) ==========
  detailCard: {
    backgroundColor: '#111',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #222',
  },
  detailTop: {
    position: 'relative' as const,
  },
  detailBackButton: {
    position: 'absolute' as const,
    top: '16px',
    left: '16px',
    padding: '8px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    color: '#E9E3DF',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  detailBackButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  detailImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover' as const,
  },
  detailContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '40px',
    padding: '32px',
  },
  detailLeft: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  detailTitle: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'rgba(233, 227, 223, 0.5)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    margin: 0,
  },
  detailDescription: {
    color: 'rgba(233, 227, 223, 0.8)',
    fontSize: '14px',
    lineHeight: 1.8,
    margin: 0,
  },
  detailStats: {
    display: 'flex',
    gap: '32px',
    marginTop: '16px',
  },
  detailStat: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  detailStatValue: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#E9E3DF',
  },
  detailStatLabel: {
    fontSize: '10px',
    color: 'rgba(233, 227, 223, 0.5)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  detailButtons: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
  },
  detailBtnPrimary: {
    padding: '12px 24px',
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  detailBtnSecondary: {
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: '#E9E3DF',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    border: '1px solid rgba(233, 227, 223, 0.3)',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },

  // ========== TOOLS SECTION ==========
  detailRight: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  toolsCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '24px',
  },
  toolsTitle: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'rgba(233, 227, 223, 0.5)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '20px',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  toolItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    padding: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  toolItemHover: {
    backgroundColor: 'rgba(255, 122, 48, 0.1)',
    transform: 'translateY(-2px)',
  },
  toolIcon: {
    width: '32px',
    height: '32px',
    objectFit: 'contain' as const,
  },
  toolName: {
    fontSize: '10px',
    color: 'rgba(233, 227, 223, 0.7)',
    textAlign: 'center' as const,
  },
  toolMore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    color: 'rgba(233, 227, 223, 0.5)',
    fontSize: '20px',
  },

  // ========== MY PROJECTS PAGE STYLES ==========
  projectsPageSection: {
    padding: '100px 24px 80px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
  },
  projectsPageTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 700,
    color: '#E9E3DF',
    fontStyle: 'italic',
    marginBottom: '32px',
  },
  projectsPageTitleAccent: {
    color: '#FF7A30',
    fontStyle: 'normal',
  },

  // ========== FILTER TABS ==========
  filterTabs: {
    display: 'flex',
    gap: '12px',
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
  },
  filterTab: {
    padding: '10px 24px',
    backgroundColor: 'transparent',
    border: '1px solid rgba(233, 227, 223, 0.2)',
    borderRadius: '20px',
    color: 'rgba(233, 227, 223, 0.7)',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  filterTabActive: {
    backgroundColor: '#FF7A30',
    borderColor: '#FF7A30',
    color: '#0a0a0a',
  },
  filterTabHover: {
    borderColor: '#FF7A30',
    color: '#FF7A30',
  },

  // ========== PROJECTS GRID (My Projects Page) ==========
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  projectCard: {
    backgroundColor: '#111',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #222',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  projectCardHover: {
    transform: 'translateY(-8px)',
    borderColor: 'rgba(255, 122, 48, 0.3)',
  },
  projectCardImageWrapper: {
    position: 'relative' as const,
    width: '100%',
    aspectRatio: '16/10',
    backgroundColor: '#1a1a1a',
    overflow: 'hidden',
  },
  projectCardStatusBadge: {
    position: 'absolute' as const,
    top: '12px',
    left: '12px',
    padding: '4px 10px',
    backgroundColor: 'rgba(255, 122, 48, 0.9)',
    color: '#fff',
    fontSize: '9px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    borderRadius: '4px',
  },
  projectCardStatusDone: {
    backgroundColor: 'rgba(74, 222, 128, 0.9)',
  },
  projectCardContent: {
    padding: '16px',
  },
  projectCardTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#E9E3DF',
    margin: '0 0 4px 0',
  },
  projectCardCategory: {
    fontSize: '11px',
    color: 'rgba(233, 227, 223, 0.5)',
    margin: 0,
  },
};

export default projectStyles;
