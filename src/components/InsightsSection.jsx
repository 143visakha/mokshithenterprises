import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

export default function InsightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = [
    {
      id: 1,
      category: 'HOME SOLAR GUIDE',
      date: 'Aug 28, 2026',
      readTime: '4 min read',
      title: 'Understanding Rooftop Solar: A Guide for Homeowners',
      description: 'Key considerations when evaluating roof orientation, shading, net metering policy, and battery backup options for domestic installations.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      category: 'COMMERCIAL INSIGHTS',
      date: 'Aug 14, 2026',
      readTime: '6 min read',
      title: 'How Commercial Solar Offsets Rising Operational Energy Costs',
      description: 'Analysis of accelerated depreciation benefits, power purchase agreements (PPA), and peak load shifting for manufacturing facilities.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      category: 'CLEAN ENERGY TRENDS',
      date: 'Jul 30, 2026',
      readTime: '5 min read',
      title: 'The Future of Renewable Energy Infrastructure in India',
      description: 'Exploring grid synchronization improvements, bifacial PV module adoption, and policy frameworks driving zero-carbon industrial targets.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop',
    },
  ];

  // Automatic auto-scroll timer for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % articles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [articles.length]);

  return (
    <section id="insights" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <span className="eyebrow">INSIGHTS & PERSPECTIVES</span>
          <h2 className="heading-lg" style={{ marginTop: '8px', marginBottom: '16px' }}>
            Latest perspectives on solar adoption and clean energy.
          </h2>
          <p className="lead-text">
            Stay informed with expert analysis on solar economics, engineering best practices, and clean energy transition policy.
          </p>
        </div>

        {/* Desktop 3 Editorial Cards Grid */}
        <div className="desktop-insights-grid grid-3">
          {articles.map((article) => (
            <article
              key={article.id}
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-solar-blue)', letterSpacing: '0.08em' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="heading-md" style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.35', color: 'var(--text-main)' }}>
                  {article.title}
                </h3>

                <p className="body-text" style={{ fontSize: '0.9rem', marginBottom: '24px', flexGrow: 1 }}>
                  {article.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>{article.readTime}</span>
                  <span className="btn-link" style={{ fontSize: '0.85rem' }}>
                    Read Article <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Auto-Scrolling Article Carousel View */}
        <div className="mobile-insights-carousel">
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(-${activeIndex * 100}%)`,
              width: '100%',
            }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                style={{
                  minWidth: '100%',
                  padding: '0 8px',
                  boxSizing: 'border-box',
                }}
              >
                <article
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 14px rgba(4, 39, 25, 0.05)',
                  }}
                >
                  <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.72rem', color: 'var(--text-subtle)' }}>
                      <span style={{ fontWeight: '700', color: 'var(--color-solar-blue)', letterSpacing: '0.08em' }}>
                        {article.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h3 className="heading-md" style={{ fontSize: '1.1rem', marginBottom: '10px', lineHeight: '1.35', color: 'var(--text-main)' }}>
                      {article.title}
                    </h3>

                    <p className="body-text" style={{ fontSize: '0.86rem', marginBottom: '18px', flexGrow: 1 }}>
                      {article.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{article.readTime}</span>
                      <span className="btn-link" style={{ fontSize: '0.82rem' }}>
                        Read Article <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px' }}>
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to article ${i + 1}`}
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
          .desktop-insights-grid {
            display: none !important;
          }
          .mobile-insights-carousel {
            display: block !important;
            overflow: hidden;
            width: 100%;
          }
        }
        @media (min-width: 769px) {
          .mobile-insights-carousel {
            display: none !important;
          }
          .desktop-insights-grid {
            display: grid !important;
          }
        }
      `}</style>
    </section>
  );
}
