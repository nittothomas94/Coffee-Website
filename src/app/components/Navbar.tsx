'use client';

import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Menu', to: 'menu' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#3c0d0c] text-white w-full fixed top-0 z-50 shadow-md">
      <div className="container-custom px-[10px] flex justify-between items-center md:h-[80px] xl:h-[100px] h-[70px] ">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <span className="text-2xl sm:text-[25px] md:text-[30px] xl:text-[35px] 2xl:text-[40px]">
            ☕
          </span>
          <span className="text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-[700]">
            Coffee
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-lg font-medium">
          {navItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer group relative inline-block"
              activeClass="text-orange-400"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute left-1/2 bottom-[-4px] h-[3px] w-4 bg-orange-400 transition-all duration-500 group-hover:left-0 group-hover:w-full transform -translate-x-1/2 group-hover:translate-x-0" />
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] bg-[#3c0d0c] text-white z-40 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-6 gap-6 text-lg font-medium pt-24">
          {navItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer group relative inline-block"
              activeClass="text-orange-400"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="hidden lg:block absolute left-1/2 bottom-[-4px] h-[3px] w-4 bg-orange-400 transition-all duration-500 group-hover:left-0 group-hover:w-full transform -translate-x-1/2 group-hover:translate-x-0" />
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
