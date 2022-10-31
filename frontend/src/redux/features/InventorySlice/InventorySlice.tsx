import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/apiInstance";

export const getInventory = createAsyncThunk(
  "inventory/inventoryList",
  async () => {
    const response: any = await getData("inventory");
    return response.data.data;
  }
);

const initialState = {
  inventoryListStatus: "loading",
  InventoryDetails: [],
};

const InventorySlice = createSlice({
  name: "Inventory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getInventory.pending, (state) => {
        return {
          ...state,
          inventoryListStatus: "loading",
        };
      })
      .addCase(getInventory.fulfilled, (state, { payload }) => {
        return {
          ...state,
          inventoryListStatus: "success",
          InventoryDetails: payload.InventoryDetails,
        };
      })
      .addCase(getInventory.rejected, (state) => {
        return {
          ...state,
          inventoryListStatus: "rejected",
        };
      });
  },
});

export const {} = InventorySlice.actions;

export default InventorySlice.reducer;
