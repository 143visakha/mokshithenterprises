import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, ShieldCheck, AlertCircle, MessageSquare } from 'lucide-react';
import BrandLogo from './BrandLogo';

const RECIPIENT_EMAIL = 'dannanakurmarao143@gmail.com';
const PHONE_NUMBER = '+919848282496';
const PHONE_DISPLAY = '+91 98482 82496';

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
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize prefilledData from calculator or subsidy modal
  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        propertyType: prefilledData.propertyType || prev.propertyType,
        monthlyBill: prefilledData.monthlyBill || prev.monthlyBill,
        message: prefilledData.message || prev.message,
      }));
    }
  }, [prefilledData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `☀️ New Solar Enquiry from ${formData.fullName} (${formData.location}) - Mokshith Enterprises`,
          _template: 'table',
          _captcha: 'false',
          'Customer Full Name': formData.fullName,
          'Phone Number': formData.phone,
          'Email Address': formData.email,
          'Installation City / Location': formData.location,
          'Property Type': formData.propertyType,
          'Monthly Electricity Bill': formData.monthlyBill,
          'Project Requirements / Details': formData.message || 'Standard rooftop solar site audit requested.',
          'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // If network fails, provide helpful notification & mailto fallback
      setErrorMessage(
        'Unable to send automatically due to network restrictions. Please click below to send via your email app or contact us directly on WhatsApp/Phone.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      propertyType: 'Residential',
      monthlyBill: '₹10,000 - ₹25,000',
      message: '',
    });
    setSubmitted(false);
    setErrorMessage('');
  };

  const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    `Solar Project Enquiry - ${formData.fullName || 'Customer'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nProperty Type: ${formData.propertyType}\nMonthly Bill: ${formData.monthlyBill}\nMessage: ${formData.message}`
  )}`;

  const whatsappUrl = `https://wa.me/919848282496?text=${encodeURIComponent(
    `Hello Mokshith Enterprises, I would like to enquire about solar installation.\nName: ${formData.fullName || ''}\nLocation: ${formData.location || ''}\nPhone: ${formData.phone || ''}`
  )}`;

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
        
        {/* Section Centered Heading */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 48px auto' }}>
          <span className="eyebrow eyebrow-dark" style={{ color: '#59C749' }}>GET A FREE CONSULTATION</span>
          <h2 className="heading-lg" style={{ color: '#FFFDF1', marginTop: '8px', marginBottom: '16px', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            Ready to Switch to <span style={{ color: '#59C749', fontStyle: 'italic' }}>Solar Power?</span>
          </h2>
          <p style={{ color: 'rgba(255, 253, 241, 0.9)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Book a free structural rooftop audit, shadow analysis, and government subsidy consultation with our engineering team today!
          </p>

          {/* Official Office Address & Contact Quick Strip */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(89, 199, 73, 0.3)',
              borderRadius: '14px',
              padding: '12px 20px',
              marginTop: '20px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#FFFDF1', textAlign: 'left' }}>
              <MapPin size={16} style={{ color: '#59C749', flexShrink: 0 }} />
              <span>Sainath Colony Beside Coffee Club Ice Factory Junction, Ring Road, Vizianagaram</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#59C749', fontWeight: '700' }}>
              <Phone size={15} style={{ flexShrink: 0 }} />
              <a href={`tel:${PHONE_NUMBER}`} style={{ color: '#59C749', textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#59C749', fontWeight: '600' }}>
              <Mail size={15} style={{ flexShrink: 0 }} />
              <a href={`mailto:${RECIPIENT_EMAIL}`} style={{ color: '#59C749', textDecoration: 'none' }}>{RECIPIENT_EMAIL}</a>
            </div>
          </div>
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
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(89, 199, 73, 0.15)',
                  color: '#59C749',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}
              >
                <CheckCircle2 size={40} />
              </div>
              <h3 className="heading-md" style={{ color: '#102E0D', marginBottom: '10px', fontSize: '1.6rem' }}>
                Consultation Request Dispatched!
              </h3>
              <p className="body-text" style={{ maxWidth: '580px', margin: '0 auto 16px auto', color: '#475569', lineHeight: '1.6' }}>
                Thank you for reaching out to <strong>Mokshith Enterprises</strong>. Your enquiry details have been forwarded directly to our engineering desk at <strong style={{ color: '#0F172A' }}>{RECIPIENT_EMAIL}</strong>.
              </p>
              <div
                style={{
                  maxWidth: '520px',
                  margin: '0 auto 24px auto',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.88rem',
                  color: '#64748B',
                }}
              >
                ⚡ Our solar engineering specialist will review your property specifications and call you within <strong>24 hours</strong>.
              </div>

              {/* Quick Actions */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="btn"
                  style={{
                    backgroundColor: '#102E0D',
                    color: '#FFFDF1',
                    fontSize: '0.88rem',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Phone size={15} />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.88rem', padding: '10px 18px' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              <div style={{ marginBottom: '28px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 className="heading-md" style={{ fontSize: '1.35rem', color: '#0F172A' }}>
                    Solar Project Quotation Form
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    Enquiry submissions are routed directly to <strong style={{ color: '#0F172A' }}>{RECIPIENT_EMAIL}</strong>.
                  </p>
                </div>
                <BrandLogo mode="light" height={32} />
              </div>

              {errorMessage && (
                <div
                  style={{
                    padding: '14px 18px',
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FCA5A5',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    color: '#991B1B',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div>{errorMessage}</div>
                    <div style={{ marginTop: '8px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a
                        href={mailtoUrl}
                        style={{
                          color: '#B91C1C',
                          fontWeight: '700',
                          textDecoration: 'underline',
                          fontSize: '0.85rem',
                        }}
                      >
                        📧 Open Email Client Directly
                      </a>
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        style={{
                          color: '#15803D',
                          fontWeight: '700',
                          textDecoration: 'underline',
                          fontSize: '0.85rem',
                        }}
                      >
                        📞 Call {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>
              )}

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
                    placeholder="e.g. customer@example.com"
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
                    placeholder="e.g. Vizianagaram / Visakhapatnam"
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
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.75 : 1,
                  boxShadow: '0 8px 20px rgba(89, 199, 73, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s, transform 0.15s',
                }}
              >
                {loading ? (
                  <span>Sending Consultation Enquiry...</span>
                ) : (
                  <>
                    <span>Request Free Solar Consultation</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '0.78rem', color: '#64748B' }}>
                <ShieldCheck size={16} style={{ color: '#59C749' }} />
                <span>Your information is strictly confidential. Directly routed to Mokshith Enterprises.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}


