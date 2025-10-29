import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import rightDecorElement from '../assets/Images/Right-DecoratedElement-Section2.webp';
import component1 from '../assets/Images/Component 1.png';
import component2 from '../assets/Images/Component 2.png';
import component3 from '../assets/Images/Component 3.png';
import component4 from '../assets/Images/Component 4.png';
import component5 from '../assets/Images/Component 5.png';
import component6 from '../assets/Images/Component6.png';

const CoreServices = () => {
  const services = [
    {
      id: 1,
      icon: <BrainIcon />,
      color: '#a855f7',
      title: 'AI Content Strategy',
      description:
        'Machine learning-powered AI transforms content creation insights across all platforms.',
    },
    {
      id: 2,
      icon: <MegaphoneIcon />,
      color: '#3b82f6',
      title: 'PR & Media Relations',
      description:
        'Tell your story to premium media outlets through strategic media engagement.',
    },
    {
      id: 3,
      icon: <HeartIcon />,
      color: '#ec4899',
      title: 'Influencer Campaigns',
      description:
        'Connect with authentic influencers for maximum brand performance.',
    },
    {
      id: 4,
      icon: <ChartIcon />,
      color: '#f59e0b',
      title: 'Analytics & Insights',
      description:
        'Real-time performance tracking with AI-powered predictions and reports.',
    },
    {
      id: 5,
      icon: <UsersIcon />,
      color: '#06b6d4',
      title: 'Social Media Management',
      description:
        'Comprehensive social strategy from content to community engagement.',
    },
    {
      id: 6,
      icon: <RocketIcon />,
      color: '#8b5cf6',
      title: 'Digital Transformation',
      description:
        'Fast-forward digital systems tailored for Middle Eastern businesses.',
    },
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Decorative Top-Right Element */}
      <motion.div
        style={{
          ...styles.decorRight,
          position: 'absolute',
          top: '0%',
          right: '0%',
          width: '100%',
          zIndex: 1,
        }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <img
          src={rightDecorElement}
          alt="3D Geometric Decorative Element - Top Right"
          style={styles.decorImage}
        />
      </motion.div>

      {/* Responsive Media Queries */}
      <style>
        {`
          @media (max-width: 1200px) {
            .core-title {
              font-size: 2.5rem !important;
            }
            .core-subtitle {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 992px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1rem !important;
            }
            .core-title {
              font-size: 2.2rem !important;
            }
            .core-subtitle {
              font-size: 1rem !important;
              padding: 0 1rem !important;
            }
          }

          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 1rem !important;
            }
            .core-container {
              padding: 2rem 2rem !important;
              text-align: center !important;
            }
            .core-title {
              font-size: 1.8rem !important;
            }
            .core-subtitle {
              font-size: 0.95rem !important;
            }
            .service-card {
              text-align: center !important;
              padding: 1.2rem 1.5rem !important;
            }
            .service-icon {
              margin: 0 auto 1rem auto !important;
            }
          }

          @media (max-width: 480px) {
            .core-container {
              padding: 1.5rem !important;
            }
            .core-title {
              font-size: 1.6rem !important;
            }
            .core-subtitle {
              font-size: 0.9rem !important;
            }
            .services-grid {
              gap: 0.8rem !important;
            }
            .service-card {
              padding: 1rem 1rem !important;
            }
          }

          @media (max-width: 360px) {
            .core-title {
              font-size: 1.4rem !important;
            }
            .core-subtitle {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>

      <div className="core-container" style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="core-title" style={styles.title}>
            Core Services
          </h2>
          <p className="core-subtitle" style={styles.subtitle}>
            Comprehensive digital solutions engineered for the modern Middle Eastern market
          </p>
        </motion.div>

        {/* Services Grid */}
        <div style={styles.servicesGrid} className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: '-50px' }}
              className="service-card"
              style={styles.card}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 25px 60px rgba(124, 58, 237, 0.35)',
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => (
  <>
    <motion.div
      className="service-icon"
      style={{
        ...styles.iconWrapper,
        background: service.color,
        borderColor: `${service.color}40`,
      }}
      whileHover={{
        scale: 1.1,
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {service.icon}
    </motion.div>
    <h3 style={styles.cardTitle}>{service.title}</h3>
    <p style={styles.cardDescription}>{service.description}</p>
  </>
);

/* ---------- ICON COMPONENTS ---------- */
const BrainIcon = () => (
  <img
    src={component1}
    alt="AI Content Strategy"
    style={styles.customIconImage}
  />
);

const MegaphoneIcon = () => (
  <img
    src={component2}
    alt="PR & Media Relations"
    style={styles.customIconImage}
  />
);

const HeartIcon = () => (
  <img
    src={component3}
    alt="Influencer Campaigns"
    style={styles.customIconImage}
  />
);

const ChartIcon = () => (
  <img
    src={component4}
    alt="Analytics & Insights"
    style={styles.customIconImage}
  />
);

const UsersIcon = () => (
  <img
    src={component5}
    alt="Social Media Management"
    style={styles.customIconImage}
  />
);

const RocketIcon = () => (
  <img
    src={component6}
    alt="Digital Transformation"
    style={styles.customIconImage}
  />
);

/* ---------- INLINE STYLES ---------- */
const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: '#000000',
    padding: '1rem 7.9rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  decorRight: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    opacity: 0.6,
    zIndex: 1,
  },
  decorImage: {
    maxWidth: '20%',
    height: 'auto',
    filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    maxWidth: '700px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    color: 'white',
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  card: {
    background: 'rgba(15, 18, 41, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    borderRadius: '20px',
    padding: '1rem 0rem 1rem 1.5rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  iconWrapper: {
    width: '55px',
    height: '55px',
    borderRadius: '14px',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  customIconImage: {
    width: '28px',
    height: '28px',
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

export default CoreServices;
