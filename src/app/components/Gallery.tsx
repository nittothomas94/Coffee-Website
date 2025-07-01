'use client';

import React from 'react';
import Image from 'next/image';

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
    <section className="w-full py-16 bg-white flex items-center justify-center">
      <div className="w-full px-4 xl:w-[1200px] 2xl:w-[1500px] mx-auto text-center">
        {/* Heading */}
        <div className="mb-10 group relative inline-block">
          <h2 className="text-3xl font-extrabold relative z-10">GALLERY</h2>
          <span className="absolute bottom-[-6px] left-1/2 h-[3px] w-8 bg-orange-400 transition-all duration-500 transform -translate-x-1/2 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <div className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
