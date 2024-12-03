import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  CameraControls,
  Environment,
  PivotControls,
} from '@react-three/drei';
import * as THREE from 'three';

const MagicCube: React.FC = () => {
  return (
    <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
      <PivotControls anchor={[-1.1, -1.1, -1.1]} scale={0.75} lineWidth={3.5}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <Edges />
          <Side rotation={[0, 0, 0]} bg="orange" index={0}>
            <torusGeometry args={[0.65, 0.3, 64]} />
          </Side>
          <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
            <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
          </Side>
          <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="lightgreen" index={2}>
            <boxGeometry args={[1.15, 1.15, 1.15]} />
          </Side>
          <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="aquamarine" index={3}>
            <octahedronGeometry />
          </Side>
          <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
            <icosahedronGeometry />
          </Side>
          <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
            <dodecahedronGeometry />
          </Side>
        </mesh>
      </PivotControls>
      <CameraControls makeDefault />
    </Canvas>
  );
};

interface SideProps {
  rotation?: [number, number, number];
  bg?: string;
  children: React.ReactNode;
  index: number;
}

const Side: React.FC<SideProps> = ({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF('/aobox-transformed.glb') as unknown as {
    nodes: { Cube: THREE.Mesh };
  };

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta;
      mesh.current.rotation.y += delta;
    }
  });

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      {/* Portal's isolated content */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* Baked AO Box */}
      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry} // Explicitly use `geometry` from the asserted type
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          aoMap={(nodes.Cube.material as THREE.MeshStandardMaterial).aoMap} // Assert material type
          color={bg}
        />
        <spotLight
          castShadow
          color={bg}
          intensity={2}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
        />
      </mesh>
      {/* Shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
};

export default MagicCube;