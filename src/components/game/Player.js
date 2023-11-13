import React, { useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';

const Player = (props) => {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({ mass: 1, type: 'Dynamic', ...props }));

  useFrame(() => {
    camera.position.copy(ref.current.position);
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach='geometry' args={[1, 32, 32]} />
      <meshStandardMaterial attach='material' color='blue' />
    </mesh>
  );
};

export default Player;
