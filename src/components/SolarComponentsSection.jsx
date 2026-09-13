import React, { useState, useEffect } from 'react';
import { Cpu, ShieldAlert, Layers, Zap } from 'lucide-react';

export default function SolarComponentsSection({ onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    {
      id: 'panels',
      badge: 'A-GRADE MONO/POLY',
      title: 'Solar Panels',
      image: '/pannel.jpg',
    },
    {
      id: 'inverters',
      badge: 'GRID-TIED & HYBRID',
      title: 'High End Inverters',
      image: '/invert.jpg',
    },
    {
      id: 'stands',
      badge: 'HEAVY DUTY MOUNTING',
      title: 'Solar Panel Stands',
      image: '/stand.webp',
    },
    {
      id: 'pump-controller',
      badge: 'DIGITAL 220V MPPT',
      title: 'Single Rectangular Solar Pump Controller (220 Volts)',
      image: '/smtg.avif',
    },
  ];

  // Automatic auto-scroll timer for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % components.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [components.length]);

  return (
    <section
      id="solutions"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '90px 0',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span className="eyebrow">EQUIPMENT & HARDWARE</span>
          <h2 className="heading-lg" style={{ marginTop: '8px', marginBottom: '16px' }}>
            Premium Solar Components
          </h2>
          <p className="lead-text components-lead-text">
            We partner strictly with Tier-1 manufacturers to guarantee peak efficiency, maximum power harvest, and multi-decade reliability.
          </p>
        </div>

        {/* Desktop 4-Card Grid View */}
        <div
          className="desktop-components-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {components.map((comp) => {
            return (
              <div
                key={comp.id}
                onClick={() => onOpenLightbox && onOpenLightbox(comp.image, comp.title)}
                style={{
                  height: '390px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 65, 26, 0.28)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.12)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
                title="Tap for full view"
              >
                {/* Full Background Image */}
                <img
                  src={comp.image}
                  alt={comp.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Dark Green Bottom Gradient Wash Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, rgba(10, 50, 20, 0.75) 60%, rgba(14, 65, 26, 0.96) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px 22px',
                  }}
                >
                  {/* Translucent Solar Orange Pill Badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(180, 80, 20, 0.55)',
                      backdropFilter: 'blur(6px)',
                      WebkitBackdropFilter: 'blur(6px)',
                      border: '1px solid rgba(249, 115, 22, 0.6)',
                      color: '#FFA96A',
                      fontSize: '0.68rem',
                      fontWeight: '800',
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: '0.08em',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      marginBottom: '8px',
                      width: 'fit-content',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    {comp.badge}
                  </div>

                  {/* White Main Heading */}
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: comp.title.length > 25 ? '1.25rem' : '1.5rem',
                      fontWeight: '800',
                      color: '#FFFFFF',
                      lineHeight: '1.25',
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                    }}
                  >
                    {comp.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Auto-Scrolling Components Carousel View */}
        <div className="mobile-components-carousel">
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(-${activeIndex * 100}%)`,
              width: '100%',
            }}
          >
            {components.map((comp) => {
              return (
                <div
                  key={comp.id}
                  style={{
                    minWidth: '100%',
                    padding: '0 8px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox(comp.image, comp.title)}
                    style={{
                      height: '360px',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <img
                      src={comp.image}
                      alt={comp.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, rgba(10, 50, 20, 0.75) 60%, rgba(14, 65, 26, 0.96) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px 18px',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(180, 80, 20, 0.55)',
                          backdropFilter: 'blur(6px)',
                          border: '1px solid rgba(249, 115, 22, 0.6)',
                          color: '#FFA96A',
                          fontSize: '0.66rem',
                          fontWeight: '800',
                          fontFamily: "'Inter', sans-serif",
                          letterSpacing: '0.08em',
                          padding: '4px 10px',
                          borderRadius: '100px',
                          marginBottom: '6px',
                          width: 'fit-content',
                        }}
                      >
                        {comp.badge}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: '1.35rem',
                          fontWeight: '800',
                          color: '#FFFFFF',
                          lineHeight: '1.2',
                          margin: 0,
                        }}
                      >
                        {comp.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px' }}>
            {components.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to component ${i + 1}`}
                style={{
                  width: activeIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeIndex === i ? '#59C749' : 'rgba(89, 199, 73, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .components-lead-text {
            display: none !important;
          }
          .desktop-components-grid {
            display: none !important;
          }
          .mobile-components-carousel {
            display: block !important;
            overflow: hidden;
            width: 100%;
          }
        }
        @media (min-width: 769px) {
          .mobile-components-carousel {
            display: none !important;
          }
          .desktop-components-grid {
            display: grid !important;
          }
        }
      `}</style>
    </section>
  );
}
