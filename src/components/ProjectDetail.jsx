import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const project = projects.find(p => p.slug === slug) || projects[0];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#bebde2] to-[#a6a5cb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-sm w-full mx-4 text-center"
        >
          <motion.h1 
            className="text-3xl font-bold mb-4 text-[#03012f]"
          >
            Project Not Found
          </motion.h1>
          <p className="text-[#03012f]/70 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <motion.button 
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#030a1f] text-white rounded-full hover:bg-[#030a1f]/90 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaArrowLeft className="inline mr-2" />
            Back to Projects
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2QxY2RjMiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMwMzAxMmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPg==';
    e.target.className = 'w-full h-full object-contain bg-gray-100 p-8';
    setImageLoaded(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#030a1f] text-white pb-0"
    >
      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-2 sm:px-4 pt-10 sm:pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section with Title and Description */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {project.title}
            </h1>
            
            {/* Project Description */}
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Image Section with Loading Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-6 overflow-hidden rounded-xl shadow-xl"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="w-10 h-10 border-4 border-[#030a1f] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={project.image || ''}
              alt={project.title}
              className="w-full h-auto object-cover aspect-video bg-gray-100"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              loading="lazy"
            />
          </motion.div>
          
          {/* Technologies and CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider text-white/80 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-white/80">View the live project</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-[#030a1f] text-white rounded-full font-medium hover:bg-[#030a1f]/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ width: 'fit-content' }}
                >
                  <span>Visit Website</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About the Project</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
              {project.detailedDescription}
            </p>
            
            {/* Features Section */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="inline-block w-6 h-1 bg-white/70 mr-3 rounded-full"></span>
                Key Features
              </h3>
              <ul className="space-y-3 pl-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-white/30 rounded-full text-white mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="inline-block w-6 h-1 bg-white/70 mr-3 rounded-full"></span>
                Challenges & Solutions
              </h3>
              <ul className="space-y-3 pl-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-white/30 rounded-full text-white mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-white/90">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Mobile-friendly bottom navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="fixed bottom-4 left-0 right-0 px-4 z-20 sm:relative sm:px-0 sm:bottom-0"
          >
            <div className="flex justify-center">
              <button
                onClick={() => navigate(-1)}
                className="fixed bottom-0 cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#030a1f] rounded-full shadow-lg border border-white/20 backdrop-blur-sm hover:bg-[#030a1f] hover:text-white  transition-all duration-300 w-full max-w-xs sm:max-w-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaArrowLeft size={16} />
                <span className="font-medium">Back to Projects</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;