import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X, ShieldCheck, Sun, Zap, CheckCircle2 } from 'lucide-react';

export default function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Mokshith Enterprises solar showcase video
  const videoSrc = '/vid.mp4';
  const fallbackVideoSrc = '/vid.mp4';

  const handlePlayInline = () => {
    setIsPlaying(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="video-showcase"
      style={{
        backgroundColor: '#061F12',
        backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(89, 199, 73, 0.12) 0%, rgba(6, 31, 18, 0) 70%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Background Decorative Solar Grid Accents */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(89, 199, 73, 0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              backgroundColor: 'rgba(89, 199, 73, 0.15)',
              border: '1px solid rgba(89, 199, 73, 0.3)',
              borderRadius: '100px',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#59C749',
                boxShadow: '0 0 10px #59C749',
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#59C749',
              }}
            >
              MOKSHITH ENTERPRISES • OUR WORK
            </span>
          </div>

          <h2
            className="heading-lg"
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.1rem)',
              color: '#FFFDF1',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}
          >
            See Solar in <span style={{ color: '#59C749' }}>Action</span>
          </h2>

          <p
            className="video-showcase-desc"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 253, 241, 0.82)',
              margin: '0 auto',
              lineHeight: '1.65',
              fontWeight: '400',
            }}
          >
            Watch how Mokshith Enterprises powers homes, commercial complexes, and industrial hubs across India with high-yield Tier-1 solar technology and turnkey execution.
          </p>
        </div>

        {/* 16:9 Video Showcase Container */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
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
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(89, 199, 73, 0.28)',
            }}
          >
            {!isPlaying ? (
              /* Video Poster & Play Trigger State */
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  backgroundImage: 'url(/sec.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handlePlayInline}
              >
                {/* Dark Gradient Overlay for Cinematic Depth */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(6, 31, 18, 0.4) 0%, rgba(6, 31, 18, 0.65) 100%)',
                    transition: 'background 0.3s ease',
                  }}
                />

                {/* Top-Left Floating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    zIndex: 10,
                    backgroundColor: 'rgba(6, 26, 11, 0.8)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(89, 199, 73, 0.3)',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Sun size={16} style={{ color: '#59C749' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#FFFDF1', letterSpacing: '0.03em' }}>
                    Mokshith Enterprises • Project Showcase Video
                  </span>
                </div>

                {/* Top-Right Lightbox Modal Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal();
                  }}
                  title="Expand to Fullscreen Lightbox"
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    zIndex: 10,
                    backgroundColor: 'rgba(6, 26, 11, 0.8)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    e.currentTarget.style.backgroundColor = 'rgba(6, 26, 11, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Maximize size={18} />
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
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(89, 199, 73, 0.25)',
                        animation: 'pulse 2.4s infinite ease-in-out',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        width: '90px',
                        height: '90px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(89, 199, 73, 0.4)',
                      }}
                    />

                    {/* Main Circular Play Button */}
                    <button
                      aria-label="Play solar showcase video"
                      style={{
                        position: 'relative',
                        width: '76px',
                        height: '76px',
                        borderRadius: '50%',
                        backgroundColor: '#59C749',
                        color: '#FFFDF1',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 0 35px rgba(89, 199, 73, 0.65)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.12)';
                        e.currentTarget.style.backgroundColor = '#47AC38';
                        e.currentTarget.style.boxShadow = '0 0 50px rgba(89, 199, 73, 0.9)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = '#59C749';
                        e.currentTarget.style.boxShadow = '0 0 35px rgba(89, 199, 73, 0.65)';
                      }}
                    >
                      <Play size={32} style={{ marginLeft: '4px', fill: '#FFFDF1' }} />
                    </button>
                  </div>

                  <span
                    style={{
                      color: '#FFFDF1',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      letterSpacing: '0.04em',
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                    }}
                  >
                    Click to Play Video Showcase
                  </span>
                </div>

                {/* Bottom Overlay Info Bar */}
                <div
                  className="video-bottom-info-bar"
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
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
                      backgroundColor: 'rgba(6, 26, 11, 0.75)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFFDF1' }}>
                      Turnkey Solar EPC & Engineering Excellence
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#A7F3D0', marginTop: '2px' }}>
                      PM Surya Ghar Subsidy • Net Metering • Commercial & Utility Plants
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
                  poster="/sec.jpg"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => {
                    // Fallback to secondary video source if local MP4 file is missing
                    if (e.target.src !== fallbackVideoSrc) {
                      e.target.src = fallbackVideoSrc;
                    }
                  }}
                />
                
                {/* Close / Return to Thumbnail Button */}
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
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#59C749')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.75)')}
                >
                  <X size={18} />
                </button>
              </div>
            )}
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
              poster="/sec.jpg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              onError={(e) => {
                if (e.target.src !== fallbackVideoSrc) {
                  e.target.src = fallbackVideoSrc;
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Pulse Keyframes Animation */}
      <style>{`
        @keyframes pulse {
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
          .video-showcase-desc,
          .video-bottom-info-bar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
