import React, { useState, useEffect } from 'react';
// Changed from import to using public URL
// import logoImage from '../assets/Images/Logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          {/* Logo Section */}
          <div style={styles.navbarLogo}>
            <img 
              // Using public URL instead of import
              src="./assets/images/Logo.png" 
              alt="SayTech.Ae Logo" 
              style={styles.logoImage}
            />
          </div>

          {/* Hamburger Menu */}
          <button 
            className="hamburger"
            style={{
              ...styles.hamburger,
              ...(isMenuOpen ? styles.hamburgerActive : {})
            }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span style={{
              ...styles.hamburgerSpan,
              ...(isMenuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {})
            }}></span>
            <span style={{
              ...styles.hamburgerSpan,
              ...(isMenuOpen ? { opacity: 0 } : {})
            }}></span>
            <span style={{
              ...styles.hamburgerSpan,
              ...(isMenuOpen ? { transform: 'rotate(-45deg) translate(6px, -6px)' } : {})
            }}></span>
          </button>

          {/* Navigation Links */}
          <ul 
            className={`nav-links ${isMenuOpen ? 'active' : ''}`} 
            style={{
              ...styles.navLinks,
              ...(isMenuOpen ? styles.navLinksActive : {})
            }}
          >
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <li style={styles.navCta}>
              <ContactBtnWithHover href="#contact">Contact</ContactBtnWithHover>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Inline Responsive Media Queries */}
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hamburger {
            transition: all 0.3s ease;
          }

          .hamburger span {
            background: white;
            transition: all 0.3s ease;
          }

          .hamburger:hover span {
            background: #c4b5fd;
          }

          /* Responsive Layouts */
          @media (max-width: 1024px) {
            .nav-links {
              gap: 1.5rem !important;
            }
          }

          @media (max-width: 968px) {
            .hamburger {
              display: flex !important;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              z-index: 1001;
            }

            .nav-links {
              position: fixed !important;
              top: 0;
              right: -100%;
              height: 100vh;
              width: 260px;
              background: rgba(10, 14, 39, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              padding: 2rem;
              gap: 2rem;
              transition: right 0.4s ease;
              border-left: 1px solid rgba(124, 58, 237, 0.3);
              box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
              z-index: 1000;
            }

            .nav-links.active {
              right: 0 !important;
            }

            .nav-item {
              width: 100%;
            }

            .nav-link {
              font-size: 1.1rem !important;
              width: 100%;
            }

            .nav-cta {
              width: 100%;
              margin-top: 1rem;
            }

            .contact-btn {
              display: block !important;
              text-align: center !important;
              width: 100% !important;
            }
          }

          @media (max-width: 600px) {
            .nav-links {
              width: 220px !important;
              padding: 1.5rem !important;
            }

            .nav-link {
              font-size: 1rem !important;
            }

            .contact-btn {
              font-size: 0.85rem !important;
            }

            .logo img {
              height: 45px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

/* ---------- NavLink Component ---------- */
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="nav-item" style={styles.navItem}>
      <a 
        href={href} 
        className="nav-link"
        style={{
          ...styles.navLink,
          ...(isHovered ? styles.navLinkHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <span style={{
          ...styles.navLinkUnderline,
          ...(isHovered ? { width: '100%' } : {})
        }}></span>
      </a>
    </li>
  );
};

/* ---------- Contact Button ---------- */
const ContactBtnWithHover = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      className="contact-btn"
      style={{
        ...styles.contactBtn,
        ...(isHovered ? {
          boxShadow: '0 8px 25px rgba(124, 58, 237, 0.7)',
          transform: 'translateY(-2px)',
          filter: 'brightness(1.2)'
        } : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

/* ---------- Base Styles ---------- */
const styles = {
  navbar: {
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
    position: 'fixed',
    top: 0,
    opacity: 0.75,
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    width: '100%',
  },
  navbarContainer: {
    margin: '0 auto',
    padding: '0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    cursor: 'pointer',
    zIndex: 1001,
  },
  logoImage: {
    height: '60px',
    width: 'auto',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    zIndex: 1001,
    gap: '4px',
  },
  hamburgerSpan: {
    width: '25px',
    height: '2px',
    background: 'white',
    transition: 'all 0.3s ease',
    borderRadius: '2px',
    display: 'block',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: 'relative',
  },
  navLink: {
    color: '#e5e7eb',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    position: 'relative',
    padding: '0.5rem 0',
    display: 'block',
  },
  navLinkHover: {
    color: '#b46bf8',
  },
  navLinkUnderline: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: '2px',
    background: 'linear-gradient(90deg,rgba(127, 34, 254, 1) 0%, rgba(21, 93, 252, 1) 100%)',
    transition: 'width 0.3s ease',
  },
  navCta: {
    listStyle: 'none',
  },
  contactBtn: {
    background: 'linear-gradient(90deg,rgba(127, 34, 254, 1) 0%, rgba(21, 93, 252, 1) 100%)',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
};

export default NavBar;