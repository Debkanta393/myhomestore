import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../features/slice";
import productReducer from "../features/product/product"
import userReducer from "../features/user/user"
import cartReducer from "../features/cart/cart"
import pageReducer from "../features/page/page"



const store = configureStore({
  reducer: {
    activeTab: sliceReducer,
    product: productReducer,
    auth: userReducer,
    cart: cartReducer,
    page: pageReducer
  }
});

export default store;
