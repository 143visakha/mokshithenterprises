import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sun, Zap } from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  const handleScrollToSolutions = () => {
    const el = document.getElementById('about') || document.getElementById('pm-surya-ghar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Immersive Background Image Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/hero.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.2) contrast(1.08) saturate(1.12)',
          transform: 'scale(1.02)',
          transition: 'transform 10s ease-out',
        }}
      />

      {/* Atmospheric Soft Gradient Overlays for High Legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(10, 17, 40, 0.45) 0%, rgba(10, 17, 40, 0.2) 50%, rgba(10, 17, 40, 0.7) 100%)',
        }}
      />

      {/* Subtle Grid Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Centered Editorial Headline */}
        <h1
          className="heading-xl"
          style={{
            color: '#FFFDF1',
            fontWeight: '700',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Powering a brighter future with <span style={{ color: '#59C749' }}>solar energy.</span>
        </h1>



        {/* Call to Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '56px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={handleScrollToContact}
            className="btn btn-solar"
            style={{
              padding: '14px 28px',
              fontSize: '0.94rem',
              fontWeight: '700',
              borderRadius: '8px',
              backgroundColor: '#59C749',
              color: '#FFFDF1',
              boxShadow: '0 8px 20px rgba(89, 199, 73, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            <span>Get a Free Quote</span>
            <ArrowUpRight size={17} />
          </button>

          <button
            onClick={handleScrollToSolutions}
            className="btn btn-light"
            style={{
              padding: '14px 26px',
              fontSize: '0.94rem',
              fontWeight: '600',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 253, 241, 0.12)',
              color: '#FFFDF1',
              border: '1px solid rgba(255, 253, 241, 0.28)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 253, 241, 0.22)';
              e.currentTarget.style.borderColor = '#59C749';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 253, 241, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(255, 253, 241, 0.28)';
            }}
          >
            <span>Explore Solar Solutions</span>
          </button>
        </div>

        {/* Key Feature Trust Indicators */}
        <div
          className="hero-trust-indicators"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 253, 241, 0.15)',
            color: 'rgba(255, 253, 241, 0.9)',
            fontSize: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} style={{ color: '#59C749' }} />
            <span>25-Year Performance Warranty</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={18} style={{ color: '#59C749' }} />
            <span>Tier-1 Solar Technology</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sun size={18} style={{ color: '#59C749' }} />
            <span>End-to-End Turnkey Execution</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollToSolutions}
        aria-label="Scroll to solutions"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.7)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>SCROLL</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>

      <style>{`
        @media (max-width: 768px) {
          .hero-trust-indicators {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
