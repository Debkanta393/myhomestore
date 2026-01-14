import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../slice/slice";

const store = configureStore({
  reducer: {
    activeTab: sliceReducer
  }
});

export default store;
