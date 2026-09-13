import React from 'react';
import { ArrowRight, Zap, Landmark, ShieldCheck, CheckCircle, FileText } from 'lucide-react';

export default function PmSuryaGharSection({ onCheckEligibility, onOpenLightbox }) {
  const benefits = [
    {
      num: '01',
      title: '300 Free Units',
      subtitle: 'Monthly free electricity',
      icon: Zap,
    },
    {
      num: '02',
      title: 'Solar Subsidy',
      subtitle: 'Direct govt financial support',
      icon: Landmark,
    },
    {
      num: '03',
      title: 'Easy Financing',
      subtitle: 'Low-interest loan assistance',
      icon: FileText,
    },
    {
      num: '04',
      title: 'Full Assistance',
      subtitle: 'End-to-end application guidance',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="pm-surya-ghar"
      aria-label="PM Surya Ghar Muft Bijli Yojana Government Solar Initiative"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '70px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(30px, 4vw, 50px)',
            alignItems: 'center',
          }}
        >
          {/* ===================================================================
              LEFT SIDE: Large Realistic Indian Residential Solar Image
             =================================================================== */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              onClick={() => onOpenLightbox && onOpenLightbox('/pm.webp', 'PM Surya Ghar Muft Bijli Yojana Initiative')}
              style={{
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px -10px rgba(10, 17, 40, 0.1)',
                position: 'relative',
                backgroundColor: '#F1F5F9',
                cursor: 'pointer',
              }}
              title="Tap for full view"
            >
              <img
                src="/pm.webp"
                alt="PM Surya Ghar Muft Bijli Yojana Prime Minister Initiative"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            {/* Official Scheme Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                maxWidth: '300px',
                backgroundColor: 'rgba(16, 46, 13, 0.92)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(89, 199, 73, 0.3)',
                borderRadius: '100px',
                padding: '12px 16px',
                boxShadow: '0 8px 20px rgba(16, 46, 13, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(89, 199, 73, 0.2)',
                  border: '1px solid rgba(89, 199, 73, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#59C749',
                  flexShrink: 0,
                }}
              >
                <Zap size={18} />
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#59C749',
                  }}
                >
                  OFFICIAL SCHEME
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                  }}
                >
                  PM SURYA GHAR
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT SIDE: Government Initiative Information Area
             =================================================================== */}
          <div>
            {/* Top Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                backgroundColor: 'rgba(89, 199, 73, 0.1)',
                border: '1px solid rgba(89, 199, 73, 0.25)',
                borderRadius: '100px',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#59C749',
                }}
              >
                GOVERNMENT INITIATIVE
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="heading-lg"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                marginBottom: '12px',
                color: '#062217',
                lineHeight: '1.2',
              }}
            >
              PM Surya Ghar <span style={{ color: '#59C749' }}>Muft Bijli Yojana</span>
            </h2>

            {/* Concise Narrative Paragraph */}
            <p
              className="body-text"
              style={{
                fontSize: '0.95rem',
                color: '#334155',
                lineHeight: '1.5',
                marginBottom: '24px',
              }}
            >
              Key highlights of India's rooftop solar initiative for residential households:
            </p>

            {/* Compact 2x2 Feature Grid (Hidden on Mobile) */}
            <div
              className="pm-benefits-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.num}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#59C749';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(89, 199, 73, 0.15)',
                        color: '#59C749',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} />
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.7rem',
                            fontWeight: '800',
                            color: '#59C749',
                          }}
                        >
                          {b.num}
                        </span>
                        <h3
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.88rem',
                            fontWeight: '700',
                            color: '#0F172A',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            margin: 0,
                          }}
                        >
                          {b.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.75rem',
                          color: '#64748B',
                          lineHeight: '1.2',
                          marginTop: '2px',
                          margin: 0,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {b.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={onCheckEligibility}
                className="btn btn-solar"
                style={{ padding: '14px 28px', fontSize: '0.92rem', borderRadius: '6px' }}
              >
                <span>Check Your Eligibility</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onCheckEligibility}
                className="btn btn-secondary"
                style={{ padding: '14px 24px', fontSize: '0.92rem', borderRadius: '6px' }}
              >
                <span>Learn About the Scheme</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pm-benefits-grid {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
