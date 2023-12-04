import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeUI = () => {
  return (
    <div className='home-ui'>
      <header>
        <h1>Welcome to Michael Gruen's Website</h1>
        <p>Explore the world of Michael Gruen, his ventures, and insights.</p>
      </header>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2>About Michael</h2>
        <p>Learn more about Michael Gruen's background, experience, and the values that drive his work.</p>
        <Link to='/about'>Learn More</Link>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2>Portfolio</h2>
        <p>Discover the projects and ventures that Michael Gruen has been involved in.</p>
        <Link to='/portfolio'>View Portfolio</Link>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2>Blog</h2>
        <p>Read the latest updates, insights, and articles from Michael Gruen.</p>
        <Link to='/blog'>Read Blog</Link>
      </motion.section>
    </div>
  );
};

export default HomeUI;