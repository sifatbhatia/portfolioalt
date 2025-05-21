const About = () => {
  return (
    <section id="about" className="bg-[#03012f] text-[#bebde2] py-16 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 sm:mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left side - Text content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-[#bebde2]/80">
              A web designer and front-end developer based in Los Angeles, passionate about bold UI, clean code, 
              and (probably) too much coffee. I build fast, immersive digital experiences with React, Next.js, 
              and Tailwind CSS.
            </p>
            <p className="text-base sm:text-lg text-[#bebde2]/80">
              When I'm not refining pixels or designing seamless user flows, you'll catch me hiking Runyon Canyon, 
              hanging with my cats, or diving into UX psychology.
            </p>
            <p className="text-base sm:text-lg text-[#bebde2]/80">
              Let's create something unforgettable.
            </p>
            <div>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-[#bebde2]/20 hover:bg-[#bebde2]/30 text-white font-medium rounded-full transition-all duration-300 border border-[#bebde2]/30 hover:border-[#bebde2]/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:rounded-[20px]"
              >
                Contact Me
              </a>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'HTML/CSS', 'Responsive Design',
                    'Web Performance', 'Accessibility', 'Git'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#bebde2]/10 text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Stats or additional info */}
          <div className="space-y-6 sm:space-y-8 mt-4 sm:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#bebde2]/5">
                <h4 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">5+</h4>
                <p className="text-sm sm:text-base text-[#bebde2]/70">Years Experience</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#bebde2]/5">
                <h4 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">15+</h4>
                <p className="text-sm sm:text-base text-[#bebde2]/70">Projects Completed</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#bebde2]/5">
                <h4 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">100%</h4>
                <p className="text-sm sm:text-base text-[#bebde2]/70">Client Satisfaction</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#bebde2]/5">
                <h4 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">24/7</h4>
                <p className="text-sm sm:text-base text-[#bebde2]/70">Support</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured In / Press Section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 sm:mb-8">Featured In</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* VoyageLA Interview */}
            <a 
              href="https://voyagela.com/interview/meet-sifat-bhatia-of-los-angeles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-xl bg-[#bebde2]/5 hover:bg-[#bebde2]/10 transition-all duration-300 border border-[#bebde2]/10"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#bebde2]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">✨</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold group-hover:text-white transition-colors">VoyageLA Interview</h4>
                  <p className="text-sm sm:text-base text-[#bebde2]/70 mt-1">Meet Sifat Bhatia of Los Angeles</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#bebde2]/60 flex items-center group-hover:text-[#bebde2]/80 transition-colors">
                <span>Read Article</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
            
            {/* ShoutoutLA Interview */}
            <a 
              href="https://shoutoutla.com/meet-sifat-bhatia-web-designer-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-xl bg-[#bebde2]/5 hover:bg-[#bebde2]/10 transition-all duration-300 border border-[#bebde2]/10"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#bebde2]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">🎙️</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold group-hover:text-white transition-colors">ShoutoutLA Interview</h4>
                  <p className="text-sm sm:text-base text-[#bebde2]/70 mt-1">Meet Sifat Bhatia: Web Designer & Developer</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#bebde2]/60 flex items-center group-hover:text-[#bebde2]/80 transition-colors">
                <span>Read Article</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;