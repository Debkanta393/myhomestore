import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabSelected: "flooring"
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setTabSelected: (state, action) => {
      state.tabSelected = action.payload;
    }
  }
});

export const { setTabSelected } = slice.actions;
export default slice.reducer;
