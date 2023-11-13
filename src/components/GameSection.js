import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import Ground from './game/Ground';
import Player from './game/Player';
import Cube from './game/Cube';

const GameSection = () => {
  return (
    <div className='game-section' style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Ground position={[0, -0.5, 0]} />
          <Player position={[0, 1, 10]} />
          <Cube position={[0, 1, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default GameSection;
