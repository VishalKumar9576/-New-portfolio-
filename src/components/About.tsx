import React from 'react';
import { GraduationCap, Award, Globe, Heart, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: GraduationCap, label: 'CGPA', value: '7.5', color: 'from-blue-500 to-blue-600' },
    { icon: Award, label: 'Certifications', value: '2+', color: 'from-purple-500 to-purple-600' },
    { icon: Globe, label: 'Languages', value: '3', color: 'from-green-500 to-green-600' },
    { icon: Heart, label: 'Projects', value: '5+', color: 'from-pink-500 to-pink-600' },
  ];

  const education = [
    { year: '2022-2026', degree: 'B.Tech', score: 'CGPA: 7.5', status: 'Current' },
    { year: '2022', degree: '12th Grade', score: '75%', status: 'Completed' },
    { year: '2020', degree: '10th Grade', score: '80%', status: 'Completed' },
  ];

  const certifications = [
    {
      title: 'Management Information System',
      provider: 'NPTEL',
      year: '2023',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Business Fundamentals for Entrepreneurs',
      provider: 'NPTEL', 
      year: '2023',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about innovation and building the future with technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate About Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I am a dedicated B.Tech student pursuing my degree from 2022-2026 with a strong passion for 
              Data Science, Machine Learning, AI, and Web Development. Originally from Bihar and currently 
              based in Jaipur, Rajasthan, I bring a unique perspective to problem-solving.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              My goal is to build intelligent and scalable tech solutions that make a real impact on people's 
              lives. I'm fluent in Hindi, English, and Sanskrit, which helps me connect with diverse communities 
              and understand problems from multiple cultural perspectives.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="glass-effect rounded-xl p-4 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-purple-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Originally From</p>
                    <p className="text-gray-600 dark:text-gray-400">Bihar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.year}</p>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.score}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-effect rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.provider}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;