import { useEffect, useRef } from 'react';
import { Camera } from '@mediapipe/camera_utils';

type CameraOptions = {
  cameraWidth?: number;
  cameraHeight?: number;
  facingMode?: 'user' | 'environment';
};

const useCamera = (
  webcamRef: React.RefObject<HTMLVideoElement | any>,
  onFrame: (video: HTMLVideoElement) => void,
  options?: CameraOptions
) => {
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    if (!webcamRef.current || !webcamRef.current.video) return;

    const video = webcamRef.current.video;

    cameraRef.current = new Camera(video, {
      onFrame: async () => {
        onFrame(video); // Process the video frame
      },
    });

    cameraRef.current.start();

    return () => {
      cameraRef.current?.stop();
      cameraRef.current = null;
    };
  }, [webcamRef, onFrame, options]);

  return cameraRef.current;
};

export default useCamera;
