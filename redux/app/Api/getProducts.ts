import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const GetProductsSlice=createApi({
    reducerPath:"Products",
    baseQuery:fetchBaseQuery({baseUrl:"https://ecommerceflaskapi.vercel.app/api/v1/"}),
    tagTypes:[],
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(type)=>type
        })
    })
})

export const {useGetProductsQuery}=GetProductsSlice;