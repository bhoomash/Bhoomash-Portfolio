import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
          <motion.span 
            className="text-blue-600 dark:text-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bhoomash.Dev
          </motion.span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li key={link.name} initial="hidden" animate="visible" variants={variants} transition={{ delay: index * 0.1 }}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `relative font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'hover:text-blue-600 dark:hover:text-blue-400'
                    }`
                  }
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span 
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 block h-0.5 w-full bg-blue-600 dark:bg-blue-400" 
                    />
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <motion.a 
            href="/bhoomash-resume.pdf" 
            download
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div 
        className={`md:hidden overflow-hidden transition-all ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        initial={false}
        animate={{ maxHeight: isOpen ? '100vh' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4 bg-white dark:bg-gray-900 shadow-lg rounded-b-xl">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `block py-2 font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'hover:text-blue-600 dark:hover:text-blue-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a 
                href="/bhoomash-resume.pdf" 
                download
                className="flex items-center gap-2 w-full py-2 mt-2 text-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Download size={16} className="ml-auto" />
                Resume
                <span className="mr-auto"></span>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;