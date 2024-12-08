import { Text, useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, N8AO, TiltShift2, ToneMapping } from "@react-three/postprocessing";
import { BallCollider, CuboidCollider, CylinderCollider, Physics, RigidBody } from "@react-three/rapier";
import clamp from "lodash-es/clamp";
import { easing } from "maath";
import { useCallback, useRef, useState } from 'react';
import { FaExpand } from 'react-icons/fa';
import Webcam from 'react-webcam';
import { Subject } from "rxjs";
import * as THREE from 'three';
import { create } from "zustand";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/falcon.png";
import useHandsTracking from '../../hooks/mediapipe/useHandsTracking';

const HandlePingPong = () => {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const handPositionSubject = new Subject<{
        depthFrom: THREE.Vector3,
        depthTo: THREE.Vector3,
        from: THREE.Vector3,
        to: THREE.Vector3
    }>();
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
                // Hand position state
                const gestureCompute = {
                    depthFrom: new THREE.Vector3(),
                    depthTo: new THREE.Vector3(),
                    from: new THREE.Vector3(),
                    to: new THREE.Vector3(),
                };
                // Main points to control gestures
                gestureCompute.depthFrom
                    .set(
                        -landmarks[0].x + 0.5,
                        -landmarks[0].y + 0.5,
                        -landmarks[0].z
                    )
                    .multiplyScalar(4);
                gestureCompute.depthTo
                    .set(
                        -landmarks[0].x + 0.5,
                        -landmarks[0].y + 0.5,
                        -landmarks[0].z
                    )
                    .multiplyScalar(4);
                gestureCompute.from
                    .set(
                        -landmarks[0].x + 0.5,
                        -landmarks[0].y + 0.5,
                        -landmarks[0].z
                    )
                    .multiplyScalar(4);
                gestureCompute.to
                    .set(
                        -landmarks[0].x + 0.5,
                        -landmarks[0].y + 0.5,
                        -landmarks[0].z
                    )
                    .multiplyScalar(4);
                handPositionSubject.next(gestureCompute);
            }
        },
        {
            maxNumHands: 1,
            minDetectionConfidence: 0.4,
            minTrackingConfidence: 0.4,
            modelComplexity: 1,
            handColor: '#FFFF66',
            lineWidth: 10,
            cameraWidth: 320,
            cameraHeight: 240,
            facingMode: 'user',
        }
    );
    // Zustand Store
    interface GameState {
        count: number;
        pong: (velocity: number) => void;
        reset: () => void;
    }

    const useGameState = create<GameState>((set) => ({
        count: 0,
        pong: (velocity: number) => {
            const ping = new Audio("/falcon/assets/ping.mp3");
            ping.currentTime = 0;
            ping.volume = clamp(velocity / 20, 0, 1);
            ping.play();
            if (velocity > 10) {
                set((state) => ({ count: state.count + 1 }));
            }
        },
        reset: () => set({ count: 0 }),
    }));

    interface AppProps {
        ready: boolean;
    }

    function PingPong({ ready }: AppProps) {
        return (
            <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 5, 12], fov: 45 }}>
                <color attach="background" args={["#f0f0f0"]} />
                <ambientLight intensity={0.5 * Math.PI} />
                <spotLight
                    decay={0}
                    position={[-10, 15, -5]}
                    angle={1}
                    penumbra={1}
                    intensity={2}
                    castShadow
                    shadow-mapSize={1024}
                    shadow-bias={-0.0001}
                />
                <Physics gravity={[0, -40, 0]} timeStep="vary">
                    {ready && <Ball position={[0, 5, 0]} />}
                    <Paddle />
                </Physics>
                <EffectComposer>
                    <N8AO aoRadius={0.5} intensity={2} />
                    <TiltShift2 blur={0.2} />
                    <ToneMapping />
                </EffectComposer>
                <Bg />
            </Canvas>
        );
    }

    function Paddle({ vec = new THREE.Vector3(), dir = new THREE.Vector3() }: { vec?: THREE.Vector3; dir?: THREE.Vector3 }) {
        const api = useRef<any>();
        const model = useRef<THREE.Group>(null);
        const { count, pong } = useGameState();
        const { nodes, materials }: any = useGLTF("/falcon/assets/pingpong.glb");

        const contactForce = useCallback(
            (payload: any) => {
                pong(payload.totalForceMagnitude / 100);
                if (model.current) {
                    model.current.position.y = -payload.totalForceMagnitude / 10000;
                }
            },
            [pong]
        );

        useFrame((state, delta) => {
            const subscription = handPositionSubject.subscribe((gestureCompute) => {
                vec.set(gestureCompute.from.x, gestureCompute.from.y, gestureCompute.from.z).unproject(state.camera);
                dir.copy(vec).sub(state.camera.position).normalize();
                vec.add(dir.multiplyScalar(state.camera.position.length()));
                api.current?.setNextKinematicTranslation({ x: vec.x, y: vec.y, z: 0 });
                api.current?.setNextKinematicRotation({ x: 0, y: 0, z: (gestureCompute.from.x * Math.PI) / 10, w: 1 });
                easing.damp3(model.current!.position, [0, 0, 0], 0.2, delta);
                easing.damp3(state.camera.position, [-gestureCompute.from.x * 4, 2.5 + -gestureCompute.from.y * 4, 12], 0.3, delta);
                state.camera.lookAt(0, 0, 0);
            });
            return () => subscription.unsubscribe();
        });

        return (
            <RigidBody
                ccd
                canSleep={false}
                ref={api}
                type="kinematicPosition"
                colliders={false}
                onContactForce={contactForce}
            >
                <CylinderCollider args={[0.15, 1.75]} />
                <group ref={model} position={[0, 2, 0]} scale={0.15}>
                    <Text anchorX="center" anchorY="middle" rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} fontSize={10} children={count} />
                    <group rotation={[1.88, -0.35, 2.32]} scale={[2.97, 2.97, 2.97]}>
                        <primitive object={nodes.Bone} />
                        <primitive object={nodes.Bone003} />
                        <primitive object={nodes.Bone006} />
                        <primitive object={nodes.Bone010} />
                        <skinnedMesh castShadow receiveShadow material={materials.glove} material-roughness={1} geometry={nodes.arm.geometry} skeleton={nodes.arm.skeleton} />
                    </group>
                    <group rotation={[0, -0.04, 0]} scale={141.94}>
                        <mesh castShadow receiveShadow material={materials.wood} geometry={nodes.mesh.geometry} />
                        <mesh castShadow receiveShadow material={materials.side} geometry={nodes.mesh_1.geometry} />
                        <mesh castShadow receiveShadow material={materials.foam} geometry={nodes.mesh_2.geometry} />
                        <mesh castShadow receiveShadow material={materials.lower} geometry={nodes.mesh_3.geometry} />
                        <mesh castShadow receiveShadow material={materials.upper} geometry={nodes.mesh_4.geometry} />
                    </group>
                </group>
            </RigidBody>
        );
    }

    function Ball(props: any) {
        const api = useRef<any>();
        const map = useTexture(logo);
        const { viewport } = useThree();
        const reset = useGameState((state) => state.reset);

        const onCollisionEnter = useCallback(() => {
            reset();
            api.current?.setTranslation({ x: 0, y: 5, z: 0 });
            api.current?.setLinvel({ x: 0, y: 5, z: 0 });
        }, [reset]);

        return (
            <group {...props}>
                <RigidBody ccd ref={api} angularDamping={0.8} restitution={1} canSleep={false} colliders={false}>
                    <BallCollider args={[0.5]} />
                    <mesh castShadow receiveShadow>
                        <sphereGeometry args={[0.5, 64, 64]} />
                        <meshStandardMaterial map={map} />
                    </mesh>
                </RigidBody>
                <RigidBody type="fixed" colliders={false} position={[0, -viewport.height * 2, 0]} restitution={2.1} onCollisionEnter={onCollisionEnter}>
                    <CuboidCollider args={[1000, 2, 1000]} />
                </RigidBody>
                <RigidBody type="fixed" colliders={false} position={[0, viewport.height * 4, 0]} restitution={2.1} onCollisionEnter={onCollisionEnter}>
                    <CuboidCollider args={[1000, 2, 1000]} />
                </RigidBody>
            </group>
        );
    }

    function Bg() {
        const texture = useTexture(bg);
        return (
            <mesh rotation={[0, Math.PI / 1.25, 0]} scale={100}>
                <sphereGeometry />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
        );
    }


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
                <PingPong ready />
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

export default HandlePingPong;