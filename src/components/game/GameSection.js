import React from 'react';
import Achievements from './Achievements';
import Rewards from './Rewards';
import Leaderboard from './Leaderboard';
import Challenges from './Challenges';
import UserProfile from './UserProfile';
import MiniGames from './MiniGames';
import FeedbackSystem from './FeedbackSystem';
import PointsSystem from './PointsSystem';

const GameSection = () => {
  return (
    <div className='game-section'>
      <h1>Gamification Features</h1>
      <UserProfile />
      <PointsSystem />
      <Achievements />
      <Rewards />
      <Leaderboard />
      <Challenges />
      <MiniGames />
      <FeedbackSystem />
    </div>
  );
};

export default GameSection;
