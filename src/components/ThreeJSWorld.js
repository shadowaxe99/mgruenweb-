import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Model from './Model';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

const ThreeJSWorld = () => {
  return (
    <div id='canvas-container'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
        <Stars />
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreeJSWorld;