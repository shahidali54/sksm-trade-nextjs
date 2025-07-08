import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900 text-white transition-opacity duration-700">
      {/* Fully filled spinning circle with SKSM inside, both spinning */}
      <div className="relative w-16 h-16 flex items-center justify-center mb-6 slow-spin">
        <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-400"></div>
        <span className="text-xl font-bold text-slate-900 select-none z-10">SKSM</span>
      </div>
      {/* Full Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide">SKSM Trade</h1>
      {/* Subtitle */}
      <span className="text-base text-gray-300">Empowering your trading journey...</span>
    </div>
  );
};

export default Preloader; 