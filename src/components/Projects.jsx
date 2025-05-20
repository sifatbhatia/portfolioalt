import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const Projects = () => {
  // Swiss Design inspired color palette
  const colors = {
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#FF0000',
    background: '#F5F5F5',
    text: '#333333',
    lightText: '#757575'
  };

  // Typography scale based on Swiss Design
  const typography = {
    h1: 'text-4xl md:text-5xl font-bold leading-tight tracking-tighter',
    h2: 'text-2xl md:text-3xl font-bold leading-tight',
    h3: 'text-xl font-semibold',
    body: 'text-base leading-relaxed',
    small: 'text-sm leading-snug',
    mono: 'font-mono text-xs tracking-wider'
  };

  // Grid system
  const grid = {
    container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    row: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    col: 'w-full'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 24 
      }
    },
    hover: { 
      y: -4,
      transition: { 
        duration: 0.2 
      }
    }
  };

  // Project card component
  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.article 
        className="w-full group"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -10 }}
      >
        {/* Project Card - Black minimalist design with strong hover effect */}
        <div 
          className={`relative aspect-[16/9] bg-black transition-all duration-300 ease-out overflow-hidden rounded-xl md:rounded-2xl shadow-xl`}
          style={{
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            borderRadius: isHovered ? '50px' : '20px',
            boxShadow: isHovered ? '0 10px 40px -10px rgba(220, 38, 38, 0.3)' : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Background Image - Always visible but dims on non-hover */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500 ease-out rounded-xl md:rounded-2xl"
              style={{ 
                filter: isHovered ? 'brightness(0.5) contrast(1.1)' : 'brightness(0.3) grayscale(0.6)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExMTExIi8+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SU1BR0U8L3RleHQ+PC9zdmc+';
              }}
            />
          </div>
          
          {/* Project Number - Absolute positioned at top-left */}
          <div 
            className={`absolute top-6 left-6 font-mono text-lg text-white transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}
            style={{
              transform: isHovered ? 'translateX(0) scale(1.2)' : 'translateX(0) scale(1)',
              textShadow: isHovered ? '0 0 10px rgba(255,0,0,0.5)' : 'none'
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
          
          {/* Project Details Container */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            {/* Header section */}
            <div className="flex justify-between items-start">
              {/* Empty space for the number */}
              <div className="w-8"></div>
            </div>
            
            {/* Content section - Positioned at bottom */}
            <div 
              className="transition-all duration-300"
              style={{ 
                transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
              }}
            >
              {/* Title and Year */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                {project.year && (
                  <span className="text-xs text-gray-400 font-mono">{project.year}</span>
                )}
              </div>
              
              {/* Description */}
              <p 
                className="text-white/80 text-sm leading-relaxed mb-4 transition-all duration-300"
                style={{ 
                  opacity: isHovered ? 1 : 0.7,
                  maxHeight: isHovered ? '4.5rem' : '3rem',
                  overflow: 'hidden'
                }}
              >
                {project.description}
              </p>
              
              {/* Technologies and View Link */}
              <div className="flex items-center justify-between">
                {/* Technologies Pills */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex gap-2">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 border border-white/20 text-white/80 transition-all duration-300 rounded-full"
                        style={{
                          backgroundColor: isHovered ? 'rgba(220, 38, 38, 0.2)' : 'transparent',
                          transform: isHovered ? 'translateY(0)' : 'translateY(2px)',
                          opacity: isHovered ? 1 : 0.8
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span 
                        className="text-xs px-2 py-1 border border-white/20 text-white/80 transition-all duration-300 rounded-full"
                        style={{
                          backgroundColor: isHovered ? 'rgba(220, 38, 38, 0.2)' : 'transparent',
                          transform: isHovered ? 'translateY(0)' : 'translateY(2px)',
                          opacity: isHovered ? 1 : 0.8
                        }}
                      >
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                )}
                
                {/* View Project Link */}
                <Link 
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center text-white group relative overflow-hidden"
                >
                  <span 
                    className={`relative z-10 font-medium transition-colors duration-300 ${isHovered ? 'text-[#001c69] bg-[#c6d5ff] px-2 py-1 rounded-full' : 'text-white'}`}
                  >
                    View →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  };
  
  // Filter projects into featured and misc
  const featuredProjects = projects.filter(project => project.featured);
  const miscProjects = projects.filter(project => !project.featured);
  
  // Sort projects by date (newest first)
  const sortedFeaturedProjects = [...featuredProjects].sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedMiscProjects = [...miscProjects].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-24 bg-[#bfbde1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.header 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#030a1f] mb-6">
            Projects
          </h1>
          <div className="w-20 h-1 bg-[#030a1f] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my selected works
          </p>
        </motion.header>

        {/* Projects List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured Projects */}
          {sortedFeaturedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
          
          {/* Misc Projects */}
          {sortedMiscProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index + sortedFeaturedProjects.length} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
