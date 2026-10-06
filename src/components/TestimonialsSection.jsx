import React, { useState, useEffect } from 'react';
import { Star, User, CheckCircle2, Camera } from 'lucide-react';

export default function TestimonialsSection({ onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Mokshith Enterprises executed complete dual-chemical earthing and lightning surge protection alongside our residential rooftop solar array in Vizianagaram. Solid workmanship, DISCOM compliant, and zero voltage fluctuations.",
      author: "Krishna Prasad",
      location: "BC Colony, Vizianagaram",
      type: "Homeowner (5kW Rooftop)",
      rating: 5,
      avatar: '/krishna_prasad.png',
      photo: '/earthing_pit_vizianagaram.jpg',
      photoCaption: 'Geotagged Chemical Earthing Pit Chamber Installation at Vizianagaram Site (Mokshith Enterprises)',
      photoTag: 'Site Photo: Chemical Earthing',
    },
    {
      id: 2,
      quote: "The structural engineering and anodized aluminum 60×300mm mini-rail mounting quality is top tier. Zero roof puncture leaks, heavy coastal wind resistance, and seamless solar panel clamping for our factory rooftop.",
      author: "Sabeer Basha",
      location: "Industrial Estate, Visakhapatnam",
      type: "Industrial Owner (120kW On-Grid)",
      rating: 5,
      avatar: '/sabeer_basha.png',
      photo: '/mini_rail_hardware.jpg',
      photoCaption: 'Heavy-Duty 60×300mm Aluminum Mini-Rail & Clamp Mounting Hardware (Mokshith Enterprises)',
      photoTag: 'Hardware: Mini-Rail Mounts',
    },
    {
      id: 3,
      quote: "Extremely professional team. Their site analysis and DISCOM net-metering approvals were handled end-to-end without any hassle. The real-time generation monitoring gives our healthcare facility complete peace of mind.",
      author: "Salman Basha",
      location: "Ring Road, Vizianagaram",
      type: "Commercial Partner (50kW System)",
      rating: 5,
      avatar: '/salman_basha.png',
    },
  ];

  // Automatic auto-scroll timer for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#F8FAFC', padding: '90px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="eyebrow" style={{ color: '#59C749' }}>CUSTOMER REVIEWS</span>
          <h2 className="heading-lg" style={{ marginTop: '8px', marginBottom: '16px', fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', color: '#062217' }}>
            Trusted by <span style={{ color: '#59C749' }}>Thousands of Customers</span>
          </h2>

          {/* Rating Summary Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(5, 150, 105, 0.2)',
              padding: '8px 20px',
              borderRadius: '100px',
              marginTop: '16px',
              boxShadow: '0 2px 8px rgba(4, 39, 25, 0.04)',
            }}
          >
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#062217' }}>
              4.9 out of 5 Rating (5800+ Happy Customers)
            </span>
          </div>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="desktop-testimonials-grid grid-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px 24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(4, 39, 25, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(89, 199, 73, 0.12)';
                e.currentTarget.style.borderColor = '#59C749';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(4, 39, 25, 0.03)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#59C749" color="#59C749" />
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#59C749', fontWeight: '600' }}>
                    <CheckCircle2 size={14} />
                    <span>Verified Installation</span>
                  </div>
                </div>

                <p
                  className="body-text"
                  style={{
                    fontSize: '0.92rem',
                    color: '#334155',
                    lineHeight: '1.62',
                    marginBottom: item.photo ? '18px' : '24px',
                  }}
                >
                  "{item.quote}"
                </p>

                {/* Customer / Site Photo if present */}
                {item.photo && (
                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox(item.photo, item.photoCaption || item.photoTag || 'Customer Site Photo')}
                    style={{
                      marginBottom: '20px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid #E2E8F0',
                      backgroundColor: '#0F172A',
                      position: 'relative',
                      cursor: 'pointer',
                      height: '170px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(89, 199, 73, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    title="Tap for full view"
                  >
                    <img
                      src={item.photo}
                      alt={item.photoCaption || 'Customer Site Installation Photo'}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        backgroundColor: 'rgba(5, 34, 20, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#59C749',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid rgba(89, 199, 73, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Camera size={12} />
                      <span>{item.photoTag || 'Site Photo'}</span>
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingTop: '16px',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                {item.avatar ? (
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid #59C749',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.author}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(89, 199, 73, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#59C749',
                      fontWeight: '700',
                      flexShrink: 0,
                    }}
                  >
                    <User size={20} />
                  </div>
                )}
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0F172A' }}>{item.author}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>{item.location} • {item.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Auto-Scrolling Testimonials Carousel */}
        <div className="mobile-testimonials-carousel">
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(-${activeIndex * 100}%)`,
              width: '100%',
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{
                  minWidth: '100%',
                  padding: '0 8px',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 14px rgba(4, 39, 25, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="#59C749" color="#59C749" />
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#59C749', fontWeight: '600' }}>
                        <CheckCircle2 size={13} />
                        <span>Verified Installation</span>
                      </div>
                    </div>

                    <p
                      className="body-text"
                      style={{
                        fontSize: '0.9rem',
                        color: '#334155',
                        lineHeight: '1.6',
                        marginBottom: item.photo ? '14px' : '20px',
                      }}
                    >
                      "{item.quote}"
                    </p>

                    {item.photo && (
                      <div
                        onClick={() => onOpenLightbox && onOpenLightbox(item.photo, item.photoCaption || item.photoTag || 'Customer Site Photo')}
                        style={{
                          marginBottom: '16px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1px solid #E2E8F0',
                          backgroundColor: '#0F172A',
                          position: 'relative',
                          cursor: 'pointer',
                          height: '150px',
                        }}
                        title="Tap for full view"
                      >
                        <img
                          src={item.photo}
                          alt={item.photoCaption || 'Customer Site Installation Photo'}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '6px',
                            left: '6px',
                            backgroundColor: 'rgba(5, 34, 20, 0.85)',
                            color: '#59C749',
                            fontSize: '0.68rem',
                            fontWeight: '700',
                            padding: '3px 8px',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          <Camera size={11} />
                          <span>{item.photoTag || 'Site Photo'}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      paddingTop: '14px',
                      borderTop: '1px solid #F1F5F9',
                    }}
                  >
                    {item.avatar ? (
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '2px solid #59C749',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={item.avatar}
                          alt={item.author}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(89, 199, 73, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#59C749',
                          fontWeight: '700',
                          flexShrink: 0,
                        }}
                      >
                        <User size={18} />
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0F172A' }}>{item.author}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.location} • {item.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to review ${i + 1}`}
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
          .desktop-testimonials-grid {
            display: none !important;
          }
          .mobile-testimonials-carousel {
            display: block !important;
            overflow: hidden;
            width: 100%;
          }
        }
        @media (min-width: 769px) {
          .mobile-testimonials-carousel {
            display: none !important;
          }
          .desktop-testimonials-grid {
            display: grid !important;
          }
        }
      `}</style>
    </section>
  );
}

