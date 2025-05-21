import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const Projects = () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Simplified animation variants when reduced motion is preferred
  const containerVariants = useMemo(() => ({
    hidden: { opacity: prefersReducedMotion ? 0.9 : 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: prefersReducedMotion ? 0.03 : 0.08,
        when: "beforeChildren",
        duration: 0.5
      }
    }
  }), [prefersReducedMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { 
      opacity: prefersReducedMotion ? 0.9 : 0, 
      y: prefersReducedMotion ? 5 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: prefersReducedMotion ? 'tween' : 'spring',
        stiffness: 200, 
        damping: 20,
        duration: prefersReducedMotion ? 0.2 : 0.4
      }
    }
  }), [prefersReducedMotion]);

  // Memoize project data processing
  const { featuredProjects, miscProjects } = useMemo(() => {
    // Filter projects into featured and misc
    const featured = projects.filter(project => project.featured);
    const misc = projects.filter(project => !project.featured);
    
    // Sort projects by date (newest first)
    return { 
      featuredProjects: [...featured].sort((a, b) => new Date(b.date) - new Date(a.date)),
      miscProjects: [...misc].sort((a, b) => new Date(b.date) - new Date(a.date))
    };
  }, []);
  
  // Mobile state detection with debouncing
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    // Debounced resize handler for better performance
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Optimized ProjectCard component
  const ProjectCard = memo(({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const prefersReducedMotion = useReducedMotion();
    
    // Use callbacks for event handlers
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);
    
    // Styles that change on hover - separating them out reduces rerenders
    const imageStyles = {
      filter: isHovered ? 'brightness(0.5) contrast(1.1)' : 'brightness(0.3) grayscale(0.6)',
      transform: prefersReducedMotion ? 'scale(1)' : (isHovered ? 'scale(1.05)' : 'scale(1)'),
      willChange: 'filter, transform',
      transitionProperty: 'filter, transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out'
    };
    
    const cardStyles = {
      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      borderRadius: isHovered ? '16px' : '12px',
      boxShadow: isHovered ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : '0 5px 15px -10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease-out, border-radius 0.3s ease-out, box-shadow 0.3s ease-out'
    };
    
    return (
      <motion.article 
        className="w-full"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={prefersReducedMotion ? {} : { y: -5 }}
        layout={false}
      >
        <div 
          className="relative aspect-[16/9] bg-black overflow-hidden rounded-xl md:rounded-2xl shadow-xl"
          style={cardStyles}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              style={imageStyles}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder.jpg';
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Content Overlay */}
          <div 
            className="absolute inset-0 p-6 flex flex-col justify-end"
            style={{
              background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)',
              opacity: isHovered ? 1 : 0.85,
              transition: 'opacity 0.3s ease-out'
            }}
          >
            {/* Title and Year */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h3>
              {project.year && (
                <span className="text-xs text-gray-400 font-mono">{project.year}</span>
              )}
            </div>
            
            {/* Description */}
            <p 
              className="text-white/80 text-sm leading-relaxed mb-4"
              style={{ 
                opacity: isHovered ? 1 : 0.7,
                maxHeight: isHovered ? '4.5rem' : '3rem',
                overflow: 'hidden',
                transition: 'opacity 0.3s, max-height 0.3s'
              }}
            >
              {project.description}
            </p>
            
            {/* Technologies and Link */}
            <div className="flex items-center justify-between">
              {/* Tech Pills */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex gap-2">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 border border-white/20 text-white/80 rounded-full"
                      style={{
                        backgroundColor: isHovered ? 'rgba(220, 38, 38, 0.2)' : 'transparent',
                        transform: isHovered ? 'translateY(0)' : 'translateY(2px)',
                        opacity: isHovered ? 1 : 0.8,
                        transition: 'transform 0.3s, opacity 0.3s, background-color 0.3s'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span 
                      className="text-xs px-2 py-1 border border-white/20 text-white/80 rounded-full"
                      style={{
                        backgroundColor: isHovered ? 'rgba(220, 38, 38, 0.2)' : 'transparent',
                        transform: isHovered ? 'translateY(0)' : 'translateY(2px)',
                        opacity: isHovered ? 1 : 0.8,
                        transition: 'transform 0.3s, opacity 0.3s, background-color 0.3s'
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
                className="group inline-flex items-center gap-1 text-white font-semibold transition-colors duration-300"
                aria-label={`View ${project.title} project details`}
              >
                <span className="hover:text-red-400">View Project</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }, (prevProps, nextProps) => {
    // Only re-render if project ID changes
    return prevProps.project.id === nextProps.project.id;
  });

  return (
    <section id="projects" className="py-24 bg-[#bfbde1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.header 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#030a1f] mb-6">
            Projects
          </h1>
          <div className="w-20 h-1 bg-[#030a1f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my selected works
          </p>
        </motion.header>

        {/* Projects Grid - With render optimizations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout={false}
        >
          {/* Featured Projects */}
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
          
          {/* Misc Projects */}
          {miscProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index + featuredProjects.length} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
