import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/apiInstance";

export const getCustomerBase = createAsyncThunk(
  "customerBase/customerBaseList",
  async () => {
    const response: any = await getData("customerBase");
    return response.data.data;
  }
);

const initialState = {
  customerBaseListStatus: "loading",
  customerBasedetail: [],
};

const CustomerBaseSlice = createSlice({
  name: "CustomerBase",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCustomerBase.pending, (state) => {
        return {
          ...state,
          customerBaseListStatus: "loading",
        };
      })
      .addCase(getCustomerBase.fulfilled, (state, { payload }) => {
        return {
          ...state,
          customerBaseListStatus: "success",
          customerBasedetail: payload.customerBasedetail,
        };
      })
      .addCase(getCustomerBase.rejected, (state) => {
        return {
          ...state,
          customerBaseListStatus: "rejected",
        };
      });
  },
});

export const {} = CustomerBaseSlice.actions;

export default CustomerBaseSlice.reducer;
