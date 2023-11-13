import React from 'react';

export const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>{children}</div>
);
