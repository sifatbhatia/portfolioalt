import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg?react";
import LogoAlt from "../assets/logo-alt.svg?react";
import LogoAlt2Line from "../assets/logo-alt-2line.svg?react";

const HeroSection = () => {
   const logoRef = useRef(null);
   const altLogoRef = useRef(null);
   const [originalLogoOpacity, setOriginalLogoOpacity] = useState(1);
   const [altLogoOpacity, setAltLogoOpacity] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

   // Check if device is mobile
   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   useEffect(() => {
      const logo = logoRef.current;
      if (!logo) return;

      const paths = logo.querySelectorAll("path");
      if (paths.length === 0) {
         console.warn("No paths found in the logo SVG.");
         return;
      }

      // Initial drawing animation
      paths.forEach((path, index) => {
         const length = path.getTotalLength();
         path.style.strokeDasharray = length;
         path.style.strokeDashoffset = length;
         path.style.fill = "transparent";
         path.style.stroke = "#bebde2";

         const delay = index * 80;
         setTimeout(() => {
            requestAnimationFrame(() => {
               path.style.transition = "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s";
               path.style.strokeDashoffset = 0;
               path.style.fill = "#bebde2";
            });
         }, delay + 300);
      });

      // After the initial animation completes, start the fade transition
      const initialAnimationDuration = paths.length * 80 + 300 + 2000;
      
      setTimeout(() => {
         // Fade out original logo from left to right
         const fadeOutDuration = 800; // ms
         setOriginalLogoOpacity(0);
         
         // After original logo fades out, fade in alt logo from right to left
         setTimeout(() => {
            setAltLogoOpacity(1);
         }, fadeOutDuration + 200); // Small delay after original logo fades out
      }, initialAnimationDuration);
   }, []);

   return (
      <section id="home" className="bg-[#03012f] text-white min-h-[calc(100vh-80px)] flex flex-col justify-end relative">
         <div className="w-full px-4 md:px-8 lg:px-16 mb-8">
            <div className="relative" role="img" aria-label="Sifat Bhatia - Full Stack Developer & Designer">
               {/* Original logo with drawing animation that fades out left-to-right */}
               <div 
                  ref={logoRef} 
                  className="w-full transition-all duration-800"
                  style={{ 
                     opacity: originalLogoOpacity,
                     clipPath: originalLogoOpacity === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)',
                     transition: 'opacity 800ms ease-in-out, clip-path 800ms ease-in-out'
                  }}
               >
                  <Logo
                     className="w-full h-auto"
                     style={{ strokeWidth: "1.5", fill: "#bebde2", stroke: "#bebde2" }}
                     aria-hidden="true"
                  />
               </div>
               
               {/* Alt logo that fades in right-to-left - different for mobile */}
               <div 
                  ref={altLogoRef}
                  className="absolute inset-0 w-full transition-all duration-800"
                  style={{ 
                     opacity: altLogoOpacity,
                     // Only use clip-path for desktop, not for mobile
                     clipPath: isMobile ? 'none' : (altLogoOpacity === 0 ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)'),
                     transition: 'opacity 800ms ease-in-out, clip-path 800ms ease-in-out',
                     display: 'flex', 
                     justifyContent: 'center', 
                     alignItems: isMobile ? 'center' : 'flex-end' // Center alignment for mobile
                  }}
               >
                  {isMobile ? (
                     <div className="w-full h-auto pt-4 pb-8"> {/* Added padding to ensure visibility */}
                        <LogoAlt2Line
                           className="w-full h-auto"
                           style={{ strokeWidth: "1.5", fill: "#bebde2", stroke: "#bebde2" }}
                           aria-hidden="true"
                        />
                     </div>
                  ) : (
                     <LogoAlt
                        className="w-full h-auto"
                        style={{ strokeWidth: "1.5", fill: "#bebde2", stroke: "#bebde2" }}
                        aria-hidden="true"
                     />
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
