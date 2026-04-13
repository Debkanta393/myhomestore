import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import {
  ALL_CART,
  ADD_CART,
  MERGE_CART,
  PRODUCT_FOR_CARTS,
  UPDATE_CART,
  DELETE_CART,
} from "../../api/apis";

const CART_KEY = "guest_cart";

// ─── LocalStorage Helpers ───────────────────────────────────────
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

// ─── Fetch Cart Items ────────────────────────────────────────────
// In cartSlice.js
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async ({ isAuthenticated }, { rejectWithValue }) => {
    if (isAuthenticated) {
      try {
        const res = await api.get(ALL_CART, { withCredentials: true });
        return { items: res.data.cart, isGuest: false };
      } catch (error) {
        return rejectWithValue(error.response?.data?.message);
      }
    } else {
      // Guest: load from localStorage then fetch product details
      const guestCart = loadGuestCart(); // [{ productId, quantity }]
      if (guestCart.length === 0) return { items: [], isGuest: true };

      try {
        const productIds = guestCart.map((item) => item.productId);
        console.log(productIds);
        // Fetch product details for all guest cart items
        const res = await api.post(PRODUCT_FOR_CARTS, { productIds });

        console.log(res);

        // Merge product details with quantity and price from localStorage
        const enrichedCart = guestCart.map((cartItem) => {
          const product = res.data.products.find(
            (p) => p._id === cartItem.productId,
          );
          return {
            id: cartItem.id,
            product: product || "",
            quantity: cartItem.totalMeterSquare,
            wastage: cartItem.wastage,
            totalPrice: cartItem.totalPrice,
            cartons: cartItem.cartonsRequired,
            areaSupplied: cartItem.areaSupplied,
            service: cartItem.selectedService,
          };
        });

        return { items: enrichedCart, isGuest: true };
      } catch (error) {
        return rejectWithValue("Failed to fetch guest cart products");
      }
    }
  },
);

// ─── Add to Cart ─────────────────────────────────────────────────
export const addCartItems = createAsyncThunk(
  "cart/addCartItems",
  async (
    {
      productId,
      id,
      isAuthenticated,
      totalMeterSquare,
      wastage,
      totalPrice,
      cartonsRequired,
      areaSupplied,
      selectedService,
    },
    { rejectWithValue },
  ) => {
    console.log(totalPrice);
    if (isAuthenticated) {
      try {
        const res = await api.post(
          ADD_CART,
          {
            productId,
            id,
            isAuthenticated,
            totalMeterSquare,
            wastage,
            totalPrice,
            cartonsRequired,
            areaSupplied,
            selectedService,
          },
          { withCredentials: true },
        );
        return { items: res.data.cart, isGuest: false };
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to add to cart",
        );
      }
    } else {
      const currentCart = loadGuestCart();
      const exists = currentCart.find(
        (item) =>
          item.productId === productId &&
          item.quantity === totalMeterSquare &&
          item.wastage === wastage,
      );
      let updatedCart;

      if (exists) {
        updatedCart = currentCart.map((item) =>
          item.productId === productId &&
          item.quantity === totalMeterSquare &&
          item.wastage === wastage
            ? {
                ...item,
                quantity: Number(item.quantity) + Number(totalMeterSquare),
                price: Number(item.price) + Number(totalPrice),
              }
            : item,
        );
      } else {
        updatedCart = [
          ...currentCart,
          {
            productId,
            id,
            isAuthenticated,
            totalMeterSquare,
            wastage,
            totalPrice,
            cartonsRequired,
            areaSupplied,
            selectedService,
            addedAt: new Date(),
          },
        ];
      }

      saveGuestCart(updatedCart);
      return { items: updatedCart, isGuest: true };
    }
  },
);

export const updateCartItems = createAsyncThunk(
  "/update/cart",
  async ({ product, isAuthenticated }, { rejectWithValue }) => {
    try {
      if (isAuthenticated) {
        const res = await api.put(
          UPDATE_CART,
          { product },
          { withCredentials: true },
        );

        return res.data;
      }

      let currentCart = loadGuestCart();

      const index = currentCart.findIndex(
        (item) => item.productId === product.productId,
      );

      if (index !== -1) {
        currentCart[index] = {
          ...currentCart[index],
          ...product,
          addedAt: new Date().toISOString(),
        };
      } else {
        currentCart.push({
          ...product,
          addedAt: new Date().toISOString(),
        });
      }

      saveGuestCart(currentCart);

      return currentCart;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  },
);

// ─── Add to Cart ─────────────────────────────────────────────────
export const removeCartItems = createAsyncThunk(
  "cart/deleteCart",
  async ({ productId, isAuthenticated }, { rejectWithValue }) => {
    console.log(productId);
    if (isAuthenticated) {
      try {
        const res = await api.post(
          DELETE_CART,
          { productId },
          {
            withCredentials: true,
          },
        );
        return { items: res.data.cart, isGuest: false };
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to remove from cart",
        );
      }
    } else {
      const currentCart = loadGuestCart();
      const updatedCart = currentCart.filter(
        (item) => !(String(item.id) == String(productId)),
      );

      console.log(updatedCart);

      saveGuestCart(updatedCart);
      return { items: updatedCart, isGuest: true };
    }
  },
);

// ─── Merge Guest Cart on Login ───────────────────────────────────
export const mergeCartOnLogin = createAsyncThunk(
  "cart/mergeOnLogin",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const guestCart = loadGuestCart();
      if (guestCart.length > 0) {
        await axios.post(MERGE_CART, { guestCart }, { withCredentials: true });
        localStorage.removeItem(CART_KEY); // clear guest cart after merge
      }
      // After merge, fetch fresh cart from DB
      dispatch(fetchCartItems({ isAuthenticated: true }));
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Merge failed");
    }
  },
);

// ─── Selectors ───────────────────────────────────────────────────
export const selectCartItems = (state) => state.cart.items ?? [];
export const selectCartCount = (state) => state.cart.items.length;
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0);
export const selectIsGuest = (state) => state.cart.isGuest;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

// ─── Slice ───────────────────────────────────────────────────────
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadGuestCart(), // preload guest cart on app start
    totalItems: 0,
    isGuest: true,
    loading: false,
    error: null,
  },
  reducers: {
    // Manually clear cart in state (e.g. on logout)
    clearGuestCart(state) {
      state.items = [];
      state.totalItems = 0;
      localStorage.removeItem(CART_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      // ── fetchCartItems ──
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.isGuest = action.payload.isGuest;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ── addCartItems ──
      .addCase(addCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.items.length;
        state.isGuest = action.payload.isGuest;
      })
      .addCase(addCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ── updatecartItems ──
      .addCase(updateCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.items.length;
        state.isGuest = action.payload.isGuest;
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ── removeCartItems ──
      .addCase(removeCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.items.length;
        state.isGuest = action.payload.isGuest;
      })
      .addCase(removeCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ── mergeCartOnLogin ──
      .addCase(mergeCartOnLogin.fulfilled, (state) => {
        state.isGuest = false;
      });
  },
});

export const { clearGuestCart } = cartSlice.actions;
export default cartSlice.reducer;
