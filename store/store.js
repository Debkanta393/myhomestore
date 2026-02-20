import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../service/slice";
import productReducer from "../service/product"



const store = configureStore({
  reducer: {
    activeTab: sliceReducer,
    product: productReducer
  }
});

export default store;
