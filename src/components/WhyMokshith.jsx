import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap, PhoneCall } from 'lucide-react';

export default function WhyMokshith({ onOpenCalculator, onOpenLightbox }) {
  const usps = [
    {
      title: '25-Year Performance Warranty',
      desc: 'Tier-1 modules backed by multi-decade power output guarantee.',
    },
    {
      title: 'Custom Rooftop Engineering',
      desc: '3D CAD shadow-free design engineered specifically for your roof load.',
    },
    {
      title: 'Fast Net-Metering Approvals',
      desc: 'Complete DISCOM liaison, documentation, and meter installation.',
    },
    {
      title: 'Zero Downtime Guarantee',
      desc: 'Real-time telemetry app tracking and 24/7 technical support.',
    },
  ];

  return (
    <section
      id="why-partner"
      style={{
        backgroundColor: '#042719',
        backgroundImage: 'linear-gradient(135deg, #053321 0%, #031D13 100%)',
        color: '#FFFFFF',
        padding: '90px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 5vw, 70px)',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: Narrative & USPs List */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                backgroundColor: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                borderRadius: '100px',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#59C749',
                }}
              >
                UNMATCHED VALUE & RELIABILITY
              </span>
            </div>

            <h2
              className="heading-lg"
              style={{
                color: '#FFFDF1',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}
            >
              Why We Are Your <br />
              <span style={{ color: '#59C749' }}>Trusted Solar Partner</span>
            </h2>

            <p
              className="why-hero-desc"
              style={{ color: 'rgba(255, 253, 241, 0.9)', fontSize: '1.02rem', lineHeight: '1.65', marginBottom: '32px' }}
            >
              At Mokshith Enterprises, we don't just sell solar panels; we engineer long-term energy independence with unmatched craftsmanship and transparent pricing.
            </p>

            {/* USPs List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {usps.map((usp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(89, 199, 73, 0.22)',
                      color: '#59C749',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFDF1', margin: 0, marginBottom: '2px' }}>
                      {usp.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(255, 253, 241, 0.75)', margin: 0, lineHeight: '1.4' }}>
                      {usp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenCalculator}
              className="btn"
              style={{
                padding: '14px 28px',
                backgroundColor: '#59C749',
                color: '#FFFDF1',
                fontWeight: '700',
                fontSize: '0.95rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Calculate Solar Savings</span>
            </button>
          </div>

          {/* RIGHT COLUMN: Photo of Solar Engineers / Trusted Partner */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              onClick={() => onOpenLightbox && onOpenLightbox('/tru.png', 'Mokshith Enterprises Trusted Solar Installation')}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 24px 50px rgba(0,0,0,0.5)',
                position: 'relative',
                cursor: 'pointer',
              }}
              title="Tap for full view"
            >
              <img
                src="/tru.png"
                alt="Mokshith Enterprises Trusted Solar Partner"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Overlapping Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                borderRadius: '12px',
                padding: '16px 20px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Award size={28} style={{ color: '#59C749' }} />
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0F172A' }}>100% Quality Assurance</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Certified Installation Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-hero-desc {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

