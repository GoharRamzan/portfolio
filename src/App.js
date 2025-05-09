import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;