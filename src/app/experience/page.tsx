'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navbar, Footer } from '@/components/layout';
import { timelineData } from '@/logic/Logic_experience';
import { Milestone } from '@/types/experience';

// ========== MILESTONE CARD COMPONENT ==========
interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
}

const MilestoneCard = ({ milestone, index }: MilestoneCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isLeft = milestone.position === 'left';

  return (
    <motion.div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 60px 1fr',
        gap: '0',
        marginBottom: '40px',
        alignItems: 'start',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Left Card or Empty Space */}
      {isLeft ? (
        <motion.div
          style={{
            backgroundColor: 'rgba(33, 37, 41, 0.8)',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid rgba(255, 122, 48, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'default',
            textAlign: 'left' as const,
            ...(isHovered ? {
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(255, 122, 48, 0.15)',
              borderColor: 'rgba(255, 122, 48, 0.4)',
            } : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{
            display: 'inline-block',
            fontSize: '14px',
            fontWeight: 600,
            color: '#FF7A30',
            marginBottom: '8px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>{milestone.date}</div>
          
          {milestone.isOngoing && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 600,
              color: '#4ade80',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#4ade80',
                borderRadius: '50%',
                display: 'inline-block',
              }} />
              ONGOING
            </div>
          )}
          
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#E9E3DF',
            marginBottom: '10px',
            lineHeight: 1.3,
          }}>{milestone.title}</h3>
          
          <p style={{
            fontSize: '14px',
            color: 'rgba(233, 227, 223, 0.7)',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}>{milestone.description}</p>
          
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 122, 48, 0.2)',
          }}>
            {!imageError ? (
              <Image
                src={milestone.image}
                alt={milestone.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 122, 48, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 122, 48, 0.5)',
                fontSize: '13px',
              }}>
                📷 {milestone.imageAlt}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div />
      )}

      {/* Center Node */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '24px',
        position: 'relative',
      }}>
        {milestone.isOngoing && (
          <motion.div
            style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 122, 48, 0.2)',
              top: '14px',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: milestone.isOngoing ? '#FF7A30' : '#FF7A30',
            borderRadius: '50%',
            border: '4px solid #0a0a0a',
            boxShadow: milestone.isOngoing 
              ? '0 0 0 2px #FF7A30, 0 0 15px rgba(255, 122, 48, 0.5)' 
              : '0 0 0 2px #FF7A30',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </div>

      {/* Right Card or Empty Space */}
      {!isLeft ? (
        <motion.div
          style={{
            backgroundColor: 'rgba(33, 37, 41, 0.8)',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid rgba(255, 122, 48, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'default',
            textAlign: 'left' as const,
            ...(isHovered ? {
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(255, 122, 48, 0.15)',
              borderColor: 'rgba(255, 122, 48, 0.4)',
            } : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{
            display: 'inline-block',
            fontSize: '14px',
            fontWeight: 600,
            color: '#FF7A30',
            marginBottom: '8px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>{milestone.date}</div>
          
          {milestone.isOngoing && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 600,
              color: '#4ade80',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#4ade80',
                borderRadius: '50%',
                display: 'inline-block',
              }} />
              ONGOING
            </div>
          )}
          
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#E9E3DF',
            marginBottom: '10px',
            lineHeight: 1.3,
          }}>{milestone.title}</h3>
          
          <p style={{
            fontSize: '14px',
            color: 'rgba(233, 227, 223, 0.7)',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}>{milestone.description}</p>
          
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 122, 48, 0.2)',
          }}>
            {!imageError ? (
              <Image
                src={milestone.image}
                alt={milestone.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 122, 48, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 122, 48, 0.5)',
                fontSize: '13px',
              }}>
                📷 {milestone.imageAlt}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div />
      )}
    </motion.div>
  );
};

