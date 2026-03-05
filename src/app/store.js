import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../features/slice";
import productReducer from "../features/product/product"



const store = configureStore({
  reducer: {
    activeTab: sliceReducer,
    product: productReducer
  }
});

export default store;
