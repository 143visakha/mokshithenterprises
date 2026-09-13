import React, { useState } from 'react';
import { X, Calculator, Sun, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function SolarCalculatorModal({ isOpen, onClose, onApplyEstimate }) {
  const [monthlyBill, setMonthlyBill] = useState(15000);
  const [propertyType, setPropertyType] = useState('residential');

  if (!isOpen) return null;

  // Approximate solar calculation model
  // Cost per unit avg = ₹8
  // Estimated monthly units = monthlyBill / 8
  // Solar produces ~120 units per kW per month
  const recommendedKw = Math.max(1, Math.round((monthlyBill / 8 / 120) * 10) / 10);
  const roofAreaSqFt = Math.round(recommendedKw * 80); // ~80 sq ft per kW
  const monthlySavings = Math.round(monthlyBill * 0.85); // ~85% bill savings
  const annualSavings = monthlySavings * 12;
  const lifetimeSavings25Yrs = annualSavings * 25;

  const handleApplyEstimate = () => {
    onApplyEstimate({
      monthlyBill: `₹${monthlyBill.toLocaleString('en-IN')}`,
      propertyType,
      recommendedKw: `${recommendedKw} kW`,
      roofArea: `${roofAreaSqFt} sq. ft.`,
    });
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(10, 17, 40, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out forwards',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          maxWidth: '650px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-panel)',
          padding: '36px 32px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#64748B',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <X size={22} />
        </button>

        {/* Brand Logo Header */}
        <div style={{ marginBottom: '16px' }}>
          <BrandLogo mode="light" height={34} />
        </div>

        {/* Header Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'rgba(89, 199, 73, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#59C749',
              flexShrink: 0
            }}
          >
            <Calculator size={20} />
          </div>
          <div>
            <h3 className="heading-md" style={{ fontSize: '1.3rem', margin: 0, color: '#062217' }}>Interactive Solar Savings Estimator</h3>
            <p className="body-text" style={{ fontSize: '0.85rem', margin: 0, marginTop: '2px' }}>Estimate your required solar system capacity and 25-year financial savings.</p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '20px 0' }} />

        {/* Input Form */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#062217', marginBottom: '8px' }}>
            Property Type
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
            {[
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'industrial', label: 'Industrial' },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setPropertyType(type.id)}
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  border: propertyType === type.id ? '2px solid #59C749' : '1px solid var(--border-subtle)',
                  backgroundColor: propertyType === type.id ? 'rgba(89, 199, 73, 0.15)' : '#FAFCFF',
                  color: propertyType === type.id ? '#59C749' : '#475569',
                  cursor: 'pointer',
                }}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#062217' }}>
              Average Monthly Electricity Bill
            </label>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#59C749' }}>
              ₹{monthlyBill.toLocaleString('en-IN')}
            </span>
          </div>

          <input
            type="range"
            min="2000"
            max="150000"
            step="1000"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '4px',
              accentColor: '#59C749',
              cursor: 'pointer',
              marginBottom: '12px',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B' }}>
            <span>₹2,000/mo</span>
            <span>₹50,000/mo</span>
            <span>₹1,50,000+/mo</span>
          </div>
        </div>

        {/* Calculated Results Panel */}
        <div
          style={{
            backgroundColor: 'var(--bg-navy-deep)',
            color: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '28px',
            border: '1px solid rgba(89, 199, 73, 0.25)',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#59C749', textTransform: 'uppercase', marginBottom: '16px' }}>
            ESTIMATED SYSTEM SPECS & FINANCIAL SAVINGS
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Recommended Solar Plant</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.75rem', fontWeight: '800', color: '#FFFFFF' }}>
                {recommendedKw} <span style={{ fontSize: '1rem', fontWeight: '500' }}>kW</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Shade-Free Roof Area Needed</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.75rem', fontWeight: '800', color: '#FFFFFF' }}>
                {roofAreaSqFt} <span style={{ fontSize: '1rem', fontWeight: '500' }}>sq.ft</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Est. Annual Savings</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.35rem', fontWeight: '700', color: '#59C749' }}>
                ₹{annualSavings.toLocaleString('en-IN')}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>25-Year Lifetime Savings</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.35rem', fontWeight: '700', color: '#59C749' }}>
                ₹{lifetimeSavings25Yrs.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleApplyEstimate}
          className="btn btn-solar"
          style={{ width: '100%', padding: '14px', fontSize: '0.95rem', borderRadius: '8px' }}
        >
          <span>Use This Estimate in Free Quote Request</span>
          <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}
