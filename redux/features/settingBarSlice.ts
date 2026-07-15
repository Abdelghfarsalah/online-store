import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingBarState {
  Show: boolean;
}

const initialState: SettingBarState = {
  Show: false,
};

const settingBarSlice = createSlice({
  name: "SeetingBar",
  initialState,
  reducers: {
    toggleSettingBar: (state) => {
      state.Show = !state.Show;
    },
    setSettingBar: (state, action: PayloadAction<boolean>) => {
      state.Show = action.payload;
    },
  },
});

export const { toggleSettingBar, setSettingBar } = settingBarSlice.actions;
export default settingBarSlice.reducer;
