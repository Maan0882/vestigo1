import React from 'react';

export default function Header() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-800">
              <img src="/vestigo_logo.png" alt="Vestigo" className="h-8 md:h-10 w-auto" />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              COMPANY
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              SOLUTIONS
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              INDUSTRIES
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              BLOGS
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              CAREERS
            </a>
          </div>
          
          {/* Contact Button */}
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
}