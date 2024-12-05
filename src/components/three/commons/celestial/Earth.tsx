import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Earth: React.FC<{ rotationRef: React.MutableRefObject<THREE.Group | null> }> = ({ rotationRef }) => {
  const { nodes, materials } = useGLTF('/assets/earth.glb') as any;

  return (
    <group ref={rotationRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Diffuse_6K.geometry}
        material={materials.Earth_Diffuse_6K}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={13.301}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Diffuse_6K001.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, -1.414]}
        scale={13.464}
      />
    </group>
  );
}

useGLTF.preload('/assets/earth.glb');

export default Earth

