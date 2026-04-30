import Top from "@/component/shopMain/shopSingle/Top";
import Tabs_desc from "@/component/shopMain/shopSingle/Tabs_desc";
import Trend_product from "@/component/shopMain/shopSingle/Trend_product";
import React from "react";
import { useParams } from "react-router-dom";
import useAllProduct from "@/coustomHook/useAllProduct";

const ShopSinglePg = () => {
  const { id } = useParams();

  const {
    data: allProductData,
    isError: allProductDataError,
    isLoading: allProcutDataLoading,
  } = useAllProduct();

  const productItems = allProductData?.find(
    (items) => items?.id === Number(id),
  );

  return (
    <>
      <Top product={productItems} />
      <Tabs_desc product={productItems} />
      <Trend_product  />
    </>
  );
};

export default ShopSinglePg;
