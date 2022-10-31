import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CustomerBaseSlice from "../features/CustomerBaseSlice/CustomerBaseSlice";
import DemandAndSupply from "../features/DemandAndSupply/DemandAndSupply";
import FinancialSlice from "../features/FinancialSlice/FinancialSlice";
import InventorySlice from "../features/InventorySlice/InventorySlice";
import ProductSlice from "../features/ProductSlice/ProductSlice";
import SalesSlice from "../features/SalesSlice/SalesSlice";
import UIControllerSlice from "../features/UIControllerSlice/UIControllerSlice";

export const store = configureStore({
  reducer: {
    UIController: UIControllerSlice,
    Products: ProductSlice,
    Sales: SalesSlice,
    Customerbase: CustomerBaseSlice,
    Financial: FinancialSlice,
    demandNSupply: DemandAndSupply,
    inventory: InventorySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
