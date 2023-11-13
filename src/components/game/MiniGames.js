import React from 'react';

const MiniGames = ({ onGameComplete }) => {
  const handleGameComplete = (pointsEarned) => {
    onGameComplete(pointsEarned);
  };

  // Placeholder for mini-game components
  const gamesList = [
    { id: 1, title: 'Puzzle Challenge', points: 50 },
    { id: 2, title: 'Trivia Quiz', points: 30 },
    // More games can be added here
  ];

  return (
    <div className='mini-games'>
      <h2>Mini-Games</h2>
      {gamesList.map((game) => (
        <div key={game.id} className='game'>
          <h3>{game.title}</h3>
          <button onClick={() => handleGameComplete(game.points)}>Play</button>
        </div>
      ))}
    </div>
  );
};

export default MiniGames;
