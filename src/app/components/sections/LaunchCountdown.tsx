'use client';

import { useState, useEffect } from 'react';

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Launch date: 15 days from today (06/07/2025 + 15 days = 21/07/2025)
    const launchDate = new Date('2025-07-21T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
           Website Launch Countdown
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get ready for the most advanced trading platform! Join thousands of traders who are already waiting.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Days */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-cyan-100 font-medium">
                Days
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-blue-100 font-medium">
                Hours
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-purple-100 font-medium">
                Minutes
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-pink-100 font-medium">
                Seconds
              </div>
            </div>
          </div>

          {/* Launch Date */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-300">
              Launch Date: <span className="text-cyan-400 font-semibold">July 21, 2025</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Be the first to experience the future of trading!
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Notified When We Launch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCountdown; 