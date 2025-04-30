import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNjAwMTY0MzEz&ixlib=rb-1.2.1&q=80&w=1080')`, backgroundColor: 'rgba(0, 0, 0, 0.7)', backgroundBlendMode: 'darken' }}
    >

      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Gohar Ramzan</h1>
        <h2 className="text-3xl md:text-4xl mb-4">
          <Typewriter
            words={['Web Developer', 'Frontend Expert', 'React Specialist']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </motion.section>
  );
};

export default Hero;
