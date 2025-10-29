import { HeartIcon } from 'lucide-react';
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// Changed from import to using public URL
// import HeroVideo from '../assets/Videos/Final 2.mp4';

const HeroSection = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Keep cover but adjust positioning
          zIndex: -1,
          opacity: videoEnded ? 1 : 1,
          objectPosition: 'center top', // Show top of video instead of center
        }}
      >
        {/* Using public URL instead of import */}
        <source src="./assets/videos/Final 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Responsive Styles */}
      <style>
        {`
          /* Large screens (4K, wide displays) */
          @media (min-width: 1600px) {
            .hero-content h1 {
              font-size: 3.5rem !important;
              line-height: 1.1 !important;
            }
            .hero-content p {
              font-size: 1.25rem !important;
            }
            .hero-container {
              padding: 150px 4rem !important;
            }
          }

          /* Laptops & Desktops */
          @media (max-width: 1280px) {
            .hero-container {
              padding: 120px 2rem !important;
              /* Changed from height: 100vh to height: auto for better responsiveness */
              height: auto !important;
            }
            .hero-content h1 {
              font-size: 2.4rem !important;
            }
            .hero-content p {
              font-size: 1.05rem !important;
            }
          }

          /* Tablets (Portrait & Landscape) */
          @media (max-width: 1024px) {
            .hero-container {
              padding: 100px 1.5rem !important;
            }
            .hero-content {
              max-width: 90% !important;
            }
            .hero-content h1 {
              font-size: 2rem !important;
              line-height: 1.3 !important;
            }
            .hero-content p {
              font-size: 0.95rem !important;
              line-height: 1.6 !important;
            }
            .hero-button {
              font-size: 0.8rem !important;
              padding: 0.6rem 1.2rem !important;
            }
          }

          /* Mobile Landscape / Small Tablets */
          @media (max-width: 768px) {
            .hero-container {
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
              height: auto !important;
              padding: 80px 1rem !important;
              text-align: center !important;
            }
            .hero-content {
              padding: 1rem !important;
              text-align: center !important;
              max-width: 100% !important;
            }
            .hero-content h1 {
              font-size: 1.8rem !important;
              line-height: 1.3 !important;
            }
            .hero-content p {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
            .hero-button {
              font-size: 0.8rem !important;
              padding: 0.6rem 1.2rem !important;
              margin: 0 auto !important;
            }
          }

          /* Small Phones (portrait) */
          @media (max-width: 480px) {
            .hero-container {
              padding: 60px 1rem !important;
              height: auto !important;
            }
            .hero-content h1 {
              font-size: 1.4rem !important;
              line-height: 1.4 !important;
            }
            .hero-content p {
              font-size: 0.85rem !important;
              line-height: 1.5 !important;
            }
            .hero-button {
              display: block !important;
              font-size: 0.75rem !important;
              padding: 0.5rem 1rem !important;
            }
          }

          /* Ultra-small screens (foldables / old phones) */
          @media (max-width: 360px) {
            .hero-content h1 {
              font-size: 1.2rem !important;
            }
            .hero-content p {
              font-size: 0.8rem !important;
            }
          }
        `}
      </style>

      <div className="hero-container" style={styles.container}>
        <div className="hero-content" style={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.badge}
          >
            <span style={styles.badgeText}>AI-Powered Digital Excellence</span>
          </motion.div>

          <motion.h1
            style={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Middle<br />
            Eastern Brands with<br />
            AI-Driven Marketing
          </motion.h1>

          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where Arabian elegance meets cutting-edge technology. Transform your<br />
            brand with intelligent PR, influencer marketing, and digital strategies.
          </motion.p>

          <motion.button
            className="hero-button"
            style={styles.ctaButton}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(124, 58, 237, 0.8)',
              filter: 'brightness(1.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={styles.buttonText}>Start Your Journey</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'visible',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '125px 2rem',
    height: 'auto',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '800px',
    animation: 'fadeInUp 1s ease-out',
    paddingTop: '2rem',
    paddingLeft: '2rem',
  },
  badge: {
    display: 'inline-block',
    padding: '0.5rem 1.25rem',
    background: 'rgba(124, 58, 237, 0.15)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '25px',
    marginBottom: '0.5rem',
    backdropFilter: 'blur(10px)',
  },
  badgeText: {
    color: '#c4b5fd',
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  heading: {
    fontSize: '2.6rem',
    fontWeight: 700,
    color: 'white',
    lineHeight: 1.1,
    marginBottom: '0.1rem',
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
    animation: 'fadeInUp 1s ease-out 0.2s both',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    animation: 'fadeInUp 1s ease-out 0.4s both',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.6rem 1.5rem',
    background: 'linear-gradient(90deg,rgba(127, 34, 254, 1) 0%, rgba(21, 93, 252, 1) 100%)',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.4)',
    animation: 'fadeInUp 1s ease-out 0.6s both',
  },
  buttonText: {
    color: 'white',
  },
};

export default HeroSection;
