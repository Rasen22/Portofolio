'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const heroData = {
  badge: 'OPEN TO WORK',
  greeting: "Hi, I'm",
  name: 'Farhan...',
  role: 'Crafting digital experiences as a UI/UX & Front-end Developer.',
  buttons: {
    download: 'DOWNLOAD CV',
    contact: 'CONTACT ME',
  },
  stats: [
    { value: '5+', label: 'Projects', icon: '📁' },
    { value: '10+', label: 'Technical Skills', icon: '💻' },
    { value: '3+', label: 'Years Experience', icon: '⚡' },
  ],
};

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        padding: '100px 24px 64px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0a0a0a',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '64px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Content - Left Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  color: 'rgba(233, 227, 223, 0.7)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                {heroData.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontSize: 'clamp(48px, 8vw, 72px)',
                fontWeight: 700,
                color: '#E9E3DF',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {heroData.greeting}
              <br />
              <span style={{ color: '#FF7A30' }}>{heroData.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                color: 'rgba(233, 227, 223, 0.5)',
                fontSize: '14px',
                maxWidth: '480px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {heroData.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                paddingTop: '8px',
              }}
            >
              <button
                style={{
                  padding: '14px 24px',
                  backgroundColor: '#FF7A30',
                  color: '#0a0a0a',
                  fontSize: '11px',
                  fontWeight: 700,
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff8c4a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF7A30';
                }}
              >
                {heroData.buttons.download}
              </button>
              <button
                style={{
                  padding: '14px 24px',
                  backgroundColor: 'transparent',
                  color: '#E9E3DF',
                  fontSize: '11px',
                  fontWeight: 700,
                  borderRadius: '8px',
                  border: '1px solid #444',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF7A30';
                  e.currentTarget.style.color = '#FF7A30';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#444';
                  e.currentTarget.style.color = '#E9E3DF';
                }}
              >
                {heroData.buttons.contact}
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                paddingTop: '48px',
                marginTop: '32px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  gap: '16px',
                }}
              >
                {heroData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 24px',
                      backgroundColor: 'rgba(20, 20, 20, 0.8)',
                      border: '1px solid #2a2a2a',
                      borderRadius: '12px',
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 122, 48, 0.15)',
                        borderRadius: '8px',
                        fontSize: '18px',
                      }}
                    >
                      <span style={{ color: '#FF7A30' }}>{stat.icon}</span>
                    </div>
                    {/* Text */}
                    <div>
                      <div
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: '#E9E3DF',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'rgba(233, 227, 223, 0.5)',
                          marginTop: '2px',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Photo Card - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '340px',
                height: '420px',
                borderRadius: '16px',
              }}
            >
              {/* Glow Effect */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  background: 'linear-gradient(135deg, rgba(10, 77, 140, 0.3), rgba(30, 107, 184, 0.2), rgba(10, 77, 140, 0.3))',
                  borderRadius: '24px',
                  filter: 'blur(24px)',
                  zIndex: -1,
                }}
              />
              {/* Card */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a3a5c, #0d2840, #071a2b)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(30, 73, 118, 0.3)',
                }}
              >
                <Image
                  src="/Assets/Profile/profile.jpg"
                  alt="Farhan Rasendriya"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 77, 140, 0.3), transparent, transparent)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
