import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';
import SifatPersonSchema from './components/SEO/SifatPersonSchema';
import homeIcon from './assets/home_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import casesIcon from './assets/cases_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import mailIcon from './assets/mail_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <SifatPersonSchema />
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <HamburgerMenu
            menuItems={[
              { label: 'Home', href: '#home', icon: homeIcon, id: 'home' },
              { label: 'Projects', href: '#projects', icon: casesIcon, id: 'projects' },
              { label: 'Contact', href: '#contact', icon: mailIcon, id: 'contact' },
            ]}
            activeSection={activeSection}
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#030a1f]">
            <HeroSection />
            <About />
            <Projects />
            <Footer />
            <Analytics />
          </div>
        } />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;