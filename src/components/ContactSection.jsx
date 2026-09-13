import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Sun, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function ContactSection({ prefilledData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: prefilledData?.propertyType || 'Residential',
    monthlyBill: prefilledData?.monthlyBill || '₹10,000 - ₹25,000',
    message: prefilledData?.message || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        backgroundColor: '#0A2912',
        backgroundImage: 'linear-gradient(180deg, #0E3618 0%, #061A0B 100%)',
        padding: '90px 0',
        color: '#FFFDF1',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Centered Heading matching Screenshot */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <span className="eyebrow eyebrow-dark" style={{ color: '#59C749' }}>GET A FREE CONSULTATION</span>
          <h2 className="heading-lg" style={{ color: '#FFFDF1', marginTop: '8px', marginBottom: '16px', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            Ready to Switch to <span style={{ color: '#59C749', fontStyle: 'italic' }}>Solar Power?</span>
          </h2>
          <p style={{ color: 'rgba(255, 253, 241, 0.9)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Book a free structural rooftop audit, shadow analysis, and government subsidy consultation with our engineering team today!
          </p>
        </div>

        {/* Form Container Wrapper */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
            padding: 'clamp(24px, 5vw, 52px)',
            color: '#0F172A',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(89, 199, 73, 0.15)',
                  color: '#59C749',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 className="heading-md" style={{ color: '#102E0D', marginBottom: '12px' }}>
                Consultation Request Received!
              </h3>
              <p className="body-text" style={{ maxWidth: '540px', margin: '0 auto 24px auto' }}>
                Thank you for contacting Mokshith Enterprises. Our solar engineering specialist will review your property specifications and call you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem' }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              <div style={{ marginBottom: '28px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 className="heading-md" style={{ fontSize: '1.35rem', color: '#0F172A' }}>
                    Solar Project Quotation Form
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    Fill in your details below to receive a custom 3D solar layout design & financial proposal.
                  </p>
                </div>
                <BrandLogo mode="light" height={32} />
              </div>

              {/* Form Input Fields Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '20px',
                  marginBottom: '20px',
                }}
              >
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98482 82496"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. dannanakurmarao143@gmail.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* City / Location */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    City / Installation Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad / Visakhapatnam"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="Residential">Residential House / Villa</option>
                    <option value="Commercial">Commercial Office / Mall / Hospital</option>
                    <option value="Industrial">Industrial Factory / Warehouse</option>
                  </select>
                </div>

                {/* Monthly Bill */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    Average Monthly Bill
                  </label>
                  <select
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="Under ₹5,000">Under ₹5,000 / month</option>
                    <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000 / month</option>
                    <option value="₹15,000 - ₹40,000">₹15,000 - ₹40,000 / month</option>
                    <option value="Above ₹40,000">Above ₹40,000 / month</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                  Project Details / Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your roof space, backup requirement, or timeline..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  borderRadius: '10px',
                  backgroundColor: '#59C749',
                  color: '#FFFDF1',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(89, 199, 73, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {loading ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Request Free Solar Consultation</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '0.78rem', color: '#64748B' }}>
                <ShieldCheck size={16} style={{ color: '#59C749' }} />
                <span>Your information is strictly confidential. Zero spam guarantee.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

