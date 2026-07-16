"use client"
import ProductCollectionCard from "@/components/shared/ProductCollectionCard";
import { useGetProductsQuery } from "@/redux/app/Api/getProducts";

export default function MobilesSection(){
   const {
  data,
//   error,
//   isLoading,
//   isFetching,
//   isSuccess,
//   isError,
//   isUninitialized,
//   refetch,
//   fulfilledTimeStamp,
//   requestId,
//   status,
} = useGetProductsQuery("mobiles");
 
    return <ProductCollectionCard title="Mobiles" products={data}>
    
    </ProductCollectionCard>
}