import React from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeScene = () => {
  return (
    <Canvas>
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default ThreeScene;