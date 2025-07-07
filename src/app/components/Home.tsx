'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

// Animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    ease: 'easeOut' as const,
  },
};

const delayedChildVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="min-h-screen bg-[#3c0d0c] text-white flex items-center justify-center px-[5px] pt-[100px] lg:pt-0">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center lg:px-[30px]">
        {/* Left Text Section */}
        <motion.div
          {...fadeInUp}
          className="space-y-6 flex flex-col items-center lg:items-start md:gap-[10px] lg:gap-[5px] md:pt-[25px] lg:pt-[10px]"
        >
          <h2
            className={`${pacifico.className} text-[#ffa227] text-3xl xl:text-4xl`}
          >
            Best Coffee
          </h2>
          <h1 className="w-full text-[30px] md:text-[35px] lg:text-[40px] xl:text-6xl font-bold leading-tight text-center lg:text-start">
            Make your day great <br className="md:hidden lg:hidden" /> with our
            <br className="hidden md:block lg:hidden" /> special
            <br className="md:hidden lg:hidden" />
            coffee!
          </h1>
          <p className="text-[15px] md:text-[19px] text-center lg:text-start lg:text-[20px] xl:text-xl text-gray-200">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>
          <motion.div className="flex gap-4">
            <motion.div
              variants={delayedChildVariant}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <button className="bg-[#ffa227] text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                Order Now
              </button>
            </motion.div>

            <motion.div
              variants={delayedChildVariant}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-full flex justify-center py-[30px] pb-[50px]"
        >
          <motion.div animate={controls}>
            <Image
              src="/images/coffee-hero-section.png"
              alt="coffee cup"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
