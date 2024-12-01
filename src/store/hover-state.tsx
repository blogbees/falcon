import { create } from 'zustand';

interface HoverState {
  hoveredIndex: number | undefined;
  setHoveredIndex: (index: number | undefined) => void;
}

export const useHoverStore = create<HoverState>((set) => ({
  hoveredIndex: undefined,
  setHoveredIndex: (index) => set({ hoveredIndex: index }),
}));
