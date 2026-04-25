import { create } from "zustand";

const useSearchingItems = create((set) => ({
  searchValues: "",
  setSearchingValue: (searchValue) => set({ searchValues: searchValue }),
}));

export default useSearchingItems;
