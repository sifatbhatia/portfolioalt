import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef(null);
  
  // Check if footer is in view
  const inView = useInView(footerRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, [inView]);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: '✨ Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ email: '', name: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: '❌ Something went wrong. Please try again.',
      });
    }

    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <motion.footer 
      ref={footerRef}
      initial={{ backgroundColor: '#030a1f' }}
      animate={{ 
        backgroundColor: isInView ? '#0c1a3d' : '#030a1f',
        transition: { duration: 0.8, ease: 'easeInOut' }
      }}
      className="text-[#bebde2] py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div id="contact" className="space-y-8">
            <h2 className="text-5xl md:text-6xl">Drop me a line</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2 relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-full bg-[#bebde2]/10 text-[#bebde2] placeholder-[#bebde2]/50 focus:outline-none focus:ring-2 focus:ring-[#bebde2]/20 transition-all invalid:ring-2 invalid:ring-[#bebde2]/30"
                    aria-label="Your name"
                    aria-required="true"
                    required
                    onInvalid={(e) => {
                      e.target.setCustomValidity('');
                      if (e.target.validity.valueMissing) {
                        e.target.setCustomValidity('Please enter your name');
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                  <div className="absolute -bottom-6 left-6 text-sm text-[#bebde2]/70 opacity-0 transition-opacity peer-invalid:opacity-100"></div>
                </div>
                <div className="space-y-2 relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-full bg-[#bebde2]/10 text-[#bebde2] placeholder-[#bebde2]/50 focus:outline-none focus:ring-2 focus:ring-[#bebde2]/20 transition-all invalid:ring-2 invalid:ring-[#bebde2]/30"
                    aria-label="Your email address"
                    aria-required="true"
                    required
                    onInvalid={(e) => {
                      e.target.setCustomValidity('');
                      if (e.target.validity.valueMissing) {
                        e.target.setCustomValidity('Please enter your email');
                      } else if (e.target.validity.typeMismatch) {
                        e.target.setCustomValidity('Please enter a valid email');
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                  <div className="absolute -bottom-6 left-6 text-sm text-[#bebde2]/70 opacity-0 transition-opacity peer-invalid:opacity-100"></div>
                </div>
                <div className="space-y-2 relative">
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-3xl bg-[#bebde2]/10 text-[#bebde2] placeholder-[#bebde2]/50 focus:outline-none focus:ring-2 focus:ring-[#bebde2]/20 transition-all resize-none invalid:ring-2 invalid:ring-[#bebde2]/30"
                    aria-label="Your message"
                    aria-required="true"
                    required
                    onInvalid={(e) => {
                      e.target.setCustomValidity('');
                      if (e.target.validity.valueMissing) {
                        e.target.setCustomValidity('Please enter your message');
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                  <div className="absolute -bottom-6 left-6 text-sm text-[#bebde2]/70 opacity-0 transition-opacity peer-invalid:opacity-100"></div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="px-8 py-4 rounded-full bg-[#bebde2]/10 text-[#bebde2] hover:bg-[#bebde2]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <span className="animate-pulse">Sending</span>
                      <span className="animate-bounce">...</span>
                    </>
                  ) : 'Send Message'}
                </button>
                
                {status.message && (
                  <div 
                    className={`flex-1 text-sm px-6 py-4 rounded-full transition-all ${
                      status.type === 'success' ? 'bg-green-500/10 text-green-400' : 
                      status.type === 'error' ? 'bg-red-500/10 text-red-400' : 
                      'bg-[#bebde2]/10'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right side */}
          <div className="space-y-8">
            <nav className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Navigation</h3>
                <div className="space-y-3">
                  <a href="#home" className="block hover:text-[#bebde2]/70 transition-colors">Home</a>
                  <a href="#about" className="block hover:text-[#bebde2]/70 transition-colors">About</a>
                  <a href="#projects" className="block hover:text-[#bebde2]/70 transition-colors">Projects</a>
                  <a href="#contact" className="block hover:text-[#bebde2]/70 transition-colors">Contact</a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Social</h3>
                <div className="space-y-3">
                  <a href="mailto:bsifat@gmail.com" target="_blank" rel="noopener noreferrer" className="block hover:text-[#bebde2]/70 transition-colors">[ EMAIL ]</a>
                  <a href="https://www.instagram.com/siftion" target="_blank" rel="noopener noreferrer" className="block hover:text-[#bebde2]/70 transition-colors">[ INSTAGRAM ]</a>
                  <a href="https://www.linkedin.com/in/siftion" target="_blank" rel="noopener noreferrer" className="block hover:text-[#bebde2]/70 transition-colors">[ LINKEDIN ]</a>
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="block hover:text-[#d1cdc2]/70 transition-colors">[ BEHANCE ]</a> */}
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom section with logo */}
        <div className="mt-40 flex flex-col md:flex-row justify-between items-center">
          <img src="/logo.svg" alt="Emotion Logo" className="footer-logo h-24 w-auto mb-8 md:mb-0" />
          <div className="flex flex-wrap gap-4 items-center text-sm text-[#bebde2]/70">
            <span>©2025. All rights reserved</span>
            {/* <a href="#" className="hover:text-[#d1cdc2] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#d1cdc2] transition-colors">Privacy Policy</a> */}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 