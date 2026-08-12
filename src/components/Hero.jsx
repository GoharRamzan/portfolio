import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 bg-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Full Stack Developer
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-100">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                Gohar Ramzan
              </span>
            </h1>

            <div className="text-xl sm:text-3xl font-medium text-slate-300 h-12 flex items-center gap-2">
              <span>I engineer</span>
              <span className="text-cyan-400 font-mono font-semibold">
                <Typewriter
                  words={[
                    'Full Stack Apps',
                    'RESTful & GraphQL APIs',
                    'Scalable Node.js Backends',
                    'Dynamic React & Next UIs',
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              </span>
            </div>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Architecting end-to-end web applications with MongoDB, Express.js, React, and Node.js. Combining robust server-side logic with fast, modern frontend interfaces.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Explore Full Stack Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm transition-all cursor-pointer"
            >
              Contact Me
            </Link>
          </div>

          <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-slate-500">Full Stack:</span>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'REST API'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 w-full"
        >
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-cyan-950/50 overflow-hidden font-mono">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-400">server.js</span>
              <div className="w-12" />
            </div>

            <div className="p-5 text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed overflow-x-auto">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-300">stack</span> = &#123;
              </div>

              <div className="pl-4">
                <span className="text-cyan-400">frontend:</span>{' '}
                <span className="text-emerald-300">'React.js / Tailwind CSS'</span>,
              </div>

              <div className="pl-4">
                <span className="text-cyan-400">backend:</span>{' '}
                <span className="text-emerald-300">'Node.js / Express.js'</span>,
              </div>

              <div className="pl-4">
                <span className="text-cyan-400">database:</span>{' '}
                <span className="text-emerald-300">'MongoDB / Mongoose'</span>,
              </div>

              <div className="pl-4">
                <span className="text-cyan-400">architecture:</span>{' '}
                <span className="text-emerald-300">'REST API & MVC'</span>,
              </div>

              <div className="pl-4">
                <span className="text-cyan-400">status:</span>{' '}
                <span className="text-blue-400">'Ready for Deployment'</span>
              </div>

              <div>&#125;;</div>

              <div className="pt-2 text-slate-500">
                <span className="text-emerald-400">⚡</span> MongoDB Connected | Server running on port 5000...
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;