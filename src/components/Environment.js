import React from 'react';
import { Sky } from '@react-three/drei';
import { Ground } from './Ground';

const Environment = () => {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <Ground />
    </>
  );
};

export default Environment;
