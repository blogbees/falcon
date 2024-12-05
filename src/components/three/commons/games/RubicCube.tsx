import { useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';


const RubixCube: React.FC<GroupProps> = (props) => {
  const group = React.useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('/assets/rubix_cube.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[4.953, 5.074, 0.937]} />
        <group name="Cube003" position={[2, 2, -2]} rotation={[0, 0, -0.005]}>
          <mesh name="Cube004_1" geometry={(nodes.Cube004_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube004_2" geometry={(nodes.Cube004_2 as THREE.Mesh).geometry} material={materials.Red} />
          <mesh name="Cube004_3" geometry={(nodes.Cube004_3 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube004" position={[2, 2, -2]} rotation={[0.002, 0, -0.005]}>
          <mesh name="Cube005_1" geometry={(nodes.Cube005_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube005_2" geometry={(nodes.Cube005_2 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube005_3" geometry={(nodes.Cube005_3 as THREE.Mesh).geometry} material={materials.Red} />
          <mesh name="Cube005_4" geometry={(nodes.Cube005_4 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube005" position={[2, 2, -2]}>
          <mesh name="Cube006_1" geometry={(nodes.Cube006_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube006_2" geometry={(nodes.Cube006_2 as THREE.Mesh).geometry} material={materials.Green} />
          <mesh name="Cube006_3" geometry={(nodes.Cube006_3 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube006" position={[2, 2, -2]}>
          <mesh name="Cube007_1" geometry={(nodes.Cube007_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube007_2" geometry={(nodes.Cube007_2 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube007" position={[2, 2, -2]} rotation={[0.002, 0, 0]}>
          <mesh name="Cube008_1" geometry={(nodes.Cube008_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube008_2" geometry={(nodes.Cube008_2 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube008_3" geometry={(nodes.Cube008_3 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube008" position={[2, 2, -2]}>
          <mesh name="Cube009_1" geometry={(nodes.Cube009_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube009_2" geometry={(nodes.Cube009_2 as THREE.Mesh).geometry} material={materials.Green} />
          <mesh name="Cube009_3" geometry={(nodes.Cube009_3 as THREE.Mesh).geometry} material={materials.orange} />
          <mesh name="Cube009_4" geometry={(nodes.Cube009_4 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube009" position={[2, 2, -2]}>
          <mesh name="Cube010_1" geometry={(nodes.Cube010_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube010_2" geometry={(nodes.Cube010_2 as THREE.Mesh).geometry} material={materials.orange} />
          <mesh name="Cube010_3" geometry={(nodes.Cube010_3 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube010" position={[2, 2, -2]} rotation={[0.002, 0, 0]}>
          <mesh name="Cube011_1" geometry={(nodes.Cube011_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube011_2" geometry={(nodes.Cube011_2 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube011_3" geometry={(nodes.Cube011_3 as THREE.Mesh).geometry} material={materials.orange} />
          <mesh name="Cube011_4" geometry={(nodes.Cube011_4 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
        <group name="Cube011" position={[2, 2, -2]} rotation={[0, 0, -0.005]}>
          <mesh name="Cube012_1" geometry={(nodes.Cube012_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube012_2" geometry={(nodes.Cube012_2 as THREE.Mesh).geometry} material={materials.Red} />
          <mesh name="Cube012_3" geometry={(nodes.Cube012_3 as THREE.Mesh).geometry} material={materials.Green} />
        </group>
        <group name="Cube012" position={[2, 2, -2]} rotation={[0, 0, -0.005]}>
          <mesh name="Cube013_1" geometry={(nodes.Cube013_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube013_2" geometry={(nodes.Cube013_2 as THREE.Mesh).geometry} material={materials.Red} />
        </group>
        <group name="Cube013" position={[2, 2, -2]} rotation={[0.002, 0, -0.005]}>
          <mesh name="Cube014_1" geometry={(nodes.Cube014_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube014_2" geometry={(nodes.Cube014_2 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube014_3" geometry={(nodes.Cube014_3 as THREE.Mesh).geometry} material={materials.Red} />
        </group>
        <group name="Cube014" position={[2, 2, -2]}>
          <mesh name="Cube015_1" geometry={(nodes.Cube015_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube015_2" geometry={(nodes.Cube015_2 as THREE.Mesh).geometry} material={materials.Green} />
        </group>
        <mesh name="Cube015" geometry={(nodes.Cube015 as THREE.Mesh).geometry} material={materials.Black} position={[2, 2, -2]} />
        <group name="Cube016" position={[2, 2, -2]} rotation={[0.002, 0, 0]}>
          <mesh name="Cube017_1" geometry={(nodes.Cube017_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube017_2" geometry={(nodes.Cube017_2 as THREE.Mesh).geometry} material={materials.Blue} />
        </group>
        <group name="Cube017" position={[2, 2, -2]}>
          <mesh name="Cube018_1" geometry={(nodes.Cube018_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube018_2" geometry={(nodes.Cube018_2 as THREE.Mesh).geometry} material={materials.Green} />
          <mesh name="Cube018_3" geometry={(nodes.Cube018_3 as THREE.Mesh).geometry} material={materials.orange} />
        </group>
        <group name="Cube018" position={[2, 2, -2]}>
          <mesh name="Cube019_1" geometry={(nodes.Cube019_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube019_2" geometry={(nodes.Cube019_2 as THREE.Mesh).geometry} material={materials.orange} />
        </group>
        <group name="Cube019" position={[2, 2, -2]} rotation={[0.002, 0, 0]}>
          <mesh name="Cube020_1" geometry={(nodes.Cube020_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube020_2" geometry={(nodes.Cube020_2 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube020_3" geometry={(nodes.Cube020_3 as THREE.Mesh).geometry} material={materials.orange} />
        </group>
        <group name="Cube020" position={[2, 2, -2]} rotation={[0, 0.005, -0.005]}>
          <mesh name="Cube021_1" geometry={(nodes.Cube021_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube021_2" geometry={(nodes.Cube021_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube021_3" geometry={(nodes.Cube021_3 as THREE.Mesh).geometry} material={materials.Red} />
          <mesh name="Cube021_4" geometry={(nodes.Cube021_4 as THREE.Mesh).geometry} material={materials.Green} />
        </group>
        <group name="Cube021" position={[2, 2, -2]} rotation={[0, 0.005, -0.005]}>
          <mesh name="Cube022_1" geometry={(nodes.Cube022_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube022_2" geometry={(nodes.Cube022_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube022_3" geometry={(nodes.Cube022_3 as THREE.Mesh).geometry} material={materials.Red} />
        </group>
        <group name="Cube022" position={[2, 2, -2]} rotation={[0.002, 0.005, -0.005]}>
          <mesh name="Cube023_1" geometry={(nodes.Cube023_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube023_2" geometry={(nodes.Cube023_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube023_3" geometry={(nodes.Cube023_3 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube023_4" geometry={(nodes.Cube023_4 as THREE.Mesh).geometry} material={materials.Red} />
        </group>
        <group name="Cube023" position={[2, 2, -2]} rotation={[0, 0.005, 0]}>
          <mesh name="Cube024_1" geometry={(nodes.Cube024_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube024_2" geometry={(nodes.Cube024_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube024_3" geometry={(nodes.Cube024_3 as THREE.Mesh).geometry} material={materials.Green} />
        </group>
        <group name="Cube024" position={[2, 2, -2]} rotation={[0, 0.005, 0]}>
          <mesh name="Cube025_1" geometry={(nodes.Cube025_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube025_2" geometry={(nodes.Cube025_2 as THREE.Mesh).geometry} material={materials.White} />
        </group>
        <group name="Cube025" position={[2, 2, -2]} rotation={[0.002, 0.005, 0]}>
          <mesh name="Cube026_1" geometry={(nodes.Cube026_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube026_2" geometry={(nodes.Cube026_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube026_3" geometry={(nodes.Cube026_3 as THREE.Mesh).geometry} material={materials.Blue} />
        </group>
        <group name="Cube026" position={[2, 2, -2]} rotation={[0, 0.005, 0]}>
          <mesh name="Cube027_1" geometry={(nodes.Cube027_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube027_2" geometry={(nodes.Cube027_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube027_3" geometry={(nodes.Cube027_3 as THREE.Mesh).geometry} material={materials.Green} />
          <mesh name="Cube027_4" geometry={(nodes.Cube027_4 as THREE.Mesh).geometry} material={materials.orange} />
        </group>
        <group name="Cube027" position={[2, 2, -2]} rotation={[0, 0.005, 0]}>
          <mesh name="Cube028_1" geometry={(nodes.Cube028_1 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube028_2" geometry={(nodes.Cube028_2 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube028_3" geometry={(nodes.Cube028_3 as THREE.Mesh).geometry} material={materials.orange} />
        </group>
        <group name="Cube028" position={[2, 2, -2]} rotation={[0.002, 0.005, 0]}>
          <mesh name="Cube029" geometry={(nodes.Cube029 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube029_1" geometry={(nodes.Cube029_1 as THREE.Mesh).geometry} material={materials.White} />
          <mesh name="Cube029_2" geometry={(nodes.Cube029_2 as THREE.Mesh).geometry} material={materials.Blue} />
          <mesh name="Cube029_3" geometry={(nodes.Cube029_3 as THREE.Mesh).geometry} material={materials.orange} />
        </group>
        <group name="Cube030" position={[0.006, 2, -2]} rotation={[0, 0, -0.005]}>
          <mesh name="Cube058" geometry={(nodes.Cube058 as THREE.Mesh).geometry} material={materials.Black} />
          <mesh name="Cube058_1" geometry={(nodes.Cube058_1 as THREE.Mesh).geometry} material={materials.Red} />
          <mesh name="Cube058_2" geometry={(nodes.Cube058_2 as THREE.Mesh).geometry} material={materials.Green} />
          <mesh name="Cube058_3" geometry={(nodes.Cube058_3 as THREE.Mesh).geometry} material={materials.Yellow} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/assets/rubix_cube.glb');

export default RubixCube;