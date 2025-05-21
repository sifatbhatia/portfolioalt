import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg?react";
import LogoAlt from "../assets/logo-alt.svg?react";


// stats and skills data
const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];
const skills = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS',
  'UI/UX Design', 'HTML/CSS', 'Responsive Design', 'Web Performance',
  'Accessibility', 'Git'
];

const HeroSection = () => {
  const logoRef = useRef(null);
  const altLogoRef = useRef(null);
  const [originalLogoOpacity, setOriginalLogoOpacity] = useState(1);
  const [altLogoOpacity, setAltLogoOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile breakpoint
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // logo draw + fade animation
  useEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;
    const paths = logoEl.querySelectorAll("path");
    if (!paths.length) return;

    paths.forEach((path, idx) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.fill = "transparent";
      path.style.stroke = "#bebde2";

      setTimeout(() => {
        requestAnimationFrame(() => {
          path.style.transition =
            "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1), fill 0.8s cubic-bezier(0.4,0,0.2,1) 0.8s";
          path.style.strokeDashoffset = 0;
          path.style.fill = "#bebde2";
        });
      }, 300 + idx * 80);
    });

    const totalDelay = 300 + paths.length * 80 + 2000;
    setTimeout(() => {
      setOriginalLogoOpacity(0);
      setTimeout(() => setAltLogoOpacity(1), 800);
    }, totalDelay);
  }, []);

  return (
    <section
      id="home"
      className="bg-[#03012f] text-white min-h-[calc(100vh)] flex flex-col md:flex-row overflow-visible"
    >
      {/* LEFT: centered content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start m-4 sm:p-6 lg:p-10 rounded-[20px] bg-[#0e0b37]">
        <div className="relative w-full max-w-md">
          {/* original logo drawing */}
          <div
            ref={logoRef}
            className="w-full transition-all"
            style={{
              opacity: originalLogoOpacity,
              clipPath:
                originalLogoOpacity === 0
                  ? "inset(0 100% 0 0)"
                  : "inset(0 0 0 0)",
              transition: "opacity 800ms ease, clip-path 800ms ease",
            }}
          >
            <Logo
              className="w-full h-auto"
              style={{ strokeWidth: 1.5, fill: "#bebde2", stroke: "#bebde2" }}
              aria-hidden="true"
            />
          </div>
          {/* alt logo fade-in overlay */}
          <div
            ref={altLogoRef}
            className="absolute inset-0 w-full flex justify-center transition-all"
            style={{
              opacity: altLogoOpacity,
              clipPath: isMobile
                ? "none"
                : altLogoOpacity === 0
                ? "inset(0 0 0 100%)"
                : "inset(0 0 0 0)",
              transition: "opacity 800ms ease, clip-path 800ms ease",
              alignItems: isMobile ? "center" : "flex-end",
            }}
          >
            <LogoAlt
              className="w-full h-auto"
              style={{ strokeWidth: 1.5, fill: "#bebde2", stroke: "#bebde2" }}
              aria-hidden="true"
            />
             
          </div>
        </div>
        
        <p className="mt-2 text-xl md:text-2xl text-[#bebde2]">
          Web Designer & Developer
        </p>
      </div>

      {/* RIGHT: bottom-aligned About info (no heading) */}
      <div className="flex-1  flex flex-col justify-end text-[#bebde2] space-y-6 overflow-visible sm:p-6 lg:p-10  rounded-[20px] bg-[#0e0b37] m-4">
        {/* Intro paragraphs */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-[#bebde2]/80">
            A web designer and front-end developer based in Los Angeles,
            passionate about bold UI, clean code, and (probably) too much
            coffee. I build fast, immersive digital experiences with React,
            Next.js, and Tailwind CSS.
          </p>
          <p className="text-base sm:text-lg text-[#bebde2]/80">
            When I'm not refining pixels or designing seamless user flows,
            you'll catch me hiking Runyon Canyon, hanging with my cats,
            or diving into UX psychology.
          </p>
          <p className="text-base sm:text-lg text-[#bebde2]/80">
            Let's create something unforgettable.
          </p>
        </div>

        {/* Contact button */}
        <div>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#bebde2]/20 hover:bg-[#bebde2]/30 text-white font-medium rounded-full transition-all duration-300 border border-[#bebde2]/30 hover:border-[#bebde2]/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:rounded-[20px]"
          >
            Contact Me
          </a>
        </div>

        {/* Skills */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#bebde2]/10 text-xs sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#bebde2]/5"
            >
              <h4 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">
                {value}
              </h4>
              <p className="text-sm sm:text-base text-[#bebde2]/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
