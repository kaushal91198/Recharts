import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/apiInstance";

export const getDemandNSupply = createAsyncThunk(
  "demandNSupply/demandNSupplyList",
  async () => {
    const response: any = await getData("demandnsupply");
    return response.data.data;
  }
);

const initialState = {
  demandNSupplyListStatus: "loading",
  demandAndSupplydetail: [],
};

const DemandAndSupply = createSlice({
  name: "DemandAndSupply",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDemandNSupply.pending, (state) => {
        return {
          ...state,
          demandNSupplyListStatus: "loading",
        };
      })
      .addCase(getDemandNSupply.fulfilled, (state, { payload }) => {
        return {
          ...state,
          demandNSupplyListStatus: "success",
          demandAndSupplydetail: payload.demandAndSupplydetail,
        };
      })
      .addCase(getDemandNSupply.rejected, (state) => {
        return {
          ...state,
          demandNSupplyListStatus: "rejected",
        };
      });
  },
});

export const {} = DemandAndSupply.actions;

export default DemandAndSupply.reducer;
