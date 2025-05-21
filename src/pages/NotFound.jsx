import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import homeIcon from '../assets/home_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import casesIcon from '../assets/cases_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import mailIcon from '../assets/mail_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';

// Lazy load the hamburger menu
const HamburgerMenu = lazy(() => import('../components/HamburgerMenu'));

const NotFound = () => {
  // State for active section (needed for hamburger menu)
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = "Page Not Found | Sifat Bhatia - Full Stack Developer";
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Animation variants for the images
  const imageVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: [0.4, 0.6, 0.4],
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-black text-white">
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
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Decorative glows */}
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-indigo-600/20 blur-2xl -z-1"
          style={{ top: '20%', left: '15%' }}
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />

        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <motion.div 
            className="absolute top-5 left-5 sm:top-8 sm:left-8"
            variants={item}
          >
            <Link to="/">
              <img src="/logo.svg" alt="Sifat Bhatia Logo" className="w-24 md:w-28 filter drop-shadow-md" />
            </Link>
          </motion.div>

          {/* 404 Image */}
          <motion.div 
            className="mb-6 mt-8"
            variants={item}
          >
            <img src="/404.png" alt="404" className="w-48 md:w-64 filter drop-shadow-md" />
          </motion.div>

          {/* Handwritten-style Images */}
          <div className="w-full max-w-3xl mx-auto my-8 md:my-12 relative flex flex-col items-center">
            {/* Not found image */}
            <motion.div
              className="mb-6 md:mb-10"
              initial="hidden"
              animate="visible"
              variants={imageVariant}
            >
              <img 
                src="/not-found.png" 
                alt="Not found" 
                className="max-w-full h-auto"
              />
            </motion.div>

            {/* Arrow and Go Back - now clickable */}
            <motion.div
              className="mt-2 cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={imageVariant}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">
                <img 
                  src="/go-back.png" 
                  alt="Go back" 
                  className="max-w-full h-auto"
                  title="Go back to home page"
                />
              </Link>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div 
            className="mt-8 fixed bottom-10 left-0 right-0 flex justify-center z-20"
            variants={item}
          >
            <div className="px-6 py-3 bg-zinc-900/70 backdrop-blur-md rounded-full flex gap-6">
              <Link 
                to="/" 
                className="text-white hover:text-indigo-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/#projects" 
                className="text-white hover:text-indigo-400 transition-colors font-medium"
              >
                Projects
              </Link>
              <Link 
                to="/#contact" 
                className="text-white hover:text-indigo-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
