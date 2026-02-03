import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UPLOAD_PRODUCT, ALL_PRODUCT,PRODUCT_BY_ID, PRODUCT_BY_TYPE_NAME } from "../api/apis";
import api from "../api/axios";

const initialState = {
  upload: {
    loading: false,
    success: false,
    error: null,
  },
  list: {
    loading: false,
    data: [],
    error: null,
    fetched: false
  },
};

export const uploadProduct = createAsyncThunk(
  "product/uploadProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const { data } = await api.post(UPLOAD_PRODUCT, productData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const getAllProducts = createAsyncThunk(
  "product/getallProduct",
  async (_, { rejectWithValue }) => {
    console.log("THUNK HIT");
    console.log(ALL_PRODUCT);
    try {
      const data  = await api.get(ALL_PRODUCT);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (proId, { rejectWithValue }) => {
    try {
      console.log("Product id:", proId)
      const data  = await api.post(PRODUCT_BY_ID, proId);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);


export const getProductByTypeName = createAsyncThunk(
  "product/getProductbyTypeandBrand",
  async ({type, productName}, { rejectWithValue }) => {
    try {
      const productData={type, productName}
      console.log(productData)
      console.log("Product id:", productData)
      const data  = await api.post(PRODUCT_BY_TYPE_NAME, productData);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadProduct.pending, (state) => {
        state.upload.loading = true;
        state.upload.success = false;
      })
      .addCase(uploadProduct.fulfilled, (state) => {
        state.upload.loading = false;
        state.upload.success = true;
      })
      .addCase(uploadProduct.rejected, (state, action) => {
        state.upload.loading = false;
        state.upload.error = action.payload;
      });

    builder
      .addCase(getAllProducts.pending, (state) => {
        state.list.loading = true
        state.list.fetched=false
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.fetched=true
        state.list.data = action.payload.data.products;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.list.loading = false;
        state.list.fetched=false
        state.list.error = action.payload;
      });

      builder
      .addCase(getProductById.pending, (state) => {
        state.list.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.data = action.payload.data;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload;
      });

      builder
      .addCase(getProductByTypeName.pending, (state) => {
        state.list.loading = true;
      })
      .addCase(getProductByTypeName.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.data = action.payload.data;
      })
      .addCase(getProductByTypeName.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload;
      });
  },
});

export default productSlice.reducer;
