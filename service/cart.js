// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   ALL_CART,
//   ADD_CART,
//   UPDATE_CART,
//   DELETE_CART,
//   CLEAR_CART,
// } from "../api/apis";
// import api from "../api/axios";

// const initialState = {
//   loading: false,
//   error: false,
//   data: [],
// };

// export const getCartItems = createAsyncThunk(
//   "/allCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get(ALL_CART);
//       return response;
//       console.log(response);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );


// export const addCartItems = createAsyncThunk(
//   "product/addToCart",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await api.post(ADD_CART, {
//         productId,
//         quantity: 1,
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to add to cart"
//       );
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCartItems.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(getCartItems.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = false;
//         state.data = action.payload.value;
//       })
//       .addCase(getCartItems.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.value;
//       });

//     builder
//       .addCase(addCartItems.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(addCartItems.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = false;
//         state.data = action.payload.value;
//       })
//       .addCase(addCartItems.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.value;
//       });
//   },
// });

// export default cartSlice.reducer;





import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CART_KEY = "guest_cart";

const loadGuestCart = () => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveGuestCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addCartItems = createAsyncThunk(
  "cart/addCartItems",
  async ({ productId, isAuthenticated }, { getState, rejectWithValue }) => {
    if (isAuthenticated) {
      const res = await axios.post("/api/cart/add", { productId }, { withCredentials: true });
      return { items: res.data.cart, isGuest: false };
    } else {
      const currentCart = loadGuestCart();
      const exists = currentCart.find((item) => item.productId === productId);
      let updatedCart;
      if (exists) {
        updatedCart = currentCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...currentCart, { productId, quantity: 1, addedAt: new Date() }];
      }
      saveGuestCart(updatedCart);
      return { items: updatedCart, isGuest: true };
    }
  }
);

// Merge guest cart into DB after login
export const mergeCartOnLogin = createAsyncThunk(
  "cart/mergeOnLogin",
  async (_, { dispatch }) => {
    const guestCart = loadGuestCart();
    if (guestCart.length > 0) {
      await axios.post("/api/cart/merge", { guestCart }, { withCredentials: true });
      localStorage.removeItem(CART_KEY); // Clear guest cart after merge
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: loadGuestCart(), loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCartItems.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(mergeCartOnLogin.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
