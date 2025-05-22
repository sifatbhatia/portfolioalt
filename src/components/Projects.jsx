import React, { memo, useMemo, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import { useMediaQuery } from '../hooks/useMediaQuery';

// Simple placeholder image component for better loading experience
const PlaceholderImage = () => (
  <div className="absolute inset-0 bg-gray-900/50 animate-bounce" />
);

/**
 * Projects component that displays a grid of project cards
 * Following React patterns:
 * - UI as thin wrapper over data
 * - Minimal state usage
 * - Explicit logic over implicit reactions
 * - CSS for hover states where possible
 */
const Projects = () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Use custom hook instead of useState + useEffect
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  // Animation variants for hover effects only
  const itemVariants = {
    hover: {
      y: -3,
      transition: { 
        type: "tween",
        duration: 0.1,
        ease: "easeInOut"
      } 
    }
  };
  
  // Memoize filtered projects to prevent recalculation on every render
  const { featuredProjects, miscProjects } = useMemo(() => {
    const uniqueProjects = Array.from(new Map(projects.map(project => [project.slug, project])).values());
    return {
      featuredProjects: uniqueProjects.filter(project => project.featured || false),
      miscProjects: uniqueProjects.filter(project => !project.featured)
    };
  }, [projects]);
  
  // Memoize the project list to prevent unnecessary re-renders
  const projectList = useMemo(() => 
    [...featuredProjects, ...miscProjects], 
    [featuredProjects, miscProjects]
  );

  // ProjectCard component with optimized animations
  const ProjectCard = memo(({ project, staggerIndex }) => {
    const prefersReducedMotion = useReducedMotion();
    const [imageLoaded, setImageLoaded] = React.useState(false);
    
    // Memoize the image load handler
    const handleImageLoad = useCallback(() => {
      setImageLoaded(true);
    }, []);
    
    // Simple hover animation that's less likely to cause glitches
    const hoverAnimation = prefersReducedMotion ? {} : { 
      y: -3, // Reduced from -5 for better performance
      transition: { 
        type: "tween",
        duration: 0.1,
        ease: "easeOut"
      } 
    };
    return (
      <motion.article 
        className="w-full project-card"
        custom={staggerIndex} // Stagger delay based on index
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        layout={false}
      >
        <div className="relative aspect-[16/9] bg-gray-900/50 overflow-hidden rounded-xl md:rounded-2xl shadow-xl project-card-container">
          {/* Background Image with optimized loading */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {!imageLoaded && <PlaceholderImage />}
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover rounded-xl md:rounded-2xl project-image transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder.jpg';
              }}
              width={800}
              height={450}
              style={{
                willChange: 'transform, opacity'
              }}
            />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end content-overlay">
            {/* Title and Year */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h3>
              {project.year && (
                <span className="text-xs text-gray-400 font-mono">{project.year}</span>
              )}
            </div>
            
            {/* Description - CSS class handles hover effects */}
            <p className="text-white/80 text-sm leading-relaxed mb-4 project-description">
              {project.description}
            </p>
            
            {/* Technologies and Link */}
            <div className="flex items-center justify-between">
              {/* Tech Pills - Using CSS classes for hover effects */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex gap-2">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 border border-white/20 text-white/80 rounded-full tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs px-2 py-1 border border-white/20 text-white/80 rounded-full tech-pill">
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
    // Perform strict equality check on project ID to minimize renders
    return prevProps.project.id === nextProps.project.id;
  });

  // Optimized CSS for better performance
  const cssStyles = `
    .project-card-container {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
      will-change: transform, box-shadow;
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
                  box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .project-card:hover .project-card-container {
      transform: translate3d(0, -4px, 0) scale(1.01);
      box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.25);
    }
    
    .project-image {
      filter: brightness(0.3) grayscale(0.6);
      transform: translateZ(0) scale(1);
      will-change: transform, filter;
      transition: filter 0.3s ease-out, transform 0.3s ease-out;
      backface-visibility: hidden;
    }
    
    .project-card:hover .project-image {
      filter: brightness(0.5) contrast(1.1);
      transform: scale(1.05);
    }
    
    .content-overlay {
      background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%);
      opacity: 0.85;
      transition: opacity 0.3s ease-out;
    }
    
    .project-card:hover .content-overlay {
      opacity: 1;
    }
    
    .project-description {
      opacity: 0.7;
      max-height: 3rem;
      overflow: hidden;
      transition: opacity 0.3s, max-height 0.3s;
    }
    
    .project-card:hover .project-description {
      opacity: 1;
      max-height: 4.5rem;
    }
    
    .tech-pill {
      background-color: transparent;
      transition: all 0.2s ease-out;
      transform: translateY(2px);
      opacity: 0.8;
    }
    
    .project-card:hover .tech-pill {
      background-color: rgba(220, 38, 38, 0.2);
      transform: translateY(0);
      opacity: 1;
    }
    
    /* Optimize for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }`;

  return (
    <section id="projects" className="py-24 bg-[#bfbde1]">
      <style>{cssStyles}</style>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Optimized project list rendering */}
          {projectList.map((project) => {
            const uniqueKey = project.id + '-' + project.slug;
            
            return (
              <motion.div 
                key={uniqueKey}
                whileHover="hover"
                variants={itemVariants}
              >
                <ProjectCard 
                  project={project}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
