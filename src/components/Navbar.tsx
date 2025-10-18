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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

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
      {/* Backdrop overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar */}
      <motion.div 
        className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Navigation
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-200 hover:rotate-90"
              aria-label="Close menu"
            >
              <X size={22} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
                    transition={{ 
                      delay: isOpen ? index * 0.1 + 0.1 : 0, 
                      duration: 0.4,
                      ease: 'easeOut'
                    }}
                  >
                    <NavLink 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `group flex items-center py-3 px-4 text-base font-medium rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 dark:border-blue-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1'
                        }`
                      }
                    >
                      <span className="flex-1">{link.name}</span>
                      <span className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        location.pathname === link.path 
                          ? 'bg-blue-600 dark:bg-blue-400 scale-100' 
                          : 'bg-transparent group-hover:bg-blue-300 scale-0 group-hover:scale-100'
                      }`}></span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Resume Download Button */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <motion.a 
              href="/bhoomash-resume.pdf" 
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 px-6 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.5 : 0, duration: 0.4 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;