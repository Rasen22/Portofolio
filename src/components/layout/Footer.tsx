'use client';

import { footerStyles } from '@/styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p className={footerStyles.copyright}>
          © {currentYear} Farhan Rasendriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
