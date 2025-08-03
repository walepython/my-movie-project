import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current page path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- NEW: Smooth scroll handler ---
  const handleScroll = (e) => {
    const sectionId = e.target.value;
    if (sectionId) {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu on selection if it's open
      setIsMobileMenuOpen(false); 
    }
  };

  // Simplified data structure
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
  ];

  return (
    <nav className="bg-gray-800 text-gray-300 shadow-lg relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Sweet<span className="text-pink-500">Life</span>™
            </Link>
          </div>

          {/* Desktop Menu - Hidden on small screens */}
          <div className="hidden md:flex  md:items-center md:space-x-4 ">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors "
              >
                {link.title}
              </Link>
            ))}
            <div className='mr-28'>
              {/* Category Dropdown */}
            <select
              onChange={handleScroll}
              className=" bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 mr-16 "
            >
              <option value="">Category</option>
              <option value="#AfricaSection">African Movies</option>
              <option value="#AmericaSection">American Movies</option>
              <option value="#ComedySection">Comedy</option>
              <option value="#ChinaSection">Chines Movies</option>
              <option value="#KoriaSection">Koria Movies</option>
            </select>
            </div>
            
            
            {/* Action Buttons */}
            <Link
              to="/SignIn"
              className="ml-16 px-4 py-2 rounded-md text-sm font-medium border border-pink-500 hover:bg-pink-500 hover:text-white transition-all"
            >
              LOG IN
            </Link>
            <Link
              to="/SignUp"
              className="px-4 py-2 rounded-md text-sm font-medium bg-pink-500 text-white hover:bg-pink-600 transition-colors"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon changes based on state */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Absolutely positioned to show over content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                onClick={toggleMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
            <select
              onChange={handleScroll}
              className="w-full block bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
            >
              <option value="">Category</option>
              <option value="#AfricaSection">African Movies</option>
              <option value="#AmericaSection">American Movies</option>
              <option value="#ComedySection">Comedy</option>
            </select>
            <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col space-y-2 px-2">
               <Link to="/SignIn" onClick={toggleMobileMenu} className="text-center w-full px-4 py-2 rounded-md font-medium border border-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                  SIGN IN
               </Link>
               <Link to="/SignUp" onClick={toggleMobileMenu} className="text-center w-full px-4 py-2 rounded-md font-medium bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                  GET STARTED
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}