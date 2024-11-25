import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils'; // Use CommonJS import
import { FaceMesh } from '@mediapipe/face_mesh'; // Use CommonJS import

export default function MainContent() {
  const threeContainer = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (threeContainer.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      threeContainer.current.appendChild(renderer.domElement);

      // Create a rotating table
      const tableGeometry = new THREE.BoxGeometry(5, 0.1, 5);
      const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
      const table = new THREE.Mesh(tableGeometry, tableMaterial);
      scene.add(table);

      // Create a rotating cube
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(0, 0.6, 0);
      scene.add(cube);

      // Create a rotating sphere
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(2, 0.6, 0);
      scene.add(sphere);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(10, 10, 10);
      scene.add(pointLight);

      camera.position.z = 10;

      // Animation loop for rotation
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate objects
        table.rotation.y += 0.01;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      animate();
    }
  }, []);

  // Initialize MediaPipe on dialog open
  useEffect(() => {
    if (showDialog && videoRef.current) {
      const hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });

      hands.setOptions({
        maxNumHands: 2,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      const faceMesh = new FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (videoRef.current) {
          await hands.send({ image: videoRef.current });
          await faceMesh.send({ image: videoRef.current });
          }
        },
      });

      hands.onResults((results) => {
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          const hand = results.multiHandLandmarks[0];
          const indexFingerTip = hand[8]; // Tip of the index finger

          // Map hand position to Three.js coordinates
          const x = (indexFingerTip.x - 0.5) * 10; // Scale and center
          const y = -(indexFingerTip.y - 0.5) * 10;
        }
        // Update cube position
        console.log('Hands detected:', results);
      });

      faceMesh.onResults((results) => {
        console.log('Face detected:', results);
      });

      camera.start();
    }
  }, [showDialog]);

  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      {/* Three.js Scene */}
      <div ref={threeContainer} className="bg-gray-300"></div>
      <table className="mt-4 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Object</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Box</td>
            <td className="border border-gray-300 px-4 py-2">Cube</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Sphere</td>
            <td className="border border-gray-300 px-4 py-2">Sphere</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Table</td>
            <td className="border border-gray-300 px-4 py-2">Flat Surface</td>
          </tr>
        </tbody>
      </table>

      {/* Open Dialog Button */}
      <button
        onClick={() => setShowDialog(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Camera for Face & Hand Tracking
      </button>

      {/* Overlay Dialog */}
      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-4 relative">
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-2 right-2 text-red-500 font-bold"
            >
              X
            </button>
            <video
              ref={videoRef}
              className="w-full h-full"
              autoPlay
              playsInline
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}