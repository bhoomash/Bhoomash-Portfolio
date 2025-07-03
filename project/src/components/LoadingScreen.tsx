import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glassmorphic Cube */}
        <motion.div
          className="relative w-24 h-24"
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full rounded-xl"
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(50px)`,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(147,51,234,0.4))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)',
              }}
            />
          ))}
        </motion.div>

        {/* Animated Text */}
        <motion.p
          className="mt-10 text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 animate-pulse drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Loading, please wait...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
