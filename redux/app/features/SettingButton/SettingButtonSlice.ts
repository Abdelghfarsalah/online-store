import { SettingButtonSliceState } from "@/types/redux";
import { createSlice } from "@reduxjs/toolkit";


const initialState: SettingButtonSliceState = {
  Show: false,
  PrimaryColor:"#14B8A6"
};

const SettingButtonslice = createSlice({
  name: "SettingButtonslice",
  initialState,
  reducers: {
    ShowSettingbar:(state)=>{
        state.Show=!state.Show;
    },
    hideSettingBar:(state)=>{
        state.Show=false;
    },

    ChangeColor:(state,action)=>{
        state.PrimaryColor=action.payload;
    }
  },
});

export const {
   ShowSettingbar: ShowSettingbar,
   hideSettingBar: hideSettingBar,
   ChangeColor: ChangeColor,
} = SettingButtonslice.actions;

export default SettingButtonslice.reducer;