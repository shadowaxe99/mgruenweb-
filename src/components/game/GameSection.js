import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import Ground from './Ground';
import Player from './Player';
import Cube from './Cube';
import { useTransition, a } from '@react-spring/three';
import Achievements from './Achievements';
import Rewards from './Rewards';
import Leaderboard from './Leaderboard';
import Challenges from './Challenges';
import UserProfile from './UserProfile';
import MiniGames from './MiniGames';
import FeedbackSystem from './FeedbackSystem';
import PointsSystem from './PointsSystem';

const GameSection = () => {
  const transitions = useTransition(show, {
    from: { position: [0, -10, 0], opacity: 0 },
    enter: { position: [0, 1, 0], opacity: 1 },
    leave: { position: [0, -10, 0], opacity: 0 },
  });

  return (
    <div className='game-section' style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Ground position={[0, -0.5, 0]} />
          <Player position={[0, 1, 10]} />
          {transitions((style, item) => item && <a.mesh style={style}><Cube position={[0, 1, 0]} /></a.mesh>)}
        </Physics>
      </Canvas>
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