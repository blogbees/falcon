import * as cam from '@mediapipe/camera_utils';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'; // Correct import
import { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { useHoverStore } from '../store/hover-state';
import { useBoundingBoxStore } from '../store/canvas-box';

const HandTrackingCamera = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setHoveredIndex = useHoverStore((state: { setHoveredIndex: any; }) => state.setHoveredIndex); // Access store method
  const boundingBox = useBoundingBoxStore((state) => state.boundingBox);

  useEffect(() => {
    const gridSizeX = 10;
    const gridSizeY = 10;
    const gridSizeZ = 10;
  
    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Draw the camera image
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const landmarks = results.multiHandLandmarks[0];
    
            // Draw landmarks and connectors
            drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: '#B2FF66', lineWidth: 2 });
            drawLandmarks(ctx, landmarks, { color: '#B2FF66', lineWidth: 1 });
    
            // Map the index finger tip (landmark[8]) to screen coordinates
            const indexFingerTip = landmarks[8];
            // Guard against null boundingBox
            if (!boundingBox) return;

            const { width, height } = boundingBox.canvasSize;

            // Map Mediapipe normalized coordinates to viewport coordinates
            const handX = indexFingerTip.x * width - boundingBox.left;
            const handY = (1 - indexFingerTip.y) * height - boundingBox.top;
    
            // Map to grid coordinates
            const gridX = Math.max(0, Math.min(gridSizeX - 1, Math.floor((handX / boundingBox!.width) * gridSizeX)));
            const gridY = Math.max(0, Math.min(gridSizeY - 1, Math.floor((handY / boundingBox!.height) * gridSizeY)));
            const gridZ = 0;
    
            const hoveredIndex = gridX + gridY * gridSizeX + gridZ * gridSizeX * gridSizeY;
            console.log(hoveredIndex);
            setHoveredIndex(hoveredIndex);
        } else {
            setHoveredIndex(undefined);
        }
    
    });

    if (webcamRef.current) {
      const video = webcamRef.current.video!;
      const camera = new cam.Camera(video, {
        onFrame: async () => {
          await hands.send({ image: video });
        },
      });
      camera.start();
    }

    return () => {
      hands.close();
    };
  }, [setHoveredIndex]);

  return (
    <div className="relative max-w-2xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-md">
      {/* Webcam */}
      <Webcam
        ref={webcamRef}
        className="absolute inset-0 w-full h-full object-cover"
        videoConstraints={{ facingMode: 'user' }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />


    </div>
  );
};

export default HandTrackingCamera;
