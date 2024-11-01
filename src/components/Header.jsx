import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white fixed top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider text-teal-400">Gohar Muhammad</h1>
        <button 
          className="md:hidden text-teal-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white shadow-lg mt-2">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
