import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, image, tags, liveUrl, repoUrl } = project;
  
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      {/* Image Section */}
      <div className="relative h-20 xs:h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 leading-tight line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 leading-relaxed flex-1 line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {tags.slice(0, 2).map(tag => (
            <span 
              key={tag} 
              className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 truncate max-w-16 sm:max-w-20"
            >
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              +{tags.length - 2}
            </span>
          )}
        </div>
        
        {/* Action Links */}
        <div className="flex flex-row justify-between gap-2">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline py-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={12} />
              <span className="truncate">Demo</span>
            </motion.a>
          )}
          
          {repoUrl && (
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:underline py-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={12} />
              <span className="truncate">Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;