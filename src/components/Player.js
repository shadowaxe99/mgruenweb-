import React, { useRef } from 'react';
import { useSphere } from '@react-three/cannon';

const Player = (props) => {
  const [ref] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props }));

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach='geometry' args={[1, 32, 32]} />
      <meshStandardMaterial attach='material' color='orange' />
    </mesh>
  );
};

export default Player;
