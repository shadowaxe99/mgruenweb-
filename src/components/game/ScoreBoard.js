import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const ScoreBoard = () => {
  const { score } = useContext(GameContext);

  return (
    <div className='score-board'>
      <h2>Score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
