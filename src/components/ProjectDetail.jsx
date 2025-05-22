import React, { lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projects from '../data/projects';
import homeIcon from '../assets/home_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import casesIcon from '../assets/cases_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import mailIcon from '../assets/mail_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';

// Lazy load the hamburger menu
const HamburgerMenu = lazy(() => import('./HamburgerMenu'));

/**
 * ProjectDetail component following modern React patterns:
 * - Minimal use of state (only when truly necessary for UI reactivity)
 * - Pure data transformations instead of state + effects
 * - CSS for visual transitions instead of state + inline styles
 * - Simple, explicit logic instead of complex implicit effects
 */
const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the project or redirect to 404 if not found
  const project = projects.find(p => p.slug === slug);
  
  // Redirect to 404 if project not found
  React.useEffect(() => {
    if (!project) {
      navigate('/404', { replace: true });
    }
  }, [project, navigate]);
  
  // If no project found (will redirect), show loading
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#aeaccd] to-[#aeaccd]">
        <div className="w-12 h-12 border-4 border-[#0c1a3d] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  // Default active section - since this doesn't change based on UI interaction,
  // it doesn't need to be in state
  const activeSection = 'projects';

  const handwritingVariant = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { 
      opacity: 1, 
      pathLength: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
      } 
    }
  };
  
  const arrowVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        delay: 1.2
      } 
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        {/* Hamburger Menu */}
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end gap-4">
          <div className="pointer-events-auto">
            <Suspense fallback={<div></div>}>
              <HamburgerMenu
                menuItems={[
                  { label: 'Home', href: '/#home', icon: homeIcon, id: 'home' },
                  { label: 'Projects', href: '/#projects', icon: casesIcon, id: 'projects' },
                  { label: 'Contact', href: '/#contact', icon: mailIcon, id: 'contact' },
                ]}
                activeSection={activeSection}
              />
            </Suspense>
          </div>
        </div>
        <motion.div 
          className="max-w-4xl w-full mx-auto p-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo in top left */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
            <a href="/" className="inline-block">
              <img src="/logo.svg" alt="Sifat Bhatia Logo" className="w-24 md:w-28 filter drop-shadow-md" />
            </a>
          </div>

          {/* 404 Text */}
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-6 mt-8 text-white tracking-tight leading-none text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>

          {/* Handwritten-style SVG */}
          <motion.div 
            className="w-full max-w-3xl mx-auto my-8 md:my-12 relative h-60 md:h-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg 
              className="w-full h-full" 
              viewBox="0 0 600 220" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Not found text */}
              <motion.path 
                d="M120 140 C122 138, 124 136, 126 134 C128 133, 130 132, 132 130 C134 129, 136 128, 138 126 C142 123, 140 120, 136 122 C133 124, 130 127, 127 130 C124 133, 121 136, 118 140 C116 143, 115 146, 117 150 C120 155, 125 153, 130 148 C135 143, 140 138, 145 133 C148 130, 150 127, 152 124 C154 120, 155 118, 153 121 C150 126, 147 130, 145 135 C140 145, 137 155, 135 165" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
              />
              <motion.path 
                d="M165 120 C167 125, 170 130, 173 135 C177 140, 179 145, 178 150 C175 155, 170 153, 166 148 C162 143, 160 137, 162 132 C165 126, 170 127, 174 132 C178 137, 182 142, 184 148" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              />
              <motion.path 
                d="M196 120 C194 125, 192 130, 190 135 C189 138, 188 142, 190 145 C194 150, 200 145, 204 140 C208 135, 212 130, 214 125" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              />

              {/* Arrow */}
              <motion.path 
                d="M240 135 C300 135, 360 135, 420 135" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={arrowVariant}
                initial="hidden"
                animate="visible"
              />
              <motion.path 
                d="M400 115 C407 122, 414 129, 420 135 C414 141, 407 148, 400 155" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={arrowVariant}
                initial="hidden"
                animate="visible"
              />

              {/* Go Back text */}
              <motion.path 
                d="M450 120 C452 114, 454 108, 458 104 C462 100, 468 98, 474 98 C478 98, 482 100, 484 104 C485 108, 484 112, 482 116 C478 122, 472 125, 466 126 C462 127, 458 126, 454 124" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              />
              <motion.path 
                d="M490 110 C494 108, 498 106, 502 104 C504 102, 506 100, 508 98 C510 96, 512 94, 510 96 C508 98, 506 100, 504 102 C502 104, 500 106, 498 108 C496 110, 495 112, 496 114 C498 116, 500 114, 502 112 C504 110, 506 108, 508 106" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              />
              <motion.path 
                d="M520 100 C518 104, 516 108, 514 112 C512 116, 510 120, 512 124 C514 126, 518 125, 522 122 C526 118, 528 114, 530 110" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
              />
              <motion.path 
                d="M540 100 C538 105, 536 110, 534 115 C533 118, 532 122, 534 125 C536 128, 540 125, 544 120 C548 115, 552 110, 554 105" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                variants={handwritingVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
              />
            </svg>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="mt-8 fixed bottom-10 left-0 right-0 flex justify-center z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="px-6 py-3 bg-zinc-900/70 backdrop-blur-md rounded-full flex gap-6">
              <a 
                href="/" 
                className="text-white hover:text-indigo-400 transition-colors font-medium"
              >
                Home
              </a>
              <a 
                href="/#projects" 
                className="text-white hover:text-indigo-400 transition-colors font-medium"
              >
                Projects
              </a>
              <a 
                href="/#contact" 
                className="text-white hover:text-indigo-400 transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Image fallback URL as a constant - no need to generate it repeatedly
  const FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2QxY2RjMiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMwMzAxMmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPg==';
  
  // CSS for handling image loading state - using classes instead of state
  const imageStyles = `
    .project-image {
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
    .project-image.loaded {
      opacity: 1;
    }
    .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
      background-color: #18181b;
    }
    .image-loader {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #18181b;
      z-index: 10;
      transition: opacity 0.3s ease-out;
    }
    .image-container.loaded .image-loader {
      opacity: 0;
      pointer-events: none;
    }
  `;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Add styles for image loading using CSS instead of state */}
      <style>{imageStyles}</style>
      
      {/* Hamburger Menu - no need for state here */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end gap-4">
        <div className="pointer-events-auto">
          <Suspense fallback={<div></div>}>
            <HamburgerMenu
              menuItems={[
                { label: 'Home', href: '/#home', icon: homeIcon, id: 'home' },
                { label: 'Projects', href: '/#projects', icon: casesIcon, id: 'projects' },
                { label: 'Contact', href: '/#contact', icon: mailIcon, id: 'contact' },
              ]}
              activeSection={activeSection}
            />
          </Suspense>
        </div>
      </div>
      
      {/* Logo in top left */}
      <motion.div 
        className="fixed top-5 left-5 sm:top-8 sm:left-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="inline-block">
          <img src="/logo.svg" alt="Sifat Bhatia Logo" className="w-16 md:w-24 filter drop-shadow-md" />
        </a>
      </motion.div>

      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-2 sm:px-4 pt-24 sm:pt-28 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Header Section with Title and Description */}
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Title - Minimalist style with larger text */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 md:mb-10 text-white tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>
            
            {/* Project Description with more spacing and lighter text */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </motion.div>

          {/* Image Section with Loading Animation - using CSS instead of state */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-14 overflow-hidden rounded-lg"
          >
            <div className="image-container" id="image-container">
              <div className="image-loader">
                <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin opacity-70"></div>
              </div>
              <img
                src={project.image || ''}
                alt={project.title}
                className="project-image w-full h-auto object-cover aspect-video bg-zinc-900 border border-zinc-800"
                onLoad={(e) => {
                  e.target.classList.add('loaded');
                  e.target.parentElement.classList.add('loaded');
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                  e.target.className = 'w-full h-full object-contain bg-gray-100 p-8 loaded';
                  e.target.parentElement.classList.add('loaded');
                }}
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* Technologies Section - Minimal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-14"
          >
            <div className="border border-zinc-800 rounded-lg p-6 sm:p-8">
              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4 font-light">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 border border-zinc-800 text-white/80 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button or Site Preview - Minimalist */}
              <div className="flex items-center justify-between gap-4 border-t border-zinc-800 pt-6">
                <p className="text-sm text-white/60 font-light">
                  {project.slug === "cherrytooth" ? "View project preview" : "View the live project"}
                </p>
                {project.slug === "cherrytooth" ? (
                  <button
                    onClick={() => {
                      document.getElementById('sitePreviewModal').classList.remove('hidden');
                    }}
                    className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
                  >
                    <span>View Site Preview</span>
                    <FaExternalLinkAlt size={14} />
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
                  >
                    <span>Visit Website</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* About Section - Minimalist Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-zinc-800 rounded-lg p-6 sm:p-8 mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">About</h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 font-light">
              {project.detailedDescription}
            </p>
            
            {/* Features Section - Cleaner Style */}
            <div className="mb-12">
              <h3 className="text-xl font-light mb-6 text-white/80">
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-700 rounded-full text-white/70 mr-4 mt-0.5 flex-shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-white/70 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges Section - Cleaner Style */}
            <div className="border-t border-zinc-800 pt-10">
              <h3 className="text-xl font-light mb-6 text-white/80">
                Challenges & Solutions
              </h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-700 rounded-full text-white/70 mr-4 mt-0.5 flex-shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-white/70 font-light">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Mobile-friendly bottom navigation - Minimal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="fixed bottom-10 left-0 right-0 z-40"
          >
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-zinc-900/70 backdrop-blur-md rounded-full flex gap-6">
                <a 
                  href="/" 
                  className="text-white hover:text-indigo-400 transition-colors font-medium"
                >
                  Home
                </a>
                <a 
                  href="/#projects" 
                  className="text-white hover:text-indigo-400 transition-colors font-medium"
                >
                  Projects
                </a>
                <a 
                  href="/#contact" 
                  className="text-white hover:text-indigo-400 transition-colors font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Back button - in a "go back" format */}
          <motion.div 
            className="fixed top-1/2 left-6 transform -translate-y-1/2 z-30 md:flex hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <FaArrowLeft size={14} />
              <span>go back</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Site Preview Modal - Using a more functional approach that doesn't depend on DOM queries */}
      {project.slug === "cherrytooth" && (
        <div id="sitePreviewModal" className="fixed inset-0 z-50 bg-black/80 p-4 hidden overflow-y-auto">
          <div className="relative w-full max-w-5xl mx-auto mt-10 mb-10">
            <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl border border-zinc-800">
              <div className="flex justify-between items-center p-4 border-b border-zinc-800">
                <h3 className="text-lg font-medium">Site Preview</h3>
                <button 
                  onClick={() => {
                    const modal = document.getElementById('sitePreviewModal');
                    if (modal) modal.classList.add('hidden');
                  }}
                  className="text-gray-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="bg-zinc-800 rounded overflow-hidden">
                  <img 
                    src={project.image2 || project.image} 
                    alt={project.title} 
                    className="w-full h-auto" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;