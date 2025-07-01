'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="w-full bg-[#f7f3f1] py-16">
      <div className="mx-auto px-4 xl:w-[1200px] 2xl:w-[1500px] flex flex-col xl:flex-row items-center gap-10">
        {/* Left Side: Image */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <div className="w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] rounded-full overflow-hidden">
            <Image
              src="/images/about-image.jpg"
              alt="About us"
              width={360}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full xl:w-1/2 text-center xl:text-left">
          {/* Title */}
          <h2 className="text-2xl xl:text-3xl font-extrabold text-[#2c0d0c] relative inline-block group">
            About Us
            <span className="block h-1 w-12 bg-[#f5a623] mt-2 mx-auto xl:mx-0 group-hover:w-full transition-all duration-300"></span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#4c3a3a] text-base xl:text-lg leading-relaxed mt-6">
            At Coffee House in Berndorf, Germany, we pride ourselves on being a
            go-to destination for coffee lovers and conversation seekers alike.
            We're dedicated to providing an exceptional coffee experience in a
            cozy and inviting atmosphere, where guests can relax, unwind, and
            enjoy their time in comfort.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center xl:justify-start mt-6 text-xl text-[#2c0d0c]">
            <FaFacebookF className="cursor-pointer hover:text-[#f5a623] transition-colors" />
            <FaInstagram className="cursor-pointer hover:text-[#f5a623] transition-colors" />
            <FaXTwitter className="cursor-pointer hover:text-[#f5a623] transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
