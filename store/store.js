import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../slice/slice";
import productReducer from "../slice/product-slice"



const store = configureStore({
  reducer: {
    activeTab: sliceReducer,
    product: productReducer
  }
});

export default store;
