import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision';
import { useEffect, useRef } from 'react';

type GestureTrackingOptions = {
    maxNumHands?: number;
    minDetectionConfidence?: number;
    minTrackingConfidence?: number;
    cameraWidth?: number;
    cameraHeight?: number;
    facingMode?: 'user' | 'environment';
    gestureColor?: string;
    lineWidth?: number;
};

const useGestureDetection = (
    webcamRef: React.RefObject<HTMLVideoElement | any>,
    onGestureDetected: (gesture: string) => void,
    options?: GestureTrackingOptions
) => {
    const gestureRecognizerRef = useRef<GestureRecognizer | null>(null);
    const lastProcessedRef = useRef<number>(0);

    useEffect(() => {
        if (!webcamRef.current) return;

        // Initialize the GestureRecognizer instance
        const createGestureRecognizer = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm'
            );
            gestureRecognizerRef.current = await GestureRecognizer.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: 'assets/gesture_recognizer.task',
                },
                runningMode: 'VIDEO',
                numHands: options?.maxNumHands ?? 2,
                minHandDetectionConfidence: options?.minDetectionConfidence ?? 0.5,
                minTrackingConfidence: options?.minTrackingConfidence ?? 0.5,
            });

            const detectGestures = async () => {
                if (!webcamRef.current || !gestureRecognizerRef.current) return;

                const now = Date.now();
                if (now - lastProcessedRef.current < 200) {
                    requestAnimationFrame(detectGestures);
                    return;
                }
                lastProcessedRef.current = now;

                try {
                    const results = await gestureRecognizerRef.current.recognizeForVideo(webcamRef.current, Date.now());
                    // Detect gestures
                    if (results.gestures && results.gestures.length > 0) {
                        const detectedGesture = results.gestures[0][0].categoryName;
                        onGestureDetected(detectedGesture);
                    }
                } catch (error) {
                    console.error('Error during gesture recognition:', error);
                }

                requestAnimationFrame(detectGestures);
            };

            detectGestures();
        };

        createGestureRecognizer();

        return () => {
            gestureRecognizerRef.current?.close();
            gestureRecognizerRef.current = null;
        };
    }, [webcamRef, options, onGestureDetected]);
};

export default useGestureDetection;