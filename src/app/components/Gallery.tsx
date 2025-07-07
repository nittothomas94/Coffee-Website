'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Fade-in animation for heading
const fadeInHeading: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

// Grid container with staggered children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

// Each card animation
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
];

const Gallery = () => {
  return (
    <section className="w-full py-16 xl:py-[90px] 2xl:py-[100px] bg-white">
      <div className="container-custom mx-auto text-center">
        {/* Heading */}
        <motion.div
          className="mb-[50px] xl:mb-[60px] group relative inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInHeading}
        >
          <h2 className="text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-[700] relative z-10">
            GALLERY
          </h2>
          <span className="absolute bottom-[-6px] left-1/2 h-[3px] w-8 bg-orange-400 transition-all duration-500 transform -translate-x-1/2 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
        </motion.div>

        {/* Image Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-7 2xl:gap-9"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg"
              variants={cardVariant}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
