'use client';

import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "David Bellavia",
      role: "Crypto Trader",
      location: "Dubai, UAE",
      rating: 5,
      profit: "$12,450",
      duration: "6 months",
      category: "crypto",
      avatar: "/images/David-Bellavia.jpg",
      review: "SKSM Trade signals have completely transformed my trading. I started with $2,000 and now I'm consistently making $2,000+ monthly. The signals are incredibly accurate and the support team is always helpful.",
      trade: "BTC/USDT +15.2% profit"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Forex Trader",
      location: "London, UK",
      rating: 5,
      profit: "$8,920",
      duration: "4 months",
      category: "forex",
      avatar: "/images/Sarah-Johnson.png",
      review: "As a beginner, I was skeptical about trading signals. But SKSM Trade proved me wrong! Their forex signals are spot-on and I've learned so much about risk management. Highly recommended!",
      trade: "EUR/USD +8.5% profit"
    },
    {
      id: 3,
      name: "Raj Patel",
      role: "Day Trader",
      location: "Mumbai, India",
      rating: 5,
      profit: "$15,680",
      duration: "8 months",
      category: "crypto",
      avatar: "/images/Raj-Patel.jpeg",
      review: "The best investment I've ever made! SKSM Trade signals are like having a professional trader by your side. I've achieved financial freedom thanks to their consistent results.",
      trade: "ETH/USDT +22.1% profit"
    },
    {
      id: 4,
      name: "Maria Garcia",
      role: "Part-time Trader",
      location: "Madrid, Spain",
      rating: 5,
      profit: "$6,340",
      duration: "3 months",
      category: "forex",
      avatar: "/images/Maria-Garcia.png",
      review: "I was struggling with forex trading until I found SKSM Trade. Their signals are easy to follow and the results speak for themselves. I'm now confident in my trading decisions.",
      trade: "GBP/USD +12.3% profit"
    },
    {
      id: 5,
      name: "David Chen",
      role: "Professional Trader",
      location: "Singapore",
      rating: 5,
      profit: "$28,900",
      duration: "12 months",
      category: "crypto",
      avatar: "/images/David-Chen.png",
      review: "I've been trading for 5 years and SKSM Trade is by far the best signal provider I've used. Their analysis is deep, signals are timely, and the success rate is exceptional.",
      trade: "Multiple pairs +45.2% profit"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Retail Trader",
      location: "Toronto, Canada",
      rating: 5,
      profit: "$9,750",
      duration: "5 months",
      category: "forex",
      avatar: "/images/Lisa-Thompson.jpg",
      review: "SKSM Trade helped me turn my trading around. From losing money to consistent profits, their signals and education have been invaluable. The community is amazing too!",
      trade: "USD/CAD +18.7% profit"
    }
  ];

  const filteredTestimonials = activeTab === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeTab);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">What Our Traders Say</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Real success stories from traders who trust our signals
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-slate-800/50 rounded-lg p-1 backdrop-blur-sm flex flex-wrap justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all text-sm sm:text-base ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setActiveTab("crypto")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all text-sm sm:text-base ${
                activeTab === "crypto"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Crypto Traders
            </button>
            <button
              onClick={() => setActiveTab("forex")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all text-sm sm:text-base ${
                activeTab === "forex"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Forex Traders
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                      {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        // priority={testimonial.id <= 3}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                {/* Stats */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Total Profit:</span>
                    <span className="text-green-400 font-bold">{testimonial.profit}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{testimonial.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Best Trade:</span>
                    <span className="text-cyan-400">{testimonial.trade}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {testimonial.location}
                </div>
              </div>
            ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Overall Satisfaction</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">4.9/5</div>
                <div className="text-gray-400 text-xs sm:text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">2,847+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Happy Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">$2.4M+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Total Profits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">98%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 