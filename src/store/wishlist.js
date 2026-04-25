import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set) => ({
      wishlistItems: [],

      addToWishlist: (item) =>
        set((state) => {
          const exists = state.wishlistItems.some((i) => i.id === item.id);
          if (exists) return state;
          return {
            wishlistItems: [...state.wishlistItems, item],
          };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
        })),

      clearWishlist: () => set({ wishlistItems: [] }),
    }),
    {
      name: "wishlist-storage", // localStorage key
    },
  ),
);

export default useWishlistStore;