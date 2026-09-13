import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, CheckCircle2, IndianRupee } from 'lucide-react';

export default function InlineCalculatorSection({ onApplyEstimate }) {
  const [monthlyBill, setMonthlyBill] = useState(6000);

  // Calculation Logic:
  // Estimated system size (kW) needed approx = bill / 1200
  const systemSizeKw = Math.max(1, Math.round((monthlyBill / 1200) * 10) / 10);
  const monthlySavings = Math.round(monthlyBill * 0.90);
  const annualSavings = monthlySavings * 12;
  const lifetimeSavings = annualSavings * 25;
  const approxRooftopArea = systemSizeKw * 80; // ~80 sq ft per kW
  const govtSubsidy = systemSizeKw <= 2 ? 60000 : systemSizeKw <= 3 ? 78000 : 78000;

  const handleApplyClick = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        monthlyBill: `₹${monthlyBill.toLocaleString('en-IN')}`,
        recommendedSize: `${systemSizeKw} kW`,
        monthlySavings: `₹${monthlySavings.toLocaleString('en-IN')}`,
        propertyType: 'Residential',
        message: `I calculated my monthly solar savings for a bill of ₹${monthlyBill.toLocaleString('en-IN')}/month. Recommended System Size: ${systemSizeKw} kW. Please send detailed quotation.`,
      });
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="calculator-section"
      style={{
        backgroundColor: '#051911',
        backgroundImage: 'linear-gradient(180deg, #062217 0%, #03140D 100%)',
        color: '#FFFFFF',
        padding: '90px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.72rem',
              fontWeight: '700',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#59C749',
            }}
          >
            INTERACTIVE SAVINGS ESTIMATOR
          </span>
          <h2
            className="heading-lg"
            style={{
              color: '#FFFDF1',
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              marginTop: '8px',
              marginBottom: '14px',
            }}
          >
            How Much Can <span style={{ color: '#59C749' }}>You Save?</span>
          </h2>
          <p style={{ color: 'rgba(255, 253, 241, 0.85)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Adjust your monthly electricity expense below to see instant estimates of system sizing, rooftop area, government subsidy, and 25-year financial savings!
          </p>
        </div>

        {/* Interactive Estimator Main Panel */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 253, 241, 0.06)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(89, 199, 73, 0.35)',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 44px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* LEFT: Bill Slider Input */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: '600', color: '#FFFDF1' }}>
                  Your Average Monthly Bill:
                </label>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    color: '#59C749',
                  }}
                >
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Range Slider Input */}
              <input
                type="range"
                min={1500}
                max={50000}
                step={500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '6px',
                  outline: 'none',
                  accentColor: '#59C749',
                  cursor: 'pointer',
                  marginBottom: '20px',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#E2F4DC', marginBottom: '30px' }}>
                <span>₹1,500/mo</span>
                <span>₹25,000/mo</span>
                <span>₹50,000+/mo</span>
              </div>

              {/* Quick Specs Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div style={{ backgroundColor: 'rgba(255,253,241,0.06)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,253,241,0.12)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#E2F4DC' }}>Recommended Solar</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFDF1', marginTop: '2px' }}>
                    {systemSizeKw} kW System
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(255,253,241,0.06)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,253,241,0.12)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#E2F4DC' }}>Rooftop Area Required</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFDF1', marginTop: '2px' }}>
                    ~{approxRooftopArea} sq. ft.
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Financial Results & CTA */}
            <div
              style={{
                backgroundColor: 'rgba(16, 46, 13, 0.85)',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid rgba(89, 199, 73, 0.45)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#59C749', letterSpacing: '0.1em', marginBottom: '8px' }}>
                ESTIMATED RETURN ON INVESTMENT
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.88rem', color: '#E2F4DC' }}>Estimated Monthly Savings</div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFDF1', lineHeight: '1.1', marginTop: '4px' }}>
                  ₹{monthlySavings.toLocaleString('en-IN')}{' '}
                  <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#59C749' }}>/ month</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px 0', borderTop: '1px solid rgba(255,253,241,0.15)', borderBottom: '1px solid rgba(255,253,241,0.15)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: '#E2F4DC' }}>25-Year Lifetime Savings:</span>
                  <span style={{ fontWeight: '700', color: '#59C749' }}>₹{lifetimeSavings.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: '#E2F4DC' }}>Govt Subsidy Assistance:</span>
                  <span style={{ fontWeight: '700', color: '#FFFDF1' }}>Up to ₹{govtSubsidy.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleApplyClick}
                className="btn"
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#59C749',
                  color: '#FFFDF1',
                  fontWeight: '700',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(89, 199, 73, 0.35)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#47AC38')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#59C749')}
              >
                <span>Get Customized Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
