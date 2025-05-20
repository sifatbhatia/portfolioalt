import React, { useEffect, useRef } from "react";
import Logo from "../assets/logo.svg?react";

const HeroSection = () => {
   const logoRef = useRef(null);

   useEffect(() => {
      const logo = logoRef.current;
      if (!logo) return;

      const paths = logo.querySelectorAll("path");
      if (paths.length === 0) {
         console.warn("No paths found in the logo SVG.");
         return;
      }

      paths.forEach((path, index) => {
         const length = path.getTotalLength();
         path.style.strokeDasharray = length;
         path.style.strokeDashoffset = length;
         path.style.fill = "transparent";
         path.style.stroke = "#d1cdc2";

         const delay = index * 300;
         setTimeout(() => {
            requestAnimationFrame(() => {
               path.style.transition = "stroke-dashoffset 4.5s cubic-bezier(0.4, 0, 0.2, 1), fill 2s cubic-bezier(0.4, 0, 0.2, 1) 3s";
               path.style.strokeDashoffset = 0;
               path.style.fill = "#d1cdc2";
            });
         }, delay + 1000); // Add 1 second initial delay
      });
   }, []);

   return (
      <section className="bg-[#030a1f] text-white min-h-[calc(100vh-80px)] flex flex-col justify-end relative">
         <div className="w-full px-4 md:px-8 lg:px-16 mb-8">
            <div ref={logoRef}>
               <Logo
                  className="w-full h-auto"
                  style={{ strokeWidth: "1.5" }}
               />
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
