import React, { useMemo } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

const RubixCube: React.FC<{ cubeGroup: React.RefObject<THREE.Group> }> = ({ cubeGroup }) => {

    const roundedBoxGeometry = useMemo(() => {
        return new RoundedBoxGeometry(1, 1, 1, 3, 0.1);
    }, []);

    return (
        <>
            <group ref={cubeGroup}>
                {Array.from({ length: 3 }, (_, x) =>
                    Array.from({ length: 3 }, (_, y) =>
                        Array.from({ length: 3 }, (_, z) => (
                            <Cubelet
                                key={x + y * 3 + z * 9}
                                position={[x - 1, y - 1, z - 1]}
                                geometry={roundedBoxGeometry}
                            />
                        ))
                    )
                )}
            </group>
        </>
    );
};

interface CubeletProps {
    position: [number, number, number];
    geometry: THREE.BufferGeometry;
}

const colorSides: [number, number, string][] = [
    [0, 1, 'darkorange'],
    [0, -1, 'red'],
    [1, 1, 'white'],
    [1, -1, 'yellow'],
    [2, 1, 'green'],
    [2, -1, 'blue']
];

const Cubelet: React.FC<CubeletProps> = ({ position, geometry }) => {
    return (
        <mesh position={position} geometry={geometry}>
            {Array.from({ length: 6 }, (_, i) => (
                <meshStandardMaterial
                    key={i}
                    attach={`material-${i}`}
                    color={position[colorSides[i][0]] === colorSides[i][1] ? colorSides[i][2] : `black`}
                />
            ))}
        </mesh>
    );
};

export default RubixCube;