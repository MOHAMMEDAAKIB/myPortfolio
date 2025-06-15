import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800" style={{ paddingTop: "100px" , paddingBottom: "20px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 mb-8"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Your Portfolio</h3>
            <p className="text-gray-400">Aspiring Software Engineer</p>
          </div>

          {/* Quote */}
          <div className="mb-8">
            <center>
            <blockquote className="text-lg text-gray-300 italic max-w-2xl mx-auto text-center">
              "The only way to do great work is to love what you do."
            </blockquote>
            </center>
            <cite className="text-gray-400 text-sm block text-center">- Mohammad Aakib</cite>
          </div>

          {/* Divider */}
          <center>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </center>
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400">
            <span>© {new Date().getFullYear()} Mohammad Aakib. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Sri Lanka</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <p className="text-gray-500 text-sm">
              Built with React, Tailwind CSS, and AOS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;