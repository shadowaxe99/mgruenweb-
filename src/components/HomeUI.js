import React from 'react';
import { Link } from 'react-router-dom';

const HomeUI = () => {
  return (
    <div className='home-ui'>
      <header>
        <h1>Welcome to Michael Gruen's Website</h1>
        <p>Explore the world of Michael Gruen, his ventures, and insights.</p>
      </header>
      <section>
        <h2>About Michael</h2>
        <p>Learn more about Michael Gruen's background, experience, and the values that drive his work.</p>
        <Link to='/about'>Learn More</Link>
      </section>
      <section>
        <h2>Portfolio</h2>
        <p>Discover the projects and ventures that Michael Gruen has been involved in.</p>
        <Link to='/portfolio'>View Portfolio</Link>
      </section>
      <section>
        <h2>Blog</h2>
        <p>Read the latest updates, insights, and articles from Michael Gruen.</p>
        <Link to='/blog'>Read Blog</Link>
      </section>
    </div>
  );
};

export default HomeUI;
