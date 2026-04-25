import { create } from "zustand";

const useCategory = create((set) => ({
  category: "",
  setCategoryItem: (item) => set(() => ({ category: item })),
}));

export default useCategory;
