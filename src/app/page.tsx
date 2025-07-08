// This is root page of the application

'use client';
import Navbar from "@/app/components/layout/Navbar";
import HeroSection from "@/app/components/sections/HeroSection";
import SignupBonusSection from "@/app/components/sections/SignupBonusSection";
import PricingSection from "@/app/components/sections/PricingSection";
import PerformanceDashboard from "@/app/components/sections/PerformanceDashboard";
import HowItWorks from "@/app/components/sections/HowItWorks";
import SupportSection from "@/app/components/sections/SupportSection";
import NewsSection from "@/app/components/sections/NewsSection";
import Testimonials from "@/app/components/sections/Testimonials";
import FAQSection from "@/app/components/sections/FAQSection";
import Footer from "@/app/components/layout/Footer";
import ScrollToTop from "@/app/components/layout/ScrollToTop";
import LaunchCountdown from "@/app/components/sections/LaunchCountdown";
import AnimatedBackground from "@/app/components/layout/AnimatedBackground";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <LaunchCountdown />
      <SignupBonusSection />
      <PricingSection />
      <PerformanceDashboard />
      <HowItWorks />
      <SupportSection />
      <NewsSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
