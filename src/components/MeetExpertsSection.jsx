import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export default function MeetExpertsSection({ onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const leadership = [
    {
      name: 'Mokshith Varma',
      role: 'Managing Director',
      avatar: '/md.jpeg',
    },
  ];

  // Automatic auto-scroll timer for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leadership.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [leadership.length]);

  return (
    <section
      id="team"
      style={{
        backgroundColor: 'var(--bg-primary, #FFFDF1)',
        padding: '70px 0',
        borderTop: '1px solid var(--border-subtle, rgba(89, 199, 73, 0.22))',
      }}
    >
      <div className="container">
        
        {/* ===================================================================
            LEVEL 1: FULL-TEAM SHOWCASE (TOP) - COMPACT ELEGANT FRAME
           =================================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 28px auto' }}>
          <span className="eyebrow">THE PEOPLE BEHIND THE JOURNEY</span>
          <h2 className="heading-lg" style={{ marginTop: '6px', marginBottom: 0, fontSize: 'clamp(2rem, 3.2vw, 2.6rem)' }}>
            Meet Our Team
          </h2>
        </div>

        {/* Compact Full-Team Showcase Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 52px auto',
            position: 'relative',
          }}
        >
          <div
            onClick={() => onOpenLightbox && onOpenLightbox('/team.jpeg', 'Mokshith Enterprises Solar Engineering & Operations Team')}
            style={{
              width: '100%',
              aspectRatio: '16/7.5',
              maxHeight: '360px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md, 0 10px 30px rgba(16, 46, 13, 0.08))',
              border: '1px solid var(--border-subtle, rgba(89, 199, 73, 0.22))',
              backgroundColor: 'var(--bg-surface, #FFFFFF)',
              position: 'relative',
              cursor: 'pointer',
            }}
            title="Tap for full view"
          >
            <img
              src="/team.jpeg"
              alt="Mokshith Enterprises Full Solar Engineering & Operations Team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.8s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(16, 46, 13, 0.82) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px 28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#FFFDF1' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(89, 199, 73, 0.3)',
                    backdropFilter: 'blur(8px)',
                    color: '#59C749',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Users size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '1.02rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                    Mokshith Enterprises Engineering & Operations Workforce
                  </div>
                  <div style={{ fontSize: '0.78rem', opacity: 0.9, color: '#E2F4DC' }}>
                    Certified Solar Technicians, DISCOM Consultants & Field Engineers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            LEVEL 2: FEATURED LEADERSHIP - COMPACT 125PX FRAMES
           =================================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-muted, #3D5A38)',
              lineHeight: 1.5,
              margin: 0,
              fontWeight: '500',
            }}
          >
            The brilliant minds driving the solar revolution forward with decades of combined experience.
          </p>
        </div>

        {/* Centered Single Leadership (MD) View */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {leadership.map((exp, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Featured 150px Circular Portrait Container */}
              <div
                onClick={() => onOpenLightbox && onOpenLightbox(exp.avatar, `${exp.name} - ${exp.role}`)}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  border: '4px solid #59C749',
                  boxShadow: '0 10px 24px rgba(89, 199, 73, 0.25)',
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                title="Tap for full view"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 14px 28px rgba(89, 199, 73, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(89, 199, 73, 0.2)';
                }}
              >
                <img
                  src={exp.avatar}
                  alt={exp.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  color: 'var(--text-main, #102E0D)',
                  margin: exp.spec ? '0 0 2px 0' : '0 0 10px 0',
                  lineHeight: 1.3,
                  maxWidth: '220px',
                }}
              >
                {exp.name}
              </h3>

              {/* Qualification Subtext */}
              {exp.spec && (
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: 'var(--text-subtle, #5C7A57)',
                    marginBottom: '10px',
                  }}
                >
                  {exp.spec}
                </div>
              )}

              {/* Mantis Green Compact Pill Badge */}
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#59C749',
                  color: '#102E0D',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  padding: '5px 16px',
                  borderRadius: '100px',
                  boxShadow: '0 3px 10px rgba(89, 199, 73, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                {exp.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
