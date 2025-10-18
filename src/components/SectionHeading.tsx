import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  centered = false 
}) => {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <div className={`w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mt-2 rounded-full ${centered ? 'mx-auto' : ''}`} />
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;