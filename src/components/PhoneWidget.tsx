import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, ChevronLeft } from 'lucide-react';

const PhoneWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.open('tel:9576434799'),
      color: 'bg-green-500 hover:bg-green-600',
      description: '9576434799'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/919576434799'),
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Chat on WhatsApp'
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:vishalks9576@gmail.com'),
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'vishalks9576@gmail.com'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
        {/* Phone Mockup Container */}
        <div className={`relative ${isExpanded ? 'block' : 'hidden'}`}>
          <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl border-4 border-gray-700">
            {/* Phone Screen */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X size={16} />
              </button>
              
              {/* Status Bar */}
              <div className="flex justify-between items-center mb-4 text-xs">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                  <div className="w-1 h-2 bg-white/60 rounded-sm"></div>
                  <div className="w-6 h-2 bg-white/60 rounded-sm"></div>
                </div>
              </div>
              
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold">
                  VK
                </div>
                <h3 className="font-semibold">Vishal Kumar</h3>
                <p className="text-sm opacity-80">Available for Freelance</p>
                <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
              
              {/* Contact Options */}
              <div className="space-y-3">
                {contactOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.action}
                    className={`w-full ${option.color} rounded-xl p-3 flex items-center space-x-3 transition-all duration-200 hover:scale-105 active:scale-95`}
                  >
                    <option.icon size={20} />
                    <div className="text-left">
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs opacity-80">{option.description}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-15 h-15 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Action Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${isExpanded ? 'hidden' : 'block'} w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group relative`}
        >
          <Phone size={24} className="group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Contact Me
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PhoneWidget;