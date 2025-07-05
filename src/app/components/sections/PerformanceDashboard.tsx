'use client';

import React, { useEffect } from "react";

const PerformanceDashboard = () => {
  // Performance statistics
  const stats = [
    {
      label: "Total Signals",
      value: "1,247",
      change: "+12%",
      changeType: "positive",
      icon: "📈"
    },
    {
      label: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      changeType: "positive",
      icon: "🎯"
    },
    {
      label: "Avg. Profit",
      value: "$2,847",
      change: "+8.5%",
      changeType: "positive",
      icon: "💰"
    },
    {
      label: "Active Users",
      value: "3,421",
      change: "+15%",
      changeType: "positive",
      icon: "👥"
    }
  ];

  // Recent winning trades
  const recentTrades = [
    {
      pair: "BTC/USDT",
      type: "LONG",
      entry: "$45,200",
      exit: "$47,800",
      profit: "+5.8%",
      time: "2 hours ago"
    },
    {
      pair: "ETH/USDT",
      type: "SHORT",
      entry: "$2,850",
      exit: "$2,720",
      profit: "+4.6%",
      time: "4 hours ago"
    },
    {
      pair: "EUR/USD",
      type: "LONG",
      entry: "1.0850",
      exit: "1.0920",
      profit: "+0.65%",
      time: "6 hours ago"
    },
    {
      pair: "GBP/USD",
      type: "SHORT",
      entry: "1.2650",
      exit: "1.2580",
      profit: "+0.55%",
      time: "8 hours ago"
    }
  ];

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });
    
    const container = document.getElementById('tradingview-widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="performance" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Performance Dashboard</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Real-time statistics and performance metrics from our expert trading signals
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl">{stat.icon}</div>
                <div className={`text-xs sm:text-sm font-medium px-2 py-1 rounded ${
                  stat.changeType === 'positive' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Trades */}
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Recent Winning Trades</h3>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-medium text-sm sm:text-base">Pair</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-medium text-sm sm:text-base">Type</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-medium text-sm sm:text-base">Entry</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-medium text-sm sm:text-base">Exit</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-medium text-sm sm:text-base">Profit</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-medium text-sm sm:text-base">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrades.map((trade, index) => (
                    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/30 transition-colors">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-white font-medium text-sm sm:text-base">{trade.pair}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          trade.type === 'LONG' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-300 text-sm sm:text-base">{trade.entry}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-300 text-sm sm:text-base">{trade.exit}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-green-400 font-medium text-sm sm:text-base">{trade.profit}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-400 text-xs sm:text-sm">{trade.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Live Trading Chart */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto px-4">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Live Market Chart</h3>
            <div className="h-64 sm:h-80 md:h-96 bg-slate-700/30 rounded-lg overflow-hidden">
              <div 
                id="tradingview-widget"
                className="tradingview-widget-container h-full"
              >
                <div className="tradingview-widget-container__widget h-full"></div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400 text-xs sm:text-sm">Real-time BTC/USDT chart powered by TradingView</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboard; 