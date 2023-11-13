import React from 'react';

export const CardHeader = ({ children, className }) => (
  <div className={`card-header ${className}`}>{children}</div>
);
