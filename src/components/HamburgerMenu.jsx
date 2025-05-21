import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HamburgerMenu = ({ menuItems = [], activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleItemClick = (e, href) => {
    e.preventDefault();
    
    // Handle different types of links
    if (href.startsWith('http')) {
      // External links
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('/') && !href.includes('#')) {
      // Regular internal links without hash
      navigate(href);
    } else {
      // Handle hash links (both /#hash and #hash format)
      let elementId = href;
      
      // Extract the hash part if format is /#home
      if (href.includes('#')) {
        elementId = '#' + href.split('#')[1];
      }
      
      // Check if we're already on the main page
      const onMainPage = location.pathname === '/' || location.pathname === '';
      
      if (!onMainPage) {
        // If not on the main page, navigate to the main page with hash
        // When navigating from another page to the home page with a hash anchor
        window.location.href = '/' + elementId;
      } else {
        // If we're already on the main page
        const sectionId = elementId.replace('#', '');

        // Find the element by ID
        let targetElement = document.getElementById(sectionId);
        
        // If we found the element by ID, scroll to it
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        
        // If we didn't find the element by ID, try to find Projects specifically
        if (sectionId === 'projects') {
          // Try different ways to find the projects section
          targetElement = 
            document.querySelector('.projects-section') || 
            document.querySelector('[data-section="projects"]') ||
            document.querySelector('section[id*="project"]') ||
            [...document.querySelectorAll('h2')].find(h => 
              h.textContent.toLowerCase().includes('project'))?.closest('section');

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
        
        // If we didn't find the element by ID, try to find Contact specifically
        if (sectionId === 'contact') {
          // Try different ways to find the contact section
          targetElement = 
            document.querySelector('.contact-section') || 
            document.querySelector('[data-section="contact"]') ||
            document.querySelector('section[id*="contact"]') ||
            document.querySelector('footer') ||
            [...document.querySelectorAll('h2')].find(h => 
              h.textContent.toLowerCase().includes('contact'))?.closest('section');

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
        
        // Last resort - try to find any element with the section ID in its attributes or text
        console.log(`Trying to find any element related to ${sectionId}`);
        const possibleElements = [...document.querySelectorAll('*')].filter(el => 
          el.id.includes(sectionId) || 
          el.className.includes(sectionId) ||
          el.textContent.toLowerCase().includes(sectionId)
        );
        
        if (possibleElements.length > 0) {
          // Sort by how close they are to being a section/container
          const bestMatch = possibleElements.find(el => 
            el.tagName === 'SECTION' || 
            el.tagName === 'DIV' && (el.className.includes('section') || el.className.includes('container'))
          ) || possibleElements[0];
          
          bestMatch.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      setIsOpen(false);
    }
  };
  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button
        className={`flex items-center justify-center w-14 h-14 border-2 border-[#d1cdc2] bg-black/50 backdrop-blur-lg hover:bg-black/20 transition-all ease-in-out duration-100 focus:outline-none group shadow-lg ${isOpen ? 'rounded-[32%] scale-110' : 'rounded-full'}`}
        style={{ boxShadow: "0 2px 24px 0 rgba(30,30,60,0.15)" }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative flex flex-col items-center justify-center w-8 h-8">
          <span
            className={`block w-6 h-0.5 bg-[#d1cdc2] mb-1.5 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#d1cdc2] mb-1.5 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#d1cdc2] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            aria-hidden="true"
          />
        </span>
      </button>
      {/* Glassy Blur Menu */}
      <div 
        id="mobile-menu"
        className={`absolute right-0 bottom-16 w-56 rounded-2xl bg-white/20 backdrop-blur-2xl border border-[#d1cdc2]/30 shadow-2xl p-4 flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'}`}
        style={{ zIndex: 100 }}
        aria-hidden={!isOpen}
      >
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleItemClick(e, item.href)}
            className={`text-lg font-semibold px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === item.id ? 'bg-[#d1cdc2]/50 text-[#18181b]' : 'text-[#030a1f] hover:bg-[#d1cdc2]/30 hover:text-[#18181b]'}`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.icon && (
              <img 
                src={item.icon} 
                alt="" 
                className="w-5 h-5 flex-shrink-0"
                aria-hidden="true"
              />
            )}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
