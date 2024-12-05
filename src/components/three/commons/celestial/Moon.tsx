import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const Moon: React.FC<{ rotationRef: React.MutableRefObject<THREE.Group | null> }> = ({ rotationRef }) => {
    const { scene } = useGLTF('/assets/moon.glb');
    return <primitive ref={rotationRef} object={scene} />;
};

export default Moon;
