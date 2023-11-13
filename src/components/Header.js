import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white shadow-md'>
      <nav className='container mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <div className='text-lg font-semibold'>Michael Gruen</div>
          <div className='flex space-x-4'>
            <Link to='/' className='hover:text-gray-600'>Home</Link>
            <Link to='/courses' className='hover:text-gray-600'>Courses</Link>
            <Link to='/mentors' className='hover:text-gray-600'>Mentors</Link>
            <Link to='/tools' className='hover:text-gray-600'>Tools</Link>
            <Link to='/blog' className='hover:text-gray-600'>Blog</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
