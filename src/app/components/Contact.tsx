'use client';

import React, { useState } from 'react';
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
  MdAccessTime,
  MdLanguage,
} from 'react-icons/md';

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
    console.log(`${name}:`, value);
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
      console.log('Submitted Data:', formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section className="w-full py-16 bg-[#fdf6f7] flex items-center justify-center">
      <div className="w-full px-4 xl:w-[1200px] 2xl:w-[1500px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 group relative inline-block mx-auto">
          <h2 className="text-3xl font-extrabold relative z-10">CONTACT US</h2>
          <span className="absolute bottom-[-6px] left-1/2 h-[3px] w-8 bg-orange-400 transition-all duration-500 transform -translate-x-1/2 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8">
          {/* Left - Info */}
          <div className="text-left flex-1 space-y-5 text-base text-black">
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-2xl text-black mt-1" />
              <span>123 Campsite Avenue, Wilderness, CA 98765</span>
            </div>

            <div
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => window.open('mailto:info@coffeeshopwebsite.com')}
            >
              <MdEmail className="text-2xl text-black mt-1" />
              <span>info@coffeeshopwebsite.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MdPhone className="text-2xl text-black mt-1" />
              <span>(123) 456-78909</span>
            </div>

            <div className="flex items-start gap-3">
              <MdAccessTime className="text-2xl text-black mt-1" />
              <span>Monday - Friday: 9:00 AM – 5:00 PM</span>
            </div>

            <div className="flex items-start gap-3">
              <MdAccessTime className="text-2xl text-black mt-1" />
              <span>Saturday: 10:00 AM – 3:00 PM</span>
            </div>

            <div className="flex items-start gap-3">
              <MdAccessTime className="text-2xl text-black mt-1" />
              <span>Sunday: Closed</span>
            </div>

            <div
              className="flex items-start gap-3 cursor-pointer"
              onClick={() =>
                window.open('https://www.codingnepalweb.com', '_blank')
              }
            >
              <MdLanguage className="text-2xl text-black mt-1" />
              <span>www.codingnepalweb.com</span>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex-1 space-y-4">
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
              className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#3c0d0c] text-white rounded-full w-[120px] hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
