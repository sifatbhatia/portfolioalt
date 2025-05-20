import React from 'react';
import menuIcon from '../assets/menu_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import mailIcon from '../assets/mail_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import homeIcon from '../assets/home_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';
import casesIcon from '../assets/cases_48dp_E3E3E3_FILL0_wght100_GRAD200_opsz48.svg';

const navLinks = [
  { name: 'Home', href: '#home', icon: homeIcon },
  { name: 'Projects', href: '#projects', icon: casesIcon },
  { name: 'Contact', href: '#contact', icon: mailIcon },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-[#18181b] py-2 px-2 flex justify-center shadow-md z-50">
    <ul className="flex gap-8 items-center overflow-x-auto whitespace-nowrap sm:gap-8 gap-4 sm:text-lg text-base sm:px-0 px-2 w-full justify-center ">
      {navLinks.map((link) => (
        <li key={link.name} className="flex-shrink-0">
          <a href={link.href} className="flex items-center gap-2 text-[#e3e3e3] hover:text-white font-medium transition-colors sm:text-lg text-base">
            <img src={link.icon} alt={link.name + ' icon'} className="w-6 h-6 sm:w-6 sm:h-6 w-5 h-5" />
            <span className="hidden xs:inline sm:inline">{link.name}</span>
            <span className="inline sm:hidden xs:hidden">{link.name.slice(0, 3)}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar; 