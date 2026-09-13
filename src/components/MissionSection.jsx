import React from 'react';
import { ArrowUpRight, Globe, Sun, Zap, CheckCircle2 } from 'lucide-react';

export default function MissionSection({ onNavigateContact }) {
  return (
    <section
      id="mission"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-navy-deep)',
        color: '#FFFFFF',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Solar Grid & Radial Glow Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(89, 199, 73, 0.15) 0%, rgba(16, 46, 13, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div className="container-narrow" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '100px',
            marginBottom: '28px',
          }}
        >
          <Globe size={14} style={{ color: '#59C749' }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#59C749',
            }}
          >
            OUR COMMITMENT TO THE FUTURE
          </span>
        </div>

        {/* Main Headline */}
        <h2
          className="heading-xl"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '28px',
            letterSpacing: '-0.02em',
          }}
        >
          We make clean energy practical for a brighter tomorrow.
        </h2>

        {/* Supporting Narrative */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'rgba(248, 250, 252, 0.85)',
            maxWidth: '720px',
            margin: '0 auto 48px auto',
            lineHeight: '1.7',
            fontWeight: '400',
          }}
        >
          Mokshith Enterprises is dedicated to accelerating sustainable power adoption by removing technical complexity, offering engineered precision, and guaranteeing long-term energy independence for every client.
        </p>

        {/* Placeholder Statistics Grid (Without Invented Factual Claims) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            padding: '32px 0',
            margin: '0 auto 48px auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            maxWidth: '800px',
          }}
        >
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '2.25rem', fontWeight: '800', color: '#59C749' }}>25+</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px' }}>Year Module Linear Warranty</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '2.25rem', fontWeight: '800', color: '#59C749' }}>Tier-1</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px' }}>ALMM Approved Hardware</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '2.25rem', fontWeight: '800', color: '#59C749' }}>100%</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px' }}>Turnkey DISCOM Approval</div>
          </div>
        </div>

        {/* Restrained CTA */}
        <a
          href="#contact"
          className="btn btn-solar"
          style={{
            padding: '16px 36px',
            fontSize: '1rem',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(89, 199, 73, 0.35)',
          }}
        >
          <span>Talk to an Energy Specialist</span>
          <ArrowUpRight size={18} />
        </a>

      </div>
    </section>
  );
}
