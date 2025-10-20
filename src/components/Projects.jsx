import React from 'react';
import { motion } from 'framer-motion';
import nutrack from '../assets/nut.PNG'
import hedgeplay from '../assets/hed.PNG'
import mystical from '../assets/mys.PNG'
import mmc from '../assets/mmc.PNG'
import nub from '../assets/nub.PNG'
const projects = [

  {
    title: 'Nutrack',
    description: 'A description of the project goes here.',
    image: nutrack,
    link: 'https://nutrack.nubitsoft.com/'
  },
  {
    title: 'Hedgeplay',
    description: 'A description of the project goes here.',
    image: hedgeplay,
    link: 'https://hedgeplay.com.pk/'
  },
  {
    title: 'Mystical Fragrance',
    description: 'A description of the project goes here.',
    image: mystical,
    link: 'https://www.mysticalfragrance.com/'
  },
  {
    title: 'MMC',
    description: 'A description of the project goes here.',
    image: mmc,
    link: 'https://lineup.pk/'
  },
  {
    title: 'Nubit Software',
    description: 'A description of the project goes here.',
    image: nub,
    link: 'https://nubitsoft.com/'
  },

];


const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-gray-900 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-teal-400 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
