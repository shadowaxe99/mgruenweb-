import React from 'react';
import { useBox } from '@react-three/cannon';

function Obstacle(props) {
  const [ref] = useBox(() => ({ mass: 0, ...props }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
      <meshStandardMaterial attach='material' color='red' />
    </mesh>
  );
}

export default Obstacle;
