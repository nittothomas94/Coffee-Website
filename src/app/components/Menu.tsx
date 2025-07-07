'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const menuItems = [
  {
    title: 'Hot Beverages',
    description:
      'Wide range of Steaming hot coffee to make you fresh and light.',
    image: '/images/hot-beverages.png',
  },
  {
    title: 'Cold Beverages',
    description: 'Creamy and frothy cold coffee to make you cool.',
    image: '/images/cold-beverages.png',
  },
  {
    title: 'Refreshment',
    description: 'Fruit and icy refreshing drink to make feel refresh.',
    image: '/images/refreshment.png',
  },
  {
    title: 'Special Combos',
    description: 'Your favorite eating and drinking combations.',
    image: '/images/special-combo.png',
  },
  {
    title: 'Dessert',
    description: 'Satiate your palate and take you on a culinary treat.',
    image: '/images/desserts.png',
  },
  {
    title: 'Burger & French Fries',
    description: 'Quick bites to satisfy your small size hunger.',
    image: '/images/burger-frenchfries.png',
  },
];

// Heading animation
const fadeInHeading: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

// Stagger container
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Card animation
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const Menu = () => {
  return (
    <section className="w-full py-18 2xl:py-[100px] px-[5px] bg-[#1a1a1a] text-white">
      {/* Section Header */}
      <motion.div
        className="text-center mb-[60px] sm:mb-[60px] md:mb-[60px] lg:mb-[70px] xl:mb-[80px] 2xl:mb-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInHeading}
      >
        <h2 className="text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-[700] relative inline-block group">
          OUR MENU
          <span className="block h-[3px] bg-orange-400 w-8 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </motion.div>

      {/* Grid with scroll animation */}
      <motion.div
        className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-[40px] 2xl:gap-[50px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-between text-center p-4"
            variants={cardVariant}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="mb-4 object-contain"
            />
            <div className="flex flex-col items-center 2xl:gap-2">
              <h3 className="text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-2xl font-semibold mb-[3px]">
                {item.title}
              </h3>
              <p className="w-full xl:w-[90%] 2xl:w-[80%] text-[14px] sm:text-[15px] md:text-[15px] xl:text-[18px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Menu;
