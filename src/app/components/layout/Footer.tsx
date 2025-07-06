'use client';

import { useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you can add your email subscription logic
      // For now, we'll just show a success message
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-lg sm:text-xl font-bold text-white">SKSM Trade</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Professional trading signals and market analysis for crypto and forex traders worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link href="#plans" className="hover:text-cyan-400 transition-colors">Trading Plans</Link></li>
              <li><Link href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</Link></li>
              <li><Link href="#news" className="hover:text-cyan-400 transition-colors">Market News</Link></li>
              <li><Link href="#support" className="hover:text-cyan-400 transition-colors">Expert Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="space-y-1 sm:space-y-2">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors p-0 h-auto text-sm sm:text-base">
                Join Telegram Group
              </button>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors p-0 h-auto text-sm sm:text-base">
                Join Facebook Group
              </button>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors p-0 h-auto text-sm sm:text-base">
                Join Whatsapp Group
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-4 sm:mt-6">
              <h5 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">Follow Us</h5>
              <div className="flex space-x-3 sm:space-x-4">
                <Link 
                  href="https://x.com/shahid_ali_0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <FaXTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link 
                  href="https://www.facebook.com/shahid.mazari2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/shahid-ali-64676a2ba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link 
                  href="https://github.com/shahidali54/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="Follow us on GitHub"
                >
                  <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Newsletter Subscription - Integrated */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Stay Updated</h4>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
              Get latest trading signals & market insights.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2 text-green-400 text-xs">
                ✅ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm"
                >
                  Subscribe
                </button>
                <p className="text-gray-500 text-xs">
                  We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SKSM Trade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 