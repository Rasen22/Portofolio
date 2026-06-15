'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollytelling } from '@/hooks/useScrollytelling';
import { heroData, itemVariants } from '@/logic/Logic_hero';
import { aboutMeData } from '@/logic/Logic_aboutMe';
import { heroInlineStyles } from '@/styles/Style_hero';
import { aboutMeStyles } from '@/styles/Style_aboutMe';
import { scrollytellingStyles, scrollytellingGlobalCSS } from '@/styles/Style_scrollytelling';

export default function ScrollytellingSection() {
  const {
    containerRef,
    stickyRef,
    heroCardRef,
    aboutCardRef,
    heroContentRef,
    aboutContentRef,
  } = useScrollytelling();

  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === '#about-me') {
        const container = containerRef.current;
        if (container) {
          const scrollTarget = container.offsetTop + container.offsetHeight - window.innerHeight;
          setTimeout(() => {
            window.scrollTo({
              top: scrollTarget,
              behavior: 'smooth'
            });
          }, 150);
        }
      }
    };

    // Run on mount with a small delay
    const timer = setTimeout(handleHashScroll, 400);

    // Also listen to hashchange events
    window.addEventListener('hashchange', handleHashScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [containerRef]);

  return (
    <div id="scrollytelling-container" ref={containerRef} style={scrollytellingStyles.scrollContainer}>
      <div ref={stickyRef} style={scrollytellingStyles.stickyView}>
        <div style={scrollytellingStyles.contentWrapper}>
          
          {/* Hero Section Layer */}
          <div id="scrolly-hero-container" style={{ ...scrollytellingStyles.heroContainer, padding: '100px 24px 64px' }}>
            <div style={heroInlineStyles.container}>
              <div style={heroInlineStyles.mainGrid} className="scrollytelling-hero-grid">
                
                {/* Hero Content - Left Side */}
                <div ref={heroContentRef} style={heroInlineStyles.content}>
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span style={heroInlineStyles.badge}>
                      {heroData.badge}
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={heroInlineStyles.greeting}
                  >
                    {heroData.greeting}
                    <br />
                    <span style={heroInlineStyles.nameAccent}>{heroData.name}</span>
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={heroInlineStyles.role}
                  >
                    {heroData.role}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={heroInlineStyles.buttonGroup}
                  >
                    <a
                      href="/Assets/CV Farhan Rasendriya.pdf"
                      download="CV Farhan Rasendriya.pdf"
                      style={{ textDecoration: 'none' }}
                    >
                      <button
                        style={heroInlineStyles.btnDownload}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff8c4a';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#FF7A30';
                        }}
                      >
                        {heroData.buttons.download}
                      </button>
                    </a>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button
                        style={heroInlineStyles.btnContact}
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
                    </Link>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={heroInlineStyles.statsWrapper}
                  >
                    <div style={heroInlineStyles.statsGrid}>
                      {heroData.stats.map((stat) => (
                        <div key={stat.label} style={heroInlineStyles.statItem}>
                          {stat.icon && (
                            <div style={heroInlineStyles.statIcon}>
                              <span style={heroInlineStyles.statIconText}>{stat.icon}</span>
                            </div>
                          )}
                          <div>
                            <div style={heroInlineStyles.statValue}>{stat.value}</div>
                            <div style={heroInlineStyles.statLabel}>{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Hero Photo Card - Right Side (Animated) */}
                <div
                  ref={heroCardRef}
                  style={{
                    ...heroInlineStyles.photoWrapper,
                    ...scrollytellingStyles.heroPhotoCard,
                  }}
                  className="scrollytelling-hero-card"
                >
                  <div style={heroInlineStyles.photoCard}>
                    <div style={heroInlineStyles.photoGlowOuter} />
                    <div style={heroInlineStyles.photoCardInner}>
                      <Image
                        src="/Assets/Profile/Profile1.jpg"
                        alt="Farhan Rasendriya"
                        fill
                        style={heroInlineStyles.photoImage}
                        priority
                      />
                      <div style={heroInlineStyles.photoGlow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section Layer */}
          <div id="scrolly-about-container" style={{ ...scrollytellingStyles.aboutContainer, padding: '80px 24px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '400px 1fr', 
                  gap: '60px', 
                  alignItems: 'center' 
                }} 
                className="scrollytelling-about-container"
              >
                
                {/* About Photo Card - Left Side (Animated) */}
                <div
                  ref={aboutCardRef}
                  style={{
                    ...aboutMeStyles.imageWrapper,
                    ...scrollytellingStyles.aboutPhotoCard,
                  }}
                  className="scrollytelling-about-card"
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  <div style={aboutMeStyles.imageContainer}>
                    <Image
                      src={aboutMeData.image}
                      alt="Profile"
                      fill
                      style={{
                        ...aboutMeStyles.image,
                        ...(isImageHovered ? aboutMeStyles.imageHover : {}),
                      }}
                      priority
                    />
                  </div>
                </div>

                {/* About Content - Right Side */}
                <div ref={aboutContentRef} style={aboutMeStyles.content}>
                  <div style={aboutMeStyles.titleArea}>
                    <h2 style={aboutMeStyles.title}>{aboutMeData.title}</h2>
                    <span style={aboutMeStyles.badge}>{aboutMeData.badge}</span>
                  </div>

                  <p style={aboutMeStyles.description}>
                    {aboutMeData.description}
                  </p>

                  <div style={aboutMeStyles.buttonsWrapper}>
                    {aboutMeData.buttons.map((button) => (
                      <Link
                        key={button.label}
                        href={button.href}
                        style={
                          button.variant === 'primary'
                            ? aboutMeStyles.buttonPrimary
                            : aboutMeStyles.buttonSecondary
                        }
                        className={`scrollytelling-btn scrollytelling-btn-${button.variant}`}
                      >
                        {button.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS */}
      <style jsx global>{`
        ${scrollytellingGlobalCSS}
        
        .scrollytelling-btn {
          transition: all 0.3s ease !important;
        }

        .scrollytelling-btn-primary:hover {
          background-color: #ff8c4a !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 122, 48, 0.4);
        }

        .scrollytelling-btn-secondary:hover {
          border-color: #ff7a30 !important;
          color: #ff7a30 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
