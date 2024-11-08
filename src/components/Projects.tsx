import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'JavaScript Learning Module',
      description: 'A comprehensive JavaScript learning project showcasing modern JS concepts, DOM manipulation, and best practices.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Duma107/Module_8_CS20240130_WFO2407_B_Dumisani_Nxumalo_JSL08',
      demo: '#'
    },
    {
      title: 'Advanced JS Concepts',
      description: 'Project demonstrating advanced JavaScript concepts including async programming, error handling, and modern ES6+ features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500',
      technologies: ['JavaScript', 'ES6+', 'Web APIs'],
      github: 'https://github.com/Duma107/CS20240130_WFO2407_B_Dumisani_Nxumalo_JSL11',
      demo: '#'
    },
    {
      title: 'Developer Portfolio',
      description: 'A modern portfolio website built with React and Tailwind CSS, featuring responsive design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Duma107/portfolio',
      demo: '#'
    },
    {
      title: 'Linux Tools Explorer',
      description: 'A collection of Linux automation scripts and tools for optimizing development and virtual assistance workflows.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800&h=500',
      technologies: ['Shell Script', 'Linux', 'Automation'],
      github: 'https://github.com/Duma107/linux-tools',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;