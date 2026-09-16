import React from 'react';
import { Award, Users, CheckCircle2, Zap, Landmark } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      value: '10+',
      label: 'Years Experience',
      icon: Award,
      description: 'Pioneering solar excellence',
    },
    {
      value: '5800+',
      label: 'Happy Customers',
      icon: Users,
      description: 'Homes & businesses powered',
    },
    {
      value: '3200+',
      label: 'Projects',
      icon: CheckCircle2,
      description: 'Residential & commercial',
    },
    {
      value: '2000+ kWs',
      label: 'Total Capacity',
      icon: Zap,
      description: 'High-yield clean energy',
    },
    {
      value: '2000+',
      label: 'ST & SC Govt Projects',
      icon: Landmark,
      description: 'Empowering communities',
    },
  ];

  return (
    <section
      id="impact-stats"
      aria-label="Mokshith Enterprises Track Record & Impact Statistics"
      style={{
        backgroundColor: 'var(--bg-navy-deep, #062217)',
        color: '#FFFFFF',
        padding: '50px 0',
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
          width: '70%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(89, 199, 73, 0.15) 0%, rgba(16, 46, 13, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <div
          className="impact-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
            alignItems: 'stretch',
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
                  padding: '24px 16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
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
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(89, 199, 73, 0.2)',
                    border: '1px solid rgba(89, 199, 73, 0.4)',
                    color: '#59C749',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px auto',
                  }}
                >
                  <Icon size={22} />
                </div>

                {/* Counter Metric */}
                <div
                  className="impact-value"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
                    fontWeight: '800',
                    color: '#59C749',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div
                  className="impact-label"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.98rem',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    letterSpacing: '0.01em',
                    marginBottom: '6px',
                    lineHeight: '1.3',
                  }}
                >
                  {stat.label}
                </div>

                {/* Sub-description */}
                <div
                  className="impact-desc"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.82rem',
                    fontWeight: '500',
                    color: '#E2F4DC',
                    lineHeight: '1.35',
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
        @media (max-width: 1024px) {
          .impact-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          #impact-stats {
            padding: 36px 0 !important;
          }
          .impact-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .impact-stat-card {
            padding: 18px 12px !important;
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
            font-size: 1.55rem !important;
            margin-bottom: 4px !important;
          }
          .impact-label {
            font-size: 0.85rem !important;
            margin-bottom: 2px !important;
          }
          .impact-desc {
            font-size: 0.72rem !important;
            line-height: 1.25 !important;
          }
        }
        @media (max-width: 480px) {
          .impact-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .impact-value {
            font-size: 1.35rem !important;
          }
          .impact-label {
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </section>
  );
}

