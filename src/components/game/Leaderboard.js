import React from 'react';

const Leaderboard = ({ leaderboardData }) => {
  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      <ol>
        {leaderboardData.map((user, index) => (
          <li key={index}>
            <span>{user.name} - {user.points} Points</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
