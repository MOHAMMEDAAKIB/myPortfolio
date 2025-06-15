import React from 'react';
import { Code, Brain, Rocket, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const traits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and methodologies"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Focused",
      description: "Passionate about building cutting-edge applications"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Team Player",
      description: "Collaborate effectively in diverse team environments"
    }
  ];

  return (
    <section id="about" className="section-spacing-large bg-gray-800/50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div data-aos="fade-up">
            <span className="text-blue-400 font-semibold text-lg tracking-wide uppercase mb-4 block">
              Get to know me
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <center>  
          <div data-aos="fade-up" data-aos-delay="200" className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            <br />
          </p>
          </center>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile Picture */}
          <div data-aos="fade-right" className="text-center lg:text-center ">
            <div className="relative inline-block">
              <div className="w-70 h-70 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1 hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                  <div className="w-62 h-62 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-7xl font-bold text-white">
                    <img
                      src="src/assets/aakib.png"
                      alt="Profile"
                      className="w-56 h-56 object-cover rounded-xl shadow-lg "
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center pulse-glow">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div data-aos="fade-left" className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Software Engineering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Student & Developer
                </span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-1xl">
                I am a dedicated student from the <span className="text-blue-400 font-semibold">University of Moratuwa</span>, 
                currently pursuing my degree in <span className="text-purple-400 font-semibold">Software Engineering</span>. 
                My journey in technology is driven by a passion for creating innovative solutions that make a real impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in multiple programming languages and frameworks, I enjoy working on projects 
                that challenge me to think creatively and push the boundaries of what's possible in software development.
              </p>
              <br style={{ padding: "20px" }}/>
            </div>
            
            <div className="p-8 ">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-1">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
        <p data-aos="fade-up" data-aos-delay="400" className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            <br />
            <br style={{ padding: "60px" }}/>
          </p>

        {/* Traits Grid */}
        <div>
          <div className="text-center mb-16">
            <h3 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Makes Me <span className="gradient-text">Unique</span>
            </h3>
            <br style={{ padding: "20px" }}/><center>
            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-lg max-w-2xl mx-auto">
              Core values and strengths that drive my approach to software development
            </p>
            </center>
            <br style={{ padding: "20px" }}/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ padding: "20px", alignItems: "center" }}>
            {traits.map((trait, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="card-hover bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 text-center group">
                <div className="gradient-bg-1 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {trait.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{trait.title}</h4>
                <p className="text-gray-400 leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;