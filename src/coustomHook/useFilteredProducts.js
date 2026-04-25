import { useMemo } from "react";

import useBrandItems from "@/store/Brand";
import useCategory from "@/store/category";
import usePriceValue from "@/store/PriceRanger";
import useSearchingItems from "@/store/searchingItems";
import useShortItem from "@/store/short";

const useFilteredProducts = (allProducts) => {
  // Zustand state
  const searchValues = useSearchingItems((state) => state.searchValues);
  const category = useCategory((state) => state.category);
  const brandValue = useBrandItems((state) => state.brandValue);
  const maxValue = usePriceValue((state) => state.maxValue);
  const shortItem = useShortItem((state) => state.shortItem);

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(allProducts)) return [];

    let result = [...allProducts];

    // 🔍 Search filter
    if (searchValues?.trim()) {
      const searchWords = searchValues.split(" ").filter(Boolean);

      result = result.filter((item) => {
        const text = `
          ${item?.title}
          ${item?.description}
          ${item?.category}
          ${item?.brand}
          ${item?.tags?.join(" ") || ""}
        `.toLowerCase();

        return searchWords.every((word) =>
          text.includes(word.toLowerCase())
        );
      });
    }

    // 📂 Category filter
    if (category) {
      result = result.filter((item) => item?.category === category);
    }

    // 🏷️ Brand filter
    if (brandValue?.length) {
      result = result.filter((item) =>
        brandValue.includes(item?.brand)
      );
    }

    // 💰 Price filter
    if (maxValue) {
      result = result.filter((item) => item?.price <= maxValue);
    }

    // 🔃 Sorting
    switch (shortItem) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;

      case "latest":
        result = [...result].sort(
          (a, b) =>
            new Date(b?.meta?.createdAt) -
            new Date(a?.meta?.createdAt)
        );
        break;

      case "popularity":
        result = [...result].sort(
          (a, b) =>
            (b?.reviews?.length || 0) -
            (a?.reviews?.length || 0)
        );
        break;

      default:
        break;
    }

    return result;
  }, [allProducts, searchValues, category, brandValue, maxValue, shortItem]);

  return filteredProducts;
};

export default useFilteredProducts;