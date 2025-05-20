import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug) || projects[0];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#bebde2]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-[#03012f]"
        >
          Project Not Found
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-[#030a1f] text-white rounded-xl hover:rounded-[20px] transition-all duration-300"
        >
          Back
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#bebde2] text-[#03012f] flex flex-col items-center py-20 px-4 md:px-8 lg:px-12"
    >
      {/* Responsive container with different max-widths for different screen sizes */}
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl">
        {/* Project Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-center"
        >
          {project.title}
        </motion.h1>
        
        {/* Project Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 group"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] hover:rounded-[40px] transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-[#d1cdc2]/20 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        {/* Project Preview or Visit Button */}
        {project.slug === 'cherrytooth' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white/50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Website Preview</h3>
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
                <div className="max-h-[80vh] overflow-y-auto">
                  <img 
                    src={project.image2 || project.image} 
                    alt={`${project.title} preview`}
                    className="w-full max-w-full h-auto"
                    style={{ minWidth: '100%' }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Scroll to view the full website preview
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#030a1f] text-white text-sm rounded-xl font-medium hover:bg-[#030a1f]/90 hover:rounded-[20px] transition-all duration-300"
            >
              Visit Project
            </a>
          </motion.div>
        )}
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/50 rounded-xl p-8 mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">About the project</h2>
          <p className="text-base md:text-lg mb-8">{project.detailedDescription}</p>
          
          {/* Features Section */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#030a1f] mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Challenges Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Challenges & Solutions</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#030a1f] mr-2">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="w-full py-4 bg-[#030a1f] text-white rounded-xl text-sm font-medium hover:bg-[#030a1f]/90 hover:rounded-[20px] transition-all duration-300"
          >
            &lt; Back to Projects
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;