import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import homeIcon from './assets/home_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import casesIcon from './assets/cases_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import mailIcon from './assets/mail_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import LoadingSpinner from './components/common/LoadingSpinner';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main App Content that uses useLocation
const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact', 'menu'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-[#e3e3e3]">
      <SifatPersonSchema />
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end gap-4">
        {/* Back to Projects Button - Only show on project detail pages */}
        {location.pathname.startsWith('/projects/') && (
          <Link 
            to="/#projects" 
            className="pointer-events-auto flex items-center justify-center w-14 h-14 border-2 border-[#d1cdc2] bg-black/50 backdrop-blur-lg hover:bg-black/20 transition-all ease-in-out duration-100 rounded-full shadow-lg text-[#d1cdc2] hover:text-white"
            title="Back to Projects"
            aria-label="Back to Projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        )}
        <div className="pointer-events-auto">
          <HamburgerMenu
            menuItems={[
              { label: 'Home', href: '/#home', icon: homeIcon, id: 'home' },
              { label: 'Projects', href: '/#projects', icon: casesIcon, id: 'projects' },
              { label: 'Contact', href: '/#contact', icon: mailIcon, id: 'contact' },
            ]}
            activeSection={activeSection}
          />
        </div>
      </div>
      <HeroSection />
      <About />
      <Projects />
      <Footer />
      <Analytics />
    </div>
  );
};

// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));
const HamburgerMenu = lazy(() => import('./components/HamburgerMenu'));
const SifatPersonSchema = lazy(() => import('./components/SEO/SifatPersonSchema'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

// Main App component with Router
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#aeaccd] to-[#aeaccd] text-[#0c1a3d]">
          <div className="w-12 h-12 border-4 border-[#0c1a3d] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;