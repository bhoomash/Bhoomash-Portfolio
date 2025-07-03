import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Palette, Database } from 'lucide-react';

import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Home: React.FC = () => {
const services = [
  {
    icon: <Code size={24} />,
    title: 'Full-Stack Web Development',
    description: 'Crafting dynamic, mobile-responsive web applications using React, Node.js, and modern JavaScript frameworks.'
  },
  {
    icon: <Server size={24} />,
    title: 'Scalable Backend Systems',
    description: 'Developing fast, secure, and scalable backend APIs with Node.js, Express, and MongoDB.'
  },
  {
    icon: <Palette size={24} />,
    title: 'Creative UI/UX Design',
    description: 'Designing visually compelling, intuitive interfaces with a strong focus on accessibility and seamless user experience.'
  },
  {
    icon: <Database size={24} />,
    title: 'Smart Database Architecture',
    description: 'Building efficient, secure, and optimized data models using both SQL and NoSQL technologies.'
  }
];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-24 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Full Stack Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bhoomash</span>
                <br />
                I build things for the web
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a passionate Fullstack developer focused on creating intuitive and dynamic user experiences. 
                Specializing in modern web technologies to bring creative ideas to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/projects" 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
                  >
                    View Projects
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/About" 
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors backdrop-blur-sm"
                  >
                    About me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
           <motion.div
className="relative block"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
   <div className="relative w-80 h-80 mx-auto">
      {/* Decorative border */}
      <div className="absolute -left-4 -top-4 w-full h-full border- border-none-600 dark:border-blue-400 rounded-full transform -rotate-2" />
      
      {/* Profile image */}
      <img 
        src="/bhoomash bprofile.png" 
        alt="Profile of Bhoomash" 
        className="w-full h-full object-cover rounded-full relative z-10 shadow-lg"
      />
    </div>
</motion.div>

          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="What I Do" 
            subtitle="I provide end-to-end solutions for web and mobile applications"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl hover:shadow-md transition-all">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionHeading 
              title="Featured Projects" 
              subtitle="Some of my recent work"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0"
            >
              <Link 
                to="/projects" 
                className="flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Next Project?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Let's collaborate to create something amazing together. I'm currently available for freelance work and new opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;