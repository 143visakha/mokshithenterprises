import React, { useState, useEffect } from 'react';
import { Quote, Star, User, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Mokshith Enterprises executed our 15kW residential hybrid solar system seamlessly. Electricity bills dropped by over 85%, and the installation looks extremely modern and clean on our roof.",
      author: "Rajesh Varma",
      location: "Jubilee Hills, Hyderabad",
      type: "Homeowner (15kW Hybrid)",
      rating: 5,
    },
    {
      id: 2,
      quote: "Our factory required a robust 200kW rooftop array with net metering. Mokshith Enterprises handled engineering, DISCOM approvals, and setup without halting our daily production lines.",
      author: "K. Srinivasa Rao",
      location: "Industrial Estate, Visakhapatnam",
      type: "Factory Owner (200kW On-Grid)",
      rating: 5,
    },
    {
      id: 3,
      quote: "Extremely professional team. Their site analysis and ROI projections were accurate to a fault. The real-time mobile app tracking gives our facilities management complete peace of mind.",
      author: "Dr. Sunita Reddy",
      location: "Commercial Complex, Vijayawada",
      type: "Commercial Partner (50kW System)",
      rating: 5,
    },
  ];

  // Automatic auto-scroll timer for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
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
                padding: '32px 28px',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#59C749" color="#59C749" />
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#59C749', fontWeight: '600' }}>
                    <CheckCircle2 size={14} />
                    <span>Verified Owner</span>
                  </div>
                </div>

                <p
                  className="body-text"
                  style={{
                    fontSize: '0.94rem',
                    color: '#334155',
                    lineHeight: '1.65',
                    marginBottom: '28px',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingTop: '20px',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(89, 199, 73, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#59C749',
                    fontWeight: '700',
                  }}
                >
                  <User size={20} />
                </div>
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
                    padding: '28px 24px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 14px rgba(4, 39, 25, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="#59C749" color="#59C749" />
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#59C749', fontWeight: '600' }}>
                        <CheckCircle2 size={13} />
                        <span>Verified Owner</span>
                      </div>
                    </div>

                    <p
                      className="body-text"
                      style={{
                        fontSize: '0.9rem',
                        color: '#334155',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                      }}
                    >
                      "{item.quote}"
                    </p>
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
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(89, 199, 73, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#59C749',
                        fontWeight: '700',
                      }}
                    >
                      <User size={18} />
                    </div>
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

