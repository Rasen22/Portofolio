# Portfolio Website - Copilot Instructions

## Project Overview
Next.js 14 portfolio website with MetaMask-style animations, dark theme (#0A0A0A), and modern UI effects.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom @layer utilities
- **Animations**: Framer Motion v11 + Locomotive Scroll
- **State Management**: React Query v5
- **Form Handling**: React Hook Form + Zod validation
- **Additional**: lottie-react, react-intersection-observer

## Design Guidelines
- Primary background: #BDE8F5 (Light blue - page background/cards)
- Header/Footer/CTA: #0F2854 (Dark blue)
- Interactive elements: #1C4D8D (Medium blue)  
- Content/Graphics: #4988C4 (Light medium blue)
- Glass morphism cards with backdrop-blur
- Smooth scroll with parallax effects
- Page transitions with gradient wipe effect

## Code Standards
- TypeScript strict mode
- ARIA labels for accessibility
- Dynamic imports for animation components
- Mobile-first responsive design
- Loading/error state handling for all data fetching

## Key Components
- `PageTransition`: Gradient wipe animation on route change
- `GlassCard`: Glass morphism effect cards
- `GradientText`: Text with cyan-purple gradient
- `ParticlesBackground`: Lottie particle animation
- `ScrollProgress`: Scroll progress bar in navbar
