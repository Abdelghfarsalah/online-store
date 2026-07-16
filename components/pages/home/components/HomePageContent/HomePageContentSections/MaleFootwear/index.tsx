"use client"
import ProductCollectionCard from "@/components/shared/ProductCollectionCard";
import { useGetProductsQuery } from "@/redux/app/Api/getProducts";

export default function MaleFootwearSection(){
   const {
  data,
} = useGetProductsQuery("malefootwear");
 
    return <ProductCollectionCard title="Male Footwear" products={data} sectionPath="malefootwear" tagLabel="Brand" />
}