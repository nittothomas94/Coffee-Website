'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

const Home = () => {
  return (
    <section className="min-h-screen bg-[#3c0d0c] text-white flex items-center justify-center px-6 xl:px-24">
      <div className="grid xl:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2
            className={`${pacifico.className} text-[#ffa227] text-3xl xl:text-4xl`}
          >
            Best Coffee
          </h2>
          <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
            Make your day great with our special coffee!
          </h1>
          <p className="text-lg xl:text-xl text-gray-200">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#ffa227] text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Order Now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/images/coffee-hero-section.png"
            alt="coffee cup"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
