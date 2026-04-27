import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef } from "react";
import producttwo from "@/assets/images/productstwo.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import allIcons from "@/helper/iconProvider";
import useAllProductThirty from "@/coustomHook/useAllProductThirty";
import ProductSkeleton from "@/component/common/skeleton/ProductSkeleton";

const LimitedEdition = () => {
  const { chevron } = allIcons;

  const swiperRef = useRef(null);

  // for api data
  const {
    data: productData,
    isLoading: productLoading,
    isError: prductError,
  } = useAllProductThirty();

  if (productLoading) {
    return (
      <section className="mt-[37px] lg:mt-22.75">
        <Container>
          <div className="hidden lg:block ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[30px]">
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          </div>
          <div className="hidden lg:hidden md:block">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[30px]">
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          </div>
          <div className="block lg:hidden md:hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[30px]">
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className=" mt-[37px] lg:mt-22.75">
        <Container>
          <div className="text-center">
            <h2 className="head_35_regular text-head">
              LIMITED <span className="head_35_bold text-head">EDITION</span>
            </h2>
          </div>
          <div className=" hidden lg:block mt-8.25 flex flex-row gap-7.5 relative">
            <button className="lg-swiper-button-prev absolute left-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[0].icon}</span>
            </button>
            <button className="lg-swiper-button-next absolute right-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer ">
              <span className="text-xl text-second">{chevron[1].icon}</span>
            </button>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".lg-swiper-button-prev",
                nextEl: ".lg-swiper-button-next",
              }}
            >
              {productData?.map((items, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product
                      imgSrc={items?.thumbnail}
                      imgAlt={items?.thumbnail}
                      catagory={items?.catagory}
                      itemName={items?.title}
                      itemPrice={items?.price}
                      id={items?.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className=" lg:hidden md:hidden block mt-3 flex flex-row gap-7.5 relative">
            <button className="xs-swiper-button-prev absolute left-[-10px]  top-[30%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[0].icon}</span>
            </button>
            <button className="xs-swiper-button-next absolute right-[-10px]  top-[30%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[1].icon}</span>
            </button>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="z-0"
              navigation={{
                prevEl: ".xs-swiper-button-prev",
                nextEl: ".xs-swiper-button-next",
              }}
            >
              {productData?.map((items, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product
                      imgSrc={items?.thumbnail}
                      imgAlt={items?.thumbnail}
                      catagory={items?.catagory}
                      itemName={items?.title}
                      itemPrice={items?.price}
                      id={items?.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className=" hidden  md:block lg:hidden mt-5 flex flex-row gap-7.5 relative">
            <button className="md-swiper-button-prev absolute left-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[0].icon}</span>
            </button>
            <button className="md-swiper-button-next absolute right-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer ">
              <span className="text-xl text-second">{chevron[1].icon}</span>
            </button>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".md-swiper-button-prev",
                nextEl: ".md-swiper-button-next",
              }}
            >
              {productData?.map((items, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product
                      imgSrc={items?.thumbnail}
                      imgAlt={items?.thumbnail}
                      catagory={items?.catagory}
                      itemName={items?.title}
                      itemPrice={items?.price}
                      id={items?.id}
                      product={items}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LimitedEdition;
