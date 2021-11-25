import store from "../store";

export interface productState {
  availableProducts: ProductType[];
  userProducts: ProductType[];
}

export interface orderType {
  id: string;
  items: ProductType[];
  date: Date;
  amount: number;
}

export interface orderSliceType {
  orders: orderType[];
}

export interface cartType {
  items: ProductType[];
  totalAmount: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
