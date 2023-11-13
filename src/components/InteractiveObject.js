import React, { useState } from 'react';
import { useBox } from '@react-three/cannon';

const InteractiveObject = ({ position, color, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ref] = useBox(() => ({ mass: 1, position }));

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <mesh ref={ref} position={position} onClick={handleClick}>
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial attach='material' color={isClicked ? 'hotpink' : color} />
    </mesh>
  );
};

export default InteractiveObject;
