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
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Profile Image - First on mobile */}
            <motion.div
              className="relative order-1 md:order-2 w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                {/* Decorative border */}
                <div className="absolute -left-2 -top-2 sm:-left-3 sm:-top-3 w-full h-full border-2 border-blue-600 dark:border-blue-400 rounded-full transform -rotate-2" />
                
                {/* Profile image */}
                <img 
                  src="/bhoomash bprofile.png" 
                  alt="Bhoomash - Full Stack Developer" 
                  className="w-full h-full object-cover rounded-full relative z-10 shadow-lg"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 dark:bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

            {/* Content - Second on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 md:order-1 text-center md:text-left w-full"
            >
              <div className="backdrop-blur-md bg-white/20 dark:bg-gray-900/20 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 dark:border-gray-700/20">
                <span className="inline-block px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4">
                  Full Stack Developer
                </span>
                
                <h1 className="font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bhoomash</span>
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 text-gray-700 dark:text-gray-300">
                    I build things for the web
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                  I'm a passionate Fullstack developer focused on creating intuitive and dynamic user experiences. 
                  Specializing in modern web technologies to bring creative ideas to life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm mx-auto md:mx-0">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Link 
                      to="/projects" 
                      className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      View Projects
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Link 
                      to="/about" 
                      className="w-full px-6 py-3.5 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-200 text-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 flex items-center justify-center"
                    >
                      About me
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="What I Do" 
            subtitle="I provide end-to-end solutions for web and mobile applications"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="h-full p-3 sm:p-4 md:p-5 lg:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 flex flex-col">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3 mx-auto">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 leading-tight text-center">{service.title}</h3>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center flex-1">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
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
                className="inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
              >
                View All Projects
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight">Ready to Start Your Next Project?</h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
                Let's collaborate to create something amazing together. I'm currently available for freelance work and new opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto"
              >
                <Link 
                  to="/contact" 
                  className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
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