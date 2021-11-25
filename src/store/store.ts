import orderSlice from "./reducers/ordersReducer";
import cartReducer from "./reducers/cartReducer";
import { AppDispatch, RootState } from "./types";
import thunk from "redux-thunk";
import {
  configureStore,
  createImmutableStateInvariantMiddleware,
} from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsReducer from "./reducers/productsReducer";

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ["ignoredPath", "ignoredNested.one", "ignoredNested.two"],
});

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    orders: orderSlice,
  },
  middleware: [immutableInvariantMiddleware, thunk],
  devTools: true,
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
