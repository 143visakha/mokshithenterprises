import React from 'react';
import { Search, ClipboardCheck, Wrench, Zap } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Free Site Audit',
      subtitle: 'Shadow & load audit',
      icon: Search,
    },
    {
      num: '02',
      title: 'Custom Proposal',
      subtitle: '3D design & payback math',
      icon: ClipboardCheck,
    },
    {
      num: '03',
      title: 'Fast Installation',
      subtitle: '48-hr setup & DISCOM sync',
      icon: Wrench,
    },
    {
      num: '04',
      title: 'Save & Enjoy',
      subtitle: 'Zero bills & O&M',
      icon: Zap,
    },
  ];

  return (
    <section
      id="process"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '40px 0',
        borderTop: '1px solid var(--border-subtle, #E2E8F0)',
        borderBottom: '1px solid var(--border-subtle, #E2E8F0)',
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 28px auto' }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#59C749',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            HOW IT WORKS
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
              fontWeight: '800',
              color: '#062217',
              margin: 0,
            }}
          >
            Your Journey to <span style={{ color: '#59C749' }}>Solar in 4 Steps</span>
          </h2>
        </div>

        {/* Static Horizontal Line 4-Column Grid (No scroll on mobile) */}
        <div className="process-4step-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="process-step-card">
                {/* Icon Squircle + Floating Badge */}
                <div style={{ position: 'relative', marginBottom: '10px' }}>
                  <div className="process-icon-squircle">
                    <Icon className="process-icon-svg" />
                  </div>

                  <span className="process-number-badge">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="process-step-title">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <span className="process-step-subtitle">
                  {step.subtitle}
                </span>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .process-4step-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }
        .process-step-card {
          background-color: #F8FAFC;
          border-radius: 14px;
          padding: 18px 12px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.25s ease;
        }
        .process-step-card:hover {
          border-color: #59C749;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(89, 199, 73, 0.12);
        }
        .process-icon-squircle {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: rgba(89, 199, 73, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .process-icon-svg {
          width: 24px;
          height: 24px;
          color: #59C749;
        }
        .process-number-badge {
          position: absolute;
          top: -4px;
          right: -8px;
          background-color: #59C749;
          color: #062217;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 5px;
          border: 2px solid #FFFFFF;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          line-height: 1;
        }
        .process-step-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          color: #062217;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }
        .process-step-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          color: #59C749;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .process-4step-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
          }
          .process-step-card {
            padding: 12px 4px;
            border-radius: 10px;
          }
          .process-icon-squircle {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .process-icon-svg {
            width: 18px;
            height: 18px;
          }
          .process-number-badge {
            font-size: 0.62rem;
            padding: 1px 4px;
            top: -3px;
            right: -6px;
          }
          .process-step-title {
            font-size: 0.75rem;
            margin-bottom: 2px;
          }
          .process-step-subtitle {
            font-size: 0.64rem;
          }
        }

        @media (max-width: 480px) {
          .process-4step-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .process-step-card {
            padding: 14px 10px;
          }
          .process-icon-squircle {
            width: 46px;
            height: 46px;
          }
          .process-icon-svg {
            width: 20px;
            height: 20px;
          }
          .process-step-title {
            font-size: 0.85rem;
          }
          .process-step-subtitle {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}

