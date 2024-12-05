import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Webcam from 'react-webcam';
import useHandsTracking from '../../hooks/mediapipe/useHandsTracking';
import Moon from './commons/celestial/Moon';
import * as THREE from 'three';

const HandleMoon = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef<THREE.Group | null>(null);

  // Initialize hand tracking with the custom hook
  useHandsTracking(
    webcamRef,
    canvasRef,
    (results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks?.[0];
        const wrist = landmarks[0];
        const indexTip = landmarks[8];

        if (wrist && indexTip) {
          const thumbTip = landmarks[4];

          const deltaX = indexTip.x - wrist.x;
          const deltaY = indexTip.y - wrist.y;
          const fistClosed = thumbTip && Math.abs(thumbTip.x - indexTip.x) < 0.05 && Math.abs(thumbTip.y - indexTip.y) < 0.05;
          if (!fistClosed && rotationRef.current) {
            // Rotate left or right based on horizontal movement
            if (deltaX > 0.1) {
              rotationRef.current.rotation.y -= 0.05;
            } else if (deltaX < -0.1) {
              rotationRef.current.rotation.y += 0.05;
            }

            // Rotate up or down based on vertical movement
            if (deltaY > 0.1) {
              rotationRef.current.rotation.x -= 0.05;
            } else if (deltaY < -0.1) {
              rotationRef.current.rotation.x += 0.05;
            }
          }
        }
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
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Moon rotationRef={rotationRef} />
        </Suspense>
        <OrbitControls />
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
  );
};

export default HandleMoon;
