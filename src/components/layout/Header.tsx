"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tools', label: 'Tools' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/assets/logo.svg"
                  alt="QuickToolsHQ Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B5AD]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#00B5AD] to-[#008B82] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    QuickTools
                  </span>
                  <span className="text-lg font-semibold text-gray-600 ml-0.5">HQ</span>
                </div>
                <div className="text-xs text-gray-500 -mt-1">Fast Online Tools</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[#00B5AD] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none transition-colors duration-200"
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg 
                className={`h-6 w-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Overlay and Slide-in Menu */}
          <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <div
              className={`absolute inset-0 w-full h-full max-w-none bg-white shadow-lg p-6 flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold bg-gradient-to-r from-[#00B5AD] to-[#008B82] bg-clip-text text-transparent">
                  QuickToolsHQ
                </span>
                <button 
                  className="text-gray-600 hover:text-gray-900 focus:outline-none transition-all duration-200 hover:bg-gray-100 p-2 rounded-full" 
                  aria-label="Close mobile menu" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="h-6 w-6 transition-transform duration-200 hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-700 text-lg font-medium py-3 px-4 rounded-lg hover:bg-[#00B5AD]/10 hover:text-[#00B5AD] transition-all duration-300 transform border border-transparent hover:border-[#00B5AD]/20 ${
                      mobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms' 
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      {link.label}
                      <svg 
                        className="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Menu Footer (Optional) */}
              <div className={`mt-auto pt-8 border-t border-gray-200 transition-all duration-500 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}>
                <p className="text-sm text-gray-500 text-center">
                  Fast Online Tools for Everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}