'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { skillData } from '@/logic/Logic_skill';

export default function SkillSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      style={{
        padding: '80px 24px',
        backgroundColor: '#0a0a0a',
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              color: 'rgba(233, 227, 223, 0.5)',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {skillData.badge}
          </span>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: 700,
              color: '#E9E3DF',
              margin: '0 0 12px 0',
            }}
          >
            {skillData.title}
          </h2>
          <p
            style={{
              color: 'rgba(233, 227, 223, 0.5)',
              fontSize: '14px',
              margin: 0,
            }}
          >
            {skillData.subtitle}
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px',
          }}
          className="skills-grid"
        >
          {skillData.categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              {/* Category Title */}
              <h3
                style={{
                  color: '#E9E3DF',
                  fontSize: '16px',
                  fontWeight: 600,
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '24px',
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Circle with Icon */}
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        border: '2px solid #FF7A30',
                        backgroundColor: 'rgba(255, 122, 48, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={36}
                        height={36}
                        style={{
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          // Show placeholder if image not found
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Label */}
                    <span
                      style={{
                        color: 'rgba(233, 227, 223, 0.7)',
                        fontSize: '11px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                      }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
