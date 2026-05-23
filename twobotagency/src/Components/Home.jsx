import React from 'react';
import CTABanner from './CtaBanner';
import SocialProofBar from './SocialProof';
import ServicesSection from './ServiceSection';
import HowItWorksSection from './HowItWork';
import IndustriesSection from './Industries';
import StatsSection from './StatSection';
import TestimonialsSection from './Testimonial';
import PricingSection from './Pricing';
import FAQSection from './Faq';
import HeroSection from './Hero';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />   {/* ✅ was missing! */}
      <CTABanner />
    </div>
  );
};

export default Home;