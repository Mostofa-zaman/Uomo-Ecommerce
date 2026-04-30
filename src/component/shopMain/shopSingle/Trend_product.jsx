import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React from "react";
import useAllProduct from "@/coustomHook/useAllProduct";

const Trend_product = () => {
  const { data: allProductData, isLoading: allProductDataLoading } =
    useAllProduct();

  const relatedProducts = allProductData
    ?.filter((item) => item.id >= 167 && item.id <= 171)
    ?.slice(0, 4);

  if (allProductDataLoading) return null;

  return (
    <div className="mt-9.5 mb-25 hidden lg:block">
      <Container>
        <h3 className="head_26_regular text-head">
          RELATED <span className="head_26_bold">PRODUCTS</span>
        </h3>
        <div className="mt-8.5 flex gap-x-7.5">
          {relatedProducts?.map((item) => (
            <Product
              key={item?.id}
              catagory={item?.category}
              imgSrc={item?.thumbnail}
              itemName={item?.title}
              itemPrice={item?.price}
              id={item?.id}
              product={item}
              discountPrice={
                item?.discountPercentage
                  ? (
                      item?.price -
                      (item?.price * item?.discountPercentage) / 100
                    ).toFixed(2)
                  : null
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Trend_product;
