import { ObjectDetectorResult } from "@mediapipe/tasks-vision";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Observable } from "rxjs";

type DetectedResultsProps = {
    detectionResults$: Observable<ObjectDetectorResult>;
    webcamRef: React.RefObject<Webcam>;
};

const objectImages: Record<string, string> = {
    person: "👦",
    cat: "🐱",
    dog: "🐶",
    apple: "🍎",
    banana: "🍌",
    default: "✨"
};

const DetectedResults: React.FC<DetectedResultsProps> = ({ detectionResults$, webcamRef }) => {
    const [results, setResults] = useState<ObjectDetectorResult>({ detections: [] });

    // Use a ref to store snapshots in memory
    const snapshotsRef = useRef<Record<string, {
        snapshot: string;
        icon: string;
        name: string;
        score: number;
    }>>({});

    // Subscribe to detection results
    useEffect(() => {
        const subscription = detectionResults$.subscribe((newResults) => {
            setResults(newResults);
        });
        return () => subscription.unsubscribe();
    }, [detectionResults$]);

    // Check detections with at least 80% confidence
    const confidentDetections = results.detections.filter((d) => {
        const category = d.categories?.[0];
        const score = (category?.score ?? 0) * 100;
        return score >= 50;
    });

    // Take a snapshot for each new confident detection if none exists
    useEffect(() => {
        confidentDetections.forEach((detection) => {
            const category = detection.categories?.[0];
            if (!category) return;
            const name = category.categoryName.toLowerCase();
            const score = Math.round((category.score ?? 0) * 100);
            const icon = objectImages[name] || objectImages.default;

            if (!snapshotsRef.current[name] && webcamRef.current) {
                const snapshotSrc = webcamRef.current.getScreenshot() || "";
                if (snapshotSrc) {
                    snapshotsRef.current[name] = { snapshot: snapshotSrc, icon, name, score };
                }
            }
        });
    }, [confidentDetections, webcamRef]);

    // Convert snapshotsRef to an array for rendering
    const snapshotsArray = Object.values(snapshotsRef.current);

    return (
        <div className="flex flex-col items-center space-y-4 p-4 bg-gradient-to-tr from-pink-100 via-yellow-100 to-blue-100 rounded-xl shadow-lg w-full text-center">
            <h2 className="text-2xl font-bold text-blue-700">
                Yippee! Look at what we are sure about!
            </h2>
            <p className="text-md text-purple-600">
                If we're 80% sure about what we see, we'll snap a picture right now! But we start fresh every time you refresh the page.
            </p>

            {snapshotsArray.length === 0 ? (
                <div className="text-xl text-gray-600">
                    Hmm... I haven't been 80% sure about anything yet. Keep exploring!
                </div>
            ) : (
                <div className="grid grid-cols-5 gap-4 w-full mt-4">
                    {snapshotsArray.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm border-2 border-yellow-300"
                        >
                            <div className="text-3xl mb-1">{item.icon}</div>
                            <div className="text-xl font-semibold text-purple-700 capitalize">
                                {item.name} ({item.score}%)
                            </div>
                            <div className="w-full h-auto rounded-lg overflow-hidden border border-gray-300 shadow-sm mt-2">
                                <img src={item.snapshot} alt={item.name} className="w-full h-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default DetectedResults;
