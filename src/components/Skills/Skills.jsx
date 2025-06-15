import React, { useEffect, useState } from 'react';
import { AlignCenter, Code2, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        { name: "Spring Boot", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "RESTful APIs", level: 80 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, delay }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`progress-bar h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50" style={{ padding: "100px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ padding: "50px" }}>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <center>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          </center>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 200}
              className="card-hover bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 group"
            >
              <div className="flex items-center gap-5 mt-10 mb-6">
                <div className="gradient-bg-3 w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white text-right" >{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div data-aos="fade-up" data-aos-delay="800" className="mt-16" style={{ padding: "50px" }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8" style={{ paddingBottom: "30px" }}>Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'VS Code', 'Docker', 'Linux', 'AWS', 'Firebase',
              'Figma', 'Photoshop', 'Agile', 'REST APIs', 'GraphQL'
            ].map((tech, index) => (
              <span
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;