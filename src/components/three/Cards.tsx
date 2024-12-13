import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { FaExpand, FaHandPaper, FaHandPointDown, FaHandPointLeft, FaHandPointRight, FaHandPointUp } from 'react-icons/fa';
import Webcam from 'react-webcam';
import * as THREE from 'three';
import useHandsTracking from '../../hooks/mediapipe/useHandsTracking';
import Moon from './commons/celestial/Moon';
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Plane: THREE.Mesh
        ['1_clubs']: THREE.Mesh
        ['1_dimonds']: THREE.Mesh
        ['4_hearts']: THREE.Mesh
        ['9_spade']: THREE.Mesh
        ['8_hearts']: THREE.Mesh
        ['1_hearts']: THREE.Mesh
        ['2_dimonds']: THREE.Mesh
        ['1_spades']: THREE.Mesh
        ['10_clubs']: THREE.Mesh
        ['4_clubs']: THREE.Mesh
        ['10_dimonds']: THREE.Mesh
        ['2_spade']: THREE.Mesh
        ['2_clubs']: THREE.Mesh
        ['4_spades']: THREE.Mesh
        ['10_hearts']: THREE.Mesh
        ['4_dimonds']: THREE.Mesh
        ['2_hearts']: THREE.Mesh
        ['10_spades']: THREE.Mesh
        ['3_clubs']: THREE.Mesh
        ['3_heart']: THREE.Mesh
        ['3_spades']: THREE.Mesh
        ['3_dimonds']: THREE.Mesh
        ['8_dimonds']: THREE.Mesh
        ['6_spades']: THREE.Mesh
        Cube058: THREE.Mesh
        king_clubs: THREE.Mesh
        Cube064: THREE.Mesh
        Cube067: THREE.Mesh
        Cube068: THREE.Mesh
        Cube070: THREE.Mesh
        Cube075: THREE.Mesh
        Cube076: THREE.Mesh
        Cube077: THREE.Mesh
        Cube078: THREE.Mesh
        Cube079: THREE.Mesh
        Cube080: THREE.Mesh
        Cube082: THREE.Mesh
        Cube084: THREE.Mesh
        Cube091: THREE.Mesh
        Cube092: THREE.Mesh
        Cube: THREE.Mesh
        Cube001: THREE.Mesh
        Cube003: THREE.Mesh
        Cube005: THREE.Mesh
        Cube007: THREE.Mesh
        Cube009: THREE.Mesh
        Cube011: THREE.Mesh
        Cube013: THREE.Mesh
        Cube015: THREE.Mesh
        Cube017: THREE.Mesh
        Cube019: THREE.Mesh
        Cube021: THREE.Mesh
        Cube023: THREE.Mesh
        Cube025: THREE.Mesh
        Cube028: THREE.Mesh
        Cube030: THREE.Mesh
        Cube032: THREE.Mesh
        Cube034: THREE.Mesh
        Cube036: THREE.Mesh
        Cube038: THREE.Mesh
        Cube040: THREE.Mesh
        Cube042: THREE.Mesh
        Cube044: THREE.Mesh
        Cube046: THREE.Mesh
        Cube002: THREE.Mesh
        Cube004: THREE.Mesh
        Cube006: THREE.Mesh
        Cube008: THREE.Mesh
        Cube010: THREE.Mesh
        Cube012: THREE.Mesh
        Cube014: THREE.Mesh
        Cube016: THREE.Mesh
        Cube018: THREE.Mesh
        Cube020: THREE.Mesh
        Cube022: THREE.Mesh
        Cube024: THREE.Mesh
        Cube026: THREE.Mesh
        Cube027: THREE.Mesh
        Cube029: THREE.Mesh
        Cube031: THREE.Mesh
        Cube033: THREE.Mesh
        Cube035: THREE.Mesh
        Cube037: THREE.Mesh
        Cube039: THREE.Mesh
        Cube041: THREE.Mesh
        Cube043: THREE.Mesh
        Cube045: THREE.Mesh
        Cube047: THREE.Mesh
        Cube048: THREE.Mesh
        Cube049: THREE.Mesh
        Cube050: THREE.Mesh
        Cube051: THREE.Mesh
        Cube052: THREE.Mesh
    }
    materials: {
        cards: THREE.MeshStandardMaterial
    }
    animations: ''
}

