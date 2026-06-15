'use client';

import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { getProjectById } from '@/logic/Logic_project';
import { projectDetailStyles as styles } from '@/styles/Style_projectDetail';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const project = getProjectById(id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '100px' }}>
          <div style={{ textAlign: 'center', color: '#E9E3DF' }}>
            <h1>Project Not Found</h1>
            <Link href="/project" style={{ color: '#FF7A30' }}>
              ← Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <section style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={styles.container}
          >
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => router.back()}
              style={styles.backButton}
              className="back-btn"
            >
              ← Back
            </motion.button>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={styles.hero}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={styles.heroImage}
                priority
              />
              <div style={styles.heroOverlay}>
                <span style={styles.heroCategory}>{project.category}</span>
                <h1 style={styles.heroTitle}>{project.title}</h1>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div style={styles.contentGrid} className="detail-content-grid">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={styles.leftContent}
              >
                {/* Detail Section */}
                <div>
                  <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionNumber}>01.</span> Detail Singkat
                  </h3>
                  <p style={styles.description}>
                    {project.fullDescription}
                  </p>

                  {/* Stats */}
                  <div style={styles.statsGrid}>
                    {project.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        style={styles.statItem}
                      >
                        <span style={styles.statValue}>{stat.value}</span>
                        <span style={styles.statLabel}>{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={styles.rightSidebar}
              >
                {/* Tools Card */}
                <div style={styles.toolsCard}>
                  <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionNumber}>02.</span> Tools Used
                  </h3>
                  <div style={styles.toolsGrid}>
                    {project.tools.slice(0, 8).map((tool, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        style={styles.toolItem}
                        className="tool-item"
                      >
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={36}
                          height={36}
                          style={styles.toolIcon}
                        />
                        <span style={styles.toolName}>{tool.name}</span>
                      </motion.div>
                    ))}
                    {project.tools.length > 8 && (
                      <div style={styles.toolMore}>...</div>
                    )}
                  </div>
                </div>

                {/* Live Project Card */}
                {project.websiteLink && (
                  <div style={{
                    backgroundColor: '#111',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid rgba(255, 122, 48, 0.3)',
                    boxShadow: '0 4px 20px rgba(255, 122, 48, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                    <h3 style={{ ...styles.sectionTitle, marginBottom: '8px' }}>
                      <span style={styles.sectionNumber}>03.</span> Live Project
                    </h3>
                    <p style={{ ...styles.description, fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                      Proyek ini sudah online. Silakan kunjungi website interaktifnya secara langsung.
                    </p>
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...styles.ctaButton,
                        backgroundColor: '#FF7A30',
                        color: '#0a0a0a',
                        justifyContent: 'center',
                        fontWeight: 700,
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                      }}
                      className="visit-btn"
                    >
                      Kunjungi Website ↗
                    </a>
                  </div>
                )}

                {/* CTA Card */}
                <div style={styles.ctaCard}>
                  <h4 style={styles.ctaTitle}>Let&apos;s work together</h4>
                  <p style={styles.ctaDescription}>
                    Have a project in mind? Reach out and let&apos;s turn your ideas into reality.
                  </p>
                  <Link href="/contact" style={styles.ctaButton} className="cta-btn">
                    Send Message →
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Gallery Section */}
            {project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={styles.gallerySection}
              >
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionNumber}>03.</span> Project Gallery
                </h3>
                <div style={styles.galleryGrid} className="gallery-grid">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      style={styles.galleryItem}
                      className="gallery-item"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        .back-btn:hover {
          border-color: #FF7A30 !important;
          color: #FF7A30 !important;
        }
        .tool-item:hover {
          background-color: rgba(255, 122, 48, 0.1) !important;
          transform: translateY(-2px);
        }
         .cta-btn:hover {
          background-color: #1a1a1a !important;
        }
        .visit-btn:hover {
          background-color: #ff8c4a !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 122, 48, 0.4);
        }
        .gallery-item:hover {
          transform: scale(1.02);
        }
        @media (max-width: 1024px) {
          .detail-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
