import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';

const Container = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Menu />
      {/* <Gallery /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Container;
