'use client';

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-8xl font-bold text-cyan-400 mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-300 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Back Home
          </Link>
          
          <div className="text-gray-400 text-sm">
            <p>Or try one of these links:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="#plans" className="hover:text-cyan-400 transition-colors">Trading Plans</Link>
              <Link href="#news" className="hover:text-cyan-400 transition-colors">Market News</Link>
              <Link href="#support" className="hover:text-cyan-400 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 