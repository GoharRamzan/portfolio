import React from 'react';
import { motion } from 'framer-motion';
import gohar from '../assets/gohar.jpg'; // Update the path to your image

const About = () => {

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto p-2 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="md:w-2/4 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">About Me</h2>
          <p className="text-lg mb-4">
            I am a passionate web front-end developer with a keen eye for design and a strong background in creating
            dynamic and responsive web applications.
          </p>
          <p className="text-lg">
            I specialize in building interactive, user-friendly websites using modern technologies. I thrive on solving
            complex problems and continuously improving my skills to stay at the forefront of the industry.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={gohar}
            alt="About me"
            className="rounded-lg shadow-lg w-full md:h-[650px] h-[380px] "
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
