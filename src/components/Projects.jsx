import React from 'react';
import { motion } from 'framer-motion';
const projects = [

  {
    title: 'Project One',
    description: 'A description of the project goes here.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGdyYXBoaWNzJTIwZGVzaWdufGVufDB8fHx8MTYwMDE2NDMxMw&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A description of the project goes here.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2dyYW1tZXJ8ZW58MHx8fHwxNjAwMTY0MzEz&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#'
  },
  {
    title: 'Project One',
    description: 'A description of the project goes here.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGdyYXBoaWNzJTIwZGVzaWdufGVufDB8fHx8MTYwMDE2NDMxMw&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A description of the project goes here.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2dyYW1tZXJ8ZW58MHx8fHwxNjAwMTY0MzEz&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#'
  },
  {
    title: 'Project One',
    description: 'A description of the project goes here.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGdyYXBoaWNzJTIwZGVzaWdufGVufDB8fHx8MTYwMDE2NDMxMw&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A description of the project goes here.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2dyYW1tZXJ8ZW58MHx8fHwxNjAwMTY0MzEz&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#'
  },
  // Add more projects as needed
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
