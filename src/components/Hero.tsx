import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail, Phone, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Aspiring Data Scientist',
    'AI/ML Enthusiast',
    'Full Stack Developer',
    'Python Developer',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Vishal Kumar
                </span>
              </h1>

              <div className="text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 h-16 flex items-center justify-center lg:justify-start">
                <span className="border-r-2 border-blue-600 pr-2 animate-pulse">
                  {currentText}
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              A B.Tech student from Jaipur, building future-ready solutions using Python, JavaScript, and AI.
              Passionate about creating intelligent and scalable tech solutions that make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="text-blue-600" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail size={18} className="text-purple-600" />
                <span>vishalks9576@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone size={18} className="text-green-600" />
                <span>9576434799</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2">
                <Download size={20} className="group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={scrollToAbout}
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              >
                <ArrowDown size={32} />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative">
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                <img
                  src="/IMG-20250717-WA0004.jpg"
                  alt="Vishal Kumar"
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900"
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center animate-pulse">
                <span className="text-white text-xs font-bold">●</span>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float delay-1000"></div>
              <div className="absolute top-1/2 -left-12 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-float delay-2000"></div>

              {/* Skill Tags Floating Around */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg animate-float">
                Python
              </div>
              <div className="absolute top-1/4 -right-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg animate-float delay-500">
                React
              </div>
              <div className="absolute bottom-1/4 -left-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg animate-float delay-1000">
                AI/ML
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
