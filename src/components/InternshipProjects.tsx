import React from 'react';

const internshipData = [
  {
    title: 'Linux Tasks',
    description: 'Hands-on Linux projects and research completed during the internship.',
    tasks: [
      {
        name: 'Blog: Companies Using Linux',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_linux-opensource-cloudcomputing-activity-7349106694834016257-6s0V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
      {
        name: '5 GUI Programs & Underlying Commands',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_linux-opensource-linuxcommands-activity-7349117091997769728--3hR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
      {
        name: 'Ctrl+C & Ctrl+Z Process Management',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_linux-processmanagement-ctrlc-activity-7349120107668754459-CHKt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
    ],
  },
  {
    title: 'Python Tasks',
    description: 'Automation and integration projects using Python.',
    tasks: [
      {
        name: 'Send an Email',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_python-streamlit-emailapp-activity-7349032113846841347-4yu3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY'
      },
      {
        name: 'Send an SMS',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_built-a-twilio-sms-sender-app-using-streamlit-activity-7348774277011120129-FT3I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
      {
        name: 'Make a Phone Call',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_python-twilio-voicecall-activity-7348949691788599297-j4o6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
      {
        name: 'Instagram Automation',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_python-streamlit-instagramautomation-activity-7349061896123146242-wce1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
      {
        name: 'WhatsApp Message',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_python-twilio-whatsappapi-activity-7349034331966750720-pP42?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
    ],
  },
  {
    title: 'Docker Tasks',
    description: 'Exploring containerization and DevOps with Docker.',
    tasks: [
      {
        name: 'Docker Case Study Blog',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_docker-devops-containerization-activity-7350046709395181568-d1TG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
      {
        name: 'Run Tool/Tech in Docker',
        link: 'https://www.linkedin.com/posts/vishal-kumar-334656280_docker-linux-rhel-activity-7350061184651284480-J8TV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERwh1gBRRZMgq134ihLsbdrwMUC36db9RY',
      },
    ],
  },
];

const InternshipProjects: React.FC = () => {
  return (
    <section id="internship-projects" className="py-20 relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Summer Internship Projects 2025
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my hands-on tasks and research completed during my 2025 summer internship, with live LinkedIn proof for each task.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipData.map((section, idx) => (
            <div key={idx} className="glass-effect rounded-2xl p-8 flex flex-col shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{section.description}</p>
              <ul className="space-y-3">
                {section.tasks.map((task, tIdx) => (
                  <li key={tIdx}>
                    <a
                      href={task.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-700 dark:text-blue-300 hover:underline hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-base font-medium"
                    >
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span>{task.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipProjects; 