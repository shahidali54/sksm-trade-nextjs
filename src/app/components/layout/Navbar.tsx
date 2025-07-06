'use client';

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Logo */}
        <Link href="#hero" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">SKSM Trade</span>
        </Link>
        
        {/* Center - Welcome Text */}
        <div className="hidden lg:flex items-center">
          <span className="text-white text-sm lg:text-base">Welcome to SKSM Trade!</span>
        </div>
        
        {/* Right side - Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="#plans" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Plans</Link>
          <Link href="#performance" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Performance</Link>
          <Link href="#news" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">News</Link>
          <Link href="#support" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Support</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">Reviews</Link>
          
          {/* Clerk Auth Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base px-3 py-1 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors text-sm lg:text-base font-medium cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 sm:w-10 sm:h-10"
                  }
                }}
              />
            </SignedIn>
          </div>
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
            <Link 
              href="#plans" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plans
            </Link>
            <Link 
              href="#performance" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Performance
            </Link>
            <Link 
              href="#news" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="#support" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link 
              href="#testimonials" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            
            {/* Mobile Clerk Auth Buttons */}
            <div className="pt-4 border-t border-blue-500/20">
              <SignedOut>
                <SignInButton mode="modal">
                  <button 
                    className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button 
                    className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors font-medium mt-2 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center justify-center py-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 