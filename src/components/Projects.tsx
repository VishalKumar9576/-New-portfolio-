import React, { useState } from 'react';
import { Github, ExternalLink, Heart, Home, Cloud, MessageSquare, Calculator, X, ArrowLeft, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'House Price Prediction',
      description: 'Advanced Machine Learning model to predict house prices using various features like location, size, amenities, and market trends. Built with comprehensive data preprocessing and multiple regression algorithms.',
      longDescription: 'This project implements a sophisticated machine learning pipeline for predicting house prices. It includes data cleaning, feature engineering, exploratory data analysis, and model comparison. The final model achieves high accuracy using ensemble methods and provides insights into the most important factors affecting house prices.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'NumPy'],
      github: 'https://github.com/VishalKumar9576',
      demo: '',
      icon: Home,
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Data Preprocessing', 'Feature Engineering', 'Model Comparison', 'Visualization']
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Healthcare ML application that predicts heart disease risk based on patient data. Implemented with advanced data preprocessing and multiple classification algorithms for medical diagnosis.',
      longDescription: 'A comprehensive healthcare application that uses machine learning to predict the likelihood of heart disease in patients. The system analyzes various medical parameters and provides risk assessment with high accuracy, helping in early diagnosis and prevention.',
      tech: ['Python', 'NumPy', 'Seaborn', 'Machine Learning', 'Pandas'],
      github: 'https://github.com/VishalKumar9576',
      demo: '',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Medical Data Analysis', 'Risk Assessment', 'Classification Models', 'Healthcare Insights']
    },
    {
      title: 'Weather Forecasting App',
      description: 'Real-time weather application using JavaScript and weather API. Features location-based forecasts, beautiful UI with weather animations, and detailed meteorological data.',
      longDescription: 'A modern weather application that provides real-time weather information and forecasts. Features include current weather conditions, 7-day forecasts, interactive maps, weather alerts, and beautiful animations that reflect current weather conditions.',
      tech: ['JavaScript', 'HTML/CSS', 'Weather API', 'Responsive Design'],
      github: 'https://github.com/VishalKumar9576',
      demo: '',
      icon: Cloud,
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Real-time Data', 'Location Services', 'Weather Animations', 'Forecast Charts']
    },
    {
      title: 'Messaging Chatbot',
      description: 'Intelligent chatbot using Python NLP libraries. Implements natural language processing for contextual conversations, automated responses, and learning capabilities.',
      longDescription: 'An advanced chatbot system that uses natural language processing to understand and respond to user queries. Features include intent recognition, entity extraction, conversation memory, and continuous learning from interactions.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Text Processing'],
      github: 'https://github.com/VishalKumar9576',
      demo: '',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Natural Language Processing', 'Intent Recognition', 'Conversation Memory', 'Learning Algorithms']
    },
    {
      title: 'Scientific Calculator',
      description: 'Advanced web-based calculator with scientific functions. Clean interface with support for complex mathematical operations, history tracking, and multiple calculation modes.',
      longDescription: 'A comprehensive scientific calculator web application with advanced mathematical functions. Includes trigonometric functions, logarithms, exponentials, statistical calculations, and a complete calculation history with the ability to reuse previous results.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Math.js'],
      github: 'https://github.com/VishalKumar9576',
      demo: '',
      icon: Calculator,
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Scientific Functions', 'History Tracking', 'Multiple Modes', 'Responsive Design']
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
          >
            <X size={20} />
          </button>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <project.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <div className="glass-effect rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Highlights</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This project demonstrates advanced {project.tech[0]} development skills and showcases 
                    modern software engineering practices including clean code, documentation, and testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, machine learning, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                    <ExternalLink size={18} />
                    <span className="text-sm">Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/VishalKumar9576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;