import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogosSection from './components/BrandLogosSection';
import AboutSection from './components/AboutSection';
import PmSuryaGharSection from './components/PmSuryaGharSection';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import SolarComponentsSection from './components/SolarComponentsSection';
import WhyMokshith from './components/WhyMokshith';
import ProjectsSection from './components/ProjectsSection';
import InlineCalculatorSection from './components/InlineCalculatorSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import MeetExpertsSection from './components/MeetExpertsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SolarCalculatorModal from './components/SolarCalculatorModal';
import ImageLightboxModal from './components/ImageLightboxModal';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState(null);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '', caption: '' });

  const handleOpenLightbox = (src, caption = '') => {
    setLightboxData({ isOpen: true, src, caption });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, src: '', caption: '' });
  };

  const handleApplyEstimate = (estimateData) => {
    setQuotePrefill(estimateData);
  };

  const handleCheckPmSuryaGharEligibility = () => {
    setQuotePrefill(prev => ({
      ...prev,
      propertyType: 'Residential',
      message: 'I am interested in checking my eligibility for the PM Surya Ghar Muft Bijli Yojana government solar subsidy scheme (up to ₹78,000 subsidy & 300 free units). Please guide me.',
    }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteWithProject = (projectTitle) => {
    setQuotePrefill(prev => ({
      ...prev,
      message: `I am interested in a solar installation similar to "${projectTitle}". Please provide a quotation and feasibility report.`,
    }));
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 01. Fixed Header Navigation */}
      <Navbar
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Main Page Layout */}
      <main>
        {/* 02. Solar Hero Section */}
        <Hero
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* 03. Brand & Partner Logos Carousel Bar */}
        <BrandLogosSection />

        {/* 04. About Us Section */}
        <AboutSection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 05. PM Surya Ghar Muft Bijli Yojana (Govt Subsidy) */}
        <PmSuryaGharSection
          onCheckEligibility={handleCheckPmSuryaGharEligibility}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 06. Key Impact Statistics Banner */}
        <StatsSection />

        {/* 08. Premium Solar Components */}
        <SolarComponentsSection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 07. 4-Step Process: Your Journey to Solar */}
        <ProcessSection />

        {/* 09. Why We Are Your Trusted Solar Partner */}
        <WhyMokshith
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 10. Our Solar Footprint (Projects Showcase) */}
        <ProjectsSection
          onOpenQuoteWithProject={handleOpenQuoteWithProject}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 11. Interactive Solar Savings Calculator (How Much Can You Save?) */}
        <InlineCalculatorSection
          onApplyEstimate={handleApplyEstimate}
        />

        {/* 12. Testimonials: Trusted by Thousands of Customers */}
        <TestimonialsSection />

        {/* 13. See Solar in Action (Video Showcase) */}
        <VideoShowcaseSection />

        {/* 14. Meet Our Experts (Technical Team & Avatars) */}
        <MeetExpertsSection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 15. Contact & Consultation Form (Ready to Switch to Solar Power?) */}
        <ContactSection
          prefilledData={quotePrefill}
        />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Interactive Savings Estimator Modal */}
      <SolarCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />

      {/* Full-Screen Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxData.isOpen}
        imageSrc={lightboxData.src}
        caption={lightboxData.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
