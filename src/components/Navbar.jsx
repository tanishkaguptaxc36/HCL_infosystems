import React, { useState } from 'react';
import logohcl from '../assets/logohcl.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#cceeff]/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logohcl} alt="Logo" className="h-16 w-24" />
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home with submenu */}
            <div className="relative group">
              <Link
                to="/"
                className="text-gray-700 font-medium text-lg border-b-2 border-transparent hover:border-blue-600 cursor-pointer transition-all duration-300"
              >
                Home
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
                <Link to="/investors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investors</Link>
                <Link to="/publicnotice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Public Notices</Link>
              </div>
            </div>

            <Link to="/Team"
              className="text-gray-700 font-medium text-lg border-b-2 border-transparent hover:border-blue-600 cursor-pointer transition-all duration-300">
              Team
            </Link>
            <Link to="/About_us_pg"
              className="text-gray-700 font-medium text-lg border-b-2 border-transparent hover:border-blue-600 transition-all duration-300">
              About Us
            </Link>
            <Link to="/ContactUs"
              className="text-gray-700 font-medium text-lg border-b-2 border-transparent hover:border-blue-600 transition-all duration-300">
              Contact Us
            </Link>
            <a
              href="#"
              className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 flex items-center"
              aria-label="Dribbble"
            >
              <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[70vw] bg-[#cceeff]/90 backdrop-blur-2xl border-l border-blue-200 flex flex-col items-start pt-24 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 60 }}
      >
        <button
          className="absolute top-6 right-6 text-gray-800"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Menu Items */}
        <Link to="/" className="text-gray-800 font-bold text-base mb-2 px-6" onClick={() => setOpen(false)}>
          Home
        </Link>
        <div className="ml-4 w-full">
          <Link to="/investors"
            className="text-gray-700 font-semibold text-sm mb-2 block px-6 py-2 rounded-lg hover:bg-blue-200 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Investors
          </Link>
          <Link to="/publicnotice"
            className="text-gray-700 font-semibold text-sm mb-4 block px-6 py-2 rounded-lg hover:bg-blue-200 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Public Notices
          </Link>
        </div>
        <Link to="/Team"
          className="text-gray-800 font-semibold text-base mb-6 px-6 py-3 rounded-lg hover:bg-blue-200 transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          Team
        </Link>
        <Link to="/About_us_pg"
          className="text-gray-800 font-semibold text-base mb-6 px-6 py-3 rounded-lg hover:bg-blue-200 transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          About Us
        </Link>
        <Link to="/ContactUs"
          className="text-gray-800 font-semibold text-base mb-6 px-6 py-3 rounded-lg hover:bg-blue-200 transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          Contact Us
        </Link>
        <a
          href="#"
          className="mb-6 px-6 py-3 rounded-lg hover:bg-blue-200 transition-all duration-300 flex items-center"
          aria-label="Dribbble"
          onClick={() => setOpen(false)}
        >
          <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </>
  );
}
