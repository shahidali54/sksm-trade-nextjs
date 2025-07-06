'use client';

import { motion } from "framer-motion";

const PricingSection = () => {
  // Pricing plan options for users
  const pricingPlans = [
    {
      name: "Basic Trade",
      price: "$5",
      period: "/month",
      icon: "💰",
      features: [
        "Real-time trading signals",
        "Daily market analysis",
        "Email alerts",
        "Basic Telegram access"
      ],
      popular: false
    },
    {
      name: "Pro Trade",
      price: "$15",
      period: "/month",
      icon: "📈",
      features: [
        "Advanced trading signals",
        "Daily + Weekly analysis",
        "Email & SMS alerts",
        "Private Telegram group",
        "Risk management tips"
      ],
      popular: true
    },
    {
      name: "Premium Trade",
      price: "$25",
      period: "/month",
      icon: "🚀",
      features: [
        "VIP trading signals",
        "Complete market analysis",
        "Priority alerts",
        "VIP Telegram group",
        "1-on-1 expert sessions",
        "Custom strategies"
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Choose Your Trading Plan</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Select the perfect plan to elevate your trading game with professional signals and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4 sm:p-6 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* ===== CARD ${index + 1}: ${plan.name} ===== */}
              {/* This is the main card container - you can customize background, border, hover effects here */}
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {/* ===== "Most Popular" Badge (only for Pro Trade) ===== */}
                  Most Popular
                </div>
              )}
              {/* ===== CARD HEADER SECTION ===== */}
              <div className="text-center pb-4 sm:pb-6">
                {/* ===== PLAN ICON ===== */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{plan.icon}</div>
                
                {/* ===== PLAN NAME ===== */}
                <h3 className="text-xl sm:text-2xl text-white font-bold mb-3 sm:mb-4">{plan.name}</h3>
                
                {/* ===== PRICE SECTION ===== */}
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400 ml-1 text-sm sm:text-base">{plan.period}</span>
                </div>
              </div>
              {/* ===== FEATURES LIST SECTION ===== */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300 text-sm sm:text-base">
                    {/* ===== CHECKMARK ICON ===== */}
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {/* ===== FEATURE TEXT ===== */}
                    {feature}
                  </div>
                ))}
              </div>
              {/* ===== CTA BUTTON SECTION ===== */}
              <motion.button 
                className={`w-full py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${plan.popular 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* ===== BUTTON TEXT ===== */}
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 