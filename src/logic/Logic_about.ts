// About Section Logic

// ========== DATA ==========
export const aboutData = {
  breadcrumb: {
    home: 'Home',
    current: 'About Me',
  },
  title: {
    text: 'About',
    highlight: 'Me',
  },
  experienceBadge: {
    value: '1+',
    label: 'Years of experience',
  },
  description: [
    'I am a passionate UI/UX Designer and Front-end Developer currently pursuing my degree in Information Systems at Universitas Nasional (GPA: 3.88). With hands-on experience at Sagawa Group, I specialize in transforming design concepts into responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. My workflow bridges visual design in Figma with clean front-end implementation, ensuring seamless collaboration between design and development teams.',
    "I approach every project with attention to detail and a user-centered mindset—crafting intuitive interfaces that balance aesthetics with functionality. Through academic projects and professional experience, I've developed a structured approach to problem-solving, from designing responsive mockups and design systems to building interactive web components that enhance user experience.",
  ],
  quote: {
    text: '"Designing digital experiences that connect',
    highlight: 'people with purpose."',
  },
  personalDetails: {
    title: 'Personal Details',
    location: {
      icon: '📍',
      label: 'LOCATION',
      value: 'Jakarta Selatan, ID',
    },
    education: {
      icon: '🎓',
      label: 'EDUCATION',
      value: 'Universitas Nasional. Information System',
    },
    languages: {
      icon: '🌐',
      label: 'LANGUAGES',
      value: 'English',
    },
    interests: {
      icon: '💡',
      label: 'INTERESTS',
      value: 'Calesenic, Open Source, Video Editing',
    },
  },
  buttons: {
    download: 'Download CV',
    contact: 'Get in Touch',
  },
  socialLinks: [
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Dribbble', url: '#' },
  ],
  footer: '© 2024 Farhan. All rights reserved.',
};

// ========== HOOK ==========
export const useAboutLogic = () => {
  const parseDescription = (text: string) => {
    const parts = text.split(/<highlight>|<\/highlight>/);
    return parts.map((part, index) => ({
      text: part,
      isHighlight: index % 2 === 1,
    }));
  };

  return {
    aboutData,
    parseDescription,
  };
};

export default { aboutData, useAboutLogic };
