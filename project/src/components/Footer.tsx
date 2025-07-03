import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { Icon: GitHub, href: 'https://github.com/', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Bhoomash. All rights reserved.
            </p>
           
          </div>
          
          <div className="flex space-x-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;