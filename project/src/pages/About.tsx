import React from 'react';
import { motion } from 'framer-motion';
import { Code, PaintBucket, Database, Zap, Download } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SkillCard from '../components/SkillCard';

const About: React.FC = () => {
  const frontendSkills = ['HTML', 'CSS', 'Tailwind CSS', 'React', 'React Native'];
  const backendSkills = ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'];
  const designSkills = ['Figma', 'UI/UX', 'Design Systems', 'Responsive Design'];
  const otherSkills = ['Git', 'Database', 'Testing', 'AWS', 'Performance Optimization'];

  const educationItems = [
    {
      period: '2023 - 2027',
      degree: 'B.E. in Computer Science',
      institution: 'Sri Shakthi Institute of Engineering and Technology',
      description: 'Focused on web development, algorithms, and software engineering principles.'
    },
    {
      period: '2023',
      degree: 'Higher Secondary (HSC)',
      institution: 'Komarasamy Gounder Matric Hr. Sec. School',
      description: 'Completed HSC with academic excellence (82%) under the school education board.'
    },
    {
      period: '2021',
      degree: 'Secondary School (SSLC)',
      institution: 'Komarasamy Gounder Matric Hr. Sec. School',
      description: 'Completed SSLC with academic excellence under the school education board.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* About Me Section */}
        <section className="mb-20">
          <SectionHeading title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <AnimatedSection>
    <div className="relative w-80 h-80 mx-auto">
      {/* Decorative border */}
      <div className="absolute -left-4 -top-4 w-full h-full border-2 border-blue-600 dark:border-blue-400 rounded-full transform -rotate-2" />
      
      {/* Profile image */}
      <img 
        src="/bhoomash bprofile.png" 
        alt="Bhoomash - Full Stack Developer, professional headshot showing a passionate software engineer" 
        className="w-full h-full object-cover rounded-full relative z-10 shadow-lg"
      />
    </div>
  </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold mb-4">Hi there! I'm Bhoomash 👋</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I'm a dedicated full-stack developer passionate about building scalable web and mobile apps.
                I love solving complex problems with elegant solutions and modern frameworks.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                My journey began in high school with a curiosity about how websites work. Since then, I've grown my skill set in frontend, backend, and UI design. I thrive on crafting applications that are both beautiful and functional.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Name:</h4>
                  <p className="text-gray-600 dark:text-gray-400">Bhoomash</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Email:</h4>
                  <a href="mailto:bhoomash0000@gmail.com" className="text-blue-600 dark:text-blue-400 underline">
                    bhoomash0000@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Location:</h4>
                  <p className="text-gray-600 dark:text-gray-400">Erode, Tamil Nadu, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Availability:</h4>
                  <p className="text-green-600 dark:text-green-400">Available for Work</p>
                </div>
              </div>

              <motion.a
                href="/bhoomash-resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <SectionHeading title="My Skills" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Frontend" icon={<Code size={24} />} skills={frontendSkills} delay={0.1} />
            <SkillCard title="Backend" icon={<Database size={24} />} skills={backendSkills} delay={0.2} />
            <SkillCard title="Design" icon={<PaintBucket size={24} />} skills={designSkills} delay={0.3} />
            <SkillCard title="Other" icon={<Zap size={24} />} skills={otherSkills} delay={0.4} />
          </div>
        </section>

        {/* Education Section */}
        <section>
          <SectionHeading title="Education" />
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <AnimatedSection key={item.degree} delay={index * 0.1}>
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-medium mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
