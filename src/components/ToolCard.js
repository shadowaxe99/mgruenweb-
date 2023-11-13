import React from 'react';

const ToolCard = ({ tool }) => {
  return (
    <div className='tool-card'>
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
      <button>Try Tool</button>
    </div>
  );
};

export default ToolCard;
