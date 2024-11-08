import React from 'react';
import { Briefcase, GraduationCap, Award, Star, Terminal } from 'lucide-react';

const About = () => {
  const experience = [
    {
      title: 'Software Development Student',
      company: 'CodeSpace Academy',
      period: '2024 - Present',
      description: 'Advancing skills in front-end development, focusing on modern web technologies and best practices.'
    },
    {
      title: 'Virtual Assistant Fellow',
      company: 'ALX Virtual Assistant Fellowship',
      period: '2024 - Present',
      description: 'Integrating project management principles with software development practices to create efficient workflows and solutions.'
    }
  ];

  const education = [
    {
      degree: 'Front-End Development Program',
      school: 'CodeSpace Academy',
      year: '2024',
      description: 'Specializing in modern web development technologies and frameworks'
    }
  ];

  const achievements = [
    'ALX Virtual Assistant Fellowship Member',
    'Active Open Source Contributor',
    'Linux System Administration Enthusiast'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Professional Summary */}
          <div className="mb-12 text-lg text-gray-600 leading-relaxed">
            <p className="mb-4">
              I'm a passionate developer focused on combining virtual assistance and software development 
              to create innovative real-time solutions. My journey involves exploring the intersection 
              of web development and automation to enhance productivity and user experience.
            </p>
            <p>
              Currently advancing my skills in front-end development while integrating project management 
              principles from the ALX Virtual Assistant Fellowship. I'm particularly interested in Linux 
              Ubuntu and its applications in both development and virtual assistance scenarios.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              Current Focus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Development</h4>
                <ul className="list-disc list-inside">
                  <li>Front-end Web Development</li>
                  <li>JavaScript/TypeScript</li>
                  <li>React.js</li>
                  <li>Linux Tools & Administration</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Virtual Assistance</h4>
                <ul className="list-disc list-inside">
                  <li>Project Management</li>
                  <li>Workflow Optimization</li>
                  <li>Process Automation</li>
                  <li>System Administration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Achievements & Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;