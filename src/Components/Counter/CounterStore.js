import { create } from "zustand";

const useStore = create((set) => ({
  count: 10,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
