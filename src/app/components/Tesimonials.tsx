'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: '/images/user-1.jpg',
    review:
      '“Loved the French roast. Perfectly balanced and rich. Will order again!”',
  },
  {
    name: 'James Wilson',
    image: '/images/user-2.jpg',
    review:
      '“Great espresso blend! Smooth and bold flavor. Fast shipping too!”',
  },
  {
    name: 'Michael Brown',
    image: '/images/user-3.jpg',
    review: '“Fantastic mocha flavor. Fresh and aromatic. Quick shipping!”',
  },
  {
    name: 'Emily Davis',
    image: '/images/user-4.jpg',
    review: '“Fantastic mocha flavor. Fresh and aromatic. Quick shipping!”',
  },
  {
    name: 'Olivia Garcia',
    image: '/images/user-5.jpg',
    review: '“Fantastic mocha flavor. Fresh and aromatic. Quick shipping!”',
  },
];

// Section heading fade-in animation
const fadeInHeading: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const Testimonials = () => {
  return (
    <section className="w-full py-18 2xl:py-[100px] bg-[#fdf6f7] flex items-center justify-center relative px-[5px]">
      <div className="container-custom text-center">
        {/* Heading with scroll animation */}
        <motion.div
          className="mb-[50px] 2xl:mb-[80px] group relative inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInHeading}
        >
          <h2 className="text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-[700] relative z-10">
            TESTIMONIALS
          </h2>
          <span className="absolute bottom-[-6px] left-1/2 h-[3px] w-8 bg-orange-400 transition-all duration-500 transform -translate-x-1/2 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="pb-6"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center px-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-full mb-5 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-700 max-w-xs">
                    {item.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            {/* Arrows */}
            <div className="swiper-button-prev !text-orange-500 !left-0">
              <FaChevronLeft size={28} />
            </div>
            <div className="swiper-button-next !text-orange-500 !right-0">
              <FaChevronRight size={28} />
            </div>
          </Swiper>
        </div>

        {/* Pagination Dots Container */}
        <div className="custom-pagination mt-8 flex justify-center items-center"></div>
      </div>

      {/* Global Style for Custom Pagination */}
      <style jsx global>{`
        .custom-bullet {
          background-color: #f2a33c;
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          border-radius: 9999px;
          opacity: 0.6;
          transition: all 0.3s ease-in-out;
        }

        .custom-bullet-active {
          width: 16px;
          height: 8px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
