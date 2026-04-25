import { allProductThirty } from "@/api/apiInstans";
import { useQuery } from "@tanstack/react-query";

const useAllProductThirty = () => {
  return useQuery({ queryKey: ["allproduct"], queryFn: allProductThirty });
};

export default useAllProductThirty;
