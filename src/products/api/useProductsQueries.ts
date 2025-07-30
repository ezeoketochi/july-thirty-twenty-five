import { useQuery } from "@tanstack/react-query";
import { ProductsQueryKeys } from "./productsQueryKey";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: [ProductsQueryKeys.productsKey],
    queryFn: async () => {
     const res =  await fetch("https://dummyjson.com/products")
        // .then((res) => res.json())
        // console.log(res.json());
        return res.json();
    },
  });
};
