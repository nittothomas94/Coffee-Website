'use client';

import React from 'react';
import Image from 'next/image';

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

const Menu = () => {
  return (
    <section className="w-full px-4 py-12 bg-[#1a1a1a] text-white">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold relative inline-block group">
          OUR MENU
          <span className="block h-[3px] bg-orange-400 w-8 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>

      {/* Grid Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
