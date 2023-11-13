import React from 'react';
import { Plane } from '@react-three/cannon';

const Ground = () => {
  return (
    <Plane args={[100, 100]} position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial attach='material' color='green' />
    </Plane>
  );
};

export default Ground;
