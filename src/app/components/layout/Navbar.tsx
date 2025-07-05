'use client';

import React, { useState } from "react";
import { UserButton } from "@/app/components/auth/UserButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">SKSM Trade</span>
        </div>
        
        {/* Center - Welcome Text */}
        <div className="hidden lg:flex items-center">
          <span className="text-white text-sm lg:text-base">Welcome to SKSM Trade!</span>
        </div>
        
        {/* Right side - Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="#plans" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Plans</a>
          <a href="#performance" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Performance</a>
          <a href="#news" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">News</a>
          <a href="#support" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Support</a>
          <a href="#testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Reviews</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-blue-500/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#plans" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plans
            </a>
            <a 
              href="#performance" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Performance
            </a>
            <a 
              href="#news" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </a>
            <a 
              href="#support" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 