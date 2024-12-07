import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { FaExpand, FaHandPaper, FaHandPointDown, FaHandPointLeft, FaHandPointRight, FaHandPointUp } from 'react-icons/fa';
import Webcam from 'react-webcam';
import * as THREE from 'three';
import useHandsTracking from '../../hooks/mediapipe/useHandsTracking';
import Moon from './commons/celestial/Moon';

const HandleMoon = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef<THREE.Group | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };
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
              rotationRef.current.rotation.x += 0.05;
            } else if (deltaY < -0.1) {
              rotationRef.current.rotation.x -= 0.05;
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
    <div ref={containerRef} className='relative w-full h-full'>
      {/* Fullscreen Toggle Button */}
      <div
        className="absolute hidden top-4 right-4 bg-gray-800 p-2 rounded-full cursor-pointer z-50"
        onClick={toggleFullscreen}
      >
        <FaExpand className="text-white w-6 h-6" />
      </div>

      <div className="absolute flex flex-col items-center top-4 left-4 w-24 space-y-4 z-50">
        <div className="flex flex-col items-center">
          <FaHandPaper className="text-yellow-500 w-8 h-8 md:w-8 md:h-8" />
          <span className="text-white text-sm text-center">Wave to the Moon!</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHandPaper
            className="text-green-500 w-8 h-8 md:w-8 md:h-8 transform rotate-90"
          />
          <span className="text-white text-sm text-center">Move Up</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHandPaper
            className="text-orange-500 w-8 h-8 md:w-8 md:h-8 transform -rotate-90"
          />
          <span className="text-white text-sm text-center">Move Down</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHandPaper
            className="text-blue-500 w-8 h-8 md:w-8 md:h-8 transform rotate-180"
          />
          <span className="text-white text-sm text-center">Move Left</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHandPaper
            className="text-yellow-500 w-8 h-8 md:w-8 md:h-8 transform rotate-0"
          />
          <span className="text-white text-sm text-center">Move Right</span>
        </div>
      </div>
      <div className='relative w-full h-full'>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ width: '75vw', height: 'calc(100vh - 100px)', maxHeight: '100vh' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Moon rotationRef={rotationRef} />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div
          className={`absolute bottom-4 right-4 w-48 h-32 md:w-64 md:h-38 bg-gray rounded-lg shadow-lg p-2 z-50 ${isFullscreen ? 'w-full h-full' : ''
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

export default HandleMoon;