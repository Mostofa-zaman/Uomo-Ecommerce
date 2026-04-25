import { create } from "zustand";

const useBrandItems = create((set) => ({
  brandValue: [],
  setBrandValue: (brand) => set(() => ({ brandValue: brand })),
}));

export default useBrandItems;
