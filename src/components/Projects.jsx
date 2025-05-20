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
          link: "https://skypulse.siftion.com/",
          features: [
            "Real-time weather data visualization",
            "Interactive map integration",
            "Detailed forecast information",
            "Location-based weather updates",
            "Responsive design for all devices",
            "Seamless API integration"
          ]
        },
        {
          id: 2,
          title: "Meow Gen",
          description: "A fun web app that generates random cat GIFs using the Cat API",
          image: "webp/meow-gen.webp",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://meowgen.siftion.com/",
          features: [
            "Real-time random cat GIF generation",
            "Clean and intuitive user interface",
            "Responsive design for all devices",
            "Seamless API integration",
            "Instant loading of new GIFs"
          ]
        },
        {
          id: 3,
          title: "Pup Gen",
          description: "Interactive web application that fetches random dog GIFs",
          image: "webp/pup-gen.webp",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://pupgen.siftion.com/",
          features: [
            "Random dog GIF generation",
            "User-friendly interface",
            "Mobile-responsive design",
            "Efficient API handling",
            "Quick GIF loading"
          ]
        },
        {
          id: 4,
          title: "FilmFlow",
          description: "Streamlined Movie Discovery web app for exploring and tracking films.",
          image: "webp/filmflow.webp",
          technologies: ["React", "Redux", "Node.js", "Express", "Sequelize", "Bcrypt", "API Integration", "CSS", "HTML"],
          link: "https://filmflow.siftion.com/",
          features: [
            "Modern UI for movie exploration and discovery",
            "User authentication with Bcrypt",
            "API server, database, and custom routes",
            "Weekly stand-up progress tracking",
            "Deployment to Vercel",
            "Redux for state management"
          ],
          progress: [
            "Week 1: Improved React knowledge, created layouts for API server, database, server, and routes.",
            "Week 2: Learned Bcrypt and worked on user authentication, fixing API routes.",
            "Week 3: Added Bcrypt, controllers, Redux; researched Sequelize relationships.",
            "Week 4: Explored deployment options, cleaned up GitHub repo."
          ]
        }
      ]
    },
    {
      folderName: "Web Tools",
      icon: "🛠️",
      projects: [
        {
          id: 1,
          title: "PixSqueeze",
          description: "Image compression tool that makes your images lighter while maintaining quality",
          image: "webp/pixsqueeze.webp",
          technologies: ["React", "JavaScript", "CSS", "HTML", "Image Processing"],
          link: "https://pixsqueeze.siftion.com/",
          features: [
            "Drag-and-drop interface for easy image upload",
            "Supports images up to 500MB",
            "Efficient image compression algorithms",
            "Maintains image quality while reducing size",
            "Simple and intuitive user interface",
            "Fast processing times",
            "No registration required"
          ]
        }
      ]
    }
  ];

  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="bg-[#bebde2] text-[#03012f] py-20 px-4 md:px-8 h-min">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Project */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] hover:rounded-[40px] transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-8 bg-[#18181b]/90 rounded-b-xl text-white ">
                  <h3 className="text-3xl font-bold mb-3">{featuredProject.title}</h3>
                  <p className="text-lg mb-6">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-[#d1cdc2]/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate(`/projects/${featuredProject.slug}`)}
                    className="inline-block px-8 py-3 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium  hover:bg-[#d1cdc2]/90 transition-colors text-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 gap-8">
            {otherProjects.slice(0, 2).map((project) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => navigate(`/projects/${project.slug}`)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] hover:rounded-[40px] transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wicked Paradise Project */}
        <div className="mt-12 flex justify-center gap-8">
          <motion.div
            className="relative group cursor-pointer w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(`/projects/${projects[3].slug}`)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] hover:rounded-[40px] transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{projects[3].title}</h3>
                  <p className="text-sm mb-4">{projects[3].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[3].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CineSky Project */}
          <motion.div
            className="relative group cursor-pointer w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(`/projects/${projects[4].slug}`)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] hover:rounded-[40px] transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="webp/cine-sky.webp"
                  alt="CineSky"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">CineSky</h3>
                  <p className="text-sm mb-4">Modern weather application with real-time forecasts</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Next.js", "TypeScript", "Tailwind CSS", "Firebase"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Misc Projects Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Other Projects
          </h2>
          <div className="max-w-4xl mx-auto ">
            {miscProjects.map((folder) => (
              <div key={folder.folderName} className="mb-8">
                <button
                  onClick={() => toggleFolder(folder.folderName)}
                  className={`w-full flex items-center justify-between p-8 bg-[#030a1f] shadow-md transition-all duration-300 hover:bg-[#030a1f]/90 text-[#d1cdc2] ${expandedFolders[folder.folderName] ? 'rounded-[40px]' : 'rounded-[20px]'}`}
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
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFolders[folder.folderName] ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {folder.projects.map((project) => (
                      <motion.div
                        key={project.id}
                        className="relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] hover:rounded-[40px] transition-all duration-300">
                          <div className="aspect-w-16 aspect-h-9">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="w-full p-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                              <p className="text-sm mb-4">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <a
                                href={project.link}
                                className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="text-2xl text-[#030a1f]/70">Adding more projects soon!</p>
      </div>
    </section>
  );
};

export default Projects; 