'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white text-sm py-4 px-4">
      <div className="w-full max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">© 2024 Coffee Shop</div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-6">
          <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
          <FaInstagram className="hover:text-orange-400 cursor-pointer" />
          <FaXTwitter className="hover:text-orange-400 cursor-pointer" />
        </div>

        {/* Right: Policies */}
        <div className="flex items-center gap-2 text-center md:text-right">
          <a
            href="#"
            className="text-orange-400 hover:underline transition-colors duration-200"
          >
            Privacy policy
          </a>
          <span className="text-white">•</span>
          <a
            href="#"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Refund policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