// ========== MOBILE MILESTONE CARD ==========
const MobileMilestoneCard = ({ milestone, index }: MilestoneCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: 'rgba(33, 37, 41, 0.8)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid rgba(255, 122, 48, 0.2)',
        marginBottom: '24px',
        position: 'relative',
        marginLeft: '30px',
        transition: 'all 0.3s ease',
        ...(isHovered ? {
          transform: 'translateY(-3px)',
          boxShadow: '0 15px 30px rgba(255, 122, 48, 0.15)',
          borderColor: 'rgba(255, 122, 48, 0.4)',
        } : {}),
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node */}
      <div
        style={{
          position: 'absolute',
          left: '-40px',
          top: '24px',
          width: '16px',
          height: '16px',
          backgroundColor: '#FF7A30',
          borderRadius: '50%',
          border: '3px solid #0a0a0a',
          boxShadow: '0 0 0 2px #FF7A30',
          zIndex: 2,
        }}
      />
      
      <div style={{
        fontSize: '13px',
        fontWeight: 600,
        color: '#FF7A30',
        marginBottom: '6px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
      }}>{milestone.date}</div>
      
      {milestone.isOngoing && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '10px',
          fontWeight: 600,
          color: '#4ade80',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#4ade80',
            borderRadius: '50%',
            display: 'inline-block',
          }} />
          ONGOING
        </div>
      )}
      
      <h3 style={{
        fontSize: '16px',
        fontWeight: 700,
        color: '#E9E3DF',
        marginBottom: '8px',
      }}>{milestone.title}</h3>
      
      <p style={{
        fontSize: '13px',
        color: 'rgba(233, 227, 223, 0.7)',
        lineHeight: 1.5,
        marginBottom: '12px',
      }}>{milestone.description}</p>
      
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 122, 48, 0.2)',
      }}>
        {!imageError ? (
          <Image
            src={milestone.image}
            alt={milestone.imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 122, 48, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 122, 48, 0.5)',
            fontSize: '12px',
          }}>
            📷 {milestone.imageAlt}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ========== MAIN PAGE COMPONENT ==========
export default function ExperiencePage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />
      <main style={{
        backgroundColor: '#0a0a0a',
        minHeight: '100vh',
        paddingTop: '80px',
      }}>
        <section style={{
          padding: '40px 24px 80px',
          position: 'relative',
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
          }}>
            {/* Header */}
            <motion.header
              ref={headerRef}
              style={{
                textAlign: 'center',
                marginBottom: '60px',
              }}
              initial={{ opacity: 0, y: -30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 style={{
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontWeight: 700,
                color: '#E9E3DF',
                marginBottom: '12px',
                lineHeight: 1.3,
                fontStyle: 'italic',
              }}>
                My Life Journey <span style={{ color: '#FF7A30' }}>Milestones</span>
              </h1>
              <p style={{
                fontSize: '15px',
                color: '#6c757d',
                maxWidth: '500px',
                margin: '0 auto 24px',
                lineHeight: 1.6,
              }}>
                A chronological look at the experiences, challenges, and triumphs that shaped who I am today.
              </p>
              <motion.button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 122, 48, 0.5)',
                  borderRadius: '9999px',
                  color: '#FF7A30',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  backgroundColor: 'rgba(255, 122, 48, 0.1)',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span></span>
                Download CV
              </motion.button>
            </motion.header>

            {/* Timeline */}
            {!isMobile ? (
              // Desktop Timeline
              <div style={{
                position: 'relative',
                maxWidth: '900px',
                margin: '0 auto',
              }}>
                {/* Timeline Center Line */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    backgroundColor: 'rgba(255, 122, 48, 0.3)',
                    transform: 'translateX(-50%)',
                  }}
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />

                {/* Milestones */}
                {timelineData.milestones.map((milestone, index) => (
                  <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
                ))}
              </div>
            ) : (
              // Mobile Timeline
              <div style={{
                position: 'relative',
                paddingLeft: '20px',
              }}>
                {/* Timeline Line */}
                <div style={{
                  position: 'absolute',
                  left: '8px',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: 'rgba(255, 122, 48, 0.3)',
                }} />

                {/* Milestones */}
                {timelineData.milestones.map((milestone, index) => (
                  <MobileMilestoneCard key={milestone.id} milestone={milestone} index={index} />
                ))}
              </div>
            )}
          </div>

          {/* Pulse Animation Style */}
          <style jsx global>{`
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.5);
                opacity: 0.5;
              }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
