import SettingButtonslice from "@/redux/app/features/SettingButton/SettingButtonSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    SeetingBar: SettingButtonslice,
  },
});