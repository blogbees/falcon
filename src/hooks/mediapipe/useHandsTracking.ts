import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { Hands, HAND_CONNECTIONS, Results } from '@mediapipe/hands';
import { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

type HandsTrackingOptions = {
  maxNumHands?: number;
  minDetectionConfidence?: number;
  minTrackingConfidence?: number;
  modelComplexity?: 0 | 1;
  handColor?: string;
  lineWidth?: number;
  cameraWidth?: number;
  cameraHeight?: number;
  facingMode?: 'user' | 'environment';
};

const useHandsTracking = (
  webcamRef: React.RefObject<Webcam>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  onHandsDetected: (results: Results) => void,
  options?: HandsTrackingOptions
) => {
  const cameraRef = useRef<Camera | null>(null);
  const handTrackerRef = useRef<Hands | null>(null);

  useEffect(() => {
    if (!webcamRef.current || !canvasRef.current) return;

    const canvasCtx = canvasRef.current.getContext('2d');
    if (!canvasCtx) return;

    // Initialize the MediaPipe Hands instance
    handTrackerRef.current = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    // Configure hands tracking options
    handTrackerRef.current.setOptions({
      maxNumHands: options?.maxNumHands ?? 2,
      minDetectionConfidence: options?.minDetectionConfidence ?? 0.5,
      minTrackingConfidence: options?.minTrackingConfidence ?? 0.5,
      modelComplexity: options?.modelComplexity ?? 1,
    });

    // Set the callback for processing hand tracking results
    handTrackerRef.current.onResults((results: Results) => {
      if (!canvasCtx || !canvasRef.current || !webcamRef.current?.video) return;

      // Clear the canvas
      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Draw video frame to canvas
      canvasCtx.drawImage(
        webcamRef.current.video,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      // Draw the hand landmarks and connectors
      const handColor = options?.handColor ?? '#00FF00';
      const lineWidth = options?.lineWidth ?? 2;
      for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: handColor,
          lineWidth: lineWidth,
        });
        drawLandmarks(canvasCtx, landmarks, {
          color: handColor,
          lineWidth: lineWidth,
        });
      }

      // Call the callback function with results
      onHandsDetected(results);
    });

    // Initialize the MediaPipe Camera
    const video = webcamRef.current.video;

    if (video) {
      cameraRef.current = new Camera(video, {
        onFrame: async () => {
          if (handTrackerRef.current && webcamRef.current && video) {
            await handTrackerRef.current.send({ image: video });
          }
        },
        width: options?.cameraWidth ?? 640,
        height: options?.cameraHeight ?? 480,
      });

      cameraRef.current.start();
    }

    // Cleanup on unmount
    return () => {
      handTrackerRef.current?.close();
      cameraRef.current?.stop();
      cameraRef.current = null;
      handTrackerRef.current = null;
    };
  }, [webcamRef, canvasRef, options, onHandsDetected]);
};

export default useHandsTracking;