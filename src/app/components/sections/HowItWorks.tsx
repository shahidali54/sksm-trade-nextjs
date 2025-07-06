'use client';

import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select from our Basic, Pro, or Premium trading plans based on your experience level and investment goals.",
      icon: "📋",
      features: ["Compare plan features", "Select payment option", "Complete registration"]
    },
    {
      number: "02",
      title: "Receive Signals",
      description: "Get real-time trading signals via Telegram, email, or SMS with detailed entry/exit points and risk management.",
      icon: "📱",
      features: ["Instant notifications", "Detailed analysis", "Risk management tips"]
    },
    {
      number: "03",
      title: "Execute Trades",
      description: "Follow our expert signals on your preferred trading platform with proper position sizing and stop losses.",
      icon: "⚡",
      features: ["Copy trade signals", "Set stop losses", "Monitor positions"]
    },
    {
      number: "04",
      title: "Track Profits",
      description: "Monitor your performance through our dashboard and see your profits grow with our proven strategies.",
      icon: "📊",
      features: ["Performance tracking", "Profit analysis", "Portfolio overview"]
    }
  ];

  const features = [
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Bank-grade security with encrypted communications and secure payment processing."
    },
    {
      icon: "⏰",
      title: "24/7 Support",
      description: "Round-the-clock expert support to help you with any questions or concerns."
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "Consistent 94%+ success rate with transparent performance tracking."
    },
    {
      icon: "🎯",
      title: "Risk Management",
      description: "Built-in risk management strategies to protect your capital and maximize profits."
    }
  ];

  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 bg-gradient-to-r from-slate-900/80 to-blue-900/40">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">How It Works</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Simple 4-step process to start earning with our professional trading signals
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">{step.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">{step.number}</div>
                </div>
                <h3 className="text-lg sm:text-xl text-white font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                <ul className="space-y-1 sm:space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-400">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Why Choose SKSM Trade?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h4 className="text-base sm:text-lg text-white font-bold mb-2 sm:mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Start Trading?</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Join thousands of successful traders who trust our signals for consistent profits
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="#hero"
                onClick={scrollToHero}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer inline-block text-sm sm:text-base"
              >
                Get Started Now
              </Link>
              <Link 
                href="#plans"
                onClick={scrollToPlans}
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 cursor-pointer inline-block text-sm sm:text-base"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 