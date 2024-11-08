import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'RESTful APIs']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'SQL', 'Database Design']
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    {skill}
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

export default Skills;