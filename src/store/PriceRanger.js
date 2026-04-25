import { create } from "zustand";

const usePriceValue = create((set) => ({
  maxValue: 0,
  setMaxValue: (price) => set(() => ({ maxValue: price })),
}));

export default usePriceValue;
