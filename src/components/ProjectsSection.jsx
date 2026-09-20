import React, { useState, useEffect } from 'react';
import { MapPin, Zap, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProjectsSection({ onOpenQuoteWithProject, onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 'p1',
      category: 'COMMERCIAL & ROOFTOP',
      title: 'Elevated High-Yield Rooftop Array & Execution Team',
      type: 'Commercial & Institutional Solar',
      capacity: '60 kW Elevated Rooftop Installation',
      location: 'Telangana, India',
      image: '/team_installation.jpg',
    },
    {
      id: 'p2',
      category: 'COMMERCIAL',
      title: '60 kW Landmark Commercial Solar Plant',
      type: 'Commercial Rooftop Solar',
      capacity: '60 kW Commercial Grid-Tied Array',
      location: 'Telangana, India',
      image: '/w.jpeg',
    },
    {
      id: 'p3',
      category: 'INDUSTRIAL',
      title: 'High-Capacity Industrial Rooftop Grid',
      type: 'Industrial Solar',
      capacity: '120 kW Industrial Infrastructure',
      location: 'Rangareddy, Telangana, India',
      image: '/w1.jpeg',
    },
    {
      id: 'p4',
      category: 'RESIDENTIAL',
      title: 'Residential Villa Rooftop Installation',
      type: 'Residential Solar',
      capacity: '10 kW Residential System',
      location: 'Jubilee Hills, Hyderabad, India',
      image: '/w2.jpeg',
    },
    {
      id: 'p5',
      category: 'AGRICULTURAL',
      title: 'Ground-Mounted Solar Infrastructure',
      type: 'Agricultural & Utility',
      capacity: '75 kW Solar Farm',
      location: 'Medak, Telangana, India',
      image: '/w3.jpeg',
    },
    {
      id: 'p6',
      category: 'RESIDENTIAL',
      title: 'PM Surya Ghar Residential Rooftop',
      type: 'Govt Subsidy Scheme',
      capacity: '5 kW Rooftop System',
      location: 'Cyberabad, Hyderabad, India',
      image: '/w4.jpeg',
    },
    {
      id: 'p7',
      category: 'INDUSTRIAL',
      title: 'Industrial Warehouse Solar Plant',
      type: 'Industrial Solar',
      capacity: '200 kW High-Tension Solar',
      location: 'Patancheru, Telangana, India',
      image: '/w5.jpeg',
    },
    {
      id: 'p8',
      category: 'COMMERCIAL',
      title: 'Institutional & Commercial Rooftop',
      type: 'Commercial Solar',
      capacity: '30 kW Grid-Tied System',
      location: 'Secunderabad, Telangana, India',
      image: '/w6.jpeg',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds if not hovered
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  const currentProject = projects[activeIndex];

  return (
    <section id="projects" className="section" style={{ backgroundColor: '#FAFDFB', padding: '100px 0' }}>
      <div className="container">
        
        <div className="projects-split-layout">
          
          {/* LEFT COLUMN: Header & Editorial Content */}
          <div className="projects-left-content">
            
            {/* Pill Badge */}
            <div className="gallery-pill-badge">
              <Zap size={14} style={{ color: '#F97316' }} />
              <span>PROJECT GALLERY</span>
            </div>

            {/* Main Title */}
            <h2 className="projects-main-title">
              Our <span className="projects-highlight">Solar Footprint</span>
            </h2>

            {/* Paragraph Description */}
            <p className="projects-description">
              Explore Our hallmark projects. From compact residential rooftops to massive industrial mega-plants, precision engineering is in our DNA.
            </p>

            {/* Interactive Thumbnail Selector Grid */}
            <div className="thumbnail-selector-container">
              <span className="thumbnail-selector-title">SELECT INSTALLATION:</span>
              <div className="thumbnail-strip">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`thumb-btn ${activeIndex === idx ? 'active' : ''}`}
                    title={proj.title}
                  >
                    <img src={proj.image} alt={proj.title} />
                    <span className="thumb-num">{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Featured Card Slider Frame */}
          <div 
            className="projects-right-card-wrapper"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="featured-card">
              
              {/* Top Progress Dash Dots Bar */}
              <div className="dash-indicator-bar">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`dash-segment ${activeIndex === idx ? 'active' : ''}`}
                  />
                ))}
              </div>

              {/* Main Photo Container */}
              <div className="photo-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="showcase-img"
                  onClick={() => onOpenLightbox && onOpenLightbox(currentProject.image, `${currentProject.title} (${currentProject.capacity})`)}
                />

                {/* Lightbox Expand Hint Icon */}
                <button
                  className="lightbox-expand-btn"
                  onClick={() => onOpenLightbox && onOpenLightbox(currentProject.image, `${currentProject.title} (${currentProject.capacity})`)}
                  title="Expand full screen image"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Left Floating Circular Navigation Button */}
                <button
                  onClick={handlePrev}
                  className="slider-nav-btn left-btn"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Right Floating Circular Navigation Button */}
                <button
                  onClick={handleNext}
                  className="slider-nav-btn right-btn"
                  aria-label="Next project"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Side Floating Gallery Tag */}
                <div className="side-gallery-tag">
                  GALLERY
                </div>
              </div>

              {/* Bottom Overlaid Dark Green Information Card */}
              <div className="info-card-overlay">
                <div className="info-card-header">
                  <span className="category-tag">{currentProject.category}</span>
                  
                  <div className="location-row">
                    <MapPin size={14} style={{ color: '#59C749', flexShrink: 0 }} />
                    <span className="location-text">{currentProject.location}</span>
                  </div>
                </div>

                <h3 className="installation-title">
                  Our Mokshith Installations
                </h3>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .projects-split-layout {
          display: grid;
          grid-template-columns: 38% 1fr;
          gap: 56px;
          align-items: center;
        }

        .gallery-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background-color: rgba(249, 115, 22, 0.08);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: #F97316;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }

        .projects-main-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          font-weight: 800;
          color: #062217;
          margin: 0 0 16px 0;
          line-height: 1.15;
        }

        .projects-highlight {
          color: #F97316;
          font-style: italic;
          font-weight: 800;
        }

        .projects-description {
          font-size: 1rem;
          color: #64748B;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 440px;
        }

        .thumbnail-selector-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .thumbnail-selector-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #94A3B8;
        }

        .thumbnail-strip {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .thumb-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0;
          background: #E2E8F0;
          transition: all 0.25s ease;
        }

        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-btn.active {
          border-color: #F97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.25);
          transform: translateY(-2px);
        }

        .thumb-num {
          position: absolute;
          bottom: 2px;
          right: 2px;
          background: rgba(6, 34, 23, 0.8);
          color: #FFF;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 1px 4px;
          border-radius: 4px;
        }

        .projects-right-card-wrapper {
          position: relative;
          width: 100%;
        }

        .featured-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background-color: #052214;
          box-shadow: 0 24px 48px -12px rgba(6, 34, 23, 0.22);
          border: 1px solid rgba(89, 199, 73, 0.2);
        }

        .dash-indicator-bar {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
          padding: 6px 14px;
          background: rgba(5, 34, 20, 0.65);
          backdrop-filter: blur(8px);
          border-radius: 100px;
        }

        .dash-segment {
          height: 5px;
          width: 8px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.35);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .dash-segment.active {
          width: 28px;
          background-color: #F97316;
        }

        .photo-container {
          position: relative;
          height: 480px;
          overflow: hidden;
          cursor: pointer;
          background-color: #052214;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .showcase-img {
          max-width: 100%;
          max-height: 100%;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .photo-container:hover .showcase-img {
          transform: scale(1.03);
        }

        .lightbox-expand-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(5, 34, 20, 0.7);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9;
          transition: all 0.25s ease;
        }

        .lightbox-expand-btn:hover {
          background: #F97316;
          color: #FFFFFF;
        }

        .slider-nav-btn {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: #062217;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
          transition: all 0.25s ease;
        }

        .slider-nav-btn:hover {
          background: #FFFFFF;
          color: #F97316;
          transform: translateY(-50%) scale(1.08);
        }

        .slider-nav-btn.left-btn {
          left: 18px;
        }

        .slider-nav-btn.right-btn {
          right: 18px;
        }

        .side-gallery-tag {
          position: absolute;
          right: -1px;
          top: 50%;
          transform: translateY(-50%);
          background: #F97316;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 8px 5px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
          z-index: 8;
        }

        .info-card-overlay {
          background: linear-gradient(180deg, rgba(16, 46, 13, 0.88) 0%, #102E0D 100%);
          backdrop-filter: blur(12px);
          padding: 24px 28px;
          color: #FFFFFF;
          border-top: 1px solid rgba(89, 199, 73, 0.25);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .category-tag {
          background-color: #F97316;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .location-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #CBD5E1;
        }

        .location-text {
          font-weight: 500;
        }

        .info-card-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .installation-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.25;
        }

        .title-sub {
          color: #59C749;
        }

        .capacity-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #FFFDF1;
        }

        .request-quote-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #59C749;
          color: #052214;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 4px;
        }

        .request-quote-btn:hover {
          background-color: #F97316;
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        @media (max-width: 992px) {
          .projects-split-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .photo-container {
            height: 380px;
          }
        }

        @media (max-width: 768px) {
          .projects-description {
            display: none !important;
          }
        }

        @media (max-width: 580px) {
          .photo-container {
            height: 300px;
          }

          .info-card-overlay {
            padding: 18px 20px;
          }

          .installation-title {
            font-size: 1.1rem;
          }

          .slider-nav-btn {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}


