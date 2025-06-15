import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "National Diploma in Information Technology",
      institution: "Institut of Technology University of Moratuwa",
      year: "2023 - Present",
      location: "diyagama, Sri Lanka",
      description: "Comprehensive program covering software development, algorithms, data structures, and modern technologies.",
      gpa: "Current GPA: 2.8/3.0",
      status: "current"
    },
    {
      degree: "Advanced Level (A/L)",
      institution: "Kakunagolla National school",
      year: "2019 - 2022",
      location: "kakunagolla, Sri Lanka",
      description: "Physical Science stream with Mathematics, Physics, and Chemistry.",
      gpa: "CA passes",
      status: "completed"
    },
    {
      degree: "Ordinary Level (O/L)",
      institution: "Sulimaniay Muslim Maha Vidiyalaya",
      year: "2007 - 2018",
      location: "kureekotuwa Pahamuna, Sri Lanka",
      description: "Completed with excellent results in Mathematics and Science subjects.",
      gpa: "6A 2B C passes",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 items-center" style={{ padding: "100px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16"style={{ padding: "50px" }}>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <center> 
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ padding: "8px" }}>
            My academic journey in pursuing excellence in Software Engineering
          </p>
          
        </center>
        </div>

        {/* Timeline */}
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  edu.status === 'current' 
                    ? 'bg-blue-500 border-blue-300 pulse-glow' 
                    : 'bg-purple-500 border-purple-300'
                }`}></div>
              </div>

              {/* Education Card */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="card-hover bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="gradient-bg-2 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    {edu.status === 'current' && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-blue-400 font-semibold mb-3">{edu.institution}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-3">{edu.description}</p>
                  
                  {edu.gpa && (
                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;