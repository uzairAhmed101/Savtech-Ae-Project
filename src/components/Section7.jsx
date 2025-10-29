import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import Section7Image from '../assets/Images/Section7-1.png';

const TrustedByLeaders = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "Their AI-driven approach transformed our digital presence. We saw a 300% increase in engagement within the first quarter.",
      name: "Sarah Al-Mansouri",
      title: "CEO, Luxury Retail Brand",
      location: "Dubai, UAE",
      avatar: "SAM",
      color: "#6366f1"
    },
    {
      id: 2,
      rating: 5,
      quote: "This influencer campaigns they orchestrated were beyond exceptional. Perfect understanding of the Middle Eastern market.",
      name: "Ahmed Hassan",
      title: "Founder, Tech Startup",
      location: "Riyadh, KSA",
      avatar: "AH",
      color: "#8b5cf6"
    },
    {
      id: 3,
      rating: 5,
      quote: "Professional, innovative, and results-driven. They blend cutting-edge technology with cultural intelligence beautifully.",
      name: "Layla Ibrahim",
      title: "Marketing Director",
      location: "Doha, Qatar",
      avatar: "LI",
      color: "#a855f7"
    }
  ];

  const brands = [
    "MENA Ventures",
    "Digital First",
    "Future Brands",
    "Elite Partners",
    "Luxury Brand Co.",
    "Tech Innovators"
  ];

  return (
    <div style={{position: 'relative', width: '100%'}}>
      <div>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .trusted-container {
            position: relative;
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1535 30%, #0f1229 70%, #0a0e27 100%);
            padding: 1rem 5rem;
            overflow: visible;
          }

          /* 3D Floating Devices Decoration */
          .devices-decor {
            position: absolute;
            top: -5%;
            right: 0%;
            width: 280px;
            height: auto;
            zIndex: 1;
          }

          .devices-decor img { 
            height: 100%;
            width:100%;
        }        

        .devices-image {
          width: 300px;
          height: 300px;
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.6));
        }

        @keyframes floatDevices {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotateX(15deg) rotateY(-15deg);
          }
          25% {
            transform: translateY(-20px) translateX(-10px) rotateX(20deg) rotateY(-10deg);
          }
          50% {
            transform: translateY(-35px) translateX(10px) rotateX(10deg) rotateY(-20deg);
          }
          75% {
            transform: translateY(-15px) translateX(-5px) rotateX(25deg) rotateY(-12deg);
          }
        }

        /* Header Section */
        .header-section {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 10;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
          letter-spacing: -0.5px;
        }

        .main-subtitle {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1300px;
          margin: 0 auto 3rem;
          position: relative;
          z-index: 10;
        }

        .testimonial-card {
          background: linear-gradient(135deg, rgba(30, 20, 60, 0.5) 0%, rgba(20, 15, 40, 0.3) 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 24px;
          padding: 2rem 1rem 1rem 2rem;
          backdrop-filter: blur(15px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          animation: scaleIn 0.6s ease-out backwards;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 25px 60px rgba(139, 92, 246, 0.4);
        }

        .rating {
          display: flex;
          gap: 0.3rem;
      }

        .star {
          color: #fbbf24;
          font-size: 1.1rem;
        }

        .quote {
          font-size: 0.95rem;
          color: #e2e8f0;
          line-height: 1.7;
          margin-bottom: 0.8rem;
          font-style: italic;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          color: white;
          flex-shrink: 0;
        }

        .author-details {
          flex: 1;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }

        .author-title {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 0.1rem;
        }

        .author-location {
          font-size: 0.8rem;
          color: hsl(227, 100%, 65%);
        }

        /* Brands Section */
        .brands-section {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .brands-title {
          text-align: center;
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
        }

        .brand-card {
          background: linear-gradient(135deg, rgba(30, 20, 60, 0.4) 0%, rgba(20, 15, 40, 0.2) 100%);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .brand-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(139, 92, 246, 0.25);
        }

        .brand-name {
          font-size: 0.9rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* Tablet (768px - 1024px) */
        @media (max-width: 1024px) {
          .trusted-container {
            padding: 4rem 1.5rem;
          }

          .main-title {
            font-size: 2.8rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 4rem;
          }

          .brands-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.2rem;
          }

          .devices-decor {
            width: 220px;
            right: 3%;
            top: 10%;
          }
        }

        /* Mobile (320px - 767px) */
        @media (max-width: 767px) {
          .trusted-container {
            padding: 3rem 1rem;
          }

          .header-section {
            margin-bottom: 3rem;
          }

          .main-title {
            font-size: 2rem;
            margin-bottom: 0.75rem;
          }

          .main-subtitle {
            font-size: 0.95rem;
            padding: 0 0.5rem;
          }

          .testimonials-grid {
            gap: 1.2rem;
            margin-bottom: 3rem;
          }

          .testimonial-card {
            padding: 2rem 1.5rem;
          }

          .quote {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .avatar {
            width: 45px;
            height: 45px;
            font-size: 0.85rem;
          }

          .author-name {
            font-size: 0.95rem;
          }

          .author-title {
            font-size: 0.8rem;
          }

          .author-location {
            font-size: 0.75rem;
          }

          .brands-title {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .brands-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .brand-card {
            padding: 1.2rem 0.8rem;
          }

          .brand-name {
            font-size: 0.85rem;
          }

          .devices-decor {
            width: 150px;
            right: -5%;
            top: 8%;
            opacity: 0.5;
          }
        }

        /* Small Mobile (320px - 480px) */
        @media (max-width: 480px) {
          .trusted-container {
            padding: 2.5rem 0.75rem;
          }

          .main-title {
            font-size: 1.75rem;
          }

          .main-subtitle {
            font-size: 0.88rem;
          }

          .testimonial-card {
            padding: 1.75rem 1.25rem;
          }

          .quote {
            font-size: 0.85rem;
          }

          .brands-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Large Desktop (1440px+) */
        @media (min-width: 1440px) {
          .testimonials-grid {
            max-width: 1500px;
            gap: 2.5rem;
          }

          .brands-section {
            max-width: 1500px;
          }

          .brands-grid {
            gap: 2rem;
          }

          .main-title {
            font-size: 4rem;
          }

          .devices-decor {
            width: 320px;
          }
        }

        /* Ultra-wide (1920px+) */
        @media (min-width: 1920px) {
          .trusted-container {
            padding: 8rem 4rem;
          }

          .testimonials-grid {
            max-width: 1700px;
            gap: 3rem;
          }

          .brands-section {
            max-width: 1700px;
          }

          .main-title {
            font-size: 4.5rem;
          }

          .main-subtitle {
            font-size: 1.15rem;
          }
        }
      `}</style>

      {/* 3D Floating Devices Decoration - Outside container */}
      <motion.div 
        className="devices-decor"
        style={{
          position: 'absolute',
          top: '-5%',
          right: '0%',
          width: '280px',
          height: 'auto',
          zIndex: 1,
        }}
        initial={{ 
          opacity: 0,
          x: 50,
          y: -30,
        }}
        whileInView={{ 
          opacity: 0.85,
          x: 0,
          y: [0, -5, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.2
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <img 
          src={Section7Image} 
          alt="Devices Decoration" 
          className="devices-image"
        />
      </motion.div>

      <div className="trusted-container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">Trusted by Leaders</h1>
          <p className="main-subtitle">
            What our clients say about their transformation journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author-info">
                <div 
                  className="avatar" 
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>
                <div className="author-details">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-title">{testimonial.title}</div>
                  <div className="author-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="brands-section">
          <h2 className="brands-title">Trusted by Premium Brands</h2>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-card">
                <div className="brand-name">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TrustedByLeaders;