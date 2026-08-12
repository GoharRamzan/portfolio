import React from 'react';
import { motion } from 'framer-motion';
import gohar from '../assets/gohar.jpg';

const stats = [
  { label: 'Full Stack Projects', value: '15+' },
  { label: 'APIs Designed', value: '30+' },
  { label: 'Client Satisfaction', value: '100%' },
];

const highlights = [
  {
    title: 'Frontend Mastery',
    desc: 'Responsive, highly dynamic React interfaces with modern state management.',
  },
  {
    title: 'Robust Backend APIs',
    desc: 'Secure RESTful APIs built with Express.js, Node.js, and JWT authentication.',
  },
  {
    title: 'Database Architecture',
    desc: 'Scalable MongoDB data schemas and optimized database queries.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <span>// Full Stack Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-2 shadow-2xl">
                <img
                  src={gohar}
                  alt="Gohar Ramzan"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top rounded-xl filter grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="absolute -bottom-6 -right-2 sm:right-4 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg">
                  MERN
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Role</div>
                  <div className="text-sm font-bold text-slate-100">Full Stack Engineer</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a <strong className="text-cyan-400 font-semibold">Full Stack (MERN) Developer</strong> specializing in building complete web products from scratch — from database design and backend APIs to interactive frontend UIs.
              </p>
              <p className="text-slate-400 text-base">
                Whether it's building complex React/Next.js interfaces, implementing secure Node.js authentication flows, or optimizing MongoDB queries, I ensure high performance and clean code across the entire stack.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <h3 className="text-sm font-bold text-slate-100 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;