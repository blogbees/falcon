import {
  FilesetResolver,
  ObjectDetector,
  ObjectDetectorResult
} from "@mediapipe/tasks-vision";
import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

type ObjectDetectionOptions = {
  modelAssetPath: string;
  scoreThreshold?: number;
  delegate?: "CPU" | "GPU";
  runningMode?: "IMAGE" | "VIDEO";
};

const useObjectDetection = (
  webcamRef: React.RefObject<Webcam>,
  onObjectsDetected: (results: ObjectDetectorResult) => void,
  options?: ObjectDetectionOptions
) => {
  const objectDetectorRef = useRef<ObjectDetector | null>(null);

  useEffect(() => {
    let animationId: number;

    const createObjectDetector = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );

      objectDetectorRef.current = await ObjectDetector.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: options?.modelAssetPath,
          delegate: options?.delegate ?? "CPU",
        },
        scoreThreshold: options?.scoreThreshold ?? 0.5,
        runningMode: options?.runningMode ?? "VIDEO",
      });

      const detectObjects = async () => {
        if (
          !webcamRef.current ||
          !webcamRef.current.video ||
          webcamRef.current.video.readyState !== 4 ||
          !objectDetectorRef.current
        ) {
          animationId = requestAnimationFrame(detectObjects);
          return;
        }

        const video = webcamRef.current.video;

        try {
          const results = objectDetectorRef.current.detectForVideo(video, Date.now());
          if (results && results.detections && results.detections.length > 0) {
            onObjectsDetected(results);
          } else {
            onObjectsDetected({ detections: [] });
          }
        } catch (error) {
          console.error("Error during object detection:", error);
        }

        animationId = requestAnimationFrame(detectObjects);
      };

      detectObjects();
    };

    createObjectDetector();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (objectDetectorRef.current) {
        objectDetectorRef.current.close();
        objectDetectorRef.current = null;
      }
    };
  }, [webcamRef, onObjectsDetected, options]);

  return {};
};

export default useObjectDetection;
