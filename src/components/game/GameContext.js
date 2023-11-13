import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [achievements, setAchievements] = useState([]);

  const addPoints = (points) => {
    setScore((prevScore) => prevScore + points);
  };

  const unlockAchievement = (achievement) => {
    setAchievements((prevAchievements) => [...prevAchievements, achievement]);
  };

  return (
    <GameContext.Provider value={{ score, achievements, addPoints, unlockAchievement }}>
      {children}
    </GameContext.Provider>
  );
};
