import React from 'react';
import logoImg from '../assets/logo.jpeg';

/**
 * Mokshith Enterprises Brand Logo Component
 * Incorporates official logo.jpeg image asset with clean typography.
 * Supports light mode (for white backgrounds) and dark mode (for hero/dark sections).
 */
export default function BrandLogo({ mode = 'dark', className = '', height = 38, showText = true }) {
  const isDarkBg = mode === 'dark'; // text should be light if background is dark

  return (
    <a 
      href="#" 
      className={`brand-logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px', 
        textDecoration: 'none' 
      }}
    >
      {/* Official Brand Logo Emblem / Image */}
      <div 
        className="logo-symbol" 
        style={{ 
          position: 'relative', 
          height: `${height}px`,
          minWidth: `${height}px`,
          flexShrink: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isDarkBg ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.08)',
          border: isDarkBg ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(89,199,73,0.25)',
        }}
      >
        <img 
          src={logoImg} 
          alt="Mokshith Enterprises Logo" 
          style={{ 
            maxHeight: '100%', 
            maxWidth: '100%', 
            objectFit: 'contain',
            borderRadius: '6px'
          }} 
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800',
            fontSize: `${Math.max(1.1, (height / 38) * 1.15).toFixed(2)}rem`,
            letterSpacing: '0.04em',
            color: isDarkBg ? '#FFFFFF' : '#102E0D',
            lineHeight: '1.1'
          }}>
            MOKSHITH
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600',
            fontSize: `${Math.max(0.6, (height / 38) * 0.62).toFixed(2)}rem`,
            letterSpacing: '0.22em',
            color: isDarkBg ? 'rgba(255, 255, 255, 0.85)' : '#59C749',
            textTransform: 'uppercase',
            marginTop: `${Math.max(2, height * 0.04)}px`
          }}>
            ENTERPRISES
          </span>
        </div>
      )}
    </a>
  );
}

