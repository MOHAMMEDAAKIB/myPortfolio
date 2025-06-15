import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Import images
import faceRecognitionImg from '../../assets/face_recognization.png';
import pastPaperImg from '../../assets/past_paper_management.png';
import smartCanteenImg from '../../assets/smart_canteen.png';
import portfolioWebImg from '../../assets/portfolio_website.png';
import aakibImg from '../../assets/aakib.png';

const Projects = () => {
  const projects = [
    {
      title: "Face recognize0.0.0",
      description: "A face recognition application that uses machine learning to identify and verify faces in images, built with React and Spring Boot.",
      image: faceRecognitionImg,
      technologies: [ "python", "mongodb", "springboot", "openCV", "Deepface"],
      github: "https://github.com/MOHAMMEDAAKIB/face_recognize0.0.0.git",
      live: "",
      featured: true
    },
    {
      title: "Past paper maintenance MISDA",
      description: "A web-based management information system for maintaining past papers, built with React and Node.js, featuring real-time collaboration and data analytics.",
      image: pastPaperImg,
      technologies: ["html", "css", "javascript"],
      github: "https://github.com/MOHAMMEDAAKIB/fist-web-side-misda.git",
      live: "https://misda-past-paper.netlify.app/",
      featured: true
    },    {
      title: "Smart Canteen",
      description: "A responsive canteen management application that allows users to view menus, place orders, and make payments.",
      image: smartCanteenImg, // Using your personal image as fallback
      technologies: ["Dart", "Java", "Firebase"],
      github: "https://github.com/MOHAMMEDAAKIB/Smart-Canteen.git",
      live: "",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website built with React, featuring smooth animations, responsive design, and modern UI/UX principles.",
      image: portfolioWebImg, // Using your personal image as fallback
      technologies: ["React", "Tailwind CSS", "AOS", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" style={{ padding: "100px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ padding: "50px" }}>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ padding: "10px" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <center>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
          </center>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="card-hover bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group"
            >              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div 
                  className="w-full h-48 bg-cover bg-center bg-no-repeat relative group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Project title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg line-clamp-2">{project.title}</h3>
                  </div>
                </div>
                
                {/* Hover overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div data-aos="fade-up" data-aos-delay="800" className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;