import useAllProduct from "@/coustomHook/useAllProduct";
import allIcons from "@/helper/iconProvider";
import useBrandItems from "@/store/Brand";
import useCategory from "@/store/category";
import usePriceValue from "@/store/PriceRanger";
import useSearchingItems from "@/store/searchingItems";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const XIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ShopFilter = ({ onClose }) => {
  // for zustand stroage
  const setMaxValue = usePriceValue((state) => state.setMaxValue);
  const setBrandValue = useBrandItems((state) => state.setBrandValue);
  const setSearchingValue = useSearchingItems(
    (state) => state.setSearchingValue,
  );
  const setCategoryItem = useCategory((state) => state.setCategoryItem);
  const category = useCategory((state) => state.category);

  const brandValue = useBrandItems((state) => state.brandValue);
  const maxValue = usePriceValue((state) => state.maxValue);

  const handleCategory = (items) => {
    setCategoryItem(category === items ? "" : items);
    setMaxValue(1000000);
    setBrandValue([]);
    setSearchingValue("");
  };

  const {
    data: allProductData,
    isError: allProductDataError,
    isLoading: allProcutDataLoading,
  } = useAllProduct();

  const uniqueCategories = React.useMemo(() => {
    if (!allProductData) return [];
    return [...new Set(allProductData.map((item) => item.category))];
  }, [allProductData]);

  const { close } = allIcons;

  const [open, setOpen] = useState({
    categories: true,
    colors: true,
    sizes: true,
    brands: true,
    price: true,
  });

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  // const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceMax, setPriceMax] = useState(1000000);
  const [brandSearch, setBrandSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const selectedBrands = useBrandItems((state) => state.brandValue);
  useEffect(() => {
    setBrandValue(selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    setMaxValue(priceMax);
  }, [priceMax]);

  const toggle = (section) =>
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));

  const colors = [
    { id: "navy", bg: "bg-[#0A2472]" },
    { id: "gold", bg: "bg-[#D7BB4F]" },
    { id: "black", bg: "bg-[#282828]" },
    { id: "lightblue", bg: "bg-[#B1D6E8]" },
    { id: "brown", bg: "bg-[#9C7539]" },
    { id: "amber", bg: "bg-[#D29B48]" },
    { id: "pink", bg: "bg-pink-300" },
    { id: "red", bg: "bg-red-500" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const productBrandRefine = (productData) => {
    if (!productData) return {};

    return productData.reduce((acc, product) => {
      let brand = product?.brand || "Unknown Brand";

      if (acc[brand]) {
        acc[brand] = acc[brand] + 1;
      } else {
        acc[brand] = 1;
      }

      return acc;
    }, {});
  };

  const filteredBrand = productBrandRefine(allProductData);

  const filteredBrandEntries = Object.entries(filteredBrand).filter(([name]) =>
    name.toLowerCase().includes(brandSearch.toLowerCase()),
  );

  const removeFilter = (id) =>
    setActiveFilters((prev) => prev.filter((f) => f.id !== id));

  const resetFilters = () => {
    setActiveFilters([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedBrands([]);
    setPriceMax(1000000);
  };

  const toggleColor = (id) =>
    setSelectedColors((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );

  const toggleSize = (s) =>
    setSelectedSizes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const toggleBrand = (name) => {
    if (brandValue.includes(name)) {
      setBrandValue(brandValue.filter((b) => b !== name));
    } else {
      setBrandValue([...brandValue, name]);
    }
  };

  return (
    <div className="max-w-105 bg-white h-full shadow-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center bg-footer pt-8.25 pb-6.5 pl-10 pr-10 shrink-0">
        <h3 className="texts_16_medium text-head uppercase">Filter By</h3>
        <button onClick={onClose} className="text-head text-2xl cursor-pointer">
          {close}
        </button>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Categories */}
        <div className="pl-10 pt-9.5 pr-10 pb-4">
          <button
            onClick={() => toggle("categories")}
            className="flex justify-between w-full texts_18_medium text-head uppercase"
          >
            Product Categories
            <span>
              {open.categories ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
          {open.categories && (
            <div className="grid grid-cols-2 gap-y-2.5 mt-3.5">
              {uniqueCategories?.map((cat) => {
                const active = cat === category;
                return (
                  <button
                    key={cat}
                    className={` capitalize texts_14_medium text-start cursor-pointer  ${
                      active ? "text-second-red" : "text-head"
                    }`}
                    onClick={() => handleCategory(cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="mx-10" />

        {/* Color */}
        <div className="pl-10 pt-9.5 pr-10 pb-4">
          <button
            onClick={() => toggle("colors")}
            className="flex justify-between w-full texts_18_medium text-head uppercase"
          >
            Color
            <span>{open.colors ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {open.colors && (
            <div className="flex flex-wrap gap-[25px] mt-[23px]">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => toggleColor(color.id)}
                  className={`w-4 h-4 rounded-full ${color.bg} cursor-pointer ${
                    selectedColors.includes(color.id)
                      ? "ring-2 ring-head ring-offset-3"
                      : ""
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mx-10" />

        {/* Sizes */}
        <div className="pl-10 pt-9.5 pr-10 pb-4">
          <button
            onClick={() => toggle("sizes")}
            className="flex justify-between w-full texts_18_medium text-head uppercase"
          >
            Sizes
            <span>{open.sizes ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {open.sizes && (
            <div className="flex flex-wrap gap-4 mt-[23px]">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`border px-[21px] py-1 texts_14_regular cursor-pointer transition-colors ${
                    selectedSizes.includes(size)
                      ? "bg-head text-white border-head"
                      : "text-head border-footer hover:bg-head hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mx-10" />

        {/* Brands */}
        <div className="pl-10 pt-9.5 pr-10 pb-4">
          <button
            onClick={() => toggle("brands")}
            className="flex justify-between w-full texts_18_medium text-head uppercase"
          >
            Brands
            <span>{open.brands ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {open.brands && (
            <div className="mt-[23px]">
              {/* Search */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  className="border-2 border-footer w-full px-3 py-2.5 texts_14_medium text-head pr-10"
                />
                <span className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-second">
                  <IoSearchOutline size={18} />
                </span>
              </div>

              <div className="flex flex-col">
                {filteredBrandEntries.map(([name, count]) => (
                  <label
                    key={name}
                    className="flex justify-between items-center py-2.5 cursor-pointer"
                  >
                    <span className="flex items-center gap-2 texts_14_medium text-head">
                      <input
                        type="checkbox"
                        checked={brandValue.includes(name)}
                        onChange={() => {
                          toggleBrand(name);
                          setCategoryItem("");
                          setMaxValue(1000000);
                          setSearchingValue("");
                        }}
                        className="w-3.5 h-3.5 cursor-pointer accent-head"
                      />
                      {name}
                    </span>
                    <span className="texts_14_regular text-second">
                      {count}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mx-10" />

        {/* Price */}
        <div className="pl-10 pt-9.5 pr-10 pb-4">
          <button
            onClick={() => toggle("price")}
            className="flex justify-between w-full texts_18_medium text-head uppercase"
          >
            Price
            <span>{open.price ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {open.price && (
            <div className="mt-[23px]">
              <input
                type="range"
                min="1"
                max="1000000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-head cursor-pointer"
              />
              <div className="flex justify-between texts_14_medium text-head mt-2">
                <span>Min Price: $1</span>
                <span>Max: ${priceMax}</span>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="pl-10 pr-10 pt-5 pb-7 flex flex-wrap gap-[17px]">
            {activeFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => removeFilter(f.id)}
                className="flex items-center gap-1.5 border border-footer px-2.5 py-1.5 texts_13_regular text-head uppercase cursor-pointer hover:bg-secondbg transition-colors"
              >
                <XIcon />
                {f.label}
              </button>
            ))}
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 border border-footer px-2.5 py-1.5 texts_13_regular text-head uppercase cursor-pointer hover:bg-secondbg transition-colors"
            >
              <XIcon />
              RESET FILTER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopFilter;
