import React, { forwardRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Vehicle = forwardRef((props, ref) => {
  const [car, api] = useBox(() => ({ mass: 1, ...props }), ref);
  const gltf = useLoader(GLTFLoader, '/car-model.gltf');

  return (
    <mesh ref={car} receiveShadow castShadow>
      <primitive object={gltf.scene} scale={[0.5, 0.5, 0.5]} />
    </mesh>
  );
});

export default Vehicle;
