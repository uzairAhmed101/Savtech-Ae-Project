import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Section4Icon from '../assets/Images/Section4-Icon.png';
import Section4Gradient from '../assets/Images/Section4-Gradient-1-2.png';

const CompaniesWeWorkWith = () => {
  const companies = [
    { name: 'Emirates Airlines', industry: 'Aviation' },
    { name: 'Dubai Mall', industry: 'Retail' },
    { name: 'Aramco', industry: 'Energy' },
    { name: 'Majid Al Futtaim', industry: 'Hospitality' },
    { name: 'Etisalat', industry: 'Telecom' },
    { name: 'Al Rajhi Bank', industry: 'Finance' },
    { name: 'Emaar Properties', industry: 'Real Estate' },
    { name: 'Almarai', industry: 'FMCG' },
    { name: 'Rotana Hotels', industry: 'Hospitality' },
    { name: 'Noon.com', industry: 'E-commerce' },
    { name: 'Careem', industry: 'Technology' },
    { name: 'Talabat', industry: 'Food Tech' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Decorative Top Left Element */}
      <motion.div
        style={{
          ...styles.decorLeft,
          position: 'absolute',
          top: '0%',
          left: '0%',
          width: '100%',
          zIndex: 1,
        }}
        initial={{ opacity: 0, x: -30, y: -30 }}
        whileInView={{ opacity: 0.7, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <img
          src={Section4Gradient}
          alt="Gradient Decorative Element - Top Left"
          style={styles.decorImageLeft}
        />
      </motion.div>

      {/* Decorative Bottom Right Element */}
      <motion.div
        style={{
          ...styles.decorRight,
          position: 'absolute',
          bottom: '-6%',
          right: '-2%',
          width: '100%',
          zIndex: 1,
        }}
        initial={{ opacity: 0, x: 30, y: 30 }}
        whileInView={{ opacity: 0.7, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <img
          src={Section4Gradient}
          alt="Gradient Decorative Element - Bottom Right"
          style={styles.decorImageRight}
        />
      </motion.div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1200px) {
            .companies-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 1rem !important;
            }
            .companies-title {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 992px) {
            .companies-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .companies-title {
              font-size: 2.2rem !important;
            }
            .companies-subtitle {
              font-size: 1rem !important;
              padding: 0 1rem !important;
            }
          }

          @media (max-width: 768px) {
            .companies-grid {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 1rem !important;
            }
            .companies-container {
              padding: 2rem 2rem !important;
              text-align: center !important;
            }

            .decor-right {
              display: none !important;
            }
            .companies-title {
              font-size: 1.9rem !important;
            }
            .companies-subtitle {
              font-size: 0.95rem !important;
            }
            .company-card {
              padding: 1rem 1.5rem !important;
            }
          }

          @media (max-width: 480px) {
            .companies-container {
              padding: 1.5rem !important;
            }
            .companies-grid {
              gap: 0.8rem !important;
            }
            .companies-title {
              font-size: 1.6rem !important;
            }
            .companies-subtitle {
              font-size: 0.9rem !important;
            }
            .footer-text {
              font-size: 1rem !important;
            }
          }
          @media (max-width: 425px) {
            .decor-left {
              display: none !important;
            }

          }
          @media (max-width: 360px) {
            .companies-title {
              font-size: 1.4rem !important;
            }
            .companies-subtitle {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>

      <div className="companies-container" style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <img
              src={Section4Icon}
              alt="Verified Icon"
              style={{ ...styles.badgeIcon, marginRight: '8px' }}
            />
            <span style={styles.badgeText}>Trusted by Leading Brands</span>
          </div>

          <h2 className="companies-title" style={styles.title}>
            Companies We Work With
          </h2>
          <p className="companies-subtitle" style={styles.subtitle}>
            Empowering Middle Eastern enterprises and global brands with
            <br />
            cutting-edge AI-driven marketing solutions.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="companies-grid" style={styles.companiesGrid}>
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="company-card"
              style={styles.card}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: '0 20px 50px rgba(124, 58, 237, 0.25)',
              }}
              transition={{ duration: 0.4 }}
            >
              <CompanyCard company={company} />
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <div style={styles.footer}>
          <p className="footer-text" style={styles.footerText}>
            Join over{' '}
            <span style={styles.highlight}>200+ brands</span> transforming their
            digital presence.
          </p>
        </div>
      </div>
    </div>
  );
};

const CompanyCard = ({ company }) => {
  return (
    <div style={styles.cardInner}>
      <div style={styles.iconWrapper}>
        <img
          src={Section4Icon}
          alt={`${company.name} Icon`}
          style={styles.companyIconImage}
        />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{company.name}</h3>
        <p style={styles.cardIndustry}>{company.industry}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, #0a0e27 0%, #1a1040 50%, #0f1229 100%)',
    padding: '2rem 7.9rem 1rem 7.9rem',
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  decorLeft: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    animation: 'float3D 10s ease-in-out infinite',
    opacity: 0.7,
    zIndex: 1,
  },
  decorImageLeft: {
    width: '20%',
    height: '20%',
    filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.5))',
  },
  decorRight: {
    position: 'absolute',
   bottom: '-9%',
    right: '-5%',
    rotate: '5deg',
    animation: 'float3D 12s ease-in-out infinite',
    animationDelay: '1s',
    opacity: 0.7,
    zIndex: 1,
     display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  decorImageRight: {
    width: '20%',
    height: '20%',
    filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.5))',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
    position: 'relative',
    zIndex: 10,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1.25rem',
    background: 'rgba(124, 58, 237, 0.15)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '25px',
    backdropFilter: 'blur(10px)',
    marginBottom: '0.8rem',
  },
  badgeIcon: {
    width: '14px',
    height: '14px',
  },
  badgeText: {
    color: '#c4b5fd',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    color: 'white',
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#94a3b8',
    lineHeight: 1.7,
  },
  companiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.8rem',
    maxWidth: '1200px',
    width: '100%',
    position: 'relative',
    zIndex: 10,
    marginTop: '0.5rem',
  },
  card: {
    background: 'rgba(15, 18, 41, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(124, 58, 237, 0.25)',
    borderRadius: '16px',
    padding: '1rem',
    cursor: 'pointer',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'all 0.4s ease',
  },
  iconWrapper: {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    background: 'rgba(124, 58, 237, 0.1)',
    border: '2px solid rgba(168, 85, 247, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 0.5rem auto',
  },
  companyIconImage: {
    width: '20px',
    height: '20px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'white',
    marginBottom: '0.5rem',
    lineHeight: 1.3,
  },
  cardIndustry: {
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
  footer: {
    marginTop: '4rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  footerText: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
  },
  highlight: {
    color: '#a855f7',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s linear infinite',
  },
};

export default CompaniesWeWorkWith;
