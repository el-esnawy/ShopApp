import { ProductType } from "../../models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cartType } from "../types";

const initialState: cartType = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const product = state.items.find((prod) => {
        if (prod.id === action.payload.id) return true;
      });

      if (!product) {
        const newProduct = action.payload;
        newProduct.quantityInCart = 1;
        state.items.push(newProduct);
        state.totalAmount += newProduct.price;
      } else {
        product.quantityInCart += 1;
        const index = state.items.findIndex((prod) => {
          if (prod.id === action.payload.id) return true;
        });
        state.items[index] = product;
        state.totalAmount += product.price;
      }
      state.totalAmount = Math.round(state.totalAmount * 100) / 100;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item: ProductType = state.items.find((prod) => {
        if (prod.id === id) return true;
      });
      const index: number = state.items.findIndex((prod) => {
        if (prod.id === id) return true;
      });

      if (!item?.quantityInCart) return;

      if (item.quantityInCart === 1) {
        state.items.splice(index, 1);
        state.totalAmount -= item.price;
      } else if (item.quantityInCart !== 0) {
        state.items[index].quantityInCart -= 1;
        state.totalAmount -= item.price;
      }

      state.totalAmount = Math.round(state.totalAmount * 100) / 100;
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter((item: ProductType) => {
        state.totalAmount = 0;
        if (item.id !== action.payload) {
          state.totalAmount += item.price * item.quantityInCart;
          return true;
        } else {
          return false;
        }
      });
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, deleteFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
