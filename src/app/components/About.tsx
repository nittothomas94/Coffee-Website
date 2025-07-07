'use client';

import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';

// Variant for large screens (slide in from right + fade in)
const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number): TargetAndTransition => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4, // Reduced delay for better UX
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
} as Variants;

// Variant for small screens (only fade in)
const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
} as Variants;

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLargeScreen(window.innerWidth >= 1024);
    }
  }, []);

  const selectedVariant = isLargeScreen ? fadeInRightVariant : fadeInOnly;

  return (
    <section id="about" className="w-full bg-[#f7f3f1] py-20">
      <div className="container-custom flex flex-col xl:flex-row items-center gap-10 px-[5px]">
        {/* Left Side: Image */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <motion.div
            className="w-[280px] h-[280px] xl:w-[380px] xl:h-[380px] 2xl:w-[380px] 2xl:h-[380px] rounded-full overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <Image
              src="/images/about-image.jpg"
              alt="About us"
              width={360}
              height={360}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <motion.div
          className="w-full xl:w-1/2 text-center xl:text-left py-[20px] xl:py-[30px] xl:flex flex-col xl:gap-[15px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <motion.h2
            className="text-[28px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[35px] 2xl:text-[45px] font-extrabold text-[#2c0d0c] relative inline-block group"
            variants={selectedVariant}
            custom={0}
          >
            About Us
            <span className="block h-1 w-12 bg-[#f5a623] mt-2 mx-auto xl:mx-0 group-hover:w-full transition-all duration-300"></span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="w-full text-[#4c3a3a] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] leading-relaxed mt-6"
            variants={selectedVariant}
            custom={1}
          >
            At Coffee House in Berndorf, Germany, we pride ourselves on being a
            go-to destination for coffee lovers and conversation seekers alike.
            We're dedicated to providing an exceptional coffee experience in a
            cozy and inviting atmosphere, where guests can relax, unwind, and
            enjoy their time in comfort.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-5 justify-center xl:justify-start mt-6 text-xl text-[#2c0d0c]"
            variants={selectedVariant}
            custom={2}
          >
            <FaFacebookF className="cursor-pointer hover:text-[#f5a623] transition-colors" />
            <FaInstagram className="cursor-pointer hover:text-[#f5a623] transition-colors" />
            <FaXTwitter className="cursor-pointer hover:text-[#f5a623] transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
