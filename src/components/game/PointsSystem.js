import React, { useState, useEffect } from 'react';

const PointsSystem = ({ onPointsUpdate }) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Points fetching/updating logic will go here
  }, []);

  const addPoints = (amount) => {
    setPoints((prevPoints) => {
      const updatedPoints = prevPoints + amount;
      onPointsUpdate(updatedPoints);
      return updatedPoints;
    });
  };

  return (
    <div className='points-system'>
      <h3>Your Points: {points}</h3>
      <button onClick={() => addPoints(10)}>Earn Points</button>
    </div>
  );
};

export default PointsSystem;
