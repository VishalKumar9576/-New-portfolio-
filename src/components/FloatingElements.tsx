import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      // Hide on scroll down, show on scroll up
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < window.scrollY);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/VishalKumar9576',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
      bgColor: 'bg-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vishal-kumar-334656280',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      icon: Mail,
      href: 'mailto:vishalks9576@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-500',
      bgColor: 'bg-red-500'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/919576434799',
      label: 'WhatsApp',
      color: 'hover:bg-green-600',
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <>
      {/* Floating Social Icons - Left Side */}
      <div className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
      }`}>
        <div className="flex flex-col space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-14 h-14 glass-effect rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300 ${link.color} hover:text-white transition-all duration-300 hover:scale-110 group`}
              aria-label={link.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {link.label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
              </div>
              
              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-2xl bg-blue-600 animate-ping opacity-20 group-hover:opacity-0"></div>
            </a>
          ))}
        </div>
        
        {/* Connecting Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-blue-600/50 to-transparent -bottom-24"></div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-bounce-slow"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-2xl bg-blue-600 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Back to Top
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + (i * 2)}s`
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default FloatingElements;