// Experience/Timeline Logic

import { TimelineData, Milestone } from '@/types/experience';

// ========== DATA ==========
export const timelineData: TimelineData = {
  header: {
    title: 'My Journey Timeline',
    subtitle: 'A chronological path of growth, learning, and achievement in software development',
  },
  milestones: [
    {
      id: '1',
      date: 'SEP 2023',
      month: 'SEP',
      year: '2023',
      title: 'University Enrollment',
      description: 'Pursuing Bachelor\'s in Informatics Engineering at Universitas Pembangunan Nasional Veteran Jakarta, specializing in AI systems and software architecture with 3.8 GPA.',
      image: '/Assets/Experience/university.jpg',
      imageAlt: 'University campus building',
      isOngoing: true,
      position: 'left',
    },
    {
      id: '2',
      date: 'MAY 2025',
      month: 'MAY',
      year: '2025',
      title: 'UF l SPC',
      description: 'Active member of University Software Programming Club, leading competitive coding teams and contributing to open-source projects.',
      image: '/Assets/Experience/spc-club.jpg',
      imageAlt: 'Software Programming Club logo',
      isOngoing: true,
      position: 'right',
    },
    {
      id: '3',
      date: 'JUL 2025',
      month: 'JUL',
      year: '2025',
      title: 'PT. Sagawa Group Website',
      description: 'Developed corporate website with Laravel and Tailwind CSS, implementing CMS integration that boosted client engagement by 35%.',
      image: '/Assets/Experience/sagawa-website.jpg',
      imageAlt: 'Sagawa Group website homepage',
      isOngoing: false,
      position: 'left',
    },
    {
      id: '4',
      date: 'SEP 2025',
      month: 'SEP',
      year: '2025',
      title: 'Professional Internship',
      description: 'Completed 6-week software development internship focusing on UX optimization; collaborated on enterprise app reducing workflow time by 25%.',
      image: '/Assets/Experience/internship.jpg',
      imageAlt: 'Office environment team photo',
      isOngoing: false,
      position: 'right',
    },
    {
      id: '5',
      date: 'NOV 2025',
      month: 'NOV',
      year: '2025',
      title: 'Custom POS System',
      description: 'Built inventory-integrated cashier system using PHP/MySQL, reducing transaction errors by 40% for retail clients through real-time stock sync.',
      image: '/Assets/Experience/pos-system.jpg',
      imageAlt: 'POS interface demo',
      isOngoing: false,
      position: 'left',
    },
    {
      id: '6',
      date: 'DEC 2025',
      month: 'DEC',
      year: '2025',
      title: 'Construction Company Website',
      description: 'Delivered project management portal with client quoting tools using React/Node.js, increasing conversion rates by 30% for PT. Bangun Jaya.',
      image: '/Assets/Experience/construction-website.jpg',
      imageAlt: 'Project dashboard wireframe',
      isOngoing: false,
      position: 'right',
    },
  ],
};

// ========== ANIMATIONS ==========
export const timelineAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  header: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  milestone: {
    hidden: (position: 'left' | 'right') => ({
      opacity: 0,
      x: position === 'left' ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  line: {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  },
  node: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'backOut',
      },
    },
  },
  pulseAnimation: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ========== HOOK ==========
export const useExperienceLogic = () => {
  const getMilestonesByPosition = (position: 'left' | 'right'): Milestone[] => {
    return timelineData.milestones.filter((m) => m.position === position);
  };

  const getOngoingMilestones = (): Milestone[] => {
    return timelineData.milestones.filter((m) => m.isOngoing);
  };

  const formatDate = (month: string, year: string): string => {
    return `${month} ${year}`;
  };

  return {
    timelineData,
    timelineAnimations,
    getMilestonesByPosition,
    getOngoingMilestones,
    formatDate,
  };
};

export default { timelineData, timelineAnimations, useExperienceLogic };
