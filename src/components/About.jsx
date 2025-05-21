const About = () => {
  return (
    <section id="about" className="bg-[#03012f] text-[#bebde2] py-16 sm:py-20 px-4 md:px-8">
      
        
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
      
    </section>
  );
};

export default About;