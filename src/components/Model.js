import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/model.gltf');
  const modelRef = useRef();

  return <primitive object={gltf.scene} ref={modelRef} />;
};

export default Model;
