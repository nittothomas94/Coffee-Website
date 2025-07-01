import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Tesimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Container;
