import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Decorative Element - Top Left */}
      <motion.div
        style={{
          ...styles.decorLeft,
          position: 'absolute',
          top: '0%',
          left: '0%',
          width: '100%',
          zIndex: 1,
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <img
          // Using public URL instead of import
          src="./assets/images/Left-DecoratedElement-Section2.png"
          alt="3D Geometric Decorative Element - Top Left"
          style={styles.decorImage}
        />
      </motion.div>

      <div style={styles.container} className="container">
        {/* Content */}
        <div style={styles.content}>
          {/* Header */}
          <motion.div
            style={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 style={styles.title}>Who We Are</h2>
            <p style={styles.description}>
              A next-generation digital agency blending Arabian heritage with futuristic technology.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="cards-container" style={styles.cardsContainer}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <FeatureCard
                icon={<AIIcon />}
                title="AI-Powered Innovation"
                description="Harness cutting-edge AI technology to drive data-driven and automated marketing excellence."
                type="ai"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <FeatureCard
                icon={<InfluencerIcon />}
                title="Influencer Ecosystem"
                description="Connect with top-tier regional influencers across the Middle East to amplify your brand message."
                type="influencer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <FeatureCard
                icon={<StrategyIcon />}
                title="Strategic PR Excellence"
                description="Craft compelling narratives that resonate with Middle Eastern audiences and global markets."
                type="strategy"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Inline Responsive Media Queries */}
      <style>
        {`
        .feature-icon{
          width: 15%;
          margin-bottom: 1rem;
        }
          .feature-icon-inner {
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          @media (max-width: 1200px) {
            .cards-container {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.5rem !important;
            }
            h2 {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 992px) {
            .cards-container {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.2rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            .feature-card {
              padding: 1.2rem !important;
            }
          }

          @media (max-width: 768px) {
            .cards-container {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            
            h2 {
              font-size: 2.2rem !important;
              line-height: 1.3 !important;
            }

            .container{
              padding: 0 2rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }

          @media (max-width: 576px) {
            .cards-container {
              grid-template-columns: 1fr !important;
              padding: 0 1rem !important;
            }
            h2 {
              font-size: 1.8rem !important;
            }
            p {
              font-size: 0.9rem !important;
            }
            .feature-card {
              padding: 1rem !important;
            }
            img {
              max-width: 60% !important;
            }
          }

          @media (max-width: 400px) {
            h2 {
              font-size: 1.6rem !important;
            }
            p {
              font-size: 0.85rem !important;
            }
            .feature-card {
              padding: 0.8rem !important;
            }
          }

          @media (max-width: 425px) {
            .container {
              padding: 0 !important;
            }
              .decorImage:{
              display: none !important;
              }

              .decorLeft{
                display: none !important;
              }
          }
        `}
      </style>
    </div>
  );
};

/* ---------- Reusable Feature Card ---------- */
const FeatureCard = ({ icon, title, description, type }) => {
  return (
    <motion.div
      className="feature-card"
      style={styles.card}
      whileHover={{
        y: -10,
        boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <motion.div
        className={`feature-icon ${type}`}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 10px 30px rgba(124, 58, 237, 0.5)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="feature-icon-inner">{icon}</div>
      </motion.div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </motion.div>
  );
};

/* ---------- Icon Components ---------- */
const AIIcon = () => (
  // Using public URL instead of import
  <img src="./assets/images/Section2-Logo-1.png" alt="AI Icon" />
);

const InfluencerIcon = () => (
  // Using public URL instead of import
  <img src="./assets/images/Section2-Logo-2.png" alt="Influencer Icon" />
);

const StrategyIcon = () => (
  // Using public URL instead of import
  <img src="./assets/images/Section2-Logo-3.png" alt="Strategy Icon" />
);

/* ---------- Inline Style Object ---------- */
const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: '#000000',
    padding: '2rem 7.9rem',
    overflow: 'visible',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorLeft: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    opacity: 0.7,
    zIndex: 1,
  },
  decorImage: {
    maxWidth: '20%',
    height: 'auto',
    filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '0.4rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    color: 'white',
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
  },
  description: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.7,
    marginBottom: '2rem',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  },
  card: {
    background: 'rgba(15, 18, 41, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    borderRadius: '20px',
    padding: '1.5rem 1.5rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: 'white',
    marginBottom: '0.3rem',
  },
  cardDescription: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    lineHeight: 1.7,
  },
  

};

export default WhoWeAre;
