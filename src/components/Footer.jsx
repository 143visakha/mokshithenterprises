import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const companyLinks = [
    { name: 'About Mokshith Enterprises', href: '#about' },
    { name: 'Why Choose Mokshith', href: '#why-partner' },
    { name: 'Managing Director & Team', href: '#team' },
    { name: 'Our Methodology', href: '#process' },
    { name: 'Get a Free Quote', href: '#contact' },
  ];

  const solutionsLinks = [
    { name: 'Solar Solutions', href: '#solutions' },
    { name: 'PM Surya Ghar Scheme', href: '#pm-surya-ghar' },
    { name: 'Solar Components & Hardware', href: '#solutions' },
    { name: 'Brand & Tier-1 Partners', href: '#brand-partners' },
    { name: 'Projects & Portfolio', href: '#projects' },
    { name: 'Turnkey Execution Process', href: '#process' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#052214',
        color: '#94A3B8',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: "'Inter', sans-serif",
        width: '100%',
      }}
    >
      {/* Main Content Area */}
      <div className="footer-main-padding" style={{ padding: '72px 0 60px 0' }}>
        <div className="container">
          <div className="footer-main-layout">
            {/* LEFT / BRAND AREA (~38% Width) */}
            <div className="footer-brand-column">
              <BrandLogo mode="dark" className="footer-hero-logo" height={90} />

              <p className="footer-brand-desc">
                Mokshith Enterprises is a premier solar energy company specializing in turnkey residential, commercial, and industrial photovoltaic infrastructure.
              </p>
            </div>

            {/* RIGHT / NAVIGATION AREA (3 Columns) */}
            <div className="footer-nav-columns">
              {/* COMPANY COLUMN */}
              <div>
                <h4 className="footer-col-title">COMPANY</h4>
                <ul className="footer-links">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="footer-nav-link"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOLUTIONS COLUMN */}
              <div>
                <h4 className="footer-col-title">SOLUTIONS</h4>
                <ul className="footer-links">
                  {solutionsLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="footer-nav-link"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT COLUMN */}
              <div>
                <h4 className="footer-col-title">CONTACT</h4>
                <div className="footer-contact-list">
                  <div className="footer-contact-item">
                    <MapPin size={16} className="footer-contact-icon" />
                    <span className="footer-contact-text">
                      Mokshith Enterprises Corporate Hub, Hyderabad, Telangana, India
                    </span>
                  </div>

                  <div className="footer-contact-item">
                    <Phone size={16} className="footer-contact-icon" />
                    <a href="tel:+919876543210" className="footer-nav-link">
                      +91 98765 43210
                    </a>
                  </div>

                  <div className="footer-contact-item">
                    <Mail size={16} className="footer-contact-icon" />
                    <a href="mailto:info@mokshithenterprises.com" className="footer-nav-link">
                      info@mokshithenterprises.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '20px 0' }}>
        <div className="container footer-bottom-inner">
          <div className="footer-copyright">
            © 2026 Mokshith Enterprises. All rights reserved.
          </div>

          <div className="footer-bottom-right">
            <span className="footer-legal">Privacy Policy · Terms & Conditions</span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="footer-back-to-top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-main-layout {
          display: grid;
          grid-template-columns: 38% 1fr;
          gap: 56px;
          align-items: start;
        }

        .footer-brand-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-brand-desc {
          font-size: 0.92rem;
          color: #94A3B8;
          line-height: 1.68;
          margin-top: 24px;
          margin-bottom: 0;
          max-width: 340px;
          font-weight: 400;
        }

        .footer-nav-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .footer-col-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0 0 20px 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-nav-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.88rem;
          line-height: 1.4;
          transition: color 0.25s ease;
          display: inline-block;
        }

        .footer-nav-link:hover {
          color: #FFFFFF;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
        }

        .footer-contact-icon {
          color: #59C749;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-contact-text {
          color: #94A3B8;
          line-height: 1.5;
        }

        .footer-bottom-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 0.82rem;
          color: #64748B;
        }

        .footer-copyright {
          color: #64748B;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-legal {
          color: #64748B;
        }

        .footer-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.05);
          color: #94A3B8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.25s ease;
        }

        .footer-back-to-top:hover {
          background-color: #59C749;
          color: #052214;
          border-color: #59C749;
        }

        @media (max-width: 992px) {
          .footer-main-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-brand-desc {
            max-width: 100%;
          }

          .footer-nav-columns {
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .footer-main-padding {
            padding: 32px 0 24px 0 !important;
          }

          footer .container > .footer-main-layout {
            gap: 24px !important;
          }

          .footer-main-layout {
            grid-template-columns: 1fr !important;
          }

          .footer-hero-logo {
            transform: scale(0.78);
            transform-origin: left center;
          }

          .footer-brand-desc {
            display: none !important;
          }

          .footer-nav-columns {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 16px !important;
          }

          /* Make Contact span full width on small mobile if needed */
          .footer-nav-columns > div:nth-child(3) {
            grid-column: span 2;
          }

          .footer-col-title {
            font-size: 0.7rem !important;
            margin: 0 0 12px 0 !important;
            letter-spacing: 0.12em !important;
          }

          .footer-links {
            gap: 8px !important;
          }

          .footer-nav-link {
            font-size: 0.8rem !important;
          }

          .footer-contact-list {
            gap: 10px !important;
            display: grid !important;
            grid-template-columns: 1fr !important;
          }

          .footer-contact-item {
            font-size: 0.8rem !important;
          }

          .footer-bottom-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
            font-size: 0.75rem !important;
          }

          .footer-bottom-right {
            width: 100% !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </footer>
  );
}

