import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  icon, 
  skills,
  delay = 0 
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li 
            key={skill}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
          >
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;