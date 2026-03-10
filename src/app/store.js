import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../features/slice";
import productReducer from "../features/product/product"
import userReducer from "../features/user/user"
import cartReducer from "../features/cart/cart"



const store = configureStore({
  reducer: {
    activeTab: sliceReducer,
    product: productReducer,
    auth: userReducer,
    cart: cartReducer
  }
});

export default store;
