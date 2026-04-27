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
  // for api and mamage RTQ
  const {
    data: allProductData,
    isError: allProductDataError,
    isLoading: allProcutDataLoading,
  } = useAllProduct();

  const value = useFilteredProducts(allProductData);

  const [open, isOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  // for short items
  const shortItem = useShortItem((state) => state.shortItem);
  const setShortItem = useShortItem((state) => state.setShortItem);

  useEffect(() => {
    setShortItem(selectedSort);
  }, [selectedSort]);

  // for images and icons
  const { chevronDown } = allIcons;
  const { shopBanner } = allImages;

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  // for ref
  const dropdownRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    const handleFilterClicked = (e) => {
      //  Fixed: Check if click is outside the entire dropdown wrapper
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("click", handleFilterClicked);

    return () => document.removeEventListener("click", handleFilterClicked);
  }, []);

  useEffect(() => {
    const clicked = (e) => {
      if (handleRef.current && handleRef.current.contains(e.target)) {
        isOpen(false);
      }
    };

    document.addEventListener("click", clicked);

    return () => document.removeEventListener("click", clicked);
  }, []);

  // for handle event
  const handleOpen = () => {
    isOpen(!open);
  };

  //  Add handler for sort selection
  const handleSortChange = (value) => {
    setSelectedSort(value);
    setFilterOpen(false);
  };

  // for icons & img
  const { filter, close } = allIcons;
  const { shopimg } = allImages;

  //  Get selected label
  const selectedLabel =
    sortOptions.find((opt) => opt.value === selectedSort)?.label ||
    "DEFAULT SORTING";

  return (
    <section className="z-0">
      {open && (
        <div
          className="fixed top-0 left-0 h-screen bg-[#22222258] w-full z-[800]"
          ref={handleRef}
        ></div>
      )}
      {open && (
        <div className="fixed z-[999] h-full top-0 right-0">
          <ShopFilter onClose={handleOpen} />
        </div>
      )}

      <div className="overflow-hidden relative bg-[url('./assets/images/ShopBannerBg.png')] py-8 sm:py-16 md:py-24 lg:py-33.75 px-4 sm:px-8 md:px-12 lg:mx-15 bg-no-repeat bg-cover bg-center mt-[60px] sm:mt-[70px] lg:mt-[75px] ">
        <div>
          <Images
            imgSrc={shopBanner}
            imgAlt={"shopBanner"}
            className="absolute top-5 right-0 w-[180px] h-[160px] sm:w-[280px] sm:h-[260px] md:w-[400px] md:h-[380px] lg:max-w-[550px] lg:h-[500px] object-cover opacity-70 sm:opacity-85 lg:opacity-100"
          />
        </div>

        <Container>
          <div className="">
            <h3
              className="font-bold text-[36px] sm:text-[52px] md:text-[70px] lg:text-[90px] uppercase tracking-wide
               text-[#efefef] bg-transparent
               filter-[drop-shadow(1px_0_0_#8b8282)_drop-shadow(-1px_0_0_#8b8282)_drop-shadow(0_1px_0_#8b8282)_drop-shadow(0_-1px_0_#8b8282)] leading-tight"
            >
              Jackets & Coats
            </h3>
          </div>
          <div className="pt-2 sm:pt-3 lg:pt-3.5">
            <ul className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 overflow-x-auto scrollbar-hide">
              {shopList1.map((items) => {
                return (
                  <li key={items.id} className="whitespace-nowrap">
                    <button className="texts_16_medium cursor-pointer text-head relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[2.5px] after:left-0 hover:after:w-[60%]  after:duration-500 after:ease-in-out  py-1">
                      {items.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-9 mb-16 sm:mb-20 lg:mb-25">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <p className="text-head texts_14_medium">
              <Link to={"/"}>HOME</Link> / THE SHOP
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-x-7.5 w-full sm:w-auto">
              {/*  Filter part start - FIXED */}

              <div ref={dropdownRef} className="relative">
                {/*  Button is now inside the ref */}
                <div
                  onClick={handleFilterOpen}
                  className="border-b-2 border-head text-head texts_14_medium flex items-center cursor-pointer gap-x-[10px]"
                >
                  {selectedLabel}{" "}
                  <span
                    className={`text-xl transition-transform ${
                      filterOpen ? "rotate-180" : ""
                    }`}
                  >
                    {chevronDown}
                  </span>
                </div>

                {/*  Dropdown menu inside the ref */}
                {filterOpen && (
                  <div className="shadow-lg flex flex-col items-start left-0 top-10 absolute z-50 py-5 px-8 bg-white texts_14_medium !leading-[35px] min-w-[220px] border-2 border-footer rounded-md">
                    {sortOptions.map((items) => {
                      return (
                        <button
                          key={items.value}
                          onClick={() => handleSortChange(items.value)}
                          className={`cursor-pointer relative transition duration-500 ease-in-out ${
                            selectedSort === items.value
                              ? "text-second-red font-semibold"
                              : "hover:translate-x-[10px] hover:text-second-red"
                          }`}
                        >
                          {items.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Filter part end */}
              <div className="hidden md:block h-6 w-0.5 bg-gray-300 cursor-pointer"></div>
              <div className="hidden md:flex justify-between items-center gap-x-3 cursor-pointer">
                <button className="texts_14_medium text-head">VIEW</button>
                <button className="texts_14_medium text-head">2</button>
                <button className="texts_14_medium text-head">3</button>
                <button className="texts_14_medium text-head">4</button>
              </div>
              <button
                className="border-l-2 pl-4 sm:pl-5 md:pl-6 lg:pl-7.5 border-footer texts_14_medium text-head flex items-center gap-x-[10px] cursor-pointer"
                onClick={handleOpen}
              >
                <span className="text-lg">{filter}</span> FILTER
              </button>
            </div>
          </div>
          <div>
            <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12.5">
              <ShopAllProdVirtual allProductItems={value} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ShopBanner;
