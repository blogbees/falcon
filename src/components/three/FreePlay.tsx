import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Suspense, useRef } from 'react';
import Webcam from 'react-webcam';
import { Subject } from "rxjs";
import * as THREE from "three";
import useHandsTracking from '../../hooks/mediapipe/useHandsTracking';
import Hand from './commons/controls/Hand';
const FreePlay = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const landmarksSubject = new Subject<THREE.Vector3[][]>(); // Define Subject inside HandTrackingScene

  // Initialize hand tracking with the custom hook
  useHandsTracking(
    webcamRef,
    canvasRef,
    (results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const handsLandmarks = results.multiHandLandmarks.map((landmarks) => {
          // Calculate scaling relative to the hand's bounding box
          const minX = Math.min(...landmarks.map((lm) => lm.x));
          const maxX = Math.max(...landmarks.map((lm) => lm.x));
          const minY = Math.min(...landmarks.map((lm) => lm.y));
          const maxY = Math.max(...landmarks.map((lm) => lm.y));
          const scale = (maxY - minY) / (maxX - minX); // Calculate relative scale
          // Convert landmarks to THREE.Vector3 and scale
          return landmarks.map(
            (lm) =>
              new THREE.Vector3(
                (lm.x * 2 - 1) * scale, // Scale X
                -(lm.y * 2 - 1) * scale, // Scale Y
                -lm.z * scale // Scale Z
              )
          );
        });

        landmarksSubject.next(handsLandmarks); // Emit updated landmarks for all hands
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
      <div className='relative w-full h-full'>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ width: '75vw', height: 'calc(100vh - 100px)', maxHeight: '100vh' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense>
            <Hand landmarksSubject={landmarksSubject} />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div
          className={`absolute bottom-4 right-4 w-48 h-32 md:w-64 md:h-38 bg-gray rounded-lg shadow-lg p-2 z-50
            }`}>
          <div className="relative max-w-xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-md">
            {/* Webcam */}
            <Webcam
              ref={webcamRef}
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
export default FreePlay;