import { useEffect, useRef, useState } from "react";
import { Subject } from "rxjs";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// MediaPipe hand connections (pairs of indices)
const HAND_CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4], // Thumb
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8], // Index finger
  [5, 9],
  [9, 10],
  [10, 11],
  [11, 12], // Middle finger
  [9, 13],
  [13, 14],
  [14, 15],
  [15, 16], // Ring finger
  [13, 17],
  [0, 17],
  [17, 18],
  [18, 19],
  [19, 20], // Little finger
];

interface HandPointsProps {
  landmarksSubject: Subject<THREE.Vector3[][]>; // Array of hands' landmarks
}

const Hand = ({ landmarksSubject }: HandPointsProps) => {
  const [handsLandmarks, setHandsLandmarks] = useState<THREE.Vector3[][]>([]); // Array of landmarks for each hand
  const lineRefs = useRef<THREE.BufferGeometry[]>([]); // Array of line geometries for each hand

  useEffect(() => {
    const subscription = landmarksSubject.subscribe((handsLandmarks) => {
      setHandsLandmarks(handsLandmarks); // Update state to trigger re-render
    });

    return () => {
      subscription.unsubscribe(); // Cleanup the subscription
    };
  }, [landmarksSubject]);

  // Update the line geometry positions on each frame
  useFrame(() => {
    handsLandmarks.forEach((landmarks, handIndex) => {
      if (lineRefs.current[handIndex] && landmarks.length > 1) {
        const positions: number[] = [];

        HAND_CONNECTIONS.forEach(([startIdx, endIdx]) => {
          const start = landmarks[startIdx];
          const end = landmarks[endIdx];

          if (start && end) {
            positions.push(
              start.x, start.y, start.z, // Start of the line
              end.x, end.y, end.z // End of the line
            );
          }
        });

        const positionArray = new Float32Array(positions);
        lineRefs.current[handIndex].setAttribute(
          "position",
          new THREE.BufferAttribute(positionArray, 3)
        );
        lineRefs.current[handIndex].attributes.position.needsUpdate = true;
      }
    });
  });

  return (
    <group>
      {/* Render spheres and lines for each hand */}
      {handsLandmarks.map((landmarks, handIndex) => (
        <group key={handIndex}>
          {/* Render spheres for the current hand */}
          {landmarks.map((position, index) => (
            <mesh key={index} position={position.toArray()}>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshStandardMaterial
                color="white"
                emissive="white"
                emissiveIntensity={2}
              />
            </mesh>
          ))}

          {/* Render lines connecting the landmarks for the current hand */}
          <lineSegments>
            <bufferGeometry ref={(el) => (lineRefs.current[handIndex] = el!)} />
            <lineBasicMaterial color="white" linewidth={2} />
          </lineSegments>
        </group>
      ))}
    </group>
  );
};

export default Hand;