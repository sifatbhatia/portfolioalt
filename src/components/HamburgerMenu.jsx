import React, { useState } from "react";


const HamburgerMenu = ({ menuItems = [], activeSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button
        className={`flex items-center justify-center w-14 h-14 border-2 border-[#d1cdc2] bg-black/50 backdrop-blur-lg hover:bg-black/20 transition-all ease-in-out duration-100 focus:outline-none group shadow-lg ${open ? 'rounded-[32%] scale-110' : 'rounded-full'} `}
        style={{ boxShadow: "0 2px 24px 0 rgba(30,30,60,0.15)" }}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative flex flex-col items-center justify-center w-8 h-8">
          {/* Circle outline */}
          <span className="absolute inset-0 rounded-full pointer-events-none" />
          {/* Hamburger lines with cross animation */}
          <span
            className={`block w-6 h-0.5 bg-[#d1cdc2] mb-1 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#d1cdc2] mb-1 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#d1cdc2] rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}
          />
        </span>
      </button>
      {/* Glassy Blur Menu */}
      <div className={`absolute right-0 bottom-16 w-56 rounded-2xl bg-white/20 backdrop-blur-2xl border border-[#d1cdc2]/30 shadow-2xl p-6 flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'}`} style={{zIndex: 100}}>
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={`text-lg font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${activeSection === item.id ? 'bg-[#d1cdc2]/50 text-[#18181b]' : 'text-[#030a1f] hover:bg-[#d1cdc2]/30 hover:text-[#18181b]'}`}
            onClick={() => setOpen(false)}
            aria-label={`Navigate to ${item.label} section`}
          >
            {item.icon && (
              <img src={item.icon} alt={item.label + ' icon'} className="w-5 h-5 mr-2 inline-block align-middle" />
            )}
            <span className="align-middle">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
