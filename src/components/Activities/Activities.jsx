import React from 'react';
import { Award, Star, Trophy, FileText } from 'lucide-react';

const Activities = () => {
  const certifications = [
    {
      title: "Google Digital Garage",
      issuer: "Google",
      date: "2024",
      description: "Digital Marketing Fundamentals",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AWS Educate",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Cloud Computing Foundations",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "LinkedIn Learning",
      issuer: "LinkedIn",
      date: "2023",
      description: "JavaScript Essential Training",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "HackerRank - 3 Stars",
      issuer: "HackerRank",
      date: "2023",
      description: "Problem Solving (Python)",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "React Developer",
      issuer: "Meta",
      date: "2024",
      description: "Professional Certificate in React Development",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Java Programming",
      issuer: "Oracle",
      date: "2023",
      description: "Java SE 11 Developer Certification",
      icon: <Award className="w-6 h-6" />,
      color: "from-red-500 to-red-600"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for academic excellence",
      year: "2023-2024"
    },
    {
      title: "Hackathon Winner",
      description: "1st place in University Coding Competition",
      year: "2024"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open source projects",
      year: "2023-Present"
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50" style={{ padding: "100px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{padding: "50px"}}>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-white mb-4" >
            Certifications & <span className="gradient-text">Activities</span>
          </h2>
          <center>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my commitment to continuous learning
          </p>
          </center>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-white text-center mb-12" style={{padding: "50px"}} >
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="card-hover bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                    <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
                    <span className="text-gray-400 text-sm">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ padding: "50px" }}>
          <h3 data-aos="fade-up" className="text-2xl font-bold text-white text-center mb-12" style={{ padding: "20px", paddingBottom: "50px" }}>
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 mb-2">{achievement.description}</p>
                <span className="text-blue-400 font-medium">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Badges */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ padding: "50px" }}>Skill Badges</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving', 'Algorithm Design', 'Full Stack Development', 
              'Database Design', 'API Development', 'Version Control', 
              'Team Leadership', 'Project Management'
            ].map((skill, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full group hover:border-blue-400 transition-colors duration-300"
              >
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;