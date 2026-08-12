import React from 'react';
import { motion } from 'framer-motion';

// Assets Imports
import nutrack from '../assets/nut.PNG';
import hedgeplay from '../assets/hed.PNG';
import mystical from '../assets/mys.PNG';
import mmc from '../assets/mmc.PNG';
import nub from '../assets/nub.PNG';
import hire from '../assets/hire.PNG';

const projects = [
  {
    title: 'Nutrack',
    category: 'Web Application',
    description: 'A modern web platform designed for smart tracking and data visualization with seamless user experience.',
    image: nutrack,
    tags: ['React', 'Tailwind CSS', 'REST API', 'Node.js'],
    link: 'https://nutrack.nubitsoft.com/',
  },
  {
    title: 'Hedgeplay',
    category: 'Fintech / Platform',
    description: 'Interactive web platform built with dynamic components, offering high performance and responsive layout.',
    image: hedgeplay,
    tags: ['React', 'Express.js', 'Tailwind', 'MongoDB'],
    link: 'https://hedgeplay.com.pk/',
  },
  {
    title: 'Mystical Fragrance',
    category: 'E-Commerce Store',
    description: 'A premium luxury e-commerce experience for fragrance enthusiasts with seamless navigation and fast load times.',
    image: mystical,
    tags: ['E-Commerce', 'React / Modern UI', 'CSS3', 'JavaScript'],
    link: 'https://www.mysticalfragrance.com/',
  },
  {
    title: 'MMC (Lineup)',
    category: 'Corporate / Business',
    description: 'Sleek corporate portfolio site highlighting enterprise services with interactive UI and optimized performance.',
    image: mmc,
    tags: ['Full Stack', 'Tailwind CSS', 'API Integration'],
    link: 'https://lineup.pk/',
  },
  {
    title: 'Nubit Software',
    category: 'Agency / Software House',
    description: 'Official agency platform featuring high-impact hero sections, project showcases, and team highlights.',
    image: nub,
    tags: ['React', 'Framer Motion', 'Modern Web'],
    link: 'https://nubitsoft.com/',
  },
  {
    title: 'Hire Exams Help',
    category: 'Educational Service Platform',
    description: 'An online academic assistance portal designed for students, offering exam preparation support, course management, and seamless consultation booking.',
    image: hire,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Lead Form'],
    link: 'https://hireexamshelp.com/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden"
    >
      
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A showcase of full-stack web applications, e-commerce stores, and custom agency sites built with modern technologies.
          </p>
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-full text-[11px] font-mono text-cyan-400">
                    {project.category}
                  </div>
                </div>

                
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                 
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

             
              <div className="p-6 pt-0 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-transparent text-xs font-bold transition-all duration-300 group/btn"
                >
                  <span>Visit Live Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;