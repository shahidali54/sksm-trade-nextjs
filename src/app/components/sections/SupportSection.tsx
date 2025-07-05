'use client';

import React from "react";
import Image from "next/image";

const SupportSection = () => {
  // Team of support agents with avatars and specialties
  const agents = [
    {
      name: "Subhan Kaladi",
      role: "Crypto Expert",
      experience: "4+ years",
      avatar: "/images/subhan.jpg",
      specialty: "Bitcoin & Altcoins"
    },
    
    {
      name: "Shahid Ali",
      role: "Forex Analyst",
      experience: "2+ years",
      avatar: "/images/shahid.jpg",
      specialty: "Major Currency Pairs"
    },
    {
      name: "AI Assistant",
      role: "Market Strategist",
      experience: "24/7 Support",
      avatar: "/images/AI-Assistant.png",
      specialty: "Technical Analysis"
    }
  ];

  return (
    <section id="support" className="py-16 sm:py-20 px-4 bg-gradient-to-r from-slate-900/80 to-blue-900/40">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">24/7 Expert Support</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Our professional analysts are always available to guide your trading decisions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {agents.map((agent, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4 sm:p-6">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-2 border-cyan-500 rounded-full overflow-hidden">
                  <Image 
                    src={agent.avatar}
                    alt={agent.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl text-white font-bold mb-1 sm:mb-2">{agent.name}</h3>
                <p className="text-cyan-400 mb-3 sm:mb-4 text-sm sm:text-base">{agent.role}</p>
              </div>
              <div className="text-center">
                <div className="space-y-1 sm:space-y-2 text-gray-300 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm">{agent.experience}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs sm:text-sm">{agent.specialty}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base">
                  Chat Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 