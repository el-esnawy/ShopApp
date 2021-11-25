import { ProductType } from "../../models/Product";
import PRODUCTS from "../../data/dummy-data";
import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../types";

const initialState: productState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteUserProduct: (
      state,
      action: {
        payload: string;
      },
    ) => {
      state.userProducts = state.userProducts.filter(
        (product) => product.id !== action.payload,
      );
      state.availableProducts = state.availableProducts.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export const { deleteUserProduct } = productSlice.actions;
export default productSlice.reducer;
