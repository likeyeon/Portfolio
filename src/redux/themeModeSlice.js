import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeModeSlice.actions;
export default themeModeSlice;
