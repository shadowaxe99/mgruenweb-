import React from 'react';
import { CardTitle } from './CardTitle';

export const Card = ({ title, children }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <CardTitle>{title}</CardTitle>
      <p className="text-gray-700 text-base">
        {children}
      </p>
    </div>
  </div>
);
