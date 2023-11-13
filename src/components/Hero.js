import React from 'react';

const Hero = () => {
  return (
    <div className="bg-teal-500 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl text-white font-bold">Michael Gruen</h1>
        <p className="text-teal-200 mt-4">Entrepreneur, Speaker, and Gen Z Expert</p>
        <button className="mt-8 bg-white text-teal-500 font-bold py-2 px-4 rounded-full hover:bg-teal-700 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
