import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
      <div className="text-center p-6 md:p-10 max-w-lg bg-white shadow-xl rounded-xl border border-gray-200">
        
        {/* Large Status Code */}
        <h1 className="text-8xl font-extrabold text-teal-600 mb-4">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>
        
        {/* Detailed Explanation */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or simply never existed.
        </p>
        
        {/* Action Button */}
        <Link 
          to="/" 
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow-md 
                     hover:bg-teal-700 transition-transform transform hover:scale-105"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
