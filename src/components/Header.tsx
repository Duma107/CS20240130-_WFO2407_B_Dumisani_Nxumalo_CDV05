import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold relative"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Dumisani Nxumalo
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-cyan-600 transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Contact</a>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Duma107" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/d-nxumalo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:dumisaninxumalo5@gmail.com"
                className="text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 ${
              isMenuOpen ? 'hamburger-active' : ''
            }`}
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a 
              href="#about" 
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={handleMenuClick}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-300"
              onClick={handleMenuClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-2xl font-semibold text-gray-800 hover:text-cyan-600 transition-colors duration-300"
              onClick={handleMenuClick}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-2xl font-semibold text-gray-800 hover:text-emerald-600 transition-colors duration-300"
              onClick={handleMenuClick}
            >
              Contact
            </a>
            
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/Duma107" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/d-nxumalo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:dumisaninxumalo5@gmail.com"
                className="text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;