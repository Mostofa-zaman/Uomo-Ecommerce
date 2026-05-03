import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import React from "react";
import image from "@/assets/images/uomoImg.png";
import useAllProductThirty from "@/coustomHook/useAllProductThirty";
import ProductImageSkeleton from "@/component/common/skeleton/ProductImageSkeleton";
import ProductSkeleton from "@/component/common/skeleton/ProductSkeleton";

const Uomo = () => {
  // for api
  const {
    data: productData,
    isLoading: productLoading,
    isError: prductError,
  } = useAllProductThirty();

  if (productLoading) {
    return (
      <section className="mt-[80px] lg:mt-[115px]">
        <Container>
          <div className=" grid grid-cols-3 lg:grid-cols-6 gap-[15px]  lg:gap-[6px]">
            {productData?.slice(6, 18)?.map((_, index) => {
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
      <section className="mt-[50px] lg:mt-[81px]">
        <Container>
          <div className="">
            <h2 className="head_35_regular text-bold text-center">@UOMO</h2>
            <div className="mt-8.5 grid grid-cols-3 lg:grid-cols-6 gap-[15px]  lg:gap-[6px]">
              {productData?.slice(6, 18)?.map((items, index) => {
                return (
                  <figure key={index}>
                    <Images
                      imgSrc={items?.thumbnail}
                      imgAlt={items?.thumbnail}
                      className={"w-full rounded"}
                    />
                  </figure>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Uomo;
