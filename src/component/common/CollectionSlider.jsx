import allIcons from "@/helper/iconProvider";
import React from "react";
import { GiCelebrationFire } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import producttwo from "@/assets/images/productstwo.png";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import Product from "./Product";

const CollectionSlider = ({ collectionHeading, iconClassName, prevButton, nextButton }) => {
  const { chevron } = allIcons;

  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
    1280: { slidesPerView: 5, spaceBetween: 35 },
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-x-2 mb-6">
        <h2 className="head_35_bold text-head flex gap-x-3 items-center text-lg sm:text-xl lg:text-2xl">
          {collectionHeading}
          <span className={`text-2xl text-orange-500 hidden sm:block ${iconClassName}`}>
            <GiCelebrationFire />
          </span>
        </h2>
        <select className="border p-2 text-sm sm:text-base">
          <option>Default Sorting</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

      <div className="relative">
        {/* Prev Button */}
        <button
          className={`${prevButton} absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 border border-footer rounded-full flex justify-center items-center bg-white cursor-pointer`}
        >
          <span className="text-xl text-gray_00">{chevron[0].icon}</span>
        </button>

        {/* Next Button */}
        <button
          className={`${nextButton} absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 border border-footer rounded-full flex justify-center items-center bg-white cursor-pointer`}
        >
          <span className="text-xl text-gray_00">{chevron[1].icon}</span>
        </button>

        {/* Swiper */}
        <Swiper
          modules={[FreeMode, Navigation, Autoplay]}
          navigation={{
            prevEl: `.${prevButton}`,
            nextEl: `.${nextButton}`,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          freeMode={true}
          breakpoints={breakpoints}
          className="mySwiper"
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <Product
                imgSrc={producttwo}
                imgAlt={producttwo}
                catagory="Dresses"
                itemName="Hub Accent Mirror"
                itemPrice="29"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CollectionSlider;