'use client';

import React, { useState } from 'react';
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
  MdAccessTime,
  MdLanguage,
} from 'react-icons/md';
import { motion, Variants } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
} as Variants;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      alert('Data submitted!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="w-full py-16 bg-[#fdf6f7] flex items-center justify-center">
      <div className="container-custom px-[5px] text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-[700] relative z-10">
            CONTACT US
          </h2>
          <span className="absolute bottom-[-6px] left-1/2 h-[3px] w-8 bg-orange-400 transition-all duration-500 transform -translate-x-1/2 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8">
          {/* Left - Info */}
          <motion.div
            className="text-left flex-1 space-y-5 text-base text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            custom={1}
          >
            {/* All info blocks remain the same */}
            <div className="flex items-center gap-[10px] 2xl:gap-[5px]">
              <MdLocationOn className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">
                123 Campsite Avenue, Wilderness, CA 98765
              </span>
            </div>

            <div
              className="flex items-center gap-[10px] 2xl:gap-[5px] cursor-pointer"
              onClick={() => window.open('mailto:info@coffeeshopwebsite.com')}
            >
              <MdEmail className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">
                info@coffeeshopwebsite.com
              </span>
            </div>

            <div className="flex items-center gap-[10px] 2xl:gap-[5px]">
              <MdPhone className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">
                (123) 456-78909
              </span>
            </div>

            <div className="flex items-center gap-[10px] 2xl:gap-[5px]">
              <MdAccessTime className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">
                Mon - Fri: 9:00 AM – 5:00 PM
              </span>
            </div>

            <div className="flex items-center gap-[10px] 2xl:gap-[5px]">
              <MdAccessTime className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">
                Saturday: 10:00 AM – 3:00 PM
              </span>
            </div>

            <div className="flex items-center gap-[10px] 2xl:gap-[5px]">
              <MdAccessTime className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">Sunday: Closed</span>
            </div>

            <div
              className="flex items-center gap-[10px] 2xl:gap-[5px] cursor-pointer"
              onClick={() =>
                window.open('https://www.codingnepalweb.com', '_blank')
              }
            >
              <MdLanguage className="text-[30px] text-black mt-1" />
              <span className="text-[15px] xl:text-[19px]">
                www.codingnepalweb.com
              </span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="flex-1 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            custom={2}
          >
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none lg:h-[150px] xl:h-[180px] ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="px-6 py-2 xl:py-3 bg-[#3c0d0c] text-white rounded-full w-[120px] xl:w-[180px] hover:opacity-90 transition"
            >
              Submit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
