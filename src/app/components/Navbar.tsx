'use client';

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
  return (
    <div className="bg-[#3c0d0c] text-white w-full fixed top-0 z-50 shadow-md">
      <div className="flex justify-between items-center xl:h-[100px] px-6 xl:px-12 2xl:px-24 xl:w-[1200px] max-w-[1500px] mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Image src={logo} alt="Coffee Logo" width={40} height={40} /> */}
          <span className="text-2xl">☕</span>
          <span className="text-xl font-semibold">Coffee</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex gap-8 text-lg font-medium">
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
      </div>
    </div>
  );
};

export default Navbar;
