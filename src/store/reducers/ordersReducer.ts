import { createSlice } from "@reduxjs/toolkit";
import { orderSliceType, cartType } from "../types";

const initialState: orderSliceType = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrder: (state, action: { payload: cartType }) => {
      const newOrder = {
        id: new Date().toString(),
        date: new Date(),
        items: action.payload.items,
        amount: action.payload.totalAmount,
      };
      state.orders.push(newOrder);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