const Cards = () => {
    const { nodes, materials } = useGLTF('/falcon/assets/cards.glb') as GLTFResult
    const texture = useLoader(THREE.TextureLoader, "/falcon/assets/cards-texture.png"); // Load texture

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
            <div className='relative w-full h-full'>
                <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 5, 12], fov: 45 }}>
                    <ambientLight intensity={0.5 * Math.PI} />
                    <group dispose={null}>
                        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, 0, -0.109]} scale={2.306} />
                        <mesh geometry={nodes['1_clubs'].geometry} material={materials.cards} position={[-1.139, 0.01, 0.979]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['1_dimonds'].geometry} material={materials.cards} position={[-1.124, 0.01, 0.922]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['4_hearts'].geometry} material={materials.cards} position={[-1.109, 0.01, 0.864]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['9_spade'].geometry} material={materials.cards} position={[-1.093, 0.01, 0.806]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['8_hearts'].geometry} material={materials.cards} position={[-1.078, 0.01, 0.748]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['1_hearts'].geometry} material={materials.cards} position={[-1.047, 0.01, 0.632]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['2_dimonds'].geometry} material={materials.cards} position={[-1.032, 0.01, 0.575]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['1_spades'].geometry} material={materials.cards} position={[-1.016, 0.01, 0.517]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['10_clubs'].geometry} material={materials.cards} position={[-1.001, 0.01, 0.459]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['4_clubs'].geometry} material={materials.cards} position={[-0.955, 0.01, 0.285]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['10_dimonds'].geometry} material={materials.cards} position={[-0.894, 0.01, 0.057]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['2_spade'].geometry} material={materials.cards} position={[-0.85, 0.01, -0.108]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['2_clubs'].geometry} material={materials.cards} position={[-0.835, 0.01, -0.163]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['4_spades'].geometry} material={materials.cards} position={[-0.82, 0.01, -0.219]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['10_hearts'].geometry} material={materials.cards} position={[-0.718, 0.01, -0.604]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['4_dimonds'].geometry} material={materials.cards} position={[-0.659, 0.01, -0.824]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['2_hearts'].geometry} material={materials.cards} position={[-0.644, 0.01, -0.879]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['10_spades'].geometry} material={materials.cards} position={[-0.601, 0.01, -1.044]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['3_clubs'].geometry} material={materials.cards} position={[-0.864, 0.01, -0.053]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['3_heart'].geometry} material={materials.cards} position={[-0.586, 0.01, -1.099]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['3_spades'].geometry} material={materials.cards} position={[-0.615, 0.01, -0.989]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['3_dimonds'].geometry} material={materials.cards} position={[-0.63, 0.01, -0.934]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['8_dimonds'].geometry} material={materials.cards} position={[-0.688, 0.01, -0.714]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes['6_spades'].geometry} material={materials.cards} position={[-0.939, 0.01, 0.227]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube058.geometry} material={materials.cards} position={[-1.062, 0.01, 0.69]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.king_clubs.geometry} material={materials.cards} position={[-0.985, 0.01, 0.401]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube064.geometry} material={materials.cards} position={[-0.97, 0.01, 0.343]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube067.geometry} material={materials.cards} position={[-0.924, 0.01, 0.17]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube068.geometry} material={materials.cards} position={[-0.908, 0.01, 0.112]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube070.geometry} material={materials.cards} position={[-0.879, 0.01, 0.002]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube075.geometry} material={materials.cards} position={[-0.806, 0.01, -0.274]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube076.geometry} material={materials.cards} position={[-0.791, 0.01, -0.329]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube077.geometry} material={materials.cards} position={[-0.776, 0.01, -0.384]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube078.geometry} material={materials.cards} position={[-0.762, 0.01, -0.439]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube079.geometry} material={materials.cards} position={[-0.747, 0.01, -0.494]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube080.geometry} material={materials.cards} position={[-0.732, 0.01, -0.549]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube082.geometry} material={materials.cards} position={[-0.703, 0.01, -0.659]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube084.geometry} material={materials.cards} position={[-0.674, 0.01, -0.769]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube091.geometry} material={materials.cards} position={[-0.571, 0.01, -1.154]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube092.geometry} material={materials.cards} position={[-0.557, 0.01, -1.21]} rotation={[-1.52, -0.014, -0.234]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube.geometry} material={materials.cards} position={[-0.136, 0.001, 0]} rotation={[Math.PI / 2, 0, 0.03]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube001.geometry} material={materials.cards} position={[-0.136, 0.002, 0]} rotation={[Math.PI / 2, 0, -0.037]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube003.geometry} material={materials.cards} position={[-0.136, 0.003, 0]} rotation={[Math.PI / 2, 0, -0.058]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube005.geometry} material={materials.cards} position={[-0.136, 0.005, 0]} rotation={[Math.PI / 2, 0, 0.075]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube007.geometry} material={materials.cards} position={[-0.136, 0.006, 0]} rotation={[Math.PI / 2, 0, 0.002]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube009.geometry} material={materials.cards} position={[-0.136, 0.007, 0]} rotation={[Math.PI / 2, 0, -0.095]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube011.geometry} material={materials.cards} position={[-0.136, 0.009, 0]} rotation={[Math.PI / 2, 0, -0.015]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube013.geometry} material={materials.cards} position={[-0.136, 0.01, 0]} rotation={[Math.PI / 2, 0, -0.024]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube015.geometry} material={materials.cards} position={[-0.136, 0.011, 0]} rotation={[Math.PI / 2, 0, -0.118]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube017.geometry} material={materials.cards} position={[-0.136, 0.013, 0]} rotation={[Math.PI / 2, 0, -0.098]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube019.geometry} material={materials.cards} position={[-0.136, 0.014, 0]} rotation={[Math.PI / 2, 0, -0.131]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube021.geometry} material={materials.cards} position={[-0.136, 0.016, 0]} rotation={[Math.PI / 2, 0, 0.12]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube023.geometry} material={materials.cards} position={[-0.136, 0.017, 0]} rotation={[Math.PI / 2, 0, -0.023]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube025.geometry} material={materials.cards} position={[-0.136, 0.018, 0]} rotation={[Math.PI / 2, 0, 0.041]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube028.geometry} material={materials.cards} position={[-0.136, 0.02, 0]} rotation={[Math.PI / 2, 0, -0.137]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube030.geometry} material={materials.cards} position={[-0.136, 0.021, 0]} rotation={[Math.PI / 2, 0, -0.001]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube032.geometry} material={materials.cards} position={[-0.136, 0.022, 0]} rotation={[Math.PI / 2, 0, 0.104]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube034.geometry} material={materials.cards} position={[-0.136, 0.024, 0]} rotation={[Math.PI / 2, 0, 0.018]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube036.geometry} material={materials.cards} position={[-0.136, 0.025, 0]} rotation={[Math.PI / 2, 0, 0.078]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube038.geometry} material={materials.cards} position={[-0.136, 0.026, 0]} rotation={[Math.PI / 2, 0, 0.046]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube040.geometry} material={materials.cards} position={[-0.136, 0.028, 0]} rotation={[Math.PI / 2, 0, -0.047]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube042.geometry} material={materials.cards} position={[-0.136, 0.029, 0]} rotation={[Math.PI / 2, 0, 0.027]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube044.geometry} material={materials.cards} position={[-0.136, 0.03, 0]} rotation={[Math.PI / 2, 0, -0.009]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube046.geometry} material={materials.cards} position={[-0.136, 0.032, 0]} rotation={[Math.PI / 2, 0, -0.118]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube002.geometry} material={materials.cards} position={[-0.136, 0.033, 0]} rotation={[Math.PI / 2, 0, -0.056]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube004.geometry} material={materials.cards} position={[-0.136, 0.035, 0]} rotation={[Math.PI / 2, 0, -0.047]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube006.geometry} material={materials.cards} position={[-0.136, 0.036, 0]} rotation={[Math.PI / 2, 0, 0.015]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube008.geometry} material={materials.cards} position={[-0.136, 0.037, 0]} rotation={[Math.PI / 2, 0, 0.151]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube010.geometry} material={materials.cards} position={[-0.136, 0.039, 0]} rotation={[Math.PI / 2, 0, -0.063]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube012.geometry} material={materials.cards} position={[-0.136, 0.04, 0]} rotation={[Math.PI / 2, 0, 0.154]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube014.geometry} material={materials.cards} position={[-0.136, 0.041, 0]} rotation={[Math.PI / 2, 0, -0.151]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube016.geometry} material={materials.cards} position={[-0.136, 0.043, 0]} rotation={[Math.PI / 2, 0, -0.007]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube018.geometry} material={materials.cards} position={[-0.136, 0.044, 0]} rotation={[Math.PI / 2, 0, -0.15]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube020.geometry} material={materials.cards} position={[-0.136, 0.045, 0]} rotation={[Math.PI / 2, 0, -0.04]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube022.geometry} material={materials.cards} position={[-0.136, 0.047, 0]} rotation={[Math.PI / 2, 0, 0.033]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube024.geometry} material={materials.cards} position={[-0.136, 0.048, 0]} rotation={[Math.PI / 2, 0, 0.075]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube026.geometry} material={materials.cards} position={[-0.136, 0.05, 0]} rotation={[Math.PI / 2, 0, -0.056]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube027.geometry} material={materials.cards} position={[-0.136, 0.051, 0]} rotation={[Math.PI / 2, 0, 0.038]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube029.geometry} material={materials.cards} position={[-0.136, 0.052, 0]} rotation={[Math.PI / 2, 0, 0.001]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube031.geometry} material={materials.cards} position={[-0.136, 0.054, 0]} rotation={[Math.PI / 2, 0, 0.05]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube033.geometry} material={materials.cards} position={[-0.136, 0.055, 0]} rotation={[Math.PI / 2, 0, -0.026]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube035.geometry} material={materials.cards} position={[-0.136, 0.056, 0]} rotation={[Math.PI / 2, 0, 0.152]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube037.geometry} material={materials.cards} position={[-0.136, 0.058, 0]} rotation={[Math.PI / 2, 0, -0.001]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube039.geometry} material={materials.cards} position={[-0.136, 0.059, 0]} rotation={[Math.PI / 2, 0, -0.011]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube041.geometry} material={materials.cards} position={[-0.136, 0.06, 0]} rotation={[Math.PI / 2, 0, -0.049]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube043.geometry} material={materials.cards} position={[-0.136, 0.062, 0]} rotation={[Math.PI / 2, 0, 0.029]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube045.geometry} material={materials.cards} position={[-0.136, 0.063, 0]} rotation={[Math.PI / 2, 0, 0.026]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube047.geometry} material={materials.cards} position={[-0.136, 0.065, 0]} rotation={[Math.PI / 2, 0, 0.036]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube048.geometry} material={materials.cards} position={[-0.157, 0.008, 0.344]} rotation={[-Math.PI / 2, 0, 0.151]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube049.geometry} material={materials.cards} position={[-0.078, 0.003, 0.414]} rotation={[-Math.PI / 2, 0, 0.273]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube050.geometry} material={materials.cards} position={[-0.027, 0.003, 0.49]} rotation={[-Math.PI / 2, 0, 0.289]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube051.geometry} material={materials.cards} position={[0.276, 0.023, -0.14]} rotation={[-Math.PI / 2, 0, 0.151]} scale={[0.178, 0, 0.128]} />
                        <mesh geometry={nodes.Cube052.geometry} material={materials.cards} position={[0.276, 0.023, 0.01]} rotation={[-Math.PI / 2, 0, 0.151]} scale={[0.178, 0, 0.128]} />
                    </group>
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
useGLTF.preload('/falcon/assets/cards.glb')

export default Cards;