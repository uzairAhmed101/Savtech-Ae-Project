import React from 'react';
import LogoImage from '../assets/Images/Logo.png';

export default function ModernFooter() {
  return (
    <>
      <style>{`
        .footer-link:hover {
          color: #a78bfa !important;
          transform: translateX(5px);
        }
      `}</style>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.content}>
            {/* Left Section - Brand */}
            <div style={styles.brandSection}>
              <div style={styles.logoWrapper}>
                <div style={styles.logo}>
                  <img 
                    src={LogoImage} 
                    alt="Company Logo" 
                    style={{
                      height: '80px',
                      width: 'auto',
                    }}
                  />
                </div>
              </div>
              <p style={styles.tagline}>
                Empowering Media-bottom brands with AI-driven marketing excellence.
              </p>
            </div>

            {/* Middle Section - Quick Links */}
            <div style={styles.linksSection}>
              <h3 style={styles.sectionTitle}>Quick Links</h3>
              <nav style={styles.linksList}>
                <a href="#services" className="footer-link" style={styles.link}>Services</a>
                <a href="#portfolio" className="footer-link" style={styles.link}>Portfolio</a>
                <a href="#about" className="footer-link" style={styles.link}>About Us</a>
                <a href="#contact" className="footer-link" style={styles.link}>Contact</a>
              </nav>
            </div>

            {/* Right Section - Follow Us */}
            <div style={styles.socialSection}>
              <h3 style={styles.sectionTitle}>Follow Us</h3>
              <nav style={styles.linksList}>
                <a href="#instagram" className="footer-link" style={styles.link}>Instagram</a>
                <a href="#linkedin" className="footer-link" style={styles.link}>LinkedIn</a>
                <a href="#twitter" className="footer-link" style={styles.link}>Twitter</a>
                <a href="#youtube" className="footer-link" style={styles.link}>YouTube</a>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div style={styles.copyright}>
            <p style={styles.copyrightText}>© 2025 Digital Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
    padding: '60px 20px 30px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderTop: '1px solid rgba(139, 92, 246, 0.2)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(30px, 5vw, 60px)',
    marginBottom: '50px',
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoWrapper: {
    marginBottom: '8px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  tagline: {
    fontSize: 'clamp(13px, 1.8vw, 15px)',
    color: '#94a3b8',
    lineHeight: '1.6',
    maxWidth: '350px',
    margin: 0,
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  socialSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sectionTitle: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontWeight: '600',
    color: '#ffffff',
    margin: 0,
    marginBottom: '4px',
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  link: {
    fontSize: 'clamp(13px, 1.8vw, 15px)',
    color: '#94a3b8',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    width: 'fit-content',
  },
  copyright: {
    borderTop: '1px solid rgba(139, 92, 246, 0.2)',
    paddingTop: '30px',
    textAlign: 'center',
  },
  copyrightText: {
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    color: '#64748b',
    margin: 0,
  },
};