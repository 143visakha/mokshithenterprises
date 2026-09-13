import React, { useState } from 'react';

export default function AnchorNav() {
  const [activeItem, setActiveItem] = useState('SOLUTIONS');

  const navItems = [
    { label: 'PM SURYA GHAR', target: '#pm-surya-ghar' },
    { label: 'SOLUTIONS', target: '#solutions' },
    { label: 'WHY SOLAR', target: '#why-solar' },
    { label: 'PROCESS', target: '#process' },
    { label: 'PROJECTS', target: '#projects' },
    { label: 'INSIGHTS', target: '#insights' },
    { label: 'CONTACT', target: '#contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.label);
    const targetElement = document.querySelector(item.target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Secondary navigation strip"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
        minHeight: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px, 4vw, 48px)',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '12px 16px',
            whiteSpace: 'nowrap',
          }}
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.target}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isActive ? '#59C749' : '#475569',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#59C749')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#59C749' : '#475569')}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#59C749',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
