import React from 'react';
import { Award, Leaf, Users, Zap } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      value: '13+',
      label: 'Years Experience',
      icon: Award,
      description: 'Pioneering solar excellence',
    },
    {
      value: '5000+',
      label: 'Tons CO2 Saved',
      icon: Leaf,
      description: 'Cleaner & greener planet',
    },
    {
      value: '800+',
      label: 'Happy Customers',
      icon: Users,
      description: 'Homes & businesses powered',
    },
    {
      value: '60 kW+',
      label: 'Solar Capacity Installed',
      icon: Zap,
      description: 'High-yield clean energy',
    },
  ];

  return (
    <section
      id="impact-stats"
      aria-label="Mokshith Enterprises Track Record & Impact Statistics"
      style={{
        backgroundColor: 'var(--bg-navy-deep)',
        color: '#FFFFFF',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Subtle Background Radial Accent Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(89, 199, 73, 0.15) 0%, rgba(16, 46, 13, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="impact-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="impact-stat-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(89, 199, 73, 0.3)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#59C749';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(89, 199, 73, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(89, 199, 73, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon Container */}
                <div
                  className="impact-icon-container"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(89, 199, 73, 0.2)',
                    border: '1px solid rgba(89, 199, 73, 0.4)',
                    color: '#59C749',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <Icon size={24} />
                </div>

                {/* Counter Metric */}
                <div
                  className="impact-value"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(2.2rem, 3.5vw, 2.85rem)',
                    fontWeight: '800',
                    color: '#59C749',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                  }}
                >
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div
                  className="impact-label"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    letterSpacing: '0.01em',
                    marginBottom: '6px',
                  }}
                >
                  {stat.label}
                </div>

                {/* Sub-description */}
                <div
                  className="impact-desc"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: '#E2F4DC',
                  }}
                >
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #impact-stats {
            padding: 36px 0 !important;
          }
          .impact-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .impact-stat-card {
            padding: 16px 10px !important;
            border-radius: 12px !important;
          }
          .impact-icon-container {
            width: 36px !important;
            height: 36px !important;
            margin-bottom: 8px !important;
            border-radius: 8px !important;
          }
          .impact-icon-container svg {
            width: 18px !important;
            height: 18px !important;
          }
          .impact-value {
            font-size: 1.6rem !important;
            margin-bottom: 4px !important;
          }
          .impact-label {
            font-size: 0.82rem !important;
            margin-bottom: 2px !important;
          }
          .impact-desc {
            font-size: 0.72rem !important;
            line-height: 1.25 !important;
          }
        }
      `}</style>
    </section>
  );
}
