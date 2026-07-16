"use client"
import ProductCollectionCard from "@/components/shared/ProductCollectionCard";
import { useGetProductsQuery } from "@/redux/app/Api/getProducts";

export default function BooksSection(){
   const {
  data,
} = useGetProductsQuery("books");
 
    return <ProductCollectionCard title="Books" products={data} sectionPath="books" tagLabel="Book" />
}