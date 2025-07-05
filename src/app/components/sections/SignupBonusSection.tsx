'use client';

import React from "react";

const SignupBonusSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Register Now & Get <span className="text-cyan-400">Free Signals!</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Start your trading journey with complimentary signals to see our expertise in action
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Claim Free Signals
            <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignupBonusSection; 