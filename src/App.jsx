import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// import SectionDivider from './components/SectionDivider/SectionDivider';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const toggleDarkMode = () => {
    console.log('Toggling dark mode from:', darkMode, 'to:', !darkMode); // Debug log
    setDarkMode(!darkMode);
    
    // Add visual feedback
    if (!darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  // Apply dark mode to body on mount and change
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-all duration-500`}>
      <div className={`${
        darkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      } min-h-screen transition-all duration-500`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Test Component for Tailwind Debugging */}
        
        {/* Section Divider */}
        {/* <SectionDivider type="gradient" height="large" /> */}
        
        {/* About Section */}
        <About />
        
        {/* Section Divider */}
        {/* <SectionDivider type="gradient" height="large" /> */}
        
        {/* Education Section */}
        <Education />
        
        {/* Section Divider */}
        {/* <SectionDivider type="gradient" height="large" /> */}
        
        {/* Skills Section */}
        <Skills />
        
        {/* Section Divider */}
        {/* <SectionDivider type="gradient" height="large" /> */}
        
        {/* Projects Section */}
        <Projects />
        
        {/* Section Divider */}
        {/* <SectionDivider type="gradient" height="large" /> */}
        
        {/* Activities Section */}
        <Activities />
        
        {/* Section Divider */}
        {/* <SectionDivider type="gradient" height="large" /> */}
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
