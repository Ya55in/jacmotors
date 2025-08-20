'use client';

import React from 'react';
import { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Models', href: '#models' },
    { 
      name: 'Company', 
      href: '/about',
      dropdown: [
        'About JAC',
        'History',
        'Philosophy',
        'R&D',
        'CSR',
        'Service'
      ]
    },
    { 
      name: 'Lifestyle', 
      href: '#lifestyle',
      dropdown: [
        'JAC Life',
        'JAC Stories'
      ]
    },
  ];

  const languages = [
    { code: 'zh', name: '中文' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/20 via-black/10 to-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/assets/hero/logo-nav-pc.fb0453d.png"
                alt="JAC Motors Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && hoveredItem === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-black rounded-b-md shadow-lg py-2 z-50 border-r-2 border-teal-600">
                      {item.dropdown.map((link, index) => (
                        <a
                          key={index}
                          href={link === 'About JAC' ? '/about' : '#'}
                          className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white hover:text-gray-200 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Vertical separator */}
            <div className="w-px h-6 bg-white/30"></div>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span>English</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg py-1 z-50">
                  {languages.map((language) => (
                    <a
                      key={language.code}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {language.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-white/10">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center px-3 py-2">
                <Search className="w-4 h-4 mr-2 text-white" />
                <span className="text-white">Search</span>
              </div>
              <div className="flex items-center px-3 py-2">
                <Globe className="w-4 h-4 mr-2 text-white" />
                <span className="text-white">Language</span>
              </div>
              {languages.map((language) => (
                <a
                  key={language.code}
                  href="#"
                  className="block px-6 py-2 text-sm text-white hover:bg-white/10"
                >
                  {language.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
