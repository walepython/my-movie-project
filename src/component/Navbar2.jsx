import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing icons from the 'react-icons' library
import { FaRegCommentDots, FaRegUser } from 'react-icons/fa';

// Logo Component - This makes the logo reusable and keeps the Navbar clean
const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    {/* Grid icon created with styled divs */}
    <div className="grid grid-cols-3 gap-px">
      <div className="h-1.5 w-1.5 bg-orange-400"></div>
      <div className="h-1.5 w-1.5 bg-orange-300"></div>
      <div className="h-1.5 w-1.5 bg-orange-200"></div>
      <div className="h-1.5 w-1.5 bg-orange-500"></div>
      <div className="h-1.5 w-1.5 bg-orange-400"></div>
      <div className="h-1.5 w-1.5 bg-orange-300"></div>
      <div className="h-1.5 w-1.5 bg-orange-600"></div>
      <div className="h-1.5 w-1.5 bg-orange-500"></div>
      <div className="h-1.5 w-1.5 bg-orange-400"></div>
    </div>
    {/* Logo Text */}
    <span className="text-2xl font-bold tracking-tight">
      LiveCareer<sup className="text-xs font-bold">®</sup>
    </span>
  </Link>
);


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { title: 'BUILDERS', href: '/builders' },
    { title: 'CV', href: '/cv' },
    { title: 'COVER LETTER', href: '/cover-letter' },
    { title: 'CAREER ADVICE', href: '/career-advice' },
    { title: 'ABOUT', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 text-sm font-bold tracking-wider"
              >
                {link.title}
              </Link>
            ))}
            <Link to="/contact" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-sm font-bold tracking-wider">
              <FaRegCommentDots />
              <span>CONTACT</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-sm font-bold tracking-wider">
              <FaRegUser />
              <span>LOGIN</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Visible on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
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

      {/* Mobile Menu - Conditionally rendered */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                onClick={toggleMobileMenu} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {link.title}
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <Link to="/contact" onClick={toggleMobileMenu} className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                <FaRegCommentDots />
                <span>CONTACT</span>
              </Link>
              <Link to="/login" onClick={toggleMobileMenu} className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                <FaRegUser />
                <span>LOGIN</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}