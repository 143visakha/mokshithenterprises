import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenCalculator, onNavigateContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: '16px',
        left: '20px',
        right: '20px',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '9999px',
          border: '1px solid #E2E8F0',
          boxShadow: isScrolled
            ? '0 20px 50px rgba(0, 0, 0, 0.22)'
            : '0 10px 36px rgba(0, 0, 0, 0.14)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
          position: 'relative',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BrandLogo mode="light" height={44} />
        </div>

        {/* Desktop Navigation Links */}
        <div
          style={{ display: 'none', gap: '36px', alignItems: 'center' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#1E293B',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#59C749')}
              onMouseLeave={(e) => (e.target.style.color = '#1E293B')}
            >
              {link.name}
            </a>
          ))}

          {/* Desktop Get Quote CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            style={{
              backgroundColor: '#59C749',
              color: '#FFFDF1',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '12px 26px',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 6px 18px rgba(89, 199, 73, 0.4)',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 26px rgba(89, 199, 73, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(89, 199, 73, 0.4)';
            }}
          >
            <span>Get Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: 'rgba(89, 199, 73, 0.12)',
            color: '#59C749',
            border: 'none',
            cursor: 'pointer',
            pointerEvents: 'auto',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            maxWidth: '1280px',
            margin: '8px auto 0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
            pointerEvents: 'auto',
            animation: 'fadeIn 0.25s ease-out forwards',
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.05rem',
                fontWeight: '700',
                color: '#0F172A',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            style={{
              backgroundColor: '#59C749',
              color: '#FFFDF1',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textAlign: 'center',
              padding: '14px',
              borderRadius: '12px',
              textDecoration: 'none',
              marginTop: '8px',
              display: 'block',
              boxShadow: '0 4px 14px rgba(89, 199, 73, 0.35)',
            }}
          >
            Get Free Quote
          </a>
        </div>
      )}

      {/* CSS Media Query Override for Responsive Nav Display */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
