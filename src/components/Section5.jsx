import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tech Launch Campaign',
      category: 'AI & Innovation',
      image: './assets/images/Section5-1img.webp',
      size: 'large',
      gridArea: '1 / 1 / 3 / 2'
    },
    {
      id: 2,
      title: 'Dubai Tech Summit',
      category: 'PR & Events',
      image: './assets/images/Section5-2img.webp',
      size: 'large',
      gridArea: '1 / 2 / 3 / 3'
    },
    {
      id: 3,
      title: 'Luxury Brand Influencer Series',
      category: 'Influencer Marketing',
      image: './assets/images/Section5-3img.webp',
      size: 'small',
      gridArea: '1 / 3 / 2 / 4'
    },
    {
      id: 4,
      title: 'Creative Campaign Excellence',
      category: 'Content Creation',
      image: './assets/images/Section5-4img.webp',    
      size: 'large',
      gridArea: '2 / 3 / 4 / 4'
    },
    {
      id: 5,
      title: 'Social Media Revolution',
      category: 'Digital Strategy',
      image: './assets/images/Section5-5img.webp',
      size: 'small',
      gridArea: '3 / 1 / 4 / 2'
    },
    {
      id: 6,
      title: 'Influencer Marketing Summit',
      category: 'Industry Leadership',
      image: './assets/images/Section5-6img.webp',
      size: 'small',
      gridArea: '3 / 2 / 4 / 3'
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

          /* Container */
          .featured-container {
            position: relative;
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1535 50%, #0f1229 100%);
            padding: 2rem 5rem;
            overflow: visible;
          }

          /* Decorative 3D Blobs */
          .decor-left {
            position: absolute;
            top: 8%;
            left: 0%;
            opacity: 0.9;
            z-index: 1;
          }

          .decor-right {
            position: absolute;
            bottom: -9%;
            right: -2%;
            opacity: 0.9;
            z-index: 1;
          }

          .svg-3d {
            filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.8));
          }

          .decor-image {
            filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.8));
          }

          /* Header */
          .featured-header {
            text-align: center;
            margin-bottom: 0.8rem;
            position: relative;
            z-index: 10;
          }

          .featured-title {
            font-size: 3.5rem;
            font-weight: 700;
            color: white;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
            letter-spacing: -0.5px;
          }

          .featured-subtitle {
            font-size: 1.1rem;
            color: #94a3b8;
            line-height: 1.6;
            max-width: 650px;
            margin: 0 auto;
          }

          /* Projects Grid - Masonry Layout */
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 150px);
            gap: 1.5rem;
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
            padding: 2rem 6rem;
          }

          /* Project Card */
          .project-card {
            position: relative;
            border-radius: 24px;
            cursor: pointer;
            border: 1px solid rgba(139, 92, 246, 0.2);
            background-size: cover;
            background-position: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }

          .project-card:nth-child(1) { }
          .project-card:nth-child(2) { }
          .project-card:nth-child(3) { }
          .project-card:nth-child(4) { }
          .project-card:nth-child(5) { }
          .project-card:nth-child(6) { }

          .project-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 25px 60px rgba(139, 92, 246, 0.5);
            z-index: 20;
            border-color: rgba(168, 85, 247, 0.4);
          }

          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.7s ease;
          }

          .project-card:hover::before {
            left: 100%;
          }

          /* Card Sizes using Grid Areas */
          .small {
            grid-row: span 1;
          }

          .large {
            grid-row: span 2;
          }

          /* Project Overlay */
          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to top, 
              rgba(10, 14, 39, 0.9) 0%, 
              rgba(26, 21, 53, 0.6) 50%,
              rgba(139, 92, 246, 0.2) 100%
            );
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem;
            transition: all 0.4s ease;
          }

          .project-card:hover .project-overlay {
            background: linear-gradient(
              to top, 
              rgba(10, 14, 39, 0.95) 0%, 
              rgba(26, 21, 53, 0.7) 50%,
              rgba(139, 92, 246, 0.3) 100%
            );
          }

          /* Project Content */
          .project-content {
            position: relative;
            z-index: 2;
            transform: translateY(8px);
            opacity: 0.95;
            transition: all 0.4s ease;
          }

          .project-card:hover .project-content {
            transform: translateY(0);
            opacity: 1;
          }

          .project-category {
            display: inline-block;
            padding: 0.5rem 1.1rem;
            background: rgba(139, 92, 246, 0.25);
            border: 1px solid rgba(168, 85, 247, 0.4);
            border-radius: 20px;
            color: #c4b5fd;
            font-size: 0.7rem;
            font-weight: 600;
            margin-bottom: 0.85rem;
            backdrop-filter: blur(12px);
            text-transform: uppercase;
            letter-spacing: 0.8px;
          }

          .project-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: white;
            line-height: 1.3;
            text-shadow: 0 3px 15px rgba(0, 0, 0, 0.8);
            margin: 0;
          }

          /* Tablet (768px - 1024px) */
          @media (max-width: 1024px) {
            .featured-container {
              padding: 4rem 1.5rem;
            }

            .featured-title {
              font-size: 2.8rem;
            }


            .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
            .project-card:nth-child(2) { grid-area: 2 / 1 / 4 / 2; }
            .project-card:nth-child(3) { grid-area: 1 / 2 / 2 / 3; }
            .project-card:nth-child(4) { grid-area: 2 / 2 / 4 / 3; }
            .project-card:nth-child(5) { grid-area: 4 / 1 / 5 / 2; }
            .project-card:nth-child(6) { grid-area: 4 / 2 / 5 / 3; }

            .decor-left,
            .decor-right {
              opacity: 0.6;
            }

            .decor-left svg,
            .decor-right svg {
              width: 150px;
              height: 170px;
            }

            .project-overlay {
              padding: 1.5rem;
            }

            .project-title {
              font-size: 1.3rem;
            }
          }

          /* Mobile (320px - 767px) */
          @media (max-width: 767px) {
            .featured-container {
              padding: 3rem 1rem;
            }

            .3D Blob Decorative Element - Top Left{
              width: 150px;
              height: 150px;
            }
            .decor-left,
            .decor-right {
              width: 109px;
              height: 109px;
            }
            
            .decor-left {
              width: 109px;
              height: 109px;
              top: 0%;
              left: -2%;
            }

            .featured-header {
              margin-bottom: 3rem;
            }

            .featured-title {
              font-size: 2rem;
              margin-bottom: 0.75rem;
            }

            .featured-subtitle {
              font-size: 0.95rem;
              padding: 0 0.5rem;
            }

            
            .projects-grid {
              gap: 1.3rem;
              grid: none;
            }

            .project-card {
              grid-row: span 1 !important;
              grid-column: 1 / -1 !important;
              min-height: 280px;
            }

            .project-card:nth-child(1) { grid-area: auto; }
            .project-card:nth-child(2) { grid-area: auto; }
            .project-card:nth-child(3) { grid-area: auto; }
            .project-card:nth-child(4) { grid-area: auto; }
            .project-card:nth-child(5) { grid-area: auto; }
            .project-card:nth-child(6) { grid-area: auto; }

            .project-overlay {
              padding: 1.5rem;
            }

            .project-title {
              font-size: 1.25rem;
            }

            .project-category {
              font-size: 0.65rem;
              padding: 0.4rem 0.9rem;
            }

            .decor-left {
              top: 0%;
              left: 0%;
              opacity: 0.4;
            }

            .decor-right {
              bottom: -9%;
              right: -2%;
              opacity: 0.4;
            }

            .decor-left svg,
            .decor-right svg {
              width: 120px;
              height: 140px;
            }

            .project-card:hover {
              transform: translateY(-6px) scale(1.01);
            }
          }

          /* Small Mobile (320px - 480px) */
          @media (max-width: 480px) {
            .featured-container {
              padding: 2.5rem 0.75rem;
            }

            .featured-title {
              font-size: 1.75rem;
            }

            .featured-subtitle {
              font-size: 0.88rem;
            }

            .projects-grid {
              gap: 1rem;
              padding: 0;
            }

            .project-card {
              min-height: 260px;
            }

            .project-overlay {
              padding: 1.25rem;
            }

            .project-title {
              font-size: 1.15rem;
            }
          }

          /* Large Desktop (1440px+) */
          @media (min-width: 1440px) {
            .projects-grid {
              max-width: 1500px;
              gap: 2rem;
              grid-template-rows: repeat(3, 320px);
            }

            .featured-title {
              font-size: 4rem;
            }

            .featured-subtitle {
              font-size: 1.15rem;
            }
          }

          /* Ultra-wide (1920px+) */
          @media (min-width: 1920px) {
            .featured-container {
              padding: 8rem 4rem;
            }

            .projects-grid {
              max-width: 1700px;
              gap: 2.5rem;
              grid-template-rows: repeat(3, 350px);
            }

            .featured-title {
              font-size: 4.5rem;
            }
          }
        `}</style>

        {/* Decorative 3D Element - Top Left - Outside container */}
        <motion.div 
          className="decor-left"
          style={{
            position: 'absolute',
            top: '8%',
            left: '1%',
            zIndex: 1,
          }}
          initial={{ opacity: 0, x: -30, y: -30 }}
          whileInView={{ 
            opacity: 0.9, 
            x: 0,
            y: [0, -5, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.1
          }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <img 
            src="./assets/images/Section5-2.png" 
            alt="3D Blob Decorative Element - Top Left" 
            className="decor-image"
            style={{
              width: '200px',
              height: '220px'
            }}
          />
        </motion.div>

        {/* Decorative 3D Element - Bottom Right - Outside container */}
        <motion.div 
          className="decor-right"
          style={{
            position: 'absolute',
            bottom: '-9%',
            right: '-2%',
            zIndex: 1,
          }}
          initial={{ opacity: 0, x: 30, y: 30 }}
          whileInView={{ 
            opacity: 0.9, 
            x: 0,
            y: [0, -5, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.3
          }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <img 
            src="./assets/images/Section5-1.png" 
            alt="3D Blob Decorative Element - Bottom Right" 
            className="decor-image"
            style={{
              width: '220px',
              height: '240px'
            }}
          />
        </motion.div>

        <div className="featured-container">
          {/* Header */}
          <div className="featured-header">
            <h2 className="featured-title">Featured Projects</h2>
            <p className="featured-subtitle">
              Transformative campaigns that set new standards across the Middle East
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`project-card ${project.size}`}
                style={{
                  backgroundImage: `url(${project.image})`,
                  gridArea: project.gridArea
                }}
              >
                <div className="project-overlay">
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default FeaturedProjects;