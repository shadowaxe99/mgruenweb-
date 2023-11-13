import React from 'react';
import ToolCard from './ToolCard';

const ToolsSection = ({ tools }) => {
  return (
    <section className='tools-section'>
      <h2>Tools for Growth</h2>
      <div className='tool-grid'>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
