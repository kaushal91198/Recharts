import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/apiInstance";

export const getProducts = createAsyncThunk("product/productList", async () => {
  const response: any = await getData("product");
  return response.data.data;
});

export const getProductCategories = createAsyncThunk(
  "product/productCategoriesList",
  async () => {
    const response: any = await getData("product");
    return response.data.data;
  }
);

const initialState = {
  productListStatus: "loading",
  categoryListStatus: "loading",
  productdetails: [],
  productCategorydetails: [],
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        return {
          ...state,
          productListStatus: "loading",
        };
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          productListStatus: "success",
          productdetails: payload.productdetail,
        };
      })
      .addCase(getProducts.rejected, (state) => {
        return {
          ...state,
          productListStatus: "rejected",
        };
      })
      .addCase(getProductCategories.pending, (state) => {
        return {
          ...state,
          categoryListStatus: "loading",
        };
      })
      .addCase(getProductCategories.fulfilled, (state, { payload }) => {
        return {
          ...state,
          categoryListStatus: "success",
          productCategorydetails: payload.productdetail,
        };
      })
      .addCase(getProductCategories.rejected, (state) => {
        return {
          ...state,
          categoryListStatus: "rejected",
        };
      });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
