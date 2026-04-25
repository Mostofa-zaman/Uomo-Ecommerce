import { create } from "zustand";

const useShortItem = create((set) => ({
  shortItem: "",
  setShortItem: (item) => set(() => ({ shortItem: item })),
}));

export default useShortItem;
