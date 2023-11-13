import React from 'react';
import { usePlane } from '@react-three/cannon';

function Ground(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' color='green' />
    </mesh>
  );
}

export default Ground;
