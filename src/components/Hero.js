import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import { motion } from 'framer-motion';

const Hero = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaRef.current) {
      vantaRef.current = NET({
        el: '#hero-background',
        color: 0x0077ff,
        backgroundColor: 0x001d3d,
        points: 10,
        maxDistance: 25,
        spacing: 18,
      });
    }
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="hero-background" className="bg-teal-500 h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-6xl text-white font-bold"
        >
          Michael Gruen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-teal-200 mt-4"
        >
          Entrepreneur, Speaker, and Gen Z Expert
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 bg-white text-teal-500 font-bold py-2 px-4 rounded-full hover:bg-teal-700 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;