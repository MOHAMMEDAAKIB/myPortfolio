import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-6">
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              <span className="block p-4 m-4 mt-6 mb-6 ">Hello, I'm</span>
              <span className="block gradient-text text-5xl sm:text-7xl lg:text-8xl">Aakib</span>
            </h1>
          </div>          {/* Subtitle */}
          <p 
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold"
            style={{ marginTop: '1.5rem' }}
          >
            IT Student & Developer
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 p-4 m-4 mt-6 mb-6">
            Passionate about creating innovative solutions and building amazing digital experiences. 
            Currently studying Information Technology at the University of Moratuwa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"> <br />
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <button
              onClick={scrollToProjects}
              className="btn-primary px-10 py-4 rounded-lg text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 min-w-[220px]"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-4 rounded-lg text-white font-semibold text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 min-w-[220px]"
            >
              Contact Me
            </button>
          </div>   
          
         {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"> <br /><br /><br /><br />
          </div>
         <div className="flex justify-center items-center gap-16 mt-10">
            <a href="https://github.com/MOHAMMEDAAKIB" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 p-4 rounded-full hover:bg-white/10">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/mohammad-aakib" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 p-4 rounded-full hover:bg-white/10">
              <Linkedin size={32} />
            </a>
            <a href="bikaamohammad@gmail.com"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 p-4 rounded-full hover:bg-white/10">
              <Mail size={32} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-white/60 hover:text-white transition duration-300 p-2"
            >
              <ChevronDown size={36} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl float-animation"></div>
    </section>
  );
};

export default Hero;
