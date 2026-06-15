// Footer Logic
import React from 'react';

// ========== ICON COMPONENTS ==========
export const GithubIcon = () => (
  <img src="/Assets/Icon/github_dark.png" alt="GitHub" width="22" height="22" style={{ objectFit: 'contain' }} />
);

export const LinkedinIcon = () => (
  <img src="/Assets/Icon/linkedin.png" alt="LinkedIn" width="22" height="22" style={{ objectFit: 'contain' }} />
);

export const WhatsappIcon = () => (
  <img src="/Assets/Icon/whatsapp-icon.png" alt="WhatsApp" width="22" height="22" style={{ objectFit: 'contain' }} />
);

export const EmailIcon = () => (
  <img src="/Assets/Icon/gmail.png" alt="Email" width="22" height="22" style={{ objectFit: 'contain' }} />
);

export const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// ========== TYPE DEFINITIONS ==========
export interface SocialLinkItem {
  name: string;
  icon: React.FC;
  url: string;
}

// ========== DATA ==========
export const socialLinks: SocialLinkItem[] = [
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Rasen22' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/farhan-rasendriya-319718352' },
  { name: 'WhatsApp', icon: WhatsappIcon, url: 'https://wa.me/6285282808785' },
  { name: 'Email', icon: EmailIcon, url: 'mailto:farhan@example.com' },
];

export const footerData = {
  socialTitle: "Let's Connect on Social Media",
  copyrightName: 'Farhan Rasendriya',
};

// ========== ANIMATIONS ==========
export const socialHoverAnimation = {
  color: '#FF7A30',
  scale: 1.15,
};

export const socialTapAnimation = {
  scale: 0.95,
};

// ========== HOOK ==========
export const useFooterLogic = () => {
  const currentYear = new Date().getFullYear();
  
  const getCopyrightText = () => {
    return `© ${currentYear} ${footerData.copyrightName}. All rights reserved.`;
  };

  return {
    footerData,
    currentYear,
    getCopyrightText,
    socialHoverAnimation,
    socialTapAnimation,
  };
};

export default { footerData, socialLinks, useFooterLogic };
