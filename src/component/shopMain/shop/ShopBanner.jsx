import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "@/component/common/Container";
import { shopList1, sortOptions } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import allImages from "@/helper/imagesProvider";
import ShopFilter from "./ShopFilter";
import Images from "@/component/common/Images";
import useAllProduct from "@/coustomHook/useAllProduct";
import ShopAllProdVirtual from "@/component/common/ShopAllProdVirtual";
import useShortItem from "@/store/short";
import useFilteredProducts from "@/coustomHook/useFilteredProducts";

const ShopBanner = () => {
  // API
  const { data, isError, isLoading } = useAllProduct();

  const filteredProducts = useFilteredProducts(data);

  // STATES
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  // ZUSTAND
  const setShortItem = useShortItem((state) => state.setShortItem);

  useEffect(() => {
    setShortItem(selectedSort);
  }, [selectedSort]);

  // ICONS / IMAGES
  const { chevronDown, filter } = allIcons;
  const { shopBanner } = allImages;

  // REFS
  const dropdownRef = useRef(null);
  const overlayRef = useRef(null);

  // OUTSIDE CLICK HANDLER
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsSortOpen(false);
      }

      if (
        overlayRef.current &&
        overlayRef.current.contains(e.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  // SORT CHANGE
  const handleSortChange = (value) => {
    setSelectedSort(value);
    setIsSortOpen(false);
  };

  const selectedLabel =
    sortOptions.find((opt) => opt.value === selectedSort)?.label ||
    "DEFAULT SORTING";

  return (
    <section>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/40 z-[800]"
        />
      )}

      {/* SIDEBAR */}
      {isSidebarOpen && (
        <div className="fixed right-0 top-0 z-[999] h-full">
          <ShopFilter onClose={() => setIsSidebarOpen(false)} />
        </div>
      )}

      {/* BANNER */}
      <div className="relative bg-[url('./assets/images/ShopBannerBg.png')] bg-cover bg-center py-20 px-4 mt-[70px]">

        <Images
          imgSrc={shopBanner}
          imgAlt="shop banner"
          className="absolute right-0 top-5 w-[250px] md:w-[450px] opacity-80"
        />

        <Container>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-gray-100">
            Jackets & Coats
          </h2>

          <ul className="flex gap-6 mt-4 overflow-x-auto">
            {shopList1.map((item) => (
              <li key={item.id}>
                <button className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all">
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* FILTER BAR */}
      <div className="my-16">
        <Container>

          <div className="flex flex-col sm:flex-row justify-between gap-4">

            <p className="text-sm">
              <Link to="/">HOME</Link> / SHOP
            </p>

            <div className="flex items-center gap-5 flex-wrap">

              {/* SORT DROPDOWN */}
              <div ref={dropdownRef} className="relative">

                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 border-b border-black"
                >
                  {selectedLabel}
                  <span
                    className={`transition-transform ${
                      isSortOpen ? "rotate-180" : ""
                    }`}
                  >
                    {chevronDown}
                  </span>
                </button>

                {isSortOpen && (
                  <div className="absolute top-10 left-0 bg-white border shadow-lg p-3 w-[200px] z-50">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSortChange(opt.value)}
                        className="block w-full text-left py-1 hover:text-red-500"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* FILTER BUTTON */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 border-l pl-4"
              >
                {filter} FILTER
              </button>

            </div>
          </div>

          {/* PRODUCTS */}
          <div className="mt-10">
            {isLoading && <p>Loading products...</p>}
            {isError && <p>Something went wrong!</p>}

            <ShopAllProdVirtual allProductItems={filteredProducts} />
          </div>

        </Container>
      </div>

    </section>
  );
};

export default ShopBanner;