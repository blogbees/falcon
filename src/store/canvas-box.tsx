import { create } from 'zustand';
import * as THREE from 'three';

interface BoundingBoxState {
    boundingBox: {
        width: number;
        height: number;
        left: number;
        top: number;
        camera: THREE.Camera;
        canvasSize: { width: number; height: number };
    } | null;
    setBoundingBox: (boundingBox: BoundingBoxState['boundingBox']) => void;
}

export const useBoundingBoxStore = create<BoundingBoxState>((set) => ({
    boundingBox: null,
    setBoundingBox: (boundingBox) => set({ boundingBox }),
}));