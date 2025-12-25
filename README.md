# Portfolio Website

A modern, animated portfolio website built with Next.js 14, featuring MetaMask-inspired design with smooth animations and glassmorphism effects.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-purple)

## ✨ Features

- **Dark Theme** - Beautiful #0A0A0A background with cyan-purple gradient accents
- **Page Transitions** - Smooth gradient wipe animations between pages
- **Glassmorphism** - Modern glass card effects with backdrop blur
- **Scroll Animations** - Locomotive Scroll integration for parallax effects
- **Scroll Progress** - Dynamic progress bar in navbar
- **Responsive Design** - Mobile-first with hamburger menu on small screens
- **Form Validation** - React Hook Form with Zod validation
- **Data Fetching** - React Query v5 for efficient data management
- **Particle Animations** - Lottie-react for ambient particles
- **Accessibility** - ARIA labels and keyboard navigation support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion v11 + Locomotive Scroll
- **State Management**: React Query v5
- **Form Handling**: React Hook Form + Zod
- **Icons/Animations**: lottie-react
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── profile/           # Profile page
│   ├── projects/          # Projects listing & detail pages
│   └── contact/           # Contact form page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── GradientText.tsx
│   │   ├── GlassCard.tsx
│   │   ├── AnimatedButton.tsx
│   │   └── ProjectCard.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   └── animations/        # Animation components
│       ├── ParticlesBackground.tsx
│       └── PageTransition.tsx
├── hooks/                  # Custom React hooks
│   ├── useLocomotiveScroll.ts
│   ├── usePageTransitions.ts
│   ├── useMediaQuery.ts
│   └── useScrollSpy.ts
├── lib/                    # Utilities and config
│   ├── api.ts             # API functions & React Query hooks
│   ├── constants.ts       # App constants & mock data
│   ├── react-query.tsx    # Query client provider
│   └── utils.ts           # Utility functions
├── styles/
│   └── globals.css        # Global styles & Tailwind config
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Background**: #0A0A0A
- **Foreground**: #FFFFFF
- **Cyan Accent**: #00F3FF
- **Purple Accent**: #A855F7

### Typography
- **Headings**: Clash Grotesk
- **Body**: Satoshi

### Components
- **GlassCard**: Glassmorphism effect with hover glow
- **GradientText**: Text with animated cyan-purple gradient
- **AnimatedButton**: Button with hover scale and glow effects
- **ProjectCard**: Project card with image, tech chips, and hover effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (hamburger menu, single column)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- Dynamic imports for heavy animation components
- Next.js Image optimization
- React Query caching (5 minutes stale time)
- Locomotive Scroll disabled on mobile
- Reduced motion support for accessibility

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design inspired by [MetaMask.io](https://metamask.io)
- Fonts from [Fontshare](https://fontshare.com)
- Icons from [Heroicons](https://heroicons.com)
