import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className='card-header'>{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className='card-title'>{children}</h2>;
};

export const CardDescription = ({ children }) => {
  return <p className='card-description'>{children}</p>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};
