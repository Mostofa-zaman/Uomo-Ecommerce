import { allProuct } from "@/api/apiInstans";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useAllProduct = () => {
  return useQuery({ queryKey: ["all-products"], queryFn: allProuct });
};

export default useAllProduct;
