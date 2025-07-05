'use client';

import React from "react";
import Navbar from "@/app/components/layout/Navbar";
import HeroSection from "@/app/components/sections/HeroSection";
import SignupBonusSection from "@/app/components/sections/SignupBonusSection";
import PricingSection from "@/app/components/sections/PricingSection";
import PerformanceDashboard from "@/app/components/sections/PerformanceDashboard";
import HowItWorks from "@/app/components/sections/HowItWorks";
import SupportSection from "@/app/components/sections/SupportSection";
import NewsSection from "@/app/components/sections/NewsSection";
import Testimonials from "@/app/components/sections/Testimonials";
import Footer from "@/app/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <HeroSection />
      <SignupBonusSection />
      <PricingSection />
      <PerformanceDashboard />
      <HowItWorks />
      <SupportSection />
      <NewsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
