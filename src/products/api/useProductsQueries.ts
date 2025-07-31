import { useQuery } from "@tanstack/react-query";
import { ProductsQueryKeys } from "./productsQueryKey";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: [ProductsQueryKeys.productsKey],
    queryFn: async () => {
     const res =  await fetch("https://dummyjson.com/products")
        return res.json();
    },
  });
};


export const useFetchProductsbyId = (productId: string) => {
  return useQuery({
    queryKey: [ProductsQueryKeys.productsKey, productId],
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      return res.json();
    },
  });
}