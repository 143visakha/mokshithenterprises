import React from 'react';

export default function BrandLogosSection() {
  const brands = [
    { name: 'Tata Power Solar', logo: '/tata.jpg' },
    { name: 'Waaree Solar', logo: '/waaree.png' },
    { name: 'Luminous Solar', logo: '/luminous.png' },
    { name: 'Adani Solar', logo: '/adani.png' },
  ];

  // Quadrupled array for smooth, infinite seamless marquee loop
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      id="brand-partners"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '24px 0',
        borderBottom: '1px solid var(--border-subtle)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#64748B',
          }}
        >
          TRUSTED TIER-1 SOLAR & INVERTER PARTNERS
        </span>
      </div>

      {/* Marquee Track Wrapper with Smooth Side Edge Masks */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            width: 'max-content',
            padding: '14px 0',
            animation: 'marqueeScroll 22s linear infinite',
          }}
        >
          {marqueeItems.map((b, index) => (
            <div
              key={`${b.name}-${index}`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '14px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '84px',
                minWidth: '200px',
                flexShrink: 0,
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#59C749';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(89,199,73,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              <img
                src={b.logo}
                alt={b.name}
                style={{
                  height: '62px',
                  maxWidth: '160px',
                  objectFit: 'contain',
                  display: 'block',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
