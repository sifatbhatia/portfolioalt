import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the project with matching slug
    const foundProject = projects.find(p => p.slug === slug);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setProject(foundProject);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#aeaccd] to-[#aeaccd] text-[#0c1a3d]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0c1a3d] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#aeaccd] to-[#aeaccd] text-[#0c1a3d]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-[#0c1a3d] text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#aeaccd] to-[#aeaccd] text-[#0c1a3d] relative pb-24">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        aria-label="Go back"
      >
        <FaArrowLeft className="text-[#0c1a3d]" />
      </button>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
            {/* Project image */}
            <div className="aspect-video bg-gray-100 relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/1200x675/0a0a1a/d1cdc2?text=Project+Image';
                }}
              />
            </div>

            {/* Project info */}
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-[#0c1a3d]/90 mb-8">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-4 py-2 bg-[#0c1a3d]/5 text-[#0c1a3d] rounded-full border border-[#0c1a3d]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-white/20 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">{project.title}</h3>
              <p className="text-sm text-[#0c1a3d]/70">Project Details</p>
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#0c1a3d] text-white rounded-full hover:bg-opacity-90 transition-all"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              )}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0c1a3d] text-white rounded-full hover:bg-opacity-90 transition-all"
              >
                <FaGlobe className="text-lg" />
                <span>View Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
