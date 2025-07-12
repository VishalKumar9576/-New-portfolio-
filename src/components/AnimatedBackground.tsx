import React from 'react';

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}>
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                darkMode ? 'bg-white/10' : 'bg-blue-400/20'
              } animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Mesh Gradient Overlay */}
      <div className={`absolute inset-0 opacity-30 ${
        darkMode 
          ? 'bg-gradient-to-t from-gray-900/50 to-transparent' 
          : 'bg-gradient-to-t from-white/50 to-transparent'
      }`}></div>
    </div>
  );
};

export default AnimatedBackground;