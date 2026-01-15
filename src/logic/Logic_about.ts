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
    value: '5+',
    label: 'Years of experience',
  },
  description: [
    'I am a dedicated <highlight>UI/UX & Front-end Developer</highlight> with a passion for building beautiful, functional, and user-centered digital experiences. With a background that bridges the gap between design and code, I specialize in creating modern web applications using the latest technologies like Tailwind CSS, React, and Figma.',
    'My approach focuses on accessibility, performance, and clean aesthetics. I believe that every pixel should serve a purpose, and every interaction should feel intuitive. Over the past 5 years, I\'ve helped startups and established brands transform their complex ideas into elegant, high-performing digital products.',
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
      value: 'San Francisco, CA',
    },
    education: {
      icon: '🎓',
      label: 'EDUCATION',
      value: 'B.Sc. in Computer Science',
    },
    languages: {
      icon: '🌐',
      label: 'LANGUAGES',
      value: 'English, Spanish, Arabic',
    },
    interests: {
      icon: '💡',
      label: 'INTERESTS',
      value: 'Photography, Open Source, Hiking',
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
