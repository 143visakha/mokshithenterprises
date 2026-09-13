import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EditorialSolutions({ onSelectSolution }) {
  return (
    <section id="solutions" style={{ backgroundColor: '#FFFFFF', padding: '120px 0 140px 0' }}>
      <div className="container">
        
        {/* Intro Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span className="eyebrow" style={{ letterSpacing: '0.15em', marginBottom: '14px' }}>
            SOLAR SOLUTIONS
          </span>
          <h2 className="heading-lg" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', marginTop: '8px', marginBottom: '0' }}>
            Solar energy, designed around your needs.
          </h2>
        </div>

        {/* ===================================================================
            SOLUTION 01 — RESIDENTIAL (LARGE IMAGE LEFT, TEXT RIGHT)
           =================================================================== */}
        <div
          id="residential"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
            marginBottom: '160px',
          }}
        >
          {/* LEFT: Large High-Quality Photograph */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/11',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(10, 17, 40, 0.06)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1400&auto=format&fit=crop"
                alt="Modern home with rooftop solar panels"
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
          </div>

          {/* RIGHT: Editorial Content */}
          <div style={{ paddingLeft: '10px' }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.15em',
                color: '#59C749',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              01 / RESIDENTIAL
            </span>

            <h3 className="heading-lg" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '20px', color: '#0F172A' }}>
              Home Solar
            </h3>

            <p className="body-text" style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '32px' }}>
              Transform your household into an independent power plant. Our residential rooftop solar systems eliminate high monthly utility tariffs and deliver clean, round-the-clock power reliability.
            </p>

            {/* 3 Concise Benefit Points */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Customized system design</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>High-efficiency solar technology</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Professional installation</span>
              </li>
            </ul>

            {/* Understated CTA */}
            <button
              onClick={() => onSelectSolution('residential')}
              className="btn-link"
              style={{ fontSize: '1rem', fontWeight: '600' }}
            >
              <span>Learn More</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ===================================================================
            SOLUTION 02 — COMMERCIAL (REVERSED: TEXT LEFT, IMAGE RIGHT)
           =================================================================== */}
        <div
          id="commercial"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
            marginBottom: '160px',
          }}
        >
          {/* LEFT: Editorial Content */}
          <div className="order-2-mobile" style={{ paddingRight: '10px' }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.15em',
                color: '#59C749',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              02 / COMMERCIAL
            </span>

            <h3 className="heading-lg" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '20px', color: '#0F172A' }}>
              Commercial Solar
            </h3>

            <p className="body-text" style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '32px' }}>
              Turn your commercial property into a smarter energy asset with scalable solar systems built for long-term savings.
            </p>

            {/* 3 Concise Benefit Points */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Lower operating costs</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Scalable systems</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Professional execution</span>
              </li>
            </ul>

            {/* Understated CTA */}
            <button
              onClick={() => onSelectSolution('commercial')}
              className="btn-link"
              style={{ fontSize: '1rem', fontWeight: '600' }}
            >
              <span>Learn More</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT: Large Commercial Photo */}
          <div className="order-1-mobile" style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/11',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(10, 17, 40, 0.06)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1400&auto=format&fit=crop"
                alt="Commercial building solar rooftop installation"
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
          </div>
        </div>

        {/* ===================================================================
            SOLUTION 03 — INDUSTRIAL (LARGE IMAGE LEFT, TEXT RIGHT)
           =================================================================== */}
        <div
          id="industrial"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* LEFT: Large Industrial Photo */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/11',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(10, 17, 40, 0.06)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1400&auto=format&fit=crop"
                alt="Industrial solar plant and factory rooftop grid"
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
          </div>

          {/* RIGHT: Editorial Content */}
          <div style={{ paddingLeft: '10px' }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.15em',
                color: '#59C749',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              03 / INDUSTRIAL
            </span>

            <h3 className="heading-lg" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '20px', color: '#0F172A' }}>
              Industrial Solar
            </h3>

            <p className="body-text" style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '32px' }}>
              High-capacity solar solutions engineered for industries and energy-intensive operations.
            </p>

            {/* 3 Concise Benefit Points */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>High-capacity systems</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Energy optimization</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: '#1E293B', fontWeight: '500' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59C749', flexShrink: 0 }} />
                <span>Long-term performance</span>
              </li>
            </ul>

            {/* Understated CTA */}
            <button
              onClick={() => onSelectSolution('industrial')}
              className="btn-link"
              style={{ fontSize: '1rem', fontWeight: '600' }}
            >
              <span>Learn More</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .order-1-mobile { order: 1; }
          .order-2-mobile { order: 2; }
        }
      `}</style>
    </section>
  );
}
