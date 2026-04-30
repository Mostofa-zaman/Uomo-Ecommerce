import { allProuct } from "@/api/apiInstans";
import { useQuery } from "@tanstack/react-query";

const useAllProduct = () => {
  return useQuery({ queryKey: ["all-products"], queryFn: allProuct });
};

export default useAllProduct;
