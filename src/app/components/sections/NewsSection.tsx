'use client';

import { useState } from "react";
import Link from "next/link";

const NewsSection = () => {
  // State to manage active news tab (crypto or forex)
  const [activeTab, setActiveTab] = useState("crypto");

  // Dummy news data
  const cryptoNews = [
    {
      title: "Bitcoin Reaches New All-Time High",
      date: "2025-01-15",
      summary: "BTC breaks $100,000 barrier as institutional adoption continues to grow worldwide. Major financial institutions are now actively investing in cryptocurrency markets.",
      category: "Crypto",
      url: "#"
    },
    {
      title: "Ethereum 2.0 Staking Rewards Increase",
      date: "2025-01-14",
      summary: "ETH staking rewards see significant boost following network upgrade implementation. Validators are experiencing higher returns on their staked assets.",
      category: "Crypto",
      url: "#"
    },
    {
      title: "Major Bank Adopts Cryptocurrency Trading",
      date: "2025-01-13",
      summary: "Leading financial institution announces full cryptocurrency trading services for retail and institutional clients. This marks a major milestone in crypto adoption.",
      category: "Crypto",
      url: "#"
    },
    {
      title: "DeFi Protocol Hits $10B TVL",
      date: "2025-01-12",
      summary: "Decentralized finance protocol reaches unprecedented total value locked milestone. Users are flocking to earn high yields on their digital assets.",
      category: "Crypto",
      url: "#"
    },
    {
      title: "NFT Market Shows Strong Recovery",
      date: "2025-01-11",
      summary: "Non-fungible token sales volume increases by 150% this month. Artists and creators are finding new ways to monetize digital content.",
      category: "Crypto",
      url: "#"
    },
    {
      title: "Central Bank Digital Currency Launch",
      date: "2025-01-10",
      summary: "Several countries announce plans to launch their own digital currencies. This development could reshape the global financial landscape.",
      category: "Crypto",
      url: "#"
    }
  ];

  const forexNews = [
    {
      title: "USD Strengthens Against Major Currencies",
      date: "2025-01-15",
      summary: "Dollar index hits monthly high as Federal Reserve signals continued hawkish stance. Traders are positioning for potential interest rate hikes.",
      category: "Forex",
      url: "#"
    },
    {
      title: "EUR/GBP Pair Shows Volatility",
      date: "2025-01-14",
      summary: "European Central Bank decisions impact major currency pair movements. Brexit-related uncertainties continue to influence market sentiment.",
      category: "Forex",
      url: "#"
    },
    {
      title: "Asian Markets Drive Currency Trading",
      date: "2025-01-13",
      summary: "JPY and CNY show strength as Asian economic indicators exceed expectations. Regional trade agreements are boosting currency stability.",
      category: "Forex",
      url: "#"
    },
    {
      title: "Commodity Currencies Rally",
      date: "2025-01-12",
      summary: "AUD, CAD, and NZD gain against USD as commodity prices surge. Mining and energy sectors are driving economic growth in these regions.",
      category: "Forex",
      url: "#"
    },
    {
      title: "Emerging Market Currencies Stabilize",
      date: "2025-01-11",
      summary: "BRL, INR, and ZAR show signs of recovery as global risk sentiment improves. Central banks are implementing supportive monetary policies.",
      category: "Forex",
      url: "#"
    },
    {
      title: "Swiss Franc Remains Safe Haven",
      date: "2025-01-10",
      summary: "CHF continues to attract investors during market uncertainty. Switzerland's strong economic fundamentals support currency strength.",
      category: "Forex",
      url: "#"
    }
  ];

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="news" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Latest Market News</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Stay updated with the latest trends and analysis in crypto and forex markets
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-slate-800/50 rounded-lg p-1 backdrop-blur-sm flex flex-wrap justify-center">
            <button
              onClick={() => setActiveTab("crypto")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all text-sm sm:text-base ${
                activeTab === "crypto"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Crypto News
            </button>
            <button
              onClick={() => setActiveTab("forex")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all text-sm sm:text-base ${
                activeTab === "forex"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Forex News
            </button>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {(activeTab === "crypto" ? cryptoNews : forexNews).map((news, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs sm:text-sm">
                    {news.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400">{formatDate(news.date)}</span>
                </div>
                <h3 className="text-lg sm:text-xl text-white leading-tight font-bold mb-2">{news.title}</h3>
              </div>
              <div>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{news.summary}</p>
                <Link 
                  href={news.url} 
                  className="text-white hover:text-cyan-400 transition-colors p-0 cursor-pointer inline-flex items-center text-sm sm:text-base"
                >
                  Read More
                  <svg className="ml-2 h-3 w-3 sm:h-4 sm:w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 