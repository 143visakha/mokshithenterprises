import React, { useState, useRef } from 'react';
import { 
  Play, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Sun, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Leaf, 
  Award, 
  ArrowRight,
  Activity,
  Calculator,
  Flame
} from 'lucide-react';

export default function Solar60KwSection({ onOpenQuoteWithProject, onOpenCalculator }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Downloaded 60kW Kapwing Video & Thumbnail
  const videoSrc = '/vid-60kw.mp4';
  const posterSrc = '/vid-60kw-thumb.jpg';

  const handlePlayInline = () => {
    setIsPlaying(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRequest60KwQuote = () => {
    if (onOpenQuoteWithProject) {
      onOpenQuoteWithProject('60 kW Commercial & Industrial Solar Power Plant');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: <Zap size={22} style={{ color: '#59C749' }} />,
      value: '60 kW',
      label: 'Installed DC Capacity',
      detail: 'High-yield Tier-1 Mono PERC modules',
    },
    {
      icon: <Activity size={22} style={{ color: '#FACC15' }} />,
      value: '240+ Units',
      label: 'Daily Energy Generation',
      detail: '~87,600 units clean power annually',
    },
    {
      icon: <TrendingUp size={22} style={{ color: '#38BDF8' }} />,
      value: '₹6.5+ Lakhs',
      label: 'Annual Bill Savings',
      detail: 'Drastic reduction in commercial tariffs',
    },
    {
      icon: <Leaf size={22} style={{ color: '#4ADE80' }} />,
      value: '70+ Tonnes',
      label: 'CO₂ Offset / Year',
      detail: 'Equivalent to planting ~3,200 trees',
    },
  ];

  const highlights = [
    'Complete Turnkey EPC execution from 3D shadow analysis to commissioning',
    'Heavy-duty Hot-Dip Galvanized (HDG) structure engineered for 150+ km/h winds',
    '3-Phase High-Efficiency Inverters with Real-Time IoT cloud monitoring',
    'Bi-directional Net-Metering synchronization with DISCOM grid',
    'Tier-1 Solar Modules backed by 25-Year Linear Power Warranty',
  ];

  return (
    <section
      id="solar-60kw"
      style={{
        backgroundColor: '#04180E',
        backgroundImage: 'radial-gradient(circle at 50% 12%, rgba(89, 199, 73, 0.16) 0%, rgba(4, 24, 14, 0) 70%)',
        padding: '110px 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(89, 199, 73, 0.15)',
        borderBottom: '1px solid rgba(89, 199, 73, 0.15)',
      }}
    >
      {/* Background Solar Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(89, 199, 73, 0.15) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 52px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              backgroundColor: 'rgba(89, 199, 73, 0.15)',
              border: '1px solid rgba(89, 199, 73, 0.35)',
              borderRadius: '100px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#59C749',
                boxShadow: '0 0 12px #59C749',
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#59C749',
              }}
            >
              LANDMARK PROJECT • 60 kW SOLAR INSTALLATION
            </span>
          </div>

          <h2
            className="heading-lg"
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
              color: '#FFFDF1',
              marginBottom: '18px',
              lineHeight: '1.2',
              fontWeight: '700',
            }}
          >
            Our Landmark <span style={{ color: '#59C749' }}>60 kW Solar Installation</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 253, 241, 0.85)',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '400',
            }}
          >
            Watch the real on-site video walkthrough of our <strong>60 kW Solar Power Plant</strong> executed by <strong>Mokshith Enterprises</strong>. Designed for peak generation yield, robust commercial reliability, and long-term cost savings.
          </p>
        </div>

        {/* 4 Key Highlight Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '44px',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(10, 38, 22, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(89, 199, 73, 0.22)',
                borderRadius: '16px',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(89, 199, 73, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(89, 199, 73, 0.22)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(89, 199, 73, 0.12)',
                  border: '1px solid rgba(89, 199, 73, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#FFFDF1', lineHeight: '1.1' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: '600', color: '#59C749', marginTop: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 253, 241, 0.65)', marginTop: '2px' }}>
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 16:9 Video Showcase Container */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto 48px auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#03140A',
              boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(89, 199, 73, 0.35)',
            }}
          >
            {!isPlaying ? (
              /* Video Poster & Play Trigger State */
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  backgroundImage: `url(${posterSrc}), url(/sec.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handlePlayInline}
              >
                {/* Cinematic Depth Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(6, 31, 18, 0.45) 0%, rgba(6, 31, 18, 0.72) 100%)',
                    transition: 'background 0.3s ease',
                  }}
                />

                {/* Top-Left Floating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 10,
                    backgroundColor: 'rgba(6, 26, 11, 0.85)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(89, 199, 73, 0.35)',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Sun size={16} style={{ color: '#59C749' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFFDF1', letterSpacing: '0.02em' }}>
                    Mokshith Enterprises • 60 kW Rooftop Showcase
                  </span>
                </div>

                {/* Top-Right Lightbox Modal Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal();
                  }}
                  title="Expand to Fullscreen Lightbox"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 10,
                    backgroundColor: 'rgba(6, 26, 11, 0.85)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFDF1',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#59C749';
                    e.currentTarget.style.borderColor = '#59C749';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(6, 26, 11, 0.85)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Maximize2 size={18} />
                </button>

                {/* Center Animated Play Button */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Pulsing Aura Rings */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(89, 199, 73, 0.25)',
                        animation: 'pulse60kw 2.4s infinite ease-in-out',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        width: '96px',
                        height: '96px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(89, 199, 73, 0.4)',
                      }}
                    />

                    {/* Main Circular Play Button */}
                    <button
                      aria-label="Play 60kW solar showcase video"
                      style={{
                        position: 'relative',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#59C749',
                        color: '#FFFDF1',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 0 40px rgba(89, 199, 73, 0.75)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.12)';
                        e.currentTarget.style.backgroundColor = '#47AC38';
                        e.currentTarget.style.boxShadow = '0 0 55px rgba(89, 199, 73, 0.95)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = '#59C749';
                        e.currentTarget.style.boxShadow = '0 0 40px rgba(89, 199, 73, 0.75)';
                      }}
                    >
                      <Play size={34} style={{ marginLeft: '4px', fill: '#FFFDF1' }} />
                    </button>
                  </div>

                  <span
                    style={{
                      color: '#FFFDF1',
                      fontSize: '1rem',
                      fontWeight: '700',
                      letterSpacing: '0.03em',
                      textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                    }}
                  >
                    Click to Play 60 kW Site Video
                  </span>
                </div>

                {/* Bottom Overlay Information Bar */}
                <div
                  className="video-bottom-info-bar"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    zIndex: 10,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(6, 26, 11, 0.85)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(89, 199, 73, 0.25)',
                    }}
                  >
                    <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#FFFDF1' }}>
                      60 kW Commercial Grid-Tied Solar Power Plant
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#A7F3D0', marginTop: '2px' }}>
                      High-Yield Bi-Facial Solar Arrays • Net Metering • Remote IoT Telemetry
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* HTML5 Video Player State */
              <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000000' }}>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  poster={posterSrc}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
                
                {/* Close Button to return to thumbnail */}
                <button
                  onClick={() => setIsPlaying(false)}
                  title="Close Video"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 20,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#59C749')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.75)')}
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Project Details & Action Card */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            backgroundColor: 'rgba(10, 38, 22, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(89, 199, 73, 0.25)',
            borderRadius: '20px',
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Key Deliverables List */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <ShieldCheck size={20} style={{ color: '#59C749' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFDF1', margin: 0 }}>
                Why This 60 kW Project Stands Out
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 253, 241, 0.75)', marginBottom: '20px', lineHeight: '1.5' }}>
              Mokshith Enterprises provides end-to-end EPC execution ensuring zero downtime and highest unit yield per square foot.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {highlights.map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: '#59C749', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#FFFDF1', lineHeight: '1.45' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: CTA Box */}
          <div
            style={{
              backgroundColor: 'rgba(6, 26, 11, 0.8)',
              border: '1px solid rgba(89, 199, 73, 0.3)',
              borderRadius: '16px',
              padding: '28px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(89, 199, 73, 0.15)',
                border: '1px solid rgba(89, 199, 73, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                color: '#59C749',
              }}
            >
              <Award size={28} />
            </div>

            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFDF1', marginBottom: '8px' }}>
              Want a 60 kW+ Solar Setup for Your Business?
            </h4>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 253, 241, 0.75)', marginBottom: '22px', lineHeight: '1.5' }}>
              Get a customized techno-commercial proposal with guaranteed ROI analysis and DISCOM net-metering assistance.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              <button
                onClick={handleRequest60KwQuote}
                style={{
                  width: '100%',
                  padding: '14px 22px',
                  backgroundColor: '#59C749',
                  color: '#062217',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(89, 199, 73, 0.4)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#47AC38';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#59C749';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Request 60 kW Solar Quote</span>
                <ArrowRight size={18} />
              </button>

              {onOpenCalculator && (
                <button
                  onClick={onOpenCalculator}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    backgroundColor: 'transparent',
                    color: '#FFFDF1',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#59C749';
                    e.currentTarget.style.color = '#59C749';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#FFFDF1';
                  }}
                >
                  <Calculator size={16} />
                  <span>Estimate Custom Capacity Savings</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal Video Player */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 15, 8, 0.94)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1100px',
              aspectRatio: '16 / 9',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(89, 199, 73, 0.4)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close fullscreen video"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#FFFDF1',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#59C749')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
            >
              <X size={22} />
            </button>

            <video
              ref={modalVideoRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              poster={posterSrc}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}

      {/* Pulse Keyframe Animation */}
      <style>{`
        @keyframes pulse60kw {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.2;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
        }

        @media (max-width: 768px) {
          .video-bottom-info-bar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
