import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/apiInstance";

export const getFinancials = createAsyncThunk(
  "financials/financials",
  async () => {
    const response: any = await getData("financial");
    return response.data.data;
  }
);

const initialState = {
  financialListStatus: "loading",
  Finanacialsdetail: [],
};

const FinancialSlice = createSlice({
  name: "financials",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFinancials.pending, (state) => {
        return {
          ...state,
          financialListStatus: "loading",
        };
      })
      .addCase(getFinancials.fulfilled, (state, { payload }) => {
        return {
          ...state,
          financialListStatus: "success",
          Finanacialsdetail: payload.Finanacialsdetail,
        };
      })
      .addCase(getFinancials.rejected, (state) => {
        return {
          ...state,
          financialListStatus: "rejected",
        };
      });
  },
});

export const {} = FinancialSlice.actions;

export default FinancialSlice.reducer;
