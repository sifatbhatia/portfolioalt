import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});
  const navigate = useNavigate();

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const miscProjects = [
    {
      folderName: "API Projects",
      icon: "📡",
      projects: [
        {
          id: 1,
          title: "SkyPulse",
          description: "Real-time weather application with interactive maps and detailed forecasts",
          image: "webp/skypulse.webp",
          technologies: ["React", "OpenWeatherMap API", "Mapbox API", "CSS", "HTML"],
          link: "https://skypulse.siftion.com/"
        },
        {
          id: 2,
          title: "Meow Gen",
          description: "A fun web app that generates random cat GIFs using the Cat API",
          image: "webp/meow-gen.webp",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://meowgen.siftion.com/"
        },
        {
          id: 3,
          title: "Pup Gen",
          description: "A fun web app that generates random dog Gif images using the Dog API",
          image: "webp/pup-gen.webp",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://pupgen.siftion.com/"
        }
      ]
    },
    {
      folderName: "Web Tools",
      icon: "🛠️",
      projects: [
        {
          id: 3,
          title: "PixSqueeze",
          description: "Image compression tool that makes your images lighter while maintaining quality",
          image: "webp/pixsqueeze.webp",
          technologies: ["React", "JavaScript", "CSS", "HTML", "Image Processing"],
          link: "https://pixsqueeze.siftion.com/"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="bg-[#bebde2] text-[#03012f] py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {/* JWorra Project - Full Width */}
          {projects.filter(p => p.slug === 'jworra').map((project) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl bg-[#030a1f] transition-all duration-500 h-full">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-base text-gray-200 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-1.5 bg-[#d1cdc2]/20 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-4 py-1.5 bg-[#d1cdc2]/20 text-white rounded-full text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${project.slug}`);
                      }}
                      className="inline-block px-8 py-3 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-white transition-colors duration-300 text-lg"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Other Projects - Stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => p.slug !== 'jworra').map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-[#030a1f] transition-all duration-500 h-full">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#d1cdc2]/20 text-white rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-[#d1cdc2]/20 text-white rounded-full text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${project.slug}`);
                      }}
                      className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-white transition-colors duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Misc Projects Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Other Projects
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {miscProjects.map((folder) => (
              <div key={folder.folderName} className="mb-8">
                <button
                  onClick={() => toggleFolder(folder.folderName)}
                  className={`w-full flex items-center justify-between p-6 bg-[#030a1f] shadow-md transition-all duration-300 hover:bg-[#030a1f]/90 text-[#d1cdc2] ${expandedFolders[folder.folderName] ? 'rounded-t-3xl' : 'rounded-3xl'}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{folder.icon}</span>
                    <h3 className="text-xl font-semibold">{folder.folderName}</h3>
                  </div>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${expandedFolders[folder.folderName] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {expandedFolders[folder.folderName] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#030a1f] rounded-b-3xl">
                        {folder.projects.map((project) => (
                          <div
                            key={project.id}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors"
                          >
                            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-[#d1cdc2]/20 text-white rounded-full text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-4 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full text-sm font-medium hover:bg-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Project
                            </a>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl text-[#030a1f]/70">Adding more projects soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
