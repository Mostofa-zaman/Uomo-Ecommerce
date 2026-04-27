import Product from "@/component/common/Product";
import React, { useEffect, useRef } from "react";
import mixitup from "mixitup";
import Button from "@/component/common/Button";
import Container from "@/component/common/Container";
import useAllProductThirty from "@/coustomHook/useAllProductThirty";
import { homeTrendyFilters } from "@/helper/projectArrayObj";
import ProductSkeleton from "@/component/common/skeleton/ProductSkeleton";
import NotFound from "@/page/NotFound";
import { Link } from "react-router-dom";

const Products = () => {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);

  const {
    data: productData,
    isLoading: productLoading,
    isError: prductError,
  } = useAllProductThirty();

  useEffect(() => {
    if (containerRef.current && productData?.length > 0 && !mixerRef.current) {
      mixerRef.current = mixitup(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    }

    // Cleanup
    return () => {
      if (mixerRef.current) {
        mixerRef.current.destroy();
        mixerRef.current = null;
      }
    };
  }, [productData]);

  if (productLoading) {
    return (
      <section className="  mt-[150px] md:mt-[178px] lg:mt-48.5">
        <Container>
          <div className="   grid lg:grid-cols-4 grid-cols-2 md:gap-7.5 gap-3.5  ">
            {productData?.map((_, index) => {
              return <ProductSkeleton key={index} />;
            })}
          </div>
        </Container>
      </section>
    );
  }
  if (prductError) {
    return <NotFound />;
  }

  return (
    <>
      <section className=" mt-[38px] md:mt-[60px] lg:mt-23.5">
        <Container>
          <div className="heading text-center">
            <h2 className="lg:head_35_regular font-medium text-[26px]  text-head">
              OUR TRENDY{" "}
              <span className="lg:head_35_bold font-bold text-[26px] text-head">
                PRODUCTS
              </span>
            </h2>
            <div className="flex flex-wrap justify-center items-center lg:gap-10 gap-4 mt-4 lg:mt-7.75">
              {homeTrendyFilters.map((items, index) => {
                return (
                  <button
                    key={index}
                    data-filter={items.filter}
                    className="lg:texts_16_medium text-[14px] text-second hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
                  >
                    {items.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div
            ref={containerRef}
            className="mt-5.5 grid lg:grid-cols-4 grid-cols-2   md:gap-7.5 gap-3.5 "
          >
            {productData?.map((items, index) => {
              let categoryClasses = "all";

              if (items?.rating > 4) {
                categoryClasses += " newArrivals";
              }

              if (items?.stock > 10) {
                categoryClasses += " bestSeller";
              }

              if (items?.rating >= 4.5) {
                categoryClasses += " toprating";
              }

              return (
                <div key={index} className={`mix ${categoryClasses}`}>
                  <Product
                    imgSrc={items?.thumbnail}
                    imgAlt={items?.title}
                    catagory={items?.category}
                    itemName={items?.title}
                    itemPrice={items?.price}
                    id={items?.id}
                    product={items}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-10.5 text-center">
            <Link to={"/shop"}>
              <Button
                className={"hover:after:w-24"}
                btnText={"SEE ALL PRODUCT"}
              />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
