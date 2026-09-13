import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * ImageLightboxModal
 * Full-screen responsive lightbox modal for viewing high-res solar photos when tapped.
 */
export default function ImageLightboxModal({ isOpen, imageSrc, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(6, 26, 11, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out forwards',
      }}
      onClick={onClose}
    >
      {/* Top Controls Header */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10000,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close full view"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#FFFFFF',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#59C749')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Full Image View Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '92vw',
          maxHeight: '84vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={caption || 'Full view solar photograph'}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(89, 199, 73, 0.3)',
            backgroundColor: '#000000',
          }}
        />

        {/* Caption Banner */}
        {caption && (
          <div
            style={{
              marginTop: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '100px',
              padding: '8px 24px',
              color: '#FFFDF1',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
