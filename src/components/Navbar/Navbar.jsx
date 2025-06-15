import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const isActive = (href) => {
    return activeSection === href.substring(1);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-10 mr-4">
            <button
              onClick={() => scrollToSection('#home')}
              className="group flex items-center space-x-2 transition-all duration-300"
            >
              <div className="relative ">
                {/* Profile Picture */}
                <img
                  src="/src/assets/aakib.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-xl object-cover "
                />
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 "></div>
              </div>
              <span className="text-2xl font-bold gradient-text hidden sm:block">
                Mohammad Aakib
              </span>
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group whitespace-nowrap ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}                {/* Theme Toggle */}
              <div className="ml-8 pl-6 border-l border-gray-700/50">
                <button
                  onClick={() => {
                    console.log('Dark mode toggle clicked!'); // Debug log
                    toggleDarkMode();
                  }}
                  className="relative p-3 rounded-xl text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-300 group transform hover:scale-105"
                  title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  <div className="relative z-10 transition-transform duration-300">
                    {darkMode ? (
                      <Sun size={20} className="text-yellow-400 drop-shadow-sm" />
                    ) : (
                      <Moon size={20} className="text-blue-400 drop-shadow-sm" />
                    )}
                  </div>
                  <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' 
                      : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                  } opacity-0 group-hover:opacity-100`}></div>
                  
                  {/* Active indicator */}
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>          
          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden flex items-center space-x-4">            {/* Theme Toggle Mobile */}
            <button
              onClick={() => {
                console.log('Mobile dark mode toggle clicked!'); // Debug log
                toggleDarkMode();
              }}
              className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </button>
            
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <div className="relative">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>        <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-6 py-4 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {isActive(item.href) && (
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;