import React from 'react';

export default function CinematicBreak() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1920&auto=format&fit=crop')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Parallax effect
        color: '#FFFFFF',
        padding: '100px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Dark Subtle Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(10, 17, 40, 0.7) 0%, rgba(10, 17, 40, 0.5) 50%, rgba(10, 17, 40, 0.8) 100%)',
        }}
      />

      {/* Constrained Content Area */}
      <div
        className="container-narrow"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
        }}
      >
        <span
          className="eyebrow"
          style={{
            color: '#59C749',
            letterSpacing: '0.2em',
            marginBottom: '16px',
          }}
        >
          ENGINEERED FOR RESILIENCE
        </span>

        <h2
          className="heading-lg"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: '700',
            lineHeight: '1.2',
            maxWidth: '850px',
            margin: '0 auto 20px auto',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          Engineered for maximum annual yield under all environmental conditions.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'rgba(248, 250, 252, 0.9)',
            maxWidth: '640px',
            margin: '0 auto',
            fontWeight: '400',
            lineHeight: '1.7',
          }}
        >
          Our solar panel arrays utilize high-transmittance anti-reflective glass and reinforced structural mounting to deliver peak energy output even under extreme heat, humidity, and monsoon weather.
        </p>
      </div>
    </section>
  );
}
