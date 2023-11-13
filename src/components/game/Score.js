import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';

const Score = () => {
  const { score, setScore } = useContext(GameContext);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore');
    setHighScore(savedHighScore ? parseInt(savedHighScore, 10) : 0);
  }, []);

  useEffect(() => {
    if (score > highScore) {
      localStorage.setItem('highScore', score.toString());
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className='score-board'>
      <div>Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
};

export default Score;
