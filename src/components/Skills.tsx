import React, { useState } from 'react';
import { Code, Database, Wrench, Brain, Zap, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600', icon: '🐍' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600', icon: '⚡' },
        { name: 'Java', level: 80, color: 'from-red-500 to-red-600', icon: '☕' },
        { name: 'C++', level: 75, color: 'from-purple-500 to-purple-600', icon: '⚙️' },
        { name: 'C', level: 70, color: 'from-gray-500 to-gray-600', icon: '🔧' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'React', level: 85, color: 'from-cyan-500 to-cyan-600', icon: '⚛️' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-orange-600', icon: '🎨' },
        { name: 'Tailwind CSS', level: 80, color: 'from-teal-500 to-teal-600', icon: '💨' },
        { name: 'JavaScript ES6+', level: 85, color: 'from-yellow-500 to-yellow-600', icon: '🚀' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600', icon: '🟢' },
        { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-700', icon: '🍃' },
        { name: 'SQL', level: 85, color: 'from-blue-600 to-blue-700', icon: '🗄️' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-500', icon: '🐳' },
        { name: 'Jenkins', level: 65, color: 'from-red-400 to-red-500', icon: '🔄' },
        { name: 'Linux', level: 80, color: 'from-gray-600 to-gray-700', icon: '🐧' },
        { name: 'Git', level: 85, color: 'from-orange-500 to-orange-600', icon: '📝' },
      ]
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'NumPy', level: 85, color: 'from-blue-500 to-blue-600', icon: '🔢' },
        { name: 'Pandas', level: 90, color: 'from-purple-500 to-purple-600', icon: '🐼' },
        { name: 'Scikit-learn', level: 80, color: 'from-orange-500 to-orange-600', icon: '🤖' },
        { name: 'Matplotlib', level: 85, color: 'from-red-500 to-red-600', icon: '📊' },
        { name: 'Seaborn', level: 80, color: 'from-teal-500 to-teal-600', icon: '📈' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Machine Learning', level: 85, color: 'from-purple-500 to-purple-600', icon: '🧠' },
        { name: 'Deep Learning', level: 75, color: 'from-indigo-500 to-indigo-600', icon: '🔮' },
        { name: 'API Development', level: 80, color: 'from-green-500 to-green-600', icon: '🔗' },
        { name: 'Cloud Computing', level: 70, color: 'from-blue-500 to-blue-600', icon: '☁️' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative group/skill"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'animate-pulse shadow-lg' : ''
                          }`}
                          style={{
                            width: `${skill.level}%`,
                            transform: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scaleY(1.2)' : 'scaleY(1)'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium">
                          {skill.level}% Proficiency
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Machine Learning', 'Deep Learning', 'Web Development', 'Data Analysis', 'Cloud Computing', 'API Development', 'Mobile Development', 'Blockchain'].map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 glass-effect text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default group"
              >
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {tag}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;