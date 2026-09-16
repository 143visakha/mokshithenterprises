import React from 'react';
import { Eye, Target, Sun } from 'lucide-react';

export default function AboutSection({ onOpenLightbox }) {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '90px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 5vw, 70px)',
            alignItems: 'center',
          }}
        >
          {/* LEFT SIDE: Vision & Mission Content */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                backgroundColor: 'rgba(89, 199, 73, 0.12)',
                border: '1px solid rgba(89, 199, 73, 0.25)',
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
                ABOUT MOKSHITH ENTERPRISES
              </span>
            </div>

            <h2
              className="heading-lg"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                marginBottom: '28px',
                color: '#062217',
                lineHeight: '1.25',
              }}
            >
              Powering India with Clean Solar Energy.
            </h2>

            {/* Vision & Mission Clean Text Layout (No Boxes) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* OUR VISION */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(89, 199, 73, 0.15)',
                    color: '#59C749',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Eye size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#062217', margin: 0, marginBottom: '6px' }}>
                    Our Vision
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: '#475569', margin: 0, lineHeight: '1.65' }}>
                    To empower every Indian household, business, and industrial facility with affordable, high-efficiency solar energy — accelerating sustainable power independence across the nation.
                  </p>
                </div>
              </div>

              {/* OUR MISSION */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(89, 199, 73, 0.15)',
                    color: '#59C749',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Target size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#062217', margin: 0, marginBottom: '6px' }}>
                    Our Mission
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: '#475569', margin: 0, lineHeight: '1.65' }}>
                    To deliver end-to-end Tier-1 solar EPC solutions with precision engineering, seamless PM Surya Ghar subsidy approval, 100% DISCOM net-metering compliance, and 25-year performance reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Image of Solar Plant Grid with Floating Badge */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              onClick={() => onOpenLightbox && onOpenLightbox('/sec.jpg', 'Mokshith Enterprises Clean Solar Energy Project')}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(4, 39, 25, 0.15)',
                backgroundColor: '#F1F5F9',
                position: 'relative',
                cursor: 'pointer',
              }}
              title="Tap for full view"
            >
              <img
                src="/sec.jpg"
                alt="Mokshith Enterprises clean solar energy project"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Experience Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                backgroundColor: '#0A2912',
                color: '#FFFDF1',
                borderRadius: '12px',
                padding: '20px 24px',
                boxShadow: '0 12px 30px rgba(4, 39, 25, 0.4)',
                border: '1px solid rgba(89, 199, 73, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(89, 199, 73, 0.2)',
                  color: '#59C749',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  flexShrink: 0,
                }}
              >
                <Sun size={26} />
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '1.1', color: '#FFFFFF' }}>
                  10+ Years
                </div>
                <div style={{ fontSize: '0.8rem', color: '#A7F3D0', marginTop: '2px', fontWeight: '500' }}>
                  2000+ kWs Capacity Installed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
