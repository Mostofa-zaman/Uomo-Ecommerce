import useBrandItems from "@/store/Brand";
import useCategory from "@/store/category";
import usePriceValue from "@/store/PriceRanger";
import useSearchingItems from "@/store/searchingItems";
import useShortItem from "@/store/short";
import { useMemo } from "react";

const useFilteredProducts = (allProducts) => {
  // data comes from zustand storage
  const searchValues = useSearchingItems((state) => state.searchValues);
  const category = useCategory((state) => state.category);
  const brandValue = useBrandItems((state) => state.brandValue);
  const maxValue = usePriceValue((state) => state.maxValue);
  const shortItem = useShortItem((state) => state.shortItem);


  const filtered = useMemo(() => {
    if (!allProducts) return [];

    let result = [...allProducts];

    // search logic
    if (searchValues) {
      const currentSearchItems = searchValues.split(" ").filter(Boolean);

      result = result.filter((sItems) => {
        const text = `
          ${sItems?.title}
          ${sItems?.description}
          ${sItems?.category}
          ${sItems?.brand}
          ${sItems?.tags?.join(" ")}
        `.toLowerCase();

        return currentSearchItems.every((word) =>
          text.includes(word.toLowerCase()),
        );
      });
    }

    // category logic
    if (category) {
      result = result.filter((cat) => cat?.category === category);
    }

    // brand logic
    if (brandValue && brandValue.length > 0) {
      result = result.filter((b) => brandValue.includes(b.brand));
    }

    // price logic
    if (maxValue) {
      result = result.filter((p) => p.price <= maxValue);
    }

    // sorting logic
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
          (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt),
        );
        break;

      case "popularity":
        result = [...result].sort(
          (a, b) => b.reviews?.length - a.reviews?.length, // reviews count দিয়ে sort
        );
        break;

      default:
        break;
    }

    return result;
  }, [searchValues, category, brandValue, maxValue, shortItem, allProducts]);

  return filtered;
};

export default useFilteredProducts;
