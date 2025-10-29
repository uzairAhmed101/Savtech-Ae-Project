import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Section8Video from '../assets/Videos/Final.mp4';

export default function MagicContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add a nice animation feedback when submitting
    alert('Message sent successfully!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .magic-input:focus, .magic-textarea:focus {
          border-color: #8b5cf6 !important;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2) !important;
        }
        
        .magic-button {
          transition: all 0.3s ease !important;
        }

        .magic-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 35px rgba(139, 92, 246, 0.7) !important;
          filter: brightness(1.2) !important;
        }

        .magic-button:active {
          transform: translateY(0px) !important;
        }

        // Global button hover effect
        button {
          transition: all 0.3s ease;
        }

        button:hover {
          filter: brightness(1.2);
        }

        /* Main Grid Layout */
        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .main-grid {
            gap: 20px;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={Section8Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <motion.div 
          style={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            style={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h1 style={styles.title}>Let's Create Magic Together</h1>
            <p style={styles.subtitle}>Ready to transform your digital presence? Get in touch with our team</p>
          </motion.div>

          <div className="main-grid">
            {/* Left Side - Get In Touch and Office Hours */}
            <motion.div 
              style={styles.leftColumn}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Get In Touch Container */}
              <motion.div 
                style={styles.contactContainer}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 70px rgba(139, 92, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={styles.sectionTitle}>Get In Touch</h3>
                
                <div style={styles.contactItem}>
                  <motion.div 
                    style={styles.iconWrapper}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail size={20} color="#fff" />
                  </motion.div>
                  <div style={styles.contactText}>
                    <div style={styles.contactLabel}>Email</div>
                    <div style={styles.contactValue}>hello@agency.de</div>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <motion.div 
                    style={styles.iconWrapper}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone size={20} color="#fff" />
                  </motion.div>
                  <div style={styles.contactText}>
                    <div style={styles.contactLabel}>Phone</div>
                    <div style={styles.contactValue}>+1 234 567 8901</div>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <motion.div 
                    style={styles.iconWrapper}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin size={20} color="#fff" />
                  </motion.div>
                  <div style={styles.contactText}>
                    <div style={styles.contactLabel}>Location</div>
                    <div style={styles.contactValue}>Dubai, UAE</div>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours Container */}
              <motion.div 
                style={styles.officeContainer}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 70px rgba(139, 92, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 style={styles.officeTitle}>Office Hours</h4>
                <p style={styles.officeText}>Monday - Thursday, 8:00 AM - 6:00 PM PST</p>
                <p style={styles.officeText}>Friday - Saturday: Closed</p>
              </motion.div>
            </motion.div>

            {/* Right Side - Form Container */}
            <motion.form 
              onSubmit={handleSubmit} 
              style={styles.formContainerWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name</label>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="magic-input"
                  style={styles.input}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="magic-input"
                  style={styles.input}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Company</label>
                <motion.input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="magic-input"
                  style={styles.input}
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <motion.textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  className="magic-textarea"
                  style={styles.textarea}
                  rows="4"
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <motion.button 
                type="submit" 
                className="magic-button" 
                style={styles.submitButton}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 12px 40px rgba(139, 92, 246, 0.8)",
                  filter: "brightness(1.3)"
                }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span>Send Message</span>
                <Send size={18} style={{ marginLeft: '8px' }} />
              </motion.button>
            </motion.form>

          </div>
        </motion.div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 6rem',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '1200px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #ffffff, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: 'clamp(13px, 2vw, 16px)',
    color: '#94a3b8',
    fontWeight: '400',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  contactContainer: {
    background: 'rgba(15, 23, 42, 0.6)',
    borderRadius: '20px',
    padding: 'clamp(25px, 4vw, 40px)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  officeContainer: {
    background: 'rgba(15, 23, 42, 0.6)',
    borderRadius: '20px',
    padding: 'clamp(20px, 3vw, 30px)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
  },
  formContainerWrapper: {
    background: 'rgba(15, 23, 42, 0.6)',
    borderRadius: '20px',
    padding: 'clamp(20px, 3vw, 30px)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    height: 'auto',
    maxHeight: '600px',
  },
  sectionTitle: {
    fontSize: 'clamp(20px, 3vw, 24px)',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '8px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  contactText: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactLabel: {
    fontSize: 'clamp(11px, 1.5vw, 12px)',
    color: '#94a3b8',
    marginBottom: '4px',
  },
  contactValue: {
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#ffffff',
    fontWeight: '500',
    wordBreak: 'break-word',
  },
  officeTitle: {
    fontSize: 'clamp(15px, 2vw, 16px)',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '12px',
  },
  officeText: {
    fontSize: 'clamp(12px, 1.8vw, 14px)',
    color: '#94a3b8',
    marginBottom: '4px',
    lineHeight: '1.5',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: 'clamp(12px, 1.6vw, 13px)',
    fontWeight: '500',
    color: '#e2e8f0',
  },
  input: {
    padding: 'clamp(10px, 1.5vw, 12px) 14px',
    borderRadius: '12px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    background: 'rgba(15, 23, 42, 0.5)',
    color: '#ffffff',
    fontSize: 'clamp(13px, 1.6vw, 14px)',
    outline: 'none',
    transition: 'all 0.3s ease',
    width: '100%',
  },
  textarea: {
    padding: 'clamp(10px, 1.5vw, 12px) 14px',
    borderRadius: '12px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    background: 'rgba(15, 23, 42, 0.5)',
    color: '#ffffff',
    fontSize: 'clamp(13px, 1.6vw, 14px)',
    outline: 'none',
    transition: 'all 0.3s ease',
    resize: 'vertical',
    fontFamily: 'inherit',
    width: '100%',
    minHeight: '100px',
    maxHeight: '150px',
  },
  submitButton: {
    padding: 'clamp(12px, 2vw, 14px) 28px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    color: '#ffffff',
    fontSize: 'clamp(13px, 1.8vw, 15px)',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
    width: '100%',
  },
};
