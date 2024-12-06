import { useSpring } from '@react-spring/three';
import { Environment, OrbitControls, Stats } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { FaHandPaper, FaHandPointUp, FaHandPointDown, FaHandPointLeft, FaHandPointRight } from 'react-icons/fa';
import Webcam from 'react-webcam';
import * as THREE from 'three';
import useHandsTracking from '../../hooks/mediapipe/useHandsTracking';
import RubixCube from './commons/games/RubicCube';

const HandleRubixCube = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubeGroup = useRef<THREE.Group>(null);
  const rotationGroup = useRef<THREE.Group>(null);
  const axis = useRef<number>(null);
  // Adding a spring to control the rotation
  const [{ rotation }, setRotation] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { tension: 150, friction: 20 },
  }));

  function resetCubeGroup(cubeGroup: THREE.Group, rotationGroup: THREE.Group) {
    rotationGroup.children
      .slice()
      .reverse()
      .forEach((c) => {
        cubeGroup.attach(c);
      });
    rotationGroup.quaternion.set(0, 0, 0, 1);
  }

  function attachToRotationGroup(
    cubeGroup: THREE.Group,
    rotationGroup: THREE.Group,
    axis: 'x' | 'y' | 'z',
    limit: number
  ) {
    cubeGroup.children
      .slice()
      .reverse()
      .filter((c) => (limit < 0 ? c.position[axis] < limit : c.position[axis] > limit))
      .forEach((c) => {
        rotationGroup.attach(c);
      });
  }

  function animateRotationGroup(rotationGroup: THREE.Group, axis: 'x' | 'y' | 'z', multiplier: number) {
      rotationGroup.rotation[axis] = 25;
  }

  function rotate(
    cubeGroup: THREE.Group | null,
    rotationGroup: THREE.Group | null,
    axis: 'x' | 'y' | 'z',
    limit: number,
    multiplier: number
  ) {
    if (cubeGroup && rotationGroup) {
      axis = axis;
      resetCubeGroup(cubeGroup, rotationGroup);
      attachToRotationGroup(cubeGroup, rotationGroup, axis, limit);
      animateRotationGroup(rotationGroup, axis, multiplier);
    }
  };

  // Initialize hand tracking with the custom hook
  useHandsTracking(
    webcamRef,
    canvasRef,
    (results) => {
      if (results.multiHandLandmarks && cubeGroup.current && rotationGroup.current) {
        const landmarks = results.multiHandLandmarks;

        const distance = (point1: { x: number; y: number; z: number; }, point2: { x: number; y: number; z: number; }) => {
          return Math.sqrt(
            Math.pow(point1.x - point2.x, 2) +
            Math.pow(point1.y - point2.y, 2) +
            Math.pow(point1.z - point2.z, 2)
          );
        };

        landmarks.forEach((handLandmarks) => {
          const thumbTip = handLandmarks[4];
          const fingersTips = [
            handLandmarks[8],  // Index finger
            handLandmarks[12], // Middle finger
            handLandmarks[16], // Ring finger
            handLandmarks[20]  // Pinky finger
          ];

          fingersTips.forEach((fingerTip, index) => {
            if (distance(thumbTip, fingerTip) < 0.05) {
              console.log(index);
              switch (index) {
                case 0:
                  rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1); // Rotate Left CW
                  break;
                case 1:
                  rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1); // Rotate Top CW
                  break;
                case 2:
                  rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1); // Rotate Back CW
                  break;
                case 3:
                  rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1); // Rotate Bottom CW
                  break;
                default:
                  break;
              }
            }
          });
        });


      }
    },
    {
      maxNumHands: 2,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
      modelComplexity: 1,
      handColor: '#FFFF66',
      lineWidth: 10,
      cameraWidth: 320,
      cameraHeight: 240,
      facingMode: 'user',
    }
  );

  return (
    <div className='relative w-full h-full'>
      <div className="absolute flex top-4 left-4 w-20 h-20 z-50">
        <FaHandPaper />
        <FaHandPointUp />
        <FaHandPointDown />
        <FaHandPointLeft />
        <FaHandPointRight />
      </div>

      <div className='relative w-full h-full'>
        <Canvas camera={{ position: [3, 3, 3] }}>
          <Suspense>
            <Environment preset="forest" />
          </Suspense>
          <RubixCube cubeGroup={cubeGroup} />
          <OrbitControls target={[0, 0, 0]} />
        </Canvas>
        <div className="absolute bottom-4 right-4 w-64 h-38 bg-white rounded-lg shadow-lg p-2 z-50">
          <div className="relative max-w-xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-md">
            {/* Webcam */}
            <Webcam
              ref={webcamRef}
              className="absolute inset-0 w-full h-full object-cover"
              videoConstraints={{ facingMode: 'user' }}
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full object-cover"
              width="640"
              height="480"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleRubixCube;
