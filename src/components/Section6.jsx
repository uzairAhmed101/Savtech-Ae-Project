import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import RocketImage from '../assets/Images/Section6-Rocket.png';

const InfluencerMarketing = () => {
  const stats = [
    {
      id: 1,
      icon: '👥',
      title: 'Active Influencers',
      color: '#8b5cf6'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Monthly Reach',
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Engagement Rate',
      color: '#ec4899'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Campaigns Delivered',
      color: '#f97316'
    }
  ];

  const features = [
    {
      id: 1,
      title: 'Micro to Mega',
      description: 'Access influencers across all tiers, from niche micro-influencers to celebrity mega-influencers'
    },
    {
      id: 2,
      title: 'AI-Matching',
      description: 'Advanced algorithms match your brand with the perfect influencer partners'
    },
    {
      id: 3,
      title: 'Real-time Analytics',
      description: 'Track campaign performance with live dashboards and comprehensive reporting'
    }
  ];

  return (
    <div style={{position: 'relative', width: '100%'}}>
      <>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .influencer-container {
            position: relative;
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #0f0b1f 0%, #1a0f2e 50%, #0d0a1f 100%);
            padding: 2rem 10rem 6rem 10rem;
            overflow: hidden;
          }

          /* 3D Rocket Decoration */
          .rocket-decor {
            position: absolute;
            top: 0%;
            left: -1%;
            opacity: 0.95;
            z-index: 1;
            rotate: 15deg;
            filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.8));
          }

          .header-section {
            text-align: center;
            margin-bottom: 1rem;
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
            font-size: 3.2rem;
            font-weight: 700;
            color: white;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
            letter-spacing: -0.5px;
            line-height: 1.2;
          }

          .main-subtitle {
            font-size: 1rem;
            color: #94a3b8;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
          }

          /* Stats Grid */
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            max-width: 1200px;
            margin: 0 auto 3rem;
            position: relative;
            z-index: 10;
          }

          .stat-card {
            background: linear-gradient(135deg, rgba(30, 20, 60, 0.6) 0%, rgba(20, 15, 40, 0.4) 100%);
            border: 1px solid hsl(203, 85%, 45%);
            border-radius: 20px;
            padding: 2rem 1.5rem;
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            animation: scaleIn 0.6s ease-out backwards;
          }

          .stat-card:nth-child(1) {
            border: 1px solid hsl(265, 67%, 53%);
          }

          .stat-card:nth-child(2) {
            border: 1px solid hsl(210, 85%, 55%);
          }

          .stat-card:nth-child(3) {
            border: 1px solid hsl(337, 89%, 52%);
          }

          .stat-card:nth-child(4) {
            border: 1px solid hsl(25, 85%, 55%);
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-8px);
            border-color: hsl(337, 89%, 52%);
            box-shadow: 0 20px 50px rgba(139, 92, 246, 0.3);
          }

          .stat-card:nth-child(1):hover {
            border-color: hsl(265, 67%, 53%);
            box-shadow: 0 20px 50px rgba(30, 144, 255, 0.3);
          }

          .stat-card:nth-child(2):hover {
            border-color: hsl(210, 85%, 55%);
            box-shadow: 0 20px 50px rgba(30, 144, 255, 0.3);
          }

          .stat-card:nth-child(3):hover {
            border-color: hsl(337, 89%, 52%);
            box-shadow: 0 20px 50px rgba(255, 0, 128, 0.3);
          }

          .stat-card:nth-child(4):hover {
            border-color: hsl(25, 85%, 55%);
            box-shadow: 0 20px 50px rgba(255, 140, 0, 0.3);
          }

          .stat-card:hover .stat-icon {
            transform: scale(1.1) rotate(5deg);
          }

          .stat-title {
            font-size: 0.95rem;
            color: #94a3b8;
            font-weight: 500;
            margin: 0;
          }

          /* Features Section */
          .features-section {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
          }

          .features-container {
            background: linear-gradient(135deg, rgba(30, 20, 60, 0.5) 0%, rgba(20, 15, 40, 0.3) 100%);
            border: 1px solid hsl(203, 85%, 45%);
            border-radius: 24px;
            padding: 3rem;
            backdrop-filter: blur(15px);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
            animation: fadeInUp 0.8s ease-out 0.3s backwards;
          }

          .feature-item {
            text-align: center;
          }

          .feature-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: white;
            margin-bottom: 0.8rem;
            letter-spacing: -0.3px;
          }

          .feature-description {
            font-size: 0.9rem;
            color: #FFFFFF;
            line-height: 1.6;
            margin: 0;
          }

          /* Tablet (768px - 1024px) */
          @media (max-width: 1024px) {
            .influencer-container {
              padding: 4rem 1.5rem;
            }

            .main-title {
              font-size: 2.5rem;
            }

            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.2rem;
            }

            .features-container {
              grid-template-columns: 1fr;
              gap: 2.5rem;
              padding: 2.5rem;
            }

            .rocket-decor {
              width: 140px;
              top: '-1%',
              left: '-1%',
            }

          }

          /* Mobile (320px - 767px) */
          @media (max-width: 767px) {
            .influencer-container {
              padding: 3rem 1rem;
            }
              .rocket-image{
                  width: 250px;
                  height: 200px;
              }

            .header-section {
              margin-bottom: 2.5rem;
            }

            .rocket-image {
              display: none;
            }
            .main-title {
              font-size: 1.8rem;
              margin-bottom: 0.75rem;
            }

            .main-subtitle {
              font-size: 0.9rem;
              padding: 0 0.5rem;
            }

            .stats-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
              margin-bottom: 2rem;
            }

            .stat-card {
              padding: 1.5rem;
            }

            .stat-icon {
              width: 42px;
              height: 42px;
              font-size: 1.3rem;
            }

            .stat-title {
              font-size: 0.9rem;
            }

            .features-container {
              padding: 2rem 1.5rem;
              gap: 2rem;
            }

            .feature-title {
              font-size: 1.15rem;
            }

            .feature-description {
              font-size: 0.85rem;
              color: #FFFFFF !important;
            }

            .rocket-decor {
              width: 100px;
             top: '-1%',
            left: '-1%',
              opacity: 0.6;
            }

          }

          /* Small Mobile (320px - 480px) */
          @media (max-width: 480px) {
            .influencer-container {
              padding: 2.5rem 0.75rem;
            }

            .main-title {
              font-size: 1.6rem;
            }

            .main-subtitle {
              font-size: 0.85rem;
            }

            .stat-card {
              padding: 1.25rem;
            }

            .features-container {
              padding: 1.75rem 1.25rem;
            }

            .feature-title {
              font-size: 1.05rem;
            }

            .feature-description {
              font-size: 0.8rem;
               color: #FFFFFF;
            }
          }

          /* Large Desktop (1440px+) */
          @media (min-width: 1440px) {
            .stats-grid {
              max-width: 1400px;
              gap: 2rem;
            }

            .features-section {
              max-width: 1400px;
            }

            .features-container {
              padding: 3.5rem;
              gap: 4rem;
            }

            .main-title {
              font-size: 3.8rem;
            }
          }

          /* Ultra-wide (1920px+) */
          @media (min-width: 1920px) {
            .influencer-container {
              padding: 8rem 4rem;
            }

            .stats-grid {
              max-width: 1600px;
              gap: 2.5rem;
            }

            .features-section {
              max-width: 1600px;
            }

            .main-title {
              font-size: 4.2rem;
            }

            .main-subtitle {
              font-size: 1.1rem;
            }
          }

          .rocket-image {
            width: 90%;
            height: 90%;
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.6));
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }


          @keyframes float {
            0% {
              transform: translateY(0px) translateX(0px) rotate(-25deg);
            }
            25% {
              transform: translateY(-25px) translateX(10px) rotate(-30deg);
            }
            50% {
              transform: translateY(-40px) translateX(-10px) rotate(-20deg);
            }
            75% {
              transform: translateY(-20px) translateX(15px) rotate(-28deg);
            }
          }
        `}</style>

        {/* 3D Rocket Decoration - Outside container */}
        <motion.div 
          className="rocket-decor"
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-4%',
            zIndex: 1,
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ 
            opacity: 0.95,
            x: 0,
          }}
          transition={{ 
            duration: 1.5,
            delay: 0.3,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <img 
            src={RocketImage} 
            alt="Rocket Decoration" 
            className="rocket-image"
          />
        </motion.div>

        <div className="influencer-container">
          {/* Header Section */}
          <div className="header-section">
            <h1 className="main-title">Influencer Marketing Excellence</h1>
            <p className="main-subtitle">
              Connecting brands with the most influential voices across the Middle East
            </p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                className="stat-card"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 60px rgba(124, 58, 237, 0.35)',
                }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="stat-icon" 
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <h3 className="stat-title">{stat.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="features-section">
            <div className="features-container">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="feature-item"
                >
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default InfluencerMarketing;