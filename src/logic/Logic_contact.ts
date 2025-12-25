// Logic for Contact Page
// Separated from interface for clean architecture

import { z } from 'zod';

// Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialContactLink {
  iconType: 'email' | 'linkedin' | 'github';
  label: string;
  href: string;
  handle: string;
}

// Form validation schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Social Contact Links Data - no emojis, using icon types instead
export const socialContactLinks: SocialContactLink[] = [
  {
    iconType: 'email',
    label: 'Email',
    href: 'mailto:hello@alex.eth',
    handle: 'hello@alex.eth',
  },
  {
    iconType: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    handle: '/in/alexdev',
  },
  {
    iconType: 'github',
    label: 'GitHub',
    href: 'https://github.com',
    handle: '@alexdev',
  },
];

// Get icon SVG path by type
export function getContactIcon(iconType: SocialContactLink['iconType']): string {
  const icons = {
    email: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    github: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  };
  return icons[iconType];
}

// WorldMap canvas drawing logic
export interface Dot {
  x: number;
  y: number;
  size: number;
  brightness: number;
}

export function generateDots(width: number, height: number, count: number = 200): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < count; i++) {
    dots.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      brightness: Math.random(),
    });
  }
  return dots;
}

export function drawWorldMapCanvas(
  ctx: CanvasRenderingContext2D,
  dots: Dot[],
  mousePos: { x: number; y: number },
  canvasWidth: number
): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  dots.forEach((dot) => {
    const dx = mousePos.x - dot.x;
    const dy = mousePos.y - dot.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 150;

    let alpha = 0.3 + dot.brightness * 0.3;
    let size = dot.size;

    if (distance < maxDistance) {
      const factor = 1 - distance / maxDistance;
      alpha = Math.min(1, alpha + factor * 0.7);
      size = dot.size + factor * 2;

      // Draw connection lines
      ctx.beginPath();
      ctx.moveTo(dot.x, dot.y);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.strokeStyle = `rgba(0, 243, 255, ${factor * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Gradient color based on position
    const gradientFactor = dot.x / canvasWidth;
    const r = Math.floor(0 + gradientFactor * 185);
    const g = Math.floor(243 - gradientFactor * 140);
    const b = Math.floor(255);

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.fill();
  });
}

// Form submission handler
export async function submitContactForm(data: ContactFormData): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Form data:', data);
}

// Location text - no emoji
export const locationInfo = {
  primary: 'Based in Jakarta, Indonesia',
  secondary: 'Available worldwide for remote work',
};

// Footer text - no emoji
export const footerText = '2024 Alex Dev. Powered by passion and dedication';
