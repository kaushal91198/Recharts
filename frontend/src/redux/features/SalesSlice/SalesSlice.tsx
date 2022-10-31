import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/apiInstance";

export const getSales = createAsyncThunk("sales/salesList", async () => {
  const response: any = await getData("sales");
  return response.data.data;
});

const initialState = {
  salesListStatus: "loading",
  salesdetail: [],
};

const SalesSlice = createSlice({
  name: "Sales",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSales.pending, (state) => {
        return {
          ...state,
          salesListStatus: "loading",
        };
      })
      .addCase(getSales.fulfilled, (state, { payload }) => {
        return {
          ...state,
          salesListStatus: "success",
          salesdetail: payload.salesdetail,
        };
      })
      .addCase(getSales.rejected, (state) => {
        return {
          ...state,
          salesListStatus: "rejected",
        };
      });
  },
});

export const {} = SalesSlice.actions;

export default SalesSlice.reducer;
