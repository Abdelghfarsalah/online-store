import SettingButtonslice from "@/redux/app/features/SettingButton/SettingButtonSlice";
import { configureStore } from "@reduxjs/toolkit";
import { GetProductsSlice } from "./Api/getProducts";

export const store = configureStore({
  reducer: {
    SeetingBar: SettingButtonslice,
    [GetProductsSlice.reducerPath]: GetProductsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetProductsSlice.middleware),
});